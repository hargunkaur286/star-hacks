import React from 'react';
import { Link } from 'react-router-dom';

const Games = () => {
  return (
    <div className=" text-white p-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Games</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105">
          <h2 className="text-2xl font-bold mb-4">Space Quiz</h2>
          <p className="mb-4">Test your knowledge about space with this fun quiz game.</p>
          <Link to="/quiz" className="bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded">
            Play Space Quiz
          </Link>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105">
          <h2 className="text-2xl font-bold mb-4">Guess the Planet</h2>
          <p className="mb-4">Can you identify the planet based on the image? Give it a try!</p>
          <Link to="/guess-planet" className="bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded">
            Play Guess the Planet
          </Link>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105">
          <h2 className="text-2xl font-bold mb-4">Planetary Defender</h2>
          <p className="mb-4">Defend your planet from incoming asteroids in this action game.</p>
          <Link to="/planetary-defender" className="bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded">
            Play Planetary Defender
          </Link>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105">
          <h2 className="text-2xl font-bold mb-4">Space Trader</h2>
          <p className="mb-4">Trade resources between planets and become the richest trader in the galaxy.</p>
          <Link to="/space-trader" className="bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded">
            Play Space Trader
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Games;
