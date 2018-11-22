settings = {
	autosave: false,

	// Models
	model_path: "models/Brain_04/Brain_004.gltf",

	// Animations
	orbit: true,
	orbit_speed: 4,

	// Helpers
	grid_size: 10,

	square_grid: false,
	polar_grid: false,
	axes: false,

	// Interactions
	pan: false,
	zoom: false,

	// Materials
	roughness: 0.1,
	metalness: 0.4,
	wireframe: false,

	// Displays
	explode: 0,

	// Shouldn't need this eventually
	offset: {
		x: -1.55,
		y: 0,
		z: 0
	}
};

regions_obj = {
	Frontal_Pole_0: {
		full_name: "Frontal Pole",
		path: "frontal-pole"
	},
	Insular_Cortex_1: {
		full_name: "Insular Cortex",
		path: "insular-cortex"
	},
	Superior_Frontal_Gyrus_2: {
		full_name: "Superior Frontal Gyrus",
		path: "superior-frontal-gyrus"
	},
	Right_Middle_Frontal_Gyrus_3: {
		full_name: "Right Middle Frontal Gyrus",
		path: "right-middle-frontal-gyrus"
	},
	Left_Middle_Frontal_Gyrus_4: {
		full_name: "Left Middle Frontal Gyrus",
		path: "left-middle-frontal-gyrus"
	},
	Right_Inferior_Frontal_Gyrus__pars_triangularis_5: {
		full_name: "Right Inferior Frontal Gyrus Pars Triangularis",
		path: "right-inferior-frontal-gyrus-pars-triangularis"
	},
	Left_Inferior_Frontal_Gyrus__pars_triangularis_6: {
		full_name: "Left Inferior Frontal Gyrus Pars Triangularis",
		path: "left-inferior-frontal-gyrus-pars-triangularis"
	},
	Right_Inferior_Frontal_Gyrus__pars_opercularis_7: {
		full_name: "Right Inferior Frontal Gyrus Pars Opercularis",
		path: "right-inferior-frontal-gyrus-pars-opercularis"
	},
	Left_Inferior_Frontal_Gyrus__pars_opercularis_8: {
		full_name: "Left Inferior Frontal Gyrus Pars Opercularis",
		path: "left-inferior-frontal-gyrus-pars-opercularis"
	},
	Precentral_Gyrus_9: {
		full_name: "Precentral Gyrus",
		path: "precentral-gyrus"
	},
	Right_Temporal_Pole_10: {
		full_name: "Right Temporal Pole",
		path: "right-temporal-pole"
	},
	Left_Temporal_Pole_11: {
		full_name: "Left Temporal Pole",
		path: "left-temporal-pole"
	},
	Left_Superior_Temporal_Gyrus__anterior_division_12: {
		full_name: "Left Superior Temporal Gyrus Anterior Division",
		path: "left-superior-temporal-gyrus-anterior-division"
	},
	RIght_Superior_Temporal_Gyrus__anterior_division_13: {
		full_name: "Right Superior Temporal Gyrus Anterior Division",
		path: "right-superior-temporal-gyrus-anterior-division"
	},
	RIght_Superior_Temporal_Gyrus__posterior_division_14: {
		full_name: "Right Superior Temporal Gyrus Posterior Division",
		path: "right-superior-temporal-gyrus-posterior-division"
	},
	Left_Superior_Temporal_Gyrus__posterior_division_15: {
		full_name: "Left Superior Temporal Gyrus Posterior Division",
		path: "left-superior-temporal-gyrus-posterior-division"
	},
	Right_Middle_Temporal_Gyrus__anterior_division_16: {
		full_name: "Right Middle Temporal Gyrus Anterior Division",
		path: "right-middle-temporal-gyrus-anterior-division"
	},
	Left_Middle_Temporal_Gyrus__anterior_division_17: {
		full_name: "Left Middle Temporal Gyrus Anterior Division",
		path: "left-middle-temporal-gyrus-anterior-division"
	},
	Right_Middle_Temporal_Gyrus__posterior_division_18: {
		full_name: "Right Middle Temporal Gyrus Posterior Division",
		path: "right-middle-temporal-gyrus-posterior-division"
	},
	Left_Middle_Temporal_Gyrus__posterior_division_19: {
		full_name: "Left Middle Temporal Gyrus Posterior Division",
		path: "left-middle-temporal-gyrus-posterior-division"
	},
	Right_Middle_Temporal_Gyrus__temporooccipital_part_20: {
		full_name: "Right Middle Temporal Gyrus Temporooccipital Part",
		path: "right-middle-temporal-gyrus-temporooccipital-part"
	},
	Left_Middle_Temporal_Gyrus__temporooccipital_part_21: {
		full_name: "Left Middle Temporal Gyrus Temporooccipital Part",
		path: "left-middle-temporal-gyrus-temporooccipital-part"
	},
	Left_Inferior_Temporal_Gyrus__anterior_division_22: {
		full_name: "Left Inferior Temporal Gyrus Anterior Division",
		path: "left-inferior-temporal-gyrus-anterior-division"
	},
	Right_Inferior_Temporal_Gyrus__anterior_division_23: {
		full_name: "Right Inferior Temporal Gyrus Anterior Division",
		path: "right-inferior-temporal-gyrus-anterior-division"
	},
	Left_Inferior_Temporal_Gyrus__posterior_division_24: {
		full_name: "Left Inferior Temporal Gyrus Posterior Division",
		path: "left-inferior-temporal-gyrus-posterior-division"
	},
	Right_Inferior_Temporal_Gyrus__posterior_division_25: {
		full_name: "Right Inferior Temporal Gyrus Posterior Division",
		path: "right-inferior-temporal-gyrus-posterior-division"
	},
	Right_Inferior_Temporal_Gyrus__temporooccipital_part_26: {
		full_name: "Right Inferior Temporal Gyrus Temporooccipital Part",
		path: "right-inferior-temporal-gyrus-temporooccipital-part"
	},
	Left_Inferior_Temporal_Gyrus__temporooccipital_part_27: {
		full_name: "Left Inferior Temporal Gyrus Temporooccipital Part",
		path: "left-inferior-temporal-gyrus-temporooccipital-part"
	},
	Postcentral_Gyrus_28: {
		full_name: "Postcentral Gyrus",
		path: "postcentral-gyrus"
	},
	Left_Superior_Parietal_Lobule_29: {
		full_name: "Left Superior Parietal Lobule",
		path: "left-superior-parietal-lobule"
	},
	Right_Superior_Parietal_Lobule_30: {
		full_name: "Right Superior Parietal Lobule",
		path: "right-superior-parietal-lobule"
	},
	Left_Supramarginal_Gyrus__anterior_division_31: {
		full_name: "Left Supramarginal Gyrus Anterior Division",
		path: "left-supramarginal-gyrus-anterior-division"
	},
	Right_Supramarginal_Gyrus__anterior_division_32: {
		full_name: "Right Supramarginal Gyrus Anterior Division",
		path: "right-supramarginal-gyrus-anterior-division"
	},
	Left_Supramarginal_Gyrus__posterior_division_33: {
		full_name: "Left Supramarginal Gyrus Posterior Division",
		path: "left-supramarginal-gyrus-posterior-division"
	},
	Right_Supramarginal_Gyrus__posterior_division_34: {
		full_name: "Right Supramarginal Gyrus Posterior Division",
		path: "right-supramarginal-gyrus-posterior-division"
	},
	Left_Angular_Gyrus_35: {
		full_name: "Left Angular Gyrus",
		path: "left-angular-gyrus"
	},
	Right_Angular_Gyrus_36: {
		full_name: "Right Angular Gyrus",
		path: "right-angular-gyrus"
	},
	Right_Lateral_Occipital_Cortex__superior_division_37: {
		full_name: "Right Lateral Occipital Cortex Superior Division",
		path: "right-lateral-occipital-cortex-superior-division"
	},
	Left_Lateral_Occipital_Cortex__superior_division_38: {
		full_name: "Left Lateral Occipital Cortex Superior Division",
		path: "left-lateral-occipital-cortex-superior-division"
	},
	Right_Lateral_Occipital_Cortex__inferior_division_39: {
		full_name: "Right Lateral Occipital Cortex Inferior Division",
		path: "right-lateral-occipital-cortex-inferior-division"
	},
	Left_Lateral_Occipital_Cortex__inferior_division_40: {
		full_name: "Left Lateral Occipital Cortex Inferior Division",
		path: "left-lateral-occipital-cortex-inferior-division"
	},
	Intracalcarine_Cortex_41: {
		full_name: "Intracalcarine Cortex",
		path: "intracalcarine-cortex"
	},
	Frontal_Medial_Cortex_42: {
		full_name: "Frontal Medial Cortex",
		path: "frontal-medial-cortex"
	},
	Juxtapositional_Lobule_Cortex_43: {
		full_name: "Juxtapositional Lobule Cortex",
		path: "juxtapositional-lobule-cortex"
	},
	Subcallosal_Cortex_44: {
		full_name: "Subcallosal Cortex",
		path: "subcallosal-cortex"
	},
	Paracingulate_Gyrus_45: {
		full_name: "Paracingulate Gyrus",
		path: "paracingulate-gyrus"
	},
	Cingulate_Gyrus__anterior_division_46: {
		full_name: "Cingulate Gyrus Anterior Division",
		path: "cingulate-gyrus-anterior-division"
	},
	Cingulate_Gyrus__posterior_division_47: {
		full_name: "Cingulate Gyrus Posterior Division",
		path: "cingulate-gyrus-posterior-division"
	},
	Precuneous_Cortex_48: {
		full_name: "Precuneous Cortex",
		path: "precuneous-cortex"
	},
	Cuneal_Cortex_49: {
		full_name: "Cuneal Cortex",
		path: "cuneal-cortex"
	},
	Right_Frontal_Orbital_Cortex_50: {
		full_name: "Right Frontal Orbital Cortex",
		path: "right-frontal-orbital-cortex"
	},
	Left_Frontal_Orbital_Cortex_51: {
		full_name: "Left Frontal Orbital Cortex",
		path: "left-frontal-orbital-cortex"
	},
	Right_Parahippocampal_Gyrus__anterior_division_52: {
		full_name: "Right Parahippocampal Gyrus Anterior Division",
		path: "right-parahippocampal-gyrus-anterior-division"
	},
	Left_Parahippocampal_Gyrus__anterior_division_53: {
		full_name: "Left Parahippocampal Gyrus Anterior Division",
		path: "left-parahippocampal-gyrus-anterior-division"
	},
	Left_Parahippocampal_Gyrus__posterior_division_54: {
		full_name: "Left Parahippocampal Gyrus Posterior Division",
		path: "left-parahippocampal-gyrus-posterior-division"
	},
	Right_Parahippocampal_Gyrus__posterior_division_55: {
		full_name: "Right Parahippocampal Gyrus Posterior Division",
		path: "right-parahippocampal-gyrus-posterior-division"
	},
	Lingual_Gyrus_56: {
		full_name: "Lingual Gyrus",
		path: "lingual-gyrus"
	},
	Left_Temporal_Fusiform_Cortex__anterior_division_57: {
		full_name: "Left Temporal Fusiform Cortex Anterior Division",
		path: "left-temporal-fusiform-cortex-anterior-division"
	},
	Right_Temporal_Fusiform_Cortex__anterior_division_58: {
		full_name: "Right Temporal Fusiform Cortex Anterior Division",
		path: "right-temporal-fusiform-cortex-anterior-division"
	},
	Right_Temporal_Fusiform_Cortex__posterior_division_61: {
		full_name: "Right Temporal Fusiform Cortex Posterior Division",
		path: "right-temporal-fusiform-cortex-posterior-division"
	},
	Left_Temporal_Fusiform_Cortex__posterior_division_62: {
		full_name: "Left Temporal Fusiform Cortex Posterior Division",
		path: "left-temporal-fusiform-cortex-posterior-division"
	},
	Right_Temporal_Occipital_Fusiform_Cortex_63: {
		full_name: "Right Temporal Occipital Fusiform Cortex",
		path: "right-temporal-occipital-fusiform-cortex"
	},
	Left_Temporal_Occipital_Fusiform_Cortex_64: {
		full_name: "Left Temporal Occipital Fusiform Cortex",
		path: "left-temporal-occipital-fusiform-cortex"
	},
	Right_Occipital_Fusiform_Gyrus_65: {
		full_name: "Right Occipital Fusiform Gyrus",
		path: "right-occipital-fusiform-gyrus"
	},
	Left_Occipital_Fusiform_Gyrus_66: {
		full_name: "Left Occipital Fusiform Gyrus",
		path: "left-occipital-fusiform-gyrus"
	},
	Left_Frontal_Operculum_Cortex_67: {
		full_name: "Left Frontal Operculum Cortex",
		path: "left-frontal-operculum-cortex"
	},
	Right_Frontal_Operculum_Cortex_68: {
		full_name: "Right Frontal Operculum Cortex",
		path: "right-frontal-operculum-cortex"
	},
	Left_Central_Opercular_Cortex_69: {
		full_name: "Left Central Opercular Cortex",
		path: "left-central-opercular-cortex"
	},
	Right_Central_Opercular_Cortex_70: {
		full_name: "Right Central Opercular Cortex",
		path: "right-central-opercular-cortex"
	},
	Right_Parietal_Operculum_Cortex_71: {
		full_name: "Right Parietal Operculum Cortex",
		path: "right-parietal-operculum-cortex"
	},
	Left_Parietal_Operculum_Cortex_72: {
		full_name: "Left Parietal Operculum Cortex",
		path: "left-parietal-operculum-cortex"
	},
	Heschls_Gyrus_74: {
		full_name: "Heschls Gyrus",
		path: "heschls-gyrus"
	},
	Occipital_Pole_75: {
		full_name: "Occipital Pole",
		path: "occipital-pole"
	}
};

var html = document.querySelector("html");
var brain_wrapper = document.querySelector(".brain-wrapper");

init();

function init() {
	updateStatus("Loading model");

	// Navigate to correct page
	route();

	// Load any settings in localstorage
	if (settings.autosave == true) {
		loadSettings();
	}

	initBrain();
	initSettings();
}

function route() {
	var path_name = window.location.pathname;
	if (path_name !== "/") {
		if (path_name == "/team") {
			console.log("team page!");
		} else {
			for (key in regions_obj) {
				if (path_name == "/" + key) {
					switchRegion(key);
					break;
				}
			}
		}
	}
}

function initBrain() {
	// If we don't have WebGL
	if (WEBGL.isWebGLAvailable() === false) {
		document.body.appendChild(WEBGL.getWebGLErrorMessage());
	}

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
	// controls.minDistance = 1.5;
	// controls.maxDistance = 2.5;
	controls.enablePan = settings.pan;
	controls.autoRotate = settings.orbit;
	controls.autoRotateSpeed = settings.orbit_speed;

	// Stop autorotating when there is an interaction
	controls.addEventListener("start", function() {
		controls.autoRotate = false;

		document.querySelector(".orbit input").checked = false;
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

	// Model
	var loader = new THREE.GLTFLoader();
	loader.load(
		settings.model_path,
		function(gltf) {
			updateStatus("Rendering model");
			first = true;
			gltf.scene.traverse(function(mesh) {
				if (mesh.isMesh) {
					// Global mesh styles
					if (first) {
						mesh.material.roughness = settings.roughness;
						mesh.material.metalness = settings.metalness;
						mesh.material.wireframe = settings.wireframe;
					}

					// Create separate material instance and local mesh styles
					mesh.material = mesh.material.clone();

					// Set random color for each mesh
					var r = Math.random();
					var g = Math.random();
					var b = Math.random();

					mesh.material.color.setRGB(r, g, b);

					// Explode brain regions
					if (settings.explode > 0) {
						mesh.geometry.computeBoundingSphere();

						var x = mesh.geometry.boundingSphere.center.x;
						var y = mesh.geometry.boundingSphere.center.y;
						var z = mesh.geometry.boundingSphere.center.z;

						mesh.position.set(
							x * settings.explode,
							y * settings.explode,
							z * settings.explode
						);
					}

					// Add region link to regions list
					addRegionLink(mesh, r, g, b);
				}
			});

			// Set position of brain with offsets
			gltf.scene.position.set(
				settings.offset.x,
				settings.offset.y,
				settings.offset.z
			);

			scene.add(gltf.scene);

			animate();

			initRegions();
		},
		function(xhr) {
			var pct = (xhr.loaded / xhr.total) * 100;
			updateStatus("Loading model " + pct + "%");
		},
		function(error) {
			updateStatus("Error loading model");
		}
	);

	renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
	renderer.setPixelRatio(window.devicePixelRatio);

	setCanvasSize();

	// Make canvas background transparent
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

function addRegionLink(child, r, g, b) {
	var regions_list = document.querySelector(".regions-list");

	// Add mesh object to regions object
	regions_obj[child.name].mesh = child;

	// Append region link to regions list
	// prettier-ignore
	var region_link = '<li onClick="switchRegion(\'' + child.name + '\')" style="--color: rgb(' + r*255 + ',' + g*255 + ',' + b*255 + ')" class="box box-link region-link container is-hidden">'
			+ "<h3>" + regions_obj[child.name].full_name + "</h3>" +
		"</li>";
	regions_list.innerHTML += region_link;
}

function switchRegion(region_id) {
	var target_obj = regions_obj[region_id];

	// Change the URL
	// history.pushState(null, null, "/" + target_obj.path);

	// Change page class
	document.querySelector("html").classList.add("has-content");

	// Rerender the page
	renderer.render(scene, camera);

	// Scroll to top of page
	window.scroll(0, 0);

	console.log("target_obj.mesh");
	console.log(target_obj.mesh);

	// Make all other regions transparent
	scene.traverse(function(mesh) {
		if (mesh.isMesh) {
			// Return all regions to opaque state first
			mesh.visible = true;
			mesh.material.transparent = true;
			mesh.material.opacity = 1;

			if (mesh.name == region_id) {
				mesh.visible = true;

				mesh.geometry.computeBoundingSphere();

				var x = mesh.geometry.boundingSphere.center.x;
				var y = mesh.geometry.boundingSphere.center.y;
				var z = mesh.geometry.boundingSphere.center.z;

				// Set origin to center of region
				controls.target.set(x, y, z);
				controls.update();
			} else {
				mesh.visible = false;
				mesh.material.transparent = true;
				mesh.material.opacity = 0.1;
			}
		}
	});

	// Set content of content wrapper
	var full_name = "<h2>" + target_obj.full_name + "</h2>";

	if (target_obj.intro !== undefined) {
		var intro = "<p>" + target_obj.intro + "</p>";
	} else {
		var intro =
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";
	}

	// prettier-ignore
	var content = '<button class="back-button">&larr; Back</button>'
        + '<div class="container">' 
            + full_name 
            + intro 
        + "</div>";

	document.querySelector(".content-wrapper").innerHTML = content;

	document
		.querySelector(".back-button")
		.addEventListener("click", function() {
			resetRegion();
		});
}

function initSettings() {
	// Orbit Toggle
	var orbit_toggle = document.querySelector(".orbit input");
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

	// Square Grid Toggle
	var square_grid_toggle = document.querySelector(".square-grid input");
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

	// Polar Grid Toggle
	var polar_grid_toggle = document.querySelector(".polar-grid input");
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

	// Axes Toggle
	var axes_toggle = document.querySelector(".axes input");
	var axesHelper = new THREE.AxesHelper(settings.grid_size * 1.25);

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

function updateStatus(status) {
	var message =
		'<div class="loading-status container">' + status + "...</div>";

	document.querySelector(".loading-wrapper").innerHTML = message;
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

function resetRegion() {
	console.log("resetRegion();");

	// Change the URL
	history.pushState(null, null, "/");

	// Scroll to top of page
	window.scroll(0, 0);

	// Return origin to center of model
	controls.target.set(0, 0, 0);
	controls.update();

	// Make all regions opaque again
	scene.traverse(function(mesh) {
		if (mesh.isMesh) {
			mesh.visible = true;
			mesh.material.transparent = true;
			mesh.material.opacity = 1;
		}
	});

	// Remove has content class from html
	document.querySelector("html").classList.remove("has-content");

	// Empty the content wrapper
	document.querySelector(".content-wrapper").innerHTML = "";
}
