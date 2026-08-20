import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORY_CAROUSEL_ITEMS } from '../data/mockData';

export const CategoryCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalItems = CATEGORY_CAROUSEL_ITEMS.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < totalItems - 1 ? prev + 1 : prev));
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="category-carousel-section"
      className="w-full bg-white py-14 lg:py-20 border-b border-neutral-100 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Left/Right Controls */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#0066FF] block mb-1">
              TARGETED SPACES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              Explore By Category
            </h2>
          </div>

          {/* Navigation Arrows (Desktop & Mobile) */}
          <div className="flex items-center gap-3">
            <button
              id="category-carousel-prev-btn"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous Category"
              className="w-11 h-11 rounded-full bg-white border border-neutral-200 text-neutral-800 flex items-center justify-center shadow-md hover:bg-neutral-50 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              id="category-carousel-next-btn"
              onClick={handleNext}
              disabled={currentIndex >= totalItems - 1}
              aria-label="Next Category"
              className="w-11 h-11 rounded-full bg-white border border-neutral-200 text-neutral-800 flex items-center justify-center shadow-md hover:bg-neutral-50 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 1. DESKTOP / LAPTOP: Horizontal Carousel (5 visible, all 8 reachable) */}
        <div className="hidden lg:block relative">
          <div
            ref={containerRef}
            className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-4"
          >
            {CATEGORY_CAROUSEL_ITEMS.map((item) => (
              <div
                key={item.id}
                className="shrink-0 w-[calc(20%-13px)] min-w-[220px] h-80 rounded-3xl overflow-hidden relative shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-5">
                  <span className="text-white font-extrabold text-lg tracking-tight drop-shadow-sm group-hover:text-emerald-300 transition-colors">
                    {item.name}
                  </span>
                  <span className="text-[11px] font-medium text-neutral-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Protection Setup →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. TABLET: 2-Column Responsive Grid */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4">
          {CATEGORY_CAROUSEL_ITEMS.map((item) => (
            <div
              key={item.id}
              className="h-64 rounded-3xl overflow-hidden relative shadow-sm group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex items-end p-5">
                <span className="text-white font-extrabold text-lg tracking-tight">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 3. MOBILE: Single-Card View / 1 Column Slider */}
        <div className="block sm:hidden">
          <div className="relative h-72 rounded-3xl overflow-hidden shadow-md">
            <img
              src={CATEGORY_CAROUSEL_ITEMS[currentIndex].image}
              alt={CATEGORY_CAROUSEL_ITEMS[currentIndex].name}
              className="w-full h-full object-cover animate-in fade-in duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6">
              <span className="text-white font-black text-2xl tracking-tight">
                {CATEGORY_CAROUSEL_ITEMS[currentIndex].name}
              </span>
              <div className="flex items-center justify-between mt-2 text-xs text-neutral-300">
                <span>Category {currentIndex + 1} of {totalItems}</span>
                <span className="font-bold text-emerald-400">Swipe or tap arrows</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
