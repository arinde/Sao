import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const defaultFaqs = [
  {
    question: "What types of civil engineering projects do you specialize in?",
    answer: "We specialize in a broad range of civil engineering projects including road construction, bridge building, urban infrastructure development, water resource management, and geotechnical investigations. Our expertise spans from initial design to final execution."
  },
  {
    question: "How do you ensure the quality and safety of your construction projects?",
    answer: "Quality and safety are paramount. We adhere to stringent international and local standards, implement rigorous quality control checks at every stage, and maintain a comprehensive safety program for all personnel and sites. Our commitment ensures durable and secure structures."
  },
  {
    question: "Do you offer sustainable and eco-friendly construction solutions?",
    answer: "Absolutely. Sustainability is a core value. We integrate green building practices, utilize eco-friendly materials, and implement energy-efficient designs to minimize environmental impact and promote long-term ecological balance in our projects."
  },
  {
    question: "Can you handle large-scale industrial construction, such as factory structures and furnace pits?",
    answer: "Yes, we have extensive experience in large-scale industrial construction. Our capabilities include building robust factory structures, specialized industrial facilities, and complex installations like industry-standard furnace pits, tailored to specific operational requirements."
  },
  {
    question: "What is your approach to client collaboration throughout a project?",
    answer: "We adopt a client-centric partnership approach. From concept to completion, we maintain transparent communication, provide regular updates, and foster a collaborative environment to ensure your vision is realized precisely and efficiently."
  },
  {
    question: "How can I request a consultation or a project quote?",
    answer: "You can easily request a consultation or quote by visiting our 'Contact Us' page and filling out the inquiry form, or by calling us directly. Our team will get back to you promptly to discuss your project needs."
  }
];

const Testimonial = ({
  faqs = defaultFaqs,
  sectionTitle = "Frequently Asked Questions",
  sectionSubtitle = "Find answers to common questions about our civil and construction engineering services."
}) => {
  
  const [openIndex, setOpenIndex] = useState(null);


  const toggleFaq = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-16 lg:py-24 bg-white font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl font-['Montserrat'] leading-tight">
            {sectionTitle}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {sectionSubtitle}
          </p>
        </div>

        {/* FAQ Accordion Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-lg overflow-hidden border border-gray-200"
            >
              {/* Question Button */}
              <button
                className="flex justify-between items-center w-full p-6 text-left font-semibold text-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors duration-200"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                {/* Chevron icon rotates based on open state */}
                <ChevronDown
                  className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-screen opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 p-0'
                }`}
              >
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
