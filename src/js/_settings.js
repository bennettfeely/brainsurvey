settings = {
	autosave: false,

	// Animations
	orbit: false,
	orbit_speed: 3,

	// Helpers
	axes: true,
	stats: true,

	// Interactions
	pan: false,
	zoom: {
		enabled: true,
		min: 15,
		max: 30
	},

	// Slicing and dicing
	slice: {
		visible: false,
		axis: "y",
		position: 0,
		size: 0.25,
		dimensions: {
			x: 7,
			y: 12,
			z: 7
		}
	},

	brain: {
		cloud: {
			path: "LR_HighRes_v4"
		}
	},

	head: {
		mesh: {
			visible: true,
			path: "Head_02/Head_02.gltf",
			roughness: 1,
			metalness: 0,
			wireframe: true,
			color: {
				default: "#555"
			}
		},
		cloud: {
			visible: false,
			path: "Head_v3"
		}
	}
};
