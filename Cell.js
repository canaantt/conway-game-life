'use strict';

module.exports = {
    Cell
}

function Cell(status = false, liveNeighbors = 0) {
    this.isAlive = function () {
        return status;
    };
    this.numbOfLive = function () {
        return liveNeighbors;
    };
    this.updateStatus = function () {
        if (this.isAlive() && (liveNeighbors > 3 || liveNeighbors < 2)) {
            status = false;
        }
        if (!this.isAlive() && liveNeighbors == 3) {
            status = true;
        }
    };
}