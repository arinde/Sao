import React, { useState } from 'react';

const galleryImages = [
  { src: '/Images/Gallery8.jpeg', title: 'Steel Framework Installation' },
  { src: '/Images/Gallery1.jpeg', title: 'Pipeline Welding Project' },
  { src: '/Images/Gallery2.jpeg', title: 'Heavy Equipment in Operation' },
  { src: '/Images/Gallery3.jpeg', title: 'Scaffolding & Labour Setup' },
  { src: '/Images/Gallery4.jpeg', title: 'Industrial Painting Work' },
  { src: '/Images/Gallery5.jpeg', title: 'Mechanical Assembly Unit' },
  { src: '/Images/Gallery6.jpeg', title: 'On-site Steel Work' },
  { src: '/Images/Gallery7.jpeg', title: 'Fabrication & Welding' },
  { src: '/Images/Gallery8.jpeg', title: 'Team Inspection Activity' },
  { src: '/Images/Gallery9.jpeg', title: 'Cranes & Equipment Operation' },
  { src: '/Images/Gallery10.jpeg', title: 'Warehouse & Logistics' },
  { src: '/Images/Gallery11.jpeg', title: 'Project Completion Stage' },
  { src: '/Images/Gallery12.jpeg', title: 'Project Completion Stage' },
  { src: '/Images/Gallery13.jpeg', title: 'Project Completion Stage' },
  { src: '/Images/Gallery14.jpeg', title: 'Project Completion Stage' },
  { src: '/Images/Gallery15.jpeg', title: 'Project Completion Stage' },
  { src: '/Images/Gallery16.jpeg', title: 'Project Completion Stage' },
  { src: '/Images/Gallery17.jpeg', title: 'Project Completion Stage' },
  { src: '/Images/Gallery18.jpeg', title: 'Project Completion Stage' },
  { src: '/Images/Gallery19.jpeg', title: 'Project Completion Stage' },
  { src: '/Images/Gallery20.jpeg', title: 'Project Completion Stage' },
  { src: '/Images/Gallery21.jpeg', title: 'Project Completion Stage' },
  { src: '/Images/Gallery22.jpeg', title: 'Project Completion Stage' },
  { src: '/Images/Gallery23.jpeg', title: 'Project Completion Stage' },
   { src: '/Images/Gallery24.jpeg', title: 'Project Completion Stage' },
  { src: '/Images/Gallery25.jpeg', title: 'Project Completion Stage' },
  { src: '/Images/Gallery26.jpeg', title: 'Project Completion Stage' },
  { src: '/Images/Gallery27.jpeg', title: 'Project Completion Stage' },
  { src: '/Images/Gallery27.jpeg', title: 'Project Completion Stage' },
];

const GalleryImage = ({ src, title }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg">
      <img
        src={src}
        alt={title}
        onLoad={() => setLoaded(true)}
        className={`w-full h-64 object-cover transform group-hover:scale-105 transition duration-300 ${
          loaded ? 'blur-0' : 'blur-md'
        }`}
      />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/60 text-sm font-medium text-blue-800">
          Loading...
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 bg-white/80 text-blue-900 text-sm font-semibold text-center px-4 py-2">
        {title}
      </div>
    </div>
  );
};

const GalleryPage = () => {
  return (
    <section className="py-20 bg-gray-100 min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Full Project Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <GalleryImage key={index} src={image.src} title={image.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
