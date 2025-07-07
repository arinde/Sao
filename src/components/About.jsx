import React from 'react';
import { motion, useInView } from 'framer-motion'; // Import motion and useInView
import { ClipboardList, Zap, HeartHandshake } from 'lucide-react';

const About = ({
  aboutImageUrl = '/image1.jfif',
  headline = "Our Foundation: Built on Vision & Unrivaled Expertise",
  introText = "At Sao Works Nigeria Limited, we don't just construct buildings; we engineer the future. With decades of collective experience, we transform complex challenges into tangible realities, shaping landscapes and building communities.",
  pillar1Title = "Precision & Quality",
  pillar1Description = "From meticulous planning to flawless execution, our commitment to excellence ensures every project stands the test of time, exceeding industry standards.",
  pillar2Title = "Innovation & Sustainability",
  pillar2Description = "We embrace cutting-edge technologies and sustainable practices, delivering eco-conscious solutions that are both resilient and forward-thinking.",
  pillar3Title = "Client-Centric Collaboration",
  pillar3Description = "Your vision is our blueprint. We partner closely with clients, fostering transparent communication and delivering tailored solutions that bring your aspirations to life.",
  ctaText = "Discover Our Projects",
  onCtaClick = () => console.log("Discover Projects clicked!")
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // Animate once when 30% of component is in view

  // Variants for section header (headline and introText)
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Variants for the image (now with continuous bouncing)
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
    bounce: {
      y: [0, -10, 0], // Bounce effect: up 10px, then back to original
      transition: {
        repeat: Infinity, // Repeat indefinitely
        repeatType: "mirror", // Reverse direction on each repeat
        duration: 2, // Duration of one bounce cycle
        ease: "easeInOut" // Smooth ease for bouncing
      }
    }
  };

  // Variants for the pillars container (staggers children)
  const pillarsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };

  const pillarItemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const ctaButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.8 } }
  };

  return (
    <section id='about' ref={ref} className="py-12 lg:py-24 bg-white font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl font-['Montserrat']">
            {headline}
          </h2>
          <p className="mt-4 text-xl text-gray-600 font-sans max-w-3xl mx-auto">
            {introText}
          </p>
        </motion.div>

        <div className="lg:flex lg:items-center lg:gap-12">
          <motion.div
            className="lg:w-1/2 mb-8 lg:mb-0"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? ["visible", "bounce"] : "hidden"} 
          >
            <img
              className="rounded-xl shadow-xl w-full h-auto object-cover transform transition-transform duration-500 hover:scale-[1.01]"
              src={aboutImageUrl}
              alt="Our Team or Project"
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x500/f0f0f0/333?text=Image+Not+Found'; }}
            />
          </motion.div>

          {/* Pillars and CTA Column */}
          <motion.div
            className="lg:w-1/2 space-y-10"
            variants={pillarsContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Pillar 1 */}
            <motion.div className="flex items-start" variants={pillarItemVariants}>
              <div className="flex-shrink-0">
                <ClipboardList className="h-8 w-8 text-teal-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-900">{pillar1Title}</h3>
                <p className="mt-2 text-gray-700">{pillar1Description}</p>
              </div>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div className="flex items-start" variants={pillarItemVariants}>
              <div className="flex-shrink-0">
                <Zap className="h-8 w-8 text-teal-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-900">{pillar2Title}</h3>
                <p className="mt-2 text-gray-700">{pillar2Description}</p>
              </div>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div className="flex items-start" variants={pillarItemVariants}>
              <div className="flex-shrink-0">
                <HeartHandshake className="h-8 w-8 text-teal-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-900">{pillar3Title}</h3>
                <p className="mt-2 text-gray-700">{pillar3Description}</p>
              </div>
            </motion.div>

            {/* Call to Action Button */}
            <motion.div className="mt-10 flex justify-start ml-16" variants={ctaButtonVariants}>
              <button
                onClick={onCtaClick}
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300 transform hover:scale-[1.02]"
                whilehover={{ scale: 1.05 }}
                whiletap={{ scale: 0.95 }}
              >
                {ctaText}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
