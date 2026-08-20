import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORY_CAROUSEL_ITEMS } from '../data/mockData';

export const CategoryCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    const nextIdx =
      direction === 'left'
        ? Math.max(0, activeIndex - 1)
        : Math.min(CATEGORY_CAROUSEL_ITEMS.length - 1, activeIndex + 1);
    handleDotClick(nextIdx);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    const el = carouselRef.current;
    if (!el) return;
    const targetChild = el.children[index] as HTMLElement | undefined;
    if (targetChild) {
      const targetLeft = targetChild.offsetLeft - el.offsetLeft;
      el.scrollTo({
        left: targetLeft,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const handleScrollEvent = () => {
      const scrollLeft = el.scrollLeft;
      const firstChild = el.children[0] as HTMLElement | undefined;
      const cardStep = firstChild ? firstChild.offsetWidth + 20 : 320;
      const newIndex = Math.round(scrollLeft / cardStep);
      setActiveIndex(Math.max(0, Math.min(CATEGORY_CAROUSEL_ITEMS.length - 1, newIndex)));
    };

    el.addEventListener('scroll', handleScrollEvent, { passive: true });
    return () => el.removeEventListener('scroll', handleScrollEvent);
  }, []);

  return (
    <section
      id="category-carousel-section"
      className="w-full bg-white py-16 lg:py-24 border-b border-neutral-100 select-none overflow-hidden"
    >
      {/* Section Heading centered within max-width */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#0066FF] bg-blue-50 px-3.5 py-1 rounded-full font-sans">
            TARGETED SPACES & ENVIRONMENTS
          </span>
          <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold text-[#111111] tracking-tight font-sans mt-3">
            Explore By <span className="text-[#0066FF]">Category</span>
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base md:text-lg mt-2.5 font-sans font-medium">
            Find the right RatGuardPro setup for your specific space.
          </p>
        </div>
      </div>

      {/* Full-width Carousel Container matching Reels layout across all devices */}
      <div className="w-full relative group/carousel">
        {/* Left Arrow Button */}
        <button
          id="category-carousel-prev-btn"
          onClick={() => handleScroll('left')}
          aria-label="Previous Category"
          className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md text-neutral-800 shadow-2xl border border-neutral-200/90 flex items-center justify-center hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] active:scale-90 transition-all cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Right Arrow Button */}
        <button
          id="category-carousel-next-btn"
          onClick={() => handleScroll('right')}
          aria-label="Next Category"
          className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md text-neutral-800 shadow-2xl border border-neutral-200/90 flex items-center justify-center hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] active:scale-90 transition-all cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Category Cards Reel Scroll Container - Increased card size & top-left badge */}
        <div
          ref={carouselRef}
          className="flex gap-4 sm:gap-5 lg:gap-6 overflow-x-auto no-scrollbar scroll-smooth py-3 px-[calc((100vw-min(78vw,325px))/2)] sm:px-6 lg:pl-[max(2rem,calc((100vw-1500px)/2+2rem))] lg:pr-8 snap-x snap-mandatory"
        >
          {CATEGORY_CAROUSEL_ITEMS.map((item) => (
            <div
              key={item.id}
              className="shrink-0 w-[78vw] sm:w-[285px] lg:w-[310px] xl:w-[325px] max-w-[340px] aspect-[4/5] bg-neutral-950 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative flex flex-col group cursor-pointer border border-neutral-200/60 select-none snap-center"
            >
              {/* Top-Left: Category Name Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white border border-white/20 shadow-md select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                <span className="text-xs sm:text-sm font-bold text-white tracking-tight font-sans">
                  {item.name}
                </span>
              </div>

              {/* Background Image with Zoom on Hover */}
              <div className="absolute inset-0 w-full h-full bg-neutral-900 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Pagination Indicator Dots */}
      <div className="flex justify-center items-center gap-2.5 mt-8 sm:mt-10">
        {CATEGORY_CAROUSEL_ITEMS.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => handleDotClick(idx)}
            aria-label={`Go to category ${idx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              activeIndex === idx
                ? 'w-7 h-2.5 bg-[#0066FF] shadow-xs'
                : 'w-2.5 h-2.5 bg-neutral-300 hover:bg-neutral-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
