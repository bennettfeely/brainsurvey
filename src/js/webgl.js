if (WEBGL.isWebGLAvailable() === false) {
	document.body.appendChild(WEBGL.getWebGLErrorMessage());
}

var container, stats, controls;
var camera, scene, renderer, light;

init();
animate();

function init() {
	// var three_canvas = document.createElement("div");
	var brain_wrapper = document.querySelector(".brain-wrapper");
	var brain_wrapper_size = brain_wrapper.getBoundingClientRect();

	// brain_wrapper.appendChild(three_canvas);

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

	// Origin (x, y, z)
	controls.target.set(0, 0.666, 0);
	controls.update();

	// envmap
	// var path = "textures/cube/Bridge2/";
	// var format = ".jpg";
	// var envMap = new THREE.CubeTextureLoader().load([
	// 	path + "posx" + format,
	// 	path + "negx" + format,
	// 	path + "posy" + format,
	// 	path + "negy" + format,
	// 	path + "posz" + format,
	// 	path + "negz" + format
	// ]);

	scene = new THREE.Scene();
	scene.background = "#fff";

	light = new THREE.HemisphereLight(0xbbbbff, 0x444422);
	light.position.set(0, 1, 0);
	scene.add(light);

	// model
	var loader = new THREE.GLTFLoader();
	loader.load(
		"models/duck/duck.gltf",
		function(gltf) {
			gltf.scene.traverse(function(child) {
				if (child.isMesh) {
					// child.material.envMap = envMap;
				}
			});

			scene.add(gltf.scene);
		},
		function(xhr) {
			console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
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
	renderer.setClearColor(0xffffff, 0);
	renderer.gammaOutput = true;
	brain_wrapper.appendChild(renderer.domElement);

	window.addEventListener("resize", onWindowResize, false);

	// stats
	// stats = new Stats();
	// brain_wrapper.appendChild(stats.dom);
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

	renderer.render(scene, camera);

	stats.update();
}
