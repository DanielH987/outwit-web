import React from 'react';
import Chip from '../chip/Chip';

const Cell = ({ className, chip, onCellClick }) => {
    return (
        <div className={`cell ${className}`} onClick={onCellClick}>
            {chip && <Chip color={chip.color} onClick={chip.onClick} />}
        </div>
    );
};

export default Cell;
