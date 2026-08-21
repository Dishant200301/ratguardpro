import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Zap,
  Leaf,
  ShieldCheck,
  ShoppingCart,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { HERO_SLIDES } from '../data/mockData';

interface HeroSectionProps {
  onShopNow: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onShopNow }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentSlideIndex]);

  const handleDotClick = (index: number) => {
    setCurrentSlideIndex(index);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const renderFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'play':
        return <Play className="w-4 h-4 text-white fill-current translate-x-0.5" />;
      case 'power':
        return <Zap className="w-4 h-4 text-white fill-current" />;
      case 'eco':
        return <Leaf className="w-4 h-4 text-white" />;
      case 'water':
        return <ShieldCheck className="w-4 h-4 text-white" />;
      default:
        return <Zap className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section
      id="hero-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      className="relative w-full h-[85vh] min-h-[580px] max-h-[850px] bg-[#0A0A0A] overflow-hidden"
    >
      {/* Background Slides with smooth fade */}
      {HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === currentSlideIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
          >
            {/* Full Width Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out scale-105"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
              }}
            />
            {/* Gradient Overlay (Dark left for high text readability) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/40 to-black/10 lg:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
          </div>
        );
      })}

      {/* Hero Content Area */}
      <div className="relative z-20 w-full h-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-xl lg:max-w-2xl text-white space-y-5 py-8 md:ml-10">
          {/* 1. Main Heading (Strictly 2 lines across all screen sizes, Capitalized) */}
          <h1 className="text-[1.65rem] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.15] font-sans drop-shadow-lg capitalize">
            <span className="block whitespace-nowrap">
              Protect Your {currentSlide.heading.replace('PROTECT YOUR ', '').toLowerCase()}
            </span>
            <span className="inline-flex items-center gap-2 mt-1 sm:mt-2">
              <span className="bg-[#0066FF] text-white px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md shadow-xl font-bold whitespace-nowrap normal-case">
                From Rats
              </span>
            </span>
          </h1>

          {/* 2. Horizontal Accent Line */}
          <div className="w-full max-w-sm sm:max-w-md h-1 bg-[#0066FF] rounded-full relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-white rounded-full" />
          </div>

          {/* 3. Subtitle / Paragraph */}
          <p className="text-neutral-200 text-sm sm:text-base font-medium leading-relaxed font-sans max-w-lg">
            {currentSlide.paragraph}
          </p>

          {/* 4. Features 2 BY 2 GRID (Requested 2x2 grid layout) */}
          <div className="grid md:grid-cols-2 gap-1.5 md:gap-2 max-w-lg pt-0 pb-0 md:pt-1 md:pb-3">
            {currentSlide.features.map((feature, fIdx) => (
              <div
                key={fIdx}
                className="flex items-center gap-3 px-0 md:pr-3.5 py-1 md:py-2.5 rounded-2xl shadow-xs hover:border-[#0066FF]/60 transition-colors"
              >
                {/* Circle Icon Badge in #0066FF */}
                <div className="w-8 h-8 rounded-full bg-[#0066FF] flex items-center justify-center shrink-0 shadow-md">
                  {renderFeatureIcon(feature.icon)}
                </div>
                <span className="text-xs sm:text-sm font-bold text-white tracking-wide font-sans whitespace-nowrap">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>

          {/* 5. Shop Now Button (Compact pill design matching reference with #0066FF cart badge) */}
          <div className="pt-1.5 md:pt-2 flex justify-start">
            <button
              id="hero-shop-now-btn"
              onClick={onShopNow}
              className="inline-flex items-center gap-3 sm:gap-5 bg-[#0D0D0D] hover:bg-black active:scale-[0.98] text-white pl-1.5 pr-4 py-1.5 sm:pl-2 sm:pr-5 sm:py-2 rounded-full shadow-2xl transition-all duration-200 group cursor-pointer border border-neutral-800"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0066FF] flex items-center justify-center text-white shrink-0 shadow-md transition-transform">
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="font-bold text-sm sm:text-base tracking-wider uppercase text-white font-sans whitespace-nowrap">
                {currentSlide.ctaText || 'SHOP NOW'}
              </span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows for Next/Prev */}
      <button
        onClick={handlePrev}
        aria-label="Previous slide"
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-[#0066FF] border border-white/20 items-center justify-center text-white backdrop-blur-xs transition-all cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        aria-label="Next slide"
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-[#0066FF] border border-white/20 items-center justify-center text-white backdrop-blur-xs transition-all cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Center Pagination Dots (8 dots total) */}
      <div
        id="hero-pagination-dots"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 bg-black/60 px-3 py-2 rounded-full backdrop-blur-md"
      >
        {HERO_SLIDES.map((slide, dotIdx) => {
          const isActive = dotIdx === currentSlideIndex;
          return (
            <button
              key={slide.id}
              onClick={() => handleDotClick(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}: ${slide.category}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${isActive
                ? 'w-7 h-1.5 bg-[#0066FF] shadow-sm shadow-blue-500'
                : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/80'
                }`}
            />
          );
        })}
      </div>
    </section>
  );
};

