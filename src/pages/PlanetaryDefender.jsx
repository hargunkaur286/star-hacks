import React, { useEffect, useRef, useState } from 'react';

const PlanetaryDefender = () => {
  const canvasRef = useRef(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const spaceship = useRef({ x: 250, y: 450, width: 50, height: 50 });
  const lasers = useRef([]);
  const asteroids = useRef([]);
  const asteroidSpeed = useRef(2);
  const laserSpeed = useRef(5);
  const leftPressed = useRef(false);
  const rightPressed = useRef(false);

  const handleKeyDown = (event) => {
    if (event.code === 'ArrowLeft') {
      leftPressed.current = true;
    } else if (event.code === 'ArrowRight') {
      rightPressed.current = true;
    } else if (event.code === 'Space') {
      shootLaser();
    }
  };

  const handleKeyUp = (event) => {
    if (event.code === 'ArrowLeft') {
      leftPressed.current = false;
    } else if (event.code === 'ArrowRight') {
      rightPressed.current = false;
    }
  };

  const shootLaser = () => {
    lasers.current.push({ x: spaceship.current.x + spaceship.current.width / 2 - 2.5, y: spaceship.current.y });
  };

  const drawSpaceship = (ctx) => {
    ctx.fillStyle = 'blue';
    ctx.fillRect(spaceship.current.x, spaceship.current.y, spaceship.current.width, spaceship.current.height);
  };

  const drawLasers = (ctx) => {
    ctx.fillStyle = 'red';
    lasers.current.forEach((laser, index) => {
      ctx.fillRect(laser.x, laser.y, 5, 20);
      laser.y -= laserSpeed.current;
      if (laser.y < 0) {
        lasers.current.splice(index, 1);
      }
    });
  };

  const drawAsteroids = (ctx) => {
    ctx.fillStyle = 'gray';
    asteroids.current.forEach((asteroid, index) => {
      ctx.beginPath();
      ctx.arc(asteroid.x, asteroid.y, asteroid.radius, 0, Math.PI * 2);
      ctx.fill();
      asteroid.y += asteroidSpeed.current;
      if (asteroid.y > 500) {
        asteroids.current.splice(index, 1);
        setIsGameOver(true);
      }
    });
  };

  const detectCollisions = () => {
    asteroids.current.forEach((asteroid, asteroidIndex) => {
      lasers.current.forEach((laser, laserIndex) => {
        if (
          laser.x > asteroid.x - asteroid.radius &&
          laser.x < asteroid.x + asteroid.radius &&
          laser.y < asteroid.y + asteroid.radius &&
          laser.y > asteroid.y - asteroid.radius
        ) {
          asteroids.current.splice(asteroidIndex, 1);
          lasers.current.splice(laserIndex, 1);
          setScore((prevScore) => prevScore + 10);
        }
      });
    });
  };

  const update = (ctx) => {
    if (leftPressed.current && spaceship.current.x > 0) {
      spaceship.current.x -= 5;
    } else if (rightPressed.current && spaceship.current.x < 500 - spaceship.current.width) {
      spaceship.current.x += 5;
    }
  };

  const gameLoop = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSpaceship(ctx);
    drawLasers(ctx);
    drawAsteroids(ctx);
    detectCollisions();
    update(ctx);

    if (!isGameOver) {
      requestAnimationFrame(gameLoop);
    } else {
      ctx.fillStyle = 'white';
      ctx.font = '48px sans-serif';
      ctx.fillText('Game Over', 150, 250);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const x = Math.random() * 480 + 10;
      const radius = Math.random() * 15 + 10;
      asteroids.current.push({ x, y: 0, radius });
    }, 1000);

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    requestAnimationFrame(gameLoop);

    return () => {
      clearInterval(interval);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className=" text-white p-4 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Planetary Defender</h1>
      <canvas ref={canvasRef} width={500} height={500} className="border border-white"></canvas>
      <div className="text-xl mt-4">Score: {score}</div>
      {isGameOver && (
        <button
          onClick={() => window.location.reload()}
          className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-500 hover:via-pink-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Restart Game
        </button>
      )}
    </div>
  );
};

export default PlanetaryDefender;
