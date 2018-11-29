settings = {
	autosave: false,

	// Models
	brain_model_path: "models/Brain_05/Brain_005.gltf",
	head_model_path: "models/Head_01/Head_01.gltf",

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
		visible: true,
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
};
