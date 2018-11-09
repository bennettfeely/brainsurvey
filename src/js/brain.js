if (WEBGL.isWebGLAvailable() === false) {
	document.body.appendChild(WEBGL.getWebGLErrorMessage());
}

var mouse = new THREE.Vector2(),
	INTERSECTED;
var camera, controls, light, raycaster, renderer, scene;
var settings = {
	orbit: true,
	orbit_speed: 4,
	square_grid: true,
	polar_grid: false,
	axes: true,
	pan: false,
	zoom: false,
	explode: 0,
	model_path: "models/Brain_02/Geometry/Brain_02.gltf",

	// Shouldn't need this eventually
	x_offset: -1.5,
	y_offset: -11.5
};

init();

function init() {
	var html = document.querySelector("html");
	var loading_status = document.querySelector(".loading-status");
	var brain_wrapper = document.querySelector(".brain-wrapper");
	var canvasWidth = brain_wrapper.offsetWidth;
	var canvasHeight = brain_wrapper.offsetHeight;

	camera = new THREE.PerspectiveCamera(50, canvasWidth / canvasHeight, 0.1, 1000);
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

	// Setup raycaster for click detection
	// raycaster = new THREE.Raycaster();

	// Lighting
	var light = new THREE.HemisphereLight(0xff9999, 0.5);
	scene.add(light);
	var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
	directionalLight.position.set(0, 2, 0);
	scene.add(directionalLight);

	// Model
	var loader = new THREE.GLTFLoader();
	loader.load(
		"models/Brain_02/Geometry/Brain_02.gltf",
		function(gltf) {
			i = 0;
			gltf.scene.traverse(function(child) {
				if (child.isMesh) {
					console.log(i++);
					// Create separate material instance
					child.material = child.material.clone();

					// D3 color scales
					// https://github.com/d3/d3-scale-chromatic

					var colors = [
						"#1f77b4",
						"#ff7f0e",
						"#2ca02c",
						"#d62728",
						"#9467bd",
						"#8c564b",
						"#e377c2",
						"#7f7f7f",
						"#bcbd22",
						"#17becf"
					];

					var colors = [
						"tomato",
						"mediumseagreen",
						"orange",
						"dodgerblue",
						"orchid",
						"lightgray",
						"darkturquoise",
						"palevioletred",
						"khaki",
						"limegreen",
						"coral",
						"slateblue",
						"indianred",
						"gray",
						"plum",
						"olivedrab",
						"lightgreen",
						"lightsalmon",
						"gold",
						"peru",
						"royalblue",
						"sandybrown",
						"lightseagreen",
						"blueviolet",
						"tomato",
						"goldenrod",
						"limegreen"
					];

					child.material.color.set(colors[i]);

					child.material.color.r = Math.random();
					child.material.color.g = Math.random();
					child.material.color.b = Math.random();

					// child.scale.x = Math.random() * 4;
					// child.scale.y = Math.random() * 4;
					// child.scale.z = Math.random() * 4;

					console.log(child);

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
				settings.x_offset,
				settings.y_offset * (1 + settings.explode),
				0
			);
			scene.add(gltf.scene);

			animate();
		},
		function(xhr) {
			// Update the loading indicator text
			var pct = (xhr.loaded / xhr.total) * 100;
			loading_status.style.width = pct + "%";
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
