import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const defaultTestimonials = [
  {
    quote: "Our experience with Sao Works on the new bridge project was exceptional. Their precision engineering and commitment to deadlines were truly impressive. A reliable partner for complex infrastructure.",
    clientName: "Mr Prassana",
    clientTitle: "GM Reliance Chemical Products Limited Agbara",
    clientAvatarUrl: "https://placehold.co/100x100/e0e0e0/333?text=AB"
  },
  {
    quote: "The industrial facility they built for us exceeded all expectations. The attention to detail, especially with the specialized furnace pit, demonstrated their deep understanding of industrial standards. Highly recommended!",
    clientName: "Dr. Emeka Okoro",
    clientTitle: "Operations Director, MegaCorp Industries",
    clientAvatarUrl: "https://placehold.co/100x100/d0d0d0/333?text=EO"
  },
  {
    quote: "Their sustainable building approach for our commercial complex was truly innovative. Not only is the structure aesthetically pleasing, but its energy efficiency has also significantly reduced our operational costs.",
    clientName: "Chief Bola Adeyemi",
    clientTitle: "CEO, GreenFuture Holdings",
    clientAvatarUrl: "https://placehold.co/100x100/c0c0c0/333?text=BA"
  },
  {
    quote: "From initial consultation to project handover, SAO demonstrated unparalleled professionalism and technical expertise. They transformed our vision into a tangible reality with seamless execution.",
    clientName: "Mr. Kunle Davies",
    clientTitle: "Residential Developer",
    clientAvatarUrl: "https://placehold.co/100x100/b0b0b0/333?text=KD"
  },
];
const Testimonial = ({
  testimonials = defaultTestimonials,
  sectionTitle = "Testimonials",
  sectionSubtitle = "Hear directly from those who have experienced our commitment to excellence and innovation in civil and construction engineering."
}) => {
  
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    // Main section container
    <section className="py-16 lg:py-24 bg-gray-100 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl font-['Montserrat'] leading-tight">
            {sectionTitle}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {sectionSubtitle}
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex flex-nowrap gap-8"
            animate={{ x: ["0%", "-100%"] }} 
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col transform transition-all duration-300 hover:scale-[1.01] hover:shadow-xl min-w-[300px] md:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-21.333px)]" /* Adjusted min-width for responsiveness and gap */
              >
                
                <div className="text-teal-600 mb-4">
                  <Quote className="w-10 h-10 opacity-70" />
                </div>

                <p className="text-gray-800 text-lg italic mb-6 flex-grow leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center mt-4">
                  <img
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-teal-600"
                    src={testimonial.clientAvatarUrl}
                    alt={testimonial.clientName}
                    onError={(e) => { e.currentTarget.src = `https://placehold.co/100x100/e0e0e0/333?text=${testimonial.clientName.split(' ').map(n => n[0]).join('')}`; }} // Fallback with initials
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-lg">
                      {testimonial.clientName}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {testimonial.clientTitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
