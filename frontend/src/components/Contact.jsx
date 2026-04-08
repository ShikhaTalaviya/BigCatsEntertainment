import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-[820px] mx-auto text-center">
        <h2 className="text-[#C9A84C] font-['Playfair_Display'] font-bold text-[42px] md:text-[48px] mb-12">
          Get In Touch
        </h2>

        {/* Email */}
        <a
          href="mailto:bigcatsfilm@gmail.com"
          className="text-[#C9A84C] font-['Playfair_Display'] font-semibold text-[28px] md:text-[36px] hover:text-white transition-colors duration-300 block mb-6"
        >
          bigcatsfilm@gmail.com
        </a>

        {/* Phone */}
        <p className="text-white font-['Montserrat'] text-[16px] mb-4">+91 98248 44777</p>

        {/* Location */}
        <p className="text-[#777777] font-['Montserrat'] text-[14px]">
          Ahmedabad, Gujarat, India
        </p>
      </div>
    </section>
  );
};

export default Contact;
