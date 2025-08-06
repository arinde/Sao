import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from './Button';
import { MoveUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: '/Images/Gallery11.jpeg', title: 'Setting of iron rod' },
  { src: '/Images2/Painting.jpeg', title: 'Columns setting for furnace beam' },
  { src: '/Images/Gallery7.jpeg', title: 'Interlocking of walkway' },
  { src: '/Images/Gallery8.jpeg', title: 'Aluminum Partitioning Installation' },
  { src: '/Images/Gallery5.jpeg', title: 'Suspended Ceiling Installation' },
  { src: '/Images/Gallery6.jpeg', title: 'Casting of Columns' },
];

const GalleryReveal = () => {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial stack setup
      gsap.set(imageRefs.current, {
        position: 'absolute',
        top: '50%',
        left: '50%',
        xPercent: -50,
        yPercent: -50,
        rotation: () => gsap.utils.random(-30, 30),
        scale: 0.8,
        opacity: 0.9,
        zIndex: (i) => i,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 30%',
          toggleActions: 'play reverse play reverse',
        },
      });

      timeline.to(imageRefs.current, {
        position: 'static',
        top: 0,
        left: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        scale: 1,
        opacity: 1,
        zIndex: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[80vh] py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">Project Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative min-h-[500px]">
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-64">
              <img
                ref={(el) => (imageRefs.current[index] = el)}
                src={image.src}
                alt={`gallery-${index}`}
                className="rounded-xl shadow-xl object-cover w-full h-full transition-all duration-500"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-white/80 text-blue-900 text-sm font-medium rounded px-3 py-1 shadow">
                {image.title}
              </div>
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center mt-6'>
            <Link to="/gallery">
            <Button
            size='medium'
            variant='primary'
             className="flex items-center gap-x-1">
                View More <MoveUpRight className='w-4 font-bold'/>
            </Button>
            </Link>
        </div>
        
      </div>
    </section>
  );
};

export default GalleryReveal;
