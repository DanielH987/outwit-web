import React from 'react';
import Cell from '../cell/Cell';

const Board = () => {
    return (
        <>
        <div className="board">
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell color={'lightgray'}/>
            <Cell color={'lightgray'}/>
            <Cell color={'lightgray'}/>
        </div>
        <div className="board">
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell color={'lightgray'}/>
            <Cell color={'lightgray'}/>
            <Cell color={'lightgray'}/>
        </div>
        <div className="board">
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell color={'lightgray'}/>
            <Cell color={'lightgray'}/>
            <Cell color={'lightgray'}/>
        </div>
        <div className="board">
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
        </div>
        <div className="board">
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
        </div>
        <div className="board">
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
        </div>
        <div className="board">
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
        </div>
        <div className="board">
            <Cell color={'gray'}/>
            <Cell color={'gray'}/>
            <Cell color={'gray'}/>
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
        </div>
        <div className="board">
            <Cell color={'gray'}/>
            <Cell color={'gray'}/>
            <Cell color={'gray'}/>
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
        </div>
        <div className="board">
            <Cell color={'gray'}/>
            <Cell color={'gray'}/>
            <Cell color={'gray'}/>
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
        </div>
        </>
    );
};

export default Board;
