const Board = require ('./Board.js');

class Game{
  constructor(){
    this.playing = false;
    this.cols = null;
    this.rows = null;
  }

  //Clicking start button
  start(cols, rows){
    //starts playing mode = true, num of cols and num rows
    this.playing = true;
    this.cols = cols;
    this.rows = rows;

    //Create a new empty board
    let board = new Board(this.cols, this.rows);
   
    board.fillBoard();

    //while playing == true creates new boards
    while(this.playing){
      let newBoard = new Board;
      newBoard = board.createNextGen(newBoard);
      board = newBoard;
    }
  }

  //stop game
  stop(){
    this.playing = false;
  }
}
