import React from 'react';
import { ExternalLink } from 'lucide-react';

const FoundersDesk = () => {
  return (
    <section id="founders" className="py-20 px-6 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left - Text */}
        <div>
          <p className="text-[#C9A84C] font-['Montserrat'] font-bold text-[11px] uppercase tracking-[4px] mb-6">
            About Us
          </p>
          <h2 className="text-[#C9A84C] font-['Playfair_Display'] font-bold text-[42px] md:text-[48px] mb-8">
            Our Story
          </h2>

          <div className="text-white font-['Montserrat'] text-[15px] leading-[1.8] space-y-6">
            <p>
              Big Cats Entertainment is a film production and content company based in Ahmedabad, 
              specializing in acquiring and syndicating Gujarati cinema across multiple platforms.
            </p>

            <p>
              We operate across the full content lifecycle — from creative development and production 
              to strategic distribution and marketing. Our expertise spans theatrical releases, 
              satellite television, digital streaming, and OTT platforms.
            </p>

            <p>
              With a portfolio that includes acclaimed projects like Farzi on Amazon Prime Video 
              and numerous successful Gujarati films, we bridge the gap between authentic regional 
              storytelling and modern entertainment distribution.
            </p>

            <p>
              Our mission is to deliver compelling cinema that resonates with audiences while 
              supporting the growth of regional film industries through innovative content strategies.
            </p>
          </div>
        </div>

        {/* Right - Founders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Neha Kshatriya */}
          <div className="text-center">
            <div className="aspect-[3/4] overflow-hidden rounded-sm mb-4">
              <img
                src="https://customer-assets.emergentagent.com/job_entertainment-gold/artifacts/jgymeoy4_WhatsApp%20Image%202026-04-08%20at%208.04.19%20PM.jpeg"
                alt="Neha Kshatriya"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
              />
            </div>
            <h3 className="text-[#C9A84C] font-['Playfair_Display'] font-semibold text-[20px] mb-1">
              Neha Kshatriya
            </h3>
            <p className="text-[#777777] font-['Montserrat'] text-[12px] uppercase tracking-wide mb-3">
              Founder
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://m.imdb.com/name/nm9931377/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#777777] hover:text-[#C9A84C] transition-colors duration-300"
                title="IMDb"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/nehakshatriya844"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#777777] hover:text-[#C9A84C] transition-colors duration-300"
                title="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Pratik Choksi */}
          <div className="text-center">
            <div className="aspect-[3/4] overflow-hidden rounded-sm mb-4">
              <img
                src="https://customer-assets.emergentagent.com/job_entertainment-gold/artifacts/psa92ivq_WhatsApp%20Image%202026-04-08%20at%208.02.49%20PM.jpeg"
                alt="Pratik Choksi"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
              />
            </div>
            <h3 className="text-[#C9A84C] font-['Playfair_Display'] font-semibold text-[20px] mb-1">
              Pratik Choksi
            </h3>
            <p className="text-[#777777] font-['Montserrat'] text-[12px] uppercase tracking-wide mb-3">
              Founder
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://m.imdb.com/name/nm9400915/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#777777] hover:text-[#C9A84C] transition-colors duration-300"
                title="IMDb"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/choksi_pratik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#777777] hover:text-[#C9A84C] transition-colors duration-300"
                title="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersDesk;
