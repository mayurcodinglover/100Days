import { useState, useRef, useEffect } from 'react'

function App() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [initialTotalSeconds, setInitialTotalSeconds] = useState(0);
  const timerRef = useRef(null);

  const getTotalSeconds = (t) => t.hours * 3600 + t.minutes * 60 + t.seconds;
  const currentTotalSeconds = getTotalSeconds(time);
  
  // Calculate progress percentage (0 to 1)
  const progress = initialTotalSeconds > 0 ? currentTotalSeconds / initialTotalSeconds : 1;
  
  // SVG circle properties
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);

  const startTimer = () => {
    if (timerRef.current !== null) return;
    
    // Set initial total seconds when starting
    const total = getTotalSeconds(time);
    if (total === 0) return;
    setInitialTotalSeconds(total);
    
    timerRef.current = setInterval(() => {
      setTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timerRef.current);
          timerRef.current = null;
          return prevTime;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);
  };

  const pauseTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resetTimer = () => {
    pauseTimer();
    setTime({ hours: 0, minutes: 0, seconds: 0 });
    setInitialTotalSeconds(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Countdown Timer</h1>
        
        {/* Circular Progress Animation */}
        <div className="relative flex justify-center items-center mb-8">
          <svg className="transform -rotate-90" width="280" height="280">
            {/* Background circle */}
            <circle
              cx="140"
              cy="140"
              r={radius}
              stroke="#e5e7eb"
              strokeWidth="12"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="140"
              cy="140"
              r={radius}
              stroke="url(#gradient)"
              strokeWidth="12"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{
                transition: 'stroke-dashoffset 1s linear'
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Timer display in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-800 tracking-wider">
                {String(time.hours).padStart(2, '0')}:
                {String(time.minutes).padStart(2, '0')}:
                {String(time.seconds).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>

        {/* Set Timer Section */}
        <p className="text-center text-lg font-semibold text-purple-600 mb-4">Set Timer</p>
        <div className="flex justify-center gap-4 mb-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Hours</p>
            <input 
              type="number" 
              className="w-16 h-16 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
              value={time.hours}
              onChange={(e) => setTime({ ...time, hours: Math.max(0, Math.min(23, Number(e.target.value) || 0)) })}
              min="0"
              max="23"
            />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Minutes</p>
            <input 
              type="number" 
              className="w-16 h-16 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
              value={time.minutes}
              onChange={(e) => setTime({ ...time, minutes: Math.max(0, Math.min(59, Number(e.target.value) || 0)) })}
              min="0"
              max="59"
            />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Seconds</p>
            <input 
              type="number" 
              className="w-16 h-16 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
              value={time.seconds}
              onChange={(e) => setTime({ ...time, seconds: Math.max(0, Math.min(59, Number(e.target.value) || 0)) })}
              min="0"
              max="59"
            />
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-3">
          <button 
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all shadow-md hover:shadow-lg"
            onClick={startTimer}
          >
            Start
          </button>
          <button 
            className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-all shadow-md"
            onClick={pauseTimer}
          >
            Pause
          </button>
          <button 
            className="px-6 py-3 bg-red-100 text-red-600 font-semibold rounded-lg hover:bg-red-200 transition-all shadow-md"
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App