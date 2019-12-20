class Cell {
    //Initialize cell with its position and a state (0 = dead or 1= alive)
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.state = Math.floor(Math.random() * 2);
    }

    getState() {
        return this.state;
    }

    countAlivedNeighbors(board, x, y, cols, rows) {
        let total = 0;
        //It goes through the only 8 neighbors that the cell has (see it as a 3x3 matrix)
        for(let i = -1; i < 2; i++) {
            for(let j = -1; j < 2; j++) {
            //We deal with the edges here (see it as a cylinder)
            let col = (x + i + cols) % cols;
            let row = (y + j + rows) % rows;
            //sums the state of that position (0 or 1)
            total += board[col][row]; 
            }
        }
        total -= board[x][y];
        return total;
    }

    //Updates the state of the cell following the game's rules 
    updateCell(nextGenBoard, oldGenBoard, x, y, cols, rows) {
        let totalNeighbors = countAlivedNeighbors(oldGenBoard, x, y, cols, rows);
        
        //is born
        if (this.state == 0 && totalNeighbors == 3) {
          nextGenBoard[i][j] = 1;
        } else if (this.state == 1 && (totalNeighbors < 2 || totalNeighbors > 3)) {
            //dies
          nextGenBoard[i][j] = 0;
        } else {
            //same state
          nextGenBoard[i][j] = this.state;
        }
        return nextGenBoard;
    }
}

module.exports = Cell;