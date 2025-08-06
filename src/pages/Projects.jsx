import { ExternalLink, MapPin, CalendarDays, SquareActivity } from 'lucide-react';
import React, { useState } from 'react';


const defaultProjects = [
  {
    imageUrl: '/Images/Gallery23.jpeg',
    title: "Furnace Pit structure 1",
    location: "RCPL Ogun, Nigeria",
    year: 2025,
    description: "Constructed a reinforced furnace pit structure with high-grade materials, ensuring durability, safety, and compliance with industrial standards.",
    detailsLink: "#",
    category: "Industrial",
    status: "completed" 
  },
  {
    imageUrl: '/Team/Lab.jpeg',
    title: "Silicate Laboratory Building",
    location: "Sil chemicals, Ogun",
    year: 2025,
    description: "Construction of a state-of-the-art commercial complex featuring sustainable design and modern amenities for leading businesses.",
    detailsLink: "#",
    category: "Industrial",
    status: "ongoing" 
  },
  {
    imageUrl: '/Images/Gallery20.jpeg',
    title: "Furnace Pit structure 2 RCPL",
    location: "RCPL, Ogun",
    year: 2025,
    description: "Expansive industrial facility project, including specialized foundations and an advanced furnace pit, built to rigorous international standards.",
    detailsLink: "#",
    category: "Industrial",
    status: "completed"
  },
  {
    imageUrl: '/Images/Gallery24.jpeg',
    title: "Construction of MCC building",
    location: "RCPL, Ogun",
    year: 2025,
    description: "Built a modern control room facility with reinforced structure, ensuring safety functionality, and optimal space for operational monitoring.",
    detailsLink: "#",
    category: "Industrial",
    status: "ongoing"
  },
  {
    imageUrl: '/Images2/Excavation2.jpeg',
    title: "Furnace Pit structure 3 RCPL",
    location: "RCPL, Ogun",
    year: 2025,
    description: "Expansive industrial facility project, including specialized foundations and an advanced furnace pit, built to rigorous international standards.",
    detailsLink: "#",
    category: "Industrial",
    status: "ongoing"
  },
  {
    imageUrl: '/Images2/FloorMarking2.jpeg',
    title: "Floor Marking",
    location: "Unilever, Ogun",
    year: 2024,
    description: "Applied durable, high visilbilty floor markings to improve safety, traffic control, and operational efficiency in industrial enviroments.",
    detailsLink: "#",
    category: "Infrastructure",
    status: "completed"
  },
  {
    imageUrl: '/Images2/Demolition.jpeg',
    title: "Demolition Work",
    location: "Unilever, Ogun",
    year: 2024,
    description: "Executed controlled demolition using advanced equipment, ensuring safety, minimal disruption and compliance with enviromental regulations.",
    detailsLink: "#",
    category: "Infrastructure",
    status: "completed"
  },
  {
    imageUrl: '/Images2/IndianSchool.jpeg',
    title: "Building Construction",
    location: "Indian School, Lagos",
    year: 2024,
    description: "Constucted a modern school building with durable materials, ensuring safety, functionality, and a conducive learning enviroment for students.",
    detailsLink: "#",
    category: "Infrastructure",
    status: "completed"
  },
  {
    imageUrl: '/Images2/Epoxyl.jpeg',
    title: "Epoxyl Flooring",
    location: "Unilever, Ogun",
    year: 2024,
    description: "Intsalled high quality epoxyl flooring, providing a durable, and chemical resistant surface ideal for industrial and commercial applications.",
    detailsLink: "#",
    category: "Infrastructure",
    status: "completed"
  },
  
];

const Projects = ({
  projects = defaultProjects,
  sectionTitle = "Our Landmark Projects",
  sectionSubtitle = "Witness the impact of our engineering prowess through a selection of our most significant and innovative constructions.",
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
      </div>
    </section>
  );
};

export default Projects;
