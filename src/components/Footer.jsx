import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 lg:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">

          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-3xl font-extrabold text-white mb-4 font-['Montserrat']">
              Sao Works Nig Ltd.
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Building the future, one foundation at a time. Precision, innovation, and unwavering commitment to excellence in every project.
            </p>
        
            <div className="flex space-x-4 mt-6">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-500 transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-teal-500 transition-colors duration-200">Home</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors duration-200">Services</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors duration-200">Projects</a></li>
              <Link to="/team"><li><a href="#" className="hover:text-teal-500 transition-colors duration-200">Team</a></li></Link>
              <li><a href="#" className="hover:text-teal-500 transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>

          {/* Services Overview */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-teal-500 transition-colors duration-200">Infrastructure Development</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors duration-200">Commercial Construction</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors duration-200">Industrial Facilities</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors duration-200">Engineering & Design</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors duration-200">Sustainable Building</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Contact Us</h4>
            <address className="not-italic space-y-3">
              <p className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-teal-500 flex-shrink-0 mt-1" />
                <span>123 Construction Blvd, <br /> Cityville, State, 12345, Nigeria</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-teal-500" />
                <a href="tel:+2348012345678" className="hover:text-teal-500 transition-colors duration-200">+234 801 234 5678</a>
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-teal-500" />
                <a href="mailto:info@yourcompany.com" className="hover:text-teal-500 transition-colors duration-200">info@yourcompany.com</a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright and Bottom Links */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Sao Works Nig Ltd. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-teal-500 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-teal-500 transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
