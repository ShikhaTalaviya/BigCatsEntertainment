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
        <h1 className="text-[#C9A84C] font-['Playfair_Display'] font-bold text-[52px] md:text-[72px] text-center px-4 mb-4">
          Big Cats Entertainment
        </h1>
        <h2 className="text-white font-['Montserrat'] text-[18px] md:text-[20px] text-center px-4 max-w-[700px] leading-relaxed mb-8">
          Building and delivering cinema across platforms
        </h2>
        <button
          onClick={scrollToFilms}
          className="text-[#C9A84C] font-['Montserrat'] text-[12px] uppercase tracking-wide border border-[#C9A84C] px-6 py-3 rounded-sm hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300"
        >
          View Work
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
