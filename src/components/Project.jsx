import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // Import motion and useInView
import { MapPin, CalendarDays, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const defaultProjects = [
  {
    imageUrl: 'Images/Gallery28.jpeg',
    title: "Furnace Pit Structure",
    location: "Ogun, Nigeria",
    year: 2024,
    description: "A pivotal infrastructure project connecting key urban areas, designed to enhance traffic flow and promote regional development.",
    status: "ongoing"
  },
  {
    imageUrl: '/Images/Gallery6.jpeg',
    title: "Apex Corporate Towers",
    location: "Abuja, Nigeria",
    year: 2022,
    description: "Construction of a state-of-the-art commercial complex featuring sustainable design and modern amenities for leading businesses.",
    status: "completed"
  },
  {
    imageUrl: 'https://placehold.co/600x400/334155/e2e8f0?text=Industrial+Plant',
    title: "Mega-Factory Expansion",
    location: "Ogun State, Nigeria",
    year: 2024,
    description: "Expansive industrial facility project, including specialized foundations and an advanced furnace pit, built to rigorous international standards.",
    status: "ongoing"
  },
  {
    imageUrl: 'https://placehold.co/600x400/0f766e/f1f5f9?text=Eco-Residences',
    title: "Green Harmony Residences",
    location: "Ibadan, Nigeria",
    year: 2023,
    description: "Development of an eco-friendly residential community featuring sustainable materials and energy-efficient designs.",

    status: "completed"
  },
];

const Project = ({
  projects = defaultProjects,
  sectionTitle = "Our Latest Projects",
  sectionSubtitle = "A glimpse into our recent engineering marvels.",
  ctaText = "View All Projects",
}) => {
  const projectsToDisplay = projects.slice(0, 3);

  const navigate = useNavigate();
  const handleCTAClick = () => {
    navigate('/projects');
  }

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // Animate once when 30% of component is in view

  // Variants for section header (headline and introText)
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeOut" } } // Increased duration for smoother slide
  };

  // Variants for the grid container (staggers children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Slightly increased stagger for more noticeable individual entry
        delayChildren: 0.4 // Increased delay before cards start animating
      }
    }
  };

  // Variants for individual card items (fade in and slide up)
  const cardVariants = {
    hidden: { opacity: 0, y: 70 }, // Increased y for a more pronounced slide up
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } // Increased duration for smoother fade/slide
  };

  // Variants for the CTA button
  const ctaButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } } // Increased duration and delay
  };

  return (
    <section ref={ref} className="py-12 lg:py-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl font-['Montserrat'] leading-tight">
            {sectionTitle}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projectsToDisplay.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl shadow-lg overflow-hidden group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              variants={cardVariants} // Apply item variants to each card
              whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }} // Enhanced hover effect
            >
              <div className="w-full h-64 md:h-72 overflow-hidden">
                <img
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  src={project.imageUrl}
                  alt={project.title}
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/94a3b8/e2e8f0?text=Image+Loading+Error'; }} // Fallback
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-['Montserrat'] leading-tight">
                  {project.title}
                </h3>

                <div className="flex items-center text-gray-600 text-sm mb-4 space-x-4">
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-teal-600" />
                    {project.location}
                  </span>
                  <span className="flex items-center">
                    <CalendarDays className="w-4 h-4 mr-1 text-teal-600" />
                    {project.year}
                  </span>
                </div>

                <p className="text-gray-700 mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          className="text-center mt-16"
          variants={ctaButtonVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <button
            onClick={handleCTAClick}
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300 transform hover:scale-[1.02]"
            whilehover={{ scale: 1.05 }}
            whiletap={{ scale: 0.95 }}
          >
            {ctaText}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
