import React from 'react';

const FoundersDesk = () => {
  return (
    <section id="founders" className="py-20 px-6 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Text */}
        <div>
          <p className="text-[#C9A84C] font-['Montserrat'] font-bold text-[11px] uppercase tracking-[4px] mb-6">
            Meet The Team
          </p>
          <h2 className="text-[#C9A84C] font-['Playfair_Display'] font-bold text-[42px] md:text-[48px] mb-8">
            Founders' Desk
          </h2>

          <div className="text-white font-['Montserrat'] text-[15px] leading-[1.8] space-y-6">
            <p>
              <span className="text-[#C9A84C] font-semibold">Neha Kshatriya</span> and{' '}
              <span className="text-[#C9A84C] font-semibold">Pratik Choksi</span> are the
              founders of Big Cats Entertainment, a film production and content company based in
              Ahmedabad.
            </p>

            <p>
              Neha brings directorial expertise — with credits including Farzi on Amazon Prime
              Video, and key roles in Gujarati cinema.
            </p>

            <p>
              Pratik brings hands-on production experience across Gujarati films — from executive
              production to line producing.
            </p>

            <p>
              Together they operate across the full content lifecycle — from development to
              delivery.
            </p>

            <button className="text-[#C9A84C] font-['Montserrat'] text-[13px] mt-4 hover:text-white transition-colors duration-300 inline-flex items-center gap-2">
              Read More <span>→</span>
            </button>
          </div>
        </div>

        {/* Right - Photos */}
        <div className="grid grid-cols-2 gap-6">
          <div className="aspect-[3/4] overflow-hidden rounded-sm">
            <img
              src="https://images.pexels.com/photos/36363694/pexels-photo-36363694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Neha Kshatriya"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden rounded-sm mt-12">
            <img
              src="https://images.pexels.com/photos/30732874/pexels-photo-30732874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Pratik Choksi"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersDesk;
