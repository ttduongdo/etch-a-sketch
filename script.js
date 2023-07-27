const container = document.querySelector(".container");

function createGrid(x) {
    for (var numCell = 0; numCell < (x*x); numCell++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.style.width = `${900/ x}px`;
        cell.style.height = `${900 / x}px`;
        container.appendChild(cell); 
        console.log("done");
    }
}

function hover(){
    const cells = Array.from(document.querySelectorAll(".cell"));
    cells.forEach(cell => cell.addEventListener("mouseover", () => {
    cell.classList.add("hovered");
    }))
}

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

 
const button = document.querySelector("button");
button.addEventListener("click", () => {
    let y = prompt("How many boxes per side?");
    y = parseInt(y);
    if (Number.isInteger(y) && y > 0) {
        removeGrid();
        createGrid(y);
        hover();
    } else {
    alert("Please enter a valid positive integer.");
    }
});
