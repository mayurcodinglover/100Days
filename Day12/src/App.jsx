import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [strength, setStrength] = useState(6);
  const [password, setPassword] = useState(0);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [copytext, setCopytext] = useState("Copy");
  const [hide, setHide] = useState(false);
  const [score,setScore]=useState(0);
  const [strengthLabel, setStrengthLabel] = useState("Weak");
  const handlechange=(e)=>{
    setStrength(e.target.value)
  }

  const checkStrength=(pwd)=>{
    let s=0;
    if(pwd.length>=6) s++;
    if(pwd.length>=10)s++;

    if (/[a-z]/.test(pwd)) s++;      // lowercase
  if (/[A-Z]/.test(pwd)) s++;      // uppercase
  if (/[0-9]/.test(pwd)) s++;      // numbers
  if (/[^A-Za-z0-9]/.test(pwd)) s++;

  setScore(s);
  if(s<=2) setStrengthLabel("Weak");
  else if(s<=4) setStrengthLabel("Medium");
  else setStrengthLabel("Strong");
  
  }
  const handleCopy=()=>{
    if(!password)
    {
      return
    }
    navigator.clipboard.writeText(password).then(()=>{
      setCopytext("Copied")
      setTimeout(() => {
      setCopytext("Copy")
    }, 1000)

    }).catch(()=>alert("Failed to Copy"))
  }
  const generatePassword=()=>{
    let length=Number(strength);
    let chars="";

    if(lowercase) chars+="abcdefghijklmnopqrstuvwxyz";
    if(uppercase) chars+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(number) chars+="1234567890";
    if(symbol) chars+="!@#$%^&*()_+-=[]{}|;:,.<>?";

    if(chars.length===0)
    {
      setPassword("Select a character set");
      return;
    }
    let pwd="";
    for(let i=0;i<length;i++)
    {
      pwd+=chars.charAt(Math.floor(Math.random()*chars.length))
    }
    setPassword(pwd);
    checkStrength(pwd);
  }
  const handleReset=()=>{
    setStrength(0);
    setPassword(0);
    setUppercase(false);
    setLowercase(false);
    setNumber(false);
    setSymbol(false);
    setScore(0);
    setStrengthLabel("Weak");
  }
  return (
  <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#1a0933] to-[#240046] p-4">

    <div className="w-full max-w-xl bg-white/10 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/20 p-8 text-white">

      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold tracking-wide">Password Generator</h1>
        <div className="w-24 h-[4px] bg-purple-400 mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Password box */}
      <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/20 shadow-inner">
        <input type={`${hide===true ? "password" : "text"}`} className="text-lg opacity-80" name="password" value={password} id="password" disabled/>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-3">
        <button className="px-4 py-2 bg-gray-300/60 hover:bg-gray-300 text-gray-900 rounded-lg backdrop-blur-md" onClick={()=>setHide(!hide)}>
          Hide
        </button>
        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md" onClick={handleCopy}>
          {copytext}
        </button>
      </div>

      {/* Length + character sets */}
      <div className="mt-6 grid grid-cols-2 gap-4">

        {/* Password Length */}
        <div className="bg-white/10 border border-white/20 p-4 rounded-xl backdrop-blur-lg">
          <p className="font-semibold mb-1">Length: {strength}</p>
          <input type="range" min="1" max="12" className="w-full accent-purple-400" onChange={handlechange}/>
        </div>

        {/* Character Sets */}
        <div className="bg-white/10 border border-white/20 p-4 rounded-xl backdrop-blur-lg">
          <p className="font-semibold mb-2">Character Sets</p>

          <label className="flex items-center gap-2 mb-1">
            <input type="checkbox" className="accent-purple-400"  onChange={()=>setLowercase(!lowercase)}/> a–z
          </label>
          <label className="flex items-center gap-2 mb-1">
            <input type="checkbox" className="accent-purple-400"  onChange={()=>setUppercase(!uppercase)}/> A–Z
          </label>
          <label className="flex items-center gap-2 mb-1">
            <input type="checkbox" className="accent-purple-400"  onChange={()=>setNumber(!number)}/> 0–9
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-purple-400" onChange={()=>setSymbol(!symbol)} /> Symbols
          </label>
        </div>
      </div>

      {/* Strength */}
      <div className="mt-6 bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-lg">
        <div className="flex justify-between mb-2 text-sm">
          <p>Strength: {strengthLabel}</p>
          <p>Score {score}/6</p>
        </div>

        <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden">
          <div className={` h-full ${score<=2 ? "bg-red-500" : score<=4 ? "bg-yellow-400" : "bg-green-500" } rounded-full`} style={{ width:`${(score/6)*100}%`}}></div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-between">
        <button className="flex-1 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl text-white font-semibold shadow-lg hover:scale-[1.02] transition" onClick={generatePassword}>
          Generate Password
        </button>

        <button className="ml-3 px-6 py-3 bg-gray-300/60 text-gray-900 rounded-xl shadow-md backdrop-blur-md hover:bg-gray-300" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>

  </div>
)

}

export default App
