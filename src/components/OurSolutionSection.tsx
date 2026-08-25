import React, { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

interface OurSolutionSectionProps {
  categorySubtitle?: string;
  solutionPoints?: string[];
  productImage?: string;
  onBuyNow?: () => void;
}

export const OurSolutionSection: React.FC<OurSolutionSectionProps> = ({
  categorySubtitle = "Advanced Ultrasonic Technology that drives rats away and keeps your garage rat-free.",
  solutionPoints = [
    "Dual Ultrasonic Speakers",
    "Wide Coverage Area",
    "No Traps, No Poisons",
    "Chemical-Free & Safe",
    "Easy to Install & Use",
    "Low Power Consumption",
  ],
  productImage = "/images/home/product/product.webp",
}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Responsive items per view: Mobile: 1, Tablet: 2, Laptop: 3, Desktop: 6
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1); // Mobile: 1 card
      } else if (width < 1024) {
        setVisibleCount(2); // Tablet: 2 cards
      } else if (width < 1280) {
        setVisibleCount(3); // Laptop: 3 cards
      } else {
        setVisibleCount(6); // Desktop: 6 cards in 1 row
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.clientWidth / (visibleCount || 1);
    if (cardWidth <= 0) return;
    const maxIdx = Math.max(0, bottomFeatures.length - visibleCount);
    const newIndex = Math.min(maxIdx, Math.max(0, Math.round(scrollLeft / cardWidth)));
    setSlideIndex(newIndex);
  };

  const scrollToIndex = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth / (visibleCount || 1);
    el.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
    setSlideIndex(index);
  };

  // Bottom 6 Features matching the reference image with brand blue icons
  const bottomFeatures = [
    {
      id: 'f1',
      title: 'Dual Ultrasonic Speakers',
      subtitle: 'Powerful & Effective',
      icon: (
        <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7 sm:w-8 sm:h-8 text-[#0066FF] shrink-0" stroke="currentColor">
          <circle cx="18" cy="18" r="2.5" fill="currentColor" stroke="none" />
          <path d="M13 12 A 8 8 0 0 0 13 24" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M23 12 A 8 8 0 0 1 23 24" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M9.5 8 A 14 14 0 0 0 9.5 28" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M26.5 8 A 14 14 0 0 1 26.5 28" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'f2',
      title: 'Wide Coverage Area',
      subtitle: 'Up to 1200 sq.ft Coverage',
      icon: (
        <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7 sm:w-8 sm:h-8 text-[#0066FF] shrink-0" stroke="currentColor">
          <circle cx="18" cy="18" r="14" strokeWidth="2" strokeLinecap="round" />
          <circle cx="18" cy="18" r="9" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="18" cy="18" r="4" strokeWidth="1.8" />
          <line x1="18" y1="2" x2="18" y2="7" strokeWidth="2" strokeLinecap="round" />
          <line x1="18" y1="29" x2="18" y2="34" strokeWidth="2" strokeLinecap="round" />
          <line x1="2" y1="18" x2="7" y2="18" strokeWidth="2" strokeLinecap="round" />
          <line x1="29" y1="18" x2="34" y2="18" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'f3',
      title: 'Chemical-Free & Safe',
      subtitle: 'Safe for Family & Pets',
      icon: (
        <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7 sm:w-8 sm:h-8 text-[#0066FF] shrink-0" stroke="currentColor">
          <path
            d="M8 28 C 14 26, 26 22, 28 6 C 12 8, 8 20, 8 28 Z"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M8 28 C 16 20, 22 14, 28 6" strokeWidth="2" strokeLinecap="round" />
          <path d="M14 22 C 16 19, 18 19, 18 19" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M19 17 C 21 14, 23 14, 23 14" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'f4',
      title: 'No Traps, No Poisons',
      subtitle: '100% Humane Solution',
      icon: (
        <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7 sm:w-8 sm:h-8 text-[#0066FF] shrink-0" stroke="currentColor">
          <path
            d="M18 4 L 30 9 C 30 20, 24 28, 18 32 C 12 28, 6 20, 6 9 Z"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M13 18 L 16.5 21.5 L 23 14" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 'f5',
      title: 'Easy to Install & Use',
      subtitle: 'Just Plug In & Stay Protected',
      icon: (
        <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7 sm:w-8 sm:h-8 text-[#0066FF] shrink-0" stroke="currentColor">
          <path
            d="M7 29 L 16 20 M 11 25 L 8 22 C 6 20, 6 17, 8 15 L 10 13 C 12 11, 15 11, 17 13 L 20 16 M 29 7 L 20 16 M 25 11 L 28 14 C 30 16, 30 19, 28 21 L 26 23 C 24 25, 21 25, 19 23 L 16 20"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const maxSlideIndex = Math.max(0, bottomFeatures.length - visibleCount);

  const handlePrev = () => {
    setSlideIndex((prev) => (prev <= 0 ? maxSlideIndex : prev - 1));
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
  };

  return (
    <section
      id="our-solution-section"
      className="w-full bg-white py-12 sm:py-16 lg:py-20 text-[#111111] overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* TOP MAIN 3-COLUMN COMPOSITION (Desktop: 35% / 40% / 25%)   */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* 1. LEFT CONTENT: Intro & 6 Feature Rows */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-4">
            <div>
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#111111] font-sans">
                Our Solution
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#111111] mt-2 mb-3 leading-tight font-sans whitespace-nowrap">
                <span>Ultrasonic </span>
                <span className="text-[#0066FF]">Rat Repellent</span>
              </h2>
              <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed font-sans max-w-md">
                {categorySubtitle}
              </p>
            </div>

            {/* Checklist with Brand Blue Circular Checkmarks: 1 col on mobile, 2 cols on tablet, 1 col on laptop/desktop */}
            <div className="pt-2 divide-y divide-neutral-100 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3.5 lg:block lg:divide-y lg:divide-neutral-100 lg:space-y-0">
              {solutionPoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3.5 py-2.5 sm:py-2.5 lg:py-3">
                  <div className="w-5 h-5 rounded-full bg-[#0066FF] flex items-center justify-center text-white shrink-0 shadow-xs shadow-blue-500/20">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-[15px] font-semibold text-[#111111] font-sans">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. CENTER & RIGHT: Complete Product in Center + Blue Ultrasonic Waves + Prohibited Mouse (Unified Horizontal Row) */}
          <div className="lg:col-span-7 xl:col-span-8 flex items-center justify-center lg:justify-end w-full py-4 lg:py-0 overflow-visible">
            <div className="flex flex-row items-center justify-center gap-1.5 sm:gap-3 md:gap-4 lg:gap-5 w-full max-w-[820px]">
              
              {/* Product Device */}
              <div className="flex-1 min-w-[120px] max-w-[340px] sm:max-w-[380px] lg:max-w-[440px] shrink flex items-center justify-center">
                <img
                  src={productImage}
                  alt="Ratguard SonicArmor X Ultrasonic Device"
                  className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.16)] select-none transition-transform duration-500 hover:scale-102"
                  loading="eager"
                />
              </div>

              {/* Concentric Ultrasonic Sound Waves (Increased Size, Tall Smooth Radiating Arcs) */}
              <div className="shrink-0 flex items-center justify-center">
                <svg
                  className="w-10 sm:w-16 md:w-20 lg:w-24 h-28 sm:h-38 md:h-48 lg:h-56 text-[#0066FF] overflow-visible"
                  viewBox="0 0 120 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 68 A 48 48 0 0 1 12 132"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M36 46 A 78 78 0 0 1 36 154"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M62 24 A 110 110 0 0 1 62 176"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M90 4 A 145 145 0 0 1 90 196"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Escaping Mouse with Red Prohibition Sign */}
              <div className="w-18 sm:w-26 md:w-34 lg:w-42 shrink-0 flex items-center justify-center select-none">
                <img
                  src="/images/home/product/rat-no-entry.png"
                  alt="Rodents Prohibited"
                  className="w-full h-auto object-contain select-none drop-shadow-xs"
                  loading="eager"
                />
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* BOTTOM FEATURE STRIP / SLIDER (Desktop 6, Mobile 1, Tab/Lap 4) */}
        {/* ========================================================= */}
        <div className="mt-6 sm:mt-10 lg:mt-10 relative group/slider">

          {/* Track with native manual scroll & snap for Mobile/Tablet/Laptop, Grid of 6 on Desktop */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory xl:overflow-visible w-full py-1"
          >
            <div className="flex xl:grid xl:grid-cols-5 xl:gap-0 xl:justify-between w-full">
              {bottomFeatures.map((feat, index) => (
                <div
                  key={feat.id}
                  className="w-full min-w-full sm:min-w-[50%] sm:w-1/2 lg:min-w-[33.333%] lg:w-1/3 xl:w-auto xl:min-w-0 shrink-0 px-2 sm:px-4 xl:px-4 flex justify-center sm:block snap-center sm:snap-start xl:snap-none"
                >
                  <div
                    className={`flex items-center justify-center sm:justify-start xl:justify-between sm:items-start gap-3 h-full ${
                      index !== bottomFeatures.length - 1 ? 'sm:border-r sm:border-neutral-200 sm:pr-3 xl:pr-4' : ''
                    }`}
                  >
                    <div className="flex items-center sm:items-start gap-3 min-w-0">
                      {/* Icon */}
                      <div className="shrink-0">
                        {feat.icon}
                      </div>

                      {/* Text: Heading 1 line & Subtitle 1 line */}
                      <div className="flex flex-col justify-center min-w-0">
                        <h4 className="text-xs sm:text-[13px] font-bold text-[#111111] tracking-tight leading-tight font-sans whitespace-nowrap truncate">
                          {feat.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-neutral-500 font-medium leading-tight mt-0.5 font-sans whitespace-nowrap truncate">
                          {feat.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Pagination Dots on Mobile/Tablet/Laptop */}
          {maxSlideIndex > 0 && (
            <div className="flex xl:hidden items-center justify-center gap-1.5 mt-5 sm:mt-6">
              {Array.from({ length: maxSlideIndex + 1 }).map((_, dotIdx) => {
                const isActive = dotIdx === slideIndex;
                return (
                  <button
                    key={dotIdx}
                    onClick={() => scrollToIndex(dotIdx)}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      isActive
                        ? 'w-6 sm:w-7 h-1.5 sm:h-2 bg-[#0066FF] shadow-xs shadow-blue-500/30'
                        : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-neutral-300 hover:bg-neutral-400'
                    }`}
                  />
                );
              })}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
