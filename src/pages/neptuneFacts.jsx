import React from 'react';

const NeptuneFacts = () => {
  const facts = [
    {
      title: 'Eighth Planet from the Sun',
      description: 'Neptune is the eighth and farthest planet from the Sun, orbiting at an average distance of about 2.8 billion miles (4.5 billion kilometers).',
    },
    {
      title: 'Ice Giant',
      description: 'Neptune is classified as an ice giant, composed mainly of water, ammonia, and methane ices.',
    },
    {
      title: 'Strong Winds',
      description: 'Neptune has the strongest winds in the solar system, with speeds reaching up to 1,200 miles per hour (2,000 kilometers per hour).',
    },
    {
      title: 'Great Dark Spot',
      description: 'Neptune has a storm similar to Jupiter\'s Great Red Spot, known as the Great Dark Spot.',
    },
    {
      title: '14 Moons',
      description: 'Neptune has 14 known moons, with Triton being the largest.',
    },
    {
      title: 'Faint Rings',
      description: 'Neptune has a faint ring system composed mainly of dust particles.',
    },
    {
      title: 'Methane Atmosphere',
      description: 'Neptune\'s atmosphere contains methane, which gives the planet its blue color.',
    },
    {
      title: 'Cold Temperatures',
      description: 'Neptune is one of the coldest planets in the solar system, with temperatures dropping as low as -353 degrees Fahrenheit (-214 degrees Celsius).',
    },
    {
      title: 'Discovered in 1846',
      description: 'Neptune was discovered in 1846 by Johann Galle and Heinrich d\'Arrest, based on predictions by Urbain Le Verrier and John Couch Adams.',
    },
  ];

  return (
    <div className="p-4 min-h-screen bg-[url('/path-to-your-background-image.jpg')] bg-cover bg-center text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Neptune Facts</h2>
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

export default NeptuneFacts;
