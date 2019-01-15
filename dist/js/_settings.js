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
