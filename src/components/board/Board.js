import React from 'react';
import Cell from '../cell/Cell';

const Board = () => {
    const rows = 10;
    const columns = 9;
    const totalCells = rows * columns;

    const lightGrayCells = [6, 7, 8, 15, 16, 17, 24, 25, 26];
    const darkGrayCells = [63, 64, 65, 72, 73, 74, 81, 82, 83];

    const getCellColor = (index) => {
        if (lightGrayCells.includes(index)) return 'light-gray';
        if (darkGrayCells.includes(index)) return 'dark-gray';
        return 'default-gray';
    };

    const renderCells = (count) => {
        return Array.from({ length: count }, (_, index) => (
            <Cell 
                key={index} 
                className={`cell ${getCellColor(index)}`}
            />
        ));
    };

    return (
        <div className="board-container">
            {renderCells(totalCells)}
        </div>
    );
};

export default Board;
