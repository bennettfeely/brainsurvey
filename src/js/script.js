regions_list = [
    {
        acronym: "lifg",
        data: {
            common_name: "Broca's Area",
            full_name: "Left Middle and Superior Frontal Gyrus",
            path: "left-middle-and-superior-frontal-gyrus",
            color: "tomato",
            summary:
                "<strong>Broca’s area</strong> is typically located in the left inferior frontal gyrus, and supports language production, especially the production of whole sentences. When working with patients in the lead up to a surgery in the area of this brain region, we pay particular attention to mapping language and motor abilities using functional MRI."
        }
    },
    {
        acronym: "rpcg",
        data: {
            common_name: "Motor Cortex",
            full_name: "Right Pre-Central Gyrus",
            path: "right-pre-central-gyrus",
            color: "gold",
            summary:
                "The <strong>primary motor cortex</strong> controls movements of the opposite side of the body. Tumors in motor cortex present special challenges. Our mapping program uses high resolution functional mapping and intraoperative stimulation to confirm the location of motor cortex and to preserve those critical functions during tumor removal."
        }
    },
    {
        acronym: "lipl",
        data: {
            common_name: undefined,
            full_name: "Left Inferior Parietal Lobule",
            path: "left-inferior-parietal-lobule",
            color: "dodgerblue",
            summary:
                "The <strong>Left Inferior Parietal Lobe</strong> supports many critical functions related to language, memory, attention and skilled use of the hands. Patients with tumors in this brain region undergo functional MRI mapping to identify motor and language areas of the brain."
        }
    }
];

init();

function init() {
    console.log("init();");

    initRegions();
}

function initRegions() {
    console.log("initRegions();");

    var id;
    for (id = 0; id < regions_list.length; ++id) {
        createCard(regions_list[id], id);
    }

    // Fetch all the details element.
    var details = Array.from(document.querySelectorAll("details"));

    // Add the onclick listeners.
    var clicked;
    for (clicked = 0; clicked < details.length; ++clicked) {
        details[clicked].addEventListener("click", function() {
            // Close all the details that are not targetDetail.
            var others;
            for (others = 0; others < details.length; ++others) {
                if (details[others] !== details[clicked]) {
                    details[others].removeAttribute("open");
                } else {
                    // if (details[clicked].hasAttribute("open") {
                    //     details[clicked].removeAttribute("open");
                    // }
                }
            }
        });
    }
}

function createCard(region, id) {
    if (region.data.common_name !== undefined) {
        // prettier-ignore
        var hgroup = '<h3>' + region.data.full_name + '</h3>'
                + '<h4>' + region.data.common_name + '</h4>';
    } else {
        var hgroup = "<h3>" + region.data.full_name + "</h3>";
    }

    // prettier-ignore
    var card = '<details style="--region-color: ' + region.data.color + '" class="box ' + region.data.path + '" data-id="' + id + '">'
        + '<summary>'
            + '<header class="container">' + hgroup + '</header>'
        + '</summary>'
        + '<div class="container box-content">'
            + '<p>' + region.data.summary + '</p>'
        + '</div>'
    + '</details>';

    document.querySelector(".regions-wrapper .container").innerHTML += card;
}
