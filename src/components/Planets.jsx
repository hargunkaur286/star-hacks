import React from 'react';
import { Link } from 'react-router-dom';

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
    { src: mercury, name: 'Mercury', href: '/mercuryFacts' },
    { src: venus, name: 'Venus', href: '/venusFacts' },
    { src: earth, name: 'Earth', href: '/earthFacts' },
    { src: mars, name: 'Mars', href: '/marsFacts' },
    { src: jupiter, name: 'Jupiter', href: '/jupiterFacts' },
    { src: saturn, name: 'Saturn', href: '/saturnFacts' },
    { src: uranus, name: 'Uranus', href: '/uranusFacts' },
    { src: neptune, name: 'Neptune', href: '/neptuneFacts' },
  ];

  return (
    <div className="text-white p-8 flex-col ">
      <div className='flex items-center justify-center'>
      <h1 className="text-4xl font-bold mb-8">Know Your Planets</h1>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 z-10">
        {planets.map((planet, index) => (
          <div key={index} className="text-center relative">
            <Link to={planet.href}>
              <img src={planet.src} alt={planet.name} className="mx-auto mb-2 w-32 h-24 md:w-40 md:h-32 lg:w-50 lg:h-40 animate-float" />
              <div className="text-lg font-medium">{planet.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planets;
