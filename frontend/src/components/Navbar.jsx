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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#0A0A0A] shadow-lg shadow-[#C9A84C]/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-4 md:py-5 flex items-center justify-between">
          <img
            src="https://customer-assets.emergentagent.com/job_entertainment-gold/artifacts/15fuibcs_Big%20Cats%20Entertainment%20Logo%20Stylized%20Cat%20in%20Motion.png"
            alt="Big Cats Entertainment"
            className="h-[45px] md:h-[55px] w-auto cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('films')}
              className="text-white font-['Montserrat'] text-[12px] uppercase tracking-wide hover:text-[#C9A84C] transition-all duration-300 relative group"
            >
              Work
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C9A84C] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white font-['Montserrat'] text-[12px] uppercase tracking-wide hover:text-[#C9A84C] transition-all duration-300 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C9A84C] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('founders')}
              className="text-white font-['Montserrat'] text-[12px] uppercase tracking-wide hover:text-[#C9A84C] transition-all duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C9A84C] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white font-['Montserrat'] text-[12px] uppercase tracking-wide hover:text-[#C9A84C] transition-all duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C9A84C] group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-[#C9A84C] text-2xl transform hover:scale-110 transition-transform duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0A0A0A] z-50 flex flex-col items-center justify-center animate-fadeIn">
          <button
            className="absolute top-6 right-6 text-[#C9A84C] text-3xl transform hover:rotate-90 transition-transform duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            ×
          </button>
          <div className="flex flex-col gap-8 text-center">
            <button
              onClick={() => scrollToSection('films')}
              className="text-[#C9A84C] font-['Montserrat'] text-[18px] uppercase tracking-wide transform hover:scale-110 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: '0.1s' }}
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#C9A84C] font-['Montserrat'] text-[18px] uppercase tracking-wide transform hover:scale-110 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: '0.2s' }}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('founders')}
              className="text-[#C9A84C] font-['Montserrat'] text-[18px] uppercase tracking-wide transform hover:scale-110 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: '0.3s' }}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#C9A84C] font-['Montserrat'] text-[18px] uppercase tracking-wide transform hover:scale-110 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: '0.4s' }}
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
