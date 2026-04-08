import React from 'react';
import { ExternalLink, Clock, Calendar } from 'lucide-react';
import { filmsData } from '../data/mockData';

const AllFilms = () => {
  return (
    <section id="films" className="py-20 px-6 max-w-[1400px] mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-[#C9A84C] font-['Playfair_Display'] font-bold text-[38px] md:text-[48px]">
          All Films
        </h2>
        <button className="text-[#C9A84C] font-['Montserrat'] text-[12px] uppercase tracking-wide hover:text-white transition-colors duration-300 flex items-center gap-2">
          See All <span>→</span>
        </button>
      </div>

      {/* Film Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filmsData.map((film, index) => (
          <div
            key={index}
            className="bg-[#111111] border border-[#1C1C1C] rounded-sm overflow-hidden group hover:border-[#C9A84C] transition-all duration-300 opacity-0 animate-fadeIn"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
          >
            {/* Poster */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={film.poster}
                alt={film.title}
                className="w-full h-full object-cover"
              />
              {film.comingSoon && (
                <div className="absolute top-4 left-4 bg-[#C9A84C] text-[#0A0A0A] font-['Montserrat'] text-[10px] font-bold uppercase px-3 py-1 rounded-sm">
                  Coming Soon
                </div>
              )}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="w-5 h-5 text-[#C9A84C]" />
              </div>
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="text-[#C9A84C] font-['Playfair_Display'] font-semibold text-[18px] mb-2">
                {film.title}
              </h3>
              <p className="text-white font-['Montserrat'] text-[12px] mb-3">
                {film.platform}
              </p>

              <div className="flex items-center gap-4 mb-3 text-[#777777] font-['Montserrat'] text-[11px]">
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

              {film.genre && (
                <div className="inline-block bg-[#C9A84C] bg-opacity-10 border border-[#C9A84C] text-[#C9A84C] font-['Montserrat'] text-[11px] px-3 py-1 rounded-full">
                  {film.genre}
                </div>
              )}

              {film.role && (
                <p className="text-[#777777] font-['Montserrat'] text-[11px] mt-3">
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
