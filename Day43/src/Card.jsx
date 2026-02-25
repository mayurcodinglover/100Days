import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Card = ({ title, description, tag, date, author }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`rounded-2xl mt-10 shadow-lg overflow-hidden w-72 transition-all duration-300 
        ${theme === "dark" ? "bg-gray-800 text-white shadow-gray-700" : "bg-white text-gray-800 shadow-gray-300"}`}
    >
      {/* Card Top Banner (instead of image) */}
      <div
        className={`p-4 ${theme === "dark" ? "bg-blue-900" : "bg-blue-100"}`}
      >
        <span
          className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full
            ${theme === "dark" ? "bg-blue-500 text-white" : "bg-blue-600 text-white"}`}
        >
          {tag || "Technology"}
        </span>
        <p className={`mt-3 text-sm italic ${theme === "dark" ? "text-blue-200" : "text-blue-700"}`}>
          {date || "February 25, 2026"}
        </p>
      </div>

      {/* Card Body */}
      <div className="p-5">
        <h2 className="text-xl font-bold mb-2">{title || "Card Title"}</h2>
        <p className={`text-sm leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-500"}`}>
          {description || "This is a sample description for the card component. It supports dark and light mode using React Context API."}
        </p>

        {/* Author */}
        <div className={`mt-4 flex items-center gap-2 text-sm font-medium ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white
            ${theme === "dark" ? "bg-blue-500" : "bg-blue-600"}`}>
            {author ? author[0].toUpperCase() : "A"}
          </div>
          {author || "Anonymous"}
        </div>

        {/* Card Button */}
        <button
          className={`mt-4 w-full py-2 rounded-lg font-semibold transition-colors duration-200
            ${theme === "dark" ? "bg-blue-500 hover:bg-blue-400 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;