import React from 'react';
import { motion } from 'framer-motion';

// Generates random properties to give natural variation
const getRandomAnimation = (delay) => ({
  y: [0, -15, 0],
  rotate: [0, 5, -5, 0],
  transition: {
    duration: 15,
    repeat: Infinity,
    ease: "easeInOut",
    delay: delay
  }
});

const FloatingBackground = ({ gamme }) => {
  // We'll define specific svg shapes for each universe
  const shapes = [];

  const addShapes = (type, count, baseDelay) => {
    for (let i = 0; i < count; i++) {
      // Random positions to spread them naturally across the viewport
      const top = Math.floor(Math.random() * 80) + 10 + '%';
      const left = Math.floor(Math.random() * 80) + 10 + '%';
      
      let svgContent = null;
      let sizeClass = "w-24 h-24 sm:w-32 sm:h-32";

      if (type === 'leaf') {
        svgContent = (
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0C50 0 10 30 10 70C10 90 30 100 50 100C70 100 90 90 90 70C90 30 50 0 50 0Z" />
          </svg>
        );
      } else if (type === 'molecule') {
        svgContent = (
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" />
            <circle cx="50" cy="50" r="10" />
            <line x1="50" y1="5" x2="50" y2="40" />
            <line x1="90" y1="75" x2="58" y2="55" />
            <line x1="10" y1="75" x2="42" y2="55" />
          </svg>
        );
        sizeClass = "w-32 h-32 sm:w-48 sm:h-48";
      } else if (type === 'aloe') {
        svgContent = (
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 100 C 40 80 10 50 20 20 C 40 30 45 70 50 100 M50 100 C 60 80 90 50 80 20 C 60 30 55 70 50 100" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M50 100 C 45 70 45 40 50 10 C 55 40 55 70 50 100" />
          </svg>
        );
      } else if (type === 'circle') {
        svgContent = (
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="50" cy="50" r="48" />
            <circle cx="50" cy="50" r="30" strokeDasharray="4 4" />
          </svg>
        );
        sizeClass = "w-40 h-40 sm:w-64 sm:h-64";
      }

      shapes.push(
        <motion.div
          key={`${type}-${i}`}
          className={`absolute text-brand-accent ${sizeClass}`}
          style={{ top, left, opacity: 0.04 }} // extremely subtle opacity
          animate={getRandomAnimation(baseDelay + i * 2)}
        >
          {svgContent}
        </motion.div>
      );
    }
  };

  // Determine what shapes to show based on gamme
  if (gamme === 'capillaire') {
    addShapes('leaf', 3, 0);
    addShapes('aloe', 2, 1);
  } else if (gamme === 'dermatologique') {
    addShapes('molecule', 3, 0);
    addShapes('circle', 2, 1);
  } else {
    // 'all' view - mix of both but even more abstract/subtle
    addShapes('leaf', 2, 0);
    addShapes('circle', 2, 1);
    addShapes('molecule', 1, 2);
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 w-full h-full relative">
        {shapes}
      </div>
    </div>
  );
};

export default FloatingBackground;
