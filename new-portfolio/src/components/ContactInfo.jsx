import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Send } from 'lucide-react';

const ContactItem = ({ icon: Icon, title, href, label, linkText }) => (
  <motion.div
    className="group relative overflow-hidden rounded-2xl p-6 sm:p-8 bg-gray-900/20 backdrop-blur-sm border border-gray-600/30 shadow-lg hover:shadow-xl transition-all duration-300"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
    }}
    whileHover={{ y: -5, scale: 1.01 }}
   

 whileTap={{ scale: 0.99 }}
  >
    <div className="relative z-10 flex items-center gap-4 sm:gap-6">
      <motion.div 
        className="flex-shrink-0 p-3 sm:p-4 rounded-xl bg-teal-300 shadow-lg"
        whileHover={{ rotate: 5, scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" aria-hidden="true" />
      </motion.div>
      
      <div className="flex-1 min-w-0">
        <h3 className="text-sm sm:text-base font-bold text-gray-100 mb-2 tracking-wide uppercase">
          {title}
        </h3>
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm sm:text-base lg:text-lg text-gray-200 hover:text-teal-300 transition-colors duration-300 focus:outline-none focus:text-teal-300 break-all sm:break-normal font-medium"
          aria-label={label}
          whileHover={{ x: 5 }}
        >
          {linkText}
        </motion.a>
      </div>

      <motion.div
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ x: -10 }}
        whileHover={{ x: 0 }}
      >
        <Send className="w-5 h-5 text-gray-400 group-hover:text-teal-300 transition-colors duration-300" />
      </motion.div>
    </div>
  </motion.div>
);

const ContactInfo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const floatingVariants = {
    floating: {
      y: [-8, 8, -8],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      id="contact-info"
      className="relative py-16 sm:py-20 lg:py-24 flex items-center min-h-[80vh] overflow-hidden"
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
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-56 h-56 bg-gradient-to-br from-teal-200/10 to-emerald-200/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(71, 85, 105) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-10 sm:mb-12 lg:mb-16"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
            }}
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
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: 0.3 } }
              }}
            >
              Excited to collaborate on innovative projects? Reach out to discuss how I can contribute to your team.
            </motion.p>
          </motion.div>

          {/* Contact Items */}
          <motion.div
            className="space-y-6 sm:space-y-8 mb-10 sm:mb-12"
            variants={containerVariants}
          >
            <ContactItem
              icon={Phone}
              title="WhatsApp"
              href="https://wa.me/2347068335394"
              label="Contact Mohammed Adegbite through WhatsApp"
              linkText="+234 706 833 5394"
            />
            <ContactItem
              icon={Mail}
              title="Email"
              href="mailto:adedamola13@gmail.com"
              label="Email Mohammed Adegbite"
              linkText="adedamola13@gmail.com"
            />
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div 
            className="text-center bg-gray-900/20 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-600/30"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
            }}
            whileHover={{ y: -3 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-teal-300 rounded-full mb-4 shadow-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <MessageCircle className="w-8 h-8 text-gray-900" />
            </motion.div>
            
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-100 mb-3">
              Build Something Great
            </h3>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-100 font-light mb-6">
              Open to exciting projects and career opportunities
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div className="flex items-center gap-2 px-4 py-2 bg-gray-800/60 rounded-full border border-gray-600/40">
                <div className="w-3 h-3 bg-teal-300 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-100">Available Now</span>
              </motion.div>
              
              <motion.div className="flex items-center gap-2 px-4 py-2 bg-gray-800/60 rounded-full border border-gray-600/40">
                <div className="w-3 h-3 bg-teal-300 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-100">Quick Response</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;