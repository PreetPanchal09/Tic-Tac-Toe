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
    let button = document.getElementById("clear");
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
                        button.textContent = "O";
                    } else {
                        cell.textContent = "O";
                        button.textContent = "X";
                    }
                    XO = checkWin(XO);
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

function winner(row, cell) {
    let board = document.getElementById("table");
    let message = document.getElementById("clear");
    if (board.rows[row].cells[cell].textContent === "X") {
        message.textContent = "X has WON!";
    } else {
        message.textContent = "O has WON!";
    }
    clearBoard();
}

function checkWin(moves) {
    let board = document.getElementById("table");
    //Check if board is filled
    if (moves >= 9) {
        clearBoard();
        return 1;
    }
    // Check rows for a win
    for (let i = 0; i < 3; i++) {
        if (board.rows[i].cells[0].textContent === board.rows[i].cells[1].textContent &&
            board.rows[i].cells[1].textContent === board.rows[i].cells[2].textContent &&
            board.rows[i].cells[0].textContent !== "") {
            winner(i, 0);
            return 1;
        }
    }
    // Check columns for a win
    for (let i = 0; i < 3; i++) {
        if (board.rows[0].cells[i].textContent === board.rows[1].cells[i].textContent &&
            board.rows[1].cells[i].textContent === board.rows[2].cells[i].textContent &&
            board.rows[0].cells[i].textContent !== "") {
            winner(0, i);
            return 1;
        }
    }
    // Check diagonals for a win
    if (board.rows[0].cells[0].textContent === board.rows[1].cells[1].textContent &&
        board.rows[1].cells[1].textContent === board.rows[2].cells[2].textContent &&
        board.rows[0].cells[0].textContent !== "") {
        winner(0,0);
        return 1;
    }
    if (board.rows[0].cells[2].textContent === board.rows[1].cells[1].textContent &&
        board.rows[1].cells[1].textContent === board.rows[2].cells[0].textContent &&
        board.rows[0].cells[2].textContent !== "") {
        winner(0,2);
        return 1;
    }
    return moves + 1;
}

ready(setupBoard);