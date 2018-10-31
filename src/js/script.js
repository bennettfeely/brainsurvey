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
        console.log(regions_list[id]);

        createCard(regions_list[id], id);
    }
}

function createCard(region, id) {
    // prettier-ignore
    var card = '<details style="border-color: ' + region.data.color + '" class="box ' + region.data.path + '" data-id="' + id + '">' 
        + '<summary>'
            + '<header class="container">'
                + '<h3>' + region.data.common_name + '</h3>'
                + '<h4>' + region.data.full_name + '</h4>'
            + '</header>'
        + '</summary>'
        + '<div class="container box-content">'
            + '<p>' + region.data.summary + '</p>'
        + '</div>'
    + '</details>';

    document.querySelector(".regions-wrapper .container").innerHTML += card;
}
