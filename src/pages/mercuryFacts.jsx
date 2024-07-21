import React from 'react';

const MercuryFacts = () => {
  const facts = [
    {
      title: 'Closest to the Sun',
      description: 'Mercury is the closest planet to the Sun, orbiting at an average distance of about 36 million miles (58 million kilometers).',
    },
    {
      title: 'Smallest Planet',
      description: 'Mercury is the smallest planet in the solar system, with a diameter of just 3,032 miles (4,880 kilometers).',
    },
    {
      title: 'Extreme Temperatures',
      description: 'Temperatures on Mercury can reach up to 800 degrees Fahrenheit (427 degrees Celsius) during the day and drop to -290 degrees Fahrenheit (-179 degrees Celsius) at night.',
    },
    {
      title: 'Short Year',
      description: 'A year on Mercury (one complete orbit around the Sun) takes just 88 Earth days.',
    },
    {
      title: 'Slow Rotation',
      description: 'Mercury has a very slow rotation, taking about 59 Earth days to complete one rotation on its axis.',
    },
    {
      title: 'No Atmosphere',
      description: 'Mercury has a very thin atmosphere, composed mostly of oxygen, sodium, hydrogen, helium, and potassium.',
    },
    {
      title: 'Craters',
      description: 'The surface of Mercury is covered with craters, similar to the Moon.',
    },
    {
      title: 'Magnetic Field',
      description: 'Despite its small size, Mercury has a significant magnetic field.',
    },
    {
      title: 'Iron Core',
      description: 'Mercury\'s core is composed mostly of iron and makes up about 75% of the planet\'s diameter.',
    },
  ];

  return (
    <div className="p-4 min-h-screen bg-[url('/path-to-your-background-image.jpg')] bg-cover bg-center text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Mercury Facts</h2>
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

export default MercuryFacts;
