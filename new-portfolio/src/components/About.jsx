import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const floatingVariants = {
    floating: {
      y: [-8, 8, -8],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 flex items-center"
      aria-labelledby="about-heading"
    >
      {/* Refined Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-700"></div>
      
      {/* Subtle Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-gray-200/10 to-gray-300/10 rounded-full blur-3xl"
          animate={floatingVariants.floating}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-gray-200/10 to-gray-300/10 rounded-full blur-3xl"
          animate={{
            y: [8, -8, 8],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-teal-200/10 to-emerald-200/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            transition: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(71, 85, 105) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-10 sm:mb-12 lg:mb-16" variants={itemVariants}>
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-100 to-teal-300 bg-clip-text text-transparent mb-4"
              id="about-heading"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-teal-300 to-gray-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          {/* Content Container */}
          <motion.div 
            className="bg-gray-900/20 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-600/30"
            variants={itemVariants}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              <motion.p 
                className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-100 font-light"
                variants={itemVariants}
              >
                I'm{' '}
                <span className="font-bold text-teal-300">
                  Mohammed Adegbite
                </span>, a passionate Full-Stack Software Engineer with a Computer Science degree and training from Semicolon Africa. I build scalable, user-focused applications that blend functionality with intuitive design.
              </motion.p>

              {/* Skills Highlight */}
              <motion.div 
                className="bg-gray-800/60 rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-600/40"
                variants={itemVariants}
              >
                <motion.p 
                  className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-100 font-light mb-6"
                  variants={itemVariants}
                >
                  My technical expertise includes:
                </motion.p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                  {['Java', 'Python', 'JavaScript', 'React', 'MySQL', 'MongoDB'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="inline-block px-3 py-2 sm:px-4 sm:py-2 bg-teal-300 text-gray-900 text-sm sm:text-base font-medium rounded-full text-center shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.p 
                className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-100 font-light"
                variants={itemVariants}
              >
                I thrive in collaborative settings, leveraging analytical and creative skills to deliver robust solutions. From crafting{' '}
                <span className="font-semibold text-teal-300">scalable APIs</span> to designing{' '}
                <span className="font-semibold text-teal-300">engaging interfaces</span>, I prioritize technical excellence and user experience.
              </motion.p>

              <motion.div 
                className="bg-gray-800/60 rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-600/40"
                variants={itemVariants}
              >
                <motion.p 
                  className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-100 font-light"
                  variants={itemVariants}
                >
                  I'm eager to join innovative teams where I can contribute my full-stack expertise to impactful projects and grow as an engineer.
                </motion.p>
              </motion.div>

              {/* CTA Button */}
              <motion.div 
                className="pt-6 sm:pt-8 lg:pt-12 text-center"
                variants={itemVariants}
              >
                <motion.a
                  href="#contact"
                  className="group inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-teal-300 text-gray-900 font-semibold text-sm sm:text-base lg:text-lg tracking-wide rounded-full shadow-xl hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-teal-500/30 transform hover:scale-105 active:scale-95"
                  aria-label="Contact Mohammed Adegbite"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Let's Connect</span>
                  <motion.svg 
                    className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                  <div className="absolute inset-0 rounded-full bg-teal-300 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;