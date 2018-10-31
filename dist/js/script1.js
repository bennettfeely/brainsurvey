if (WEBGL.isWebGLAvailable() === false) {
    document.body.appendChild(WEBGL.getWebGLErrorMessage());
}

var container, stats, controls;
var camera, scene, renderer, light;

init();
animate();

function init() {
    var three_canvas = document.createElement("div");
    var brain_wrapper = document.querySelector(".brain-wrapper");
    var brain_wrapper_size = brain_wrapper.getBoundingClientRect();

    brain_wrapper.appendChild(three_canvas);

    camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.25,
        20
    );
    camera.position.set(-1.8, 0.9, 2.7);

    controls = new THREE.OrbitControls(camera);
    controls.target.set(0, -0.2, -0.2);
    controls.update();

    // envmap
    // var path = "textures/cube/Bridge2/";
    // var format = ".jpg";
    // var envMap = new THREE.CubeTextureLoader().load([
    //     path + "posx" + format,
    //     path + "negx" + format,
    //     path + "posy" + format,
    //     path + "negy" + format,
    //     path + "posz" + format,
    //     path + "negz" + format
    // ]);

    // scene = new THREE.Scene();
    // scene.background = envMap;

    // light = new THREE.HemisphereLight(0xbbbbff, 0x444422);
    // light.position.set(0, 1, 0);
    // scene.add(light);

    // model
    var loader = new THREE.GLTFLoader();
    loader.load(
        "models/brain_002.gltf",
        function(gltf) {
            gltf.scene.traverse(function(child) {
                if (child.isMesh) {
                    child.material.envMap = envMap;
                }
            });

            scene.add(gltf.scene);
        },
        function(xhr) {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        function(error) {
            console.log(error);
            console.log("An error happened");
        }
    );

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(brain_wrapper_size.width, brain_wrapper_size.height);
    renderer.gammaOutput = true;
    brain_wrapper.appendChild(renderer.domElement);

    window.addEventListener("resize", onWindowResize, false);

    // stats
    stats = new Stats();
    container.appendChild(stats.dom);
}

function onWindowResize() {
    var brain_wrapper = document
        .querySelector(".brain-wrapper")
        .getBoundingClientRect();

    console.log(brain_wrapper);

    var canvasWidth = brain_wrapper.width;
    var canvasHeight = brain_wrapper.height;

    renderer.setSize(canvasWidth, canvasHeight);

    camera.aspect = canvasWidth / canvasHeight;
    camera.updateProjectionMatrix();

    render();
}

function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);

    stats.update();
}
