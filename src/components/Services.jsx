import React from 'react';
import { motion, useInView } from 'framer-motion'; // Import motion and useInView
import { HardHat, DraftingCompass, Building, Lightbulb, Recycle, BriefcaseBusiness, ChevronRight, Factory } from 'lucide-react';

const defaultServices = [
  {
    icon: Factory,
    title: "Industrial Construction & Specialized Facilities",
    description: "Expertly building robust factory structures, specialized industrial facilities, and industry-standard installations like furnace pits to meet precise operational demands.",
    link: "#"
  },
  {
    icon: HardHat,
    title: "Civil Infrastructure Development",
    description: "From roads and bridges to complex utility networks, we build the foundations that drive progress and connect communities.",
    link: "#"
  },
  {
    icon: Building,
    title: "Commercial & Residential Construction",
    description: "Creating innovative and sustainable spaces, from high-rise commercial complexes to bespoke residential properties, designed for modern living.",
    link: "#"
  },
  {
    icon: DraftingCompass,
    title: "Precision Engineering & Design",
    description: "Leveraging cutting-edge technology and experienced engineers to deliver detailed, efficient, and robust designs for every project phase.",
    link: "#"
  },
  {
    icon: Lightbulb,
    title: "Sustainable & Green Building",
    description: "Implementing eco-friendly practices and materials to construct energy-efficient buildings that minimize environmental impact and maximize value.",
    link: "#"
  },
  {
    icon: BriefcaseBusiness,
    title: "Project Management & Consultancy",
    description: "Expert guidance from concept to completion, ensuring projects are delivered on time, within budget, and to the highest quality standards.",
    link: "#"
  },
];

const Services = ({
  services = defaultServices,
  sectionTitle = "Our Expertise: Building Beyond Expectation",
  sectionSubtitle = "Discover the comprehensive range of civil and construction engineering services we offer to deliver your vision.",
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // Animate once when 30% of component is in view

  const iconBackgroundColors = [
    'bg-blue-600',
    'bg-purple-600',
    'bg-green-600',
    'bg-red-600',
    'bg-yellow-600',
    'bg-indigo-600',
  ];

  // Variants for section header (headline and introText)
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Variants for the grid container (staggers children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each card animation
        delayChildren: 0.3 // Delay before cards start animating
      }
    }
  };

  // Variants for individual card items (alternating slide-in)
  const cardVariants = (index) => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 }, // Even index from left, odd from right
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  });

  // Variants for the icon and its background to rotate continuously
  const iconRotateVariants = {
    rotate: {
      rotate: 360, // Rotate 360 degrees
      transition: {
        repeat: Infinity, // Repeat indefinitely
        ease: "linear",   // Linear speed for continuous rotation
        duration: 10      // Duration of one full rotation (10 seconds)
      }
    }
  };

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl font-['Montserrat'] leading-tight">
            {sectionTitle}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-xl shadow-lg p-8 overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              variants={cardVariants(index)} // Apply dynamic card variants
              whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }} // Enhanced hover effect
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="absolute inset-0 bg-gray-100 opacity-100 group-hover:opacity-0 transition-opacity duration-300 rounded-xl"></div>

              {/* Icon and its background with continuous rotation */}
              <motion.div
                className={`relative z-10 w-16 h-16 flex items-center justify-center text-white rounded-full mb-6 transform transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 ${iconBackgroundColors[index % iconBackgroundColors.length]}`}
                variants={iconRotateVariants}
                animate={isInView ? "rotate" : {}} // Apply the continuous rotation animation only when in view
              >
                {React.createElement(service.icon, { className: 'w-8 h-8' })}
              </motion.div>

              <h3 className="relative z-10 text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="relative z-10 text-gray-700 mb-6">
                {service.description}
              </p>

              {service.link && (
                <a
                  href={service.link}
                  className="relative z-10 inline-flex items-center text-teal-600 font-semibold hover:text-teal-800 transition-colors duration-300"
                >
                  Learn More
                  <ChevronRight className="w-5 h-5 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
