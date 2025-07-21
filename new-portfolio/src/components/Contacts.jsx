import { motion } from 'framer-motion';
import { ExternalLink, Github, Linkedin, Download } from 'lucide-react';

const SocialLink = ({ href, label, icon: Icon, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative inline-flex items-center gap-3 px-6 py-4 bg-gray-900/20 backdrop-blur-sm rounded-2xl border border-gray-600/30 shadow-lg hover:shadow-xl transition-all duration-300"
    aria-label={label}
    whileHover={{ y: -3, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <motion.div 
      className="flex-shrink-0 p-2 rounded-xl bg-teal-300 shadow-md"
      whileHover={{ rotate: 5 }}
      transition={{ duration: 0.3 }}
    >
      <Icon className="w-5 h-5 text-gray-900" />
    </motion.div>
    
    <span className="text-sm sm:text-base font-semibold text-gray-100 group-hover:text-teal-300 transition-colors duration-300">
      {children}
    </span>
    
    <motion.div
      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      whileHover={{ x: 2 }}
    >
      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-teal-300" />
    </motion.div>
    
    <div className="absolute inset-0 rounded-2xl bg-teal-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </motion.a>
);

const Contacts = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
      id="contact"
      className="relative py-16 sm:py-20 lg:py-24 flex items-center min-h-screen overflow-hidden"
      aria-labelledby="contact-heading"
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
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div 
            className="mb-10 sm:mb-12 lg:mb-16"
            variants={itemVariants}
          >
            <motion.h2
              id="contact-heading"
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-100 to-teal-300 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Let's Connect
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-teal-300 to-gray-600 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-gray-100 font-light max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Eager to collaborate on innovative projects? Let's connect to build impactful solutions.
            </motion.p>
          </motion.div>

          {/* Main Content Container */}
          <motion.div 
            className="bg-gray-900/20 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-600/30 mb-8"
            variants={itemVariants}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="space-y-8 sm:space-y-12">
              {/* Professional Status */}
              <motion.div 
                className="bg-gray-800/60 rounded-2xl p-6 sm:p-8 border border-gray-600/40"
                variants={itemVariants}
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-100 mb-4">
                  Open for Opportunities
                </h3>
                
                <p className="text-base sm:text-lg text-gray-100 font-light mb-6 leading-relaxed">
                  Seeking roles to apply my full-stack expertise in creating scalable, impactful solutions.
                </p>
                
                <motion.a
                  href="https://drive.google.com/file/d/1zJvfCMbj6FREI7G44BRr49Y83zddZh8P/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-teal-300 text-gray-900 font-semibold text-sm sm:text-base lg:text-lg tracking-wide rounded-full shadow-xl hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-teal-500/30"
                  aria-label="View Mohammed Adegbite's Resume"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  <span>View Resume</span>
                  <motion.div
                    whileHover={{ x: 2 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.div>
                  
                  <div className="absolute inset-0 rounded-full bg-teal-300 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="bg-gray-800/60 rounded-2xl p-6 sm:p-8 border border-gray-600/40"
                variants={itemVariants}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-6">
                  Get in Touch
                </h3>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <SocialLink
                    href="https://www.linkedin.com/in/mohammed-adegbite-2a6990301/"
                    label="Connect with Mohammed Adegbite on LinkedIn"
                    icon={Linkedin}
                  >
                    LinkedIn
                  </SocialLink>
                  
                  <SocialLink
                    href="https://github.com/moh-Adedamola"
                    label="View Mohammed Adegbite's GitHub profile"
                    icon={Github}
                  >
                    GitHub
                  </SocialLink>
                </div>
              </motion.div>

              {/* Availability Status */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                variants={itemVariants}
              >
                <motion.div className="flex items-center gap-2 px-4 py-2 bg-gray-800/60 rounded-full border border-gray-600/40">
                  <motion.div 
                    className="w-3 h-3 bg-teal-300 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm font-medium text-gray-100">Available for Freelance</span>
                </motion.div>
                
                <motion.div className="flex items-center gap-2 px-4 py-2 bg-gray-800/60 rounded-full border border-gray-600/40">
                  <motion.div 
                    className="w-3 h-3 bg-teal-300 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <span className="text-sm font-medium text-gray-100">Open to Full-time</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacts;