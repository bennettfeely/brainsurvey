var html = document.querySelector("html");
var brain_wrapper = document.querySelector(".brain-wrapper");

var renderer;
var camera;
var cube;
var scene;
var octreeNodesVisible = 0;
var pointsVisible = 0;
var pointCloud;
var raycaster = new THREE.Raycaster();
var projector = new THREE.Projector();
var pointClouds = [];

function initThree() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		100000
	);

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	brain_wrapper.appendChild(renderer.domElement);

	camera.position.z = 0;
	camera.position.y = 0;
	camera.position.x = 0;

	var pointLight = new THREE.PointLight(0xffffff);
	pointLight.position.set(10, 10, 10);
	scene.add(pointLight);

	var ambientLight = new THREE.AmbientLight(0x111111);
	scene.add(ambientLight);

	var axesHelper = new THREE.AxesHelper(5);
	scene.add(axesHelper);

	controls = new THREE.OrbitControls(camera);
	controls.target.set(0, 3, 0);
	camera.lookAt(new THREE.Vector3(0, 3, 0));

	var material = new THREE.PointCloudMaterial({
		size: 0.05,
		vertexColors: true
	});
	var pco = POCLoader.load(
		"models/LR_HighRes_v4/Left/Angular_Gyrus/cloud.js"
	);
	//			var pco = POCLoader.load("../../../pointclouds/converted/skatepark/cloud.js");

	var pointCloud = new Potree.PointCloudOctree(pco, material);
	//			pointCloud.LODDistance = 1280;
	//			pointCloud.rotation.x = -Math.PI/2;
	//			pointCloud.position.y = -200;
	pointCloud.LODDistance = 80;
	pointCloud.rotation.x = Math.PI;
	pointCloud.rotation.y = 2;
	pointCloud.position.x = -2;
	pointCloud.position.z = 8;
	pointCloud.position.y = 4;
	scene.add(pointCloud);
	pointClouds.push(pointCloud);
}

function onDocumentMouseMove(event) {
	event.preventDefault();

	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

var toggle = 0;
var mouse = { x: 1, y: 1 };
function render() {
	requestAnimationFrame(render);

	vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
	projector.unprojectVector(vector, camera);

	toggle += 0.1;
	if (toggle > 0.2) {
		octreeNodesVisible = 0;
		pointsVisible = 0;
		scene.traverse(function(object) {
			if (object instanceof Potree.PointCloudOctree) {
				object.update(camera);
			}
		});
		toggle = 0;
	}

	renderer.render(scene, camera);

	console.log("visible nodes: " + octreeNodesVisible);
	console.log("visible points: " + pointsVisible);
}

initThree();
render();
