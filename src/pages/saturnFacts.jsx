import React from 'react';

const SaturnFacts = () => {
  const facts = [
    {
      title: 'Second Largest Planet',
      description: 'Saturn is the second largest planet in the solar system, with a diameter of about 72,367 miles (116,460 kilometers).',
    },
    {
      title: 'Gas Giant',
      description: 'Saturn is a gas giant, composed mainly of hydrogen and helium.',
    },
    {
      title: 'Ring System',
      description: 'Saturn is known for its prominent ring system, which is composed of ice and rock particles.',
    },
    {
      title: 'Many Moons',
      description: 'Saturn has at least 82 moons, including Titan, the second largest moon in the solar system.',
    },
    {
      title: 'Low Density',
      description: 'Saturn has a very low density; it would float if placed in a large enough body of water.',
    },
    {
      title: 'Fast Rotation',
      description: 'Saturn has a fast rotation, taking about 10.7 hours to complete one rotation on its axis.',
    },
    {
      title: 'Strong Magnetic Field',
      description: 'Saturn has a strong magnetic field, though not as strong as Jupiter\'s.',
    },
    {
      title: 'Hexagon at North Pole',
      description: 'Saturn has a hexagonal storm pattern at its north pole.',
    },
    {
      title: 'Auroras',
      description: 'Saturn has auroras at its poles, caused by its magnetic field.',
    },
  ];

  return (
    <div className="p-4 min-h-screen bg-[url('/path-to-your-background-image.jpg')] bg-cover bg-center text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Saturn Facts</h2>
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

export default SaturnFacts;
