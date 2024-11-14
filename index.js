let XO = 1;

function setupBoard() {
    
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
                        cell.textContent = "X"
                    } else {
                        cell.textContent = "O"
                    }
                    XO++
                    }
                });
            row.appendChild(cell);
        }
    }
}

function ready(fn) {
    if (document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

ready(setupBoard);