import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Home from './Home'
import About from './About'
import Contact from './Contact'

function App() {

  const [current, setcurrent] = useState("home");

  return (
    <>
      <div className="flex flex-col items-center w-full mt-10">

        {/* TAB NAV */}
        <div className="w-[80%] border-b border-gray-300 flex gap-10 px-4">

          <Link
            to="/"
            onClick={() => setcurrent("home")}
            className={`py-3 font-medium transition relative
              ${current === "home" ? "text-blue-600" : "text-gray-600 hover:text-black"}`}
          >
            Home

            {/* Bottom Border Active */}
            {current === "home" && (
              <span className="absolute left-0 bottom-0 w-full h-[3px] bg-blue-600 rounded-full"></span>
            )}
          </Link>

          <Link
            to="/about"
            onClick={() => setcurrent("about")}
            className={`py-3 font-medium transition relative
              ${current === "about" ? "text-blue-600" : "text-gray-600 hover:text-black"}`}
          >
            About

            {current === "about" && (
              <span className="absolute left-0 bottom-0 w-full h-[3px] bg-blue-600 rounded-full"></span>
            )}
          </Link>

          <Link
            to="/contact"
            onClick={() => setcurrent("contact")}
            className={`py-3 font-medium transition relative
              ${current === "contact" ? "text-blue-600" : "text-gray-600 hover:text-black"}`}
          >
            Contact

            {current === "contact" && (
              <span className="absolute left-0 bottom-0 w-full h-[3px] bg-blue-600 rounded-full"></span>
            )}
          </Link>

        </div>

        {/* TAB CONTENT BOX */}
        <div className="bg-white shadow-lg mt-6 w-[80%] p-6 rounded-xl border">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

      </div>
    </>
  )
}

export default App
