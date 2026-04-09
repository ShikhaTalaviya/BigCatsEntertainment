import React from 'react';
import { ExternalLink, Clock, Calendar } from 'lucide-react';
import { filmsData } from '../data/mockData';

const AllFilms = () => {
  return (
    <section id="films" className="py-12 md:py-20 px-4 md:px-6 max-w-[1400px] mx-auto">
      {/* Section Header */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-[#C9A84C] font-['Playfair_Display'] font-bold text-[32px] md:text-[48px] mb-2 md:mb-3">
          All Films
        </h2>
        <p className="text-[#777777] font-['Montserrat'] text-[13px] md:text-[15px]">
          A collective body of work across direction, production, and marketing
        </p>
      </div>

      {/* Film Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filmsData.map((film, index) => (
          <div
            key={index}
            className="bg-[#111111] border border-[#1C1C1C] rounded-sm overflow-hidden group hover:border-[#C9A84C] transition-all duration-500 opacity-0 animate-fadeIn hover-lift hover:shadow-2xl hover:shadow-[#C9A84C]/20"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
          >
            {/* Poster */}
            <div className="relative aspect-[2/3] overflow-hidden bg-[#0A0A0A]">
              <img
                src={film.poster}
                alt={film.title}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {film.comingSoon && (
                <div className="absolute top-4 left-4 bg-[#C9A84C] text-[#0A0A0A] font-['Montserrat'] text-[10px] font-bold uppercase px-3 py-1.5 rounded-sm z-10 animate-float">
                  Coming Soon
                </div>
              )}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 transform group-hover:rotate-12">
                <ExternalLink className="w-5 h-5 text-[#C9A84C]" />
              </div>
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="text-[#C9A84C] font-['Playfair_Display'] font-semibold text-[16px] md:text-[18px] mb-2 line-clamp-1">
                {film.title}
              </h3>
              <p className="text-white font-['Montserrat'] text-[11px] md:text-[12px] mb-3 line-clamp-1">
                {film.platform}
              </p>

              <div className="flex items-center gap-4 mb-3 text-[#777777] font-['Montserrat'] text-[10px] md:text-[11px] flex-wrap">
                {film.duration && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{film.duration}</span>
                  </div>
                )}
                {film.releaseDate && (
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{film.releaseDate}</span>
                  </div>
                )}
              </div>

              {film.role && (
                <p className="text-[#777777] font-['Montserrat'] text-[10px] md:text-[11px] mt-3 whitespace-pre-line">
                  {film.role}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllFilms;
