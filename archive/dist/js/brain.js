var WEBGL={isWebGLAvailable:function(){try{var e=document.createElement("canvas");return!(!window.WebGLRenderingContext||!e.getContext("webgl")&&!e.getContext("experimental-webgl"))}catch(e){return!1}},isWebGL2Available:function(){try{var e=document.createElement("canvas");return!(!window.WebGL2RenderingContext||!e.getContext("webgl2"))}catch(e){return!1}},getWebGLErrorMessage:function(){return this.getErrorMessage(1)},getWebGL2ErrorMessage:function(){return this.getErrorMessage(2)},getErrorMessage:function(e){var t={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext},n='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>',r=document.createElement("div");return r.id="webglmessage",r.style.fontFamily="monospace",r.style.fontSize="13px",r.style.fontWeight="normal",r.style.textAlign="center",r.style.background="#fff",r.style.color="#000",r.style.padding="1.5em",r.style.width="400px",r.style.margin="5em auto 0",n=(n=t[e]?n.replace("$0","graphics card"):n.replace("$0","browser")).replace("$1",{1:"WebGL",2:"WebGL 2"}[e]),r.innerHTML=n,r}};;
// prettier-ignore
settings = {
	autosave: false,

	// Models
	brain_model_path: "Brain_05/Brain_005.gltf",
	head_model_path: "BertsHead_01/BertsHead_01_Remesh_01.gltf",

	// Animations
	orbit: true,
	orbit_speed: 4,

	// Helpers
	grid_size: 10,
	square_grid: false,
	polar_grid: false,
	axes: false,

	// Interactions
	pan: false,
	zoom: false,

	// Slicing and dicing
	slice: {
		visible: false,
		axis: "z",
		position: 0,
		size: 0.25,
		dimensions: {
			x: 7,
			y: 10,
			z: 7
		}
	},

	// Materials
	brain: {
		roughness: 0.1,
		metalness: 0.4,
		wireframe: false,
		default_color: "lightcoral",
		explode: 0,
		offset: {
			x: -2.25,
			y: 0,
			z: 0
		}
	},
	head: {
		visible: false,
		roughness: 1,
		metalness: 0,
		wireframe: true,
		default_color: "#333",
		offset: {
			x: -2.25,
			y: 0,
			z: 0
		}
	}
}
;
regions_obj = {
	Frontal_Pole_0: {
		path: "frontal-pole",
		wiki_path: "frontal_lobe",
		full_name: "Frontal Pole"
	},
	Right_Insular_Cortex_1: {
		path: "right-insular-cortex",
		wiki_path: "insular_cortex",
		full_name: "Right Insular Cortex"
	},
	Superior_Frontal_Gyrus_4: {
		path: "superior-frontal-gyrus",
		wiki_path: "frontal_gyrus",
		full_name: "Superior Frontal Gyrus"
	},
	Right_Middle_Frontal_Gyrus_6: {
		path: "right-middle-frontal-gyrus",
		wiki_path: "frontal_gyrus",
		full_name: "Right Middle Frontal Gyrus"
	},
	Left_Middle_Frontal_Gyrus_5: {
		path: "left-middle-frontal-gyrus",
		wiki_path: "frontal_gyrus",
		full_name: "Left Middle Frontal Gyrus"
	},
	Left_Inferior_Frontal_Gyrus__pars_triangularis_8: {
		path: "left-inferior-frontal-gyrus-pars-triangularis",
		wiki_path: "frontal_gyrus",
		full_name: "Left Inferior Frontal Gyrus pars triangularis"
	},
	Right_Inferior_Frontal_Gyrus__pars_triangularis_7: {
		path: "right-inferior-frontal-gyrus-pars-triangularis",
		wiki_path: "frontal_gyrus",
		full_name: "Right Inferior Frontal Gyrus pars triangularis"
	},
	Right_Inferior_Frontal_Gyrus__pars_opercularis_9: {
		path: "right-inferior-frontal-gyrus-pars-opercularis",
		wiki_path: "frontal_gyrus",
		full_name: "Right Inferior Frontal Gyrus pars opercularis"
	},
	Left_Inferior_Frontal_Gyrus__pars_opercularis_11: {
		path: "left-inferior-frontal-gyrus-pars-opercularis",
		wiki_path: "frontal_gyrus",
		full_name: "Left Inferior Frontal Gyrus pars opercularis"
	},
	Precentral_Gyrus_12: {
		path: "precentral-gyrus",
		wiki_path: "precentral_gyrus",
		full_name: "Precentral Gyrus"
	},
	Right_Temporal_Pole_13: {
		path: "right-temporal-pole",
		wiki_path: "cerebral_hemisphere",
		full_name: "Right Temporal Pole"
	},
	Left_Temporal_Pole_14: {
		path: "left-temporal-pole",
		wiki_path: "cerebral_hemisphere",
		full_name: "Left Temporal Pole"
	},
	Left_Middle_Temporal_Gyrus__anterior_division_15: {
		path: "left-middle-temporal-gyrus-anterior-division",
		wiki_path: "middle_temporal_gyrus",
		full_name: "Left Middle Temporal Gyrus anterior division"
	},
	Right_Middle_Temporal_Gyrus__anterior_division_16: {
		path: "right-middle-temporal-gyrus-anterior-division",
		wiki_path: "middle_temporal_gyrus",
		full_name: "Right Middle Temporal Gyrus anterior division"
	},
	RIght_Superior_Temporal_Gyrus__posterior_division_17: {
		path: "right-superior-temporal-gyrus-posterior-division",
		wiki_path: "superior_temporal_gyrus",
		full_name: "RIght Superior Temporal Gyrus posterior division"
	},
	Left_Superior_Temporal_Gyrus__posterior_division_18: {
		path: "left-superior-temporal-gyrus-posterior-division",
		wiki_path: "superior_temporal_gyrus",
		full_name: "Left Superior Temporal Gyrus posterior division"
	},
	Right_Inferior_Temporal_Gyrus__anterior_division_19: {
		path: "right-inferior-temporal-gyrus-anterior-division",
		wiki_path: "inferior_temporal_gyrus",
		full_name: "Right Inferior Temporal Gyrus anterior division"
	},
	Left_Middle_Temporal_Gyrus__anterior_division_20: {
		path: "left-middle-temporal-gyrus-anterior-division",
		wiki_path: "middle_temporal_gyrus",
		full_name: "Left Middle Temporal Gyrus anterior division"
	},
	Right_Middle_Temporal_Gyrus__posterior_division_21: {
		path: "right-middle-temporal-gyrus-posterior-division",
		wiki_path: "middle_temporal_gyrus",
		full_name: "Right Middle Temporal Gyrus posterior division"
	},
	Left_Middle_Temporal_Gyrus__posterior_division_22: {
		path: "left-middle-temporal-gyrus-posterior-division",
		wiki_path: "middle_temporal_gyrus",
		full_name: "Left Middle Temporal Gyrus posterior division"
	},
	Right_Middle_Temporal_Gyrus__temporooccipital_part_23: {
		path: "right-middle-temporal-gyrus-temporooccipital-part",
		wiki_path: "middle_temporal_gyrus",
		full_name: "Right Middle Temporal Gyrus temporooccipital part"
	},
	Left_Middle_Temporal_Gyrus__temporooccipital_part_24: {
		path: "left-middle-temporal-gyrus-temporooccipital-part",
		wiki_path: "middle_temporal_gyrus",
		full_name: "Left Middle Temporal Gyrus temporooccipital part"
	},
	Left_Temporal_Fusiform_Cortex__anterior_division_25: {
		path: "left-temporal-fusiform-cortex-anterior-division",
		wiki_path: "fusiform_gyrus",
		full_name: "Left Temporal Fusiform Cortex anterior division"
	},
	Right_Inferior_Temporal_Gyrus__posterior_division_26: {
		path: "right-inferior-temporal-gyrus-posterior-division",
		wiki_path: "inferior_temporal_gyrus",
		full_name: "Right Inferior Temporal Gyrus posterior division"
	},
	Right_Inferior_Temporal_Gyrus__posterior_division_28: {
		path: "right-inferior-temporal-gyrus-posterior-division",
		wiki_path: "inferior_temporal_gyrus",
		full_name: "Right Inferior Temporal Gyrus posterior division"
	},
	Left_Inferior_Temporal_Gyrus__posterior_division_27: {
		path: "left-inferior-temporal-gyrus-posterior-division",
		wiki_path: "inferior_temporal_gyrus",
		full_name: "Left Inferior Temporal Gyrus posterior division"
	},
	Left_Inferior_Temporal_Gyrus__posterior_division_29: {
		path: "left-inferior-temporal-gyrus-posterior-division",
		wiki_path: "inferior_temporal_gyrus",
		full_name: "Left Inferior Temporal Gyrus posterior division"
	},
	Postcentral_Gyrus_30: {
		path: "postcentral-gyrus",
		wiki_path: "postcentral_gyrus",
		full_name: "Postcentral Gyrus"
	},
	Left_Superior_Parietal_Lobule_31: {
		path: "left-superior-parietal-lobule",
		wiki_path: "superior_parietal_lobule",
		full_name: "Left Superior Parietal Lobule"
	},
	Right_Superior_Parietal_Lobule_32: {
		path: "right-superior-parietal-lobule",
		wiki_path: "superior_parietal_lobule",
		full_name: "Right Superior Parietal Lobule"
	},
	Left_Supramarginal_Gyrus__anterior_division_33: {
		path: "left-supramarginal-gyrus-anterior-division",
		wiki_path: "supramarginal_gyrus",
		full_name: "Left Supramarginal Gyrus anterior division"
	},
	Right_Supramarginal_Gyrus__anterior_division_34: {
		path: "right-supramarginal-gyrus-anterior-division",
		wiki_path: "supramarginal_gyrus",
		full_name: "Right Supramarginal Gyrus anterior division"
	},
	Left_Supramarginal_Gyrus__posterior_division_35: {
		path: "left-supramarginal-gyrus-posterior-division",
		wiki_path: "supramarginal_gyrus",
		full_name: "Left Supramarginal Gyrus posterior division"
	},
	Right_Supramarginal_Gyrus__posterior_division_36: {
		path: "right-supramarginal-gyrus-posterior-division",
		wiki_path: "supramarginal_gyrus",
		full_name: "Right Supramarginal Gyrus posterior division"
	},
	Left_Angular_Gyrus_37: {
		path: "left-angular-gyrus",
		wiki_path: "angular_gyrus",
		full_name: "Left Angular Gyrus"
	},
	Right_Angular_Gyrus_38: {
		path: "right-angular-gyrus",
		wiki_path: "angular_gyrus",
		full_name: "Right Angular Gyrus"
	},
	Right_Lateral_Occipital_Cortex__superior_division_39: {
		path: "right-lateral-occipital-cortex-superior-division",
		wiki_path: "visual_cortex",
		full_name: "Right Lateral Occipital Cortex superior division"
	},
	Left_Lateral_Occipital_Cortex__superior_division_40: {
		path: "left-lateral-occipital-cortex-superior-division",
		wiki_path: "visual_cortex",
		full_name: "Left Lateral Occipital Cortex superior division"
	},
	Right_Lateral_Occipital_Cortex__inferior_division_41: {
		path: "right-lateral-occipital-cortex-inferior-division",
		wiki_path: "visual_cortex",
		full_name: "Right Lateral Occipital Cortex inferior division"
	},
	Left_Lateral_Occipital_Cortex__inferior_division_42: {
		path: "left-lateral-occipital-cortex-inferior-division",
		wiki_path: "visual_cortex",
		full_name: "Left Lateral Occipital Cortex inferior division"
	},
	Lingual_Gyrus_43: {
		path: "lingual-gyrus",
		wiki_path: "lingual_gyrus",
		full_name: "Lingual Gyrus"
	},
	Frontal_Medial_Cortex_44: {
		path: "frontal-medial-cortex",
		wiki_path: "prefrontal_cortex",
		full_name: "Frontal Medial Cortex"
	},
	Superior_Frontal_Gyrus_45: {
		path: "superior-frontal-gyrus",
		wiki_path: "superior_frontal_gyrus",
		full_name: "Superior Frontal Gyrus"
	},
	Subcallosal_Cortex_46: {
		path: "subcallosal-cortex",
		wiki_path: "brodmann_area_25",
		full_name: "Subcallosal Cortex"
	},
	Paracingulate_Gyrus_47: {
		path: "paracingulate-gyrus",
		wiki_path: "cingulate_cortex",
		full_name: "Paracingulate Gyrus"
	},
	Cingulate_Gyrus__anterior_division_48: {
		path: "cingulate-gyrus-anterior-division",
		wiki_path: "cingulate_cortex",
		full_name: "Cingulate Gyrus anterior division"
	},
	Cingulate_Gyrus__posterior_division_49: {
		path: "cingulate-gyrus-posterior-division",
		wiki_path: "cingulate_cortex",
		full_name: "Cingulate Gyrus posterior division"
	},
	Precuneous_Cortex_50: {
		path: "precuneous-cortex",
		wiki_path: "cuneus",
		full_name: "Precuneous Cortex"
	},
	Cuneal_Cortex_51: {
		path: "cuneal-cortex",
		wiki_path: "cuneus",
		full_name: "Cuneal Cortex"
	},
	Right_Frontal_Orbital_Cortex_52: {
		path: "right-frontal-orbital-cortex",
		wiki_path: "frontal_lobe",
		full_name: "Right Frontal Orbital Cortex"
	},
	Left_Frontal_Orbital_Cortex_53: {
		path: "left-frontal-orbital-cortex",
		wiki_path: "frontal_lobe",
		full_name: "Left Frontal Orbital Cortex"
	},
	Right_Parahippocampal_Gyrus__anterior_division_54: {
		path: "right-parahippocampal-gyrus-anterior-division",
		wiki_path: "parahippocampal_gyrus",
		full_name: "Right Parahippocampal Gyrus anterior division"
	},
	Left_Parahippocampal_Gyrus__anterior_division_55: {
		path: "left-parahippocampal-gyrus-anterior-division",
		wiki_path: "parahippocampal_gyrus",
		full_name: "Left Parahippocampal Gyrus anterior division"
	},
	Left_Parahippocampal_Gyrus__posterior_division_56: {
		path: "left-parahippocampal-gyrus-posterior-division",
		wiki_path: "parahippocampal_gyrus",
		full_name: "Left Parahippocampal Gyrus posterior division"
	},
	Right_Parahippocampal_Gyrus__posterior_division_57: {
		path: "right-parahippocampal-gyrus-posterior-division",
		wiki_path: "parahippocampal_gyrus",
		full_name: "Right Parahippocampal Gyrus posterior division"
	},
	Lingual_Gyrus_58: {
		path: "lingual-gyrus",
		wiki_path: "lingual_gyrus",
		full_name: "Lingual Gyrus"
	},
	Left_Temporal_Fusiform_Cortex__anterior_division_59: {
		path: "left-temporal-fusiform-cortex-anterior-division",
		wiki_path: "fusiform_gyrus",
		full_name: "Left Temporal Fusiform Cortex anterior division"
	},
	Right_Temporal_Fusiform_Cortex__anterior_division_60: {
		path: "right-temporal-fusiform-cortex-anterior-division",
		wiki_path: "fusiform_gyrus",
		full_name: "Right Temporal Fusiform Cortex anterior division"
	},
	Right_Temporal_Fusiform_Cortex__posterior_division_61: {
		path: "right-temporal-fusiform-cortex-posterior-division",
		wiki_path: "fusiform_gyrus",
		full_name: "Right Temporal Fusiform Cortex posterior division"
	},
	Left_Temporal_Fusiform_Cortex__posterior_division_62: {
		path: "left-temporal-fusiform-cortex-posterior-division",
		wiki_path: "fusiform_gyrus",
		full_name: "Left Temporal Fusiform Cortex posterior division"
	},
	Right_Temporal_Occipital_Fusiform_Cortex_63: {
		path: "right-temporal-occipital-fusiform-cortex",
		wiki_path: "fusiform_gyrus",
		full_name: "Right Temporal Occipital Fusiform Cortex"
	},
	Left_Temporal_Occipital_Fusiform_Cortex_64: {
		path: "left-temporal-occipital-fusiform-cortex",
		wiki_path: "fusiform_gyrus",
		full_name: "Left Temporal Occipital Fusiform Cortex"
	},
	Right_Occipital_Fusiform_Gyrus_65: {
		path: "right-occipital-fusiform-gyrus",
		wiki_path: "fusiform_gyrus",
		full_name: "Right Occipital Fusiform Gyrus"
	},
	Left_Occipital_Fusiform_Gyrus_66: {
		path: "left-occipital-fusiform-gyrus",
		wiki_path: "fusiform_gyrus",
		full_name: "Left Occipital Fusiform Gyrus"
	},
	Left_Frontal_Operculum_Cortex_67: {
		path: "left-frontal-operculum-cortex",
		wiki_path: "operculum_(brain)",
		full_name: "Left Frontal Operculum Cortex"
	},
	Right_Frontal_Operculum_Cortex_68: {
		path: "right-frontal-operculum-cortex",
		wiki_path: "operculum_(brain)",
		full_name: "Right Frontal Operculum Cortex"
	},
	Left_Central_Opercular_Cortex_69: {
		path: "left-central-opercular-cortex",
		wiki_path: "operculum_(brain)",
		full_name: "Left Central Opercular Cortex"
	},
	Right_Central_Opercular_Cortex_70: {
		path: "right-central-opercular-cortex",
		wiki_path: "operculum_(brain)",
		full_name: "Right Central Opercular Cortex"
	},
	Right_Central_Opercular_Cortex_72: {
		path: "right-central-opercular-cortex",
		wiki_path: "operculum_(brain)",
		full_name: "Right Central Opercular Cortex"
	},
	Left_Parietal_Operculum_Cortex_71: {
		path: "left-parietal-operculum-cortex",
		wiki_path: "operculum_(brain)",
		full_name: "Left Parietal Operculum Cortex"
	},
	Right_Planum_Polare_73: {
		path: "right-planum-polare",
		wiki_path: "auditory_cortex",
		full_name: "Right Planum Polare"
	},
	Right_Heschls_Gyrus__includes_H1_and_H2_75: {
		path: "right-heschls-gyrus-includes-h-and-h",
		wiki_path: "transverse_temporal_gyrus",
		full_name: "Right Heschls Gyrus includes H and H"
	},
	Right_Heschls_Gyrus__includes_H1_and_H2_78: {
		path: "right-heschls-gyrus-includes-h-and-h",
		wiki_path: "transverse_temporal_gyrus",
		full_name: "Right Heschls Gyrus includes H and H"
	},
	Left_Planum_Polare_74: {
		path: "left-planum-polare",
		wiki_path: "auditory_cortex",
		full_name: "Left Planum Polare"
	},
	Left_Heschls_Gyrus__includes_H1_and_H2_77: {
		path: "left-heschls-gyrus-includes-h-and-h",
		wiki_path: "transverse_temporal_gyrus",
		full_name: "Left Heschls Gyrus includes H and H"
	},
	Supracalcarine_Cortex_79: {
		path: "supracalcarine-cortex",
		wiki_path: "calcarine_sulcus",
		full_name: "Supracalcarine Cortex"
	},
	Left_Insular_Cortex_3: {
		path: "left-insular-cortex",
		wiki_path: "insular_cortex",
		full_name: "Left Insular Cortex"
	},
	Left_Heschls_Gyrus__includes_H1_and_H2_76: {
		path: "left-heschls-gyrus-includes-h-and-h",
		wiki_path: "transverse_temporal_gyrus",
		full_name: "Left Heschls Gyrus includes H and H"
	},
	Occipital_Pole_82: {
		path: "occipital-pole",
		wiki_path: "cerebral_hemisphere",
		full_name: "Occipital Pole"
	}
};
;
// JSONP by larryosborn
// https://github.com/larryosborn/JSONP
(function() {
	var e, n, r, o, t, l, u, d;
	(r = function(e) {
		return window.document.createElement(e);
	}),
		(o = window.encodeURIComponent),
		(u = Math.random),
		(e = function(e) {
			var o, l, u, i, a, c, f;
			if (
				(null == e && (e = {}),
				(c = {
					data: e.data || {},
					error: e.error || t,
					success: e.success || t,
					beforeSend: e.beforeSend || t,
					complete: e.complete || t,
					url: e.url || ""
				}),
				(c.computedUrl = n(c)),
				0 === c.url.length)
			)
				throw new Error("MissingUrl");
			return (
				(i = !1),
				c.beforeSend({}, c) !== !1 &&
					((u = e.callbackName || "callback"),
					(l = e.callbackFunc || "jsonp_" + d(15)),
					(o = c.data[u] = l),
					(window[o] = function(e) {
						return (
							(window[o] = null),
							c.success(e, c),
							c.complete(e, c)
						);
					}),
					(f = r("script")),
					(f.src = n(c)),
					(f.async = !0),
					(f.onerror = function(e) {
						return (
							c.error({ url: f.src, event: e }),
							c.complete({ url: f.src, event: e }, c)
						);
					}),
					(f.onload = f.onreadystatechange = function() {
						var e, n;
						if (
							!(
								i ||
								("loaded" !== (e = this.readyState) &&
									"complete" !== e)
							)
						)
							return (
								(i = !0),
								f
									? ((f.onload = f.onreadystatechange = null),
									  null != (n = f.parentNode) &&
											n.removeChild(f),
									  (f = null))
									: void 0
							);
					}),
					(a =
						window.document.getElementsByTagName("head")[0] ||
						window.document.documentElement),
					a.insertBefore(f, a.firstChild)),
				{
					abort: function() {
						return (
							(window[o] = function() {
								return (window[o] = null);
							}),
							(i = !0),
							(null != f
							? f.parentNode
							: void 0)
								? ((f.onload = f.onreadystatechange = null),
								  f.parentNode.removeChild(f),
								  (f = null))
								: void 0
						);
					}
				}
			);
		}),
		(t = function() {}),
		(n = function(e) {
			var n;
			return (
				(n = e.url),
				(n += e.url.indexOf("?") < 0 ? "?" : "&"),
				(n += l(e.data))
			);
		}),
		(d = function(e) {
			var n;
			for (n = ""; n.length < e; )
				n += u()
					.toString(36)
					.slice(2, 3);
			return n;
		}),
		(l = function(e) {
			var n, r, t;
			return (
				(n = (function() {
					var n;
					n = [];
					for (r in e) (t = e[r]), n.push(o(r) + "=" + o(t));
					return n;
				})()),
				n.join("&")
			);
		}),
		("undefined" != typeof define && null !== define
		? define.amd
		: void 0)
			? define(function() {
					return e;
			  })
			: ("undefined" != typeof module && null !== module
				? module.exports
				: void 0)
				? (module.exports = e)
				: (this.JSONP = e);
}.call(this));
;

var html = document.querySelector("html");
var brain_wrapper = document.querySelector(".brain-wrapper");

init();

function init() {
	// Navigate to correct page
	route();

	// Prevent transitions from happening before page is setup
	window.onload = document.querySelector("body").classList.remove("preload");

	// Warnings
	if (WEBGL.isWebGLAvailable() === false) {
		warning(
			"Your web browser or graphics card doesn't support WebGL. Try another device or browser."
		);
	} else {
		updateStatus("Loading model");
	}

	// Load any settings in localstorage
	if (settings.autosave == true) {
		loadSettings();
	}
}

function route() {
	var path_name = window.location.pathname;

	initBrain();
	initSettings();

	// This can be improved 1000%
	if (path_name !== "/") {
		Object.keys(regions_obj).forEach(function(key) {
			if ("/" + regions_obj[key].path == path_name) {
				switchRegion(key);
			}
		});
	}
}

function initBrain() {
	var canvasWidth = brain_wrapper.offsetWidth;
	var canvasHeight = brain_wrapper.offsetHeight;

	// Setup Camera
	camera = new THREE.PerspectiveCamera(
		50,
		brain_wrapper.offsetWidth / brain_wrapper.offsetHeight,
		0.1,
		1000
	);
	camera.position.set(0, 5, 25);

	// Setup controls
	controls = new THREE.OrbitControls(camera, brain_wrapper);
	controls.enableZoom = settings.zoom;
	controls.enablePan = settings.pan;
	controls.autoRotate = settings.orbit;
	controls.autoRotateSpeed = settings.orbit_speed;

	// Stop autorotating when there is an interaction
	controls.addEventListener("start", function() {
		controls.autoRotate = false;

		document.querySelector(".orbit-toggle input").checked = false;
	});

	// Origin
	controls.target.set(0, 0, 0);
	controls.update();

	// Set the scene
	scene = new THREE.Scene();

	// Lighting
	var light = new THREE.HemisphereLight(0xff9999, 0.8);
	scene.add(light);
	var directionalLight = new THREE.DirectionalLight(0xafbfff, 0.5);
	directionalLight.position.set(0, 10, 0);
	scene.add(directionalLight);

	// Load manager
	var brain_manager = new THREE.LoadingManager();
	brain_manager.onStart = function(url, itemsLoaded, itemsTotal) {
		updateStatus("Receiving data (" + itemsLoaded + "/" + itemsTotal + ")");
	};

	brain_manager.onLoad = function() {
		updateStatus("Rendering brain");
	};

	brain_manager.onProgress = function(url, itemsLoaded, itemsTotal) {
		// Sometimes it will display 4/3 items loaded, this is a fix
		if (itemsLoaded > itemsTotal) {
			var itemsLoaded = itemsTotal;
		}

		updateStatus("Loading brain (" + itemsLoaded + "/" + itemsTotal + ")");
	};

	brain_manager.onError = function(url) {
		updateStatus("Error loading brain");
	};

	var loader = new THREE.GLTFLoader(brain_manager);
	loader.load(
		'models/' + settings.brain_model_path,
		function(gltf) {
			i = 0;
			gltf.scene.traverse(function(mesh) {
				if (mesh.isMesh) {
					i++;
					// Global mesh styles
					mesh.material.roughness = settings.brain.roughness;
					mesh.material.metalness = settings.brain.metalness;
					mesh.material.wireframe = settings.brain.wireframe;
					mesh.material.color.setStyle(settings.brain.default_color);
					mesh.material.side = THREE.DoubleSide;

					// Create separate material instance and local mesh styles
					mesh.material = mesh.material.clone();

					// Explode brain regions
					if (settings.brain.explode > 0) {
						mesh.geometry.computeBoundingSphere();

						var x = mesh.geometry.boundingSphere.center.x;
						var y = mesh.geometry.boundingSphere.center.y;
						var z = mesh.geometry.boundingSphere.center.z;

						mesh.position.set(
							x * settings.brain.explode,
							y * settings.brain.explode,
							z * settings.brain.explode
						);
					}

					// Add mesh object to regions object
					// TODO: is this necessary?
					regions_obj[mesh.name].mesh = mesh;

					// We're done traversing
					if (i == Object.keys(regions_obj).length) {
						setupRegionsFilter();
					}
				}
			});

			// Set position of brain with offsets
			gltf.scene.position.set(
				settings.brain.offset.x,
				settings.brain.offset.y,
				settings.brain.offset.z
			);

			scene.add(gltf.scene);

			animate();
		},
		function(xhr) {
			// if (xhr.total !== 0) {
			// 	var pct = (xhr.loaded / xhr.total) * 100;
			// 	updateStatus("Loading brain model " + pct + "%");
			// }
		},
		function(error) {
			console.log(error);
		}
	);

	// Render the canvas
	renderer = new THREE.WebGLRenderer({
		alpha: true,
		antialias: true,
		side: THREE.DoubleSide
	});
	renderer.setPixelRatio(window.devicePixelRatio);

	setCanvasSize();

	// Rendering settings
	renderer.gammaOutput = true;

	// Add canvas to page
	brain_wrapper.appendChild(renderer.domElement);

	// Detect window resizing and resize canvas
	window.addEventListener("resize", setCanvasSize, false);
}

function setCanvasSize() {
	var brain_wrapper = document.querySelector(".brain-wrapper");

	camera.aspect = brain_wrapper.offsetWidth / brain_wrapper.offsetHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(brain_wrapper.offsetWidth, brain_wrapper.offsetHeight);
}

function animate() {
	requestAnimationFrame(animate);

	controls.update();

	renderer.render(scene, camera);
}

function setupRegionsFilter() {
	var regions_filter = document.querySelector(".regions-filter");
	var choices = new Choices(regions_filter, {
		itemSelectText: "Select",
		noResultsText: "No matching brain regions",
		placeholder: true,
		placeholderValue: "Filter brain regions...",
		searchPlaceholderValue: "Filter brain regions...",
		searchResultLimit: 3
	});

	regions_filter.addEventListener(
		"choice",
		function(e) {
			switchRegion(e.detail.choice.value);
		},
		false
	);
}

function switchRegion(region_id) {
	var target_obj = regions_obj[region_id];

	// Change the URL
	history.pushState(null, null, "/" + target_obj.path);

	// Change page class
	document
		.querySelector("html")
		.classList.add("has-region-content", "has-content");

	// Rerender the page
	renderer.render(scene, camera);

	// Reset the counter
	i = 0;

	// Reset the content wrapper
	document.querySelector(".content-wrapper .container").innerHTML = "";

	// Make all other regions transparent
	scene.traverse(function(mesh) {
		if (mesh.isMesh) {
			// Return all brain regions to opaque state first
			mesh.material.transparent = false;
			mesh.material.opacity = 1;

			if (mesh.name !== region_id && mesh.name !== "Head") {
				mesh.material.transparent = true;
				mesh.material.opacity = 0.1;
			}
		}
	});

	// Set content of content wrapper
	var request_url =
		"https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext=true&exintro=true&redirects=true&titles=" +
		target_obj.wiki_path +
		"&callback=?";

	// Set the title
	document.querySelector(".content-wrapper .container").innerHTML +=
		"<h2>" + target_obj.full_name + "</h2>";

	// Get Wikipedia summary
	JSONP({
		url: request_url,
		success: function(data) {
			// We got the summary
			var sub_heading =
				'<cite>From the article <a href="https://en.wikipedia.org/wiki/' +
				target_obj.wiki_path +
				'">' +
				data.query.normalized[0].to +
				"</a> on Wikipedia.</cite>";
			var article_id = Object.keys(data.query.pages)[0]; // Gets the first object in pages
			var article_extract =
				"<p>" + data.query.pages[article_id].extract + "</p>";

			document.querySelector(".content-wrapper .container").innerHTML +=
				sub_heading + article_extract;
		},
		error: function(error) {
			console.log(error);
		}
	});

	// Scroll to top of page
	scrollTop();
}

function initSettings() {
	// Orbit Toggle
	orbitToggle();

	// Slice Toggle
	sliceToggle();

	// Head Toggle
	headToggle();

	// Square Grid Toggle
	squareGridToggle();

	// Polar Grid Toggle
	// polarGridToggle();

	// Axes Toggle
	axesToggle();
}

function orbitToggle() {
	var orbit_toggle = document.querySelector(".orbit-toggle input");

	orbit_toggle.checked = settings.orbit;
	orbit_toggle.addEventListener("change", function() {
		if (orbit_toggle.checked) {
			settings.orbit = true;
			controls.autoRotate = true;
		} else {
			settings.orbit = false;
			controls.autoRotate = false;
		}

		saveSettings();
	});
}

function sliceToggle() {
	// Setup slice toggle inits
	var slice_toggle = document.querySelector(".slice-toggle input");
	slice_toggle.checked = settings.slice.visible;

	setupSlice();

	slice_toggle.addEventListener("change", function() {
		if (slice_toggle.checked) {
			settings.slice.visible = true;
		} else {
			settings.slice.visible = false;
		}

		setupSlice();

		saveSettings();

		scrollTop();
	});
}

function setupSlice() {
	if (settings.slice.visible == true) {
		// Check the default slice axis button
		document.querySelector(
			'input[name="slice_axis"][value="' + settings.slice.axis + '"]'
		).checked = true;

		// Show the slice tool
		document.querySelector(".slice-tool").classList.remove("is-hidden");

		// Remove the spinner
		var spinner = document.querySelector(".spinner");
		if (spinner !== null) {
			spinner.parentNode.removeChild(spinner);
		}

		// Slice things up to start
		slice();

		// Detect change to slice axis buttons
		document
			.querySelectorAll('[name="slice_axis"]')
			.forEach(function(axis_button) {
				axis_button.addEventListener("change", function() {
					// Stop orbiting
					controls.autoRotate = false;

					// Set slice axis
					settings.slice.axis = document.querySelector(
						'[name="slice_axis"]:checked'
					).value;

					saveSettings();

					slice();
				});
			});

		// Detect change to slice range slider
		document
			.querySelector(".slice-range")
			.addEventListener("input", function() {
				// Stop orbiting
				controls.autoRotate = false;

				// Set slice position
				settings.slice.position = this.value;

				saveSettings();

				slice();
			});
	} else {
		// Hide slice tool
		document.querySelector(".slice-tool").classList.add("is-hidden");

		// Remove the slicing
		renderer.localClippingEnabled = false;
		renderer.clippingPlanes = [];
	}
}

function slice() {
	if (settings.slice.axis == "y") {
		var slice_base = [1, 0, 0];
	}
	if (settings.slice.axis == "x") {
		var slice_base = [0, 0, 1];
	}
	if (settings.slice.axis == "z") {
		var slice_base = [0, 1, 0];
	}

	var computed_slice_position =
		settings.slice.dimensions[settings.slice.axis] *
		settings.slice.position;

	var clip_plane = [
		new THREE.Plane(
			new THREE.Vector3(slice_base[0], slice_base[1], slice_base[2]),
			-1 * computed_slice_position + settings.slice.size / 2
		),
		new THREE.Plane(
			new THREE.Vector3(-slice_base[0], -slice_base[1], -slice_base[2]),
			computed_slice_position + settings.slice.size / 2
		)
	];

	renderer.localClippingEnabled = true;
	renderer.clippingPlanes = clip_plane;
}

function squareGridToggle() {
	var square_grid_toggle = document.querySelector(
		".square-grid-toggle input"
	);

	var squareGridHelper = new THREE.GridHelper(
		settings.grid_size * 2,
		settings.grid_size / 2
	);

	square_grid_toggle.checked = settings.square_grid;

	if (settings.square_grid == true) {
		scene.add(squareGridHelper);
	} else {
		scene.remove(squareGridHelper);
	}

	square_grid_toggle.addEventListener("change", function() {
		if (square_grid_toggle.checked) {
			settings.square_grid = true;
			scene.add(squareGridHelper);
		} else {
			settings.square_grid = false;
			scene.remove(squareGridHelper);
		}

		saveSettings();
	});
}

function polarGridToggle() {
	var polar_grid_toggle = document.querySelector(".polar-grid-toggle input");

	var polarGridHelper = new THREE.PolarGridHelper(
		settings.grid_size,
		8,
		5,
		64,
		0x777777,
		0x777777
	);

	polar_grid_toggle.checked = settings.polar_grid;

	if (settings.polar_grid == true) {
		scene.add(polarGridHelper);
	} else {
		scene.remove(polarGridHelper);
	}

	polar_grid_toggle.addEventListener("change", function() {
		if (polar_grid_toggle.checked) {
			settings.polar_grid = true;
			scene.add(polarGridHelper);
		} else {
			settings.polar_grid = false;
			scene.remove(polarGridHelper);
		}

		saveSettings();
	});
}

function axesToggle() {
	var axes_toggle = document.querySelector(".axes-toggle input");
	var axesHelper = new THREE.AxesHelper(settings.grid_size);

	axes_toggle.checked = settings.axes;
	if (settings.axes == true) {
		scene.add(axesHelper);
	} else {
		scene.remove(axesHelper);
	}

	axes_toggle.addEventListener("change", function() {
		if (axes_toggle.checked) {
			settings.axes = true;
			scene.add(axesHelper);
		} else {
			settings.axes = false;
			scene.remove(axesHelper);
		}

		saveSettings();
	});
}

function headToggle() {
	head_mesh = undefined;

	var head_toggle = document.querySelector(".head-toggle input");

	if (settings.head.visible == true) {
		loadHead();
		head_toggle.checked = true;
	} else {
	}

	head_toggle.addEventListener("change", function() {
		if (head_toggle.checked) {
			if (head_mesh == undefined) {
				// Head mesh not loaded,
				loadHead();
			} else {
				// The head has been loaded, just make it visible
				head_mesh.visible = true;
			}
		} else {
			// Toggle head mesh off
			head_mesh.visible = false;
		}

		saveSettings();
	});
}

function loadHead() {
	var head_manager = new THREE.LoadingManager();
	head_manager.onStart = function(url, itemsLoaded, itemsTotal) {
		console.log(
			"Started loading file: " +
				url +
				".\nLoaded " +
				itemsLoaded +
				" of " +
				itemsTotal +
				" files."
		);
		updateStatus("Loading head (" + itemsLoaded + "/" + itemsTotal + ")");
	};

	head_manager.onLoad = function() {
		updateStatus("Rendering head");
	};

	head_manager.onProgress = function(url, itemsLoaded, itemsTotal) {
		updateStatus("Loading head (" + itemsLoaded + "/" + itemsTotal + ")");
	};

	head_manager.onError = function(url) {
		updateStatus("Error loading head");
	};

	var loader = new THREE.GLTFLoader(head_manager);
	loader.load(
		'models/' + settings.head_model_path,
		function(gltf) {
			updateStatus("Rendering Head");
			gltf.scene.traverse(function(mesh) {
				if (mesh.isMesh) {
					mesh.material.roughness = settings.head.roughness;
					mesh.material.metalness = settings.head.metalness;
					mesh.material.wireframe = settings.head.wireframe;
					mesh.material.color.setStyle(settings.head.default_color);
					mesh.visible = true;

					if (settings.head.opacity < 1) {
						mesh.material.transparent = true;
						mesh.material.opacity = settings.head.opacity;
					}

					// Save the mesh to a global variable so we can modify it later
					head_mesh = mesh;
				}
			});

			// Set position of head with offsets
			gltf.scene.position.set(
				settings.head.offset.x,
				settings.head.offset.y,
				settings.head.offset.z
			);

			// Add the head to the scene
			scene.add(gltf.scene);
		},
		function(xhr) {
			// if (xhr.total !== 0) {
			// 	var pct = (xhr.loaded / xhr.total) * 100;
			// 	updateStatus("Loading model of head " + pct + "%");
			// }
		},
		function(error) {
			console.log(error);
			// updateStatus("Error loading model of head");
		}
	);
}

function reset() {
	console.log("reset();");

	// Change the URL
	history.pushState(null, null, "/");

	// Return origin to center of model
	controls.target.set(0, 0, 0);
	controls.update();

	// Reset the counter
	i = 0;

	// Make all regions opaque again
	scene.traverse(function(mesh) {
		if (mesh.isMesh) {
			mesh.material.transparent = false;
			mesh.material.opacity = 1;

			if (mesh.name == "Head") {
				if (settings.head.opacity < 1) {
					mesh.material.transparent = true;
					mesh.material.opacity = settings.head.opacity;
					mesh.material.color.setStyle(settings.head.default_color);
				}
			}
		}
	});

	// Remove has content class from html
	document
		.querySelector("html")
		.classList.remove("has-region-content", "has-content");
	document.querySelector(".regions-wrapper").classList.remove("is-inactive");
	document.querySelector(".settings-wrapper").classList.remove("is-inactive");

	// Clear the region from the regions filter
	// if (choices !== undefined) {
	// 	choices.removeActiveItems(excludedId);;
	// }

	// Empty the content wrapper
	document.querySelector(".content-wrapper .container").innerHTML = "";

	// Make the world orbit because it looks nice
	if (settings.orbit == true) {
		document.querySelector(".orbit-toggle input").checked = true;
		controls.autoRotate = true;
	}

	// Scroll to top of page
	scrollTop();
}

function updateStatus(status) {
	var message = '<div class="status container">' + status + "...</div>";

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

function scrollTop() {
	setTimeout(function() {
		window.scroll(0, 0);
	}, 50);
}