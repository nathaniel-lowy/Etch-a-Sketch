let size = 16;
const container = document.querySelector("#container");
const btn = document.querySelector("button");

// Instead of a do-while, this method allows for giving feedback in the event of an invalid choice
btn.addEventListener("click", () => {
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


function tearDown() {
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => {
        container.removeChild(row);
    });
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
            // console.log(e.target.style.backgroundColor);
            adjustBackground(e);
            // e.target.style.backgroundColor = "black";
            //             console.log(e.target.style.backgroundColor);

            
        });

        // Uncomment the following to make it only when hovering
        // tile.addEventListener("mouseleave", () => {
        //     tile.classList.remove("highlighted");
        // });
    });
}

function adjustBackground(e) {
    let firstColor = e.target.style.backgroundColor;
    console.log(firstColor);

    let colorsString = firstColor.slice(4, firstColor.length - 1);
    let colorArray = colorsString.split(', ');

    let red = Number(colorArray[0]);
    // 1/10 from current
    // oneTenthRed = (255 - red) / 10;

    oneTenth = (255 / 10);

    console.log(colorArray);
    console.log(typeof colorArray[0]);
    console.log(colorArray[0]);

    const newColorArray = colorArray.map(value => value - 25.5);

    console.log(newColorArray);

    const newColor = "rgb(" + newColorArray.join(', ') + ")";

    console.log(newColor);

    e.target.style.backgroundColor = newColor;
}

setUp();