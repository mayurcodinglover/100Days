import { useState } from "react";
import "./App.css";

function App() {
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [questions, setQuestions] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  const handleSave = () => {
    if (newQuestion.trim() === "" || newAnswer.trim() === "") return;
    setQuestions([...questions, { question: newQuestion, answer: newAnswer }]);
    setNewQuestion("");
    setNewAnswer("");
  };

  const handleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center p-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2 drop-shadow-lg">
          FAQ Accordion Builder
        </h1>
        <p className="text-gray-600 text-lg mb-10 max-w-xl text-center">
          Create beautiful, interactive FAQ sections with ease using this builder.
        </p>

        {/* Input section */}
        <div className="bg-white shadow-2xl rounded-2xl p-6 w-[75%] mb-10 border border-gray-100">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">
            + Add New FAQ Item
          </h2>
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="w-full md:w-1/2">
              <p className="font-medium mb-1 text-gray-700">Question</p>
              <input
                type="text"
                placeholder="Enter your question..."
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
              />
            </div>

            <div className="w-full md:w-1/2">
              <p className="font-medium mb-1 text-gray-700">Answer</p>
              <textarea
                rows="3"
                placeholder="Enter your answer here..."
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="text-right mt-6">
            <button
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
              onClick={handleSave}
            >
              + Add FAQ Item
            </button>
          </div>
        </div>

        {/* FAQ Display Section */}
        <div className="w-[75%] flex flex-col gap-4">
          {questions.length === 0 ? (
            <p className="text-gray-500 italic text-center">
              No FAQ items yet. Add your first one above! 💡
            </p>
          ) : (
            questions.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-5 border border-gray-100 transition-all duration-300 hover:shadow-2xl"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleAnswer(index)}
                >
                  <p className="font-semibold text-gray-800 text-lg">
                    {index + 1}. {item.question}
                  </p>
                  <button className="text-blue-600 text-2xl font-bold transform transition-transform duration-300">
                    {openIndex === index ? "▲" : "▼"}
                  </button>
                </div>

                {/* Animated Answer Section */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="bg-blue-50 p-4 mt-2 rounded-md text-gray-700 border-l-4 border-blue-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default App;
