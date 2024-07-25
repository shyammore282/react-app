import React, { useEffect, useState } from "react";
import "./style.css";

const Square = ({ value, onClick }) => {
  return (
    <div>
      <button className="square" onClick={onClick}>
        {value}
      </button>
    </div>
  );
};
const TicTacTo = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXturn, setIsXturn] = useState(true);
  const [status, setStatus] = useState("");

  //   0 1 2
  //   3 4 5
  //   6 7 8
  const getWinner = (squares) => {
    const winnerPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winnerPattern.length; i++) {
      const [x, y, z] = winnerPattern[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return 0;
  };

  const handleOnClick = (currentIndex) => {
    let copySquare = [...squares];
    if (copySquare[currentIndex] || getWinner(squares)) return;
    copySquare[currentIndex] = isXturn ? "X" : "O";
    setIsXturn(!isXturn);
    setSquares(copySquare);
  };

  const restartGame = () => {
    setSquares(Array(9).fill(""));
    setIsXturn(true);
  };

  useEffect(() => {
    if (!getWinner(squares) && squares.every((items) => items !== "")) {
      setStatus(`Match Is Draw ! Please Restart The Game`);
    } else if (getWinner(squares)) {
      setStatus(
        `The Winner Is ${getWinner(squares)} ! Please Restart The Game`
      );
    } else {
      setStatus(`The Next Player Is ${isXturn ? "X" : "O"}`);
    }
  }, [squares, isXturn]);
  console.log(squares);
  return (
    <div className="tic-tac-to-container">
      <div className="rows1">
        <Square value={squares[0]} onClick={() => handleOnClick(0)} />
        <Square value={squares[1]} onClick={() => handleOnClick(1)} />
        <Square value={squares[2]} onClick={() => handleOnClick(2)} />
      </div>
      <div className="rows1">
        <Square value={squares[3]} onClick={() => handleOnClick(3)} />
        <Square value={squares[4]} onClick={() => handleOnClick(4)} />
        <Square value={squares[5]} onClick={() => handleOnClick(5)} />
      </div>
      <div className="rows1">
        <Square value={squares[6]} onClick={() => handleOnClick(6)} />
        <Square value={squares[7]} onClick={() => handleOnClick(7)} />
        <Square value={squares[8]} onClick={() => handleOnClick(8)} />
      </div>

      <div className="status-box">{status}</div>
      <div>
        <button className="restart-game-btn" onClick={restartGame}>
          Restart Game
        </button>
      </div>
    </div>
  );
};

export default TicTacTo;
