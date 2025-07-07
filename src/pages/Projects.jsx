import { ExternalLink, MapPin, CalendarDays, SquareActivity } from 'lucide-react';
import React, { useState } from 'react';


const defaultProjects = [
  {
    imageUrl: '/image2.jfif',
    title: "Coastal Landmark Bridge",
    location: "Lagos, Nigeria",
    year: 2023,
    description: "A pivotal infrastructure project connecting key urban areas, designed to enhance traffic flow and promote regional development.",
    detailsLink: "#",
    category: "Infrastructure",
    status: "ongoing" 
  },
  {
    imageUrl: '/image3.jfif',
    title: "Apex Corporate Towers",
    location: "Abuja, Nigeria",
    year: 2022,
    description: "Construction of a state-of-the-art commercial complex featuring sustainable design and modern amenities for leading businesses.",
    detailsLink: "#",
    category: "Commercial",
    status: "completed" 
  },
  {
    imageUrl: '/image4.jfif',
    title: "Mega-Factory Expansion",
    location: "Ogun State, Nigeria",
    year: 2024,
    description: "Expansive industrial facility project, including specialized foundations and an advanced furnace pit, built to rigorous international standards.",
    detailsLink: "#",
    category: "Industrial",
    status: "ongoing"
  },
  {
    imageUrl: '/image5.jfif',
    title: "Green Harmony Residences",
    location: "Ibadan, Nigeria",
    year: 2023,
    description: "Development of an eco-friendly residential community featuring sustainable materials and energy-efficient designs.",
    detailsLink: "#",
    category: "Residential",
    status: "completed"
  },
  {
    imageUrl: '/image2.jfif',
    title: "Urban Flood Defense System",
    location: "Port Harcourt, Nigeria",
    year: 2021,
    description: "Implementation of comprehensive hydraulic structures and water management solutions to protect urban areas from seasonal flooding.",
    detailsLink: "#",
    category: "Water Management",
    status: "ongoing"
  },
  {
    imageUrl: '/image5.jfif',
    title: "National Highway Upgrade",
    location: "Across Nigeria",
    year: 2020,
    description: "Extensive renovation and expansion of key national highway sections, improving connectivity and reducing travel times.",
    detailsLink: "#",
    category: "Infrastructure",
    status: "completed"
  },
  
  {
    imageUrl: '/image2.jfif', 
    title: "International Airport Terminal",
    location: "Lagos, Nigeria",
    year: 2025,
    description: "Development of a new state-of-the-art terminal to expand capacity and enhance passenger experience.",
    detailsLink: "#",
    category: "Infrastructure",
    status: "ongoing"
  },
  {
    imageUrl: '/image4.jfif', 
    title: "Solar Power Plant Installation",
    location: "Kano, Nigeria",
    year: 2024,
    description: "Construction of a large-scale solar power generation facility contributing to Nigeria's renewable energy goals.",
    detailsLink: "#",
    category: "Sustainable",
    status: "completed"
  },
];

const Projects = ({
  projects = defaultProjects,
  sectionTitle = "Our Landmark Projects",
  sectionSubtitle = "Witness the impact of our engineering prowess through a selection of our most significant and innovative constructions.",
  ctaText = "View All Projects",
  onCtaClick = () => console.log("View All Projects clicked!")
}) => {
 
  const [activeFilter, setActiveFilter] = useState('all');
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') {
      return true;
    }
    return project.status === activeFilter;
  });

 
  const getFilterButtonClasses = (filterName) => {
    return `px-6 py-2 rounded-full font-semibold text-lg transition-colors duration-300
            ${activeFilter === filterName
                ? 'bg-teal-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
            }`;
  };

  return (
    <section className="py-16 lg:py-24 bg-white font-sans pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pt-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl font-['Montserrat'] leading-tight">
            {sectionTitle}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {sectionSubtitle}
          </p>
        </div>

        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setActiveFilter('all')}
            className={getFilterButtonClasses('all')}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveFilter('ongoing')}
            className={getFilterButtonClasses('ongoing')}
          >
            Ongoing
          </button>
          <button
            onClick={() => setActiveFilter('completed')}
            className={getFilterButtonClasses('completed')}
          >
            Completed
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-lg overflow-hidden group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                
                <div className="w-full h-64 md:h-72 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    src={project.imageUrl}
                    alt={project.title}
                    
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

                  {project.detailsLink && (
                    <a
                      href={project.detailsLink}
                      className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-800 transition-colors duration-300"
                    >
                      View Details
                      <ExternalLink className="w-5 h-5 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-lg p-8 bg-gray-100 rounded-lg shadow-inner">
              No projects found for this category.
            </div>
          )}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300 transform hover:scale-[1.02]"
          >
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
