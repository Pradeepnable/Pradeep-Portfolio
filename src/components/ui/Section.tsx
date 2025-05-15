import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export default function Section({ id, className = '', children, title, subtitle }: SectionProps) {
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.1,
      }
    }
  };

  const lineVariants = {
    hidden: { width: "0%" },
    visible: { 
      width: "80px",
      transition: {
        duration: 0.6,
        delay: 0.3,
      }
    }
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 transition-colors duration-300 ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {title && (
          <div className="mb-12 text-center">
            <motion.h2
              variants={headingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100"
            >
              {title}
            </motion.h2>
            
            <motion.div
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="h-1 bg-indigo-600 dark:bg-purple-500 mx-auto mt-3 mb-5"
            />
            
            {subtitle && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { delay: 0.4, duration: 0.5 } }}
                viewport={{ once: true }}
                className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        
        {children}
      </div>
    </section>
  );
}