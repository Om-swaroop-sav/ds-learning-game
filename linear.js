let arr = [];
let target;
let currentIndex = 0;

function startGame(){

    arr = [];
    currentIndex = 0;

    let size =
        parseInt(document.getElementById("size").value);

    for(let i=0;i<size;i++){
        arr.push(Math.floor(Math.random()*90)+10);
    }

    target =
        arr[Math.floor(Math.random()*arr.length)];

    document.getElementById("target").innerText =
        target;

    document.getElementById("current").innerText = 0;

    document.getElementById("status").innerText =
        "Start searching from index 0.";

    document.getElementById("result").innerText = "";

    document.getElementById("popup")
        .classList.remove("show");

    document.getElementById("targetPointer")
        .style.left = "0px";

    document.getElementById("targetBox")
        .style.background = "#111";

    let indexDiv =
        document.getElementById("indexes");

    let arrayDiv =
        document.getElementById("array");

    indexDiv.innerHTML = "";
    arrayDiv.innerHTML = "";

    for(let i=0;i<arr.length;i++){

        let idx = document.createElement("div");

        idx.className = "index-box";
        idx.innerText = i;

        indexDiv.appendChild(idx);

        let box = document.createElement("div");

        box.className = "game-box";
        box.innerText = arr[i];

        box.onclick = function(){
            check(i, box);
        };

        arrayDiv.appendChild(box);
    }
}

function moveTarget(){

    let position = currentIndex * 75;

    document.getElementById("targetPointer")
        .style.left = position + "px";
}

function check(index, box){

    if(index !== currentIndex){

        document.getElementById("status")
            .innerText =
            "Check index " + currentIndex;

        return;
    }

    if(arr[index] === target){

        box.classList.add("found-box");

        document.getElementById("targetBox")
            .style.background = "green";

        document.getElementById("status")
            .innerText = "Target Found!";

        document.getElementById("result")
            .innerText =
            target + " found at index " +
            index;

        document.getElementById("popupText")
            .innerText =
            target + " found at index " +
            index;

        document.getElementById("popup")
            .classList.add("show");
    }
    else{

        box.classList.add("checked-box");

        currentIndex++;

        document.getElementById("current")
            .innerText = currentIndex;

        moveTarget();

        document.getElementById("status")
            .innerText =
            "Move to next index.";
    }
}



function restartGame(){

    document.getElementById("popup")
        .classList.remove("show");

    startGame();
}

startGame();