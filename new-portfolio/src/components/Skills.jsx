import { motion } from 'framer-motion';

const Skills = () => {
    const skills = {
        "Frontend": [
            "HTML", "CSS", "JavaScript", "React Basics",
            "Responsive Design", "Bootstrap", "Tailwind CSS"
        ],
        "Backend": [
            "Java", "Spring Boot", "Python", "Django","Node js",
            "REST APIs", "SQL", "OOP", "UML Diagrams"
        ],
        "Tools & Practices": [
            "Git & GitHub", "Docker", "Agile Methodologies",
            "Debugging", "Test Driven Development"
        ]
    };

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

    return (
        <section id="skills" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
            {/* Enhanced Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-700/20"></div>
            
            {/* Animated Background Element */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-teal-200/5 to-gray-200/5 rounded-full blur-3xl"
                    animate={floatingVariants.floating}
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
                            Technical Skills
                        </motion.h2>
                        <motion.div 
                            className="w-20 h-1 bg-gradient-to-r from-gray-100 to-teal-300 mx-auto rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                    </motion.div>

                    {/* Skills Grid */}
                    <motion.div 
                        className="grid md:grid-cols-3 gap-4 sm:gap-6"
                        variants={containerVariants}
                    >
                        {Object.entries(skills).map(([category, items]) => (
                            <motion.div
                                key={category}
                                variants={itemVariants}
                                className="group bg-gray-900/20 backdrop-blur-sm rounded-3xl p-4 sm:p-6 shadow-xl border border-gray-600/30 hover:shadow-2xl hover:border-teal-300/50 transition-all duration-500"
                            >
                                <h3 className="text-lg sm:text-xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-teal-300 bg-clip-text text-transparent">
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((skill, index) => (
                                        <motion.span
                                            key={skill}
                                            className="inline-block px-3 py-1 bg-teal-300 text-gray-900 text-xs sm:text-sm font-light rounded-full shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
                                            whileHover={{ scale: 1.05 }}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-300/5 to-gray-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;