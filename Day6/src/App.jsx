import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [hours, sethours] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [seconds, setseconds] = useState(0);

const startTimer=()=>{
  setInterval(() => {
    if(hours>0)
  {
    setminutes(59)
    setseconds(59);
    sethours((hour)=>hour-1);
  }
  else if(minutes>0)
  {
    setseconds(59);
    setminutes((minute)=>minute-1);
  }
  else if(seconds > 0)
  {
    setseconds((seconds)=>seconds-1);
  }
  }, 1000);
  
}
  return (
    <>
     <div>
        <div className="main">
          <h1>Countdown Timer</h1>
    <div className="timer">
      <span>{hours}</span>:
      <span>{minutes}</span>:
      <span>{seconds}</span>
    </div>
    <p>Set Timer</p>
    <div className='flex justify-center items-center gap-5'>
      <div className='hour'>
      <p>Hours</p>
      <input type="number" name="hours" id="hours" className='border w-10' onChange={(e)=>sethours(e.target.value)}/>
    </div>
    <div className='minutes'>
      <p>Minutes</p>
      <input type="number" name="minutes" id="minutes" className='border w-10' onChange={(e)=>setminutes(e.target.value)}/>
    </div>
    <div className='seconds'>
      <p>Seconds</p>
      <input type="number" name="seconds" id="seconds" className='border w-10' onChange={(e)=>setseconds(e.target.value)}/>
    </div>
    </div>
    <div className='controls m-2 p-2'>
      <button className='border m-2 p-2 w-[5rem]' onClick={startTimer}>Start</button>
      <button className='border m-2 p-2 w-[5rem]'>Pause</button>
      <button className='border m-2 p-2 w-[5rem]'>Reset</button>
    </div>
        </div>
     </div>
    </>
  )
}

export default App
