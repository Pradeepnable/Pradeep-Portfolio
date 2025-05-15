import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingShapes() {
  const shapes = [
    { type: 'circle', color: 'bg-indigo-500/20' },
    { type: 'square', color: 'bg-emerald-500/20' },
    { type: 'triangle', color: 'border-purple-500/30' },
    { type: 'circle', color: 'bg-purple-500/20' },
    { type: 'square', color: 'bg-indigo-500/20' },
    { type: 'triangle', color: 'border-emerald-500/30' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => {
        const size = Math.floor(Math.random() * 50) + 30;
        const left = `${Math.floor(Math.random() * 90)}%`;
        const top = `${Math.floor(Math.random() * 90)}%`;
        const duration = Math.floor(Math.random() * 20) + 15;
        const delay = Math.floor(Math.random() * 5);
        
        let shapeElement;
        if (shape.type === 'circle') {
          shapeElement = (
            <motion.div
              className={`rounded-full ${shape.color} absolute`}
              style={{ width: size, height: size, left, top }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay,
              }}
            />
          );
        } else if (shape.type === 'square') {
          shapeElement = (
            <motion.div
              className={`${shape.color} absolute rounded-md`}
              style={{ width: size, height: size, left, top }}
              animate={{
                y: [0, 50, 0],
                x: [0, -20, 0],
                rotate: [0, 180],
              }}
              transition={{
                duration,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay,
              }}
            />
          );
        } else {
          // Triangle shape using border
          shapeElement = (
            <motion.div
              className={`absolute w-0 h-0 border-l-[${size/2}px] border-r-[${size/2}px] border-b-[${size}px] border-l-transparent border-r-transparent ${shape.color}`}
              style={{ left, top }}
              animate={{
                y: [0, 40, 0],
                x: [0, 10, 0],
                rotate: [0, -120],
              }}
              transition={{
                duration,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay,
              }}
            />
          );
        }
        
        return <React.Fragment key={index}>{shapeElement}</React.Fragment>;
      })}
    </div>
  );
}