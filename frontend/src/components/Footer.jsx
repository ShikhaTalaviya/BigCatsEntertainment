import React from 'react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#F5F5F5] border-t border-[#E5E5E5] py-12 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Nav Links */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          <button
            onClick={() => scrollToSection('founders')}
            className="text-[#333333] font-['Montserrat'] text-[12px] hover:text-[#C9A84C] transition-colors duration-300"
          >
            Founders
          </button>
          <span className="text-[#999999]">·</span>
          <button
            onClick={() => scrollToSection('films')}
            className="text-[#333333] font-['Montserrat'] text-[12px] hover:text-[#C9A84C] transition-colors duration-300"
          >
            Work
          </button>
          <span className="text-[#999999]">·</span>
          <button
            onClick={() => scrollToSection('about')}
            className="text-[#333333] font-['Montserrat'] text-[12px] hover:text-[#C9A84C] transition-colors duration-300"
          >
            About
          </button>
          <span className="text-[#999999]">·</span>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-[#333333] font-['Montserrat'] text-[12px] hover:text-[#C9A84C] transition-colors duration-300"
          >
            Contact
          </button>
        </div>

        {/* Logo */}
        <div className="text-[#C9A84C] font-['Playfair_Display'] font-bold text-[18px] text-center mb-6">
          Big Cats Entertainment
        </div>

        {/* Copyright */}
        <p className="text-[#666666] font-['Montserrat'] text-[11px] text-center">
          © 2025 Big Cats Entertainment. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
