if (WEBGL.isWebGLAvailable() === false) {
	document.body.appendChild(WEBGL.getWebGLErrorMessage());
}

var controls, camera, scene, renderer, light;

init();

function init() {
	var brain_wrapper = document.querySelector(".brain-wrapper");
	var canvasWidth = brain_wrapper.offsetWidth;
	var canvasHeight = brain_wrapper.offsetHeight;

	camera = new THREE.PerspectiveCamera(
		50,
		canvasWidth / canvasHeight,
		0.25,
		20
	);
	camera.position.set(0, 0, 2);

	controls = new THREE.OrbitControls(camera, brain_wrapper);
	controls.enableZoom = false;
	// controls.minDistance = 1.5;
	// controls.maxDistance = 2.5;
	controls.enablePan = false;
	controls.autoRotate = true;
	controls.autoRotateSpeed = 4; // 4 rotations per min

	// Stop autorotating when there is an interaction
	controls.addEventListener("start", function() {
		controls.autoRotate = false;

		document.querySelector(".orbit input").checked = false;
	});

	// Origin
	controls.target.set(0, 0.6, 0);
	controls.update();

	// Set the scene
	scene = new THREE.Scene();

	// Lighting
	var light = new THREE.HemisphereLight(0xff9999, 0.5);
	scene.add(light);
	var directionalLight = new THREE.DirectionalLight(0xffffff, 0.25);
	directionalLight.position.set(0, 5, 0);
	scene.add(directionalLight);

	// Model
	var loader = new THREE.GLTFLoader();
	loader.load(
		"models/brain_areas/scene.gltf",
		function(gltf) {
			gltf.scene.traverse(function(child) {
				// if (child.isMesh) {
				// 	// child.material.envMap = envMap;
				// }
			});

			scene.add(gltf.scene);
			animate();
		},
		function(xhr) {
			// Update the loading indicator text
			console.log("Loading " + (xhr.loaded / xhr.total) * 100 + "%");
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
