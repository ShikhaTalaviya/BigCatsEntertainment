import React from 'react';
import { ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-[820px] mx-auto text-center">
        <h2 className="text-[#C9A84C] font-['Playfair_Display'] font-bold text-[42px] md:text-[48px] mb-12">
          Contact
        </h2>

        {/* Email */}
        <a
          href="mailto:bigcatsfilm@gmail.com"
          className="text-[#C9A84C] font-['Playfair_Display'] font-semibold text-[28px] md:text-[36px] hover:text-white transition-colors duration-300 block mb-6"
        >
          bigcatsfilm@gmail.com
        </a>

        {/* Phone */}
        <p className="text-white font-['Montserrat'] text-[16px] mb-12">+91 9824844777</p>

        {/* Divider */}
        <div className="border-t border-[#1C1C1C] my-12"></div>

        {/* Founders Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Neha */}
          <div>
            <h3 className="text-[#C9A84C] font-['Playfair_Display'] font-semibold text-[18px] mb-4">
              Neha Kshatriya
            </h3>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://m.imdb.com/name/nm9931377/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#777777] font-['Montserrat'] text-[12px] hover:text-[#C9A84C] transition-colors duration-300 flex items-center gap-1"
              >
                <ExternalLink className="w-4 h-4" /> IMDb
              </a>
              <a
                href="https://www.instagram.com/nehakshatriya844"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#777777] font-['Montserrat'] text-[12px] hover:text-[#C9A84C] transition-colors duration-300 flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>

          {/* Pratik */}
          <div>
            <h3 className="text-[#C9A84C] font-['Playfair_Display'] font-semibold text-[18px] mb-4">
              Pratik Choksi
            </h3>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://m.imdb.com/name/nm9400915/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#777777] font-['Montserrat'] text-[12px] hover:text-[#C9A84C] transition-colors duration-300 flex items-center gap-1"
              >
                <ExternalLink className="w-4 h-4" /> IMDb
              </a>
              <a
                href="https://www.instagram.com/choksi_pratik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#777777] font-['Montserrat'] text-[12px] hover:text-[#C9A84C] transition-colors duration-300 flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
