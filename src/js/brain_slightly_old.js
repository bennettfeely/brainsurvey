var html = document.querySelector("html");
var brain_wrapper = document.querySelector(".brain-wrapper");

init();

function init() {
	console.log("init();");

	if (WEBGL.isWebGLAvailable() === true) {
		// Navigate to correct page
		// route();

		setupCanvas();
	} else {
		warning(
			"Your web browser or graphics card doesn't support WebGL. Try another device or browser."
		);
	}
}

function setupCanvas() {
	getSizes();

	scene = new THREE.Scene();

	// Setup Camera
	camera = new THREE.PerspectiveCamera(
		50,
		sizes.width / sizes.height,
		0.1,
		1000
	);
	camera.position.set(0, 5, 25);

	// Setup controls
	controls = new THREE.OrbitControls(camera, brain_wrapper);

	// Setup zoom
	controls.enableZoom = settings.zoom.enabled;

	// Set max zoom to current zoom level
	settings.zoom.max = controls.target.distanceTo(controls.object.position);

	controls.maxDistance = settings.zoom.max;
	controls.minDistance = settings.zoom.min;
	controls.enablePan = settings.pan;
	controls.autoRotate = settings.orbit;
	controls.autoRotateSpeed = settings.orbit_speed;

	// Stop autorotating when there is an interaction
	controls.addEventListener("start", function() {
		controls.autoRotate = false;

		document.querySelector(".orbit-toggle input").checked = false;
	});

	// Setup Lighting
	var light = new THREE.HemisphereLight(0xff9999, 1);
	scene.add(light);
	var directionalLight = new THREE.DirectionalLight(0xffd6d6, 0.5);
	directionalLight.position.set(10, 30, 0);
	scene.add(directionalLight);

	// Axes helper
	if (settings.axes == true) {
		var axesHelper = new THREE.AxesHelper(5);
		scene.add(axesHelper);
	}

	// FPS stats helper
	if (settings.stats == true) {
		var script = document.createElement("script");
		script.onload = function() {
			var stats = new Stats();
			brain_wrapper.appendChild(stats.dom);
			requestAnimationFrame(function loop() {
				stats.update();
				requestAnimationFrame(loop);
			});
		};
		script.src = "https://mrdoob.github.io/stats.js/build/stats.min.js";
		document.head.appendChild(script);
	}

	canvas = document.createElement("canvas");

	renderer = new THREE.WebGLRenderer({
		antialias: true,
		canvas: canvas,
		powerPreference: "high-performance",
		premultipliedAlpha: false,
		preserveDrawingBuffer: false
	});

	// Rendering settings
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.gammaOutput = false;

	// Add the canvas to the page
	document.querySelector(".brain-wrapper").appendChild(canvas);

	// Initally resize canvas and resize when necessary
	setCanvasSize();
	window.addEventListener("resize", setCanvasSize, false);

	// Setup point cloud
	points = new Potree.BasicGroup();
	points.setPointBudget(100000);

	// Iterate through regions object twice for each hemisphere
	["Left", "Right"].forEach(hemisphere => {
		Object.keys(regions_obj).forEach(function(region_name) {
			loadCloudRegion(hemisphere, region_name);
		});
	});

	if (settings.head.cloud.visible == true) {
		loadCloudHead();
	}

	if (settings.head.mesh.visible == true) {
		loadHead();
	}

	// Rerender the canvas as fast as possible
	function loop() {
		controls.update();
		renderer.render(scene, camera);
		requestAnimationFrame(loop);
	}
	loop();
}

function loadCloudRegion(hemisphere, region_name) {
	var region_url =
		"models/" +
		settings.brain.cloud.path +
		"/" +
		hemisphere +
		"/" +
		region_name +
		"/cloud.js";

	var region_full_name =
		hemisphere + " " + regions_obj[region_name].full_name;

	scene.add(points);

	Potree.loadPointCloud(region_url, region_name, function(data) {
		var pointcloud = data.pointcloud;

		points.add(pointcloud);
	});
}

function loadCloudHead() {
	var url = "models/" + settings.head.cloud.path + "/cloud.js";

	Potree.loadPointCloud(url, "Head", function(data) {
		var pointcloud = data.pointcloud;

		points.add(pointcloud);
	});
}

function loadHead() {
	var head_manager = new THREE.LoadingManager();
	head_manager.onStart = function(url, itemsLoaded, itemsTotal) {
		updateStatus("Loading head (" + itemsLoaded + "/" + itemsTotal + ")");
	};

	head_manager.onLoad = function() {
		updateStatus("Rendering head...");
	};

	head_manager.onProgress = function(url, itemsLoaded, itemsTotal) {
		updateStatus("Loading head (" + itemsLoaded + "/" + itemsTotal + ")");
	};

	head_manager.onError = function(url) {
		updateStatus("Error loading head");
	};

	var loader = new THREE.GLTFLoader(head_manager);
	loader.load(
		"models/" + settings.head.mesh.path,
		function(gltf) {
			updateStatus("Rendering Head...");
			gltf.scene.traverse(function(mesh) {
				if (mesh.isMesh) {
					mesh.material.roughness = settings.head.mesh.roughness;
					mesh.material.metalness = settings.head.mesh.metalness;
					mesh.material.wireframe = settings.head.mesh.wireframe;
					mesh.material.color.setStyle(
						settings.head.mesh.color.default
					);
					mesh.visible = true;

					// Save the mesh to a global variable so we can modify it later
					head_mesh = mesh;
				}
			});

			// Add the head to the scene
			scene.add(gltf.scene);
		},
		function(xhr) {
			var pct = Math.round((xhr.loaded / settings.head.model_size) * 100);
			updateStatus("Loading model of head " + pct + "%");
		},
		function(error) {
			console.log(error);
			// updateStatus("Error loading model of head");
		}
	);
}

function getSizes() {
	sizes = document.querySelector(".brain-wrapper").getBoundingClientRect();
}

function setCanvasSize() {
	getSizes();

	// Set the size of the canvas to fill the .brain-wrapper
	canvas.style.top = sizes.top;
	canvas.style.left = sizes.left;
	canvas.style.width = sizes.width;
	canvas.style.height = sizes.height;

	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();

	renderer.setSize(sizes.width, sizes.height);
}

function updateStatus(status, sub_status) {
	if (sub_status !== undefined) {
		// prettier-ignore
		var message = '<div class="status container">' + status +
				'<div class="sub-status">' + sub_status + "</div>" +
			"</div>";
	} else {
		var message = '<div class="status container">' + status + "</div>";
	}

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

	window.scroll(0, 0);
}

function detectTabbing() {
	function handleFirstTab(e) {
		let tab = 9;
		if (e.keyCode === tab) {
			document.querySelector("html").classList.add("is-tabbing");
			window.removeEventListener("keydown", handleFirstTab);
		}
	}

	window.addEventListener("keydown", handleFirstTab);
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
