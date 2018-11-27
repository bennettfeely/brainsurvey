settings = {
	autosave: false,

	// Models
	model_path: "models/Brain_05/Brain_005.gltf",

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
	categorical_colors: false,
	default_color: "lightcoral",

	// Displays
	explode: 0,

	// Shouldn't need this eventually
	offset: {
		x: -2.25,
		y: 0,
		z: 0
	}
};

team_arr = [
	{
		name: "Webster H. Pilcher, MD, PhD",
		img_src: "Webster_Pilcher.jpg",
		titles: [
			"Ernest & Thelma Del Monte Distinguished Professor of Neuromedicine",
			"Chairman of the Department of Neurosurgery, University of Rochester"
		],
		bio:
			"Dr. Pilcher’s clinical focus includes epilepsy surgery, brain tumors and general neurosurgery, with special emphasis on introaoperative awake mapping techniques to identify and protect critical language, sensory and motor functions.\n\nDr. Pilcher is a graduate of Colgate University and the University of Rochester Medical School where he received his MD/PhD. Following neurosurgery training at the University of Rochester, he was awarded the Charles A. Ellsberg fellowship to study epilepsy and brain tumor surgery with George Ojemann, MD, at the University of Washington in Seattle. In 1990, Dr. Pilcher joined the faculty at the University of Rochester, and was appointed to Chairman in 2002. As Chairman, Dr. Pilcher grew a small clinical service consisting of 5 neurosurgeons into a nationally recognized academic and clinical enterprise. Rochester Neurosurgery Partners now provides care in all health systems in Rochester and 10 regional clinics."
	},
	{
		name: "Bradford Z. Mahon, PhD",
		img_src: "Brad_Mahon.jpg",
		titles: [
			"Department of Neurosurgery, University of Rochester",
			"Department of Psychology, Carnegie Mellon University"
		],
		bio:
			"Dr. Mahon is a cognitive neuroscientist who studies how the brain recovers from injury. His research seeks to optimize techniques to map cognitive, language, sensory and motor functions in the brain. He specializes in using functional and structural MRI to map critical functions in brain tumor patients prior to surgery.\n\nDr. Mahon is a graduate of Harvard University (BS 2002, PhD 2009), and was on the faculty at the University of Rochester from 2011-2018. His current academic appointment is in the Department of Psychology at Carnegie Mellon University. He continues his work with the Translational Brain Mapping program and maintains a clinical research lab based at the Rochester Center for Brain Imaging, supported by funding from the National Science Foundation and the National Institute of Health."
	},
	{
		name: "Kevin Walter, MD",
		img_src: "Kevin_Walter.jpg",
		titles: [
			"Associate Professor of Neurosurgery and Oncology at the University of Rochester Medical Center",
			"Chief of Neurosurgery at UR Medicine's Highland Hospital"
		],
		bio:
			"Dr. Walter has special expertise in image guided neurosurgery, radiosurgery, and complex spinal surgery for tumors. He runs an active clinical research program that is involved in evaluating experimental therapeutics for patients with brain and spinal cancer. He is particularly interested in developing therapies that not only extend survival, but that also improve the quality of life for people afflicted with these diseases.\n\nDr. Walter is a graduate of Williams College (BA, 1990) and Johns Hopkins University (MD, 1995). He completed his neurosurgical residency training at Johns Hopkins University and Hospital, where he also completed a National Cancer Institute sponsored fellowship in neuro-oncology. Following completion of residency training he served on the faculty at the University of Pittsburgh, where he was named director of adult neuro-oncology, and was recruited to the University of Rochester in 2007."
	},
	{
		name: "Yan Michael Li, MD, PhD",
		img_src: "Yan_Michael_Li.jpg",
		titles: [
			"Assistant Professor, Departments of Neurosurgery and Oncology"
		],
		bio:
			"Dr. Li specializes in the treatment of brain tumors and complex spine diseases. He is currently studying the maximal safe resection of brain and spine tumor, and cancer-specific targeted therapy for brain and spine tumors.\n\nDr. Li received his medical degree from Peking Union Medical College and his PhD from University of Texas MD Anderson Cancer Center. He completed his neurosurgical residency and an enfolded complex spine fellowship at State University of New York, as well as fellowships at Dana Farber Cancer Center, Boston Children Hospital, Brigham and Women's Hospital Harvard Medical School, as well as the Neurosurgical Oncology fellowship at University of Texas MD Anderson Cancer Center."
	},
	{
		name: "George E. Vates, MD, PhD",
		img_src: "G_E_Vates.jpg",
		titles: ["Departments of Neurosurgery, Medicine"],
		bio:
			"Dr. Vates specializes in transsphenoidal pituitary surgery, skull base surgery, and management of subarachnoid aneurysms.\n\nDr. Vates graduated summa cum laude from Duke University, and obtained his medical degree from Cornell University Medical College. During medical training, he obtained a PhD in neuroscience from the Rockefeller University. After medical school, Dr. Vates’s resident training he specialized techniques of transsphenoidal pituitary surgery. Dr. Vates then completed a fellowship in cerebrovascular and skull base surgery at the Brigham and Women's Hospital, Harvard Medical School, and joined the faculty at the University of Rochester in 2004. As the neurosurgeon co-director of the University of Rochester Multidisciplinary Neuroendocrinology Clinic, Dr. Vates has established the clinic as a regional referral center for patients with pituitary tumors."
	},
	{
		name: "Bogachan Sahin, MD, PhD",
		img_src: "Bogachan_Sahin.jpg",
		titles: [
			"Assistant Professor, Department of Neurology",
			"Chief of Neurology and Stroke Center Director at UR Medicine’s Highland Hospital",
			"Director of the Vascular Neurology Fellowship Program, University of Rochester"
		],
		bio:
			"Dr. Sahin specializes in stroke in the young, cerebral vasculopathies, and hereditary stroke disorders. His research is focused on mechanisms of visual recovery in stroke survivors, occult atrial fibrillation as a cause of cryptogenic stroke, and carotid revascularization in asymptomatic carotid disease.\n\nDr. Sahin majored in molecular biology as an undergraduate at Princeton University. He completed his M.D. and Ph.D. training at the University of Texas Southwestern Medical Center at Dallas, where he studied motor learning, synaptic plasticity, and post-synaptic signal transduction. After completing his neurology residency and stroke fellowship at Johns Hopkins University, he joined the faculty of the Department of Neurology at the University of Rochester Medical Center in 2013."
	},
	{
		name: "Zoë Williams, MD",
		img_src: "Zoe_Williams.jpg",
		titles: [
			"Associate Professor, Ophthalmology, Neurology and Neurosurgery"
		],
		bio:
			"Dr. Williams’ research involves using MRI and optical coherence tomography to study resilience to degeneration in a range of diseases that affect site, with emphasis on pituitary tumors and strokes that affect the early visual system.\n\nDr. Williams obtained her undergraduate degree in Biology from Yale University, her Medical Degree at Wake Forest University School of Medicine, and completed her Residency in Ophthalmology at the University of Rochester. She then went on to complete a fellowship in Neuro-ophthalmology at the Wilmer Eye Institute, at Johns Hopkins University. She joined the faculty at Flaum Eye Institute at the University of Rochester Medical School in 2009."
	},
	{
		name: "Colleen Schneider",
		img_src: "Colleen_Schneider.jpg",
		titles: [
			"Medical Student Training Program (MD/PhD Program)",
			"Brain and Cognitive Sciences, University of Rochester"
		],
		bio:
			"Colleen Schneider is a PhD student whose research seeks to understand the neural mechanisms through which vision recovers after stroke."
	},
	{
		name: "Adnan Hirad, PhD",
		img_src: "Adnan_Hirad.jpg",
		titles: [
			"Translational Biomedical Science Program",
			"Medical Student Training Program (MD/PhD Program)"
		],
		bio:
			"Dr. Hirad’s research seeks to understand how subconcussive and concussive traumatic head injuries affect the brain. His work focuses on developing novel MRI-based assays of neurotrama associated with closed head injury."
	},
	{
		name: "Gauri Patil",
		img_src: "Gauri_Patil.jpg",
		titles: ["Brain and Cognitive Sciences, University of Rochester"],
		bio:
			"Gauri Patil is an undergraduate student (BS, expected 2019) majoring in Brain and Cognitive Sciences. She is pre-admitted to the University of Rochester Medical School through the Rochester Early Medical Scholar’s program."
	},
	{
		name: "Sam Haber, BS",
		img_src: "Sam_Haber.jpg",
		titles: ["Clinical Research Coordinator, Department of Neurosurgery"],
		bio:
			"Sam Haber completed his BS in Brain and Cognitive Sciences at the University of Rochester (2018) and currently runs pre- and post-operative evaluations of brain tumor patients. He also assists in the operating room with cognitive testing during awake craniotomies to map critical language, sensory and motor functions."
	},
	{
		name: "Emily Prentiss, BS",
		img_src: "Emily_Prentiss.jpg",
		titles: ["Clinical Research Coordinator, Department of Neurosurgery"],
		bio:
			"Emily Prentiss completed her BS in Brain and Cognitive Sciences at the University of Rochester  (2016) and worked for two years as a laboratory technician with Drs. Mahon, Sahin and Williams before joining the Department of Neurology as a full time Clinical Research Coordinator."
	}
];

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
		full_name: "Right Heschls Gyrus Includes H And H",
		path: "right-heschls-gyrus-includes-h-and-h"
	},
	Right_Heschls_Gyrus__includes_H1_and_H2_78: {
		full_name: "Right Heschls Gyrus Includes H And H",
		path: "right-heschls-gyrus-includes-h-and-h"
	},
	Left_Planum_Polare_74: {
		full_name: "Left Planum Polare",
		path: "left-planum-polare"
	},
	Left_Heschls_Gyrus__includes_H1_and_H2_77: {
		full_name: "Left Heschls Gyrus Includes H And H",
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
		full_name: "Left Heschls Gyrus Includes H And H",
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
	updateStatus("Loading model");

	// Navigate to correct page
	route();

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
			i = 0;
			gltf.scene.traverse(function(mesh) {
				if (mesh.isMesh) {
					i++;
					// Global mesh styles
					// if (i == 0) {
					// 	mesh.material.roughness = settings.roughness;
					// 	mesh.material.metalness = settings.metalness;
					// 	mesh.material.wireframe = settings.wireframe;
					// }

					mesh.material.roughness = settings.roughness;
					mesh.material.metalness = settings.metalness;
					mesh.material.wireframe = settings.wireframe;
					mesh.material.color.setStyle(settings.default_color);

					// Create separate material instance and local mesh styles
					mesh.material = mesh.material.clone();

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

					// Add mesh object to regions object
					regions_obj[mesh.name].mesh = mesh;

					// Add item to datalist
					// prettier-ignore
					var option = '<option value="' 
							+ regions_obj[mesh.name].full_name 
						+ '" data-name="' + mesh.name + '"></option>';

					// prettier-ignore
					document.querySelector("#regions-datalist").innerHTML += option;

					// We're done traversing
					if (i == Object.keys(regions_obj).length) {
						var regions_filter = document.querySelector(
							".regions-filter"
						);

						regions_filter.addEventListener("input", function() {
							var selector =
								'[value="' + regions_filter.value + '"]';
							var option = document.querySelector(selector);

							if (option !== null) {
								switchRegion(option.dataset.name);
							}
						});
					}
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
		},
		function(xhr) {
			if (xhr) {
				var pct = (xhr.loaded / xhr.total) * 100;

				updateStatus("Loading model " + pct + "%");
			}
		},
		function(error) {
			console.log(error);
			updateStatus("Error loading model");
		}
	);

	// Render the canvas
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

	// Scroll to top of page
	window.scroll(0, 0);

	// Reset the counter
	i = 0;

	// Make all other regions transparent
	scene.traverse(function(mesh) {
		if (mesh.isMesh) {
			// Return all regions to opaque state first
			mesh.material.transparent = false;
			mesh.material.opacity = 1;

			if (mesh.name !== region_id) {
				mesh.material.transparent = true;
				mesh.material.opacity = 0.1;
				mesh.material.color.setStyle(settings.default_color);
			} else {
				// // Set origin to center of region
				// mesh.geometry.computeBoundingSphere();
				// var x = mesh.geometry.boundingSphere.center.x;
				// var y = mesh.geometry.boundingSphere.center.y;
				// var z = mesh.geometry.boundingSphere.center.z;
				// controls.target.set(x, y, z);
				// controls.update();
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
}

function initSettings() {
	// Orbit Toggle
	orbitToggle();

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

function reset() {
	console.log("reset();");

	// Change the URL
	history.pushState(null, null, "/");

	// Scroll to top of page
	window.scroll(0, 0);

	// Return origin to center of model
	controls.target.set(0, 0, 0);
	controls.update();

	// Reset the counter
	i = 0;

	// Make all regions opaque again
	scene.traverse(function(mesh) {
		if (mesh.isMesh) {
			mesh.visible = true;
			mesh.material.transparent = false;
			mesh.material.opacity = 1;
			mesh.material.color.setStyle(settings.default_color);
		}
	});

	// Remove has content class from html
	document
		.querySelector("html")
		.classList.remove("has-region-content", "has-content");
	document.querySelector(".brain-wrapper").classList.remove("is-hidden");
	document.querySelector(".regions-wrapper").classList.remove("is-inactive");
	document.querySelector(".settings-wrapper").classList.remove("is-inactive");

	// Clear the region from the regions filter
	document.querySelector(".regions-filter").value = "";

	// Empty the content wrapper
	document.querySelector(".content-wrapper .container").innerHTML = "";
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
