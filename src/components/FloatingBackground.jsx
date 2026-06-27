import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// Detailed SVGs for the background
const svgs = {
  leaf: (
    <svg viewBox="0 0 100 100" fill="currentColor">
      <path d="M50 5C30 5 10 25 10 50c0 20 15 38 35 43 2-10-2-20-8-28 10 3 18 10 23 18 0-12 5-23 12-32 8 5 15 13 18 23 2-15 10-25 10-25-15 0-30 8-40 20 5-8 15-15 25-18-12-2-25 2-35 10 0-10 10-20 20-25-10-2-20 0-30 8 10-15 25-25 45-25z" />
    </svg>
  ),
  aloe: (
    <svg viewBox="0 0 100 100" fill="currentColor">
      <path d="M50 95 C 40 70 20 40 10 10 C 35 25 45 60 50 95 M50 95 C 60 70 80 40 90 10 C 65 25 55 60 50 95" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M50 95 C 45 65 45 35 50 5 C 55 35 55 65 50 95" />
    </svg>
  ),
  molecule: (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="50" cy="50" r="10" />
      <circle cx="20" cy="30" r="6" />
      <circle cx="80" cy="30" r="6" />
      <circle cx="20" cy="70" r="6" />
      <circle cx="80" cy="70" r="6" />
      <line x1="25" y1="34" x2="44" y2="46" />
      <line x1="75" y1="34" x2="56" y2="46" />
      <line x1="25" y1="66" x2="44" y2="54" />
      <line x1="75" y1="66" x2="56" y2="54" />
      <circle cx="50" cy="50" r="35" strokeDasharray="4 4" opacity="0.3" />
    </svg>
  ),
  pattern: (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M10 50 Q 30 10 50 50 T 90 50" opacity="0.5"/>
      <path d="M10 60 Q 30 20 50 60 T 90 60" opacity="0.3"/>
      <path d="M10 70 Q 30 30 50 70 T 90 70" opacity="0.1"/>
    </svg>
  ),
  drop: (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M50 10 C 50 10 20 50 20 70 A 30 30 0 0 0 80 70 C 80 50 50 10 50 10 Z" />
      <path d="M35 70 A 15 15 0 0 0 50 85" opacity="0.5" />
    </svg>
  )
};

const getRandomAnimation = (layer, delay) => {
  // Layer 1: Background (slowest, smallest range)
  // Layer 2: Midground (medium)
  // Layer 3: Foreground (fastest, largest range)
  const range = layer === 1 ? 25 : layer === 2 ? 45 : 70;
  const duration = layer === 1 ? 18 : layer === 2 ? 12 : 8;

  return {
    y: [0, -range, 0],
    x: [0, range / 2, -range / 2, 0],
    rotate: [0, range / 2, -range / 2, 0],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay
    }
  };
};

const FloatingBackground = ({ gamme }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // useMemo ensures that positions are calculated once per gamme change
  // so elements do not "jump" when a user clicks other buttons (like sort/filter)
  const elements = useMemo(() => {
    const elts = [];

    const addElements = (type, count, layer) => {
      for (let i = 0; i < count; i++) {
        // Distribute randomly but slightly away from the exact center
        let top = Math.floor(Math.random() * 90) + 5 + '%';
        let left = Math.floor(Math.random() * 90) + 5 + '%';
        
        // Determine classes based on layer to create 3D depth of field
        let layerClasses = "";
        let sizeClass = "";
        let opacityClass = "";

        if (layer === 1) {
          // Far background: small, blurred, low opacity
          sizeClass = "w-20 h-20 sm:w-28 sm:h-28";
          layerClasses = "blur-sm";
          opacityClass = "opacity-[0.05]";
        } else if (layer === 2) {
          // Midground: medium, in focus, higher opacity
          sizeClass = "w-32 h-32 sm:w-48 sm:h-48";
          layerClasses = "blur-none";
          opacityClass = "opacity-[0.08]";
        } else if (layer === 3) {
          // Foreground: very large, heavily blurred (too close), very low opacity
          sizeClass = "w-64 h-64 sm:w-96 sm:h-96";
          layerClasses = "blur-xl";
          opacityClass = "opacity-[0.06]";
        }

        elts.push(
          <motion.div
            key={`${gamme}-${type}-${layer}-${i}`}
            className={`absolute text-brand-accent ${sizeClass} ${layerClasses} ${opacityClass}`}
            style={{ top, left }}
            animate={getRandomAnimation(layer, i * 1.5)}
          >
            {svgs[type]}
          </motion.div>
        );
      }
    };

    if (gamme === 'capillaire') {
      addElements('leaf', 3, 1);
      addElements('aloe', 2, 1);
      addElements('leaf', 2, 2);
      addElements('drop', 1, 2);
      addElements('aloe', 1, 3);
    } else if (gamme === 'dermatologique') {
      addElements('molecule', 3, 1);
      addElements('pattern', 2, 1);
      addElements('drop', 2, 2);
      addElements('molecule', 1, 2);
      addElements('pattern', 1, 3);
    } else {
      addElements('leaf', 2, 1);
      addElements('molecule', 2, 1);
      addElements('aloe', 1, 2);
      addElements('pattern', 1, 2);
      addElements('drop', 1, 3);
      addElements('leaf', 1, 3);
    }
    
    return elts;
  }, [gamme]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Soft gradient overlay to enhance depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fcfcfc]/50 to-[#fcfcfc] z-10 pointer-events-none" />
      <div className="absolute inset-0 w-full h-full relative z-0">
        {elements}
      </div>
    </div>
  );
};

export default FloatingBackground;
