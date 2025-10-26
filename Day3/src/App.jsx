import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [hour, sethour] = useState();
  const [minutes, setminutes] = useState();
  const [seconds, setseconds] = useState();
  const [Day, setDay] = useState();
  const [date, setdate] = useState();
  const [year, setyear] = useState();

 useEffect(() => {
  const timer = setInterval(() => {
    const current = new Date();
    const formatTime = (num) => num.toString().padStart(2, "0");

    setDay(current.toLocaleDateString("en-US", { weekday: "long" }));
    setdate(current.toLocaleDateString("en-US", { day: "numeric", month: "short" }));
    setyear(current.getFullYear());
    sethour(formatTime(current.getHours()));
    setminutes(formatTime(current.getMinutes()));
    setseconds(formatTime(current.getSeconds()));
  }, 1000);

  return () => clearInterval(timer);
}, []);


  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
        <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-10 w-full max-w-xl flex flex-col items-center text-white border border-white/30">
          <h1 className="font-extrabold text-4xl mb-8 tracking-wider drop-shadow-lg text-center">
            🕒 Digital Clock
          </h1>

          <div className="flex justify-center items-center text-[4rem] font-mono font-bold drop-shadow-lg mb-8 animate-pulse">
            <span className="m-2 px-5 py-3 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-600 shadow-xl">
              {hour}
            </span>
            <span className="mx-2">:</span>
            <span className="m-2 px-5 py-3 rounded-2xl bg-gradient-to-tr from-yellow-400 to-orange-500 shadow-xl">
              {minutes}
            </span>
            <span className="mx-2">:</span>
            <span className="m-2 px-5 py-3 rounded-2xl bg-gradient-to-tr from-green-400 to-emerald-500 shadow-xl">
              {seconds}
            </span>
          </div>

          <div className="flex justify-center items-center gap-6 text-lg font-semibold">
            <div className="flex flex-col items-center bg-white/30 px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
              <p className="text-gray-200 text-sm">Day</p>
              <p className="text-white text-xl">{Day}</p>
            </div>
            <div className="flex flex-col items-center bg-white/30 px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
              <p className="text-gray-200 text-sm">Date</p>
              <p className="text-white text-xl">{date}</p>
            </div>
            <div className="flex flex-col items-center bg-white/30 px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
              <p className="text-gray-200 text-sm">Year</p>
              <p className="text-white text-xl">{year}</p>
            </div>
          </div>

          <footer className="mt-10 text-sm text-gray-200 italic">
            Made with ❤️ by <span className="font-semibold">Mayur Hedau</span>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
