import React from 'react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#080808] border-t border-[#1C1C1C] py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Nav Links */}
        <div className="flex items-center justify-center gap-2 mb-6 md:mb-8 flex-wrap text-center">
          <button
            onClick={() => scrollToSection('films')}
            className="text-white font-['Montserrat'] text-[11px] md:text-[12px] hover:text-[#C9A84C] transition-colors duration-300"
          >
            Work
          </button>
          <span className="text-[#777777]">·</span>
          <button
            onClick={() => scrollToSection('services')}
            className="text-white font-['Montserrat'] text-[11px] md:text-[12px] hover:text-[#C9A84C] transition-colors duration-300"
          >
            Services
          </button>
          <span className="text-[#777777]">·</span>
          <button
            onClick={() => scrollToSection('founders')}
            className="text-white font-['Montserrat'] text-[11px] md:text-[12px] hover:text-[#C9A84C] transition-colors duration-300"
          >
            About
          </button>
          <span className="text-[#777777]">·</span>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-white font-['Montserrat'] text-[11px] md:text-[12px] hover:text-[#C9A84C] transition-colors duration-300"
          >
            Contact
          </button>
        </div>

        {/* Logo */}
        <div className="text-[#C9A84C] font-['Playfair_Display'] font-bold text-[16px] md:text-[18px] text-center mb-4 md:mb-6">
          Big Cats Entertainment
        </div>

        {/* Copyright */}
        <p className="text-[#777777] font-['Montserrat'] text-[10px] md:text-[11px] text-center mb-2">
          © 2025 Big Cats Entertainment. All Rights Reserved.
        </p>

        {/* Created by */}
        <p className="text-[#777777] font-['Montserrat'] text-[9px] md:text-[10px] text-center">
          Created by{' '}
          <a
            href="https://www.simploratech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9A84C] hover:text-white transition-colors duration-300 hover:underline"
          >
            Simplora Tech Pvt. Ltd.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
