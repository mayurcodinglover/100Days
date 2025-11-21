import { useState, useEffect, useRef } from 'react'

function App() {
  const [time, setTime] = useState({ ms: 0, seconds: 0, minute: 0 });
  const intervalRef = useRef(null);
  const [isRunning, setisRunning] = useState(false);

  useEffect(() => {
    if(isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          let newMs = prevTime.ms + 1;
          let newSeconds = prevTime.seconds;
          let newMinute = prevTime.minute;

          if (newMs >= 100) {
            newMs = 0;
            newSeconds += 1;
          }

          if (newSeconds >= 60) {
            newSeconds = 0;
            newMinute += 1;
          }

          return { ms: newMs, seconds: newSeconds, minute: newMinute };
        });
      }, 10);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const startTimer = () => {
    setisRunning(true);
  }

  const stopTimer = () => {
    setisRunning(false);
  }

  const resetTimer = () => {
    setisRunning(false);
    setTime({ms: 0, seconds: 0, minute: 0});
  }

  return (
    <div className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex flex-col items-center justify-center'>
      <div className='bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-12 border border-white/20'>
        <h1 className='text-center mb-8 font-bold text-4xl text-white tracking-wider'>
          STOPWATCH
        </h1>
        
        <div className='bg-black/30 rounded-2xl p-8 mb-8 backdrop-blur-sm'>
          <div className='text-7xl font-mono font-bold text-center text-white tracking-wider'>
            <span className='text-blue-400'>{String(time.minute).padStart(2, '0')}</span>
            <span className='text-white/50 mx-1'>:</span>
            <span className='text-green-400'>{String(time.seconds).padStart(2, '0')}</span>
            <span className='text-white/50 mx-1'>:</span>
            <span className='text-purple-400'>{String(time.ms).padStart(2, '0')}</span>
          </div>
          <div className='text-center mt-3 text-sm text-gray-400 tracking-widest'>
            <span className='inline-block w-20'>MINUTES</span>
            <span className='inline-block w-20'>SECONDS</span>
            <span className='inline-block w-20'>MILLISEC</span>
          </div>
        </div>
        
        <div className='flex gap-4 justify-center'>
          <button 
            onClick={startTimer}
            disabled={isRunning}
            className={`px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 active:scale-95 ${
              isRunning 
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-green-500/50'
            }`}
          >
            Start
          </button>
          
          <button 
            onClick={stopTimer}
            disabled={!isRunning}
            className={`px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 active:scale-95 ${
              !isRunning
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-red-500/50'
            }`}
          >
            Stop
          </button>
          
          <button 
            onClick={resetTimer}
            className='px-8 py-3 rounded-xl font-semibold text-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-200 transform hover:scale-105 active:scale-95'
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App