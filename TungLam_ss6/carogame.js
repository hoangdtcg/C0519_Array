let b = document.getElementById("carogame");
let board = [];
let data = '';
for (let i = 0; i < 9; i++) {
    board[i] = new Array(".", ".", ".", ".", ".", ".", ".", ".", ".");
}
for (let i = 0; i < 9; i++) {
    data += "<br/>";
    for (let j = 0; j < 9; j++) {
        data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp";
    }
}
b.innerHTML = data;

function lam1() {
    let positionX = prompt("x: ");
    let positionY = prompt("y: ");
    data = "";
    board[positionX][positionY] = "X";
    for (let i = 0; i < 9; i++) {
        data += "<br/>";
        for (let j = 0; j < 9; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === "X" && board[i + 1][j] === "X" && board[i + 2][j] === "X") {
                alert("lam1 win");
            } else if (board[i][j] === "X" && board[i][j + 1] === "X" && board[i][j + 2] === "X") {
                alert("lam1 win");
            } else if (board[i][j] === "X" && board[i + 1][j + 1] === "X" && board[i + 2][j + 2] === "X") {
                alert("lam1 wwin")
            }
        }
    }

    b.innerHTML = "<hr/>" + data;

}

function lam() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    board[positionX][positionY] = "O";
    for (let i = 0; i < 9; i++) {
        data += "<br/>";
        for (let j = 0; j < 9; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === "O" && board[i + 1][j] === "O" && board[i + 2][j] === "O") {
                alert("lam win");
            } else if (board[i][j] === "O" && board[i][j + 1] === "O" && board[i][j + 2] === "O") {
                alert("lam win");
            } else if (board[i][j] === "O" && board[i + 1][j + 1] === "O" && board[i + 2][j + 2] === "O") {
                alert("lam wwin")
            }
        }
    }

    b.innerHTML = "<hr/>" + data;
}
