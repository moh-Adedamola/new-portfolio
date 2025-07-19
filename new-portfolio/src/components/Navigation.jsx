import { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Menu, X } from 'lucide-react';

// Reusable NavLink component
const NavLink = ({ href, children, onClick, isMobile }) => (
  <motion.a
    href={href}
    className={`
      relative text-gray-100 hover:text-teal-300 transition-all duration-300 font-medium
      ${isMobile ? 'text-lg py-3 px-4 hover:bg-gray-800/60 rounded-xl' : 'text-sm uppercase tracking-wide'}
      focus:outline-none focus:text-teal-300
      group
    `}
    onClick={onClick}
    aria-label={`Navigate to ${children} section`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
    <motion.span 
      className="absolute left-0 right-0 bottom-0 h-0.5 bg-teal-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"
      initial={{ scaleX: 0 }}
      whileHover={{ scaleX: 1 }}
    />
  </motion.a>
);

// Reusable SocialLink component
const SocialLink = ({ href, icon: Icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-teal-300 text-gray-900 hover:shadow-xl hover:shadow-teal-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500/50 group shadow-lg"
    aria-label={label}
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
  </motion.a>
);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.05 },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed w-full bg-gray-900/20 backdrop-blur-md z-50 border-b border-gray-600/30 shadow-lg"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-4 lg:px-6 xl:px-8 py-4 flex items-center justify-between relative z-10">
        {/* Logo Button with improved sizing */}
        <motion.button
          className="group relative flex items-center justify-center px-4 py-2 sm:px-5 sm:py-3 lg:px-6 lg:py-3 bg-gray-900/40 rounded-xl border border-gray-600/30 hover:shadow-teal-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500/50 shadow-sm shadow-teal-500/80 min-w-fit"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top of page"
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-teal-300 font-black text-xl sm:text-2xl lg:text-3xl tracking-wider select-none">
            MOH'
          </span>
          <div className="absolute inset-0 bg-teal-300/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <NavLink href={`#${item.toLowerCase()}`}>
                  {item}
                </NavLink>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-600/40"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <SocialLink
              href="https://www.linkedin.com/in/mohammed-adegbite-2a6990301/"
              icon={Linkedin}
              label="Visit Mohammed Adegbite's LinkedIn profile"
            />
            <SocialLink
              href="https://github.com/moh-Adedamola"
              icon={Github}
              label="Visit Mohammed Adegbite's GitHub profile"
            />
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="lg:hidden p-2 rounded-xl bg-teal-300 text-gray-900 hover:shadow-xl hover:shadow-teal-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500/50 shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          id="mobile-menu"
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          className="lg:hidden bg-gray-900/20 backdrop-blur-lg border-b border-gray-600/30 shadow-xl"
          role="menu"
        >
          <div className="container mx-auto px-4 sm:px-4 py-4 space-y-4 relative z-10">
            {/* Mobile Navigation Links */}
            <div className="bg-gray-900/20 backdrop-blur-sm rounded-2xl p-4 border border-gray-600/30 shadow-lg">
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.div 
                    key={item} 
                    variants={mobileItemVariants}
                    custom={index}
                  >
                    <NavLink
                      href={`#${item.toLowerCase()}`}
                      isMobile
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Mobile Social Links */}
            <motion.div 
              variants={mobileItemVariants} 
              className="bg-gray-900/20 backdrop-blur-sm rounded-2xl p-4 border border-gray-600/30 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-100 font-medium">
                  Connect:
                </span>
                <div className="flex items-center gap-3">
                  <SocialLink
                    href="https://www.linkedin.com/in/mohammed-adegbite-2a6990301/"
                    icon={Linkedin}
                    label="Visit Mohammed Adegbite's LinkedIn profile"
                  />
                  <SocialLink
                    href="https://github.com/moh-Adedamola"
                    icon={Github}
                    label="Visit Mohammed Adegbite's GitHub profile"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;