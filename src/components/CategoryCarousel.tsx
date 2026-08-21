import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORY_CAROUSEL_ITEMS } from '../data/mockData';

export const CategoryCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Check scroll position to dynamically show/hide Left and Right arrows
  const checkScrollButtons = () => {
    const el = carouselRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

    const firstChild = el.children[0] as HTMLElement | undefined;
    const cardStep = firstChild ? firstChild.offsetWidth + 24 : 400;
    const newIndex = Math.round(scrollLeft / cardStep);
    setActiveIndex(Math.max(0, Math.min(CATEGORY_CAROUSEL_ITEMS.length - 1, newIndex)));
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    checkScrollButtons();
    el.addEventListener('scroll', checkScrollButtons, { passive: true });
    window.addEventListener('resize', checkScrollButtons);

    return () => {
      el.removeEventListener('scroll', checkScrollButtons);
      window.removeEventListener('resize', checkScrollButtons);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = carouselRef.current;
    if (!el) return;
    const firstChild = el.children[0] as HTMLElement | undefined;
    const cardStep = firstChild ? firstChild.offsetWidth + 24 : 400;

    el.scrollBy({
      left: direction === 'left' ? -cardStep : cardStep,
      behavior: 'smooth',
    });
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    const el = carouselRef.current;
    if (!el) return;
    if (index === 0) {
      el.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
      return;
    }
    const targetChild = el.children[index] as HTMLElement | undefined;
    if (targetChild) {
      const paddingLeft = parseFloat(window.getComputedStyle(el).paddingLeft || '0');
      const targetLeft = targetChild.offsetLeft - el.offsetLeft - paddingLeft;
      el.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="category-carousel-section"
      className="w-full bg-white py-10 sm:py-14 lg:py-20 overflow-hidden"
    >
      {/* Section Heading centered within max-width */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs md:text-sm font-semibold tracking-widest text-[#0066FF] bg-blue-50 px-3.5 py-1 rounded-full font-sans">
            Targeted Spaces & Environments
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#111111] tracking-tight font-sans mt-3">
            Explore By <span className="text-[#0066FF]">Industry</span>
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base md:text-lg mt-2.5 font-sans font-medium">
            Find the right RatGuardPro setup for your specific space.
          </p>
        </div>
      </div>

      {/* Full-width Carousel Container with Dynamic Show/Hide Arrows */}
      <div className="w-full relative group/carousel">
        
        {/* Left Arrow Button (Hidden at start, shows when scrolled) */}
        {canScrollLeft && (
          <button
            id="category-carousel-prev-btn"
            onClick={() => handleScroll('left')}
            aria-label="Previous Category"
            className="absolute left-3 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 backdrop-blur-md text-neutral-800 shadow-2xl border border-neutral-200/90 flex items-center justify-center hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] active:scale-90 transition-all duration-200 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Right Arrow Button (Shows during scroll, hidden at the end) */}
        {canScrollRight && (
          <button
            id="category-carousel-next-btn"
            onClick={() => handleScroll('right')}
            aria-label="Next Category"
            className="absolute right-3 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 backdrop-blur-md text-neutral-800 shadow-2xl border border-neutral-200/90 flex items-center justify-center hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] active:scale-90 transition-all duration-200 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Category Cards Reel Scroll Track with Container Alignment on Start/Left only */}
        <div
          ref={carouselRef}
          className="category-carousel-track flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth py-4 snap-x snap-mandatory"
        >
          {CATEGORY_CAROUSEL_ITEMS.map((item) => (
            <div
              key={item.id}
              className="shrink-0 w-[84vw] xs:w-[360px] sm:w-[420px] md:w-[400px] lg:w-[380px] h-[480px] sm:h-[500px] lg:h-[525px] rounded-xl sm:rounded-3xl overflow-hidden shadow-md transition-all duration-500 relative flex flex-col justify-between p-5 sm:p-6 lg:p-7 group cursor-pointer border border-neutral-200/60 select-none snap-start bg-neutral-100"
            >
              {/* Top: Category Heading Only (Z-20 with high contrast) */}
              <div className="relative z-20">
                <h3 className="text-xl sm:text-2xl lg:text-[24px] font-semibold tracking-tight leading-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                  {item.name}
                </h3>
              </div>

              {/* Top Dark Gradient for Text Legibility & Visual Contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/30 to-transparent h-44 pointer-events-none z-10" />

              {/* Card Image */}
              <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
