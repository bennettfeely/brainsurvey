regions_obj = {
    lifg: {
        full_name: "Left Inferior Frontal Gyrus",
        common_name: "Broca's Area",
        color: "dodgerblue",
        summary:
            "Broca’s area is typically located in the left inferior frontal gyrus, and supports language production, especially the production of whole sentences. When working with patients in the lead up to a surgery in the area of this brain region, we pay particular attention to mapping language and motor abilities using functional MRI."
    },
    lipl: {
        full_name: "Left Inferior Parietal Lobule",
        common_name: undefined,
        color: "tomato",
        summary:
            "The left inferior parietal lobe supports many critical functions related to language, memory, attention and skilled use of the hands. Patients with tumors in this brain region undergo functional MRI mapping to identify motor and language areas of the brain."
    },
    litg: {
        full_name: "Left Inferior Temporal Gyrus",
        common_name: undefined,
        color: "gold",
        summary: undefined
    },
    lmsfg: {
        full_name: "Left Middle Superior Frontal Gyrus",
        common_name: undefined,
        color: "forestgreen",
        summary:
            "The middle and superior frontal gyri in the left hemisphere can support important language and motor function. Functional MRI can be used prior to surgery to assist in determining whether those structures represent language."
    },
    lstg: {
        full_name: "Left Superior Temporal Gyrus",
        common_name: undefined,
        color: "sienna",
        summary: undefined
    },
    rpcg: {
        full_name: "Right Pre-Central Gyrus",
        common_name: "Motor Cortex",
        color: "crimson",
        summary:
            "Primary motor cortex controls movements of the opposite side of the body. Tumors in motor cortex present special challenges. Our mapping program uses high resolution functional mapping and intraoperative stimulation to confirm the location of motor cortex and to preserve those critical functions during tumor removal."
    },
    rstg: {
        full_name: "Right Superior Temporal Gyrus",
        common_name: undefined,
        color: "darkorchid",
        summary: undefined
    }
};

init();

function init() {
    console.log("init();");

    initRegions();
}

function initRegions() {
    console.log("initRegions();");

    let key;
    for (key in regions_obj) {
        createCard(key, regions_obj[key]);
    }
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
    var card = '<a href="/' + path + '" style="--region-color: ' + obj.color + '" class="box box-link region-' + path + '">'
            + '<div class="container">'
                + full_name
                + common_name
            + '</div>'
        + '</a>';

    document.querySelector(".regions-wrapper .box-wrapper").innerHTML += card;
}
