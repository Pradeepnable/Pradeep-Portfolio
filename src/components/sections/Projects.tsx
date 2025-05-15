import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../ui/Section";
import ProjectCard from "../ui/ProjectCard";
import projectsData, { Project } from "../../data/projectsData";
import { Filter, X } from "lucide-react";

// Extract unique tags from projects
const getAllTags = (): string[] => {
  const tagsSet = new Set<string>();

  projectsData.forEach((project) => {
    project.tags.forEach((tag) => {
      tagsSet.add(tag);
    });
  });

  return ["All", ...Array.from(tagsSet).sort()];
};

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const tags = getAllTags();

  const filteredProjects =
    activeTag === "All"
      ? projectsData
      : projectsData.filter((project) => project.tags.includes(activeTag));

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="Explore my recent work and featured projects"
      className="bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="mb-8">
        <button
          onClick={toggleFilters}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-700 shadow-sm hover:shadow transition-all"
        >
          {showFilters ? (
            <>
              <X className="w-5 h-5 text-indigo-600 dark:text-purple-400" />
              <span className="text-gray-700 dark:text-gray-200">
                Hide filters
              </span>
            </>
          ) : (
            <>
              <Filter className="w-5 h-5 text-indigo-600 dark:text-purple-400" />
              <span className="text-gray-700 dark:text-gray-200">
                Filter projects
              </span>
            </>
          )}
        </button>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 overflow-hidden"
            >
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                  Filter by technology
                </h3>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        setActiveTag(tag);
                        setShowFilters(false);
                      }}
                      className={`px-3 py-1.5 text-sm rounded-full transition-all duration-200 ${
                        activeTag === tag
                          ? "bg-indigo-600 dark:bg-purple-600 text-white shadow-md"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {activeTag !== "All" && (
        <div className="mb-6 flex items-center gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Showing:
          </span>
          <span className="px-3 py-1 bg-indigo-100 dark:bg-purple-900/30 text-indigo-600 dark:text-purple-400 text-sm rounded-full flex items-center gap-2">
            {activeTag}
            <button
              onClick={() => setActiveTag("All")}
              className="text-indigo-400 dark:text-purple-300 hover:text-indigo-600 dark:hover:text-purple-100"
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTag}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredProjects.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            No projects found with the selected filter.
          </p>
        </div>
      )}
    </Section>
  );
}
