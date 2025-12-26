import { useState } from 'react'
import './App.css'
import Personal from './components/Personal'
import Address from './components/Address'
import Additional from './components/Additional'
import Review from './components/Review'

function App() {
  const [step, setStep] = useState(1)
  const totalSteps = 4
  const progressWidth = (step / totalSteps) * 100

  const stepTitle = {
    1: "Personal Details",
    2: "Address Details",
    3: "Additional Details",
    4: "Review & Submit",
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-[500px]">

        {/* Header */}
        <h1 className="text-2xl font-bold text-center mb-1">
          Registration Form
        </h1>
        <p className="text-center text-gray-500 mb-4">
          Step {step} of {totalSteps} – {stepTitle[step]}
        </p>

        {/* Step Numbers */}
        <div className="flex justify-between mb-2">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold
              ${step >= num ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"}`}
            >
              {num}
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${progressWidth}%` }}
          />
        </div>

        {/* Form Content */}
        <div className="mb-6">
          {step === 1 && <Personal />}
          {step === 2 && <Address />}
          {step === 3 && <Additional />}
          {step === 4 && <Review />}
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={() => setStep((s) => s - 1)}
            disabled={step === 1}
            className="px-4 py-2 rounded bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>

          <button
            onClick={() => setStep((s) => s + 1)}
            disabled={step === totalSteps}
            className="px-4 py-2 rounded bg-blue-500 text-white disabled:opacity-50"
          >
            {step === totalSteps ? "Submit" : "Next"}
          </button>
        </div>

      </div>
    </div>
  )
}

export default App
