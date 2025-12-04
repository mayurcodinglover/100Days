import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-10 text-center">
        Responsive Design Understanding
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        <div className="bg-white shadow-md hover:shadow-xl transition-all p-6 rounded-2xl text-center text-lg font-semibold text-indigo-600">
          Card 1
        </div>

        <div className="bg-white shadow-md hover:shadow-xl transition-all p-6 rounded-2xl text-center text-lg font-semibold text-indigo-600">
          Card 2
        </div>

        <div className="bg-white shadow-md hover:shadow-xl transition-all p-6 rounded-2xl text-center text-lg font-semibold text-indigo-600">
          Card 3
        </div>

        <div className="bg-white shadow-md hover:shadow-xl transition-all p-6 rounded-2xl text-center text-lg font-semibold text-indigo-600">
          Card 4
        </div>
      </div>
    </div>
  )
}

export default App
