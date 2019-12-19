const Cell = require ('./Cell.js');

class Board {
    constructor(cols, rows) {
        this.cols = cols;
        this.rows = rows;
        this.board = this.createBoard(this.cols, this.rows);
    }
    //function for creating the customed board (empty)
    createBoard(cols, rows) {
        let board = new Array(cols);
        for (let i = 0; i < board.length; i++) {
          board[i] = new Array(rows);
        }
        return board;
    }

    //Fills board with dead or alive cells
    fillBoard() {
        for(let i = 0; i < this.cols; i++) {
            for(let j = 0; j < this.rows; j++) {
                this.board[i][j] = new Cell(i,j);
            }
        }
    }

    //(creates the next generation board (updated board) calling the update state of every cell
    createNextGen(newBoard) {
        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.rows; j++) {
                newBoard = this.board[i][j].updateCell(newBoard, this.board, i, j, this.cols, this.rows);
            }
        }
        return newBoard;
    }
}

module.exports = Board;