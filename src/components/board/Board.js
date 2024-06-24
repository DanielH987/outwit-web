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
        { id: 1, position: 10, color: 'red' }, // Example chip data
        { id: 2, position: 20, color: 'blue' }
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
                onClick: () => moveChip(chip.id)
            };
        }
        return null;
    };

    const moveChip = (chipId) => {
        // Logic to move the chip to a new cell
        // This can be based on user input or predefined rules
        const newPosition = prompt("Enter the new position for the chip:");
        setChips(chips.map(chip => chip.id === chipId ? { ...chip, position: parseInt(newPosition, 10) } : chip));
    };

    const renderCells = (count) => {
        return Array.from({ length: count }, (_, index) => (
            <Cell 
                key={index} 
                className={`cell ${getCellColor(index)}`}
                chip={getChipAtCell(index)}
                onCellClick={() => placeChip(index)}
            />
        ));
    };

    const placeChip = (index) => {
        // Example logic to place a new chip at a specific position
        // This can be enhanced as per game rules
        const newChip = { id: chips.length + 1, position: index, color: 'green' };
        setChips([...chips, newChip]);
    };

    return (
        <div className="board-container">
            {renderCells(totalCells)}
        </div>
    );
};

export default Board;
