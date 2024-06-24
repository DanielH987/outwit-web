// src/components/board/Board.js
import React, { useState } from 'react';
import Cell from '../cell/Cell';

const Board = () => {
    const rows = 10;
    const columns = 9;
    const totalCells = rows * columns;

    const lightGrayCells = [6, 7, 8, 15, 16, 17, 24, 25, 26];
    const darkGrayCells = [63, 64, 65, 72, 73, 74, 81, 82, 83];

    // State to manage chip positions
    const [chips, setChips] = useState([
        // Dark team chips
        { id: 1, position: 0, color: 'dark' },
        { id: 2, position: 10, color: 'dark' },
        { id: 3, position: 20, color: 'dark' },
        { id: 4, position: 30, color: 'dark' },
        { id: 5, position: 40, color: 'dark power' },
        { id: 6, position: 50, color: 'dark' },
        { id: 7, position: 60, color: 'dark' },
        { id: 8, position: 70, color: 'dark' },
        { id: 9, position: 80, color: 'dark' },
        // Light team chips
        { id: 11, position: 9, color: 'light' },
        { id: 12, position: 19, color: 'light' },
        { id: 13, position: 29, color: 'light' },
        { id: 14, position: 39, color: 'light' },
        { id: 15, position: 49, color: 'light power' },
        { id: 16, position: 59, color: 'light' },
        { id: 17, position: 69, color: 'light' },
        { id: 18, position: 79, color: 'light' },
        { id: 19, position: 89, color: 'light' },
    ]);

    const getCellColor = (index) => {
        if (lightGrayCells.includes(index)) return 'light-gray';
        if (darkGrayCells.includes(index)) return 'dark-gray';
        return 'default-gray';
    };

    const getChipAtCell = (index) => {
        const chip = chips.find(chip => chip.position === index);
        if (chip) {
            return {
                color: chip.color,
                onClick: () => {},
            };
        }
        return null;
    };

    const renderCells = (count) => {
        return Array.from({ length: count }, (_, index) => (
            <Cell 
                key={index} 
                className={`cell ${getCellColor(index)}`}
                chip={getChipAtCell(index)}
                onCellClick={() => {}}
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
