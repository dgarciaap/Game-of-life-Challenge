//Declaring global variables that we'll need
let board;
let cols;
let rows;
let started = false;
let resolution = 10;
  
//function for creating the customed board (empty)
function createBoard(cols, rows) {
    let board = new Array(cols);
    for (let i = 0; i < board.length; i++) {
        board[i] = new Array(rows);
    }
    return board;
}

//config of our canvas
function setup() {
    //We get the dimensions from the user's input
    xAxis = document.getElementById('x-axis').value;
    yAxis = document.getElementById('y-axis').value;
    
    createCanvas(xAxis, yAxis);
    //size of the cells
    cols = xAxis / resolution;
    rows = yAxis / resolution;
    
    //creating and filling board
    board = createBoard(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            board[i][j] = floor(random(2));
        }
    }
    noLoop();
}

//Drawing the board
function draw() {
    if(started){
        //background color
        background(98);
        
        //Goes through cells and fills with white coolor alived cells
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                let x = i * resolution;
                let y = j * resolution;

                if(board[i][j] == 1) {
                    fill(255);
                    rect(x, y, resolution - 1, resolution - 1);
                }
            }
        }
      
        let nextGenBoard = createBoard(cols, rows);
      
        //Updates board
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            let state = board[i][j];
            let amountOfNeighbors = countAlivedNeighbors(board, i, j);
            
            //is born
            if (state == 0 && amountOfNeighbors == 3) {
                nextGenBoard[i][j] = 1;
            } else if (state == 1 && (amountOfNeighbors < 2 || amountOfNeighbors > 3)) {
                //dies
                nextGenBoard[i][j] = 0;
            } else {
                //same state
                nextGenBoard[i][j] = state;
            }
        }
    }
        //actual board becomes nextGenBoard so we can create a new generation
        board = nextGenBoard;
    }
    
  }

  //stop game
  function stop(){
      noLoop();
  }

  //Resizes rectangle when input changes
  function start(){
    xAxis = document.getElementById('x-axis').value;
    yAxis = document.getElementById('y-axis').value;
    resizeCanvas(xAxis, yAxis);
      started = true;
      loop();
  }
  
  function countAlivedNeighbors(board, x, y) {
    let total = 0;
    //It goes through the only 8 neighbors that the cell has (see it as a 3x3 matrix)
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
            //We deal with the edges here (see it as a cylinder)
            let col = (x + i + cols) % cols;
            let row = (y + j + rows) % rows;
            //sums the state of that position (0 or 1)
            total += board[col][row]; 
        }
    }
    //Substract current cell
    total -= board[x][y];
    return total;
  }