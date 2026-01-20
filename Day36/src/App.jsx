import { useState, useEffect } from 'react';
import { Bomb, Timer, CheckCircle, XCircle, Trophy, RotateCcw } from 'lucide-react';

function App() {
  const [count, setCount] = useState(1);
  const [select, setSelect] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [answer, setAnswer] = useState("");
  const [time, setTime] = useState(15);
  const [score, setScore] = useState(0);
  
  const quizQuestions = [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Tool Markup Language",
        "Home Text Markup Language"
      ],
      answer: "Hyper Text Markup Language"
    },
    {
      id: 2,
      question: "Which language is used for styling web pages?",
      options: ["HTML", "JQuery", "CSS", "XML"],
      answer: "CSS"
    },
    {
      id: 3,
      question: "Which JavaScript method is used to add an element at the end of an array?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      answer: "push()"
    },
    {
      id: 4,
      question: "Which framework is used for building UI components?",
      options: ["Laravel", "Django", "React", "Spring"],
      answer: "React"
    },
    {
      id: 5,
      question: "Which keyword is used to declare a constant in JavaScript?",
      options: ["var", "let", "const", "static"],
      answer: "const"
    }
  ];

  const progress = (count / quizQuestions.length) * 100;

  const handleNext = () => {
    const currentQuestion = quizQuestions[count - 1];
    
    if (currentQuestion.answer === answer) {
      setScore(score + 1);
    }
    
    setSelect(false);
    setAnswer("");
    setTime(15);
    
    if (count < quizQuestions.length) {
      setCount(count + 1);
    } else {
      setSubmit(true);
    }
  };

  const handleClick = (op) => {
    setSelect(true);
    setAnswer(op);
  };

  const handleRestart = () => {
    setCount(1);
    setSelect(false);
    setSubmit(false);
    setAnswer("");
    setTime(15);
    setScore(0);
  };

  useEffect(() => {
    if (submit) return;
    if (time === 0) {
      handleNext();
      return;
    }
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time, submit]);

  if (submit) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center transform transition-all">
          <div className="mb-6">
            <Trophy className="w-24 h-24 mx-auto text-yellow-500 animate-bounce" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Quiz Complete!</h1>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6 mb-6">
            <p className="text-5xl font-bold mb-2">{score}/{quizQuestions.length}</p>
            <p className="text-lg">Final Score</p>
          </div>
          <p className="text-gray-600 mb-6">
            {score === quizQuestions.length 
              ? "Perfect! You're a quiz master! 🎉" 
              : score >= quizQuestions.length * 0.7 
              ? "Great job! Keep it up! 👏" 
              : "Good effort! Try again to improve! 💪"}
          </p>
          <button
            onClick={handleRestart}
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
          >
            <RotateCcw size={20} />
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Bomb className="w-8 h-8 animate-pulse" />
              <h1 className="text-2xl font-bold">Quiz Challenge</h1>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur">
              <Timer className={`w-5 h-5 ${time <= 5 ? 'animate-pulse text-red-300' : ''}`} />
              <p className={`text-lg font-bold ${time <= 5 ? 'text-red-300' : ''}`}>{time}s</p>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="p-6 bg-gray-50">
          <div className="flex justify-between items-center mb-3">
            <p className="text-sm font-semibold text-gray-600">Progress</p>
            <p className="text-sm font-bold text-blue-600">{count}/{quizQuestions.length}</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-500 ease-out shadow-lg"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 flex justify-between items-center">
            <p className="text-sm text-gray-600">Current Score</p>
            <p className="text-lg font-bold text-purple-600">{score} points</p>
          </div>
        </div>

        {/* Question Section */}
        <div className="p-8">
          {quizQuestions
            .filter((q) => q.id === count)
            .map((q) => (
              <div key={q.id}>
                <div className="mb-6">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Question {count}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800 leading-relaxed">
                    {q.question}
                  </h2>
                </div>

                <div className="space-y-3">
                  {q.options.map((op, index) => (
                    <button
                      key={index}
                      onClick={() => handleClick(op)}
                      disabled={select}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all transform hover:scale-102 ${
                        answer === op
                          ? 'border-blue-500 bg-blue-50 shadow-lg scale-102'
                          : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                      } ${select ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-medium ${answer === op ? 'text-blue-700' : 'text-gray-700'}`}>
                          {op}
                        </span>
                        {answer === op && (
                          <CheckCircle className="w-5 h-5 text-blue-600" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}

          {select && (
            <button
              onClick={handleNext}
              className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              {count === quizQuestions.length ? "Submit Quiz" : "Next Question →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;