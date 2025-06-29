import React from 'react';
import Image1 from '../assets/image1.jfif';
import { ClipboardList, Zap, HeartHandshake } from 'lucide-react';

const About = ({
  aboutImageUrl = Image1,
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
  return (
    <section className="py-16 lg:py-24 bg-white font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl font-['Montserrat']">
            {headline}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {introText}
          </p>
        </div>

        <div className="lg:flex lg:items-center lg:gap-12">
          
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              className="rounded-xl shadow-xl w-full h-auto object-cover transform transition-transform duration-500 hover:scale-[1.01]"
              src={aboutImageUrl}
              alt="Our Team or Project"
            />
          </div>

          
          <div className="lg:w-1/2 space-y-10">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                  <ClipboardList className="h-8 w-8 text-teal-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-900">{pillar1Title}</h3>
                <p className="mt-2 text-gray-700">{pillar1Description}</p>
              </div>
            </div>

            
            <div className="flex items-start">
              <div className="flex-shrink-0">
               <Zap className="h-8 w-8 text-teal-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-900">{pillar2Title}</h3>
                <p className="mt-2 text-gray-700">{pillar2Description}</p>
              </div>
            </div>

            
            <div className="flex items-start">
             
              <div className="flex-shrink-0">
                <HeartHandshake className="h-8 w-8 text-teal-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-900">{pillar3Title}</h3>
                <p className="mt-2 text-gray-700">{pillar3Description}</p>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="mt-10">
              <button
                onClick={onCtaClick}
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300 transform hover:scale-[1.02]"
              >
                {ctaText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
