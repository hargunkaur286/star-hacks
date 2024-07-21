import React, { useState } from 'react';
import mercury from '../assets/mercury.png';
import venus from '../assets/venus.png';
import earth from '../assets/earth.png';
import mars from '../assets/mars.png';
import jupiter from '../assets/jupiter.png';
import saturn from '../assets/saturn.png';
import uranus from '../assets/uranus.png';
import neptune from '../assets/neptune.png';

const planetFacts = [
  {
    name: "Mercury",
    image: mercury,
    options: ["Mercury", "Venus", "Earth", "Mars"],
    answer: "Mercury"
  },
  {
    name: "Venus",
    image: venus,
    options: ["Jupiter", "Venus", "Mars", "Saturn"],
    answer: "Venus"
  },
  {
    name: "Earth",
    image: earth,
    options: ["Earth", "Mars", "Venus", "Uranus"],
    answer: "Earth"
  },
  {
    name: "Mars",
    image: mars,
    options: ["Saturn", "Neptune", "Mars", "Earth"],
    answer: "Mars"
  },
  {
    name: "Jupiter",
    image: jupiter,
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: "Jupiter"
  },
  {
    name: "Saturn",
    image: saturn,
    options: ["Mars", "Earth", "Saturn", "Venus"],
    answer: "Saturn"
  },
  {
    name: "Uranus",
    image: uranus,
    options: ["Neptune", "Uranus", "Jupiter", "Earth"],
    answer: "Uranus"
  },
  {
    name: "Neptune",
    image: neptune,
    options: ["Venus", "Mars", "Neptune", "Mercury"],
    answer: "Neptune"
  }
];

const GuessThePlanet = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === planetFacts[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < planetFacts.length) {
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
      <h1 className="text-4xl font-bold mb-8">Guess the Planet</h1>
      {showScore ? (
        <div className="text-center">
          <h2 className="text-3xl mb-4">You scored {score} out of {planetFacts.length}</h2>
          <button
            onClick={handleRestartQuiz}
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-500 hover:via-pink-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Restart Game
          </button>
        </div>
      ) : (
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <img src={planetFacts[currentQuestionIndex].image} alt={planetFacts[currentQuestionIndex].name} className="w-full h-full object-cover mb-4 rounded" />
            <h2 className="text-2xl font-bold">Which planet is this?</h2>
          </div>
          <div className="flex flex-col gap-4">
            {planetFacts[currentQuestionIndex].options.map((option, index) => (
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

export default GuessThePlanet;
