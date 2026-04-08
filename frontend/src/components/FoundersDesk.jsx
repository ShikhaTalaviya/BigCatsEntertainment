import React from 'react';

const FoundersDesk = () => {
  return (
    <section id="founders" className="py-20 px-6 max-w-[1400px] mx-auto">
      <div className="max-w-[900px] mx-auto">
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
    </section>
  );
};

export default FoundersDesk;
