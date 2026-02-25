import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Header=()=>{
    const {theme,toggleTheme}=useContext(ThemeContext);
    return (
        <header className={`p-4 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}>
            <h1 className="text-2xl font-bold">Dark Theme Demo</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={toggleTheme}>Toggle Theme</button>
        </header>
    )
}
export default Header;