import React, { useState } from 'react';
import { MoveUpRight } from 'lucide-react';
import {  motion } from 'framer-motion';
import Button from './Button';
import { Link } from 'react-router-dom';

function scrollWithOffset(el: HTMLElement) {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -120; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav 
    className="bg-gray-50 text-black shadow-lg opacity-95 fixed z-50 w-full">
      <div className="max-w-7xl md:mx-auto mx-5 md:px-4 px-3 sm:px-6 lg:px-8 flex md:justify-evenly justify-between items-center md:h-24 h-20">
        <Link to="/"><img src="/SaoLogo.png" alt="sao" className="md:w-28 md:h-16 w-24 h-12" /></Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" ><p className="hover:text-lime-600 font-medium cursor-pointer">Home</p></Link>
          <a href='#services' className="hover:text-lime-600 font-medium cursor-pointer">Our Services</a>
          <Link to="/projects"><p className="hover:text-lime-600 font-medium cursor-pointer">Projects</p></Link>
          <Link to="/gallery" ><p className="hover:text-lime-600 font-medium cursor-pointer">Gallery</p></Link>
          
        </div>
        <div 
        className='hidden md:flex -mt-3'>
            <Button 
            whatsapp 
            phone="2347064467278" 
            message="Hello, i am _______. i want to get a quote for a ________ Construction!"
            variant="primary" 
            size="medium" 
            className='mt-3 mx-5 flex items-center gap-x-1'>Get a Quote <MoveUpRight className='w-4 font-bold' /></Button>
        </div>

        {/* Hamburger/X Button */}
        <div className="md:hidden hover:border border-blue-50 hover:bg-blue-50 hover:rounded-lg hover:py-2 pl-2" onClick={toggleMenu}>
          <div className="relative w-8 h-6 cursor-pointer">
            {/* Top bar */}
            <span
              className={`absolute top-0 right-0 h-1 bg-lime-600 transition-all duration-300 ${
                isOpen
                  ? 'rotate-45 top-2.5 left-0 right-0 w-6'
                  : 'w-8 ml-auto top-0.5 right-0'
              }`}
            />
            {/* Middle bar */}
            <span
              className={`absolute top-2.5 left-0 h-1 bg-lime-600 transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'w-6 -top-2.5 left-2'
              }`}
            />
            {/* Bottom bar */}
            <span
              className={`absolute bottom-0 left-0 h-1 bg-lime-600 transition-all duration-300 ${
                isOpen
                  ? '-rotate-45 bottom-2.5 left-0 right-0 w-6'
                  : 'w-4 mr-auto top-4.5 left-4'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='pb-4 '>
          <div className="md:hidden  px-4 pb-4 space-y-2 flex flex-col items-start justify-center gap-y-5 border-0 rounded-3xl bg-gray-50 w-full shadow-lg">
            <Link to='/'><p onClick={toggleMenu} className="block hover:text-lime-600 mt-5 ml-4 font-serif font-medium text-lg">Home</p></Link>
           <a href='#services' onClick={toggleMenu} className="block hover:text-lime-600 font-serif ml-4 font-medium text-lg">Our Services</a>
            <Link to='/projects'><p onClick={toggleMenu} className="block hover:text-lime-600 font-serif ml-4 font-medium text-lg">Projects</p></Link>
            <Link to='/gallery'><p onClick={toggleMenu} className="block hover:text-lime-600 font-serif ml-4 font-medium text-lg">Gallery</p></Link>
          </div>
          <div>
            <Button
            whatsapp 
            phone="2347064467278" 
            message="Hello, i am _______. i want to get a quote for a ________ Construction!"
            variant="primary" 
            size="medium" 
            className='mt-3 mx-5 md:hidden flex shadow-2xl items-center gap-x-1'>Get Started <MoveUpRight className='w-4 font-bold' /></Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
