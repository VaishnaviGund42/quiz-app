import { useState } from "react";

const questionsData = [
  {
    id: 1,
    question: "What does JVM stand for?",
    options: [
      "Java Variable Machine",
      "Java Virtual Machine",
      "Java Verified Method",
      "Joint Virtual Method"
    ],
    answer: "Java Virtual Machine"
  },
  {
    id: 2,
    question: "Which hook is used to manage state in React?",
    options: ["useEffect", "useState", "useRef", "useContext"],
    answer: "useState"
  },
  {
    id: 3,
    question: "Which database is commonly used with Node.js?",
    options: ["MySQL", "Oracle", "MongoDB", "All of the above"],
    answer: "All of the above"
  },
  {
    id: 4,
    question: "Which method is used to render lists in React?",
    options: ["forEach()", "map()", "filter()", "reduce()"],
    answer: "map()"
  },
  {
    id: 5,
    question: "Which CSS property is used for responsive design?",
    options: ["position", "float", "media queries", "z-index"],
    answer: "media queries"
  }
];


function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

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
    <div className="quiz-container">
      <h1>Java & Web Development Quiz</h1>

      {showResult ? (
        <div>
          <h2>Your Score: {score} / {questionsData.length}</h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h3>
            Question {currentQuestion + 1} / {questionsData.length}
          </h3>
          <p>{questionsData[currentQuestion].question}</p>

          {questionsData[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Quiz;