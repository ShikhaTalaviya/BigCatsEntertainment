import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const slides = [
    'https://images.unsplash.com/photo-1611540881474-bf7c8731bfd2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBmaWxtJTIwcHJvZHVjdGlvbnxlbnwwfHx8YmxhY2t8MTc3NTY3MDc3N3ww&ixlib=rb-4.1.0&q=85',
    'https://images.unsplash.com/photo-1597465103212-7cd0b847a246?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwyfHxjaW5lbWF0aWMlMjBmaWxtJTIwcHJvZHVjdGlvbnxlbnwwfHx8YmxhY2t8MTc3NTY3MDc3N3ww&ixlib=rb-4.1.0&q=85',
    'https://images.pexels.com/photos/17711641/pexels-photo-17711641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToFilms = () => {
    const element = document.getElementById('films');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slideshow with parallax */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-300 ease-out"
            style={{ 
              backgroundImage: `url(${slide})`,
              transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0002})`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 md:px-6" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
        <h1 className={`gold-shimmer font-['Playfair_Display'] font-bold text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] mb-4 md:mb-6 text-center transition-all duration-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          Big Cats Entertainment
        </h1>
        <p className={`text-white font-['Montserrat'] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-center max-w-[90%] md:max-w-[900px] leading-relaxed transition-all duration-1200 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          Crafting stories that captivate. Delivering cinema across platforms.
        </p>
        <p className={`text-[#999999] font-['Montserrat'] text-[11px] sm:text-[12px] md:text-[14px] text-center mt-3 md:mt-4 max-w-[85%] md:max-w-[700px] transition-all duration-1200 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          From concept to screen, we bring visionary storytelling to life
        </p>
      </div>

      {/* Slide Counter with animation */}
      <div className={`absolute bottom-8 md:bottom-12 right-8 md:right-12 z-10 text-white font-['Montserrat'] text-[11px] md:text-[12px] transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <span className="inline-block transition-all duration-300">{currentSlide + 1}</span> / {slides.length}
      </div>
    </div>
  );
};

export default Hero;
