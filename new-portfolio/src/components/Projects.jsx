import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Car Rental Service App",
            link: "https://moh-car-rental.vercel.app/",
            problem: "Customers face difficulties finding reliable and convenient car rental services with real-time availability and booking options.",
            solution: "A web application built with the MERN stack (MongoDB, Express.js, React, Node.js) to enable users to browse, book, and manage car rentals seamlessly.",
            impact: "Improved customer access to car rental services with real-time availability, streamlined booking processes, and enhanced user satisfaction.",
            tools: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "REST APIs"],
            details: "Developed a full-stack MERN application with MongoDB for storing car and booking data, Express.js and Node.js for robust backend APIs, and React with Tailwind CSS for a responsive, user-friendly frontend.",
        },
        {
            title: "Library Management System",
            problem: "Inefficient manual processes for book borrowing, returning, and tracking.",
            solution: "A robust library management system allowing users to search for books, check availability, borrow/return books, and track due dates and fines.",
            impact: "Streamlined library operations and improved user experience with automated notifications and catalog search.",
            tools: ["Java Spring Boot", "MySQL", "React.js", "REST APIs", "Bootstrap"],
            details: "Implemented backend logic for book management and user interactions, and integrated an intuitive frontend for catalog search and notifications.",
            githubLink: "https://github.com/moh-Adedamola/LibraryManagementApp.git"
        },
        {
             title: "School Management System",
             link: "https://molek-group-of-schools.vercel.app/",
            problem: "Manual school administration processes lead to inefficiencies in managing student records, timetables, and communication.",
            solution: "A web application built with the MERN stack (MongoDB, Express.js, React, Node.js) to streamline student management, scheduling, and communication.",
            impact: "Enhanced administrative efficiency, improved communication between stakeholders, and centralized access to school data.",
            tools: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "REST APIs"],
            details: "Developed a full-stack MERN application with MongoDB for storing student and administrative data, Express.js and Node.js for secure backend APIs, and React with Tailwind CSS for a responsive, intuitive frontend.",
            
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    };

    const floatingVariants = {
        floating: {
            y: [-15, 15, -15],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const handleLinkClick = (e, url) => {
        e.stopPropagation();
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section 
            id="projects" 
            className="min-h-screen relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24"
        >
            {/* Enhanced Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-700/20"></div>
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-teal-200/5 to-gray-200/5 rounded-full blur-3xl"
                    animate={floatingVariants.floating}
                />
                <motion.div
                    className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-gray-200/5 to-teal-200/5 rounded-full blur-3xl"
                    animate={{
                        y: [20, -20, 20],
                        transition: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                />
                <motion.div
                    className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-gray-200/5 to-teal-200/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        transition: {
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-4 lg:px-6 xl:px-8 relative z-10">
                <motion.div
                    className="max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Section Header */}
                    <motion.div className="text-center mb-12 sm:mb-16 lg:mb-20" variants={itemVariants}>
                        <motion.h2
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-100 to-teal-300 bg-clip-text text-transparent mb-4"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Technical Projects
                        </motion.h2>
                        <motion.div 
                            className="w-20 h-1 bg-gradient-to-r from-gray-100 to-teal-300 mx-auto rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div 
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                        variants={containerVariants}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group bg-gray-900/20 backdrop-blur-sm rounded-3xl p-4 sm:p-6 cursor-pointer shadow-xl border border-gray-600/30 hover:shadow-2xl transition-all duration-500 hover:border-teal-300/50"
                                onClick={() => setSelectedProject(project)}
                                whileHover={{ y: -8, scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Project Title */}
                                <motion.h3 
                                    className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-teal-300 bg-clip-text text-transparent"
                                >
                                    {project.title}
                                </motion.h3>

                                {/* Project Links */}
                                <div className="flex gap-3 mb-4">
                                    {project.link && (
                                        <motion.button
                                            onClick={(e) => handleLinkClick(e, project.link)}
                                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-300 to-teal-400 text-gray-900 text-sm font-semibold rounded-full shadow-lg hover:shadow-teal-500/30 transition-all duration-300 group/link"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <ExternalLink className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
                                            <span>Live Demo</span>
                                        </motion.button>
                                    )}
                                    {project.githubLink && (
                                        <motion.button
                                            onClick={(e) => handleLinkClick(e, project.githubLink)}
                                            className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-600 text-gray-100 text-sm font-semibold rounded-full shadow-lg hover:shadow-gray-500/30 hover:border-gray-500 transition-all duration-300 group/link"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Github className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
                                            <span>Code</span>
                                        </motion.button>
                                    )}
                                </div>

                                {/* Problem Statement */}
                                <div className="bg-gray-900/20 rounded-2xl p-4 mb-4 border border-gray-600/30">
                                    <p className="text-gray-100 font-light leading-relaxed text-sm sm:text-base">
                                        {project.problem}
                                    </p>
                                </div>

                                {/* Tools/Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tools.slice(0, 3).map((tool, toolIndex) => (
                                        <motion.span
                                            key={tool}
                                            className="inline-block px-3 py-1 bg-teal-300 text-gray-900 text-xs sm:text-sm font-medium rounded-full shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
                                            whileHover={{ scale: 1.05 }}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: toolIndex * 0.1 }}
                                        >
                                            {tool}
                                        </motion.span>
                                    ))}
                                    {project.tools.length > 3 && (
                                        <span className="inline-block px-3 py-1 bg-teal-300 text-gray-900 text-xs sm:text-sm font-medium rounded-full shadow-lg">
                                            +{project.tools.length - 3} more
                                        </span>
                                    )}
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-300/5 to-gray-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div 
                        className="text-center mt-12 sm:mt-16 lg:mt-20"
                        variants={itemVariants}
                    >
                        <motion.a
                            href="https://github.com/moh-Adedamola"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-teal-300 text-gray-900 font-semibold text-sm sm:text-base lg:text-lg tracking-wide rounded-full shadow-xl hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-teal-500/30 transform hover:scale-105 active:scale-95"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10">Explore All Projects</span>
                            <motion.svg 
                                className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                                whileHover={{ x: 5 }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </motion.svg>
                            
                            {/* Button Glow Effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-300/10 to-gray-300/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>
                        </motion.a>
                    </motion.div>
                </motion.div>

                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </div>
        </section>
    );
};

export default Projects;