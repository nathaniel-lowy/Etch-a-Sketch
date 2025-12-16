let size = 16;
let blackAndWhite = true;
const container = document.querySelector("#container");
const btnSize = document.querySelector("#size");
const btnColor = document.querySelector("#color");

// Instead of a do-while, this method allows for giving feedback in the event of an invalid choice
btnSize.addEventListener("click", () => {
    let newSize = Number(prompt("Enter the new number of tiles per side:", size));
    while (newSize > 100 || !newSize) {
        newSize = Number(prompt(
            "The size must be less than 100. Please enter the new number of tiles per side:",
            size
        ));
    }
    size = newSize;
    tearDown();
    setUp();
});

btnColor.addEventListener("click", ()=> {
    blackAndWhite = !blackAndWhite;
    tearDown();
    setUp();
})


function tearDown() {
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => {
        container.removeChild(row);
    });
}

// Assign each value to be from 200-239 so that color is not too light or dark
function randomColor() {
    const r = Math.random() * 40 + 200;
    const g = Math.random() * 40 + 200;
    const b = Math.random() * 40 + 200;

    return "rgb(" + r + ", " + g + ", " + b + ")";
}


function setUp() {
    // Establish a set of rows and tiles within the rows, all
    // with appropriate numbering and classes
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.id = i;
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            const tile = document.createElement("div");
            tile.id = ((i * 16) + j);
            tile.classList.add("tile");
            tile.style.backgroundColor = "rgb(255,255,255)";
            row.appendChild(tile);
        }
    }

    // This part could just as easily be within the tile creation
    // loop, keeping just the addEventListener portions.
    // I have removed it for simplicity and clarity as this is a
    // learning exercise
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => {
        tile.addEventListener("mouseenter", (e) => {
            // tile.classList.add("highlighted");
            adjustBackground(e);
        });
    });
}

function adjustBackground(e) {
    let firstColor = e.target.style.backgroundColor;
    // If the color is white, create an initial value for it
    if (firstColor === "rgb(255, 255, 255)" && !blackAndWhite) {
        e.target.style.backgroundColor = randomColor();
        return;
    }
    decreaseAmount = (255 / 10);
    const colorArray = firstColor.slice(4, firstColor.length - 1).split(', ');
    const newColorArray = colorArray.map(value => value - decreaseAmount);
    const newColorString = "rgb(" + newColorArray.join(', ') + ")";
    e.target.style.backgroundColor = newColorString;
}

setUp();