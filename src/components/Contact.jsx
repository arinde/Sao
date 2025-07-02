import React, { useState } from 'react';

import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Contact = ({
  pageTitle = "Get In Touch With Us",
  pageSubtitle = "Have a question or a project in mind? Reach out to our team of experts. We're here to help you build the future.",
  address = "123 Construction Blvd, Cityville, State, 12345, Nigeria",
  phone = "+234 801 234 5678",
  email = "info@yourcompany.com",
  mapImageUrl = "https://placehold.co/800x400/e0e0e0/333?text=Map+Placeholder", // Placeholder for a map image
  socialLinks = {
    linkedin: "#",
    twitter: "#",
    facebook: "#",
    instagram: "#",
  }
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the formData to your backend API
    // e.g., using fetch or axios:
    // fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data);
    //   alert('Your message has been sent!');
    //   setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    //   alert('There was an error sending your message. Please try again.');
    // });

    // For demonstration, just clear the form after logging
    alert('Your message has been sent!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    // Main page container
    <section className="py-16 lg:py-24 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl font-['Montserrat'] leading-tight">
            {pageTitle}
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {pageSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information Column */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-['Montserrat']">
                Reach Out Directly
              </h3>
              <div className="space-y-6 text-lg text-gray-700">
                <p className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 text-teal-600 flex-shrink-0 mt-1" />
                  <span>{address}</span>
                </p>
                <p className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-teal-600" />
                  <a href={`tel:${phone}`} className="hover:text-teal-800 transition-colors duration-200">{phone}</a>
                </p>
                <p className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-teal-600" />
                  <a href={`mailto:${email}`} className="hover:text-teal-800 transition-colors duration-200">{email}</a>
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-10">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Connect With Us</h4>
              <div className="flex space-x-5">
                {socialLinks.linkedin && (
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors duration-200">
                    <Linkedin className="w-7 h-7" />
                  </a>
                )}
                {socialLinks.twitter && (
                  <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors duration-200">
                    <Twitter className="w-7 h-7" />
                  </a>
                )}
                {socialLinks.facebook && (
                  <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                    <Facebook className="w-7 h-7" />
                  </a>
                )}
                {socialLinks.instagram && (
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500 transition-colors duration-200">
                    <Instagram className="w-7 h-7" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-['Montserrat']">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Describe your project or question here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300 transform hover:scale-[1.01]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 lg:mt-24 bg-white rounded-xl shadow-lg overflow-hidden">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-6 pt-8 font-['Montserrat']">
            Find Our Location
          </h3>
          <div className="w-full h-80 lg:h-96">
            <img
              src={mapImageUrl}
              alt="Company Location Map"
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x400/e0e0e0/333?text=Map+Loading+Error'; }} // Fallback
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
