import React from 'react';

const JupiterFacts = () => {
  const facts = [
    {
      title: 'Largest Planet',
      description: 'Jupiter is the largest planet in the solar system, with a diameter of about 86,881 miles (139,822 kilometers).',
    },
    {
      title: 'Gas Giant',
      description: 'Jupiter is a gas giant, composed mainly of hydrogen and helium.',
    },
    {
      title: 'Great Red Spot',
      description: 'Jupiter has a giant storm called the Great Red Spot, which is about twice the size of Earth.',
    },
    {
      title: 'Many Moons',
      description: 'Jupiter has at least 79 moons, including the four large Galilean moons: Io, Europa, Ganymede, and Callisto.',
    },
    {
      title: 'Strong Magnetic Field',
      description: 'Jupiter has the strongest magnetic field of any planet in the solar system.',
    },
    {
      title: 'Fast Rotation',
      description: 'Jupiter has the fastest rotation of all the planets, taking about 10 hours to complete one rotation on its axis.',
    },
    {
      title: 'Faint Ring System',
      description: 'Jupiter has a faint ring system composed mainly of dust particles from its moons.',
    },
    {
      title: 'Radiates More Heat',
      description: 'Jupiter radiates more heat than it receives from the Sun due to its internal heat source.',
    },
    {
      title: 'Auroras',
      description: 'Jupiter has auroras at its poles, which are caused by its strong magnetic field.',
    },
  ];

  return (
    <div className="p-4 min-h-screen bg-[url('/path-to-your-background-image.jpg')] bg-cover bg-center text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Jupiter Facts</h2>
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

export default JupiterFacts;
