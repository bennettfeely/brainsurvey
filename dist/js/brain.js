settings = {
	autosave: false,

	// Models
	brain_model_path: "models/Brain_05/Brain_005.gltf",
	head_model_path: "models/Head_01/Head_01.gltf",

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

	// Slicing and dicing
	slice: {
		visible: false,
		axis: "z",
		position: 0,
		size: 0.25,
		dimensions: {
			x: 7,
			y: 10,
			z: 7
		}
	},

	// Materials
	brain: {
		roughness: 0.1,
		metalness: 0.4,
		wireframe: false,
		default_color: "lightcoral",
		explode: 0,
		offset: {
			x: -2.25,
			y: 0,
			z: 0
		}
	},
	head: {
		visible: false,
		roughness: 1,
		metalness: 0,
		wireframe: true,
		default_color: "#2a2a2a",
		offset: {
			x: -2.25,
			y: 0,
			z: 0
		}
	}
};

regions_obj = {
	Frontal_Pole_0: {
		full_name: "Frontal Pole",
		path: "frontal-pole"
	},
	Right_Insular_Cortex_1: {
		full_name: "Right Insular Cortex",
		path: "right-insular-cortex"
	},
	Superior_Frontal_Gyrus_4: {
		full_name: "Superior Frontal Gyrus",
		path: "superior-frontal-gyrus"
	},
	Right_Middle_Frontal_Gyrus_6: {
		full_name: "Right Middle Frontal Gyrus",
		path: "right-middle-frontal-gyrus"
	},
	Left_Middle_Frontal_Gyrus_5: {
		full_name: "Left Middle Frontal Gyrus",
		path: "left-middle-frontal-gyrus"
	},
	Left_Inferior_Frontal_Gyrus__pars_triangularis_8: {
		full_name: "Left Inferior Frontal Gyrus Pars Triangularis",
		path: "left-inferior-frontal-gyrus-pars-triangularis"
	},
	Right_Inferior_Frontal_Gyrus__pars_triangularis_7: {
		full_name: "Right Inferior Frontal Gyrus Pars Triangularis",
		path: "right-inferior-frontal-gyrus-pars-triangularis"
	},
	Right_Inferior_Frontal_Gyrus__pars_opercularis_9: {
		full_name: "Right Inferior Frontal Gyrus Pars Opercularis",
		path: "right-inferior-frontal-gyrus-pars-opercularis"
	},
	Left_Inferior_Frontal_Gyrus__pars_opercularis_11: {
		full_name: "Left Inferior Frontal Gyrus Pars Opercularis",
		path: "left-inferior-frontal-gyrus-pars-opercularis"
	},
	Precentral_Gyrus_12: {
		full_name: "Precentral Gyrus",
		path: "precentral-gyrus"
	},
	Right_Temporal_Pole_13: {
		full_name: "Right Temporal Pole",
		path: "right-temporal-pole"
	},
	Left_Temporal_Pole_14: {
		full_name: "Left Temporal Pole",
		path: "left-temporal-pole"
	},
	Left_Middle_Temporal_Gyrus__anterior_division_15: {
		full_name: "Left Middle Temporal Gyrus Anterior Division",
		path: "left-middle-temporal-gyrus-anterior-division"
	},
	Right_Middle_Temporal_Gyrus__anterior_division_16: {
		full_name: "Right Middle Temporal Gyrus Anterior Division",
		path: "right-middle-temporal-gyrus-anterior-division"
	},
	RIght_Superior_Temporal_Gyrus__posterior_division_17: {
		full_name: "Right Superior Temporal Gyrus Posterior Division",
		path: "right-superior-temporal-gyrus-posterior-division"
	},
	Left_Superior_Temporal_Gyrus__posterior_division_18: {
		full_name: "Left Superior Temporal Gyrus Posterior Division",
		path: "left-superior-temporal-gyrus-posterior-division"
	},
	Right_Inferior_Temporal_Gyrus__anterior_division_19: {
		full_name: "Right Inferior Temporal Gyrus Anterior Division",
		path: "right-inferior-temporal-gyrus-anterior-division"
	},
	Left_Middle_Temporal_Gyrus__anterior_division_20: {
		full_name: "Left Middle Temporal Gyrus Anterior Division",
		path: "left-middle-temporal-gyrus-anterior-division"
	},
	Right_Middle_Temporal_Gyrus__posterior_division_21: {
		full_name: "Right Middle Temporal Gyrus Posterior Division",
		path: "right-middle-temporal-gyrus-posterior-division"
	},
	Left_Middle_Temporal_Gyrus__posterior_division_22: {
		full_name: "Left Middle Temporal Gyrus Posterior Division",
		path: "left-middle-temporal-gyrus-posterior-division"
	},
	Right_Middle_Temporal_Gyrus__temporooccipital_part_23: {
		full_name: "Right Middle Temporal Gyrus Temporooccipital Part",
		path: "right-middle-temporal-gyrus-temporooccipital-part"
	},
	Left_Middle_Temporal_Gyrus__temporooccipital_part_24: {
		full_name: "Left Middle Temporal Gyrus Temporooccipital Part",
		path: "left-middle-temporal-gyrus-temporooccipital-part"
	},
	Left_Temporal_Fusiform_Cortex__anterior_division_25: {
		full_name: "Left Temporal Fusiform Cortex Anterior Division",
		path: "left-temporal-fusiform-cortex-anterior-division"
	},
	Right_Inferior_Temporal_Gyrus__posterior_division_26: {
		full_name: "Right Inferior Temporal Gyrus Posterior Division",
		path: "right-inferior-temporal-gyrus-posterior-division"
	},
	Right_Inferior_Temporal_Gyrus__posterior_division_28: {
		full_name: "Right Inferior Temporal Gyrus Posterior Division",
		path: "right-inferior-temporal-gyrus-posterior-division"
	},
	Left_Inferior_Temporal_Gyrus__posterior_division_27: {
		full_name: "Left Inferior Temporal Gyrus Posterior Division",
		path: "left-inferior-temporal-gyrus-posterior-division"
	},
	Left_Inferior_Temporal_Gyrus__posterior_division_29: {
		full_name: "Left Inferior Temporal Gyrus Posterior Division",
		path: "left-inferior-temporal-gyrus-posterior-division"
	},
	Postcentral_Gyrus_30: {
		full_name: "Postcentral Gyrus",
		path: "postcentral-gyrus"
	},
	Left_Superior_Parietal_Lobule_31: {
		full_name: "Left Superior Parietal Lobule",
		path: "left-superior-parietal-lobule"
	},
	Right_Superior_Parietal_Lobule_32: {
		full_name: "Right Superior Parietal Lobule",
		path: "right-superior-parietal-lobule"
	},
	Left_Supramarginal_Gyrus__anterior_division_33: {
		full_name: "Left Supramarginal Gyrus Anterior Division",
		path: "left-supramarginal-gyrus-anterior-division"
	},
	Right_Supramarginal_Gyrus__anterior_division_34: {
		full_name: "Right Supramarginal Gyrus Anterior Division",
		path: "right-supramarginal-gyrus-anterior-division"
	},
	Left_Supramarginal_Gyrus__posterior_division_35: {
		full_name: "Left Supramarginal Gyrus Posterior Division",
		path: "left-supramarginal-gyrus-posterior-division"
	},
	Right_Supramarginal_Gyrus__posterior_division_36: {
		full_name: "Right Supramarginal Gyrus Posterior Division",
		path: "right-supramarginal-gyrus-posterior-division"
	},
	Left_Angular_Gyrus_37: {
		full_name: "Left Angular Gyrus",
		path: "left-angular-gyrus"
	},
	Right_Angular_Gyrus_38: {
		full_name: "Right Angular Gyrus",
		path: "right-angular-gyrus"
	},
	Right_Lateral_Occipital_Cortex__superior_division_39: {
		full_name: "Right Lateral Occipital Cortex Superior Division",
		path: "right-lateral-occipital-cortex-superior-division"
	},
	Left_Lateral_Occipital_Cortex__superior_division_40: {
		full_name: "Left Lateral Occipital Cortex Superior Division",
		path: "left-lateral-occipital-cortex-superior-division"
	},
	Right_Lateral_Occipital_Cortex__inferior_division_41: {
		full_name: "Right Lateral Occipital Cortex Inferior Division",
		path: "right-lateral-occipital-cortex-inferior-division"
	},
	Left_Lateral_Occipital_Cortex__inferior_division_42: {
		full_name: "Left Lateral Occipital Cortex Inferior Division",
		path: "left-lateral-occipital-cortex-inferior-division"
	},
	Lingual_Gyrus_43: {
		full_name: "Lingual Gyrus",
		path: "lingual-gyrus"
	},
	Frontal_Medial_Cortex_44: {
		full_name: "Frontal Medial Cortex",
		path: "frontal-medial-cortex"
	},
	Superior_Frontal_Gyrus_45: {
		full_name: "Superior Frontal Gyrus",
		path: "superior-frontal-gyrus"
	},
	Subcallosal_Cortex_46: {
		full_name: "Subcallosal Cortex",
		path: "subcallosal-cortex"
	},
	Paracingulate_Gyrus_47: {
		full_name: "Paracingulate Gyrus",
		path: "paracingulate-gyrus"
	},
	Cingulate_Gyrus__anterior_division_48: {
		full_name: "Cingulate Gyrus Anterior Division",
		path: "cingulate-gyrus-anterior-division"
	},
	Cingulate_Gyrus__posterior_division_49: {
		full_name: "Cingulate Gyrus Posterior Division",
		path: "cingulate-gyrus-posterior-division"
	},
	Precuneous_Cortex_50: {
		full_name: "Precuneous Cortex",
		path: "precuneous-cortex"
	},
	Cuneal_Cortex_51: {
		full_name: "Cuneal Cortex",
		path: "cuneal-cortex"
	},
	Right_Frontal_Orbital_Cortex_52: {
		full_name: "Right Frontal Orbital Cortex",
		path: "right-frontal-orbital-cortex"
	},
	Left_Frontal_Orbital_Cortex_53: {
		full_name: "Left Frontal Orbital Cortex",
		path: "left-frontal-orbital-cortex"
	},
	Right_Parahippocampal_Gyrus__anterior_division_54: {
		full_name: "Right Parahippocampal Gyrus Anterior Division",
		path: "right-parahippocampal-gyrus-anterior-division"
	},
	Left_Parahippocampal_Gyrus__anterior_division_55: {
		full_name: "Left Parahippocampal Gyrus Anterior Division",
		path: "left-parahippocampal-gyrus-anterior-division"
	},
	Left_Parahippocampal_Gyrus__posterior_division_56: {
		full_name: "Left Parahippocampal Gyrus Posterior Division",
		path: "left-parahippocampal-gyrus-posterior-division"
	},
	Right_Parahippocampal_Gyrus__posterior_division_57: {
		full_name: "Right Parahippocampal Gyrus Posterior Division",
		path: "right-parahippocampal-gyrus-posterior-division"
	},
	Lingual_Gyrus_58: {
		full_name: "Lingual Gyrus",
		path: "lingual-gyrus"
	},
	Left_Temporal_Fusiform_Cortex__anterior_division_59: {
		full_name: "Left Temporal Fusiform Cortex Anterior Division",
		path: "left-temporal-fusiform-cortex-anterior-division"
	},
	Right_Temporal_Fusiform_Cortex__anterior_division_60: {
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
	Right_Central_Opercular_Cortex_72: {
		full_name: "Right Central Opercular Cortex",
		path: "right-central-opercular-cortex"
	},
	Left_Parietal_Operculum_Cortex_71: {
		full_name: "Left Parietal Operculum Cortex",
		path: "left-parietal-operculum-cortex"
	},
	Right_Planum_Polare_73: {
		full_name: "Right Planum Polare",
		path: "right-planum-polare"
	},
	Right_Heschls_Gyrus__includes_H1_and_H2_75: {
		full_name: "Right Heschls Gyrus (Includes H and H)",
		path: "right-heschls-gyrus-includes-h-and-h"
	},
	Right_Heschls_Gyrus__includes_H1_and_H2_78: {
		full_name: "Right Heschls Gyrus (Includes H and H)",
		path: "right-heschls-gyrus-includes-h-and-h"
	},
	Left_Planum_Polare_74: {
		full_name: "Left Planum Polare",
		path: "left-planum-polare"
	},
	Left_Heschls_Gyrus__includes_H1_and_H2_77: {
		full_name: "Left Heschls Gyrus (Includes H and H)",
		path: "left-heschls-gyrus-includes-h-and-h"
	},
	Supracalcarine_Cortex_79: {
		full_name: "Supracalcarine Cortex",
		path: "supracalcarine-cortex"
	},
	Left_Insular_Cortex_3: {
		full_name: "Left Insular Cortex",
		path: "left-insular-cortex"
	},
	Left_Heschls_Gyrus__includes_H1_and_H2_76: {
		full_name: "Left Heschls Gyrus (Includes H and H)",
		path: "left-heschls-gyrus-includes-h-and-h"
	},
	Occipital_Pole_82: {
		full_name: "Occipital Pole",
		path: "occipital-pole"
	}
};


var html = document.querySelector("html");
var brain_wrapper = document.querySelector(".brain-wrapper");

init();

function init() {
	// Navigate to correct page
	route();

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

	if (path_name !== "/team") {
		initBrain();
		initSettings();
	} else {
		for (key in regions_obj) {
			if (path_name == "/" + key) {
				switchRegion(key);
				break;
			}
		}
	}

	// Todo: Add real 404 routing here
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
		settings.brain_model_path,
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
			console.log(e.detail.choice.value);
			switchRegion(e.detail.choice.value);
		},
		false
	);
}

function switchRegion(region_id) {
	console.log("switchRegion(" + region_id + ")");

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
	var full_name = "<h2>" + target_obj.full_name + "</h2>";

	if (target_obj.intro !== undefined) {
		var intro = "<p>" + target_obj.intro + "</p>";
	} else {
		var intro =
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";
	}

	// prettier-ignore
	var heading = '<div>' 
            + full_name 
            + intro 
        + "</div>";

	document.querySelector(".content-wrapper .container").innerHTML += heading;

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
	console.log("slice();");

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
		console.log("loadHead!!!");
		loadHead();
		head_toggle.checked = true;
	} else {
		console.log("settings.head.visible = false;");
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
	console.log("loadHead();");

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
		settings.head_model_path,
		function(gltf) {
			updateStatus("Rendering Head");
			gltf.scene.traverse(function(mesh) {
				if (mesh.isMesh) {
					console.log(mesh);
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
	document.querySelector(".regions-filter").value = "";

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
