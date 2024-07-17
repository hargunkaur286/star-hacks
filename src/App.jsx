import React, { useEffect } from "react";
import './App.css';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    const starContainer = document.getElementById('star-container');
    const numStars = 100; // You can adjust the number of stars here

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      const size = Math.random() * 3; // Random star size between 0 and 3 pixels
      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;

      star.classList.add('star');
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${posY}px`;
      star.style.left = `${posX}px`;

      starContainer.appendChild(star);
    }
  }, []);

  return (
    <>
      <div id="star-container"></div>
      <div>
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
