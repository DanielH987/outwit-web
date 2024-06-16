import React from 'react';
import Cell from '../cell/Cell';

const boardLayout = [
    ['', '', '', '', '', '', '#D3D3D3', '#D3D3D3', '#D3D3D3'],
    ['', '', '', '', '', '', '#D3D3D3', '#D3D3D3', '#D3D3D3'],
    ['', '', '', '', '', '', '#D3D3D3', '#D3D3D3', '#D3D3D3'],
    ['', '', '', '', '', '', ''       ,        '',        ''],
    ['', '', '', '', '', '', ''       ,        '',        ''],
    ['', '', '', '', '', '', ''       ,        '',        ''],
    ['', '', '', '', '', '', ''       ,        '',        ''],
    ['#404040', '#404040', '#404040', '', '', '', '', '', ''],
    ['#404040', '#404040', '#404040', '', '', '', '', '', ''],
    ['#404040', '#404040', '#404040', '', '', '', '', '', '']
];

const Board = () => {
    return (
        <>
            {boardLayout.map((row, rowIndex) => (
                <div key={rowIndex} className="board">
                    {row.map((color, cellIndex) => (
                        <Cell key={cellIndex} color={color} />
                    ))}
                </div>
            ))}
        </>
    );
};

export default Board;
