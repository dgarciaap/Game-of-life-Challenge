const Cell = require ('./Cell.js');

class Game {
    //function for creating the customed board
    createBoard(cols, rows) {
        let board = new Array(cols);
        for (let i = 0; i < board.length; i++) {
          board[i] = new Array(rows);
        }
        return board;
    }

    //Fills board with dead or alive cells
    fillBoard(board) {
        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board.length; j++) {
                board[i][j] = new Cell(i,j);
            }
        }
        return board;
    }
}

let juego = new Game();
let tabla = juego.createBoard(5,5);
console.log(juego.fillBoard(tabla));
// console.log(juego.createBoard(5,5));