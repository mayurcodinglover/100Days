import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState("metric");
  const [BMI, setBMI] = useState(0);
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [category, setcategory] = useState("");
  const handleBMI=()=>{
    if(active==="metric")
    {
      setBMI(
  Number(
    (Math.floor((weight / ((height / 100) * (height / 100))) * 100) / 100)
      .toFixed(2)
  )
);

    }
    else{
      setBMI(
  Number(
    (Math.floor(((weight * 703) / (height * height)) * 10) / 10)
      .toFixed(1)
  )
);

    }
  }
  const getCategory=()=>{
    if(BMI==0)
    {
      setcategory("");
      return;
    }
    if(BMI<18.5)
    {
      setcategory("underweight");
    }
    else if(BMI<24.9)
    {
      setcategory("normal");
    }
    else if(BMI<29.9)
    {
      setcategory("overweight");
    }
    else{
      setcategory("obesity");
    }
  }
  useEffect(() => {
    
    getCategory();
  }, [BMI]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-300 flex justify-center items-center p-5">

      {/* Main Layout */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 justify-center items-start">

        {/* Left Card */}
        <div className="bg-white shadow-xl rounded-2xl w-full md:w-[40%] p-8">
          <h1 className="text-center font-extrabold text-4xl text-gray-800">
            BMI Calculator
          </h1>
          <p className="text-center text-gray-500 mt-2">
            Track your Body Mass Index
          </p>

          {/* Toggle Buttons */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={() => setActive("metric")}
              className={`px-6 py-2 rounded-lg text-lg font-medium shadow transition 
              ${
                active === "metric"
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Metric
            </button>

            <button
              onClick={() => setActive("imperial")}
              className={`px-6 py-2 rounded-lg text-lg font-medium shadow transition 
              ${
                active === "imperial"
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Imperial
            </button>
          </div>

          {/* Weight Input */}
          <div className="mt-8">
            <label className="text-left font-semibold text-gray-600 ml-1">
              Weight ({active === "metric" ? "kg" : "lbs"})
            </label>
            <input
              type="number"
              value={weight}
              className="w-full p-3 mt-1 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              onChange={(e)=>setweight(e.target.value)}
            />
          </div>

          {/* Height Input */}
          <div className="mt-6">
            <label className="text-left font-semibold text-gray-600 ml-1">
              Height ({active === "metric" ? "cm" : "in"})
            </label>
            <input
              type="number"
              value={height}
              className="w-full p-3 mt-1 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              onChange={(e)=>setheight(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-between">
            <button className="w-[60%] bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl shadow-lg text-lg font-semibold transition" onClick={handleBMI}>
              Calculate BMI
            </button>

            <button className="w-[30%] bg-red-400 hover:bg-red-500 text-white py-3 rounded-xl shadow-lg text-lg font-semibold transition">
              Reset
            </button>
          </div>
        </div>

        {/* Right Side – BMI Result */}
        <div className="bg-white w-full md:w-[50%] shadow-xl rounded-2xl p-8 text-center">
          <p className="text-gray-600 text-lg font-medium">Your BMI Score</p>

          <h1 className="text-6xl font-bold text-gray-800 mt-3">{BMI}</h1>

          {/* Status Badge */}
          <div className="flex justify-center items-center">
            <div className={`w-48 h-12 text-center font-semibold flex justify-center items-center 
rounded-full shadow mt-5
${category === "underweight" ? "bg-yellow-200 text-yellow-700" : ""}
${category === "normal" ? "bg-green-200 text-green-700" : ""}
${category === "overweight" ? "bg-orange-200 text-orange-700" : ""}
${category === "obesity" ? "bg-red-200 text-red-700" : ""}
`}>
  {category ? category.toUpperCase() : "No Result"}
</div>

          </div>

          {/* Categories */}
          <p className="mt-8 font-semibold text-gray-700 text-xl">
            BMI Categories
          </p>

          <div className="flex justify-center items-center mt-5 gap-8 text-gray-700">
            <div className={`bg-gray-100 p-4 rounded-xl shadow-md w-32 ${category==="underweight" ? "bg-green-200" : ""}`}>
              <p className="font-semibold">Underweight</p>
              <p className="text-sm">&lt; 18.5</p>
            </div>

            <div className={`bg-gray-100 p-4 rounded-xl shadow-md w-32 ${category==="normal" ? "bg-green-200" : ""}`}>
              <p className="font-semibold">Normal</p>
              <p className="text-sm">18.5 - 24.9</p>
            </div>
          </div>

          <div className="flex justify-center items-center mt-4 gap-8 text-gray-700">
            <div className={`bg-gray-100 p-4 rounded-xl shadow-md w-32 ${category==="overweight" ? "bg-green-200" : ""}`}>
              <p className="font-semibold">Overweight</p>
              <p className="text-sm">25 - 29.9</p>
            </div>

            <div className={`bg-gray-100 p-4 rounded-xl shadow-md w-32 ${category==="obesity" ? "bg-green-200" : ""}`}>
              <p className="font-semibold">Obesity</p>
              <p className="text-sm">&gt;= 30</p>
            </div>
          </div>

          <p className="mt-6 text-gray-500">
            Enter your details above to calculate BMI
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
