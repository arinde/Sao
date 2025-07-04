import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
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
    clientAvatarUrl: "https://placehold.co/100x100/c0c0c0/333?text=BA" // Placeholder for avatar
  },
  {
    quote: "From initial consultation to project handover, SAO demonstrated unparalleled professionalism and technical expertise. They transformed our vision into a tangible reality with seamless execution.",
    clientName: "Mr. Kunle Davies",
    clientTitle: "Residential Developer",
    clientAvatarUrl: "https://placehold.co/100x100/b0b0b0/333?text=KD" // Placeholder for avatar
  },
];
const Testimonial = ({
  testimonials = defaultTestimonials,
  sectionTitle = "What Our Clients Say",
  sectionSubtitle = "Hear directly from those who have experienced our commitment to excellence and innovation in civil and construction engineering."
}) => {
  
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    // Main section container
    <section className="py-16 lg:py-24 bg-gray-100 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl font-['Montserrat'] leading-tight">
            {sectionTitle}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {sectionSubtitle}
          </p>
        </div>

        {/* Testimonials Scroller Container */}
        {/*
          - overflow-hidden: Hides the content that is outside the visible area.
          - relative: For positioning the absolute moving track inside.
        */}
        <div className="relative w-full overflow-hidden">
          {/*
            Motion div for the scrolling track.
            - flex flex-nowrap: Ensures all cards stay in a single row.
            - gap-8: Spacing between cards.
            - w-max: Allows the container to be as wide as its content.
            - animate: Defines the animation properties.
              - x: Animates the horizontal position.
                - from: "0%" (start at the beginning)
                - to: "-100%" (move left by the width of one full set of testimonials)
                  This creates the illusion of moving from left to right by shifting the content leftwards
                  and then resetting to create a loop.
            - transition: Defines the animation timing.
              - repeat: Infinity: Makes the animation loop indefinitely.
              - ease: "linear": Ensures a constant speed.
              - duration: Adjust this value to control the speed of the scroll.
                          A higher value means slower scroll.
                          (e.g., 60 seconds for a very slow scroll of 3 sets of cards)
          */}
          <motion.div
            className="flex flex-nowrap gap-8"
            animate={{ x: ["0%", "-100%"] }} // Animate from 0% to -100% of its own width
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 60, // Adjust duration to control speed (higher = slower)
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              // Individual Testimonial Card
              // min-w-[300px] lg:min-w-[calc(33.333%-20px)] ensures cards have a minimum width
              // and take up roughly 1/3rd of the container width on large screens,
              // accounting for the gap.
              <div
                key={index} // Key needs to be unique if you have multiple identical sets
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col transform transition-all duration-300 hover:scale-[1.01] hover:shadow-xl min-w-[300px] md:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-21.333px)]" /* Adjusted min-width for responsiveness and gap */
              >
                {/* Quote Icon */}
                <div className="text-teal-600 mb-4">
                  <Quote className="w-10 h-10 opacity-70" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-gray-800 text-lg italic mb-6 flex-grow leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Client Info */}
                <div className="flex items-center mt-4">
                  {/* Client Avatar */}
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

        {/* Optional Call to Action for the entire section */}
        <div className="text-center mt-16">
          <button
            onClick={() => console.log("Contact for Testimonials clicked!")} // Example action
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300 transform hover:scale-[1.02]"
          >
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
