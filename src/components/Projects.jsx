import { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
      <motion.div
        className="opacity-80 rounded-2xl shadow-lg overflow-hidden w-full max-w-5xl h-[400px] my-10 mx-auto cursor-pointer"
        whileHover={{ scale: 1.02 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div id="projects" className="flex h-full">
          <div className="p-10 flex flex-col justify-between">
            <div>
              <h3 className="lg:text-5xl text-3xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex space-x-2">
              {/* Only keeping the GitHub button */}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 lg:px-3 lg:py-2 px-2 py-1 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 text-xs lg:text-sm"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </div>
          </div>
          <div className="w-[50%] relative overflow-hidden max-lg:hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-[200%] h-[80%] rounded-lg shadow-xl overflow-hidden transform perspective-1000 rotateY-12 inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"
                initial={{ rotateY: 12, translateX: "25%" }}
                animate={{
                  rotateY: isHovered ? 5 : 12,
                  translateX: isHovered ? "20%" : "25%",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-full h-full bg-white"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: isHovered ? 1 : 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full pb-4"
                  />
                </motion.div>
              </motion.div>
              {/* Laptop base */}
              <div className="absolute bottom-[10%] right-0 w-[70%] h-2 bg-white rounded-l-full " />
            </div>
          </div>
        </div>
      </motion.div>
    </a>
  );
}

export default ProjectCard;
