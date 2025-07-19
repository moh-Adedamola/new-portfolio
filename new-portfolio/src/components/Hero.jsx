import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] } },
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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      aria-labelledby="hero-heading"
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

      {/* Very Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(71, 85, 105) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div variants={textVariants} className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div variants={textVariants} className="mb-6 sm:mb-8">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/60 text-teal-300 font-medium tracking-wide mb-6 sm:mb-8 rounded-full text-sm sm:text-base border border-gray-600/40"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Code className="w-4 h-4" />
                <span>Full-Stack Software Engineer</span>
              </motion.div>
              
              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-gray-100 to-teal-300 bg-clip-text text-transparent">
                  Hi, I'm Mohammed Adegbite
                </span>
              </h1>
            </motion.div>

            <motion.h2 
              variants={textVariants}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-100 font-light mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Building{' '}
              <span className="font-semibold text-teal-300">
                scalable, user-focused solutions
              </span>{' '}
              with passion and precision.
            </motion.h2>

            <motion.div 
              variants={textVariants}
              className="bg-gray-900/20 rounded-xl p-4 sm:p-6 lg:p-8 border border-gray-600/30 mb-8 sm:mb-10 shadow-sm max-w-2xl mx-auto lg:mx-0"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-teal-300 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" />
                </div>
                <div>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-100 font-light leading-relaxed">
                    Expert in Java, Python, JavaScript and Mern Stack, creating robust APIs and engaging interfaces.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={textVariants}
              className="flex justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 bg-teal-300 text-gray-900 font-semibold text-sm sm:text-base lg:text-lg tracking-wide rounded-full shadow-lg hover:shadow-xl hover:shadow-teal-500/25 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-teal-500/30"
                aria-label="Contact Mohammed Adegbite"
                whileHover={{ y: -1, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Let's Connect</span>
                <motion.div
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            className="order-1 lg:order-2 relative max-w-sm sm:max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-teal-300/10 rounded-2xl transform translate-x-2 translate-y-2 -z-10 blur-sm" />
              
              <motion.div 
                className="relative bg-gray-900/20 rounded-2xl p-2 border border-gray-600/30 shadow-lg"
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={new URL('../assets/port_image.jpg', import.meta.url).href}
                  alt="Mohammed Adegbite - Full-Stack Software Engineer"
                  className="relative w-full h-auto rounded-xl shadow-md filter brightness-95 hover:brightness-100 transition-all duration-300"
                />
                
                <div className="absolute inset-2 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent rounded-xl pointer-events-none" />
              </motion.div>

              <motion.div
                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 bg-teal-300 rounded-full flex items-center justify-center shadow-md"
                animate={{
                  y: [-2, 2, -2],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <Code className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-6 h-6 sm:w-8 sm:h-8 bg-teal-300 rounded-full flex items-center justify-center shadow-md"
                animate={{
                  y: [2, -2, 2],
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-gray-900" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;