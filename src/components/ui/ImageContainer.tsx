import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Download,
  ArrowDown,
  Code,
  Server,
  Database,
} from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const ImageContainer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <div
      className="relative w-full "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
    >
      {/* Floating Tech Icons */}
      {isHovered && (
        <>
          <motion.div
            className="absolute -top-8 -left-8 w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Code className="w-8 h-8 text-indigo-600 dark:text-purple-400" />
          </motion.div>
          <motion.div
            className="absolute -bottom-8 -right-8 w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Server className="w-8 h-8 text-indigo-600 dark:text-purple-400" />
          </motion.div>
          <motion.div
            className="absolute top-1/4 -right-10 w-14 h-14 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Database className="w-7 h-7 text-indigo-600 dark:text-purple-400" />
          </motion.div>
        </>
      )}

      {/* Animated Glow Effect */}
      <motion.div
        className="absolute -inset-4 rounded-full"
        animate={{
          background: isHovered
            ? "radial-gradient(circle, rgba(99,102,241,0.3) 0%, rgba(168,85,247,0.1) 70%, rgba(0,0,0,0) 100%)"
            : "radial-gradient(circle, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.05) 70%, rgba(0,0,0,0) 100%)",
        }}
        transition={{ duration: 0.5 }}
      />

      {/* 3D Tilt Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="relative rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 p-1 shadow-xl"
      >
        {/* Image with Glass Morphism Effect */}
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dfmqvylsa/image/upload/v1747213496/myimg_dcxfgz.png"
            alt="Pradeep Kumar Yadav"
            className="w-full h-auto rounded-full border-2 border-purple-400/10 object-contain aspect-square"
          />
        </div>

        {/* Floating Particles */}
        {isHovered && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-indigo-400/30 dark:bg-purple-400/30"
                initial={{
                  scale: 0,
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                style={{
                  width: Math.random() * 10 + 5,
                  height: Math.random() * 10 + 5,
                }}
              />
            ))}
          </>
        )}
      </motion.div>

      {/* Animated Rings */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-indigo-300/50 dark:border-purple-300/30 pointer-events-none"
        animate={{
          scale: isHovered ? [1, 1.1, 1] : 1,
          opacity: isHovered ? [0.5, 0.8, 0.5] : 0.5,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full border border-indigo-200/50 dark:border-purple-200/30 pointer-events-none"
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1,
          opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 0.5,
        }}
      />
    </div>
  );
};

export default ImageContainer;
