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
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 100'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Playfair Display, serif' font-size='24' font-weight='700' fill='%23C9A84C'%3EBIG CATS ENTERTAINMENT%3C/text%3E%3C/svg%3E"
          alt="Big Cats Entertainment"
          className="w-[160px] mb-8"
        />
        <h1 className="text-[#C9A84C] font-['Playfair_Display'] font-bold text-[48px] md:text-[72px] text-center px-4 mb-4">
          BIG CATS ENTERTAINMENT
        </h1>
        <p className="text-white font-['Montserrat'] text-[16px] text-center px-4 max-w-[600px]">
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
