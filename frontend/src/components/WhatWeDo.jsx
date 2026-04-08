import React from 'react';

const WhatWeDo = () => {
  const services = [
    {
      title: 'Film Production',
      image: 'https://images.unsplash.com/photo-1625690303837-654c9666d2d0',
    },
    {
      title: 'Creative Development',
      image: 'https://images.unsplash.com/photo-1632187981988-40f3cbaeef5e',
    },
    {
      title: 'Film Marketing',
      image: 'https://images.pexels.com/photos/5662857/pexels-photo-5662857.png',
    },
    {
      title: 'Content Syndication',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba',
    },
    {
      title: 'Brand & Content Consulting',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26',
    },
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-[1400px] mx-auto mb-12">
        <h2 className="text-[#C9A84C] font-['Playfair_Display'] font-bold text-[38px] md:text-[48px]">
          What We Do
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative h-[320px] overflow-hidden group cursor-pointer"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-40 transition-all duration-300"></div>

            {/* Title */}
            <div className="absolute inset-0 flex items-end justify-center pb-8">
              <h3 className="text-[#C9A84C] group-hover:text-white font-['Playfair_Display'] font-semibold text-[22px] text-center px-4 transition-colors duration-300">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
