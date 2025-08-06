import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ShieldCheck, Handshake, Leaf, Users, Factory, CalendarCheck } from 'lucide-react';
import Button from './Button'
import { useInView as useScrollInView } from 'react-intersection-observer'
import confetti from 'canvas-confetti'

const defaultReasons = [
  {
    imageUrl: '/expert.jfif',
    title: "Unrivaled Expertise & Experience",
    description: "Our team comprises highly skilled engineers, seasoned project managers, and dedicated craftsmen with decades of collective experience in delivering complex civil and construction projects. We bring unparalleled knowledge to every challenge.",
    imagePosition: 'left'
  },
  {
    imageUrl: 'innovative.jfif',
    title: "Innovative & Sustainable Solutions",
    description: "We are at the forefront of adopting cutting-edge construction technologies and sustainable practices. Our commitment to innovation ensures cost-effective, environmentally responsible, and future-proof infrastructure.",
    imagePosition: 'right'
  },
  {
    imageUrl: 'safety.jfif',
    title: "Unwavering Commitment to Safety & Quality",
    description: "Safety is paramount in every phase of our operations, ensuring the well-being of our workforce and the public. Coupled with stringent quality control, we guarantee structures that are not only safe but also built to last.",
    imagePosition: 'left'
  },
  {
    imageUrl: 'client.jfif',
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
  { label: "Projects Completed", value: 20, suffix: "+" },
  { label: "Years of Experience", value: 15, suffix: "+" },
  { label: "Satisfied Clients", value: 10, suffix: "+" },
  { label: "Team Members", value: 20, suffix: "+" },
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
}) => {
  
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const badgesContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, 
        delayChildren: 0.3
      }
    }
  };

  const badgeItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const reasonsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.6 
      }
    }
  };

  const reasonBlockVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
  };

  const countersSectionVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.0, ease: "easeOut", delay: 0.7 } }
  };

  const ctaButtonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.9 } } 
  };

  const { ref, inView } = useScrollInView ({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() =>{
    if (inView) {
      const duration = 6000;
      const animationEnd = Date.now() + duration;

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0){
          clearInterval(interval);
          return;
        }

        confetti({
        particleCount: 50,
        startVelocity: 30,
        spread: 360,
        origin: { 
          x: Math.random(),
          y: Math.random() * 0.5
        },
        zIndex: 9999,
      });
      }, 250)
    }
  }, [inView])

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
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl font-['Montserrat'] leading-tight">
            {sectionTitle}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {sectionSubtitle}
          </p>
        </motion.div>

        <motion.div
          className="mt-16 mb-20"
          variants={badgesContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 font-['Montserrat']">
            Our Core Strengths
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                className="bg-white md:p-6 p-2 rounded-xl shadow-md flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105"
                variants={badgeItemVariants}
                whileHover={{ scale: 1.08 }}
              >
                {React.createElement(badge.icon, { className: 'md:w-12 md:h-12 h-10 w-10 text-teal-600 mb-3 md:mb-4' })}
                <p className="text-lg font-semibold text-gray-800">{badge.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="space-y-20 lg:space-y-28"
          variants={reasonsContainerVariants} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} 
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                reason.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
              variants={reasonBlockVariants}
            >
              <div
                className="lg:w-1/2 w-full"
              >
                <img
                  className="rounded-xl shadow-xl transform transition-transform duration-500 hover:scale-[1.01] object-cover w-full h-80"
                  src={reason.imageUrl}
                  alt={reason.title}
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x500/f0f0f0/333?text=Image+Not+Found'; }} // Fallback
                />
              </div>

              {/* Text Content Column */}
              <div className="lg:w-1/2 w-full text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 font-['Montserrat'] leading-tight">
                  {reason.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 lg:mt-28 bg-teal-800 text-white p-12 rounded-xl shadow-xl"
          variants={countersSectionVariants} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-center mb-10 font-['Montserrat']">
            Our Achievements at a Glance
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center" ref={ref}>
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
          className="text-center mt-10 flex justify-center"
          variants={ctaButtonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Button
            whatsapp 
            phone="2347064467278"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }} 
            message="Hello, i am _______. i want to get a quote for a ________ Construction!"
            variant="secondary" 
            size="medium" 
            className='mt-3 mx-5 flex items-center'>{ctaText}</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
