settings = {
	autosave: false,

	// Animations
	orbit: true,
	orbit_speed: 3,

	// Helpers
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
			y: 12,
			z: 7
		}
	},

	// Materials
	brain: {
		model_path: "Brain_07/Brain_007.gltf",
		model_size: 3542464,
		roughness: 0.15,
		metalness: 0.25,
		wireframe: false,
		color: {
			default: "salmon",
			hover: "firebrick",
			active: "darkred",
			focus: "#fdfa00"
		},
		offset: {
			x: -1.8,
			y: -0.5,
			z: 0
		},
		hemispheres: {
			left: {
				visible: true
			},
			right: {
				visible: true
			}
		}
	},
	head: {
		model_path: "Head_02/Head_02.gltf",
		model_size: 567684,
		visible: false,
		roughness: 1,
		metalness: 0,
		wireframe: true,
		color: {
			default: "#1a1a1a"
		},
		offset: {
			x: -1.8,
			y: -0.2,
			z: 0
		}
	}
};

regions_obj={ R_Frontal_Pole_0:{path:"right-frontal-pole",full_name:"Right Frontal Pole",wiki:"Cerebral_hemisphere"},R_Insular_Cortex_1:{path:"right-insular-cortex",full_name:"Right Insular Cortex",wiki:"Insular_cortex"},R_Middle_Frontal_Gyrus_3:{path:"right-middle-frontal-gyrus",full_name:"Right Middle Frontal Gyrus",wiki:"Frontal_gyri"},R_Inferior_Frontal_Gyrus__pars_opercularis_5:{path:"right-inferior-frontal-gyrus-(pars-opercularis)",full_name:"Right Inferior Frontal Gyrus (pars opercularis)",wiki:"Frontal_gyri"},R_Inferior_Frontal_Gyrus__pars_triangularis_4:{path:"right-inferior-frontal-gyrus-(pars-triangularis)",full_name:"Right Inferior Frontal Gyrus (pars triangularis)",wiki:"Frontal_gyri"},R_Temporal_Pole_7:{path:"right-temporal-pole",full_name:"Right Temporal Pole",wiki:"Cerebral_hemisphere"},R_Precentral_Gyrus_6:{path:"right-precentral-gyrus",full_name:"Right Precentral Gyrus",wiki:"Precentral_gyrus"},R_Middle_Temporal_Gyrus__anterior_division_8:{path:"right-middle-temporal-gyrus-(anterior-division)",full_name:"Right Middle Temporal Gyrus (anterior division)",wiki:"Middle_temporal_gyrus"},R_Superior_Temporal_Gyrus__posterior_division_9:{path:"right-superior-temporal-gyrus-(posterior-division)",full_name:"Right Superior Temporal Gyrus (posterior division)",wiki:"Superior_temporal_gyrus"},R_Middle_Temporal_Gyrus__anterior_division_10:{path:"right-middle-temporal-gyrus-(anterior-division)",full_name:"Right Middle Temporal Gyrus (anterior division)",wiki:"Middle_temporal_gyrus"},R_Middle_Temporal_Gyrus__posterior_division_11:{path:"right-middle-temporal-gyrus-(posterior-division)",full_name:"Right Middle Temporal Gyrus (posterior division)",wiki:"Middle_temporal_gyrus"},R_Middle_Temporal_Gyrus__temporooccipital_part_12:{path:"right-middle-temporal-gyrus-(temporooccipital-part)",full_name:"Right Middle Temporal Gyrus (temporooccipital part)",wiki:"Middle_temporal_gyrus"},R_Inferior_Temporal_Gyrus__posterior_division_13:{path:"right-inferior-temporal-gyrus-(posterior-division)",full_name:"Right Inferior Temporal Gyrus (posterior division)",wiki:"Inferior_temporal_gyrus"},R_Inferior_Temporal_Gyrus__temporooccipital_part_14:{path:"right-inferior-temporal-gyrus-(temporooccipital-part)",full_name:"Right Inferior Temporal Gyrus (temporooccipital part)",wiki:"Inferior_temporal_gyrus"},R_Postcentral_Gyrus_15:{path:"right-postcentral-gyrus",full_name:"Right Postcentral Gyrus",wiki:"Postcentral_gyrus"},R_Superior_Parietal_Lobule_16:{path:"right-superior-parietal-lobule",full_name:"Right Superior Parietal Lobule",wiki:"Superior_parietal_lobule"},R_Supramarginal_Gyrus__anterior_division_17:{path:"right-supramarginal-gyrus-(anterior-division)",full_name:"Right Supramarginal Gyrus (anterior division)",wiki:"Supramarginal_gyrus"},R_Supramarginal_Gyrus__posterior_division_18:{path:"right-supramarginal-gyrus-(posterior-division)",full_name:"Right Supramarginal Gyrus (posterior division)",wiki:"Supramarginal_gyrus"},R_Angular_Gyrus_19:{path:"right-angular-gyrus",full_name:"Right Angular Gyrus",wiki:"Angular_gyrus"},R_Lateral_Occipital_Cortex__superior_division_20:{path:"right-lateral-occipital-cortex-(superior-division)",full_name:"Right Lateral Occipital Cortex (superior division)",wiki:"Occipital_lobe"},R_Lateral_Occipital_Cortex__inferior_division_21:{path:"right-lateral-occipital-cortex-(inferior-division)",full_name:"Right Lateral Occipital Cortex (inferior division)",wiki:"Occipital_lobe"},R_Intracalcarine_Cortex_22:{path:"right-intracalcarine-cortex",full_name:"Right Intracalcarine Cortex",wiki:"Intracalcarine Cortex"},R_Frontal_Medial_Cortex_23:{path:"right-frontal-medial-cortex",full_name:"Right Frontal Medial Cortex",wiki:"Prefrontal_cortex"},R_Juxtapositional_Lobule_Cortex__formerly_Supplementary_Motor_Cortex__24:{path:"right-juxtapositional-lobule-cortex-(formerly-supplementary-motor-cortex)",full_name:"Right Juxtapositional Lobule Cortex (formerly Supplementary Motor Cortex)",wiki:"Supplementary_motor_area"},R_Paracingulate_Gyrus_26:{path:"right-paracingulate-gyrus",full_name:"Right Paracingulate Gyrus",wiki:"Cingulate_cortex"},R_Subcallosal_Cortex_25:{path:"right-subcallosal-cortex",full_name:"Right Subcallosal Cortex",wiki:"Anterior_cingulate_cortex"},R_Cingulate_Gyrus__anterior_division_27:{path:"right-cingulate-gyrus-(anterior-division)",full_name:"Right Cingulate Gyrus (anterior division)",wiki:"Cingulate_cortex"},R_Cingulate_Gyrus__posterior_division_28:{path:"right-cingulate-gyrus-(posterior-division)",full_name:"Right Cingulate Gyrus (posterior division)",wiki:"Cingulate_cortex"},R_Precuneous_Cortex_29:{path:"right-precuneous-cortex",full_name:"Right Precuneous Cortex",wiki:"Precuneus"},R_Cuneal_Cortex_30:{path:"right-cuneal-cortex",full_name:"Right Cuneal Cortex",wiki:"Inferior_longitudinal_fasciculus"},R_Frontal_Orbital_Cortex_31:{path:"right-frontal-orbital-cortex",full_name:"Right Frontal Orbital Cortex",wiki:"Frontal_lobe"},R_Parahippocampal_Gyrus__anterior_division_32:{path:"right-parahippocampal-gyrus-(anterior-division)",full_name:"Right Parahippocampal Gyrus (anterior division)",wiki:"Parahippocampal_gyrus"},R_Parahippocampal_Gyrus__posterior_division_33:{path:"right-parahippocampal-gyrus-(posterior-division)",full_name:"Right Parahippocampal Gyrus (posterior division)",wiki:"Parahippocampal_gyrus"},R_Lingual_Gyrus_34:{path:"right-lingual-gyrus",full_name:"Right Lingual Gyrus",wiki:"Lingual_gyrus"},R_Angular_Gyrus_35:{path:"right-angular-gyrus",full_name:"Right Angular Gyrus",wiki:"Angular_gyrus"},R_Temporal_Fusiform_Cortex__posterior_division_36:{path:"right-temporal-fusiform-cortex-(posterior-division)",full_name:"Right Temporal Fusiform Cortex (posterior division)",wiki:"Fusiform_gyrus"},R_Temporal_Occipital_Fusiform_Cortex_37:{path:"right-temporal-occipital-fusiform-cortex",full_name:"Right Temporal Occipital Fusiform Cortex",wiki:"Fusiform_gyrus"},R_Occipital_Fusiform_Gyrus_38:{path:"right-occipital-fusiform-gyrus",full_name:"Right Occipital Fusiform Gyrus",wiki:"Fusiform_gyrus"},R_Frontal_Operculum_Cortex_39:{path:"right-frontal-operculum-cortex",full_name:"Right Frontal Operculum Cortex",wiki:"Operculum_(brain)"},R_Central_Opercular_Cortex_40:{path:"right-central-opercular-cortex",full_name:"Right Central Opercular Cortex",wiki:"Operculum_(brain)"},R_Parietal_Operculum_Cortex_41:{path:"right-parietal-operculum-cortex",full_name:"Right Parietal Operculum Cortex",wiki:"Operculum_(brain)"},R_Planum_Polare_42:{path:"right-planum-polare",full_name:"Right Planum Polare",wiki:"Auditory_cortex"},R_Heschl_s_Gyrus__includes_H1_and_H2__43:{path:"right-heschl's-gyrus-(includes-h1-and-h2)",full_name:"Right Heschl's Gyrus (includes H1 and H2)",wiki:"Transverse_temporal_gyrus"},R_Planum_Temporale_44:{path:"right-planum-temporale",full_name:"Right Planum Temporale",wiki:"Planum_temporale"},R_Supracalcarine_Cortex_45:{path:"right-supracalcarine-cortex",full_name:"Right Supracalcarine Cortex",wiki:"Calcarine_sulcus"},R_Occipital_Pole_47:{path:"right-occipital-pole",full_name:"Right Occipital Pole",wiki:"Cerebral_hemisphere"},R_Superior_Frontal_Gyrus_2:{path:"right-superior-frontal-gyrus",full_name:"Right Superior Frontal Gyrus",wiki:"Frontal_gyri"},L_Middle_Temporal_Gyrus__anterior_division_10:{path:"left-middle-temporal-gyrus-(anterior-division)",full_name:"Left Middle Temporal Gyrus (anterior division)",wiki:"Middle_temporal_gyrus"},L_Temporal_Occipital_Fusiform_Cortex_38:{path:"left-temporal-occipital-fusiform-cortex",full_name:"Left Temporal Occipital Fusiform Cortex",wiki:"Fusiform_gyrus"},L_Supramarginal_Gyrus__anterior_division_18:{path:"left-supramarginal-gyrus-(anterior-division)",full_name:"Left Supramarginal Gyrus (anterior division)",wiki:"Supramarginal_gyrus"},L_Insular_Cortex_1:{path:"left-insular-cortex",full_name:"Left Insular Cortex",wiki:"Insular_cortex"},L_Juxtapositional_Lobule_Cortex__formerly_Supplementary_Motor_Cortex__25:{path:"left-juxtapositional-lobule-cortex-(formerly-supplementary-motor-cortex)",full_name:"Left Juxtapositional Lobule Cortex (formerly Supplementary Motor Cortex)",wiki:"Supplementary_motor_area"},L_Inferior_Frontal_Gyrus__pars_opercularis_5:{path:"left-inferior-frontal-gyrus-(pars-opercularis)",full_name:"Left Inferior Frontal Gyrus (pars opercularis)",wiki:"Inferior_temporal_gyrus"},L_Frontal_Orbital_Cortex_32:{path:"left-frontal-orbital-cortex",full_name:"Left Frontal Orbital Cortex",wiki:"Frontal_lobe"},L_Middle_Temporal_Gyrus__posterior_division_11:{path:"left-middle-temporal-gyrus-(posterior-division)",full_name:"Left Middle Temporal Gyrus (posterior division)",wiki:"Middle_temporal_gyrus"},L_Occipital_Fusiform_Gyrus_39:{path:"left-occipital-fusiform-gyrus",full_name:"Left Occipital Fusiform Gyrus",wiki:"Fusiform_gyrus"},L_Supramarginal_Gyrus__posterior_division_19:{path:"left-supramarginal-gyrus-(posterior-division)",full_name:"Left Supramarginal Gyrus (posterior division)",wiki:"Supramarginal_gyrus"},L_Supracalcarine_Cortex_46:{path:"left-supracalcarine-cortex",full_name:"Left Supracalcarine Cortex",wiki:"Calcarine_sulcus"},L_Paracingulate_Gyrus_27:{path:"left-paracingulate-gyrus",full_name:"Left Paracingulate Gyrus",wiki:"Cingulate_cortex"},L_Inferior_Frontal_Gyrus__pars_triangularis_4:{path:"left-inferior-frontal-gyrus-(pars-triangularis)",full_name:"Left Inferior Frontal Gyrus (pars triangularis)",wiki:"Inferior_temporal_gyrus"},L_Parahippocampal_Gyrus__anterior_division_33:{path:"left-parahippocampal-gyrus-(anterior-division)",full_name:"Left Parahippocampal Gyrus (anterior division)",wiki:"Parahippocampal_gyrus"},L_Middle_Temporal_Gyrus__temporooccipital_part_12:{path:"left-middle-temporal-gyrus-(temporooccipital-part)",full_name:"Left Middle Temporal Gyrus (temporooccipital part)",wiki:"Middle_temporal_gyrus"},L_Frontal_Operculum_Cortex_40:{path:"left-frontal-operculum-cortex",full_name:"Left Frontal Operculum Cortex",wiki:"Operculum_(brain)"},L_Angular_Gyrus_20:{path:"left-angular-gyrus",full_name:"Left Angular Gyrus",wiki:"Angular_gyrus"},L_Subcallosal_Cortex_26:{path:"left-subcallosal-cortex",full_name:"Left Subcallosal Cortex",wiki:"Anterior_cingulate_cortex"},L_Planum_Temporale_45:{path:"left-planum-temporale",full_name:"Left Planum Temporale",wiki:"Planum_temporale"},L_Parahippocampal_Gyrus__posterior_division_34:{path:"left-parahippocampal-gyrus-(posterior-division)",full_name:"Left Parahippocampal Gyrus (posterior division)",wiki:"Parahippocampal_gyrus"},L_Inferior_Temporal_Gyrus__anterior_division_13:{path:"left-inferior-temporal-gyrus-(anterior-division)",full_name:"Left Inferior Temporal Gyrus (anterior division)",wiki:"Inferior_temporal_gyrus"},L_Central_Opercular_Cortex_41:{path:"left-central-opercular-cortex",full_name:"Left Central Opercular Cortex",wiki:"Operculum_(brain)"},L_Lateral_Occipital_Cortex__superior_division_21:{path:"left-lateral-occipital-cortex-(superior-division)",full_name:"Left Lateral Occipital Cortex (superior division)",wiki:"Occipital_lobe"},L_Lingual_Gyrus_35:{path:"left-lingual-gyrus",full_name:"Left Lingual Gyrus",wiki:"Lingual_gyrus"},L_Heschl_s_Gyrus__includes_H1_and_H2__44:{path:"left-heschl's-gyrus-(includes-h1-and-h2)",full_name:"Left Heschl's Gyrus (includes H1 and H2)",wiki:"Transverse_temporal_gyrus"},L_Cingulate_Gyrus__anterior_division_28:{path:"left-cingulate-gyrus-(anterior-division)",full_name:"Left Cingulate Gyrus (anterior division)",wiki:"Cingulate_cortex"},L_Precentral_Gyrus_6:{path:"left-precentral-gyrus",full_name:"Left Precentral Gyrus",wiki:"Precentral_gyrus"},L_Temporal_Pole_7:{path:"left-temporal-pole",full_name:"Left Temporal Pole",wiki:"Cerebral_hemisphere"},L_Inferior_Temporal_Gyrus__temporooccipital_part_15:{path:"left-inferior-temporal-gyrus-(temporooccipital-part)",full_name:"Left Inferior Temporal Gyrus (temporooccipital part)",wiki:"Inferior_temporal_gyrus"},L_Superior_Frontal_Gyrus_2:{path:"left-superior-frontal-gyrus",full_name:"Left Superior Frontal Gyrus",wiki:"Frontal_gyri"},L_Lateral_Occipital_Cortex__inferior_division_22:{path:"left-lateral-occipital-cortex-(inferior-division)",full_name:"Left Lateral Occipital Cortex (inferior division)",wiki:"Occipital_lobe"},L_Cingulate_Gyrus__posterior_division_29:{path:"left-cingulate-gyrus-(posterior-division)",full_name:"Left Cingulate Gyrus (posterior division)",wiki:"Cingulate_cortex"},L_Middle_Temporal_Gyrus__anterior_division_8:{path:"left-middle-temporal-gyrus-(anterior-division)",full_name:"Left Middle Temporal Gyrus (anterior division)",wiki:"Middle_temporal_gyrus"},L_Angular_Gyrus_36:{path:"left-angular-gyrus",full_name:"Left Angular Gyrus",wiki:"Angular_gyrus"},L_Parietal_Operculum_Cortex_42:{path:"left-parietal-operculum-cortex",full_name:"Left Parietal Operculum Cortex",wiki:"Operculum_(brain)"},L_Postcentral_Gyrus_16:{path:"left-postcentral-gyrus",full_name:"Left Postcentral Gyrus",wiki:"Postcentral_gyrus"},L_Planum_Polare_43:{path:"left-planum-polare",full_name:"Left Planum Polare",wiki:"Auditory_cortex"},L_Intracalcarine_Cortex_23:{path:"left-intracalcarine-cortex",full_name:"Left Intracalcarine Cortex",wiki:"Intracalcarine Cortex"},L_Precuneous_Cortex_30:{path:"left-precuneous-cortex",full_name:"Left Precuneous Cortex",wiki:"Precuneus"},L_Superior_Temporal_Gyrus__posterior_division_9:{path:"left-superior-temporal-gyrus-(posterior-division)",full_name:"Left Superior Temporal Gyrus (posterior division)",wiki:"Superior_temporal_gyrus"},L_Temporal_Fusiform_Cortex__posterior_division_37:{path:"left-temporal-fusiform-cortex-(posterior-division)",full_name:"Left Temporal Fusiform Cortex (posterior division)",wiki:"Fusiform_gyrus"},L_Superior_Parietal_Lobule_17:{path:"left-superior-parietal-lobule",full_name:"Left Superior Parietal Lobule",wiki:"Superior_parietal_lobule"},L_Frontal_Pole_0:{path:"left-frontal-pole",full_name:"Left Frontal Pole",wiki:"Cerebral_hemisphere"},L_Frontal_Medial_Cortex_24:{path:"left-frontal-medial-cortex",full_name:"Left Frontal Medial Cortex",wiki:"Prefrontal_cortex"},L_Middle_Frontal_Gyrus_3:{path:"left-middle-frontal-gyrus",full_name:"Left Middle Frontal Gyrus",wiki:"Frontal_gyri"},L_Cuneal_Cortex_31:{path:"left-cuneal-cortex",full_name:"Left Cuneal Cortex",wiki:"Inferior_longitudinal_fasciculus"},L_Occipital_Pole_48:{path:"left-occipital-pole",full_name:"Left Occipital Pole",wiki:"Cerebral_hemisphere"},L_Inferior_Temporal_Gyrus__posterior_division_14:{path:"left-inferior-temporal-gyrus-(posterior-division)",full_name:"Left Inferior Temporal Gyrus (posterior division)",wiki:"Inferior_temporal_gyrus"},Left_Lateral_Ventricle_3:{path:"left-lateral-ventricle",full_name:"Left Lateral Ventricle",wiki:"Lateral_ventricles"},Left_Thalamus_4:{path:"left-thalamus",full_name:"Left Thalamus",wiki:"Thalamus"},Left_Caudate_5:{path:"left-caudate",full_name:"Left Caudate",wiki:"Caudate_nucleus"},Left_Putamen_7:{path:"left-putamen",full_name:"Left Putamen",wiki:"Putamen"},Left_Pallidum_8:{path:"left-pallidum",full_name:"Left Pallidum",wiki:"Globus_pallidus"},Brain_Stem_9:{path:"brainstem",full_name:"Brainstem",wiki:"Brainstem"},Left_Hippocampus_10:{path:"left-hippocampus",full_name:"Left Hippocampus",wiki:"Hippocampus"},Left_Amygdala_11:{path:"left-amygdala",full_name:"Left Amygdala",wiki:"Amygdala"},Left_Accumbens_12:{path:"left-accumbens",full_name:"Left Accumbens",wiki:"Basal_ganglia"},Right_Lateral_Ventricle_15:{path:"right-lateral-ventricle",full_name:"Right Lateral Ventricle",wiki:"Lateral_ventricles"},Right_Thalamus_16:{path:"right-thalamus",full_name:"Right Thalamus",wiki:"Thalamus"},Right_Caudate_17:{path:"right-caudate",full_name:"Right Caudate",wiki:"Caudate_nucleus"},Right_Putamen_18:{path:"right-putamen",full_name:"Right Putamen",wiki:"Putamen"},Right_Pallidum_19:{path:"right-pallidum",full_name:"Right Pallidum",wiki:"Globus_pallidus"},Right_Hippocampus_20:{path:"right-hippocampus",full_name:"Right Hippocampus",wiki:"Hippocampus"},Right_Amygdala_21:{path:"right-amygdala",full_name:"Right Amygdala",wiki:"Amygdala"},Right_Accumbens_22:{path:"right-accumbens",full_name:"Right Accumbens",wiki:"Basal_ganglia"}}
// IDEA
// get bounding box for whole brain for slice tool dimensions

var html = document.querySelector("html");
var brain_wrapper = document.querySelector(".brain-wrapper");

is_region_page = false;
is_tapping = false;
is_raycaster_paused = false;

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
	updateStatus("Loading model...");

	// Get the canvas initial size
	getSizes();

	// Setup Camera
	camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 1000);
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
	filter_objects = [];

	// Load manager
	var brain_manager = new THREE.LoadingManager();
	brain_manager.onStart = function(url, itemsLoaded, itemsTotal) {
		updateStatus("Receiving data (" + itemsLoaded + "/" + itemsTotal + ")");
	};

	brain_manager.onLoad = function() {
		updateStatus("Rendering brain...");

		// Remove the spinner
		var spinner = document.querySelector(".spinner");
		if (spinner !== null) {
			spinner.parentNode.removeChild(spinner);
		}
	};

	brain_manager.onProgress = function(url, itemsLoaded, itemsTotal) {
		// Sometimes it will display 4/3 items loaded, this is a fix
		// if (itemsLoaded > itemsTotal) {
		// 	var itemsLoaded = itemsTotal;
		// }

		updateStatus("Loading brain (" + itemsLoaded + "/" + itemsTotal + ")");
	};

	brain_manager.onError = function(url) {
		updateStatus("Error loading brain");
	};

	var loader = new THREE.GLTFLoader(brain_manager);
	loader.load(
		"models/" + settings.brain.model_path,
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

					// Add mesh object to other object groupings
					regions_obj[mesh.name].mesh = mesh;
					ray_objects.push(mesh);
					filter_objects.push({
						full_name: regions_obj[mesh.name].full_name,
						region_id: mesh.name,
					});

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
			var pct = Math.round((xhr.loaded / settings.brain.model_size) * 100);
			updateStatus("Loading brain " + pct + "%");
		},
		function(error) {
			console.log(error);
		}
	);

	// Setup Lighting
	var light = new THREE.HemisphereLight(0xff9999, 1);
	scene.add(light);
	var directionalLight = new THREE.DirectionalLight(0xffd6d6, 0.5);
	directionalLight.position.set(10, 30, 0);
	scene.add(directionalLight);

	// Setup raycaster
	raycaster = new THREE.Raycaster();
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

	// Interactions with the brain
	var canvas = document.querySelector(".brain-wrapper canvas");
	canvas.addEventListener("mousemove", onCanvasMove, false);
	canvas.addEventListener("mousedown", onCanvasDown, false);
	canvas.addEventListener("mouseup", onCanvasUp, false);
	canvas.addEventListener("mousedown", onCanvasDown, false);

	canvas.addEventListener("dblclick", onCanvasDblClick, false);

	canvas.addEventListener("touchmove", onCanvasMove, false);
	canvas.addEventListener("touchstart", onCanvasDown, false);
	canvas.addEventListener("touchend", onCanvasUp, false);

	// Detect click for back button
	// TODO: Look into attaching reset() to html button itself
	document
		.querySelector(".back-button")
		.addEventListener("click", function() {
			reset();

			is_raycaster_paused = false;
		});
}

function getSizes() {
	sizes = document.querySelector(".brain-wrapper").getBoundingClientRect();
}

function setCanvasSize() {
	getSizes();

	// Set the size of the canvas to fill the .brain-wrapper
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();

	renderer.setSize(sizes.width, sizes.height);
}

function animate() {
	// Rerun animate() as fast as possible
	requestAnimationFrame(animate);

	controls.update();

	renderer.render(scene, camera);
}

function getCanvasMousePosition(e) {
	// Get the mouse/touch position and set it relative to .brain-wrapper
	if (e.type == "touchstart" || e.type == "touchmove") {
		// Touch events
		is_tapping = true;

		x_pos = e.touches[0].pageX;
		y_pos = e.touches[0].pageY;

	} else if (e.type = "mousemove") {
		// Mouse events
		is_tapping = false;

		x_pos = e.clientX;
		y_pos = e.clientY;
	}

	mouse.x = ((x_pos - sizes.left) / sizes.width) * 2 - 1;
	mouse.y = -((y_pos - sizes.top) / sizes.height) * 2 + 1;
}

function onCanvasMove(e) {
	e.preventDefault();

	getCanvasMousePosition(e);

	rayCast(settings.brain.color.hover);
}

function onCanvasDown(e) {
	e.preventDefault();

	getCanvasMousePosition(e);

	rayCast(settings.brain.color.hover);

	is_raycaster_paused = true;
}

function onCanvasUp(e) {
	e.preventDefault();

	if (is_region_page == false && settings.slice.visible == false) {
		is_raycaster_paused = false;
	}
}

function onCanvasDblClick(e) {
	e.preventDefault();

	getCanvasMousePosition(e);

	rayCast(settings.brain.color.active);

	is_raycaster_paused = true;

	switchRegion(last_intersected.name);
}

function rayCast(color) {
	// Raycasting for hover events on brain regions
	if (is_region_page == false && is_raycaster_paused == false && settings.slice.visible == false) {
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
				last_intersected.material.color.setStyle(color);

				if (is_tapping == true) {
					updateStatus(regions_obj[last_intersected.name].full_name, "Tap here to explore region");
					
					// Switch to region when sub status is clicked
					document.querySelector(".status-wrapper .sub-status").onclick = function() {
						switchRegion(last_intersected.name);
					};
				} else {
					updateStatus(regions_obj[last_intersected.name].full_name, "Double click brain region to explore");
				}
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
	// Fuse search options
	var options = {
		shouldSort: true,
		threshold: 0.4,
		location: 0,
		distance: 100,
		maxPatternLength: 20,
		minMatchCharLength: 5,
		keys: ["full_name"]
	};

	var fuse = new Fuse(filter_objects, options);
	var regions_results = document.querySelector('.regions-results');

	document.querySelector(".regions-search").onkeyup = e => {
		is_raycaster_paused = true;

		// Search the regions with fuse
		var results = fuse.search(e.target.value).slice(0, 5);

		// Clear the regions results
		regions_results.innerHTML = '';

		// Iterate over the results and append them to the dropdown
		results.forEach(function(result) {
			console.log(result);
			var region_result = document.createElement("div");
				region_result.textContent = result.full_name;
				region_result.className = "regions-result";
				region_result.dataset.region_id = result.region_id;

				region_result.addEventListener("click", function(item){
					var region_id = item.target.dataset.region_id;

					switchRegion(region_id);
				});

			regions_results.appendChild(region_result);
		});
	};
}

function switchRegion(region_id) {
	is_region_page = true;

	// Get the full region object by the region_id
	var target_obj = regions_obj[region_id];

	// Change the URL
	history.pushState(null, null, "/" + target_obj.path);

	// Change page class
	document
		.querySelector("html")
		.classList.add("has-region-content", "has-content");
	
	// Clear the status
	updateStatus("");

	// Rerender the page
	renderer.render(scene, camera);

	// Reset the counter
	i = 0;

	// Reset the content wrapper
	document.querySelector(".content-wrapper .container").innerHTML = "";

	// Clear the regions results
	document.querySelector('.regions-search').value = "";
	document.querySelector('.regions-results').innerHTML = "";

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
		target_obj.wiki +
		"&callback=?";

	// Set the title
	document.querySelector(".content-wrapper .container").innerHTML +=
		"<h2>" + target_obj.full_name + "</h2>";

	// Get Wikipedia summary
	JSONP({
		url: request_url,
		success: function(data) {
			// Get the article id, the first object
			var article_id = Object.keys(data.query.pages)[0];

			console.log(article_id);
			console.log(data);

			// We got the summary
			var sub_heading =
				'<cite>From the article <a href="https://en.wikipedia.org/wiki/' +
				target_obj.wiki +
				'">' +
				data.query.pages[article_id].title +
				"</a> on Wikipedia.</cite>";

			document.querySelector(".content-wrapper .container").innerHTML += sub_heading;

			var article_extract =
				"<p>" + data.query.pages[article_id].extract + "</p>";
			
			document.querySelector(".content-wrapper .container").innerHTML += article_extract;
		},
		error: function(error) {
			console.log(error);
			document.querySelector(".content-wrapper .container").innerHTML +=
				"<p>Unable to retrieve Wikipedia article summary.</p>";
		}
	});

	// Scroll to top of page
	scrollTop();
}

function initSettings() {
	hemispheresToggle();
	headToggle();

	sliceToggle();

	orbitToggle();
	fullscreenToggle();
	// axesToggle();
}

function hemispheresToggle() {
	// Toggle visibility of entire hemispheres
	var left_hemisphere_toggle = document.querySelector(".left-hemisphere-toggle input");
	var right_hemisphere_toggle = document.querySelector(".right-hemisphere-toggle input");

	// Left hemisphere toggle
	left_hemisphere_toggle.checked = settings.brain.hemispheres.left.visible;
	left_hemisphere_toggle.addEventListener("change", function() {
		if (left_hemisphere_toggle.checked) {
			settings.brain.hemispheres.left.visible = true;
		} else {
			settings.brain.hemispheres.left.visible = false;

			// If both hemispheres are off, show the other one
			if (settings.brain.hemispheres.right.visible == false) {
				settings.brain.hemispheres.right.visible = true;

				right_hemisphere_toggle.checked = true;
			}
		}

		isolateHemispheres();

		scrollTop();

		saveSettings();
	});

	right_hemisphere_toggle.checked = settings.brain.hemispheres.right.visible;
	right_hemisphere_toggle.addEventListener("change", function() {
		if (right_hemisphere_toggle.checked) {
			settings.brain.hemispheres.right.visible = true;
		} else {
			settings.brain.hemispheres.right.visible = false;

			// If both hemispheres are off, show the other one
			if (settings.brain.hemispheres.left.visible == false) {
				settings.brain.hemispheres.left.visible = true;
				left_hemisphere_toggle.checked = true;
			}
		}

		isolateHemispheres();

		scrollTop();

		saveSettings();
	});
}

function isolateHemispheres() {
	// Iterate through meshes, looking for matching L_ or R_ prefixes to toggle visibility
	scene.traverse(function(mesh) {
		if (mesh.isMesh) {

			mesh.visible = false;

			// Show left hemisphere meshes
			if (settings.brain.hemispheres.left.visible == true) {
				if (mesh.name.startsWith("L_") || mesh.name.startsWith("Left_")) {
					mesh.visible = true;
				}
			}

			// Show right hemisphere meshes
			if (settings.brain.hemispheres.right.visible == true) {
				if (mesh.name.startsWith("R_") || mesh.name.startsWith("Right_")) {
					mesh.visible = true;
				}
			}


			if (settings.brain.hemispheres.left.visible == true && settings.brain.hemispheres.right.visible == true) {
				if (mesh.name == "Brain_Stem_9") {
					mesh.visible = true;
				}
			}


			if (mesh.name == "Head") {
				mesh.visible = true;
			}
		}
	});
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

			scrollTop();
		} else {
			hideSliceTool();
		}
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
	// Positions brain slice in best angle for each axis

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

// function axesToggle() {
// 	var axes_toggle = document.querySelector(".axes-toggle input");
// 	var axesHelper = new THREE.AxesHelper(10);

// 	axes_toggle.checked = settings.axes;
// 	if (settings.axes == true) {
// 		scene.add(axesHelper);
// 	} else {
// 		scene.remove(axesHelper);
// 	}

// 	axes_toggle.addEventListener("change", function() {
// 		if (axes_toggle.checked) {
// 			settings.axes = true;
// 			scene.add(axesHelper);
// 		} else {
// 			settings.axes = false;
// 			scene.remove(axesHelper);
// 		}

// 		scrollTop();

// 		saveSettings();
// 	});
// }

function fullscreenToggle() {
	var fullscreen = document.querySelector(".fullscreen-toggle");
	
	if (screenfull.enabled) {
		console.log("screenfull.enabled == true")
		var fullscreen_toggle = document.querySelector(".fullscreen-toggle input");

		fullscreen_toggle.addEventListener("change", function() {
			console.log("change!")
			if (fullscreen_toggle.checked) {
				screenfull.request();
			} else {
				screenfull.exit();
			}
		});
	} else {
		fullscreen.parentNode.removeChild(fullscreen);
	}
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

		scrollTop();

		saveSettings();
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
		"models/" + settings.head.model_path,
		function(gltf) {
			updateStatus("Rendering Head...");
			gltf.scene.traverse(function(mesh) {
				if (mesh.isMesh) {
					mesh.material.roughness = settings.head.roughness;
					mesh.material.metalness = settings.head.metalness;
					mesh.material.wireframe = settings.head.wireframe;
					mesh.material.color.setStyle(settings.head.color.default);
					mesh.visible = true;

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
			var pct = Math.round((xhr.loaded / settings.head.model_size) * 100);
			updateStatus("Loading model of head " + pct + "%");
		},
		function(error) {
			console.log(error);
			// updateStatus("Error loading model of head");
		}
	);
}

function reset() {
	is_region_page = false;

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
					// mesh.material.color.setStyle(settings.head.color.default);
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

	scrollTop();
}

function updateStatus(status, sub_status) {
	if (sub_status !== undefined) {
		var message = '<div class="status container">' 
				+ status 
				+ '<div class="sub-status">' + sub_status + '</div>'
			+ "</div>";
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

	scrollTop();
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
