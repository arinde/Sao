import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion'; 
import { Award, ShieldCheck, Handshake, Leaf, Users, Factory, CalendarCheck } from 'lucide-react';

const defaultReasons = [
  {
    imageUrl: 'https://placehold.co/800x500/0d9488/f1f5f9?text=Expert+Team',
    title: "Unrivaled Expertise & Experience",
    description: "Our team comprises highly skilled engineers, seasoned project managers, and dedicated craftsmen with decades of collective experience in delivering complex civil and construction projects. We bring unparalleled knowledge to every challenge.",
    imagePosition: 'left' 
  },
  {
    imageUrl: 'https://placehold.co/800x500/1e40af/bfdbfe?text=Innovative+Solutions',
    title: "Innovative & Sustainable Solutions",
    description: "We are at the forefront of adopting cutting-edge construction technologies and sustainable practices. Our commitment to innovation ensures cost-effective, environmentally responsible, and future-proof infrastructure.",
    imagePosition: 'right'
  },
  {
    imageUrl: 'https://placehold.co/800x500/d97706/fff7ed?text=Safety+First', // Placeholder for safety/quality
    title: "Unwavering Commitment to Safety & Quality",
    description: "Safety is paramount in every phase of our operations, ensuring the well-being of our workforce and the public. Coupled with stringent quality control, we guarantee structures that are not only safe but also built to last.",
    imagePosition: 'left'
  },
  {
    imageUrl: 'https://placehold.co/800x500/4d7c0f/f1f5f9?text=Client+Partnership', // Placeholder for client focus/partnership
    title: "Client-Centric Partnership Approach",
    description: "We believe in collaborative partnerships. Your vision and objectives are at the heart of our strategy, ensuring transparent communication, flexibility, and tailored solutions that exceed expectations.",
    imagePosition: 'right'
  },
];

const trustBadges = [
  { icon: Award, text: "Industry Certified Excellence" },
  { icon: ShieldCheck, text: "Uncompromising Safety Standards" },
  { icon: Handshake, text: "Trusted Client Partnerships" },
  { icon: Leaf, text: "Sustainable Practices Adhered" },
];

const stats = [
  { label: "Projects Completed", value: 250, suffix: "+" },
  { label: "Years of Experience", value: 15, suffix: "+" },
  { label: "Satisfied Clients", value: 180, suffix: "+" },
  { label: "Team Members", value: 75, suffix: "+" },
];

const AnimatedCounter = ({ from = 0, to, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = from;
      const end = to;
      const increment = (end - start) / (duration * 60);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const WhyChooseUs = ({
  reasons = defaultReasons,
  sectionTitle = "Why Partner With Us?",
  sectionSubtitle = "Our commitment to excellence, innovation, and client satisfaction sets us apart in the civil and construction engineering industry.",
  ctaText = "Get a Free Consultation",
  onCtaClick = () => console.log("Get a Free Consultation clicked!")
}) => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl font-['Montserrat'] leading-tight">
            {sectionTitle}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {sectionSubtitle}
          </p>
        </div>

        <div className="mt-16 mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8 font-['Montserrat']">
            Our Core Strengths
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {trustBadges.map((badge, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105">
                {React.createElement(badge.icon, { className: 'w-12 h-12 text-teal-600 mb-4' })}
                <p className="text-lg font-semibold text-gray-800">{badge.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                reason.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Column */}
              <div className="lg:w-1/2 w-full">
                <img
                  className="rounded-xl shadow-xl transform transition-transform duration-500 hover:scale-[1.01] object-cover w-full h-auto"
                  src={reason.imageUrl}
                  alt={reason.title}
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x500/f0f0f0/333?text=Image+Not+Found'; }} // Fallback
                />
              </div>

              {/* Text Content Column */}
              <div className="lg:w-1/2 w-full text-center lg:text-left">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-['Montserrat'] leading-tight">
                  {reason.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Animated Counters Section */}
        <div className="mt-20 lg:mt-28 bg-teal-700 text-white p-12 rounded-xl shadow-xl">
          <h3 className="text-3xl font-bold text-center mb-10 font-['Montserrat']">
            Our Achievements at a Glance
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-5xl font-extrabold mb-2 font-['Montserrat']">
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-lg font-medium opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Optional Call to Action for the entire section */}
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

export default WhyChooseUs;
