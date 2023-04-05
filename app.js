const log = console.log;
const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");

const startCells = Array(9).fill("");

let go = "circle";
infoDisplay.textContent = "Circle`s start the Game";

function createBoard(initialCells) {
    initialCells.forEach((_cell, index) => {
        const cellElement = document.createElement("div")
        cellElement.classList.add("square");
        cellElement.id = index;

        cellElement.addEventListener("click", addGo);
        gameBoard.append(cellElement);
    })
}

function addGo(event) {
    const goDisplay = document.createElement("div");
    goDisplay.classList.add(go);
    event.target.append(goDisplay);

    go = go === "circle" ? "cross" : "circle";
    event.target.removeEventListener("click", addGo);
    infoDisplay.textContent = `it is now ${go}'s go.`;

    checkScore();

}

function checkScore() {
    const winnerCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const addSquares = document.querySelectorAll(".square");
    // winnerCombos.forEach(array => {
    //     const winner = array.every(cell => addSquares[cell].firstChild?.classList.contains(go));
    //     log("go:", go, "winner:", winner);
    //     if (winner) {
    //         infoDisplay.textContent = `WINNER ${go}!`;
    //         return;
    //     }
    // })
    winnerCombos.forEach(array => {
        const circleWinner = array.every(cell => addSquares[cell].firstChild?.classList.contains("circle"));
        if (circleWinner) {
            infoDisplay.textContent = "Circle Win!"
            addSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
            return null;
        }
    });

    winnerCombos.forEach(array => {
        const circleWinner = array.every(cell => addSquares[cell].firstChild?.classList.contains("cross"));
        if (circleWinner) {
            infoDisplay.textContent = "Cross Win!"
            addSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
            return null;
        }
    });

}


createBoard(startCells);
