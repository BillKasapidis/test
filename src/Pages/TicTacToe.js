import React, { useState } from "react";
import Infobox from './Infobox';
import Button from 'react-bootstrap/Button';

function Square (props){
    return(
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

function Board(props){
    
    function renderSquare(i){
        return(
            <Square 
                onClick={() => props.handleClick(i)} 
                value={props.square[i]}
            />
        )
    }

    return(
        <div>
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
    )
}

function Game (){
    
    const [square,setSquare] = useState(Array(9).fill(null))
    const [player,setPlayer] = useState('X')
    
    const winner = calculateVictory(square)

    function handleClick (i) {        
        if (square[i] ==null){ //if square is empty
            
            square[i] = player //insert player's mark
    
            calculateVictory(square) //check if a player won

            if (player === 'X') setPlayer('O') //Change current player
            else if (player === 'O') setPlayer('X') 
        }
    }

    function calculateVictory(square){
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i=0;i<lines.length; i++){
            const [a,b,c] = lines[i]
            if (square[a] && square[a] === square[b] && square[a] === square[c]){
                return square[a];
            }
        }
        return null;
    }

    function resetGame(square){
        setSquare(Array(9).fill(null))
        setPlayer('X')
    }

    return(
        <div className="game">
            <Infobox type='TicTacToe' />
            <div className="game-board">
            <p>It's {player}'s turn!</p>
            <Board square={square} handleClick={handleClick}/>
            {
            winner!= null &&
            <>
                <strong><p>The winner is: {winner}!</p></strong>
                <Button onClick={resetGame}>RESET</Button>
            </>
            }
            </div>
            
        </div>
    )
}

export default Game