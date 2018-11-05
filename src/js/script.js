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
    console.log("init();");

    initRegions();
    initSettings();
}

function initRegions() {
    console.log("initRegions();");

    let key;
    for (key in regions_obj) {
        createCard(key, regions_obj[key]);
    }

    // window.addEventListener("popstate", function(event) {
    //     console.log("POPSTATE");
    //     var data = event.state;
    //     reportEvent(event);
    //     reportData(
    //         event.state || {
    //             url: "unknown",
    //             name: "undefined",
    //             location: "undefined"
    //         }
    //     );
    // });
}

function createCard(path, obj) {
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
    var content = '<div class="container">'
        + full_name
        + intro
    + '</div>';

    document.querySelector(".content-wrapper").innerHTML = content;
}

function initSettings() {
    // Orbit Toggle
    var orbit_toggle = document.querySelector(".orbit input");
    orbit_toggle.addEventListener("change", function() {
        if (orbit_toggle.checked) {
            controls.autoRotate = true;
        } else {
            controls.autoRotate = false;
        }
    });
}
