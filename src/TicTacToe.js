import React, { useState, useEffect } from 'react';
import { calculateWinner } from './App';

export const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        setWinner(calculateWinner(board));
    }, [board]);

    const handleClick = (index) => {
        if (board[index] || winner) {
            return;
        }

        const newBoard = board.slice();
        newBoard[index] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXIsNext(!xIsNext);
    };

    const renderSquare = (index) => (
        <button className={`square ${winner && winner.includes(index) ? 'winner' : ''}`} onClick={() => handleClick(index)}>
            {board[index]}
        </button>
    );

    const getStatus = () => {
        if (winner) {
            return `🏆 Winner: ${board[winner[0]]}`;
        } else if (board.every((square) => square !== null)) {
            return '🤝 Draw!';
        } else {
            return `Next player: ${xIsNext ? 'X' : 'O'}`;
        }
    };

    return (
        <div className="game-container">
            <div className="game-board">
                <div className="status">{getStatus()}</div>
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
        </div>
    );
};
