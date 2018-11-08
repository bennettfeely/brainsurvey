if (WEBGL.isWebGLAvailable() === false) {
	document.body.appendChild(WEBGL.getWebGLErrorMessage());
}

var controls, camera, scene, renderer, light;
var settings = {
	orbit: true,
	orbit_speed: 4,
	axes: false,
	polar_grid: false,
	square_grid: false,

	pan: false,
	zoom: false,

	explode_regions: 0.8,

	// Shouldn't need this eventually
	y_offset: -12
};

init();

function init() {
	var html = document.querySelector("html");
	var loading_status = document.querySelector(".loading-status");
	var brain_wrapper = document.querySelector(".brain-wrapper");
	var canvasWidth = brain_wrapper.offsetWidth;
	var canvasHeight = brain_wrapper.offsetHeight;

	camera = new THREE.PerspectiveCamera(
		50,
		canvasWidth / canvasHeight,
		0.1,
		1000
	);
	camera.position.set(0, 10, 30);

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
	var light = new THREE.HemisphereLight(0xff9999, 0.5);
	scene.add(light);
	var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
	directionalLight.position.set(0, 2, 0);
	scene.add(directionalLight);

	// Model
	var loader = new THREE.GLTFLoader();
	loader.load(
		"models/Brain_01/Geometry/Brain_01.gltf",
		function(gltf) {
			gltf.scene.traverse(function(child) {
				if (child.isMesh) {
					// Explode brain regions
					if (settings.explode_regions > 0) {
						child.geometry.computeBoundingSphere();

						var x = child.geometry.boundingSphere.center.x;
						var y = child.geometry.boundingSphere.center.y;
						var z = child.geometry.boundingSphere.center.z;

						var explode = 0.5;

						child.position.set(
							x * explode,
							y * explode,
							z * explode
						);
					}
				}
			});

			gltf.scene.position.set(0, settings.y_offset, 0);
			scene.add(gltf.scene);
			animate();
		},
		function(xhr) {
			// Update the loading indicator text
			var pct = (xhr.loaded / xhr.total) * 100;

			console.log("Loading: " + pct + "%");

			if (pct < 100) {
				loading_status.style.width = pct + "%";
			}
		},
		function(error) {
			console.log("An error happened");
		}
	);

	renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
	renderer.setPixelRatio(window.devicePixelRatio);

	camera.aspect = canvasWidth / canvasHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(canvasWidth, canvasHeight);
	renderer.gammaOutput = true;
	brain_wrapper.appendChild(renderer.domElement);

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
