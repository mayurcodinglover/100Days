import { useState } from "react";
import "./App.css";

function App() {
  const [billAmount, setbillAmount] = useState(0);
  const [tip, settip] = useState(0);
  const [customtip, setcustomtip] = useState(0);
  const [tipAmount, settipAmount] = useState(0);
  const [people, setpeople] = useState(0);
  const [divideAmount, setdivideAmount] = useState(0);
  const [totalBillAmount, settotalBillAmount] = useState(0);

  const handleClick=(e)=>{
    const value=Number(e.target.value);
    settip(value);
    settipAmount((billAmount*value)/100);
    settotalBillAmount(Number(billAmount)+(Number(billAmount*value)/100));
  }
  const handlePersonDivide=(e)=>{
    const value=e.target.value;
    setpeople(value);
    setdivideAmount(Number(totalBillAmount)/value);
  }
  const handleReset=()=>{
    setbillAmount(0);
    settip(0);
    settipAmount(0);
    setpeople(0);
    setdivideAmount(0);
    settotalBillAmount(0);
  }

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-200 to-purple-200 p-6">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-5xl flex gap-12">
          {/* LEFT CARD */}
          <div className="w-[50%]">
            <h1 className="text-3xl font-extrabold mb-6 text-purple-700">
              Tip Calculator
            </h1>

            {/* Bill */}
            <div className="mb-6">
              <label className="block font-semibold text-gray-700 mb-1">
                Bill Amount
              </label>
              <input
                type="number"
                name="amount"
                id="amount"
                value={billAmount}
                className="w-full border rounded-lg p-3 shadow-sm outline-purple-500"
                placeholder="Enter bill amount"
                onChange={(e) => setbillAmount(e.target.value)}
              />
            </div>

            {/* Tip Percentage */}
            <div className="mb-6">
              <label
                htmlFor="percentage"
                className="block font-semibold text-gray-700"
              >
                Tip Percentage
              </label>

              <div className="grid grid-cols-4 gap-3 mt-3">
                <button
                  className={`w-full  p-3 rounded-lg hover:bg-blue-800 transition font-semibold shadow-sm 
    ${tip === 5 ? "bg-blue-800 text-white" : ""}`}
                  value="5"
                  onClick={handleClick}
                >
                  5%
                </button>

                <button
                  className={`w-full  p-3 rounded-lg hover:bg-blue-800 transition font-semibold shadow-sm 
    ${tip === 10 ? "bg-blue-800 text-white" : ""}`}
                  value="10"
                  onClick={handleClick}
                >
                  10%
                </button>

                <button
                  className={`w-full  p-3 rounded-lg hover:bg-blue-800 transition font-semibold shadow-sm 
    ${tip === 15 ? "bg-blue-800 text-white" : ""}`}
                  value="15"
                  onClick={handleClick}
                >
                  15%
                </button>

                <button
                  className={`w-full  p-3 rounded-lg hover:bg-blue-800 transition font-semibold shadow-sm 
    ${tip === 20 ? "bg-blue-800 text-white" : ""}`}
                  value="20"
                  onClick={handleClick}
                >
                  20%
                </button>
              </div>
            </div>

            {/* Custom Tip */}
            <div className="mb-6">
              <label
                htmlFor="custom"
                className="block font-semibold text-gray-700 mb-1"
              >
                Custom Tip
              </label>

              <div className="flex items-center gap-2">
                <input
                  type="number"
                  name="custom"
                  id="custom"
                  value={tip}
                  onChange={handleClick}
                  className="border rounded-lg p-3 shadow-sm w-24 outline-purple-500"
                  placeholder="0"
                />
                <span className="text-xl font-bold text-gray-700">%</span>
              </div>
            </div>

            {/* People */}
            <div className="mb-6">
              <label
                htmlFor="people"
                className="block font-semibold text-gray-700 mb-1"
              >
                Number of People
              </label>
              <input
                type="number"
                value={people}
                className="w-full border rounded-lg p-3 shadow-sm outline-purple-500"
                placeholder="Enter number of people"
                onChange={handlePersonDivide}
              />
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="w-[50%] bg-gray-100 rounded-2xl p-6 shadow-inner">
            <div className="flex justify-end">
              <button className="bg-red-500 text-white px-5 py-2 rounded-md font-bold hover:bg-red-600 transition" onClick={handleReset}>
                Reset
              </button>
            </div>

            <h1 className="text-center text-2xl font-bold text-purple-700 my-4">
              Bill Summary
            </h1>

            <div className="space-y-4">
              <div className="flex justify-between bg-white p-3 rounded-md shadow-sm">
                <p className="font-semibold">Bill Amount</p>
                <p className="font-bold text-gray-700">{billAmount}</p>
              </div>

              <div className="flex justify-between bg-white p-3 rounded-md shadow-sm">
                <p className="font-semibold">Tip Amount ({tip}%)</p>
                <p className="font-bold text-gray-700">{tipAmount}</p>
              </div>

              <div className="flex justify-between bg-white p-3 rounded-md shadow-sm">
                <p className="font-semibold">Total Amount</p>
                <p className="font-bold text-gray-700">{totalBillAmount}</p>
              </div>

              <div className="flex justify-between bg-white p-3 rounded-md shadow-sm">
                <p className="font-semibold">Per Person</p>
                <p className="font-bold text-gray-700">{divideAmount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
