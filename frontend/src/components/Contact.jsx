import React from 'react';
import { ExternalLink } from 'lucide-react';

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
        <p className="text-[#777777] font-['Montserrat'] text-[14px] mb-12">
          Ahmedabad, Gujarat, India
        </p>

        {/* Divider */}
        <div className="border-t border-[#1C1C1C] my-12"></div>

        {/* Founders Links */}
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
                IMDb <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.instagram.com/nehakshatriya844"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#777777] font-['Montserrat'] text-[12px] hover:text-[#C9A84C] transition-colors duration-300 flex items-center gap-1"
              >
                Instagram <ExternalLink className="w-3 h-3" />
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
                IMDb <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.instagram.com/choksi_pratik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#777777] font-['Montserrat'] text-[12px] hover:text-[#C9A84C] transition-colors duration-300 flex items-center gap-1"
              >
                Instagram <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
