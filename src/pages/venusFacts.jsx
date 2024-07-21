import React from 'react';

const VenusFacts = () => {
  const facts = [
    {
      title: 'Second Planet from the Sun',
      description: 'Venus is the second planet from the Sun, orbiting at an average distance of about 67 million miles (108 million kilometers).',
    },
    {
      title: 'Hottest Planet',
      description: 'Venus is the hottest planet in the solar system, with surface temperatures around 900 degrees Fahrenheit (475 degrees Celsius).',
    },
    {
      title: 'Thick Atmosphere',
      description: 'Venus has a very thick atmosphere composed mainly of carbon dioxide, with clouds of sulfuric acid.',
    },
    {
      title: 'Similar Size to Earth',
      description: 'Venus has a diameter of about 7,520 miles (12,104 kilometers), making it similar in size to Earth.',
    },
    {
      title: 'Retrograde Rotation',
      description: 'Venus rotates in the opposite direction to most planets in the solar system, which means it has a retrograde rotation.',
    },
    {
      title: 'Slow Rotation',
      description: 'Venus has a very slow rotation, taking about 243 Earth days to complete one rotation on its axis.',
    },
    {
      title: 'No Moons',
      description: 'Venus does not have any moons.',
    },
    {
      title: 'Surface Pressure',
      description: 'The surface pressure on Venus is 92 times greater than that of Earth.',
    },
    {
      title: 'Brightest Planet',
      description: 'Venus is the brightest planet in the night sky, often visible to the naked eye.',
    },
  ];

  return (
    <div className="p-4 min-h-screen bg-[url('/path-to-your-background-image.jpg')] bg-cover bg-center text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Venus Facts</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="max-w-sm p-6 bg-white bg-opacity-90 border border-gray-200 rounded-lg shadow transform transition-transform hover:scale-105 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:bg-opacity-90"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{fact.title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{fact.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenusFacts;
