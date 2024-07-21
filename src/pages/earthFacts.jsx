import React from 'react';

const EarthFacts = () => {
  const facts = [
    {
      title: 'Third Planet from the Sun',
      description: 'Earth is the third planet from the Sun, orbiting at an average distance of about 93 million miles (150 million kilometers).',
    },
    {
      title: 'Only Planet with Liquid Water',
      description: 'Earth is the only planet known to have liquid water on its surface.',
    },
    {
      title: 'Supports Life',
      description: 'Earth is the only planet known to support life.',
    },
    {
      title: 'Diameter',
      description: 'Earth has a diameter of about 7,917.5 miles (12,742 kilometers).',
    },
    {
      title: 'Atmosphere',
      description: 'Earth\'s atmosphere is composed mainly of nitrogen (78%) and oxygen (21%), with trace amounts of other gases.',
    },
    {
      title: 'One Moon',
      description: 'Earth has one natural satellite, the Moon.',
    },
    {
      title: 'Rotation Period',
      description: 'Earth takes approximately 24 hours to complete one rotation on its axis.',
    },
    {
      title: 'Orbital Period',
      description: 'Earth takes about 365.25 days to orbit the Sun.',
    },
    {
      title: 'Magnetic Field',
      description: 'Earth has a significant magnetic field, which protects it from solar wind and cosmic radiation.',
    },
  ];

  return (
    <div className="p-4 min-h-screen bg-[url('/path-to-your-background-image.jpg')] bg-cover bg-center text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Earth Facts</h2>
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

export default EarthFacts;
