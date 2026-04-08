import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0A0A0A]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 py-5 flex items-center justify-between">
          <div
            className="text-[#C9A84C] font-['Playfair_Display'] font-bold text-[22px] cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            BIG CATS ENTERTAINMENT
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('founders')}
              className="text-white font-['Montserrat'] text-[12px] uppercase tracking-wide hover:text-[#C9A84C] transition-colors duration-300"
            >
              Founders
            </button>
            <button
              onClick={() => scrollToSection('films')}
              className="text-white font-['Montserrat'] text-[12px] uppercase tracking-wide hover:text-[#C9A84C] transition-colors duration-300"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white font-['Montserrat'] text-[12px] uppercase tracking-wide hover:text-[#C9A84C] transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white font-['Montserrat'] text-[12px] uppercase tracking-wide hover:text-[#C9A84C] transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-[#C9A84C] text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0A0A0A] z-50 flex flex-col items-center justify-center">
          <button
            className="absolute top-6 right-6 text-[#C9A84C] text-3xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            ×
          </button>
          <div className="flex flex-col gap-8 text-center">
            <button
              onClick={() => scrollToSection('founders')}
              className="text-[#C9A84C] font-['Montserrat'] text-[18px] uppercase tracking-wide"
            >
              Founders
            </button>
            <button
              onClick={() => scrollToSection('films')}
              className="text-[#C9A84C] font-['Montserrat'] text-[18px] uppercase tracking-wide"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#C9A84C] font-['Montserrat'] text-[18px] uppercase tracking-wide"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#C9A84C] font-['Montserrat'] text-[18px] uppercase tracking-wide"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
