import { useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const handleCopy=()=>{
    navigator.clipboard.writeText(quote);
  }

  const handleGenerate = async () => {
    const result = await axios.get("https://api.api-ninjas.com/v2/randomquotes", {
      headers: {
        "X-Api-Key": "7oJPS6u0cxuoXeB53yTWbg==LAlDhUijPbrEk4Nq"
      }
    });
    setAuthor(result.data[0].author);
    setQuote(result.data[0].quote);
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 p-5">
      
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-xl text-center border border-gray-200">
        <h1 className="font-extrabold text-4xl mb-3 text-purple-700 drop-shadow">
          Daily Inspiration
        </h1>
        <p className="text-gray-600 mb-6">
          Discover wisdom from great minds ✨
        </p>

        <div className="bg-gray-100 rounded-xl p-5 shadow-inner mb-5">
          <p className="text-xl font-medium text-gray-800 italic leading-relaxed">
            "{quote || "Click the button below to generate a quote"}"
          </p>
          {author && (
            <p className="mt-3 text-right font-semibold text-purple-600">
              — {author}
            </p>
          )}
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button className="px-6 py-2 rounded-xl shadow-md bg-gray-300 hover:bg-gray-400 transition font-semibold" onClick={handleCopy}>
            Copy
          </button>

          <button 
            onClick={handleGenerate}
            className="px-6 py-2 rounded-xl shadow-md bg-purple-600 text-white hover:bg-purple-700 transition font-bold"
          >
            New Quote
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
