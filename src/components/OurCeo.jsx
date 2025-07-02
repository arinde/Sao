import React from 'react';
import { useNavigate } from 'react-router-dom';

const OurCeo = ({
  ceoImageUrl = 'https://placehold.co/400x400/a3a3a3/e2e8f0?text=CEO+Image', // Placeholder for CEO's image
  ceoName = "Arinde Victor",
  ceoTitle = "CEO & Founder",
  ceoQuote = "“Building a sustainable future requires not just engineering prowess, but a deep commitment to our communities and the environment.”",
  ctaText = "Meet Our Entire Team",
  
}) => {
   const navigate = useNavigate(); 

   const handleCtaClick = () => {
    navigate('/team')
   }
  return (
    <section className="py-16 lg:py-24 bg-white font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl font-['Montserrat'] leading-tight">
            A Message From Our CEO
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our vision is shaped by experience, innovation, and a passion for excellence.
          </p>
        </div>
        <div className="bg-gray-50 rounded-xl shadow-xl overflow-hidden p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
          <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-teal-600">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
              src={ceoImageUrl}
              alt={ceoName}
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400/a3a3a3/e2e8f0?text=Image+Not+Found'; }} // Fallback
            />
          </div>
          <div className="flex-grow text-center lg:text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 font-['Montserrat'] leading-tight">
              {ceoName}
            </h3>
            <p className="text-teal-600 text-xl font-medium mb-6">
              {ceoTitle}
            </p>
            <blockquote className="text-gray-700 text-lg italic border-l-4 border-teal-600 pl-4 mb-8">
              "{ceoQuote}"
            </blockquote>
            
            <button
              onClick={handleCtaClick}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300 transform hover:scale-[1.02]"
            >
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCeo;
