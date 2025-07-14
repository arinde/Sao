import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Variants for the main footer container
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15, // Stagger children (the columns)
        delayChildren: 0.2 // Delay before children start animating
      }
    }
  };

  // Variants for individual columns within the footer
  const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Variants for individual link/icon items within columns
  const linkItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <motion.footer
      className="bg-gray-900 text-gray-300 py-16 lg:py-20 font-sans"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible" // Animate when the component enters the viewport
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">

          <motion.div className="col-span-1 lg:col-span-1" variants={columnVariants}>
            <h3 className="text-3xl font-extrabold text-white mb-2 font-['Montserrat']">
              Sao Works Nig Ltd.
            </h3>
            <p className='text-gray-100 text-md font-sans font-semibold mb-4'>RC: 1445238</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Building the future, one foundation at a time. Precision, innovation, and unwavering commitment to excellence in every project.
            </p>

            <div className="flex space-x-4 mt-6">
              <motion.a
                href="#" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-500 transition-colors duration-200"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
          <motion.div variants={columnVariants}>
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <motion.li variants={linkItemVariants}><Link to="/" className="hover:text-teal-500 transition-colors duration-200">Home</Link></motion.li>
              <motion.li variants={linkItemVariants}><a href="#about" className="hover:text-teal-500 transition-colors duration-200">About Us</a></motion.li>
              <motion.li variants={linkItemVariants}><a href="#services" className="hover:text-teal-500 transition-colors duration-200">Services</a></motion.li>
              <motion.li variants={linkItemVariants}><Link to="/projects" className="hover:text-teal-500 transition-colors duration-200">Projects</Link></motion.li>
              <motion.li variants={linkItemVariants}><Link to="/team" className="hover:text-teal-500 transition-colors duration-200">Team</Link></motion.li>
              <motion.li variants={linkItemVariants}><a href="#faq" className="hover:text-teal-500 transition-colors duration-200">FAQ</a></motion.li>
            </ul>
          </motion.div>

          {/* Services Overview Column */}
          <motion.div variants={columnVariants}>
            <h4 className="text-xl font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              <motion.li variants={linkItemVariants}><a href="#" className="hover:text-teal-500 transition-colors duration-200">Infrastructure Development</a></motion.li>
              <motion.li variants={linkItemVariants}><a href="#" className="hover:text-teal-500 transition-colors duration-200">Commercial Construction</a></motion.li>
              <motion.li variants={linkItemVariants}><a href="#" className="hover:text-teal-500 transition-colors duration-200">Industrial Facilities</a></motion.li>
              <motion.li variants={linkItemVariants}><a href="#" className="hover:text-teal-500 transition-colors duration-200">Engineering & Design</a></motion.li>
              <motion.li variants={linkItemVariants}><a href="#" className="hover:text-teal-500 transition-colors duration-200">Sustainable Building</a></motion.li>
            </ul>
          </motion.div>

          {/* Contact Information Column */}
          <motion.div variants={columnVariants}>
            <h4 className="text-xl font-semibold text-white mb-6">Contact Us</h4>
            <address className="not-italic space-y-3">
              <motion.p variants={linkItemVariants} className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-teal-500 flex-shrink-0 mt-1" />
                <span>77, Alhaji Amoo Street, Ojota  <br /> Lagos State, Nigeria</span>
              </motion.p>
              <motion.p variants={linkItemVariants} className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-teal-500" />
                <a href="tel:+2347064467278" className="hover:text-teal-500 transition-colors duration-200">+234 706 446 7278</a>
              </motion.p>
              <motion.p variants={linkItemVariants} className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-teal-500" />
                <a href="mailto:saoworksngltd@gmail.com" className="hover:text-teal-500 transition-colors duration-200">saoworksngltd@gmail.com</a>
              </motion.p>
            </address>
          </motion.div>
        </div>

        {/* Copyright and Bottom Links */}
        <motion.div
          className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p>&copy; {new Date().getFullYear()} Sao Works Nig Ltd. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-teal-500 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-teal-500 transition-colors duration-200">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
