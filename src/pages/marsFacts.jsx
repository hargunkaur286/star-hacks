import React from 'react';

const MarsFacts = () => {
  const facts = [
    {
      title: 'Fourth Planet from the Sun',
      description: 'Mars is the fourth planet from the Sun, orbiting at an average distance of about 142 million miles (228 million kilometers).',
    },
    {
      title: 'Red Planet',
      description: 'Mars is often called the "Red Planet" because of its reddish appearance, which is due to iron oxide (rust) on its surface.',
    },
    {
      title: 'Thin Atmosphere',
      description: 'Mars has a very thin atmosphere composed mainly of carbon dioxide, with trace amounts of nitrogen and argon.',
    },
    {
      title: 'Two Moons',
      description: 'Mars has two small moons, Phobos and Deimos.',
    },
    {
      title: 'Largest Volcano',
      description: 'Mars is home to the largest volcano in the solar system, Olympus Mons, which is about 13.6 miles (22 kilometers) high.',
    },
    {
      title: 'Deepest Canyon',
      description: 'Mars has the deepest canyon in the solar system, Valles Marineris, which is about 2,500 miles (4,000 kilometers) long and up to 7 miles (11 kilometers) deep.',
    },
    {
      title: 'Similar Day Length',
      description: 'A day on Mars (one rotation on its axis) is about 24.6 hours long, similar to an Earth day.',
    },
    {
      title: 'Cold Temperatures',
      description: 'Mars is much colder than Earth, with average surface temperatures around -80 degrees Fahrenheit (-60 degrees Celsius).',
    },
    {
      title: 'Water Ice',
      description: 'Mars has polar ice caps composed mainly of water ice, along with frozen carbon dioxide (dry ice).',
    },
  ];

  return (
    <div className="p-4 min-h-screen bg-[url('/path-to-your-background-image.jpg')] bg-cover bg-center text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Mars Facts</h2>
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

export default MarsFacts;
