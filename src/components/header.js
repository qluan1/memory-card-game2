import React from 'react';

export function Header(props) {
    return (
        <div className="header">
            <h1 className="title">Memeory Card Game</h1>
            <span className="instruction">Win the game by clicking on all cards without repeating.</span>
            <div className="current-score">Current Score: {props.currentScore}</div>
            <div className="best-score">Best Score: {props.bestScore}</div>
        </div>
    );
}