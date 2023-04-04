const log = console.log;
const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");

const startCells = Array(9).fill("");
const resultCellsMap = new Map(Object.entries(Array(9).fill("")));

let isCircle = false;
let isGameOver = false;

function startGame() {
    function createBoard(initialCells) {
        initialCells.forEach((cell, index) => {
            const cellElement = document.createElement("div")
            cellElement.classList.add("square");
            cellElement.num = `${index}`;

            cellElement.onclick = () => {
                log("CLICK");
                log("isCircle:", isCircle);
                log("cellElement.num :", cellElement.num);

                isCircle ? handlerEvent?.("red-circle", cellElement) : handlerEvent?.("blue-circle", cellElement);
                cellElement.onclick = null;
            }
            gameBoard.append(cellElement);
        });
    }

    function createWinnerMessage(typeWinner) {
        const h1 = document.createElement("h1");
        h1.textContent = `${typeWinner.toUpperCase()} YOU WINNER!`;
        document.body.append(h1);
        handlerEvent = null;
    }

    function handlerEvent(figure, cell) {
        let element = document.createElement("div");
        element.classList.add(`${figure}`);
        cell.append(element);
        resultCellsMap.set(cell.num, figure);
        log(resultCellsMap);
        switch (1) {
            case new Set([resultCellsMap.get("0"), resultCellsMap.get("1"), resultCellsMap.get("2")]).size:
                if (resultCellsMap.get("0") !== "") createWinnerMessage(resultCellsMap.get("0"));
                break;
            case new Set([resultCellsMap.get("3"), resultCellsMap.get("4"), resultCellsMap.get("5")]).size:
                if (resultCellsMap.get("3") !== "") createWinnerMessage(resultCellsMap.get("3"));
                break;
            case new Set([resultCellsMap.get("6"), resultCellsMap.get("7"), resultCellsMap.get("8")]).size:
                if (resultCellsMap.get("6") !== "") createWinnerMessage(resultCellsMap.get("6"));
                break;
            case new Set([resultCellsMap.get("0"), resultCellsMap.get("3"), resultCellsMap.get("6")]).size:
                if (resultCellsMap.get("0") !== "") createWinnerMessage(resultCellsMap.get("0"));
                break;
            case new Set([resultCellsMap.get("1"), resultCellsMap.get("4"), resultCellsMap.get("7")]).size:
                if (resultCellsMap.get("1") !== "") createWinnerMessage(resultCellsMap.get("1"));
                break;
            case new Set([resultCellsMap.get("2"), resultCellsMap.get("5"), resultCellsMap.get("8")]).size:
                if (resultCellsMap.get("2") !== "") createWinnerMessage(resultCellsMap.get("2"));
                break;
            case new Set([resultCellsMap.get("0"), resultCellsMap.get("4"), resultCellsMap.get("8")]).size:
                if (resultCellsMap.get("0") !== "") createWinnerMessage(resultCellsMap.get("0"));
                break;
            case new Set([resultCellsMap.get("2"), resultCellsMap.get("4"), resultCellsMap.get("6")]).size:
                if (resultCellsMap.get("2") !== "") createWinnerMessage(resultCellsMap.get("2"));
                break;

        }
        isCircle = !isCircle;
    }

    createBoard(startCells);
}

startGame();
