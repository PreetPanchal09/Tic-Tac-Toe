function ready(fn) {
    if (document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

function setupBoard() {
    let XO = 1;
    let board = document.getElementById("table");

    for (let i = 0; i < 3; i++) {
        let row = board.rows[i];
        for (let j = 0; j < 3; j++) {
            let cell = document.createElement("th");
            cell.textContent = "";
            cell.classList.add("cell");
            cell.addEventListener("click", function() {
                if (cell.textContent == "") {
                    if (XO % 2 == 1) {
                        cell.textContent = "X";
                    } else {
                        cell.textContent = "O";
                    }
                    XO++;
                    checkWin();
                    }
                });
            row.appendChild(cell);

        }
    }

    let clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", clearBoard);
}

function clearBoard() {
    let board = document.getElementById("table");
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let cell = board.rows[i].cells[j];
            cell.textContent = "";
        }
    }
}

function checkWin() {
    let board = document.getElementById("table");
    // Check rows for a win
    for (let i = 0; i < 3; i++) {
        if (board.rows[i].cells[0].textContent === board.rows[i].cells[1].textContent &&
            board.rows[i].cells[1].textContent === board.rows[i].cells[2].textContent &&
            board.rows[i].cells[0].textContent !== "") {
            clearBoard();
            return;
        }
    }
    // Check columns for a win
    for (let i = 0; i < 3; i++) {
        if (board.rows[0].cells[i].textContent === board.rows[1].cells[i].textContent &&
            board.rows[1].cells[i].textContent === board.rows[2].cells[i].textContent &&
            board.rows[0].cells[i].textContent !== "") {
            clearBoard();
            return;
        }
    }
    // Check diagonals for a win
    if (board.rows[0].cells[0].textContent === board.rows[1].cells[1].textContent &&
        board.rows[1].cells[1].textContent === board.rows[2].cells[2].textContent &&
        board.rows[0].cells[0].textContent !== "") {
        clearBoard();
        return;
    }
    if (board.rows[0].cells[2].textContent === board.rows[1].cells[1].textContent &&
        board.rows[1].cells[1].textContent === board.rows[2].cells[0].textContent &&
        board.rows[0].cells[2].textContent !== "") {
        clearBoard();
        return;
    }
}

ready(setupBoard);