import React, { useEffect, useState } from 'react';
import { Board } from "../helper";
import Cell from "./Cell";
import Tile from "./Tile";
import useEvent from '../hooks/useEvent'
import GameOverlay from "./GameOverlay";

function BoardView() {
    // for store board and update board
    let [board, setBoard] = useState(new Board())

    // for store highScore and update highScore
    const [highScroe, setHighScore] = useState(board.score)
    // board.fourProbability = 1

    // initially check have any local HighScore
    useEffect(() => {
        if (localStorage.getItem('HighScore'))
            setHighScore(JSON.parse(localStorage.getItem('HighScore')))
    }, [])

    // check the current score with highScore
    useEffect(() => {
        if (highScroe < board.score) {
            setHighScore(board.score)
            localStorage.setItem('HighScore', JSON.stringify(highScroe))
        }
        localStorage.setItem('HighScore', JSON.stringify(highScroe))
    }, [highScroe, board.score])

// for game movement
    const handleKeyDown = (event) => {
        if (board.hasWon()) {
            return
        }
        // 0 -> left, 1 -> up, 2 -> right, 3 -> down
        let keycodes = {
            37: 0,
            65: 0,
            38: 1,
            87: 1,
            39: 2,
            68: 2,
            40: 3,
            83: 3
        }

        if (event.keyCode in keycodes) {
            let direction = keycodes[`${event.keyCode}`]
            let boardClone = Object.assign(Object.create(Object.getPrototypeOf(board)), board)
            let newBoard = boardClone.move(direction)
            setBoard(newBoard)
        }
    }

    useEvent('keydown', handleKeyDown)

    // add backside cells
    const cells = board.cells.map((row, rowIndex) => {
        return (
            <div key={rowIndex}>
                {row.map((col, colIndex) => {
                    return <Cell key={rowIndex * board.size + colIndex}/>
                })}
            </div>
        )
    })

    // add font side tiles
    const tiles = board.tiles
        .filter((tile) => tile.value !== 0)
        .map((tile, index) => {
            return <Tile tile={tile} key={index}/>
        })

    // reset the game
    const resetGame = () => {
        setBoard(new Board())
    }
    const [toggle, setToggle] = useState(false)

    // handle intial score addition to none
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (count !== 0) {
            setToggle(true)
            setTimeout(() => {
                setToggle(false)
            }, 600)
        } else {
            setCount(1)
        }

    }, [board.score])

    return (
        <div>

            <div className="details-box">

                <h1>2048</h1>
                <div className='score-box score'>
                    <div className='score-header '>Score</div>
                    <div className='points'>{board.score}</div>
                    {toggle
                    && <div className="score-addition points">+{board.score - board.preScore}</div>
                    }
                </div>
                <div className='score-box highest-scroe'>
                    <div className='score-header '>Highest Score</div>
                    <div className='points'>{highScroe}</div>

                </div>
            </div>
            <div className='resetButton' onClick={resetGame}>New Game</div>
            <div className='board'>
                {cells}
                {tiles}

                {
                    board.hasLost() || board.hasWon() ? <GameOverlay
                        onRestart={resetGame}
                        board={board}
                    /> : null
                }

            </div>

        </div>

    );
}

export default BoardView;