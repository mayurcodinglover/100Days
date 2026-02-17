import { useState } from 'react'

function App() {
  const resultArray = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);

  const checkWinner = (board) => {
    for (let combo of resultArray) {
      console.log(combo);
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { winner: board[a], combo };
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] !== null || checkWinner(board)) return;
    const boardCopy = [...board];
    boardCopy[index] = isXturn ? 'X' : 'O';
    setBoard(boardCopy);
    setIsXturn(!isXturn);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXturn(true);
  };

  const result = checkWinner(board);
  const winner = result?.winner;
  const winningCombo = result?.combo || [];
  const isDraw = !winner && board.every(cell => cell !== null);

  const getStatus = () => {
    if (winner) return `Player ${winner} wins! 🎉`;
    if (isDraw) return "It's a Draw! 🤝";
    return `Player ${isXturn ? 'X' : 'O'}'s Turn`;
  };

  const getStatusClass = () => {
    if (winner) return 'bg-green-600 border-green-400';
    if (isDraw) return 'bg-orange-500 border-orange-300';
    return 'bg-slate-800 border-slate-600';
  };

  const getBoxClass = (index, value) => {
    const isWinningCell = winningCombo.includes(index);
    const isDisabled = (winner || isDraw) && !isWinningCell;
    const base = 'w-28 h-28 flex items-center justify-center text-5xl font-black rounded-2xl border-2 transition-all duration-150 select-none ';

    if (isWinningCell)
      return base + 'bg-slate-700 border-yellow-400 text-yellow-400 shadow-lg scale-105 cursor-not-allowed';
    if (isDisabled)
      return base + 'bg-slate-800 border-slate-600 text-slate-500 cursor-not-allowed';
    if (value === 'X')
      return base + 'bg-slate-800 border-slate-600 text-rose-500 cursor-not-allowed';
    if (value === 'O')
      return base + 'bg-slate-800 border-slate-600 text-cyan-400 cursor-not-allowed';

    return base + 'bg-slate-800 border-slate-600 cursor-pointer hover:bg-slate-700 hover:border-rose-500 hover:scale-105';
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="flex flex-col items-center gap-7">

        {/* Title */}
        <h1 className="text-5xl font-extrabold tracking-widest text-slate-200 uppercase">
          Tic <span className="text-rose-500">Tac</span> Toe
        </h1>

        {/* Status Badge */}
        <div className={`text-lg font-semibold px-7 py-2 rounded-full border-2 text-white tracking-wide transition-all duration-300 ${getStatusClass()}`}>
          {getStatus()}
        </div>

        {/* Board */}
        <div className="grid grid-cols-3 gap-3">
          {board.map((value, index) => (
            <div
              key={index}
              className={getBoxClass(index, value)}
              onClick={() => handleClick(index)}
            >
              {value}
            </div>
          ))}
        </div>

        {/* Reset Button */}
        <button
          onClick={resetGame}
          className="px-10 py-3 bg-rose-500 hover:bg-rose-600 active:scale-95 text-white font-bold text-sm tracking-widest uppercase rounded-full transition-all duration-200"
        >
          New Game
        </button>

      </div>
    </div>
  );
}

export default App