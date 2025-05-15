import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import ExperienceTimeline from '../ui/ExperienceTimeline';
import experienceData, { ExperienceItem } from '../../data/experienceData';
import { BriefcaseIcon, GraduationCap } from 'lucide-react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'all' | 'work' | 'education'>('all');

  const filteredExperience = experienceData.filter(item => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  return (
    <Section 
      id="experience" 
      title="Experience & Education" 
      subtitle="My professional journey and educational background"
    >
      <div className="mb-8 flex justify-center">
        <div className="inline-flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === 'all'
                ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-purple-400 shadow'
                : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-purple-400'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('work')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
              activeTab === 'work'
                ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-purple-400 shadow'
                : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-purple-400'
            }`}
          >
            <BriefcaseIcon className="w-4 h-4" /> Work
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
              activeTab === 'education'
                ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-purple-400 shadow'
                : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-purple-400'
            }`}
          >
            <GraduationCap className="w-4 h-4" /> Education
          </button>
        </div>
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ExperienceTimeline items={filteredExperience} />
      </motion.div>
    </Section>
  );
}