var WEBGL = {
	isWebGLAvailable: function() {
		try {
			var e = document.createElement("canvas");
			return !(
				!window.WebGLRenderingContext ||
				(!e.getContext("webgl") && !e.getContext("experimental-webgl"))
			);
		} catch (e) {
			return !1;
		}
	},
	isWebGL2Available: function() {
		try {
			var e = document.createElement("canvas");
			return !(!window.WebGL2RenderingContext || !e.getContext("webgl2"));
		} catch (e) {
			return !1;
		}
	},
	getWebGLErrorMessage: function() {
		return this.getErrorMessage(1);
	},
	getWebGL2ErrorMessage: function() {
		return this.getErrorMessage(2);
	},
	getErrorMessage: function(e) {
		var r = {
				1: window.WebGLRenderingContext,
				2: window.WebGL2RenderingContext
			},
			t =
				'Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>',
			i = document.createElement("div");
		return (
			(i.id = "webglmessage"),
			(i.style.fontFamily = "monospace"),
			(i.style.fontSize = "13px"),
			(i.style.fontWeight = "normal"),
			(i.style.textAlign = "center"),
			(i.style.background = "#fff"),
			(i.style.color = "#000"),
			(i.style.padding = "1.5em"),
			(i.style.width = "400px"),
			(i.style.margin = "5em auto 0"),
			(t = (t = r[e]
				? t.replace("$0", "graphics card")
				: t.replace("$0", "browser")).replace(
				"$1",
				{ 1: "WebGL", 2: "WebGL 2" }[e]
			)),
			(i.innerHTML = t),
			i
		);
	}
};
(settings = {
	autosave: !1,
	brain_model_path: "models/Brain_05/Brain_005.gltf",
	head_model_path: "models/Head_01/Head_01.gltf",
	orbit: !0,
	orbit_speed: 4,
	grid_size: 10,
	square_grid: !1,
	polar_grid: !1,
	axes: !1,
	pan: !1,
	zoom: !1,
	slice: {
		visible: !1,
		axis: "z",
		position: 0,
		size: 0.25,
		dimensions: { x: 7, y: 10, z: 7 }
	},
	brain: {
		roughness: 0.1,
		metalness: 0.4,
		wireframe: !1,
		default_color: "lightcoral",
		explode: 0,
		offset: { x: -2.25, y: 0, z: 0 }
	},
	head: {
		visible: !1,
		roughness: 1,
		metalness: 0,
		wireframe: !0,
		default_color: "#2a2a2a",
		offset: { x: -2.25, y: 0, z: 0 }
	}
}),
	(regions_obj = {
		Frontal_Pole_0: { path: "frontal-pole", full_name: "Frontal Pole" },
		Right_Insular_Cortex_1: {
			path: "right-insular-cortex",
			full_name: "Right Insular Cortex"
		},
		Superior_Frontal_Gyrus_4: {
			path: "superior-frontal-gyrus",
			full_name: "Superior Frontal Gyrus"
		},
		Right_Middle_Frontal_Gyrus_6: {
			path: "right-middle-frontal-gyrus",
			full_name: "Right Middle Frontal Gyrus"
		},
		Left_Middle_Frontal_Gyrus_5: {
			path: "left-middle-frontal-gyrus",
			full_name: "Left Middle Frontal Gyrus"
		},
		Left_Inferior_Frontal_Gyrus__pars_triangularis_8: {
			path: "left-inferior-frontal-gyrus-pars-triangularis",
			full_name: "Left Inferior Frontal Gyrus pars triangularis"
		},
		Right_Inferior_Frontal_Gyrus__pars_triangularis_7: {
			path: "right-inferior-frontal-gyrus-pars-triangularis",
			full_name: "Right Inferior Frontal Gyrus pars triangularis"
		},
		Right_Inferior_Frontal_Gyrus__pars_opercularis_9: {
			path: "right-inferior-frontal-gyrus-pars-opercularis",
			full_name: "Right Inferior Frontal Gyrus pars opercularis"
		},
		Left_Inferior_Frontal_Gyrus__pars_opercularis_11: {
			path: "left-inferior-frontal-gyrus-pars-opercularis",
			full_name: "Left Inferior Frontal Gyrus pars opercularis"
		},
		Precentral_Gyrus_12: {
			path: "precentral-gyrus",
			full_name: "Precentral Gyrus"
		},
		Right_Temporal_Pole_13: {
			path: "right-temporal-pole",
			full_name: "Right Temporal Pole"
		},
		Left_Temporal_Pole_14: {
			path: "left-temporal-pole",
			full_name: "Left Temporal Pole"
		},
		Left_Middle_Temporal_Gyrus__anterior_division_15: {
			path: "left-middle-temporal-gyrus-anterior-division",
			full_name: "Left Middle Temporal Gyrus anterior division"
		},
		Right_Middle_Temporal_Gyrus__anterior_division_16: {
			path: "right-middle-temporal-gyrus-anterior-division",
			full_name: "Right Middle Temporal Gyrus anterior division"
		},
		RIght_Superior_Temporal_Gyrus__posterior_division_17: {
			path: "right-superior-temporal-gyrus-posterior-division",
			full_name: "RIght Superior Temporal Gyrus posterior division"
		},
		Left_Superior_Temporal_Gyrus__posterior_division_18: {
			path: "left-superior-temporal-gyrus-posterior-division",
			full_name: "Left Superior Temporal Gyrus posterior division"
		},
		Right_Inferior_Temporal_Gyrus__anterior_division_19: {
			path: "right-inferior-temporal-gyrus-anterior-division",
			full_name: "Right Inferior Temporal Gyrus anterior division"
		},
		Left_Middle_Temporal_Gyrus__anterior_division_20: {
			path: "left-middle-temporal-gyrus-anterior-division",
			full_name: "Left Middle Temporal Gyrus anterior division"
		},
		Right_Middle_Temporal_Gyrus__posterior_division_21: {
			path: "right-middle-temporal-gyrus-posterior-division",
			full_name: "Right Middle Temporal Gyrus posterior division"
		},
		Left_Middle_Temporal_Gyrus__posterior_division_22: {
			path: "left-middle-temporal-gyrus-posterior-division",
			full_name: "Left Middle Temporal Gyrus posterior division"
		},
		Right_Middle_Temporal_Gyrus__temporooccipital_part_23: {
			path: "right-middle-temporal-gyrus-temporooccipital-part",
			full_name: "Right Middle Temporal Gyrus temporooccipital part"
		},
		Left_Middle_Temporal_Gyrus__temporooccipital_part_24: {
			path: "left-middle-temporal-gyrus-temporooccipital-part",
			full_name: "Left Middle Temporal Gyrus temporooccipital part"
		},
		Left_Temporal_Fusiform_Cortex__anterior_division_25: {
			path: "left-temporal-fusiform-cortex-anterior-division",
			full_name: "Left Temporal Fusiform Cortex anterior division"
		},
		Right_Inferior_Temporal_Gyrus__posterior_division_26: {
			path: "right-inferior-temporal-gyrus-posterior-division",
			full_name: "Right Inferior Temporal Gyrus posterior division"
		},
		Right_Inferior_Temporal_Gyrus__posterior_division_28: {
			path: "right-inferior-temporal-gyrus-posterior-division",
			full_name: "Right Inferior Temporal Gyrus posterior division"
		},
		Left_Inferior_Temporal_Gyrus__posterior_division_27: {
			path: "left-inferior-temporal-gyrus-posterior-division",
			full_name: "Left Inferior Temporal Gyrus posterior division"
		},
		Left_Inferior_Temporal_Gyrus__posterior_division_29: {
			path: "left-inferior-temporal-gyrus-posterior-division",
			full_name: "Left Inferior Temporal Gyrus posterior division"
		},
		Postcentral_Gyrus_30: {
			path: "postcentral-gyrus",
			full_name: "Postcentral Gyrus"
		},
		Left_Superior_Parietal_Lobule_31: {
			path: "left-superior-parietal-lobule",
			full_name: "Left Superior Parietal Lobule"
		},
		Right_Superior_Parietal_Lobule_32: {
			path: "right-superior-parietal-lobule",
			full_name: "Right Superior Parietal Lobule"
		},
		Left_Supramarginal_Gyrus__anterior_division_33: {
			path: "left-supramarginal-gyrus-anterior-division",
			full_name: "Left Supramarginal Gyrus anterior division"
		},
		Right_Supramarginal_Gyrus__anterior_division_34: {
			path: "right-supramarginal-gyrus-anterior-division",
			full_name: "Right Supramarginal Gyrus anterior division"
		},
		Left_Supramarginal_Gyrus__posterior_division_35: {
			path: "left-supramarginal-gyrus-posterior-division",
			full_name: "Left Supramarginal Gyrus posterior division"
		},
		Right_Supramarginal_Gyrus__posterior_division_36: {
			path: "right-supramarginal-gyrus-posterior-division",
			full_name: "Right Supramarginal Gyrus posterior division"
		},
		Left_Angular_Gyrus_37: {
			path: "left-angular-gyrus",
			full_name: "Left Angular Gyrus"
		},
		Right_Angular_Gyrus_38: {
			path: "right-angular-gyrus",
			full_name: "Right Angular Gyrus"
		},
		Right_Lateral_Occipital_Cortex__superior_division_39: {
			path: "right-lateral-occipital-cortex-superior-division",
			full_name: "Right Lateral Occipital Cortex superior division"
		},
		Left_Lateral_Occipital_Cortex__superior_division_40: {
			path: "left-lateral-occipital-cortex-superior-division",
			full_name: "Left Lateral Occipital Cortex superior division"
		},
		Right_Lateral_Occipital_Cortex__inferior_division_41: {
			path: "right-lateral-occipital-cortex-inferior-division",
			full_name: "Right Lateral Occipital Cortex inferior division"
		},
		Left_Lateral_Occipital_Cortex__inferior_division_42: {
			path: "left-lateral-occipital-cortex-inferior-division",
			full_name: "Left Lateral Occipital Cortex inferior division"
		},
		Lingual_Gyrus_43: { path: "lingual-gyrus", full_name: "Lingual Gyrus" },
		Frontal_Medial_Cortex_44: {
			path: "frontal-medial-cortex",
			full_name: "Frontal Medial Cortex"
		},
		Superior_Frontal_Gyrus_45: {
			path: "superior-frontal-gyrus",
			full_name: "Superior Frontal Gyrus"
		},
		Subcallosal_Cortex_46: {
			path: "subcallosal-cortex",
			full_name: "Subcallosal Cortex"
		},
		Paracingulate_Gyrus_47: {
			path: "paracingulate-gyrus",
			full_name: "Paracingulate Gyrus"
		},
		Cingulate_Gyrus__anterior_division_48: {
			path: "cingulate-gyrus-anterior-division",
			full_name: "Cingulate Gyrus anterior division"
		},
		Cingulate_Gyrus__posterior_division_49: {
			path: "cingulate-gyrus-posterior-division",
			full_name: "Cingulate Gyrus posterior division"
		},
		Precuneous_Cortex_50: {
			path: "precuneous-cortex",
			full_name: "Precuneous Cortex"
		},
		Cuneal_Cortex_51: { path: "cuneal-cortex", full_name: "Cuneal Cortex" },
		Right_Frontal_Orbital_Cortex_52: {
			path: "right-frontal-orbital-cortex",
			full_name: "Right Frontal Orbital Cortex"
		},
		Left_Frontal_Orbital_Cortex_53: {
			path: "left-frontal-orbital-cortex",
			full_name: "Left Frontal Orbital Cortex"
		},
		Right_Parahippocampal_Gyrus__anterior_division_54: {
			path: "right-parahippocampal-gyrus-anterior-division",
			full_name: "Right Parahippocampal Gyrus anterior division"
		},
		Left_Parahippocampal_Gyrus__anterior_division_55: {
			path: "left-parahippocampal-gyrus-anterior-division",
			full_name: "Left Parahippocampal Gyrus anterior division"
		},
		Left_Parahippocampal_Gyrus__posterior_division_56: {
			path: "left-parahippocampal-gyrus-posterior-division",
			full_name: "Left Parahippocampal Gyrus posterior division"
		},
		Right_Parahippocampal_Gyrus__posterior_division_57: {
			path: "right-parahippocampal-gyrus-posterior-division",
			full_name: "Right Parahippocampal Gyrus posterior division"
		},
		Lingual_Gyrus_58: { path: "lingual-gyrus", full_name: "Lingual Gyrus" },
		Left_Temporal_Fusiform_Cortex__anterior_division_59: {
			path: "left-temporal-fusiform-cortex-anterior-division",
			full_name: "Left Temporal Fusiform Cortex anterior division"
		},
		Right_Temporal_Fusiform_Cortex__anterior_division_60: {
			path: "right-temporal-fusiform-cortex-anterior-division",
			full_name: "Right Temporal Fusiform Cortex anterior division"
		},
		Right_Temporal_Fusiform_Cortex__posterior_division_61: {
			path: "right-temporal-fusiform-cortex-posterior-division",
			full_name: "Right Temporal Fusiform Cortex posterior division"
		},
		Left_Temporal_Fusiform_Cortex__posterior_division_62: {
			path: "left-temporal-fusiform-cortex-posterior-division",
			full_name: "Left Temporal Fusiform Cortex posterior division"
		},
		Right_Temporal_Occipital_Fusiform_Cortex_63: {
			path: "right-temporal-occipital-fusiform-cortex",
			full_name: "Right Temporal Occipital Fusiform Cortex"
		},
		Left_Temporal_Occipital_Fusiform_Cortex_64: {
			path: "left-temporal-occipital-fusiform-cortex",
			full_name: "Left Temporal Occipital Fusiform Cortex"
		},
		Right_Occipital_Fusiform_Gyrus_65: {
			path: "right-occipital-fusiform-gyrus",
			full_name: "Right Occipital Fusiform Gyrus"
		},
		Left_Occipital_Fusiform_Gyrus_66: {
			path: "left-occipital-fusiform-gyrus",
			full_name: "Left Occipital Fusiform Gyrus"
		},
		Left_Frontal_Operculum_Cortex_67: {
			path: "left-frontal-operculum-cortex",
			full_name: "Left Frontal Operculum Cortex"
		},
		Right_Frontal_Operculum_Cortex_68: {
			path: "right-frontal-operculum-cortex",
			full_name: "Right Frontal Operculum Cortex"
		},
		Left_Central_Opercular_Cortex_69: {
			path: "left-central-opercular-cortex",
			full_name: "Left Central Opercular Cortex"
		},
		Right_Central_Opercular_Cortex_70: {
			path: "right-central-opercular-cortex",
			full_name: "Right Central Opercular Cortex"
		},
		Right_Central_Opercular_Cortex_72: {
			path: "right-central-opercular-cortex",
			full_name: "Right Central Opercular Cortex"
		},
		Left_Parietal_Operculum_Cortex_71: {
			path: "left-parietal-operculum-cortex",
			full_name: "Left Parietal Operculum Cortex"
		},
		Right_Planum_Polare_73: {
			path: "right-planum-polare",
			full_name: "Right Planum Polare"
		},
		Right_Heschls_Gyrus__includes_H1_and_H2_75: {
			path: "right-heschls-gyrus-includes-h-and-h",
			full_name: "Right Heschls Gyrus includes H and H"
		},
		Right_Heschls_Gyrus__includes_H1_and_H2_78: {
			path: "right-heschls-gyrus-includes-h-and-h",
			full_name: "Right Heschls Gyrus includes H and H"
		},
		Left_Planum_Polare_74: {
			path: "left-planum-polare",
			full_name: "Left Planum Polare"
		},
		Left_Heschls_Gyrus__includes_H1_and_H2_77: {
			path: "left-heschls-gyrus-includes-h-and-h",
			full_name: "Left Heschls Gyrus includes H and H"
		},
		Supracalcarine_Cortex_79: {
			path: "supracalcarine-cortex",
			full_name: "Supracalcarine Cortex"
		},
		Left_Insular_Cortex_3: {
			path: "left-insular-cortex",
			full_name: "Left Insular Cortex"
		},
		Left_Heschls_Gyrus__includes_H1_and_H2_76: {
			path: "left-heschls-gyrus-includes-h-and-h",
			full_name: "Left Heschls Gyrus includes H and H"
		},
		Occipital_Pole_82: {
			path: "occipital-pole",
			full_name: "Occipital Pole"
		}
	});
var html = document.querySelector("html"),
	brain_wrapper = document.querySelector(".brain-wrapper");
function init() {
	route(),
		!1 === WEBGL.isWebGLAvailable()
			? warning(
					"Your web browser or graphics card doesn't support WebGL. Try another device or browser."
			  )
			: updateStatus("Loading model"),
		1 == settings.autosave && loadSettings();
}
function route() {
	var e = window.location.pathname;
	initBrain(),
		initSettings(),
		"/" !== e &&
			Object.keys(regions_obj).forEach(function(r) {
				console.log(r),
					"/" + regions_obj[r].path == e && switchRegion(r);
			});
}
function initBrain() {
	brain_wrapper.offsetWidth, brain_wrapper.offsetHeight;
	(camera = new THREE.PerspectiveCamera(
		50,
		brain_wrapper.offsetWidth / brain_wrapper.offsetHeight,
		0.1,
		1e3
	)),
		camera.position.set(0, 5, 25),
		(controls = new THREE.OrbitControls(camera, brain_wrapper)),
		(controls.enableZoom = settings.zoom),
		(controls.enablePan = settings.pan),
		(controls.autoRotate = settings.orbit),
		(controls.autoRotateSpeed = settings.orbit_speed),
		controls.addEventListener("start", function() {
			(controls.autoRotate = !1),
				(document.querySelector(".orbit-toggle input").checked = !1);
		}),
		controls.target.set(0, 0, 0),
		controls.update(),
		(scene = new THREE.Scene());
	var e = new THREE.HemisphereLight(16751001, 0.8);
	scene.add(e);
	var r = new THREE.DirectionalLight(11517951, 0.5);
	r.position.set(0, 10, 0), scene.add(r);
	var t = new THREE.LoadingManager();
	(t.onStart = function(e, r, t) {
		updateStatus("Receiving data (" + r + "/" + t + ")");
	}),
		(t.onLoad = function() {
			updateStatus("Rendering brain");
		}),
		(t.onProgress = function(e, r, t) {
			if (r > t) r = t;
			updateStatus("Loading brain (" + r + "/" + t + ")");
		}),
		(t.onError = function(e) {
			updateStatus("Error loading brain");
		}),
		new THREE.GLTFLoader(t).load(
			settings.brain_model_path,
			function(e) {
				(i = 0),
					e.scene.traverse(function(e) {
						if (e.isMesh) {
							if (
								(i++,
								(e.material.roughness =
									settings.brain.roughness),
								(e.material.metalness =
									settings.brain.metalness),
								(e.material.wireframe =
									settings.brain.wireframe),
								e.material.color.setStyle(
									settings.brain.default_color
								),
								(e.material.side = THREE.DoubleSide),
								(e.material = e.material.clone()),
								settings.brain.explode > 0)
							) {
								e.geometry.computeBoundingSphere();
								var r = e.geometry.boundingSphere.center.x,
									t = e.geometry.boundingSphere.center.y,
									a = e.geometry.boundingSphere.center.z;
								e.position.set(
									r * settings.brain.explode,
									t * settings.brain.explode,
									a * settings.brain.explode
								);
							}
							(regions_obj[e.name].mesh = e),
								i == Object.keys(regions_obj).length &&
									setupRegionsFilter();
						}
					}),
					e.scene.position.set(
						settings.brain.offset.x,
						settings.brain.offset.y,
						settings.brain.offset.z
					),
					scene.add(e.scene),
					animate();
			},
			function(e) {},
			function(e) {
				console.log(e);
			}
		),
		(renderer = new THREE.WebGLRenderer({
			alpha: !0,
			antialias: !0,
			side: THREE.DoubleSide
		})),
		renderer.setPixelRatio(window.devicePixelRatio),
		setCanvasSize(),
		(renderer.gammaOutput = !0),
		brain_wrapper.appendChild(renderer.domElement),
		window.addEventListener("resize", setCanvasSize, !1);
}
function setCanvasSize() {
	var e = document.querySelector(".brain-wrapper");
	(camera.aspect = e.offsetWidth / e.offsetHeight),
		camera.updateProjectionMatrix(),
		renderer.setSize(e.offsetWidth, e.offsetHeight);
}
function animate() {
	requestAnimationFrame(animate),
		controls.update(),
		renderer.render(scene, camera);
}
function setupRegionsFilter() {
	var e = document.querySelector(".regions-filter");
	new Choices(e, {
		itemSelectText: "Select",
		noResultsText: "No matching brain regions",
		placeholder: !0,
		placeholderValue: "Filter brain regions...",
		searchPlaceholderValue: "Filter brain regions...",
		searchResultLimit: 3
	});
	e.addEventListener(
		"choice",
		function(e) {
			console.log(e.detail.choice.value),
				switchRegion(e.detail.choice.value);
		},
		!1
	);
}
function switchRegion(e) {
	console.log("switchRegion(" + e + ")");
	var r = regions_obj[e];
	history.pushState(null, null, "/" + r.path),
		document
			.querySelector("html")
			.classList.add("has-region-content", "has-content"),
		renderer.render(scene, camera),
		(i = 0),
		(document.querySelector(".content-wrapper .container").innerHTML = ""),
		scene.traverse(function(r) {
			r.isMesh &&
				((r.material.transparent = !1),
				(r.material.opacity = 1),
				r.name !== e &&
					"Head" !== r.name &&
					((r.material.transparent = !0),
					(r.material.opacity = 0.1)));
		});
	var t = "<h2>" + r.full_name + "</h2>";
	if (void 0 !== r.summary) var a = "<p>" + r.intro + "</p>";
	else
		(a =
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"),
			(a = "");
	var o = "<div>" + t + a + "</div>";
	(document.querySelector(".content-wrapper .container").innerHTML += o),
		scrollTop();
}
function initSettings() {
	orbitToggle(),
		sliceToggle(),
		headToggle(),
		squareGridToggle(),
		axesToggle();
}
function orbitToggle() {
	var e = document.querySelector(".orbit-toggle input");
	(e.checked = settings.orbit),
		e.addEventListener("change", function() {
			e.checked
				? ((settings.orbit = !0), (controls.autoRotate = !0))
				: ((settings.orbit = !1), (controls.autoRotate = !1)),
				saveSettings();
		});
}
function sliceToggle() {
	var e = document.querySelector(".slice-toggle input");
	(e.checked = settings.slice.visible),
		setupSlice(),
		e.addEventListener("change", function() {
			e.checked
				? (settings.slice.visible = !0)
				: (settings.slice.visible = !1),
				setupSlice(),
				saveSettings(),
				scrollTop();
		});
}
function setupSlice() {
	if (1 == settings.slice.visible) {
		(document.querySelector(
			'input[name="slice_axis"][value="' + settings.slice.axis + '"]'
		).checked = !0),
			document.querySelector(".slice-tool").classList.remove("is-hidden");
		var e = document.querySelector(".spinner");
		null !== e && e.parentNode.removeChild(e),
			slice(),
			document
				.querySelectorAll('[name="slice_axis"]')
				.forEach(function(e) {
					e.addEventListener("change", function() {
						(controls.autoRotate = !1),
							(settings.slice.axis = document.querySelector(
								'[name="slice_axis"]:checked'
							).value),
							saveSettings(),
							slice();
					});
				}),
			document
				.querySelector(".slice-range")
				.addEventListener("input", function() {
					(controls.autoRotate = !1),
						(settings.slice.position = this.value),
						saveSettings(),
						slice();
				});
	} else
		document.querySelector(".slice-tool").classList.add("is-hidden"),
			(renderer.localClippingEnabled = !1),
			(renderer.clippingPlanes = []);
}
function slice() {
	if ((console.log("slice();"), "y" == settings.slice.axis))
		var e = [1, 0, 0];
	if ("x" == settings.slice.axis) e = [0, 0, 1];
	if ("z" == settings.slice.axis) e = [0, 1, 0];
	var r =
			settings.slice.dimensions[settings.slice.axis] *
			settings.slice.position,
		t = [
			new THREE.Plane(
				new THREE.Vector3(e[0], e[1], e[2]),
				-1 * r + settings.slice.size / 2
			),
			new THREE.Plane(
				new THREE.Vector3(-e[0], -e[1], -e[2]),
				r + settings.slice.size / 2
			)
		];
	(renderer.localClippingEnabled = !0), (renderer.clippingPlanes = t);
}
function squareGridToggle() {
	var e = document.querySelector(".square-grid-toggle input"),
		r = new THREE.GridHelper(
			2 * settings.grid_size,
			settings.grid_size / 2
		);
	(e.checked = settings.square_grid),
		1 == settings.square_grid ? scene.add(r) : scene.remove(r),
		e.addEventListener("change", function() {
			e.checked
				? ((settings.square_grid = !0), scene.add(r))
				: ((settings.square_grid = !1), scene.remove(r)),
				saveSettings();
		});
}
function polarGridToggle() {
	var e = document.querySelector(".polar-grid-toggle input"),
		r = new THREE.PolarGridHelper(
			settings.grid_size,
			8,
			5,
			64,
			7829367,
			7829367
		);
	(e.checked = settings.polar_grid),
		1 == settings.polar_grid ? scene.add(r) : scene.remove(r),
		e.addEventListener("change", function() {
			e.checked
				? ((settings.polar_grid = !0), scene.add(r))
				: ((settings.polar_grid = !1), scene.remove(r)),
				saveSettings();
		});
}
function axesToggle() {
	var e = document.querySelector(".axes-toggle input"),
		r = new THREE.AxesHelper(settings.grid_size);
	(e.checked = settings.axes),
		1 == settings.axes ? scene.add(r) : scene.remove(r),
		e.addEventListener("change", function() {
			e.checked
				? ((settings.axes = !0), scene.add(r))
				: ((settings.axes = !1), scene.remove(r)),
				saveSettings();
		});
}
function headToggle() {
	head_mesh = void 0;
	var e = document.querySelector(".head-toggle input");
	1 == settings.head.visible
		? (console.log("loadHead!!!"), loadHead(), (e.checked = !0))
		: console.log("settings.head.visible = false;"),
		e.addEventListener("change", function() {
			e.checked
				? null == head_mesh
					? loadHead()
					: (head_mesh.visible = !0)
				: (head_mesh.visible = !1),
				saveSettings();
		});
}
function loadHead() {
	console.log("loadHead();");
	var e = new THREE.LoadingManager();
	(e.onStart = function(e, r, t) {
		console.log(
			"Started loading file: " +
				e +
				".\nLoaded " +
				r +
				" of " +
				t +
				" files."
		),
			updateStatus("Loading head (" + r + "/" + t + ")");
	}),
		(e.onLoad = function() {
			updateStatus("Rendering head");
		}),
		(e.onProgress = function(e, r, t) {
			updateStatus("Loading head (" + r + "/" + t + ")");
		}),
		(e.onError = function(e) {
			updateStatus("Error loading head");
		}),
		new THREE.GLTFLoader(e).load(
			settings.head_model_path,
			function(e) {
				updateStatus("Rendering Head"),
					e.scene.traverse(function(e) {
						e.isMesh &&
							(console.log(e),
							(e.material.roughness = settings.head.roughness),
							(e.material.metalness = settings.head.metalness),
							(e.material.wireframe = settings.head.wireframe),
							e.material.color.setStyle(
								settings.head.default_color
							),
							(e.visible = !0),
							settings.head.opacity < 1 &&
								((e.material.transparent = !0),
								(e.material.opacity = settings.head.opacity)),
							(head_mesh = e));
					}),
					e.scene.position.set(
						settings.head.offset.x,
						settings.head.offset.y,
						settings.head.offset.z
					),
					scene.add(e.scene);
			},
			function(e) {},
			function(e) {
				console.log(e);
			}
		);
}
function reset() {
	console.log("reset();"),
		history.pushState(null, null, "/"),
		controls.target.set(0, 0, 0),
		controls.update(),
		(i = 0),
		scene.traverse(function(e) {
			e.isMesh &&
				((e.material.transparent = !1),
				(e.material.opacity = 1),
				"Head" == e.name &&
					settings.head.opacity < 1 &&
					((e.material.transparent = !0),
					(e.material.opacity = settings.head.opacity),
					e.material.color.setStyle(settings.head.default_color)));
		}),
		document
			.querySelector("html")
			.classList.remove("has-region-content", "has-content"),
		document
			.querySelector(".regions-wrapper")
			.classList.remove("is-inactive"),
		document
			.querySelector(".settings-wrapper")
			.classList.remove("is-inactive"),
		(document.querySelector(".content-wrapper .container").innerHTML = ""),
		1 == settings.orbit &&
			((document.querySelector(".orbit-toggle input").checked = !0),
			(controls.autoRotate = !0)),
		scrollTop();
}
function updateStatus(e) {
	var r = '<div class="status container">' + e + "...</div>";
	document.querySelector(".status-wrapper").innerHTML = r;
}
function warning(e) {
	var r = '<p class="container">' + e + "</p>";
	document.querySelector(".warning").innerHTML = r;
	var t = document.querySelector(".spinner");
	null !== t && t.parentNode.removeChild(t);
}
function loadSettings() {
	localStorage.getItem("hbr_settings") &&
		(settings = JSON.parse(localStorage.getItem("hbr_settings")));
}
function saveSettings() {
	localStorage.setItem("hbr_settings", JSON.stringify(settings));
}
function scrollTop() {
	setTimeout(function() {
		window.scroll(0, 0);
	}, 50);
}
init();
