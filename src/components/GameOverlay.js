import React from 'react';
import TryAgainLogo from '../assets/img/try-again.gif'

function GameOverlay({ onRestart, board }) {
    if (board.hasWon()) {
        return <div className='tile2048'/>
    } else {
        return <div className='gameOver' onClick={onRestart}>
            <img
                src={TryAgainLogo}
                alt="TryAgainLogo"
                style={{
                    width: '100%',
                    height: '100%',
                    cursor: "pointer"
                }
                }/>
        </div>
    }
}

export default GameOverlay;