settings = {
	autosave: false,

	// Models
	brain_model_path: "Brain_06/Brain_006.gltf",
	head_model_path: "Head_02/Head_02.gltf",

	// Animations
	orbit: true,
	orbit_speed: 4,

	// Helpers
	grid_size: 10,
	square_grid: false,
	polar_grid: false,
	axes: true,

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

	// Materials
	brain: {
		roughness: .15,
		metalness: .25,
		wireframe: false,
		color: {
			default: "salmon",
			hover: "firebrick",
			active: "darkred",
			focus: "#fdfa00"
		},
		offset: {
			x: -1.8,
			y: -1.5,
			z: 0
		},
		hemispheres: {
			left: {
				visible: true
			},
			right: {
				visible: true
			}
		}
	},
	head: {
		visible: false,
		roughness: 1,
		metalness: 0,
		wireframe: true,
		color: {
			default: "#333"
		},
		offset: {
			x: -1.8,
			y: -1.2,
			z: 0
		}
	}
};
