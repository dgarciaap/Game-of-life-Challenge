class Cell {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.state = Math.floor(Math.random() * 2);
    }

    getNeighbors(board) {

    }
}

module.exports = Cell;