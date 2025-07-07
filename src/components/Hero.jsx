import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = ({
  imageUrls = [
    '/image5.jfif',
    '/image2.jfif',
    '/image3.jfif',
    '/image4.jfif'
  ],
  headline = "Building Tomorrow's Infrastructure, Today.",
  subheading = "Precision Engineering, Sustainable Solutions, Unwavering Commitment.",
  ctaText = "Explore Our Projects",
  onCtaClick = () => alert('Explore Projects clicked!')
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  // Variants for Framer Motion animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between child animations
        delayChildren: 0.5 // Delay before children start animating
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Image slider effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % imageUrls.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [imageUrls.length]);

  return (
    <section className="relative min-h-[60vh] lg:min-h-screen flex items-center justify-center text-center overflow-hidden py-12 pt-28">
      {imageUrls.map((imageUrl, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          } z-0`}
          style={{ backgroundImage: `url('${imageUrl}')` }}
        ></div>
      ))}

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Content Layer with Framer Motion animations */}
      <motion.div
        className="relative z-20 text-white px-4 md:px-8 lg:px-16 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          className="font-['Montserrat'] text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4"
          variants={itemVariants}
        >
          {headline}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-medium mb-8"
          variants={itemVariants}
        >
          {subheading}
        </motion.p>

        {/* Call to Action Button */}
        <motion.button
          onClick={() => {navigate('/projects')}} // Uses useNavigate for routing
          className="bg-lime-600 hover:bg-lime-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 inline-block"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }} // Scale up slightly on hover
          whileTap={{ scale: 0.95 }} // Scale down slightly on tap
        >
          {ctaText}
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
