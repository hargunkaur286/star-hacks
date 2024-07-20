import React, { useEffect } from "react";
import heroImg1 from "../assets/heroImg1.png";
import heroImg2 from "../assets/heroImg2.png";
import heroImg3 from "../assets/heroImg3.png";
import heroImg4 from "../assets/heroImg4.png";
import heroImg5 from "../assets/heroImg5.png";
import heroImg6 from "../assets/heroImg6.png";
import "../App.css"

const Hero = () => {
  const ufoImages = [
    { src: heroImg1, side: 'right', top: '8%', left: '75%' },
    { src: heroImg2, side: 'left', top: '7%', left: '5%' },
    { src: heroImg3, side: 'right', top: '25%', left: '80%' },
    { src: heroImg4, side: 'left', top: '30%', left: '15%' },
    { src: heroImg5, side: 'right', top: '50%', left: '85%' },
    { src: heroImg6, side: 'left', top: '50%', left: '5%' },
  ];

  useEffect(() => {
    const heroSection = document.getElementById('hero-section');

    ufoImages.forEach((image) => {
      const ufo = document.createElement('img');

      ufo.src = image.src;
      ufo.classList.add('absolute', 'animate-float', 'responsive-img');
      ufo.style.top = image.top;
      ufo.style.left = image.left;

      heroSection.appendChild(ufo);
    });
  }, []);

  return (
    <div id="hero-section" className="relative w-full min-h-screen flex justify-center items-center text-white flex-col overflow-hidden">
      <div className="text-2xl md:text-4xl lg:text-6xl z-10 text-center font-bold mb-4 px-4">
        <span className="inline-block animate-typewriter overflow-hidden whitespace-nowrap border-r-4 border-white pr-5">
          Your Gateway to the Cosmos!
        </span>
      </div>
      <div className="text-base md:text-xl lg:text-2xl text-center px-4 max-w-2xl mx-auto">
        Explore the universe like never before. Discover celestial wonders, track space missions, and engage in virtual space adventures with StarMap.
      </div>
    </div>
  );
}

export default Hero;
