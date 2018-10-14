import React from 'react';
import PropTypes from 'prop-types';

import Brick from './Brick';
import './GameField.css';

const GameField = ({ wall = [], children }) => {
  return (
    <div className="game">
      <div className={`game-field `}>
        {wall.map((line, y) => {
          return line.map((cell, x) => {
            return <Brick key={`${x}.${y}`} full={!!cell} />;
          });
        })}
      </div>
      {children && <div className="overlay">{children}</div>}
    </div>
  );
};

GameField.propTypes = {
  wall: PropTypes.array.isRequired,
};

export default GameField;
