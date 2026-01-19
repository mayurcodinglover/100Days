import { useState } from 'react';
import { Cloud, Droplets, Wind, Search, RotateCcw } from 'lucide-react';

function App() {
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const reset = () => {
    setCity("");
    setName("");
    setWeather("");
    setTemp(0);
    setHumidity(0);
    setWind(0);
    setError("");
  }

  const searchCity = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");
    
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9e984b1206d10cbf2cf7528908b67c0d&units=metric`);
      
      if (!res.ok) {
        throw new Error("City not found");
      }
      
      const data = await res.json();
      
      setName(data.name);
      setWeather(data.weather[0].main);
      setTemp(Math.round(data.main.feels_like));
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
    } catch (error) {
      setError(error.message || "Failed to fetch weather data");
      reset();
    } finally {
      setLoading(false);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchCity();
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Cloud className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Weather App</h1>
          <p className="text-gray-500 mt-2">Search for any city worldwide</p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter city name..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>

          <div className="flex gap-3">
            <button
              onClick={searchCity}
              disabled={loading}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Searching..." : "Search"}
            </button>
            <button
              onClick={reset}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-xl transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6">
            {error}
          </div>
        )}

        {name && !error && (
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 space-y-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800">{name}</h2>
              <p className="text-xl text-gray-600 mt-2">{weather}</p>
              <div className="text-6xl font-bold text-blue-600 my-4">
                {temp}°C
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blue-200">
              <div className="flex items-center gap-3 bg-white rounded-xl p-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Droplets className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Humidity</p>
                  <p className="text-xl font-semibold text-gray-800">{humidity}%</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white rounded-xl p-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Wind className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Wind</p>
                  <p className="text-xl font-semibold text-gray-800">{wind} m/s</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;