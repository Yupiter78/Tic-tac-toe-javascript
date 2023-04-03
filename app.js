const log = console.log;
const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");

const startCells = Array(9).fill("");

let isCircle = false;

function handlerEvent(event, cellElement) {
    let element = document.createElement("div");
    element.classList.add(`${event}`);
    cellElement.append(element);
    isCircle = !isCircle;
}

function createBoard(initialCells) {
    initialCells.forEach((cell, index) => {
        const cellElement = document.createElement("div")
        cellElement.classList.add("square");

        cellElement.onclick = () => {
            log("cellElement.firstChild:", cellElement.firstChild);

            if (cellElement.firstChild) return;
            isCircle ? handlerEvent("cross", cellElement) : handlerEvent("circle", cellElement)
        }
        gameBoard.append(cellElement);
    });
}

createBoard(startCells);
