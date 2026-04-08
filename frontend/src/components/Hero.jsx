import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://images.unsplash.com/photo-1591314222191-61fad06f4428',
    'https://images.unsplash.com/photo-1622829118151-1cfabdf11a68',
    'https://images.unsplash.com/photo-1599601075475-d2707be194ff',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToFilms = () => {
    const element = document.getElementById('films');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slideshow */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <p className="text-white font-['Montserrat'] text-[18px] md:text-[20px] text-center px-4 max-w-[700px] leading-relaxed">
          Building and delivering cinema across platforms.
        </p>

        {/* Scroll Down */}
        <button
          onClick={scrollToFilms}
          className="absolute bottom-12 flex flex-col items-center gap-2 text-[#C9A84C] font-['Montserrat'] text-[12px] uppercase tracking-wide animate-bounce cursor-pointer hover:text-white transition-colors duration-300"
        >
          <span>Scroll Down</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-12 right-12 z-10 text-white font-['Montserrat'] text-[12px]">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Hero;
