'use strict';

const Cell = require('./Cell.js').Cell;

describe('cell', () => {
    it('newIsDead', () => {
        const cell = new Cell();
        expect(cell.isAlive()).toBe(false);
    });
    it('the cell should have 2 live neighbors', () => {
        const cell = new Cell(false, 2);
        expect(cell.numbOfLive()).toBe(2);
    });
    it('the cell has more than 3 live neighbors', () => {
        const cell = new Cell(true, 4);
        expect(cell.numbOfLive()).toBe(4);
    });
    it('a live cell with more than 3 live neighbors should die', () => {
        const cell = new Cell(true, 4);
        cell.updateStatus();
        expect(cell.isAlive()).toBe(false);
    });
    it('a live cell with less than two live neighbours, should die', () => {
        const cell = new Cell(true, 1);
        cell.updateStatus();
        expect(cell.isAlive()).toBe(false);
    });
    it('a live cell with two live neighbours, should stay live', () => {
        const cell = new Cell(true, 2);
        cell.updateStatus();
        expect(cell.isAlive()).toBe(true);
    });
    it('a live cell with three live neighbours, should stay live', () => {
        const cell = new Cell(true, 3);
        cell.updateStatus();
        expect(cell.isAlive()).toBe(true);
    });
    it('a dead cell with three live neighbours, should live', () => {
        const cell = new Cell(false, 3);
        cell.updateStatus();
        expect(cell.isAlive()).toBe(true);
    });
});
