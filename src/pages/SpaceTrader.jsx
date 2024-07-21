import React, { useState } from 'react';

const planets = [
  { name: 'Earth', resources: { food: 50, minerals: 20, tech: 30 }, prices: { food: 5, minerals: 10, tech: 20 } },
  { name: 'Mars', resources: { food: 30, minerals: 50, tech: 20 }, prices: { food: 6, minerals: 8, tech: 25 } },
  { name: 'Jupiter', resources: { food: 20, minerals: 30, tech: 50 }, prices: { food: 7, minerals: 12, tech: 15 } },
];

const initialPlayer = {
  location: 'Earth',
  credits: 1000,
  cargo: { food: 0, minerals: 0, tech: 0 },
  cargoCapacity: 100,
};

const SpaceTrader = () => {
  const [player, setPlayer] = useState(initialPlayer);
  const [selectedResource, setSelectedResource] = useState('food');
  const [quantity, setQuantity] = useState(1);

  const currentPlanet = planets.find(planet => planet.name === player.location);

  const handleTravel = (destination) => {
    setPlayer({ ...player, location: destination });
  };

  const handleTrade = (type) => {
    const price = currentPlanet.prices[selectedResource];
    const totalCost = price * quantity;
    const newCargo = { ...player.cargo, [selectedResource]: player.cargo[selectedResource] + (type === 'buy' ? quantity : -quantity) };

    if (type === 'buy' && player.credits >= totalCost && newCargo[selectedResource] <= player.cargoCapacity) {
      setPlayer({ ...player, credits: player.credits - totalCost, cargo: newCargo });
    } else if (type === 'sell' && player.cargo[selectedResource] >= quantity) {
      setPlayer({ ...player, credits: player.credits + totalCost, cargo: newCargo });
    }
  };

  return (
    <div className=" text-white p-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Space Trader</h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Instructions</h2>
        <p className="mb-4">
          Welcome to Space Trader! You are a trader traveling between planets to buy and sell resources.
          Your goal is to maximize your credits by taking advantage of price differences between planets.
          You can travel between Earth, Mars, and Jupiter. Good luck!
        </p>
        <h2 className="text-2xl font-bold mb-4">Current Location: {player.location}</h2>
        <h2 className="text-2xl font-bold mb-4">Credits: {player.credits}</h2>
        <h2 className="text-2xl font-bold mb-4">Cargo Capacity: {Object.values(player.cargo).reduce((a, b) => a + b)} / {player.cargoCapacity}</h2>
        <div className="mb-4">
          <label className="block mb-2">Select Resource</label>
          <select value={selectedResource} onChange={(e) => setSelectedResource(e.target.value)} className="bg-gray-700 p-2 rounded w-full">
            {Object.keys(currentPlanet.resources).map(resource => (
              <option key={resource} value={resource}>{resource}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="bg-gray-700 p-2 rounded w-full"
          />
        </div>
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => handleTrade('buy')}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Buy
          </button>
          <button
            onClick={() => handleTrade('sell')}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Sell
          </button>
        </div>
        <div className="flex space-x-4">
          {planets.filter(planet => planet.name !== player.location).map(planet => (
            <button
              key={planet.name}
              onClick={() => handleTravel(planet.name)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Travel to {planet.name}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Cargo</h2>
        <ul>
          {Object.keys(player.cargo).map(resource => (
            <li key={resource}>{resource}: {player.cargo[resource]}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpaceTrader;
