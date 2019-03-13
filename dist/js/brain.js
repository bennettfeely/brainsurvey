settings = {
	autosave: false,

	// Animations
	orbit: false,
	orbit_speed: 3,

	// Helpers
	axes: true,
	stats: true,

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

	clouds: {
		brain: {
			path: "LR_HighRes_v4"
		},
		head: {
			path: "Head_v3"
		}
	}
};

regions_obj = {
	Angular_Gyrus: {
		path: "angular-gyrus",
		full_name: "Angular Gyrus",
		wiki: "Angular_gyrus"
	},
	Central_Opercular_Cortex: {
		path: "central-opercular-cortex",
		full_name: "Central Opercular Cortex",
		wiki: "Operculum_(brain)"
	},
	Cingulate_Gyrus_anterior_division: {
		path: "cingulate-gyrus-(anterior-division)",
		full_name: "Cingulate Gyrus (anterior division)",
		wiki: "Cingulate_cortex"
	},
	Cingulate_Gyrus_posterior_division: {
		path: "cingulate-gyrus-(posterior-division)",
		full_name: "Cingulate Gyrus (posterior division)",
		wiki: "Cingulate_cortex"
	},
	Cuneal_Cortex: {
		path: "cuneal-cortex",
		full_name: "Cuneal Cortex",
		wiki: "Inferior_longitudinal_fasciculus"
	},
	Frontal_Medial_Cortex: {
		path: "frontal-medial-cortex",
		full_name: "Frontal Medial Cortex",
		wiki: "Prefrontal_cortex"
	},
	Frontal_Operculum_Cortex: {
		path: "frontal-operculum-cortex",
		full_name: "Frontal Operculum Cortex",
		wiki: "Operculum_(brain)"
	},
	Frontal_Orbital_Cortex: {
		path: "frontal-orbital-cortex",
		full_name: "Frontal Orbital Cortex",
		wiki: "Frontal_lobe"
	},
	Frontal_Pole: {
		path: "frontal-pole",
		full_name: "Frontal Pole",
		wiki: "Cerebral_hemisphere"
	},
	Heschls_Gyrus_includes_H1_and_H2: {
		path: "heschls-gyrus-(includes-h1-and-h2)",
		full_name: "Heschl's Gyrus (includes H1 and H2)",
		wiki: "Transverse_temporal_gyrus"
	},
	Inferior_Frontal_Gyrus_pars_opercularis: {
		path: "inferior-frontal-gyrus-pars-opercularis",
		full_name: "Inferior Frontal Gyrus pars opercularis",
		wiki: "Frontal_gyri"
	},
	Inferior_Frontal_Gyrus_pars_triangularis: {
		path: "inferior-frontal-gyrus-pars-triangularis",
		full_name: "Inferior Frontal Gyrus pars triangularis",
		wiki: "Frontal_gyri"
	},
	Inferior_Temporal_Gyrus_anterior_division: {
		path: "inferior-temporal-gyrus-(anterior-division)",
		full_name: "Inferior Temporal Gyrus (anterior division)",
		wiki: "Inferior_temporal_gyrus"
	},
	Inferior_Temporal_Gyrus_posterior_division: {
		path: "inferior-temporal-gyrus-(posterior-division)",
		full_name: "Inferior Temporal Gyrus (posterior division)",
		wiki: "Inferior_temporal_gyrus"
	},
	Inferior_Temporal_Gyrus_temporooccipital_part: {
		path: "inferior-temporal-gyrus-(temporooccipital-part)",
		full_name: "Inferior Temporal Gyrus (temporooccipital part)",
		wiki: "Inferior_temporal_gyrus"
	},
	Insular_Cortex: {
		path: "insular-cortex",
		full_name: "Insular Cortex",
		wiki: "Insular_cortex"
	},
	Intracalcarine_Cortex: {
		path: "intracalcarine-cortex",
		full_name: "Intracalcarine Cortex",
		wiki: "Intracalcarine Cortex"
	},
	Juxtapositional_Lobule_Cortex_formerly_Supplementary_Motor_Cortex: {
		path:
			"juxtapositional-lobule-cortex-(formerly-supplementary-motor-cortex)",
		full_name:
			"Juxtapositional Lobule Cortex (formerly Supplementary Motor Cortex)",
		wiki: "Supplementary_motor_area"
	},
	Lateral_Occipital_Cortex_inferior_division: {
		path: "lateral-occipital-cortex-inferior-division",
		full_name: "Lateral Occipital Cortex inferior division",
		wiki: "Occipital_lobe"
	},
	Lateral_Occipital_Cortex_superior_division: {
		path: "lateral-occipital-cortex-superior-division",
		full_name: "Lateral Occipital Cortex superior division",
		wiki: "Occipital_lobe"
	},
	Lingual_Gyrus: {
		path: "lingual-gyrus",
		full_name: "Lingual Gyrus",
		wiki: "Lingual_gyrus"
	},
	Middle_Frontal_Gyrus: {
		path: "middle-frontal-gyrus",
		full_name: "Middle Frontal Gyrus",
		wiki: "Frontal_gyri"
	},
	Middle_Temporal_Gyrus_anterior_division: {
		path: "middle-temporal-gyrus-(anterior-division)",
		full_name: "Middle Temporal Gyrus (anterior division)",
		wiki: "Middle_temporal_gyrus"
	},
	Middle_Temporal_Gyrus_posterior_division: {
		path: "middle-temporal-gyrus-(posterior-division)",
		full_name: "Middle Temporal Gyrus (posterior division)",
		wiki: "Middle_temporal_gyrus"
	},
	Middle_Temporal_Gyrus_temporooccipital_part: {
		path: "middle-temporal-gyrus-(temporooccipital-part)",
		full_name: "Middle Temporal Gyrus (temporooccipital part)",
		wiki: "Middle_temporal_gyrus"
	},
	Occipital_Fusiform_Gyrus: {
		path: "occipital-fusiform-gyrus",
		full_name: "Occipital Fusiform Gyrus",
		wiki: "Fusiform_gyrus"
	},
	Occipital_Pole: {
		path: "occipital-pole",
		full_name: "Occipital Pole",
		wiki: "Cerebral_hemisphere"
	},
	Paracingulate_Gyrus: {
		path: "paracingulate-gyrus",
		full_name: "Paracingulate Gyrus",
		wiki: "Cingulate_cortex"
	},
	Parahippocampal_Gyrus_anterior_division: {
		path: "parahippocampal-gyrus-(anterior-division)",
		full_name: "Parahippocampal Gyrus (anterior division)",
		wiki: "Parahippocampal_gyrus"
	},
	Parahippocampal_Gyrus_posterior_division: {
		path: "parahippocampal-gyrus-(posterior-division)",
		full_name: "Parahippocampal Gyrus (posterior division)",
		wiki: "Parahippocampal_gyrus"
	},
	Parietal_Operculum_Cortex: {
		path: "parietal-operculum-cortex",
		full_name: "Parietal Operculum Cortex",
		wiki: "Operculum_(brain)"
	},
	Planum_Polare: {
		path: "planum-polare",
		full_name: "Planum Polare",
		wiki: "Auditory_cortex"
	},
	Planum_Temporale: {
		path: "planum-temporale",
		full_name: "Planum Temporale",
		wiki: "Planum_temporale"
	},
	Postcentral_Gyrus: {
		path: "postcentral-gyrus",
		full_name: "Postcentral Gyrus",
		wiki: "Postcentral_gyrus"
	},
	Precentral_Gyrus: {
		path: "precentral-gyrus",
		full_name: "Precentral Gyrus",
		wiki: "Precentral_gyrus"
	},
	Precuneous_Cortex: {
		path: "precuneous-cortex",
		full_name: "Precuneous Cortex",
		wiki: "Precuneus"
	},
	Subcallosal_Cortex: {
		path: "subcallosal-cortex",
		full_name: "Subcallosal Cortex",
		wiki: "Anterior_cingulate_cortex"
	},
	Superior_Frontal_Gyrus: {
		path: "superior-frontal-gyrus",
		full_name: "Superior Frontal Gyrus",
		wiki: "Frontal_gyri"
	},
	Superior_Parietal_Lobule: {
		path: "superior-parietal-lobule",
		full_name: "Superior Parietal Lobule",
		wiki: "Superior_parietal_lobule"
	},
	Superior_Temporal_Gyrus_anterior_division: {
		path: "superior-temporal-gyrus-(anterior-division)",
		full_name: "Superior Temporal Gyrus (anterior division)",
		wiki: "Superior_temporal_gyrus"
	},
	Superior_Temporal_Gyrus_posterior_division: {
		path: "superior-temporal-gyrus-(posterior-division)",
		full_name: "Superior Temporal Gyrus (posterior division)",
		wiki: "Superior_temporal_gyrus"
	},
	Supracalcarine_Cortex: {
		path: "supracalcarine-cortex",
		full_name: "Supracalcarine Cortex",
		wiki: "Calcarine_sulcus"
	},
	Supramarginal_Gyrus_anterior_division: {
		path: "supramarginal-gyrus-(anterior-division)",
		full_name: "Supramarginal Gyrus (anterior division)",
		wiki: "Supramarginal_gyrus"
	},
	Supramarginal_Gyrus_posterior_division: {
		path: "supramarginal-gyrus-(posterior-division)",
		full_name: "Supramarginal Gyrus (posterior division)",
		wiki: "Supramarginal_gyrus"
	},
	Temporal_Fusiform_Cortex_anterior_division: {
		path: "temporal-fusiform-cortex-(anterior-division)",
		full_name: "Temporal Fusiform Cortex (anterior division)",
		wiki: "Fusiform_gyrus"
	},
	Temporal_Fusiform_Cortex_posterior_division: {
		path: "temporal-fusiform-cortex-(posterior-division)",
		full_name: "Temporal Fusiform Cortex (posterior division)",
		wiki: "Fusiform_gyrus"
	},
	Temporal_Occipital_Fusiform_Cortex: {
		path: "temporal-occipital-fusiform-cortex",
		full_name: "Temporal Occipital Fusiform Cortex",
		wiki: "Cerebral_hemisphere"
	},
	Temporal_Pole: {
		path: "temporal-pole",
		full_name: "Temporal Pole",
		wiki: "Cerebral_hemisphere"
	}
};

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

	loadHead();

	// Rerender the canvas as fast as possible
	function loop() {
		controls.update();
		renderer.render(scene, camera);
		requestAnimationFrame(loop);
	}
	loop();
}

function loadCloudRegion(hemisphere, region_name) {
	console.log(hemisphere, region_name);
	var region_url =
		"models/" +
		settings.clouds.brain.path +
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

function loadHead() {
	var url = "models/" + settings.clouds.head.path + "/cloud.js";

	Potree.loadPointCloud(url, "Head", function(data) {
		var pointcloud = data.pointcloud;
		pointcloud.skinning = true;

		console.log(pointcloud);

		points.add(pointcloud);
	});
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
