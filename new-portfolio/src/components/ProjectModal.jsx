import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from "prop-types";
import { X, ExternalLink, Github } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
                staggerChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            transition: { duration: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    };

    const handleLinkClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
                onClick={onClose}
            >
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-teal-200/5 to-gray-300/5 rounded-full blur-3xl"
                        animate={{
                            y: [-10, 10, -10],
                            transition: {
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                    />
                    <motion.div
                        className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-gray-200/5 to-teal-200/5 rounded-full blur-3xl"
                        animate={{
                            y: [10, -10, 10],
                            transition: {
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                    />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="bg-gray-900/20 backdrop-blur-lg rounded-3xl max-w-3xl w-full relative shadow-2xl border border-gray-600/30 overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header gradient line */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-100 to-teal-300" />
                    
                    <div className="p-4 sm:p-6 lg:p-8">
                        {/* Close button */}
                        <motion.button
                            onClick={onClose}
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-teal-300 text-gray-900 hover:shadow-teal-500/25 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                            aria-label="Close project modal"
                            whileHover={{ scale: 1.05, rotate: 90 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <X className="w-5 h-5" />
                        </motion.button>

                        {/* Project title */}
                        <motion.h3 
                            variants={itemVariants}
                            className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-100 to-teal-300 bg-clip-text text-transparent pr-12"
                        >
                            {project.title}
                        </motion.h3>

                        {/* Project Links - Prominently Displayed */}
                        <motion.div 
                            variants={itemVariants}
                            className="flex flex-wrap gap-4 mb-6 p-4 bg-gradient-to-r from-gray-900/30 to-gray-800/30 rounded-2xl border border-gray-600/30"
                        >
                            <div className="flex items-center gap-2 text-teal-300 font-semibold text-sm mb-2 w-full">
                                <span className="w-2 h-2 bg-teal-300 rounded-full"></span>
                                Project Links
                            </div>
                            
                            <div className="flex flex-wrap gap-3">
                                {project.link && (
                                    <motion.button
                                        onClick={() => handleLinkClick(project.link)}
                                        className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-300 to-teal-400 text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-teal-500/40 transition-all duration-300 group"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                        <div className="flex flex-col items-start">
                                            <span>View Live Demo</span>
                                            <span className="text-xs opacity-80 truncate max-w-48">
                                                {project.link.replace('https://', '')}
                                            </span>
                                        </div>
                                    </motion.button>
                                )}
                                
                                {project.githubLink && (
                                    <motion.button
                                        onClick={() => handleLinkClick(project.githubLink)}
                                        className="flex items-center gap-3 px-6 py-3 bg-gray-800 border border-gray-600 text-gray-100 font-semibold rounded-full shadow-lg hover:shadow-gray-500/40 hover:border-gray-500 transition-all duration-300 group"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                        <div className="flex flex-col items-start">
                                            <span>View Source Code</span>
                                            <span className="text-xs opacity-80">
                                                GitHub Repository
                                            </span>
                                        </div>
                                    </motion.button>
                                )}
                            </div>
                        </motion.div>

                        <div className="space-y-4 sm:space-y-6">
                            {/* Problem Statement */}
                            <motion.div 
                                variants={itemVariants}
                                className="bg-gray-900/20 rounded-2xl p-4 sm:p-6 border border-gray-600/30"
                            >
                                <h4 className="text-base sm:text-lg font-bold text-teal-300 mb-3">
                                    Problem Statement
                                </h4>
                                <p className="text-gray-100 font-light leading-relaxed">{project.problem}</p>
                            </motion.div>

                            {/* Solution Developed */}
                            <motion.div 
                                variants={itemVariants}
                                className="bg-gray-900/20 rounded-2xl p-4 sm:p-6 border border-gray-600/30"
                            >
                                <h4 className="text-base sm:text-lg font-bold text-teal-300 mb-3">
                                    Solution Developed
                                </h4>
                                <p className="text-gray-100 font-light leading-relaxed">{project.solution}</p>
                            </motion.div>

                            {/* Key Impact */}
                            <motion.div 
                                variants={itemVariants}
                                className="bg-gray-900/20 rounded-2xl p-4 sm:p-6 border border-gray-600/30"
                            >
                                <h4 className="text-base sm:text-lg font-bold text-teal-300 mb-3">
                                    Key Impact
                                </h4>
                                <p className="text-gray-100 font-light leading-relaxed">{project.impact}</p>
                            </motion.div>

                            {/* Technical Details */}
                            <motion.div 
                                variants={itemVariants}
                                className="bg-gray-900/20 rounded-2xl p-4 sm:p-6 border border-gray-600/30"
                            >
                                <h4 className="text-base sm:text-lg font-bold text-teal-300 mb-3">
                                    Technical Details
                                </h4>
                                <p className="text-gray-100 font-light leading-relaxed mb-4">{project.details}</p>
                                
                                {/* Tools/Technologies */}
                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    {project.tools.map((tool, index) => (
                                        <motion.span
                                            key={tool}
                                            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-teal-300 text-gray-900 text-sm sm:text-base font-medium rounded-full shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
                                            whileHover={{ scale: 1.05, rotate: 2 }}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 + 0.5 }}
                                        >
                                            {tool}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Footer gradient line */}
                        <motion.div 
                            variants={itemVariants}
                            className="mt-6 sm:mt-8 h-0.5 bg-gradient-to-r from-gray-100 to-teal-300 rounded-full"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

ProjectModal.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        problem: PropTypes.string.isRequired,
        solution: PropTypes.string.isRequired,
        impact: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
        tools: PropTypes.arrayOf(PropTypes.string).isRequired,
        link: PropTypes.string,
        githubLink: PropTypes.string,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ProjectModal;