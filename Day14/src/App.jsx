import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center transition-all duration-300
      ${isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
    >
      <h1 className="m-2 p-2 text-3xl font-bold">Light / Dark Mode Toggle</h1>
      <p className="m-2 p-2 text-lg">Switch between light and dark themes</p>

      {/* Toggle Buttons */}
      <div
        className={`m-2 p-3 rounded-xl flex gap-4 shadow-md ${
          isDark ? "bg-gray-700" : "bg-white"
        }`}
      >
        <button
          className={`px-4 py-2 rounded-md font-semibold shadow ${
            isDark ? "bg-gray-500" : "bg-gray-300"
          }`}
          onClick={() => setIsDark(false)}
        >
          Light
        </button>

        <button
          className={`px-4 py-2 rounded-md font-semibold shadow ${
            isDark ? "bg-gray-300" : "bg-gray-500 text-white"
          }`}
          onClick={() => setIsDark(true)}
        >
          Dark
        </button>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center items-start w-[60%] gap-4 flex-wrap">
        <div
          className={`m-2 p-4 rounded-lg shadow-lg w-60 
          ${isDark ? "bg-gray-800 text-white" : "bg-white"} `}
        >
          <h2 className="text-xl font-semibold mb-2">Featured Card</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            repellendus quod voluptatibus praesentium.
          </p>
        </div>

        <div
          className={`m-2 p-4 rounded-lg shadow-lg w-60 
          ${isDark ? "bg-gray-800 text-white" : "bg-white"} `}
        >
          <h2 className="text-xl font-semibold mb-2">Another Card</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            tenetur sit autem nemo id minima.
          </p>
        </div>
      </div>

      {/* Interactive Section */}
      <div
        className={`shadow-lg rounded-lg m-4 p-4 w-[60%] 
        ${isDark ? "bg-gray-800" : "bg-white"}`}
      >
        <h1 className="text-2xl font-semibold mb-3">Interactive Elements</h1>

        <p className="font-medium">Button Example</p>
        <button className="m-2 p-2 bg-blue-600 rounded-md text-white shadow">
          Click me
        </button>

        <p className="mt-4 font-medium">Input Example</p>
        <input
          type="text"
          placeholder="Type something..."
          className={`w-full p-2 rounded-md border mt-2 
           ${isDark ? "bg-gray-700 text-white border-gray-500" : "bg-white"}`}
        />
      </div>
    </div>
  );
}

export default App;
