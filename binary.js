let arr = [];

let target;

let low = 0;
let high = 0;

let mid = -1;

let steps = 0;
let comparisons = 0;

function generateArray() {

    arr = [];

    let size =
        parseInt(
            document.getElementById("size").value
        );

    let number = Math.floor(Math.random() * 10) + 5;

    for (let i = 0; i < size; i++) {

        number += Math.floor(Math.random() * 15) + 5;

        arr.push(number);
    }

    target =
        arr[
            Math.floor(
                Math.random() * arr.length
            )
        ];

    low = 0;
    high = arr.length - 1;

    document.getElementById("target")
        .innerText = target;

    document.getElementById("low").value = low;

    document.getElementById("high").value = high;

    document.getElementById("range")
        .innerText = low + " - " + high;
}

function loadArray() {

    let indexes = "";
    let values = "";

    for (let i = 0; i < arr.length; i++) {

        indexes += `
            <div>${i}</div>
        `;

        values += `
            <div class="cell"
                 id="cell${i}">
                ${arr[i]}
            </div>
        `;
    }

    document.getElementById("indexes")
        .innerHTML = indexes;

    document.getElementById("array")
        .innerHTML = values;
}

function calculateMid() {

    low =
        parseInt(
            document.getElementById("low").value
        );

    high =
        parseInt(
            document.getElementById("high").value
        );

    if (low > high) {

        document.getElementById("status")
            .innerText = "Invalid Range";

        return;
    }

    mid =
        Math.floor((low + high) / 2);

    document.getElementById("lowDisplay")
        .innerText = low;

    document.getElementById("highDisplay")
        .innerText = high;

    document.getElementById("midDisplay")
        .innerText = mid;

    document.getElementById("midIndex")
        .innerText = mid;

    document.getElementById("midValue")
        .innerText = arr[mid];

    document.querySelectorAll(".cell")
        .forEach(cell => {
            cell.classList.remove("mid");
        });

    document.getElementById("cell" + mid)
        .classList.add("mid");

    steps++;
    comparisons++;

    document.getElementById("steps")
        .innerText = steps;

    document.getElementById("comparisons")
        .innerText = comparisons;

    document.getElementById("status")
        .innerText =
        "Compare " +
        arr[mid] +
        " with " +
        target;
}

function goLeft() {

    if (mid === -1)
        return;

    if (arr[mid] <= target) {

        document.getElementById("status")
            .innerText =
            "Wrong Direction!";

        return;
    }

    for (let i = mid; i < arr.length; i++) {

        document.getElementById("cell" + i)
            .classList.add("removed");
    }

    high = mid - 1;

    document.getElementById("high")
        .value = high;

    document.getElementById("range")
        .innerText =
        low + " - " + high;

    document.getElementById("status")
        .innerText =
        "Searching Left Half";
}

function goRight() {

    if (mid === -1)
        return;

    if (arr[mid] >= target) {

        document.getElementById("status")
            .innerText =
            "Wrong Direction!";

        return;
    }

    for (let i = 0; i <= mid; i++) {

        document.getElementById("cell" + i)
            .classList.add("removed");
    }

    low = mid + 1;

    document.getElementById("low")
        .value = low;

    document.getElementById("range")
        .innerText =
        low + " - " + high;

    document.getElementById("status")
        .innerText =
        "Searching Right Half";
}

function found() {

    if (mid === -1)
        return;

    if (arr[mid] === target) {

        document.getElementById("cell" + mid)
            .style.background = "#2e7d32";

        document.getElementById("popupText")
            .innerHTML =
            "Target : " + target +
            "<br><br>" +
            "Index : " + mid +
            "<br><br>" +
            "Steps : " + steps;

        document.getElementById("popup")
            .classList.add("show");

    } else {

        document.getElementById("status")
            .innerText =
            "Target not found at Mid.";
    }
}

function newGame() {

    steps = 0;
    comparisons = 0;

    low = 0;
    high = 0;
    mid = -1;

    document.getElementById("popup")
        .classList.remove("show");

    document.getElementById("steps")
        .innerText = 0;

    document.getElementById("comparisons")
        .innerText = 0;

    document.getElementById("status")
        .innerText =
        "Calculate Mid";

    document.getElementById("midIndex")
        .innerText = "-";

    document.getElementById("midValue")
        .innerText = "-";

    document.getElementById("midDisplay")
        .innerText = "?";

    generateArray();

    loadArray();
}

generateArray();

loadArray();