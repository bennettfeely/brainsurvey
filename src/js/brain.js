@import "./WebGL.min.js";
@import "./_settings.js";
@import "./_regions.js";
@import "./_jsonp.js";

var html = document.querySelector("html");
var brain_wrapper = document.querySelector(".brain-wrapper");

init();

function init() {
	// Navigate to correct page
	route();

	// Prevent transitions from happening before page is setup
	window.onload = document.querySelector("body").classList.remove("preload");

	// Warnings
	if (WEBGL.isWebGLAvailable() === false) {
		warning(
			"Your web browser or graphics card doesn't support WebGL. Try another device or browser."
		);
	} else {
		updateStatus("Loading model");
	}

	// Load any settings in localstorage
	if (settings.autosave == true) {
		loadSettings();
	}
}

function route() {
	var path_name = window.location.pathname;

	initBrain();
	initSettings();

	// This can be improved 1000%
	if (path_name !== "/") {
		Object.keys(regions_obj).forEach(function(key) {
			if ("/" + regions_obj[key].path == path_name) {
				switchRegion(key);
			}
		});
	}
}

function initBrain() {
	var canvasWidth = brain_wrapper.offsetWidth;
	var canvasHeight = brain_wrapper.offsetHeight;

	// Setup Camera
	camera = new THREE.PerspectiveCamera(
		50,
		brain_wrapper.offsetWidth / brain_wrapper.offsetHeight,
		0.1,
		1000
	);
	camera.position.set(0, 5, 25);

	// Setup controls
	controls = new THREE.OrbitControls(camera, brain_wrapper);
	controls.enableZoom = settings.zoom;
	controls.enablePan = settings.pan;
	controls.autoRotate = settings.orbit;
	controls.autoRotateSpeed = settings.orbit_speed;

	// Stop autorotating when there is an interaction
	controls.addEventListener("start", function() {
		controls.autoRotate = false;

		document.querySelector(".orbit-toggle input").checked = false;
	});

	// Origin
	controls.target.set(0, 0, 0);
	controls.update();

	// Set the scene
	scene = new THREE.Scene();

	// Lighting
	var light = new THREE.HemisphereLight(0xff9999, 0.8);
	scene.add(light);
	var directionalLight = new THREE.DirectionalLight(0xafbfff, 0.5);
	directionalLight.position.set(0, 10, 0);
	scene.add(directionalLight);

	// Load manager
	var brain_manager = new THREE.LoadingManager();
	brain_manager.onStart = function(url, itemsLoaded, itemsTotal) {
		updateStatus("Receiving data (" + itemsLoaded + "/" + itemsTotal + ")");
	};

	brain_manager.onLoad = function() {
		updateStatus("Rendering brain");
	};

	brain_manager.onProgress = function(url, itemsLoaded, itemsTotal) {
		// Sometimes it will display 4/3 items loaded, this is a fix
		if (itemsLoaded > itemsTotal) {
			var itemsLoaded = itemsTotal;
		}

		updateStatus("Loading brain (" + itemsLoaded + "/" + itemsTotal + ")");
	};

	brain_manager.onError = function(url) {
		updateStatus("Error loading brain");
	};

	var loader = new THREE.GLTFLoader(brain_manager);
	loader.load(
		'models/' + settings.brain_model_path,
		function(gltf) {
			i = 0;
			gltf.scene.traverse(function(mesh) {
				if (mesh.isMesh) {
					i++;
					// Global mesh styles
					mesh.material.roughness = settings.brain.roughness;
					mesh.material.metalness = settings.brain.metalness;
					mesh.material.wireframe = settings.brain.wireframe;
					mesh.material.color.setStyle(settings.brain.default_color);
					mesh.material.side = THREE.DoubleSide;

					// Create separate material instance and local mesh styles
					mesh.material = mesh.material.clone();

					// Explode brain regions
					if (settings.brain.explode > 0) {
						mesh.geometry.computeBoundingSphere();

						var x = mesh.geometry.boundingSphere.center.x;
						var y = mesh.geometry.boundingSphere.center.y;
						var z = mesh.geometry.boundingSphere.center.z;

						mesh.position.set(
							x * settings.brain.explode,
							y * settings.brain.explode,
							z * settings.brain.explode
						);
					}

					// Add mesh object to regions object
					// TODO: is this necessary?
					regions_obj[mesh.name].mesh = mesh;

					// We're done traversing
					if (i == Object.keys(regions_obj).length) {
						setupRegionsFilter();
					}
				}
			});

			// Set position of brain with offsets
			gltf.scene.position.set(
				settings.brain.offset.x,
				settings.brain.offset.y,
				settings.brain.offset.z
			);

			scene.add(gltf.scene);

			animate();
		},
		function(xhr) {
			// if (xhr.total !== 0) {
			// 	var pct = (xhr.loaded / xhr.total) * 100;
			// 	updateStatus("Loading brain model " + pct + "%");
			// }
		},
		function(error) {
			console.log(error);
		}
	);

	// Render the canvas
	renderer = new THREE.WebGLRenderer({
		alpha: true,
		antialias: true,
		side: THREE.DoubleSide
	});
	renderer.setPixelRatio(window.devicePixelRatio);

	setCanvasSize();

	// Rendering settings
	renderer.gammaOutput = true;

	// Add canvas to page
	brain_wrapper.appendChild(renderer.domElement);

	// Detect window resizing and resize canvas
	window.addEventListener("resize", setCanvasSize, false);
}

function setCanvasSize() {
	var brain_wrapper = document.querySelector(".brain-wrapper");

	camera.aspect = brain_wrapper.offsetWidth / brain_wrapper.offsetHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(brain_wrapper.offsetWidth, brain_wrapper.offsetHeight);
}

function animate() {
	requestAnimationFrame(animate);

	controls.update();

	renderer.render(scene, camera);
}

function setupRegionsFilter() {
	var regions_filter = document.querySelector(".regions-filter");
	var choices = new Choices(regions_filter, {
		itemSelectText: "Select",
		noResultsText: "No matching brain regions",
		placeholder: true,
		placeholderValue: "Filter brain regions...",
		searchPlaceholderValue: "Filter brain regions...",
		searchResultLimit: 3
	});

	regions_filter.addEventListener(
		"choice",
		function(e) {
			switchRegion(e.detail.choice.value);
		},
		false
	);
}

function switchRegion(region_id) {
	var target_obj = regions_obj[region_id];

	// Change the URL
	history.pushState(null, null, "/" + target_obj.path);

	// Change page class
	document
		.querySelector("html")
		.classList.add("has-region-content", "has-content");

	// Rerender the page
	renderer.render(scene, camera);

	// Reset the counter
	i = 0;

	// Reset the content wrapper
	document.querySelector(".content-wrapper .container").innerHTML = "";

	// Make all other regions transparent
	scene.traverse(function(mesh) {
		if (mesh.isMesh) {
			// Return all brain regions to opaque state first
			mesh.material.transparent = false;
			mesh.material.opacity = 1;

			if (mesh.name !== region_id && mesh.name !== "Head") {
				mesh.material.transparent = true;
				mesh.material.opacity = 0.1;
			}
		}
	});

	// Set content of content wrapper
	var request_url =
		"https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext=true&exintro=true&redirects=true&titles=" +
		target_obj.wiki_path +
		"&callback=?";

	// Set the title
	document.querySelector(".content-wrapper .container").innerHTML +=
		"<h2>" + target_obj.full_name + "</h2>";

	// Get Wikipedia summary
	JSONP({
		url: request_url,
		success: function(data) {
			// We got the summary
			var sub_heading =
				'<cite>From the article <a href="https://en.wikipedia.org/wiki/' +
				target_obj.wiki_path +
				'">' +
				data.query.normalized[0].to +
				"</a> on Wikipedia.</cite>";
			var article_id = Object.keys(data.query.pages)[0]; // Gets the first object in pages
			var article_extract =
				"<p>" + data.query.pages[article_id].extract + "</p>";

			document.querySelector(".content-wrapper .container").innerHTML +=
				sub_heading + article_extract;
		},
		error: function(error) {
			console.log(error);
		}
	});

	// Scroll to top of page
	scrollTop();
}

function initSettings() {
	// Orbit Toggle
	orbitToggle();

	// Slice Toggle
	sliceToggle();

	// Head Toggle
	headToggle();

	// Square Grid Toggle
	squareGridToggle();

	// Polar Grid Toggle
	// polarGridToggle();

	// Axes Toggle
	axesToggle();
}

function orbitToggle() {
	var orbit_toggle = document.querySelector(".orbit-toggle input");

	orbit_toggle.checked = settings.orbit;
	orbit_toggle.addEventListener("change", function() {
		if (orbit_toggle.checked) {
			settings.orbit = true;
			controls.autoRotate = true;
		} else {
			settings.orbit = false;
			controls.autoRotate = false;
		}

		saveSettings();
	});
}

function sliceToggle() {
	// Setup slice toggle inits
	var slice_toggle = document.querySelector(".slice-toggle input");
	slice_toggle.checked = settings.slice.visible;

	setupSlice();

	slice_toggle.addEventListener("change", function() {
		if (slice_toggle.checked) {
			settings.slice.visible = true;
		} else {
			settings.slice.visible = false;
		}

		setupSlice();

		saveSettings();

		scrollTop();
	});
}

function setupSlice() {
	if (settings.slice.visible == true) {
		// Check the default slice axis button
		document.querySelector(
			'input[name="slice_axis"][value="' + settings.slice.axis + '"]'
		).checked = true;

		// Show the slice tool
		document.querySelector(".slice-tool").classList.remove("is-hidden");

		// Remove the spinner
		var spinner = document.querySelector(".spinner");
		if (spinner !== null) {
			spinner.parentNode.removeChild(spinner);
		}

		// Slice things up to start
		slice();

		// Detect change to slice axis buttons
		document
			.querySelectorAll('[name="slice_axis"]')
			.forEach(function(axis_button) {
				axis_button.addEventListener("change", function() {
					// Stop orbiting
					controls.autoRotate = false;

					// Set slice axis
					settings.slice.axis = document.querySelector(
						'[name="slice_axis"]:checked'
					).value;

					saveSettings();

					slice();
				});
			});

		// Detect change to slice range slider
		document
			.querySelector(".slice-range")
			.addEventListener("input", function() {
				// Stop orbiting
				controls.autoRotate = false;

				// Set slice position
				settings.slice.position = this.value;

				saveSettings();

				slice();
			});
	} else {
		// Hide slice tool
		document.querySelector(".slice-tool").classList.add("is-hidden");

		// Remove the slicing
		renderer.localClippingEnabled = false;
		renderer.clippingPlanes = [];
	}
}

function slice() {
	if (settings.slice.axis == "y") {
		var slice_base = [1, 0, 0];
	}
	if (settings.slice.axis == "x") {
		var slice_base = [0, 0, 1];
	}
	if (settings.slice.axis == "z") {
		var slice_base = [0, 1, 0];
	}

	var computed_slice_position =
		settings.slice.dimensions[settings.slice.axis] *
		settings.slice.position;

	var clip_plane = [
		new THREE.Plane(
			new THREE.Vector3(slice_base[0], slice_base[1], slice_base[2]),
			-1 * computed_slice_position + settings.slice.size / 2
		),
		new THREE.Plane(
			new THREE.Vector3(-slice_base[0], -slice_base[1], -slice_base[2]),
			computed_slice_position + settings.slice.size / 2
		)
	];

	renderer.localClippingEnabled = true;
	renderer.clippingPlanes = clip_plane;
}

function squareGridToggle() {
	var square_grid_toggle = document.querySelector(
		".square-grid-toggle input"
	);

	var squareGridHelper = new THREE.GridHelper(
		settings.grid_size * 2,
		settings.grid_size / 2
	);

	square_grid_toggle.checked = settings.square_grid;

	if (settings.square_grid == true) {
		scene.add(squareGridHelper);
	} else {
		scene.remove(squareGridHelper);
	}

	square_grid_toggle.addEventListener("change", function() {
		if (square_grid_toggle.checked) {
			settings.square_grid = true;
			scene.add(squareGridHelper);
		} else {
			settings.square_grid = false;
			scene.remove(squareGridHelper);
		}

		saveSettings();
	});
}

function polarGridToggle() {
	var polar_grid_toggle = document.querySelector(".polar-grid-toggle input");

	var polarGridHelper = new THREE.PolarGridHelper(
		settings.grid_size,
		8,
		5,
		64,
		0x777777,
		0x777777
	);

	polar_grid_toggle.checked = settings.polar_grid;

	if (settings.polar_grid == true) {
		scene.add(polarGridHelper);
	} else {
		scene.remove(polarGridHelper);
	}

	polar_grid_toggle.addEventListener("change", function() {
		if (polar_grid_toggle.checked) {
			settings.polar_grid = true;
			scene.add(polarGridHelper);
		} else {
			settings.polar_grid = false;
			scene.remove(polarGridHelper);
		}

		saveSettings();
	});
}

function axesToggle() {
	var axes_toggle = document.querySelector(".axes-toggle input");
	var axesHelper = new THREE.AxesHelper(settings.grid_size);

	axes_toggle.checked = settings.axes;
	if (settings.axes == true) {
		scene.add(axesHelper);
	} else {
		scene.remove(axesHelper);
	}

	axes_toggle.addEventListener("change", function() {
		if (axes_toggle.checked) {
			settings.axes = true;
			scene.add(axesHelper);
		} else {
			settings.axes = false;
			scene.remove(axesHelper);
		}

		saveSettings();
	});
}

function headToggle() {
	head_mesh = undefined;

	var head_toggle = document.querySelector(".head-toggle input");

	if (settings.head.visible == true) {
		loadHead();
		head_toggle.checked = true;
	} else {
	}

	head_toggle.addEventListener("change", function() {
		if (head_toggle.checked) {
			if (head_mesh == undefined) {
				// Head mesh not loaded,
				loadHead();
			} else {
				// The head has been loaded, just make it visible
				head_mesh.visible = true;
			}
		} else {
			// Toggle head mesh off
			head_mesh.visible = false;
		}

		saveSettings();
	});
}

function loadHead() {
	var head_manager = new THREE.LoadingManager();
	head_manager.onStart = function(url, itemsLoaded, itemsTotal) {
		console.log(
			"Started loading file: " +
				url +
				".\nLoaded " +
				itemsLoaded +
				" of " +
				itemsTotal +
				" files."
		);
		updateStatus("Loading head (" + itemsLoaded + "/" + itemsTotal + ")");
	};

	head_manager.onLoad = function() {
		updateStatus("Rendering head");
	};

	head_manager.onProgress = function(url, itemsLoaded, itemsTotal) {
		updateStatus("Loading head (" + itemsLoaded + "/" + itemsTotal + ")");
	};

	head_manager.onError = function(url) {
		updateStatus("Error loading head");
	};

	var loader = new THREE.GLTFLoader(head_manager);
	loader.load(
		'models/' + settings.head_model_path,
		function(gltf) {
			updateStatus("Rendering Head");
			gltf.scene.traverse(function(mesh) {
				if (mesh.isMesh) {
					mesh.material.roughness = settings.head.roughness;
					mesh.material.metalness = settings.head.metalness;
					mesh.material.wireframe = settings.head.wireframe;
					mesh.material.color.setStyle(settings.head.default_color);
					mesh.visible = true;

					if (settings.head.opacity < 1) {
						mesh.material.transparent = true;
						mesh.material.opacity = settings.head.opacity;
					}

					// Save the mesh to a global variable so we can modify it later
					head_mesh = mesh;
				}
			});

			// Set position of head with offsets
			gltf.scene.position.set(
				settings.head.offset.x,
				settings.head.offset.y,
				settings.head.offset.z
			);

			// Add the head to the scene
			scene.add(gltf.scene);
		},
		function(xhr) {
			// if (xhr.total !== 0) {
			// 	var pct = (xhr.loaded / xhr.total) * 100;
			// 	updateStatus("Loading model of head " + pct + "%");
			// }
		},
		function(error) {
			console.log(error);
			// updateStatus("Error loading model of head");
		}
	);
}

function reset() {
	console.log("reset();");

	// Change the URL
	history.pushState(null, null, "/");

	// Return origin to center of model
	controls.target.set(0, 0, 0);
	controls.update();

	// Reset the counter
	i = 0;

	// Make all regions opaque again
	scene.traverse(function(mesh) {
		if (mesh.isMesh) {
			mesh.material.transparent = false;
			mesh.material.opacity = 1;

			if (mesh.name == "Head") {
				if (settings.head.opacity < 1) {
					mesh.material.transparent = true;
					mesh.material.opacity = settings.head.opacity;
					mesh.material.color.setStyle(settings.head.default_color);
				}
			}
		}
	});

	// Remove has content class from html
	document
		.querySelector("html")
		.classList.remove("has-region-content", "has-content");
	document.querySelector(".regions-wrapper").classList.remove("is-inactive");
	document.querySelector(".settings-wrapper").classList.remove("is-inactive");

	// Clear the region from the regions filter
	// if (choices !== undefined) {
	// 	choices.removeActiveItems(excludedId);;
	// }

	// Empty the content wrapper
	document.querySelector(".content-wrapper .container").innerHTML = "";

	// Make the world orbit because it looks nice
	if (settings.orbit == true) {
		document.querySelector(".orbit-toggle input").checked = true;
		controls.autoRotate = true;
	}

	// Scroll to top of page
	scrollTop();
}

function updateStatus(status) {
	var message = '<div class="status container">' + status + "...</div>";

	document.querySelector(".status-wrapper").innerHTML = message;
}

function warning(status) {
	var message = '<p class="container">' + status + "</p>";

	document.querySelector(".warning").innerHTML = message;

	// Stop the spinner because it's not loading after all
	var spinner = document.querySelector(".spinner");
	if (spinner !== null) {
		spinner.parentNode.removeChild(spinner);
	}
}

function loadSettings() {
	// Load settings obj saved in localstorage if there is one

	if (localStorage.getItem("hbr_settings")) {
		settings = JSON.parse(localStorage.getItem("hbr_settings"));
	}
}

function saveSettings() {
	// Save our settings object saved in localStorage

	localStorage.setItem("hbr_settings", JSON.stringify(settings));
}

function scrollTop() {
	setTimeout(function() {
		window.scroll(0, 0);
	}, 50);
}
