function makeGrids(size) {
    const container = document.querySelector("#container");

    container.textContent = '';

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < size; j++) {
            const column = document.createElement("div");
            column.classList.add("column");
            column.addEventListener("mouseover", () => {
                column.style.backgroundColor = getRandomColor();
            });
            row.appendChild(column);
        }
        container.appendChild(row);
    }
};

function makeSlider() {
    const slider = document.querySelector("#slider");
    const gridInput = document.querySelector('#gridInput');
 
    function updateGrid(size) {
        size = Math.max(1, Math.min(100, size));
        slider.value = size;
        gridInput.value = size;
        makeGrids(size);
    }

    slider.addEventListener("input", () => {
        updateGrid(parseInt(slider.value, 10));
        console.log("slider work");
    });


    gridInput.addEventListener("keypress", function (e) {
        if (e.key == "Enter") updateGrid(parseInt(gridInput.value, 10));
    });

    gridInput.addEventListener("change", function () {
        updateGrid(parseInt(gridInput.value, 10));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('#slider');
    const size = parseInt(slider.value, 10);
    makeGrids(size);
    makeSlider();
})

function getRandomColor() {
    let characters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 16);
        color = color.concat(characters.charAt(index));
    }
    return color;
}

const reset = document.querySelector("#btn");

reset.addEventListener("click", () => {
    const items = document.querySelectorAll(".column");

    items.forEach((div) => {
        div.style.backgroundColor = "";
    });
});