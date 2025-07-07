import React, { createElement } from 'react';
import { motion } from 'framer-motion';
import { HardHat, DraftingCompass, Building, Lightbulb, Recycle, BriefcaseBusiness, ChevronRight, Factory } from 'lucide-react'; // Original icons

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
    description: "Leveraging cutting-cutting-edge technology and experienced engineers to deliver detailed, efficient, and robust designs for every project phase.",
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
  const iconBackgroundColors = [
    'bg-blue-600',
    'bg-purple-600',
    'bg-green-600',
    'bg-red-600',
    'bg-yellow-600',
    'bg-indigo-600',
  ];


  const iconRotateVariants = {
    rotate: {
      rotate: 360,
      transition: {
        repeat: Infinity, 
        ease: "linear",  
        duration: 10 
      }
    }
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8,  ease: [0.42, 0, 0.58, 1] } },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8,  ease: [0.42, 0, 0.58, 1] } },
  };

  return (
    <section id='services' className="py-16 lg:py-24 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl font-['Montserrat'] leading-tight">
            {sectionTitle}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {sectionSubtitle}
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              key={index}
              className="relative bg-white rounded-xl shadow-lg p-8 overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="absolute inset-0 bg-gray-100 opacity-100 group-hover:opacity-0 transition-opacity duration-300 rounded-xl"></div>

              <motion.div
                className={`relative z-10 w-16 h-16 flex items-center justify-center text-white rounded-full mb-6 transform transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 ${iconBackgroundColors[index % iconBackgroundColors.length]}`}
                variants={iconRotateVariants}
                whileInView="rotate" 
                viewport={{ once: true, amount: 0.2 }}
              >
                {createElement(service.icon, { className: 'w-8 h-8' })}
              </motion.div>

              <h3 className="relative z-10 text-xl md:text-2xl font-bold text-gray-900 mb-3">
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
        </div>
      </div>
    </section>
  );
};

export default Services;
