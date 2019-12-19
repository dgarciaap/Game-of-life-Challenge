class Game {
    //function for creating the customed board
    createBoard(cols, rows) {
        let board = new Array(cols);
        for (let i = 0; i < board.length; i++) {
          board[i] = new Array(rows);
        }
        return board;
    }
}

let juego = new Game();

console.log(juego.createBoard(5,5));