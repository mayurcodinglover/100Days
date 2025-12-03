import { useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [joke, setJoke] = useState("Click the button to get a random joke!");

  const handleCreateJoke = async () => {
    try {
      const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
      console.log(res.data);
      setJoke(`${res.data.setup} — ${res.data.punchline}`);
    } catch (error) {
      console.log(error);
      setJoke("Error fetching joke, please try again!");
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(joke);
    alert("Joke copied to clipboard!");
  }

  return (
    <>
      <div className="min-h-screen bg-gray-900 flex justify-center items-center">
        <div className="w-[450px] bg-gray-800 text-white rounded-2xl shadow-xl p-6 flex flex-col gap-6 items-center text-center">
          <h1 className="text-3xl font-bold">😂 Random Joke Generator</h1>

          <div className="bg-gray-700 p-4 rounded-lg shadow-md min-h-[100px] flex items-center justify-center text-lg">
            {joke}
          </div>

          <div className="flex gap-6">
            <button
              onClick={handleCreateJoke}
              className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all"
            >
              New Joke
            </button>

            <button
              onClick={handleCopy}
              className="px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition-all"
            >
              Copy Joke
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
