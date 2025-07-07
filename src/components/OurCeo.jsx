import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const OurCeo = ({
  ceoImageUrl = 'https://placehold.co/400x400/a3a3a3/e2e8f0?text=CEO+Image', 
  ceoName = "Engr Sao",
  ceoTitle = "CEO & Founder",
  ceoQuote = "“Building a sustainable future requires not just engineering prowess, but a deep commitment to our communities and the environment.”",
  ctaText = "Meet Our Entire Team",
}) => {
  const navigate = useNavigate();
  const handleCtaClick = () => {
    navigate('/team')
  }

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Variants for section header (h2 and p)
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Variants for the CEO image
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut", delay: 0.3 } }
  };

  // Variants for the content block (staggers its children: name, title, quote, button)
  const contentBlockVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each child element
        delayChildren: 0.5 // Delay before children start animating
      }
    }
  };

  // Variants for individual text elements and button within the content block
  const textItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-white font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl font-['Montserrat'] leading-tight">
            Insights from the CEO
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our vision is shaped by experience, innovation, and a passion for excellence.
          </p>
        </motion.div>
        <div className="bg-gray-50 rounded-xl shadow-xl overflow-hidden p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
          <motion.div
            className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-teal-600"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
              src={ceoImageUrl}
              alt={ceoName}
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400/a3a3a3/e2e8f0?text=Image+Not+Found'; }} // Fallback
            />
          </motion.div>

          {/* CEO Text Content */}
          <motion.div
            className="flex-grow text-center lg:text-left"
            variants={contentBlockVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3
              className="text-3xl font-bold text-gray-900 mb-2 font-['Montserrat'] leading-tight"
              variants={textItemVariants}
            >
              {ceoName}
            </motion.h3>
            <motion.p
              className="text-teal-600 text-xl font-medium mb-6"
              variants={textItemVariants}
            >
              {ceoTitle}
            </motion.p>
            <motion.blockquote
              className="text-gray-700 text-lg italic border-l-4 border-teal-600 pl-4 mb-8"
              variants={textItemVariants}
            >
              "{ceoQuote}"
            </motion.blockquote>

            {/* CTA Button */}
            <motion.button
              onClick={handleCtaClick}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300 transform hover:scale-[1.02]"
              variants={textItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {ctaText}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurCeo;
