import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-[820px] mx-auto text-center">
        <h2 className="text-[#C9A84C] font-['Playfair_Display'] font-bold text-[42px] md:text-[48px] mb-12">
          About Big Cats Entertainment
        </h2>

        <div className="text-white font-['Montserrat'] text-[15px] leading-[1.9] space-y-8">
          <p>
            Big Cats Entertainment is a film production and content company based in Ahmedabad,
            founded by Neha Kshatriya and Pratik Choksi.
          </p>

          <p>
            Specializing in acquiring and syndicating Gujarati films — operating across the full
            content lifecycle, from development to delivery.
          </p>

          <p>
            Connecting audiences with cinema across theatrical release, satellite television,
            digital streaming, and OTT platforms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
