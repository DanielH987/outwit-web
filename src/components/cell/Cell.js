import React from 'react';

const Cell = ({ color }) => {
    return (
      <div className="cell" style={{ backgroundColor: color }}>
      </div>
    );
  };
  
  export default Cell;