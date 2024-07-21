import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Planets from "./components/Planets";
import MercuryFacts from "./pages/MercuryFacts";
import VenusFacts from "./pages/VenusFacts";
import EarthFacts from "./pages/EarthFacts";
import MarsFacts from "./pages/MarsFacts";
import JupiterFacts from "./pages/JupiterFacts";
import SaturnFacts from "./pages/SaturnFacts";
import UranusFacts from "./pages/UranusFacts";
import NeptuneFacts from "./pages/NeptuneFacts";
import Picture from "./pages/Picture";
import PictureDay from "./components/PictureDay";
import Weather from "./pages/Weather";
import WeatherData from "./components/WeatherData";
import ImagesData from "./components/imagesData";
import Images from "./pages/Images";
import SpaceQuiz from "./pages/SpaceQuiz";
import GuessThePlanet from "./pages/GuessThePlanet";


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

    // Handle window resize to reposition stars
    const handleResize = () => {
      const stars = document.querySelectorAll('.star');
      stars.forEach(star => {
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        star.style.top = `${posY}px`;
        star.style.left = `${posX}px`;
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <div id="star-container"></div>
      <div id="content-container" className="w-full overflow-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Planets />
              <PictureDay />
              <WeatherData />
              <ImagesData />
             </>
          } />
          <Route path="/mercuryFacts" element={<MercuryFacts />} />
          <Route path="/venusFacts" element={<VenusFacts />} />
          <Route path="/earthFacts" element={<EarthFacts />} />
          <Route path="/marsFacts" element={<MarsFacts />} />
          <Route path="/jupiterFacts" element={<JupiterFacts />} />
          <Route path="/saturnFacts" element={<SaturnFacts />} />
          <Route path="/uranusFacts" element={<UranusFacts />} />
          <Route path="/neptuneFacts" element={<NeptuneFacts />} />
          <Route path="/picture" element={<Picture />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/images" element={<Images />} />
          <Route path="/quiz" element={<SpaceQuiz />} />
          <Route path="/guess-planet" element={<GuessThePlanet />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;







