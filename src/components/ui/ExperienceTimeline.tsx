import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem } from '../../data/experienceData';
import { BriefcaseIcon, GraduationCap, CalendarIcon, MapPinIcon } from 'lucide-react';

interface ExperienceTimelineProps {
  items: ExperienceItem[];
}

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-0 sm:left-[47%] h-full w-px bg-gray-200 dark:bg-gray-700 transform sm:-translate-x-1/2"></div>
      
      {items.map((item, index) => {
        const isEven = index % 2 === 0;
        const isLastItem = index === items.length - 1;
        
        return (
          <div key={item.id} className="mb-12 last:mb-0">
            <div className={`flex flex-col sm:flex-row items-center ${isEven ? 'sm:flex-row-reverse' : ''}`}>
              {/* Timeline dot */}
              <div className="absolute left-0 sm:left-[47%] w-10 h-10 bg-white dark:bg-gray-800 border-4 border-indigo-600 dark:border-purple-500 rounded-full transform -translate-x-1/2 flex items-center justify-center z-10">
                {item.type === 'work' ? (
                  <BriefcaseIcon className="w-4 h-4 text-indigo-600 dark:text-purple-400" />
                ) : (
                  <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-purple-400" />
                )}
              </div>
              
              {/* Content */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`ml-12 sm:ml-0 sm:w-[calc(44%-10px)] ${isEven ? 'sm:mr-20' : 'sm:ml-8'}`}
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${
                    item.type === 'work' 
                      ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300' 
                      : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300'
                  }`}>
                    {item.type === 'work' ? 'Work Experience' : 'Education'}
                  </span>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  
                  <h4 className="text-lg font-medium text-indigo-600 dark:text-purple-400 mb-2">
                    {item.company}
                  </h4>
                  
                  <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <div className="flex items-center mr-4 mb-2">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      <span>{item.startDate} - {item.endDate}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {item.description}
                  </p>
                  
                  {item.achievements.length > 0 && (
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-gray-200 mb-2">
                        Key Achievements:
                      </h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        );
      })}
    </div>
  );
}