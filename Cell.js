class Cell {
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
                if( i != 0 && j != 0) {
                    let col = (x + i + cols) % cols;
                    let row = (y + j + rows) % rows;
                    total += board[col][row].getState(); 
                }
            }
        }
        return total;
    }

    updateCell(nextGenBoard, oldGenBoard, x, y, cols, rows) {
        let totalNeighbors = countAlivedNeighbors(oldGenBoard, x, y, cols, rows);
  
        if (this.state == 0 && totalNeighbors == 3) {
          nextGenBoard[i][j] = 1;
        } else if (this.state == 1 && (totalNeighbors < 2 || totalNeighbors > 3)) {
          nextGenBoard[i][j] = 0;
        } else {
          nextGenBoard[i][j] = this.state;
        }
    }
}

module.exports = Cell;