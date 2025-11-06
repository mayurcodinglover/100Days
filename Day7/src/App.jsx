import { useState } from 'react'

function App() {
  const [celsius, setCelsius] = useState("-");
  const [fahrenheit, setFahrenheit] = useState("-");
  const [kelvin, setKelvin] = useState("-");
  const [value, setValue] = useState(0);
  const [temprature, setTemprature] = useState("c");

  const convert = (value, temprature) => {
    const newvalue = Number(value);
    if (temprature === "c") {
      setCelsius(newvalue);
      setFahrenheit(((newvalue * 9 / 5) + 32).toFixed(2));
      setKelvin((newvalue + 273.15).toFixed(2));
    }
    else if (temprature === "f") {
      setFahrenheit(newvalue);
      setCelsius(((newvalue - 32) * 5 / 9).toFixed(2));
      setKelvin(((newvalue - 32) * 5 / 9 + 273.15).toFixed(2));
    }
    else {
      setKelvin(newvalue);
      setCelsius((newvalue - 273.15).toFixed(2));
      setFahrenheit(((newvalue - 273.15) * 9 / 5 + 32).toFixed(2));
    }
  }

  const reset = () => {
    setCelsius("-");
    setFahrenheit("-");
    setKelvin("-");
    setValue(0);
    setTemprature("c");
  }

  const handlevalueChange = (e) => {
    const newvalue = e.target.value;
    setValue(newvalue);
    convert(newvalue, temprature);
  }

  const handletemp = (e) => {
    const newtemp = e.target.value;
    setTemprature(newtemp);
    convert(value, newtemp);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Temperature Converter</h1>
          <p className="text-gray-600">Convert between Celsius, Fahrenheit & Kelvin</p>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 mb-8 shadow-lg">
          <label className="block text-white text-sm font-semibold mb-3">
            Enter Temperature Value
          </label>
          <div className="flex gap-3 mb-4">
            <input
              type="number"
              value={value}
              onChange={handlevalueChange}
              className="flex-1 px-4 py-3 rounded-lg border-2 border-white/30 bg-white/90 text-gray-800 text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
              placeholder="0"
            />
            <select
              value={temprature}
              onChange={handletemp}
              className="px-6 py-3 rounded-lg border-2 border-white/30 bg-white/90 text-gray-800 font-semibold text-lg focus:outline-none focus:ring-4 focus:ring-white/50 cursor-pointer transition-all"
            >
              <option value="c">°C</option>
              <option value="f">°F</option>
              <option value="k">K</option>
            </select>
          </div>
          <button
            onClick={reset}
            className="w-full bg-white text-indigo-600 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
          >
            Reset
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Converted Results</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-5 border-2 border-red-200 hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-xl font-bold text-gray-800">Celsius</h3>
                <p className="text-sm text-gray-600">Degrees Celsius (°C)</p>
              </div>
              <div className="text-right">
                <h2 className="text-3xl font-bold text-red-600">{celsius}</h2>
                <p className="text-sm font-semibold text-gray-600">°C</p>
              </div>
            </div>

            <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 border-2 border-blue-200 hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-xl font-bold text-gray-800">Fahrenheit</h3>
                <p className="text-sm text-gray-600">Degrees Fahrenheit (°F)</p>
              </div>
              <div className="text-right">
                <h2 className="text-3xl font-bold text-blue-600">{fahrenheit}</h2>
                <p className="text-sm font-semibold text-gray-600">°F</p>
              </div>
            </div>

            <div className="flex items-center justify-between bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-5 border-2 border-purple-200 hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-xl font-bold text-gray-800">Kelvin</h3>
                <p className="text-sm text-gray-600">Kelvin scale (K)</p>
              </div>
              <div className="text-right">
                <h2 className="text-3xl font-bold text-purple-600">{kelvin}</h2>
                <p className="text-sm font-semibold text-gray-600">K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App