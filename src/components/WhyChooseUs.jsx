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
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Keeping useInView for the counter itself

  useEffect(() => {
    if (isInView) {
      let start = from;
      const end = to;
      const increment = (end - start) / (duration * 60); // 60 frames per second

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, 1000 / 60); // Update 60 times per second

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
  // Removed the top-level ref and isInView for the whole section.
  // Animations will now be triggered by whileInView on individual motion.divs.

  // Variants for section header
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Variants for trust badges container
  const badgesContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each badge
        delayChildren: 0.3
      }
    }
  };

  // Variants for individual trust badges
  const badgeItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Variants for reasons container (staggers children)
  const reasonsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Slightly increased stagger
        delayChildren: 0.6 // Increased delay
      }
    }
  };

  // Variants for individual reason blocks (image and text)
  const reasonBlockVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } } // Increased duration
  };

  // Variants for animated counters section
  const countersSectionVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.0, ease: "easeOut", delay: 0.7 } } // Increased duration and delay
  };

  // Variants for CTA button
  const ctaButtonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.9 } } // Increased duration and delay
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible" // Trigger animation when in view
          viewport={{ once: true, amount: 0.2 }} // Animate once when 20% of element is in view
        >
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl font-['Montserrat'] leading-tight">
            {sectionTitle}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Core Strengths / Trust Badges Section */}
        <motion.div
          className="mt-16 mb-20"
          variants={badgesContainerVariants}
          initial="hidden"
          whileInView="visible" // Trigger animation when in view
          viewport={{ once: true, amount: 0.2 }} // Animate once when 20% of element is in view
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8 font-['Montserrat']">
            Our Core Strengths
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105"
                variants={badgeItemVariants} // Apply badge item variants
                whileHover={{ scale: 1.08 }}
              >
                {React.createElement(badge.icon, { className: 'w-12 h-12 text-teal-600 mb-4' })}
                <p className="text-lg font-semibold text-gray-800">{badge.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reasons Section */}
        <motion.div
          className="space-y-20 lg:space-y-28"
          variants={reasonsContainerVariants} // Apply reasons container variants
          initial="hidden"
          whileInView="visible" // Trigger animation when in view
          viewport={{ once: true, amount: 0.2 }} // Animate once when 20% of element is in view
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                reason.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
              variants={reasonBlockVariants} // Apply reason block variants
            >
              <div
                className="lg:w-1/2 w-full"
              >
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
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Counters Section - Animated but numbers untouched */}
        <motion.div
          className="mt-20 lg:mt-28 bg-teal-800 text-white p-12 rounded-xl shadow-xl"
          variants={countersSectionVariants} // Apply counters section variants
          initial="hidden"
          whileInView="visible" // Trigger animation when in view
          viewport={{ once: true, amount: 0.2 }} // Animate once when 20% of element is in view
        >
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
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          variants={ctaButtonVariants} // Apply CTA button variants
          initial="hidden"
          whileInView="visible" // Trigger animation when in view
          viewport={{ once: true, amount: 0.2 }} // Animate once when 20% of element is in view
        >
          <button
            onClick={onCtaClick}
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300 transform hover:scale-[1.02]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {ctaText}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
