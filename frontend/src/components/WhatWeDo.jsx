import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WhatWeDo = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  const services = [
    {
      title: 'Film Production',
      image: 'https://images.unsplash.com/photo-1693939633953-ca699d23b463?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNhbWVyYSUyMGNpbmVtYXRvZ3JhcGh5fGVufDB8fHx8MTc3NTY3MDEwMXww&ixlib=rb-4.1.0&q=85',
    },
    {
      title: 'Creative Development',
      image: 'https://images.pexels.com/photos/8035286/pexels-photo-8035286.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      title: 'Film Marketing',
      image: 'https://images.unsplash.com/photo-1638961862991-bd7ee1c9ecfc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNhbWVyYSUyMGNpbmVtYXRvZ3JhcGh5fGVufDB8fHx8MTc3NTY3MDEwMXww&ixlib=rb-4.1.0&q=85',
    },
    {
      title: 'Content Syndication',
      image: 'https://images.unsplash.com/photo-1760404700113-5d593b32280a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxzdHJlYW1pbmclMjBwbGF0Zm9ybSUyMGNvbnRlbnQlMjBkaXN0cmlidXRpb258ZW58MHx8fHwxNzc1NjcwMTEwfDA&ixlib=rb-4.1.0&q=85',
    },
    {
      title: 'Brand & Content Consulting',
      image: 'https://images.unsplash.com/photo-1765438864227-288900d09d26?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMGNvbnN1bHRhdGlvbiUyMG1lZXRpbmclMjBzdHJhdGVneXxlbnwwfHx8fDE3NzU2NzAxMTF8MA&ixlib=rb-4.1.0&q=85',
    },
  ];

  return (
    <section id="services" className="py-12 md:py-20 px-4 md:px-6" ref={ref}>
      <div className="max-w-[1100px] mx-auto">
        <h2 className={`text-[#C9A84C] font-['Playfair_Display'] font-bold text-[32px] md:text-[48px] mb-8 md:mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          What We Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative h-[200px] md:h-[240px] overflow-hidden group cursor-pointer rounded-sm transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-75 group-hover:bg-opacity-70 transition-all duration-500"></div>

              {/* Title */}
              <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6">
                <h3 className="text-[#C9A84C] font-['Playfair_Display'] font-semibold text-[18px] md:text-[20px] text-center transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
