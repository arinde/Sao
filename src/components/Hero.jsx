import React, { useState, useEffect } from 'react';
import Image5 from '../assets/image5.jfif';
import Image2 from '../assets/image2.jfif';
import Image3 from '../assets/image3.jfif';
import Image4 from '../assets/image4.jfif';
import { useNavigate } from 'react-router-dom';

const Hero = ({
  imageUrls = [
    Image5, 
    Image2, 
    Image3, 
    Image4 
  ],
  headline = "Building Tomorrow's Infrastructure, Today.",
  subheading = "Precision Engineering, Sustainable Solutions, Unwavering Commitment.",
  ctaText = "Explore Our Projects",
  onCtaClick = () => alert('Explore Projects clicked!')
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % imageUrls.length 
      );
    }, 5000); 

    return () => clearInterval(timer);
  }, [imageUrls.length]);
  return (
    
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
  
      {imageUrls.map((imageUrl, index) => (
        <div
          key={index} 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          } z-0`}
          style={{ backgroundImage: `url('${imageUrl}')` }}
        ></div>
      ))}

      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div className="relative z-20 text-white px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
        <h1 className="font-['Montserrat'] text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          {headline}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-medium mb-8">
          {subheading}
        </p>
        <button
          onClick={() => {navigate('/projects')}}
          className="bg-lime-600 hover:bg-lime-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 inline-block"
        >
          {ctaText}
        </button>
      </div>
    </section>
  );
};

export default Hero; 