import React from 'react';
import mercury from "../assets/mercury.png";
import venus from "../assets/venus.png";
import earth from "../assets/earth.png";
import mars from "../assets/mars.png";
import jupiter from "../assets/jupiter.png";
import saturn from "../assets/saturn.png";
import uranus from "../assets/uranus.png";
import neptune from "../assets/neptune.png";

const Planets = () => {
  const planets = [
    { src: mercury, name: 'Mercury' },
    { src: venus, name: 'Venus' },
    { src: earth, name: 'Earth' },
    { src: mars, name: 'Mars' },
    { src: jupiter, name: 'Jupiter' },
    { src: saturn, name: 'Saturn' },
    { src: uranus, name: 'Uranus' },
    { src: neptune, name: 'Neptune' },
  ];

  return (
    <div className="text-white p-8">
      <div className='text-4xl md:text-6xl lg:text-7xl z-10 text-center font-bold mb-8'>
        Know Your Planets!
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 z-10">
        {planets.map((planet, index) => (
          <div key={index} className="text-center relative">
            <img src={planet.src} alt={planet.name} className="mx-auto mb-2 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 animate-float" />
            <div className="text-lg font-medium">{planet.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planets;
