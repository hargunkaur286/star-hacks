import React, { useState } from 'react';

const spaceFacts = [
  {
    question: "What is the closest planet to the Sun?",
    options: ["Earth", "Mars", "Mercury", "Venus"],
    answer: "Mercury"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Saturn", "Jupiter", "Neptune", "Earth"],
    answer: "Jupiter"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "What planet is famous for its big red spot?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter"
  },
  {
    question: "Which planet is known as the Earth's Twin?",
    options: ["Venus", "Mars", "Mercury", "Neptune"],
    answer: "Venus"
  }
];

const SpaceQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === spaceFacts[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < spaceFacts.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className=" text-white p-4 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Space Quiz</h1>
      {showScore ? (
        <div className="text-center">
          <h2 className="text-3xl mb-4">You scored {score} out of {spaceFacts.length}</h2>
          <button
            onClick={handleRestartQuiz}
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-500 hover:via-pink-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">{spaceFacts[currentQuestionIndex].question}</h2>
          </div>
          <div className="flex flex-col gap-4">
            {spaceFacts[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option)}
                className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 hover:from-green-500 hover:via-blue-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SpaceQuiz;
