//GRID INITIALIATION
const container = document.getElementById("container");


let rows = 16;
let cols = 16;

function createGrid (rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cells = document.createElement("div");
        container.appendChild(cells).className = "gridCell";
    }
}

createGrid(rows, cols);

//STYLING THE GRID WITH BORDERS
let gridCell = document.querySelectorAll(".gridCell");

function addStyle(gridCell) {
    for(let i = 0; i < gridCell.length; i++) {
        gridCell[i].style.border = "1px solid black";
    }
}

addStyle(gridCell);

//EVENT LISTENER MOUSE-OVER INITIALIZATION
function addEvent(gridCell) {
    for(let i = 0; i < gridCell.length; i++) {
        gridCell[i].addEventListener("mouseenter", colourCell);
    }
}

addEvent(gridCell);

const colourSelector = document.getElementById("colours");

//COLOURS THE GRID SQUARES BASED ON THE SELECTED COLOUR
function colourCell(event) {
    if (colourSelector.selectedIndex === 0) {
        event.target.style.backgroundColor = "Black";
    } else if (colourSelector.selectedIndex === 1) {
        event.target.style.backgroundColor = "Blue";
    } else if (colourSelector.selectedIndex === 2) {
        event.target.style.backgroundColor = "Red";
    } else if (colourSelector.selectedIndex === 3) {
        event.target.style.backgroundColor = "Green";
    } else if (colourSelector.selectedIndex === 4) {
        event.target.style.backgroundColor = "Yellow";
    } else if (colourSelector.selectedIndex === 5) {
        event.target.style.backgroundColor = "Pink";
    } else if (colourSelector.selectedIndex === 6) {
        event.target.style.backgroundColor = "Orange";
    } else if (colourSelector.selectedIndex === 7) {
        let randomColour = Math.floor(Math.random()*16777215).toString(16);
        event.target.style.backgroundColor = "#" + randomColour;
    } else if (colourSelector.selectedIndex === 8) {
        for (let i = 255; i > 0; i -= 25) {
            event.target.style.backgroundColor = `rbg(${i}, ${i}, ${i})`;
        }
    }
    
}

//TURN OFF GRID LINES CHECKBOX
const gridCheck = document.querySelector("input[name=gridLines]");

gridCheck.addEventListener("change", removeGridLines);

function removeGridLines (event) {
    if (gridCheck.checked) {
        for(let i = 0; i < gridCell.length; i++) {
            gridCell[i].style.setProperty("border", "");
        }
    } else {
        for (let j = 0; j < gridCell.length; j++) {
            gridCell[j].style.setProperty("border", "1px solid black");
        }
    }
}

//SPECIFY NEW GRID SIZE INPUT
const submitBtn = document.querySelector("#submit");
const gridSizeValue = document.getElementById("gridSizeSelect");

submitBtn.addEventListener("click", resizeGrid);

function resizeGrid(event) {
    if (gridSizeValue.value < 6 || gridSizeValue.value > 100) {
        alert("Please enter a value between 6 and 100.");
        gridSizeValue.value = "";
    } else if (isNaN(gridSizeValue.value)) {
        alert("please enter a numeric value between 6 and 100.");
        gridSizeValue.value = "";
    } else {
        container.innerHTML = "";
        let rows = gridSizeValue.value;
        let cols = gridSizeValue.value;
        gridSizeValue.value = "";
        createGrid (rows, cols);
        gridCell = document.querySelectorAll(".gridCell");
        addEvent(gridCell);
        addStyle(gridCell);
    }
}


//RESET BUTTON
const resetBtn = document.querySelector("#reset")

resetBtn.addEventListener("click", resetGrid);

function resetGrid(event) {
    for (let i = 0; i < gridCell.length; i++) {
        gridCell[i].style.backgroundColor = "";
    }
}