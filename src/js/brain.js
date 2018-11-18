if (WEBGL.isWebGLAvailable() === false) {
	document.body.appendChild(WEBGL.getWebGLErrorMessage());
}

var mouse = new THREE.Vector2(),
	INTERSECTED;
var camera, controls, light, raycaster, renderer, scene;
settings = {
	// Models
	model_path: "models/Brain_02/Geometry/Brain_02.gltf",

	// Animations
	orbit: true,
	orbit_speed: 4,

	// Helpers
	grid_size: 10,
	square_grid: true,
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
		x: -1.5,
		y: -11.5,
		z: 0
	}
};

init();

function init() {
	updateStatus("Loading model");

	var html = document.querySelector("html");
	// var loading_status = document.querySelector(".loading-status");
	var brain_wrapper = document.querySelector(".brain-wrapper");
	var canvasWidth = brain_wrapper.offsetWidth;
	var canvasHeight = brain_wrapper.offsetHeight;

	camera = new THREE.PerspectiveCamera(
		50,
		canvasWidth / canvasHeight,
		0.1,
		1000
	);
	camera.position.set(0, 5, 25);

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

	// Setup raycaster for click detection
	// raycaster = new THREE.Raycaster();

	// Lighting
	var light = new THREE.HemisphereLight(0xff9999, 0.8);
	scene.add(light);

	var directionalLight = new THREE.DirectionalLight(0xafbfff, 0.5);
	directionalLight.position.set(0, 10, 0);
	scene.add(directionalLight);

	// var directionalLight = new THREE.DirectionalLight(0xffffff, 0.05);
	// directionalLight.position.set(0, -10, 0);
	// scene.add(directionalLight);

	// Model
	var loader = new THREE.GLTFLoader();
	loader.load(
		"models/Brain_02/Geometry/Brain_02.gltf",
		function(gltf) {
			updateStatus("Rendering model");
			i = 0;
			gltf.scene.traverse(function(child) {
				if (child.isMesh) {
					// Create separate material instance
					child.material.roughness = settings.roughness;
					child.material.metalness = settings.metalness;
					child.material.wireframe = settings.wireframe;
					child.material.color.set("salmon");

					// console.log(child);

					child.material = child.material.clone();

					// D3 color scales
					// https://github.com/d3/d3-scale-chromatic
					// var bounds = [0.1, 0.9];
					// child.material.color.r = Math.random() * bounds[1] + bounds[0];
					// child.material.color.g = Math.random() * bounds[1] + bounds[0];
					// child.material.color.b = Math.random() * bounds[1] + bounds[0];

					// var h = Math.random();
					// var s = 0.6;
					// var l = 0.5;

					// var h = Math.random();
					// var s = 0.85;
					// var l = 0.4;

					// child.material.color.setHSL(h, s, l);

					// Explode brain regions
					if (settings.explode > 0) {
						child.geometry.computeBoundingSphere();

						var x = child.geometry.boundingSphere.center.x;
						var y = child.geometry.boundingSphere.center.y;
						var z = child.geometry.boundingSphere.center.z;

						child.position.set(
							x * settings.explode,
							y * settings.explode,
							z * settings.explode
						);
					}
				}
			});

			gltf.scene.position.set(
				settings.offset.x * (1 + settings.explode),
				settings.offset.y * (1 - settings.explode),
				settings.offset.z
			);
			scene.add(gltf.scene);

			animate();
		},
		function(xhr) {
			// Update the loading indicator text
			var pct = (xhr.loaded / xhr.total) * 100;
			// loading_status.style.width = pct + "%";
			updateStatus("Loading model " + pct + "%");
		},
		function(error) {
			updateStatus("Error loading model");
		}
	);

	renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
	renderer.setPixelRatio(window.devicePixelRatio);

	camera.aspect = canvasWidth / canvasHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(canvasWidth, canvasHeight);
	renderer.gammaOutput = true;

	// Add canvas to page
	brain_wrapper.appendChild(renderer.domElement);

	// Detect window resizing and resize canvas
	window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
	var brain_wrapper = document.querySelector(".brain-wrapper");
	var canvasWidth = brain_wrapper.offsetWidth;
	var canvasHeight = brain_wrapper.offsetHeight;

	camera.aspect = canvasWidth / canvasHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(canvasWidth, canvasHeight);
}

function animate() {
	requestAnimationFrame(animate);

	controls.update();

	renderer.render(scene, camera);
}

function updateStatus(status) {
	console.log(status + "...");

	document.querySelector(".loading-status").innerHTML = status + "...";
}
