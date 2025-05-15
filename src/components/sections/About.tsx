import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import {
  Code,
  Server,
  Database,
  Cpu,
  GitBranch,
  Layers,
  Terminal,
  Smartphone,
  Zap,
  Globe,
  CpuIcon,
  Box,
  Network,
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: "frontend" | "backend" | "tooling";
  color: string;
}

const skills: Skill[] = [
  {
    name: "React.js",
    level: 90,
    icon: <Globe className="w-5 h-5" />,
    category: "frontend",
    color: "#6366f1",
  },
  {
    name: "TypeScript",
    level: 85,
    icon: <Code className="w-5 h-5" />,
    category: "frontend",
    color: "#3178c6",
  },
  {
    name: "Next.js",
    level: 80,
    icon: <Layers className="w-5 h-5" />,
    category: "frontend",
    color: "#000000",
  },
  {
    name: "Tailwind CSS",
    level: 85,
    icon: <Zap className="w-5 h-5" />,
    category: "frontend",
    color: "#38bdf8",
  },
  {
    name: "Node.js",
    level: 75,
    icon: <Network className="w-5 h-5" />,
    category: "backend",
    color: "#68a063",
  },
  {
    name: "Express",
    level: 70,
    icon: <Terminal className="w-5 h-5" />,
    category: "backend",
    color: "#000000",
  },
  {
    name: "MongoDB",
    level: 65,
    icon: <Database className="w-5 h-5" />,
    category: "backend",
    color: "#4db33d",
  },
  {
    name: "PostgreSQL",
    level: 60,
    icon: <Database className="w-5 h-5" />,
    category: "backend",
    color: "#336791",
  },
  {
    name: "Git",
    level: 80,
    icon: <GitBranch className="w-5 h-5" />,
    category: "tooling",
    color: "#f05032",
  },
  {
    name: "REST APIs",
    level: 75,
    icon: <CpuIcon className="w-5 h-5" />,
    category: "backend",
    color: "#5e35b1",
  },
];

const SkillVisualization = ({ skill }: { skill: Skill }) => {
  const size = 80;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (skill.level / 100) * circumference;

  return (
    <motion.div
      className="relative flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
    >
      <svg className="w-20 h-20" viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          className="dark:stroke-gray-700"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={skill.color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <foreignObject x="15" y="15" width="50" height="50">
          <div className="flex items-center justify-center w-full h-full">
            <div
              className={`w-8 h-8 flex items-center justify-center`}
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>
          </div>
        </foreignObject>
      </svg>
      <motion.div
        className="text-sm text-white font-medium mt-2 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        {skill.name}
      </motion.div>
      <motion.div
        className="text-xs text-gray-500 mt-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
      >
        {skill.level}%
      </motion.div>
    </motion.div>
  );
};

const CategoryPill = ({
  category,
  active,
  onClick,
}: {
  category: "all" | "frontend" | "backend" | "tooling";
  active: boolean;
  onClick: () => void;
}) => {
  const categoryData = {
    all: {
      name: "All",
      icon: <Box className="w-4 h-4" />,
      color: "bg-gray-100 dark:bg-gray-800",
    },
    frontend: {
      name: "Frontend",
      icon: <Code className="w-4 h-4" />,
      color: "bg-indigo-100 dark:bg-indigo-900/30",
    },
    backend: {
      name: "Backend",
      icon: <Server className="w-4 h-4" />,
      color: "bg-purple-100 dark:bg-purple-900/30",
    },
    tooling: {
      name: "Tooling",
      icon: <GitBranch className="w-4 h-4" />,
      color: "bg-red-100 dark:bg-red-900/30",
    },
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
        active
          ? `${categoryData[category].color} text-gray-900 dark:text-white shadow-sm`
          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
      }`}
    >
      {categoryData[category].icon}
      {categoryData[category].name}
    </button>
  );
};

export default function Experience() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "frontend" | "backend" | "tooling"
  >("all");

  const filteredSkills = skills.filter((skill) => {
    if (activeCategory === "all") return true;
    return skill.category === activeCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <Section
      id="about"
      title="Technical Skills"
      subtitle="Visualized through interactive elements"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col items-center"
      >
        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {(["all", "frontend", "backend", "tooling"] as const).map(
            (category) => (
              <CategoryPill
                key={category}
                category={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            )
          )}
        </motion.div>

        {/* Skills Visualization */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        >
          {filteredSkills.map((skill) => (
            <SkillVisualization key={skill.name} skill={skill} />
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-4 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-indigo-500" />
            <span className="text-gray-400">Frontend</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500" />
            <span className="text-gray-400">Backend</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-gray-400">Tooling</span>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
