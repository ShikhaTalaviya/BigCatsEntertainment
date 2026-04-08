import React from 'react';

const WhatWeDo = () => {
  const services = [
    'Film Production',
    'Creative Development',
    'Film Marketing',
    'Content Syndication',
    'Brand & Content Consulting',
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-[#C9A84C] font-['Playfair_Display'] font-bold text-[42px] md:text-[48px] mb-12">
          What We Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-white font-['Montserrat'] text-[16px] py-4 border-b border-[#1C1C1C]"
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
