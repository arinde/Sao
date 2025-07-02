import React from 'react';
import { MapPin, CalendarDays, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const defaultProjects = [
  {
    imageUrl: 'https://placehold.co/600x400/94a3b8/e2e8f0?text=Grand+Bridge+Project',
    title: "Coastal Landmark Bridge",
    location: "Lagos, Nigeria",
    year: 2023,
    description: "A pivotal infrastructure project connecting key urban areas, designed to enhance traffic flow and promote regional development.",
    detailsLink: "#",
    status: "ongoing"
  },
  {
    imageUrl: 'https://placehold.co/600x400/64748b/e2e8f0?text=New+Office+Complex',
    title: "Apex Corporate Towers",
    location: "Abuja, Nigeria",
    year: 2022,
    description: "Construction of a state-of-the-art commercial complex featuring sustainable design and modern amenities for leading businesses.",
    detailsLink: "#",
    status: "completed"
  },
  {
    imageUrl: 'https://placehold.co/600x400/334155/e2e8f0?text=Industrial+Plant',
    title: "Mega-Factory Expansion",
    location: "Ogun State, Nigeria",
    year: 2024,
    description: "Expansive industrial facility project, including specialized foundations and an advanced furnace pit, built to rigorous international standards.",
    detailsLink: "#",
    status: "ongoing"
  },
  {
    imageUrl: 'https://placehold.co/600x400/0f766e/f1f5f9?text=Eco-Residences',
    title: "Green Harmony Residences",
    location: "Ibadan, Nigeria",
    year: 2023,
    description: "Development of an eco-friendly residential community featuring sustainable materials and energy-efficient designs.",
    detailsLink: "#",
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

  return (
    <section className="py-16 lg:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl font-['Montserrat'] leading-tight">
            {sectionTitle}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToDisplay.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-lg overflow-hidden group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
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
          ))}
        </div>
        <div className="text-center mt-16">
          <button
            onClick={handleCTAClick}
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300 transform hover:scale-[1.02]"
          >
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
