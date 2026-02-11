import { useState , useEffect} from "react";

import questionsData from "./data";


function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const [showResult, setShowResult] = useState(false);

  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem("score");
    return savedScore ? JSON.parse(savedScore) : 0;
  });
    useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questionsData[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questionsData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  

    return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
      
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 text-center">
        
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">
          Java & Web Development Quiz
        </h1>

        {showResult ? (
          <div className="space-y-6">
            
            <h2 className="text-2xl font-semibold text-gray-700">
              Your Score
            </h2>

            <p className="text-4xl font-bold text-green-600">
              {score} / {questionsData.length}
            </p>

            <p className="text-lg text-gray-500">
              {score >= 4 ? "Excellent Work! 🎉" : "Keep Practicing 💪"}
            </p>

            <button
              onClick={restartQuiz}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition duration-300"
            >
              Restart Quiz
            </button>

          </div>
        ) : (
          <div>
            
            <div className="flex justify-between text-sm text-gray-500 mb-4">
              <span>
                Question {currentQuestion + 1}
              </span>
              <span>
                {questionsData.length}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              {questionsData[currentQuestion].question}
            </h3>

            <div className="space-y-3">
              {questionsData[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  className="w-full border border-indigo-400 text-indigo-600 py-2 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-300"
                >
                  {option}
                </button>
              ))}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;