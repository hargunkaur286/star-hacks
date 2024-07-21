import React, { useEffect, useRef, useState } from 'react';

const SpaceExplorer = () => {
  const canvasRef = useRef(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const spaceship = useRef({ x: 250, y: 450, width: 50, height: 50 });
  const stars = useRef([]);
  const asteroids = useRef([]);
  const starSpeed = useRef(2);
  const asteroidSpeed = useRef(2);
  const leftPressed = useRef(false);
  const rightPressed = useRef(false);

  const handleKeyDown = (event) => {
    if (event.code === 'ArrowLeft') {
      leftPressed.current = true;
    } else if (event.code === 'ArrowRight') {
      rightPressed.current = true;
    }
  };

  const handleKeyUp = (event) => {
    if (event.code === 'ArrowLeft') {
      leftPressed.current = false;
    } else if (event.code === 'ArrowRight') {
      rightPressed.current = false;
    }
  };

  const drawSpaceship = (ctx) => {
    ctx.fillStyle = 'blue';
    ctx.fillRect(spaceship.current.x, spaceship.current.y, spaceship.current.width, spaceship.current.height);
  };

  const drawStars = (ctx) => {
    ctx.fillStyle = 'yellow';
    stars.current.forEach((star, index) => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, 5, 0, Math.PI * 2);
      ctx.fill();
      star.y += starSpeed.current;
      if (star.y > 500) {
        stars.current.splice(index, 1);
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
      }
    });
  };

  const detectCollisions = () => {
    stars.current.forEach((star, starIndex) => {
      if (
        star.x > spaceship.current.x &&
        star.x < spaceship.current.x + spaceship.current.width &&
        star.y > spaceship.current.y &&
        star.y < spaceship.current.y + spaceship.current.height
      ) {
        stars.current.splice(starIndex, 1);
        setScore((prevScore) => prevScore + 10);
      }
    });

    asteroids.current.forEach((asteroid, asteroidIndex) => {
      if (
        asteroid.x > spaceship.current.x &&
        asteroid.x < spaceship.current.x + spaceship.current.width &&
        asteroid.y > spaceship.current.y &&
        asteroid.y < spaceship.current.y + spaceship.current.height
      ) {
        setIsGameOver(true);
      }
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
    drawStars(ctx);
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
    const starInterval = setInterval(() => {
      const x = Math.random() * 480 + 10;
      stars.current.push({ x, y: 0 });
    }, 1000 / level);

    const asteroidInterval = setInterval(() => {
      const x = Math.random() * 480 + 10;
      const radius = Math.random() * 15 + 10;
      asteroids.current.push({ x, y: 0, radius });
    }, 2000 / level);

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    requestAnimationFrame(gameLoop);

    return () => {
      clearInterval(starInterval);
      clearInterval(asteroidInterval);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [level]);

  useEffect(() => {
    if (score > 0 && score % 100 === 0) {
      setLevel((prevLevel) => prevLevel + 1);
      starSpeed.current += 1;
      asteroidSpeed.current += 1;
    }
  }, [score]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Space Explorer</h1>
      <canvas ref={canvasRef} width={500} height={500} className="border border-white"></canvas>
      <div className="text-xl mt-4">Score: {score}</div>
      <div className="text-xl mt-4">Level: {level}</div>
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

export default SpaceExplorer;
