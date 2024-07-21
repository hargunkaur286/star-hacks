import React from 'react';

const UranusFacts = () => {
  const facts = [
    {
      title: 'Seventh Planet from the Sun',
      description: 'Uranus is the seventh planet from the Sun, orbiting at an average distance of about 1.8 billion miles (2.9 billion kilometers).',
    },
    {
      title: 'Ice Giant',
      description: 'Uranus is classified as an ice giant, composed mainly of water, ammonia, and methane ices.',
    },
    {
      title: 'Rotates on Its Side',
      description: 'Uranus is unique in that it rotates on its side, with an axial tilt of 98 degrees.',
    },
    {
      title: 'Faint Rings',
      description: 'Uranus has a faint ring system composed mainly of dark particles.',
    },
    {
      title: '27 Moons',
      description: 'Uranus has 27 known moons, with Titania being the largest.',
    },
    {
      title: 'Cold Temperatures',
      description: 'Uranus is one of the coldest planets in the solar system, with temperatures dropping as low as -371 degrees Fahrenheit (-224 degrees Celsius).',
    },
    {
      title: 'Methane Atmosphere',
      description: 'Uranus\' atmosphere contains methane, which gives the planet its blue-green color.',
    },
    {
      title: 'Fast Winds',
      description: 'Uranus has fast winds, reaching speeds of up to 560 miles per hour (900 kilometers per hour).',
    },
    {
      title: 'Discovered in 1781',
      description: 'Uranus was discovered by William Herschel in 1781, making it the first planet discovered with a telescope.',
    },
  ];

  return (
    <div className="p-4 min-h-screen bg-[url('/path-to-your-background-image.jpg')] bg-cover bg-center text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Uranus Facts</h2>
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

export default UranusFacts;
