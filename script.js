let width = 16;
let height = 16;
const container = document.querySelector("#container");

// Establish a set of rows and tiles within the rows, all
// with appropriate numbering and classes
for (let i = 0; i < height; i++) {
    const row = document.createElement("div");
    row.id = i;
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < width; j++) {
        const tile = document.createElement("div");
        tile.id = ((i*16) + j);
        tile.classList.add("tile");
        row.appendChild(tile);

    }
}

// This part could just as easily be within the tile creation
// loop, keeping just the addEventListener portions.
// I have removed it for simplicity and clarity as this is a
// learning exercise
const tiles = document.querySelectorAll(".tile");
tiles.forEach( tile => {
    tile.addEventListener("mouseenter", () => {
        tile.classList.add("highlighted");
    });

    // Uncommet the following to make it only when hovering
    // tile.addEventListener("mouseleave", () => {
    //     tile.classList.remove("highlighted");
    // });
});

