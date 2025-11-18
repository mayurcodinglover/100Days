import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
        <span className="text-lg opacity-80">password</span>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-3">
        <button className="px-4 py-2 bg-gray-300/60 hover:bg-gray-300 text-gray-900 rounded-lg backdrop-blur-md">
          Hide
        </button>
        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md">
          Copy
        </button>
      </div>

      {/* Length + character sets */}
      <div className="mt-6 grid grid-cols-2 gap-4">

        {/* Password Length */}
        <div className="bg-white/10 border border-white/20 p-4 rounded-xl backdrop-blur-lg">
          <p className="font-semibold mb-1">Length: 12</p>
          <input type="range" className="w-full accent-purple-400" />
        </div>

        {/* Character Sets */}
        <div className="bg-white/10 border border-white/20 p-4 rounded-xl backdrop-blur-lg">
          <p className="font-semibold mb-2">Character Sets</p>

          <label className="flex items-center gap-2 mb-1">
            <input type="checkbox" className="accent-purple-400" /> a–z
          </label>
          <label className="flex items-center gap-2 mb-1">
            <input type="checkbox" className="accent-purple-400" /> A–Z
          </label>
          <label className="flex items-center gap-2 mb-1">
            <input type="checkbox" className="accent-purple-400" /> 0–9
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-purple-400" /> Symbols
          </label>
        </div>
      </div>

      {/* Strength */}
      <div className="mt-6 bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-lg">
        <div className="flex justify-between mb-2 text-sm">
          <p>Strength: Good</p>
          <p>Score 6/8</p>
        </div>

        <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden">
          <div className="bg-yellow-400 h-full w-[60%] rounded-full"></div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-between">
        <button className="flex-1 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl text-white font-semibold shadow-lg hover:scale-[1.02] transition">
          Generate Password
        </button>

        <button className="ml-3 px-6 py-3 bg-gray-300/60 text-gray-900 rounded-xl shadow-md backdrop-blur-md hover:bg-gray-300">
          Reset
        </button>
      </div>
    </div>

  </div>
)

}

export default App
