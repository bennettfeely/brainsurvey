regions_obj = {
    lifg: {
        full_name: "Left Inferior Frontal Gyrus",
        common_name: "Broca's Area",
        color: "dodgerblue",
        intro:
            "Broca’s area is typically located in the left inferior frontal gyrus, and supports language production, especially the production of whole sentences. When working with patients in the lead up to a surgery in the area of this brain region, we pay particular attention to mapping language and motor abilities using functional MRI.",
        summary: undefined
    },
    lipl: {
        full_name: "Left Inferior Parietal Lobule",
        common_name: undefined,
        color: "tomato",
        intro:
            "The left inferior parietal lobe supports many critical functions related to language, memory, attention and skilled use of the hands. Patients with tumors in this brain region undergo functional MRI mapping to identify motor and language areas of the brain.",
        summary: undefined
    },
    litg: {
        full_name: "Left Inferior Temporal Gyrus",
        common_name: undefined,
        color: "gold",
        intro: undefined,
        summary: undefined
    },
    lmsfg: {
        full_name: "Left Middle Superior Frontal Gyrus",
        common_name: undefined,
        color: "forestgreen",
        intro:
            "The middle and superior frontal gyri in the left hemisphere can support important language and motor function. Functional MRI can be used prior to surgery to assist in determining whether those structures represent language.",
        summary: undefined
    },
    lstg: {
        full_name: "Left Superior Temporal Gyrus",
        common_name: undefined,
        color: "sienna",
        intro: undefined,
        summary: undefined
    },
    rpcg: {
        full_name: "Right Pre-Central Gyrus",
        common_name: "Motor Cortex",
        color: "crimson",
        intro:
            "Primary motor cortex controls movements of the opposite side of the body. Tumors in motor cortex present special challenges. Our mapping program uses high resolution functional mapping and intraoperative stimulation to confirm the location of motor cortex and to preserve those critical functions during tumor removal.",
        summary: undefined
    },
    rstg: {
        full_name: "Right Superior Temporal Gyrus",
        common_name: undefined,
        color: "darkorchid",
        intro: undefined,
        summary: undefined
    }
};

init();

function init() {
    // Load any settings in localstorage
    load();

    initRegions();
    initSettings();
}

function initRegions() {
    console.log("initRegions();");

    let key;
    for (key in regions_obj) {
        createRegionLinks(key, regions_obj[key]);
    }
}

function createRegionLinks(path, obj) {
    if (obj.full_name !== undefined) {
        var full_name = "<h3>" + obj.full_name + "</h3>";
    } else {
        var full_name = "";
    }

    if (obj.common_name !== undefined) {
        var common_name = "<h4>" + obj.common_name + "</h4>";
    } else {
        var common_name = "";
    }

    // prettier-ignore
    var card = document.createElement("a");
    card.id = path;
    card.href = path;
    card.className = "box box-link region-link container";
    card.style = "--color: " + obj.color;
    card.innerHTML += full_name + common_name;

    document.querySelector(".regions-wrapper .box-wrapper").appendChild(card);

    // Attach click event listener
    card.addEventListener(
        "click",
        function(e) {
            e.preventDefault();

            switchRegion(e.currentTarget.id);
        },
        false
    );
}

function switchRegion(region_id) {
    var target_obj = regions_obj[region_id];

    // Change the URL
    history.pushState(null, null, "/" + region_id);

    // Change page class
    document.querySelector("html").classList.add("has-content");

    // Rerender the page
    renderer.render(scene, camera);

    // Scroll to top of page
    window.scroll(0, 0);

    // Change class of selected region box-link
    // e.currentTarget.classList.add("is-selected");

    // Set content of content wrapper
    var full_name = "<h2>" + target_obj.full_name + "</h2>";

    if (target_obj.intro !== undefined) {
        var intro = "<p>" + target_obj.intro + "</p>";
    } else {
        var intro =
            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";
    }

    // prettier-ignore
    var content = '<button class="back-button">&larr; Back</button>'
        + '<div class="container">' 
            + full_name 
            + intro 
        + "</div>";

    document.querySelector(".content-wrapper").innerHTML = content;

    document.querySelector(".back-button").addEventListener("click", function() {
        resetRegion();
    });
}

function initSettings() {
    // Orbit Toggle
    console.log(settings.orbit);

    var orbit_toggle = document.querySelector(".orbit input");
    orbit_toggle.checked = settings.orbit;
    orbit_toggle.addEventListener("change", function() {
        if (orbit_toggle.checked) {
            settings.orbit = true;
            controls.autoRotate = true;
        } else {
            settings.orbit = false;
            controls.autoRotate = false;
        }

        save();
    });

    // Square Grid Toggle
    var square_grid_toggle = document.querySelector(".square-grid input");
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

        save();
    });

    // Polar Grid Toggle
    var polar_grid_toggle = document.querySelector(".polar-grid input");
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

        save();
    });

    // Axes Toggle
    var axes_toggle = document.querySelector(".axes input");
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

        save();
    });
}

function load() {
    console.log("load();");

    // Load localstorage
    if (localStorage.getItem("hbrmap")) {
        console.log("WE GOT IT!");
        settings = JSON.parse(localStorage.getItem("hbrmap"));

        console.log(settings);
    }
}

function save() {
    console.log("save();");

    // Save to localstorage
    localStorage.setItem("hbrmap", JSON.stringify(settings));
}

function resetRegion() {
    console.log("resetRegion();");

    // Re-render the brain
    renderer.render(scene, camera);

    // Scroll to top of page
    window.scroll(0, 0);

    // Remove has content class from html
    document.querySelector("html").classList.remove("has-content");

    // Empty the content wrapper
    document.querySelector(".content-wrapper").innerHTML = "";
}
