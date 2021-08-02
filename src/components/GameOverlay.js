import React from 'react';

function GameOverlay({ onRestart, board }) {
    if (board.hasWon()) {
        return <div className='tile2048'/>
    } else {
        return (
            <div className='gameOver'>
                <div className="logo is-animetion">
                    <span>G</span>
                    <span>a</span>
                    <span>m</span>
                    <span>e</span>
                    <span/>
                    <span>O</span>
                    <span>v</span>
                    <span>e</span>
                    <span>r</span>
                </div>
                <button onClick={onRestart}>Try agin</button>
            </div>)
    }
}

export default GameOverlay;