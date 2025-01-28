const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        cell.classList.add("item");
        container.appendChild(cell);
    };
};

makeRows(16, 16);


const elements = document.querySelectorAll(".item");

elements.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.cssText = "background-color: black;";
    });
});