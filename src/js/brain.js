if (WEBGL.isWebGLAvailable() === false) {
	document.body.appendChild(WEBGL.getWebGLErrorMessage());
}

var container, stats, controls;
var camera, scene, renderer, light;

init();

function init() {
	var brain_wrapper = document.querySelector(".brain-wrapper");
	var message_wrapper = document.querySelector(".message-wrapper");
	var message = document.querySelector(".message .container");

	// Display the loading indicator
	message_wrapper.classList.add("is-visible");

	var brain_wrapper_size = brain_wrapper.getBoundingClientRect();
	var canvasWidth = brain_wrapper_size.width;
	var canvasHeight = brain_wrapper_size.height;

	camera = new THREE.PerspectiveCamera(
		50,
		canvasWidth / canvasHeight,
		0.25,
		20
	);
	camera.position.set(2, 2, 2);

	var container = brain_wrapper;
	controls = new THREE.OrbitControls(camera, container);
	controls.enableZoom = false;
	controls.enablePan = false;
	controls.autoRotate = true;
	controls.autoRotateSpeed = 6; // = 6 rotations per min

	// Stop autorotating when there is an interaction
	controls.addEventListener("start", function() {
		controls.autoRotate = false;

		document.querySelector(".orbit input").checked = false;
	});

	// Origin
	controls.target.set(0, 0.666, 0);
	controls.update();

	// Set the scene
	scene = new THREE.Scene();

	// Lighting
	var light = new THREE.HemisphereLight(0xffffff, 1);
	scene.add(light);
	var directionalLight = new THREE.DirectionalLight(0xffffff, 0.75);
	scene.add(directionalLight);

	// Model
	var loader = new THREE.GLTFLoader();
	loader.load(
		"models/duck/duck.gltf",
		function(gltf) {
			gltf.scene.traverse(function(child) {
				// if (child.isMesh) {
				// 	// child.material.envMap = envMap;
				// }
			});

			scene.add(gltf.scene);
			animate();

			// Hide the loading indicator when brain is loaded
			setTimeout(function() {
				message_wrapper.classList.remove("is-visible");
			}, 1000);
		},
		function(xhr) {
			// Update the loading indicator text
			message.innerHTML =
				"Loading " + (xhr.loaded / xhr.total) * 100 + "%";
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
	var brain_wrapper_size = brain_wrapper.getBoundingClientRect();

	var canvasWidth = brain_wrapper_size.width;
	var canvasHeight = brain_wrapper_size.height;

	camera.aspect = canvasWidth / canvasHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(canvasWidth, canvasHeight);
}

function animate() {
	requestAnimationFrame(animate);

	controls.update();

	renderer.render(scene, camera);
}
