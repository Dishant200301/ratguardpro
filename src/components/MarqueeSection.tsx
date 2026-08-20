import React from 'react';
import { TRUSTED_BRANDS_LEFT, TRUSTED_BRANDS_RIGHT } from '../data/mockData';

export const MarqueeSection: React.FC = () => {
  const ALL_BRANDS = [...TRUSTED_BRANDS_LEFT, ...TRUSTED_BRANDS_RIGHT];

  return (
    <section
      id="marquee-trusted-brands"
      className="w-full bg-white py-6 md:py-8 relative overflow-hidden select-none"
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Section subtle kicker */}
        {/* <div className="text-center mb-4 md:mb-5">
          <p className="text-[12px] sm:text-sm font-medium tracking-widest text-neutral-400">
            Trusted by 50,000+ Businesses, Homes & Enterprises Across India
          </p>
        </div> */}

        {/* SINGLE ROW MARQUEE TRACK (RIGHT TO LEFT ANIMATION) */}
        <div className="relative overflow-hidden w-full py-2">
          {/* Left & Right Edge Realistic Gradient Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

          {/* Single Moving Track (Right to Left) */}
          <div className="animate-marquee flex items-center gap-6 sm:gap-6 lg:gap-10 py-2">
            {[...ALL_BRANDS, ...ALL_BRANDS, ...ALL_BRANDS, ...ALL_BRANDS].map(
              (brand, index) => (
                <div
                  key={`brand-${brand.name}-${index}`}
                  className="flex items-center shrink-0 group cursor-default transition-all duration-200 hover:scale-105"
                >
                  <div className="h-10 sm:h-12 md:h-14 px-2 sm:px-4 flex items-center justify-center">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-full max-w-[130px] sm:max-w-[160px] md:max-w-[200px] object-contain transition-transform duration-300 filter group-hover:brightness-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};


