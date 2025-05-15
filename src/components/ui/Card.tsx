import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  hoverEffect?: boolean;
  delay?: number;
}

export default function Card({ 
  children, 
  className = '', 
  href, 
  hoverEffect = true,
  delay = 0 
}: CardProps) {
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay * 0.1
      }
    }
  };

  const content = (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`
        bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden
        ${hoverEffect ? 'transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
}