import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Twitter, Download, ArrowDown } from "lucide-react";
import Button from "../ui/Button";
import FloatingShapes from "../animations/FloatingShapes";
import { Link } from "react-router";
import ImageContainer from "../ui/ImageContainer";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  console.log("object");

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <FloatingShapes />

      <div className="container mx-auto px-4 md:px-6 pt-20 pb-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-purple-900/30 dark:text-purple-300 rounded-full mb-4">
                Fullstack Developer
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Hi, I'm{" "}
              <span className="text-indigo-600 dark:text-purple-400">
                Pradeep
              </span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-xl md:text-2xl mb-6 h-12 text-gray-700 dark:text-gray-300"
            >
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "Backend Developer",
                  2000,
                  "React expert",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I build exceptional and accessible digital experiences for the
              web. Focused on creating responsive, user-friendly interfaces with
              modern technologies.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button onClick={scrollToProjects} variant="primary">
                View My Work
              </Button>
              <Button variant="outline" icon={<Download className="w-4 h-4" />}>
                <Link to="https://drive.google.com/file/d/1zYasEByklR92eYhnkP0Ciw6lilWfZtE0/view?usp=drivesdk">
                  Resume
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="mt-8 flex gap-4 justify-center lg:justify-start"
            >
              <div
                className="p-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Link to="https://github.com/Pradeep106">
                  {" "}
                  <Github className="w-5 h-5" />
                </Link>
              </div>
              <div
                className="p-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Link to="https://www.linkedin.com/in/pradeep-kumar-yadav-58a614218/">
                  {" "}
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
              <div
                className="p-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Link to="https://x.com/pradp137">
                  {" "}
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:flex justify-center items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:flex justify-center items-center"
            >
              <ImageContainer />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute -bottom-6 left-0 right-0 flex justify-center"
        >
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="p-1 text-gray-600 dark:text-gray-400 animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
