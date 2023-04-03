const log = console.log;
const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");

const startCells = Array(9).fill("");
const resultCellsMap = new Map(Object.entries(Array(9).fill("")));

let isCircle = false;

function handlerEvent(figure, cellElement) {
    let element = document.createElement("div");
    element.classList.add(`${figure}`);
    cellElement.append(element);
    resultCellsMap.set(cellElement.num, figure);
    log(resultCellsMap);
    if (new Set([resultCellsMap.get("0"), resultCellsMap.get("1"), resultCellsMap.get("2")]).size === 1) {
        const h1 = document.createElement("h1");
        h1.textContent = "YOU WINNER!";
        document.body.append(h1);
    }
    isCircle = !isCircle;
}

function createBoard(initialCells) {
    initialCells.forEach((cell, index) => {
        const cellElement = document.createElement("div")
        cellElement.classList.add("square");
        cellElement.num = `${index}`;

        cellElement.onclick = () => {
            cellElement.onclick = null;
            isCircle ? handlerEvent("cross", cellElement) : handlerEvent("circle", cellElement);
        }
        gameBoard.append(cellElement);
    });
}

createBoard(startCells);
