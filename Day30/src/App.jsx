import { useState, useRef, useEffect } from "react";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [minute, setMinute] = useState(0);
  const [totalMinute, setTotalMinute] = useState(0);
  const [status, setStatus] = useState(null);
  const [session, setSession] = useState(0);
  const [focusTime, setFocusTime] = useState(0);

  const timerRef = useRef(null);

  const handleSession = (sessionType) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsRunning(false);

    if (sessionType === "work") {
      setMinute(25);
      setStatus("work");
      setTotalMinute(25);
    }
    if (sessionType === "short") {
      setMinute(5);
      setStatus("short");
      setTotalMinute(5);
    }
    if (sessionType === "long") {
      setMinute(15);
      setStatus("long");
      setTotalMinute(15);
    }
  };

  const startHandler = () => {
    if (minute > 0 && !isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setMinute((m) => {
          if (m <= 1) {
            clearInterval(timerRef.current);
            timerRef.current = null;
            setIsRunning(false);
            
            // Update stats only for work sessions
            if (status === "work") {
              setSession((s) => s + 1);
              setFocusTime((f) => f + totalMinute);
            }
            
            return 0;
          }
          return m - 1;
        });
      }, 1000);
    }
  };

  const resetHandler = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsRunning(false);
    setMinute(totalMinute);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const percentage = totalMinute > 0 ? (minute / totalMinute) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8 gap-12">
      {/* Main Timer Section */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-12 animate-fade-in">
          Pomodoro Focus
        </h1>

        {/* Circle with smooth animation */}
        <div className="relative inline-block mb-8">
          <div
            className="w-64 h-64 rounded-full flex items-center justify-center relative transition-all duration-1000 ease-linear shadow-2xl"
            style={{
              background: `conic-gradient(#3b82f6 ${percentage}%, #1e293b 0%)`,
            }}
          >
            <div className="absolute inset-3 bg-slate-900 rounded-full flex items-center justify-center">
              <span className="text-7xl font-bold text-white transition-all duration-300">
                {minute}
              </span>
            </div>
          </div>

          {/* Pulse effect when running */}
          {isRunning && (
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 animate-ping" />
          )}
        </div>

        {/* Current Session Status */}
        {status && (
          <div className="mb-4 text-xl text-white font-medium">
            {status === "work" && "🎯 Work Session"}
            {status === "short" && "☕ Short Break"}
            {status === "long" && "🌟 Long Break"}
          </div>
        )}

        {/* Input with smooth transitions */}
        <div className="mb-6">
          <input
            type="number"
            value={minute}
            onChange={(e) => {
              const v = Number(e.target.value);
              setMinute(v);
              setTotalMinute(v);
              setStatus(null);
            }}
            disabled={isRunning}
            className="w-32 px-4 py-3 text-center text-2xl font-semibold bg-slate-800 text-white rounded-lg border-2 border-slate-700 focus:border-blue-500 focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Minutes"
          />
        </div>

        {/* Buttons with hover animations */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={startHandler}
            disabled={isRunning || minute === 0}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            Start
          </button>
          <button
            onClick={resetHandler}
            disabled={minute === totalMinute && !isRunning}
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            Reset
          </button>
        </div>

        {/* Status indicator */}
        {isRunning && (
          <div className="mt-6 text-green-400 font-medium animate-pulse">
            Timer Running...
          </div>
        )}
      </div>

      {/* Sidebar Section */}
      <div className="space-y-8">
        {/* Progress Stats */}
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 min-w-[280px]">
          <h2 className="text-2xl font-bold text-white mb-4">Today's Progress</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Completed Sessions</span>
              <span className="text-3xl font-bold text-blue-400">{session}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Focus Time</span>
              <span className="text-3xl font-bold text-purple-400">{focusTime}m</span>
            </div>
          </div>
        </div>

        {/* Quick Switch */}
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Quick Switch</h2>
          
          <div className="space-y-3">
            <div
              onClick={() => handleSession("work")}
              className={`cursor-pointer p-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                status === "work"
                  ? "bg-blue-600 shadow-lg"
                  : "bg-slate-700 hover:bg-slate-600"
              }`}
            >
              <div className="flex items-center justify-between text-white">
                <span className="font-semibold">🎯 Work Session</span>
                <span className="text-2xl font-bold">25m</span>
              </div>
            </div>

            <div
              onClick={() => handleSession("short")}
              className={`cursor-pointer p-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                status === "short"
                  ? "bg-green-600 shadow-lg"
                  : "bg-slate-700 hover:bg-slate-600"
              }`}
            >
              <div className="flex items-center justify-between text-white">
                <span className="font-semibold">☕ Short Break</span>
                <span className="text-2xl font-bold">5m</span>
              </div>
            </div>

            <div
              onClick={() => handleSession("long")}
              className={`cursor-pointer p-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                status === "long"
                  ? "bg-purple-600 shadow-lg"
                  : "bg-slate-700 hover:bg-slate-600"
              }`}
            >
              <div className="flex items-center justify-between text-white">
                <span className="font-semibold">🌟 Long Break</span>
                <span className="text-2xl font-bold">15m</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;