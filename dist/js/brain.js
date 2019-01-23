settings = {
	autosave: false,

	// Models
	brain_model_path: "Brain_05/Brain_005.gltf",
	head_model_path: "BertsHead_01/BertsHead_01_Remesh_01.gltf",

	// Animations
	orbit: false,
	orbit_speed: 4,

	// Helpers
	grid_size: 10,
	square_grid: false,
	polar_grid: false,
	axes: false,

	// Interactions
	pan: false,
	zoom: {
		enabled: true,
		min: 15,
		max: 30
	},

	// Slicing and dicing
	slice: {
		visible: false,
		axis: "y",
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
		metalness: 0.3,
		wireframe: false,
		color: {
			default: "salmon",
			hover: "firebrick",
			active: "darkred",
			focus: "#fdfa00"
		},
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
		color: {
			default: "#333"
		},
		offset: {
			x: -2.25,
			y: 0,
			z: 0
		}
	}
};

regions_obj = {
	Frontal_Pole_0: {
		path: "frontal-pole",
		wiki_path: "frontal_lobe",
		full_name: "Frontal Pole"
	},
	Right_Insular_Cortex_1: {
		path: "right-insular-cortex",
		wiki_path: "insular_cortex",
		full_name: "Right Insular Cortex"
	},
	Superior_Frontal_Gyrus_4: {
		path: "superior-frontal-gyrus",
		wiki_path: "frontal_gyrus",
		full_name: "Superior Frontal Gyrus"
	},
	Right_Middle_Frontal_Gyrus_6: {
		path: "right-middle-frontal-gyrus",
		wiki_path: "frontal_gyrus",
		full_name: "Right Middle Frontal Gyrus"
	},
	Left_Middle_Frontal_Gyrus_5: {
		path: "left-middle-frontal-gyrus",
		wiki_path: "frontal_gyrus",
		full_name: "Left Middle Frontal Gyrus"
	},
	Left_Inferior_Frontal_Gyrus__pars_triangularis_8: {
		path: "left-inferior-frontal-gyrus-pars-triangularis",
		wiki_path: "frontal_gyrus",
		full_name: "Left Inferior Frontal Gyrus pars triangularis"
	},
	Right_Inferior_Frontal_Gyrus__pars_triangularis_7: {
		path: "right-inferior-frontal-gyrus-pars-triangularis",
		wiki_path: "frontal_gyrus",
		full_name: "Right Inferior Frontal Gyrus pars triangularis"
	},
	Right_Inferior_Frontal_Gyrus__pars_opercularis_9: {
		path: "right-inferior-frontal-gyrus-pars-opercularis",
		wiki_path: "frontal_gyrus",
		full_name: "Right Inferior Frontal Gyrus pars opercularis"
	},
	Left_Inferior_Frontal_Gyrus__pars_opercularis_11: {
		path: "left-inferior-frontal-gyrus-pars-opercularis",
		wiki_path: "frontal_gyrus",
		full_name: "Left Inferior Frontal Gyrus pars opercularis"
	},
	Precentral_Gyrus_12: {
		path: "precentral-gyrus",
		wiki_path: "precentral_gyrus",
		full_name: "Precentral Gyrus"
	},
	Right_Temporal_Pole_13: {
		path: "right-temporal-pole",
		wiki_path: "cerebral_hemisphere",
		full_name: "Right Temporal Pole"
	},
	Left_Temporal_Pole_14: {
		path: "left-temporal-pole",
		wiki_path: "cerebral_hemisphere",
		full_name: "Left Temporal Pole"
	},
	Left_Middle_Temporal_Gyrus__anterior_division_15: {
		path: "left-middle-temporal-gyrus-anterior-division",
		wiki_path: "middle_temporal_gyrus",
		full_name: "Left Middle Temporal Gyrus anterior division"
	},
	Right_Middle_Temporal_Gyrus__anterior_division_16: {
		path: "right-middle-temporal-gyrus-anterior-division",
		wiki_path: "middle_temporal_gyrus",
		full_name: "Right Middle Temporal Gyrus anterior division"
	},
	RIght_Superior_Temporal_Gyrus__posterior_division_17: {
		path: "right-superior-temporal-gyrus-posterior-division",
		wiki_path: "superior_temporal_gyrus",
		full_name: "RIght Superior Temporal Gyrus posterior division"
	},
	Left_Superior_Temporal_Gyrus__posterior_division_18: {
		path: "left-superior-temporal-gyrus-posterior-division",
		wiki_path: "superior_temporal_gyrus",
		full_name: "Left Superior Temporal Gyrus posterior division"
	},
	Right_Inferior_Temporal_Gyrus__anterior_division_19: {
		path: "right-inferior-temporal-gyrus-anterior-division",
		wiki_path: "inferior_temporal_gyrus",
		full_name: "Right Inferior Temporal Gyrus anterior division"
	},
	Left_Middle_Temporal_Gyrus__anterior_division_20: {
		path: "left-middle-temporal-gyrus-anterior-division",
		wiki_path: "middle_temporal_gyrus",
		full_name: "Left Middle Temporal Gyrus anterior division"
	},
	Right_Middle_Temporal_Gyrus__posterior_division_21: {
		path: "right-middle-temporal-gyrus-posterior-division",
		wiki_path: "middle_temporal_gyrus",
		full_name: "Right Middle Temporal Gyrus posterior division"
	},
	Left_Middle_Temporal_Gyrus__posterior_division_22: {
		path: "left-middle-temporal-gyrus-posterior-division",
		wiki_path: "middle_temporal_gyrus",
		full_name: "Left Middle Temporal Gyrus posterior division"
	},
	Right_Middle_Temporal_Gyrus__temporooccipital_part_23: {
		path: "right-middle-temporal-gyrus-temporooccipital-part",
		wiki_path: "middle_temporal_gyrus",
		full_name: "Right Middle Temporal Gyrus temporooccipital part"
	},
	Left_Middle_Temporal_Gyrus__temporooccipital_part_24: {
		path: "left-middle-temporal-gyrus-temporooccipital-part",
		wiki_path: "middle_temporal_gyrus",
		full_name: "Left Middle Temporal Gyrus temporooccipital part"
	},
	Left_Temporal_Fusiform_Cortex__anterior_division_25: {
		path: "left-temporal-fusiform-cortex-anterior-division",
		wiki_path: "fusiform_gyrus",
		full_name: "Left Temporal Fusiform Cortex anterior division"
	},
	Right_Inferior_Temporal_Gyrus__posterior_division_26: {
		path: "right-inferior-temporal-gyrus-posterior-division",
		wiki_path: "inferior_temporal_gyrus",
		full_name: "Right Inferior Temporal Gyrus posterior division"
	},
	Right_Inferior_Temporal_Gyrus__posterior_division_28: {
		path: "right-inferior-temporal-gyrus-posterior-division",
		wiki_path: "inferior_temporal_gyrus",
		full_name: "Right Inferior Temporal Gyrus posterior division"
	},
	Left_Inferior_Temporal_Gyrus__posterior_division_27: {
		path: "left-inferior-temporal-gyrus-posterior-division",
		wiki_path: "inferior_temporal_gyrus",
		full_name: "Left Inferior Temporal Gyrus posterior division"
	},
	Left_Inferior_Temporal_Gyrus__posterior_division_29: {
		path: "left-inferior-temporal-gyrus-posterior-division",
		wiki_path: "inferior_temporal_gyrus",
		full_name: "Left Inferior Temporal Gyrus posterior division"
	},
	Postcentral_Gyrus_30: {
		path: "postcentral-gyrus",
		wiki_path: "postcentral_gyrus",
		full_name: "Postcentral Gyrus"
	},
	Left_Superior_Parietal_Lobule_31: {
		path: "left-superior-parietal-lobule",
		wiki_path: "superior_parietal_lobule",
		full_name: "Left Superior Parietal Lobule"
	},
	Right_Superior_Parietal_Lobule_32: {
		path: "right-superior-parietal-lobule",
		wiki_path: "superior_parietal_lobule",
		full_name: "Right Superior Parietal Lobule"
	},
	Left_Supramarginal_Gyrus__anterior_division_33: {
		path: "left-supramarginal-gyrus-anterior-division",
		wiki_path: "supramarginal_gyrus",
		full_name: "Left Supramarginal Gyrus anterior division"
	},
	Right_Supramarginal_Gyrus__anterior_division_34: {
		path: "right-supramarginal-gyrus-anterior-division",
		wiki_path: "supramarginal_gyrus",
		full_name: "Right Supramarginal Gyrus anterior division"
	},
	Left_Supramarginal_Gyrus__posterior_division_35: {
		path: "left-supramarginal-gyrus-posterior-division",
		wiki_path: "supramarginal_gyrus",
		full_name: "Left Supramarginal Gyrus posterior division"
	},
	Right_Supramarginal_Gyrus__posterior_division_36: {
		path: "right-supramarginal-gyrus-posterior-division",
		wiki_path: "supramarginal_gyrus",
		full_name: "Right Supramarginal Gyrus posterior division"
	},
	Left_Angular_Gyrus_37: {
		path: "left-angular-gyrus",
		wiki_path: "angular_gyrus",
		full_name: "Left Angular Gyrus"
	},
	Right_Angular_Gyrus_38: {
		path: "right-angular-gyrus",
		wiki_path: "angular_gyrus",
		full_name: "Right Angular Gyrus"
	},
	Right_Lateral_Occipital_Cortex__superior_division_39: {
		path: "right-lateral-occipital-cortex-superior-division",
		wiki_path: "visual_cortex",
		full_name: "Right Lateral Occipital Cortex superior division"
	},
	Left_Lateral_Occipital_Cortex__superior_division_40: {
		path: "left-lateral-occipital-cortex-superior-division",
		wiki_path: "visual_cortex",
		full_name: "Left Lateral Occipital Cortex superior division"
	},
	Right_Lateral_Occipital_Cortex__inferior_division_41: {
		path: "right-lateral-occipital-cortex-inferior-division",
		wiki_path: "visual_cortex",
		full_name: "Right Lateral Occipital Cortex inferior division"
	},
	Left_Lateral_Occipital_Cortex__inferior_division_42: {
		path: "left-lateral-occipital-cortex-inferior-division",
		wiki_path: "visual_cortex",
		full_name: "Left Lateral Occipital Cortex inferior division"
	},
	Lingual_Gyrus_43: {
		path: "lingual-gyrus",
		wiki_path: "lingual_gyrus",
		full_name: "Lingual Gyrus"
	},
	Frontal_Medial_Cortex_44: {
		path: "frontal-medial-cortex",
		wiki_path: "prefrontal_cortex",
		full_name: "Frontal Medial Cortex"
	},
	Superior_Frontal_Gyrus_45: {
		path: "superior-frontal-gyrus",
		wiki_path: "superior_frontal_gyrus",
		full_name: "Superior Frontal Gyrus"
	},
	Subcallosal_Cortex_46: {
		path: "subcallosal-cortex",
		wiki_path: "brodmann_area_25",
		full_name: "Subcallosal Cortex"
	},
	Paracingulate_Gyrus_47: {
		path: "paracingulate-gyrus",
		wiki_path: "cingulate_cortex",
		full_name: "Paracingulate Gyrus"
	},
	Cingulate_Gyrus__anterior_division_48: {
		path: "cingulate-gyrus-anterior-division",
		wiki_path: "cingulate_cortex",
		full_name: "Cingulate Gyrus anterior division"
	},
	Cingulate_Gyrus__posterior_division_49: {
		path: "cingulate-gyrus-posterior-division",
		wiki_path: "cingulate_cortex",
		full_name: "Cingulate Gyrus posterior division"
	},
	Precuneous_Cortex_50: {
		path: "precuneous-cortex",
		wiki_path: "cuneus",
		full_name: "Precuneous Cortex"
	},
	Cuneal_Cortex_51: {
		path: "cuneal-cortex",
		wiki_path: "cuneus",
		full_name: "Cuneal Cortex"
	},
	Right_Frontal_Orbital_Cortex_52: {
		path: "right-frontal-orbital-cortex",
		wiki_path: "frontal_lobe",
		full_name: "Right Frontal Orbital Cortex"
	},
	Left_Frontal_Orbital_Cortex_53: {
		path: "left-frontal-orbital-cortex",
		wiki_path: "frontal_lobe",
		full_name: "Left Frontal Orbital Cortex"
	},
	Right_Parahippocampal_Gyrus__anterior_division_54: {
		path: "right-parahippocampal-gyrus-anterior-division",
		wiki_path: "parahippocampal_gyrus",
		full_name: "Right Parahippocampal Gyrus anterior division"
	},
	Left_Parahippocampal_Gyrus__anterior_division_55: {
		path: "left-parahippocampal-gyrus-anterior-division",
		wiki_path: "parahippocampal_gyrus",
		full_name: "Left Parahippocampal Gyrus anterior division"
	},
	Left_Parahippocampal_Gyrus__posterior_division_56: {
		path: "left-parahippocampal-gyrus-posterior-division",
		wiki_path: "parahippocampal_gyrus",
		full_name: "Left Parahippocampal Gyrus posterior division"
	},
	Right_Parahippocampal_Gyrus__posterior_division_57: {
		path: "right-parahippocampal-gyrus-posterior-division",
		wiki_path: "parahippocampal_gyrus",
		full_name: "Right Parahippocampal Gyrus posterior division"
	},
	Lingual_Gyrus_58: {
		path: "lingual-gyrus",
		wiki_path: "lingual_gyrus",
		full_name: "Lingual Gyrus"
	},
	Left_Temporal_Fusiform_Cortex__anterior_division_59: {
		path: "left-temporal-fusiform-cortex-anterior-division",
		wiki_path: "fusiform_gyrus",
		full_name: "Left Temporal Fusiform Cortex anterior division"
	},
	Right_Temporal_Fusiform_Cortex__anterior_division_60: {
		path: "right-temporal-fusiform-cortex-anterior-division",
		wiki_path: "fusiform_gyrus",
		full_name: "Right Temporal Fusiform Cortex anterior division"
	},
	Right_Temporal_Fusiform_Cortex__posterior_division_61: {
		path: "right-temporal-fusiform-cortex-posterior-division",
		wiki_path: "fusiform_gyrus",
		full_name: "Right Temporal Fusiform Cortex posterior division"
	},
	Left_Temporal_Fusiform_Cortex__posterior_division_62: {
		path: "left-temporal-fusiform-cortex-posterior-division",
		wiki_path: "fusiform_gyrus",
		full_name: "Left Temporal Fusiform Cortex posterior division"
	},
	Right_Temporal_Occipital_Fusiform_Cortex_63: {
		path: "right-temporal-occipital-fusiform-cortex",
		wiki_path: "fusiform_gyrus",
		full_name: "Right Temporal Occipital Fusiform Cortex"
	},
	Left_Temporal_Occipital_Fusiform_Cortex_64: {
		path: "left-temporal-occipital-fusiform-cortex",
		wiki_path: "fusiform_gyrus",
		full_name: "Left Temporal Occipital Fusiform Cortex"
	},
	Right_Occipital_Fusiform_Gyrus_65: {
		path: "right-occipital-fusiform-gyrus",
		wiki_path: "fusiform_gyrus",
		full_name: "Right Occipital Fusiform Gyrus"
	},
	Left_Occipital_Fusiform_Gyrus_66: {
		path: "left-occipital-fusiform-gyrus",
		wiki_path: "fusiform_gyrus",
		full_name: "Left Occipital Fusiform Gyrus"
	},
	Left_Frontal_Operculum_Cortex_67: {
		path: "left-frontal-operculum-cortex",
		wiki_path: "operculum_(brain)",
		full_name: "Left Frontal Operculum Cortex"
	},
	Right_Frontal_Operculum_Cortex_68: {
		path: "right-frontal-operculum-cortex",
		wiki_path: "operculum_(brain)",
		full_name: "Right Frontal Operculum Cortex"
	},
	Left_Central_Opercular_Cortex_69: {
		path: "left-central-opercular-cortex",
		wiki_path: "operculum_(brain)",
		full_name: "Left Central Opercular Cortex"
	},
	Right_Central_Opercular_Cortex_70: {
		path: "right-central-opercular-cortex",
		wiki_path: "operculum_(brain)",
		full_name: "Right Central Opercular Cortex"
	},
	Right_Central_Opercular_Cortex_72: {
		path: "right-central-opercular-cortex",
		wiki_path: "operculum_(brain)",
		full_name: "Right Central Opercular Cortex"
	},
	Left_Parietal_Operculum_Cortex_71: {
		path: "left-parietal-operculum-cortex",
		wiki_path: "operculum_(brain)",
		full_name: "Left Parietal Operculum Cortex"
	},
	Right_Planum_Polare_73: {
		path: "right-planum-polare",
		wiki_path: "auditory_cortex",
		full_name: "Right Planum Polare"
	},
	Right_Heschls_Gyrus__includes_H1_and_H2_75: {
		path: "right-heschls-gyrus-includes-h-and-h",
		wiki_path: "transverse_temporal_gyrus",
		full_name: "Right Heschls Gyrus includes H and H"
	},
	Right_Heschls_Gyrus__includes_H1_and_H2_78: {
		path: "right-heschls-gyrus-includes-h-and-h",
		wiki_path: "transverse_temporal_gyrus",
		full_name: "Right Heschls Gyrus includes H and H"
	},
	Left_Planum_Polare_74: {
		path: "left-planum-polare",
		wiki_path: "auditory_cortex",
		full_name: "Left Planum Polare"
	},
	Left_Heschls_Gyrus__includes_H1_and_H2_77: {
		path: "left-heschls-gyrus-includes-h-and-h",
		wiki_path: "transverse_temporal_gyrus",
		full_name: "Left Heschls Gyrus includes H and H"
	},
	Supracalcarine_Cortex_79: {
		path: "supracalcarine-cortex",
		wiki_path: "calcarine_sulcus",
		full_name: "Supracalcarine Cortex"
	},
	Left_Insular_Cortex_3: {
		path: "left-insular-cortex",
		wiki_path: "insular_cortex",
		full_name: "Left Insular Cortex"
	},
	Left_Heschls_Gyrus__includes_H1_and_H2_76: {
		path: "left-heschls-gyrus-includes-h-and-h",
		wiki_path: "transverse_temporal_gyrus",
		full_name: "Left Heschls Gyrus includes H and H"
	},
	Occipital_Pole_82: {
		path: "occipital-pole",
		wiki_path: "cerebral_hemisphere",
		full_name: "Occipital Pole"
	}
};

var html = document.querySelector("html");
var brain_wrapper = document.querySelector(".brain-wrapper");

init();

function init() {
	// Warnings
	if (WEBGL.isWebGLAvailable() === true) {
		// Navigate to correct page
		route();
	} else {
		warning(
			"Your web browser or graphics card doesn't support WebGL. Try another device or browser."
		);
	}

	detectTabbing();
}

function route() {
	var path_name = window.location.pathname;

	initBrain();
	initSettings();

	// This can be improved 1000%
	if (path_name !== "/") {
		Object.keys(regions_obj).forEach(function(key) {
			if ("/" + regions_obj[key].path == path_name) {
				console.log("switchRegion(" + key + ")");
				switchRegion(key);
			}
		});
	}
}

function initBrain() {
	updateStatus("Loading model");

	// Get the canvas initial size
	getSizes();

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

	// Origin
	controls.target.set(0, 0, 0);
	controls.update();

	// Set the scene
	scene = new THREE.Scene();

	// Create new object to capture ray objects;
	ray_objects = [];

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
		"models/" + settings.brain_model_path,
		function(gltf) {
			i = 0;
			gltf.scene.traverse(function(mesh) {
				if (mesh.isMesh) {
					i++;
					// Global mesh styles
					mesh.material.roughness = settings.brain.roughness;
					mesh.material.metalness = settings.brain.metalness;
					mesh.material.wireframe = settings.brain.wireframe;
					mesh.material.color.setStyle(settings.brain.color.default);
					mesh.material.side = THREE.DoubleSide;

					// Create separate material instance and local mesh styles
					mesh.material = mesh.material.clone();

					// Add mesh object to regions object
					regions_obj[mesh.name].mesh = mesh;

					ray_objects.push(mesh);

					// We're done traversing
					if (i == Object.keys(regions_obj).length) {
						setupRegionsFilter();

						animate();
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

	// Setup Lighting
	var light = new THREE.HemisphereLight(0xff9999, 0.8);
	scene.add(light);

	var directionalLight = new THREE.DirectionalLight(0xafbfff, 0.5);
	directionalLight.position.set(0, 10, 0);
	scene.add(directionalLight);

	// Setup raycaster
	raycaster = new THREE.Raycaster();
	raycaster_paused = false;
	last_intersected = null;

	// Start mouse for raycaster  at point far away from brain
	// to prevent central mesh from being highlighted
	mouse = new THREE.Vector2(1000, 1000, 1000);

	// Render the canvas
	renderer = new THREE.WebGLRenderer({
		alpha: true,
		antialias: true,
		side: THREE.DoubleSide
	});
	renderer.setPixelRatio(window.devicePixelRatio);

	// Rendering settings
	renderer.gammaOutput = true;

	// Add canvas to page
	setCanvasSize();
	brain_wrapper.appendChild(renderer.domElement);

	// Detect window resizing and resize canvas
	window.addEventListener("resize", setCanvasSize, false);

	// Raycaster events
	var canvas = document.querySelector(".brain-wrapper canvas");
	canvas.addEventListener("mousemove", onCanvasMouseMove, false);
	canvas.addEventListener("mousedown", onCanvasMouseDown, false);
	canvas.addEventListener("mouseup", onCanvasMouseUp, false);
	// document.addEventListener("click", onDocumentClick, false);

	// Detect click for back button
	document
		.querySelector(".back-button")
		.addEventListener("click", function() {
			reset();

			raycaster_paused = false;
		});
}

function getSizes() {
	sizes = document.querySelector(".brain-wrapper").getBoundingClientRect();
}

function setCanvasSize() {
	getSizes();

	// Set the size of the <canvas> to fill the .brain_wrapper
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();

	renderer.setSize(sizes.width, sizes.height);
}

function onCanvasMouseMove(e) {
	if (raycaster_paused == false && settings.slice.visible == false) {
		e.preventDefault();

		// Get the mouse position and find the position relative to the brain wrapper
		mouse.x = ((e.clientX - sizes.left) / sizes.width) * 2 - 1;
		mouse.y = -((e.clientY - sizes.top) / sizes.height) * 2 + 1;
	}
}

function onCanvasMouseDown(e) {
	if (raycaster_paused == false && settings.slice.visible == false) {
		console.log("onCanvasMouseDown();");

		e.preventDefault();
		mouse.x = ((e.clientX - sizes.left) / sizes.width) * 2 - 1;
		mouse.y = -((e.clientY - sizes.top) / sizes.height) * 2 + 1;
		raycaster.setFromCamera(mouse, camera);

		last_intersected.material.color.setStyle(settings.brain.color.active);

		raycaster_paused = true;
	}
}

function onCanvasMouseUp(e) {
	console.log("onDocumentMouseUp();");

	if (raycaster_paused == true && settings.slice.visible == false) {
		raycaster_paused = false;
	}
}

function onDocumentClick(e) {
	// if (raycaster_paused == false && settings.slice.visible == false) {
	// 	console.log("onDocumentClick();");
	// 	e.preventDefault();
	// 	// mouse_click.x = ((e.clientX - sizes.left) / sizes.width) * 2 - 1;
	// 	// mouse_click.y = -((e.clientY - sizes.top) / sizes.height) * 2 + 1;
	// 	raycaster.setFromCamera(mouse_down, camera);
	// 	var intersects = raycaster.intersectObjects(scene.children, true);
	// 	if (intersects.length > 0) {
	// 		// Force click event to happen after mouseup event
	// 		raycaster_paused = true;
	// 		last_intersected = intersects[0].object;
	// 		switchRegion(last_intersected.name);
	// 	}
	// }
}

function animate() {
	// Rerun animate() as fast as the browser can
	requestAnimationFrame(animate);

	// Hover effects on brain region meshes
	rayCast();

	controls.update();

	renderer.render(scene, camera);
}

function rayCast() {
	// Raycasting for hover events on brain regions
	if (raycaster_paused == false && settings.slice.visible == false) {
		// Set the raycaster with current mouse and camera position
		raycaster.setFromCamera(mouse, camera);

		// Get an array of intersecting brain region meshes
		// scene.children[2] contains brain region meshes, excluding head mesh
		var intersects = raycaster.intersectObjects(ray_objects);

		// Set and unset brain region mesh color when hovered
		if (intersects.length > 0) {
			if (intersects[0].object != last_intersected) {
				if (last_intersected) {
					// A region different than the one previously hovered is last_intersected
					last_intersected.material.color.setStyle(
						settings.brain.color.default
					);
				}

				// Nearest object to camera is intersects[0] which we will change color
				last_intersected = intersects[0].object;
				last_intersected.material.color.setStyle(
					settings.brain.color.hover
				);
			}
		} else {
			if (last_intersected) {
				// No meshes are last_intersected, set last last_intersected region to default color
				last_intersected.material.color.setStyle(
					settings.brain.color.default
				);
			}

			last_intersected = null;
		}
	}
}

function setupRegionsFilter() {
	// Add functionality to the <select> dropdown to select regions
	document.querySelector(".regions-filter").onchange = e => {
		console.log("change!");
		// Pause raycasting
		raycaster_paused = true;

		var region_id = e.target.value;

		switchRegion(region_id);
	};
}

function switchRegion(region_id) {
	// Get the full region object by the region_id
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

	// Hide the spinner from the site
	document.querySelector("html").classList.add("is-loaded");

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
	sliceToggle();
	orbitToggle();
	headToggle();
	// squareGridToggle();
	// polarGridToggle();
	// axesToggle();
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
	var slice_toggle = document.querySelector(".slice-toggle input");

	slice_toggle.addEventListener("change", function() {
		if (slice_toggle.checked) {
			setupSliceTool();
		} else {
			hideSliceTool();
		}

		scrollTop();
	});
}

function setupSliceTool() {
	settings.slice.visible = true;

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

	// Adjust camera for full view of slice
	sliceCameraCentering();

	// Detect change to slice axis buttons
	document
		.querySelectorAll('[name="slice_axis"]')
		.forEach(function(axis_button) {
			axis_button.addEventListener("change", function() {
				// Set slice axis
				settings.slice.axis = document.querySelector(
					'[name="slice_axis"]:checked'
				).value;

				saveSettings();

				sliceCameraCentering();

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
}

function hideSliceTool() {
	settings.slice.visible = false;

	// Hide slice tool
	document.querySelector(".slice-tool").classList.add("is-hidden");

	// Remove the slicing
	renderer.localClippingEnabled = false;
	renderer.clippingPlanes = [];

	// Update the settings and toggle button
	document.querySelector(".slice-toggle input").checked = false;
}

function sliceCameraCentering() {
	if (settings.slice.axis == "y") {
		camera.position.set(50, 0, 0);
	}
	if (settings.slice.axis == "x") {
		camera.position.set(0, 0, 50);
	}
	if (settings.slice.axis == "z") {
		camera.position.set(0, 50, 0);
	}
}

function slice() {
	// Stop orbiting
	controls.autoRotate = false;

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
		"models/" + settings.head_model_path,
		function(gltf) {
			updateStatus("Rendering Head");
			gltf.scene.traverse(function(mesh) {
				if (mesh.isMesh) {
					mesh.material.roughness = settings.head.roughness;
					mesh.material.metalness = settings.head.metalness;
					mesh.material.wireframe = settings.head.wireframe;
					mesh.material.color.setStyle(settings.head.color.default);
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

			console.log(scene.children);
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
					mesh.material.color.setStyle(settings.head.color.default);
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

function scrollTop() {
	window.scroll(0, 0);
}
