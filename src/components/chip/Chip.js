import React from 'react';

const Chip = ({ color, onClick }) => {
    return (
        <div className={`chip ${color}`} onClick={onClick}>
        </div>
    );
};

export default Chip;
