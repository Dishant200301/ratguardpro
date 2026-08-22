import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BENTO_CATEGORIES } from '../data/mockData';

export const BentoGridSection: React.FC = () => {
  const getCategory = (id: string) =>
    BENTO_CATEGORIES.find((c) => c.id === id) || BENTO_CATEGORIES[0];

  const categories = {
    home: getCategory('home'),
    garage: getCategory('garage'),
    carTruck: getCategory('car-truck'),
    shop: getCategory('shop'),
    godown: getCategory('godown'),
    hotels: getCategory('hotels'),
    factory: getCategory('factory'),
    hospital: getCategory('hospital'),
  };

  const baseCategoryList = [
    { cat: categories.home, label: 'Home Owners' },
    { cat: categories.garage, label: 'Garage' },
    { cat: categories.carTruck, label: 'Car-Truck Owners' },
    { cat: categories.shop, label: 'Shop' },
    { cat: categories.godown, label: 'Godown' },
    { cat: categories.hotels, label: 'Hotels' },
    { cat: categories.factory, label: 'Factory' },
    { cat: categories.hospital, label: 'Hospital' },
  ];

  // Tripled list for seamless infinite loop (set 0, set 1 = base, set 2)
  const infiniteCategoryList = [
    ...baseCategoryList,
    ...baseCategoryList,
    ...baseCategoryList,
  ];

  const baseLength = baseCategoryList.length; // 8

  // Mobile Infinite Slide State
  const [mobileIndex, setMobileIndex] = useState(baseLength); // starts at 8
  const [isMobileTransitioning, setIsMobileTransitioning] = useState(true);

  const nextMobileSlide = () => {
    setIsMobileTransitioning(true);
    setMobileIndex((prev) => prev + 1);
  };

  const prevMobileSlide = () => {
    setIsMobileTransitioning(true);
    setMobileIndex((prev) => prev - 1);
  };

  const handleMobileTransitionEnd = () => {
    if (mobileIndex >= baseLength * 2) {
      setIsMobileTransitioning(false);
      setMobileIndex((prev) => prev - baseLength);
    } else if (mobileIndex < baseLength) {
      setIsMobileTransitioning(false);
      setMobileIndex((prev) => prev + baseLength);
    }
  };

  const jumpMobileSlide = (idx: number) => {
    setIsMobileTransitioning(true);
    setMobileIndex(baseLength + idx);
  };

  // Active mobile dot (0 to 7)
  const activeMobileDot = ((mobileIndex % baseLength) + baseLength) % baseLength;

  // Tablet Infinite Slide State (2 items visible, 1-by-1 sliding)
  const [tabletIndex, setTabletIndex] = useState(baseLength); // starts at 8
  const [isTabletTransitioning, setIsTabletTransitioning] = useState(true);

  const nextTabletSlide = () => {
    setIsTabletTransitioning(true);
    setTabletIndex((prev) => prev + 1);
  };

  const prevTabletSlide = () => {
    setIsTabletTransitioning(true);
    setTabletIndex((prev) => prev - 1);
  };

  const handleTabletTransitionEnd = () => {
    if (tabletIndex >= baseLength * 2) {
      setIsTabletTransitioning(false);
      setTabletIndex((prev) => prev - baseLength);
    } else if (tabletIndex < baseLength) {
      setIsTabletTransitioning(false);
      setTabletIndex((prev) => prev + baseLength);
    }
  };

  const jumpTabletSlide = (idx: number) => {
    setIsTabletTransitioning(true);
    setTabletIndex(baseLength + idx);
  };

  // Active tablet dot (0 to 7)
  const activeTabletDot = ((tabletIndex % baseLength) + baseLength) % baseLength;

  // Touch swipe support
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleMobileTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 40) nextMobileSlide();
    if (distance < -40) prevMobileSlide();
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const handleTabletTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 40) nextTabletSlide();
    if (distance < -40) prevTabletSlide();
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section
      id="bento-grid-section"
      className="w-full bg-white py-8 sm:py-12 lg:py-16 overflow-hidden"
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* DESKTOP & LAPTOP LAYOUT (Exact 4-Column Reference Grid)     */}
        {/* ========================================================= */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-4 xl:gap-5 items-stretch">
          
          {/* Row 1, Col 1: Home Owners */}
          <div className="group relative h-[254px] rounded-[11px] overflow-hidden bg-neutral-100 border border-neutral-200/50 shadow-xs hover:shadow-md transition-all duration-300">
            <img
              src={categories.home.image}
              alt="Home Owners"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-end p-5 pointer-events-none">
              <span className="text-[#111111] font-bold text-lg xl:text-xl tracking-tight bg-white/40 backdrop-blur-[2px] px-2.5 py-0.5 rounded-md">
                Home Owners
              </span>
            </div>
          </div>

          {/* Row 1-2, Col 2-3: CENTER FEATURED CARD (Ultrasonic Rat Repellent Device) */}
          <div className="col-span-2 row-span-2 h-[528px] xl:h-[530px] bg-white rounded-[11px] shadow-sm border border-neutral-200/80 p-6 xl:p-8 flex flex-col justify-between items-center text-center relative overflow-hidden transition-all duration-300">
            
            {/* Header: Title & Subtitle */}
            <div className="z-10 mt-1">
              <h3 className="text-3xl xl:text-[38px] font-bold text-[#111111] tracking-tight leading-[1.15]">
                Ultrasonic Rat<br />
                Repellent Device
              </h3>
              <p className="text-neutral-500 text-sm xl:text-[15px] font-normal mt-2 tracking-normal">
                One smart protection solution for multiple spaces.
              </p>
            </div>

            {/* Product Centerpiece (No shadow, no hover scale) */}
            <div className="relative w-full max-w-[340px] xl:max-w-[380px] h-[260px] xl:h-[290px] flex items-center justify-center z-10 my-auto">
              <img
                src="/images/home/product/product.webp"
                alt="Ultrasonic Rat Repellent Device"
                className="max-w-full max-h-full object-contain"
                loading="eager"
              />
            </div>

            {/* Bottom Benefits */}
            <div className="w-full pt-3 z-10 flex items-center justify-center gap-4 xl:gap-6 text-xs xl:text-sm font-medium text-neutral-600">
              <span>24/7 Protection</span>
              <span className="text-neutral-400 font-bold">•</span>
              <span>Chemical-Free</span>
              <span className="text-neutral-400 font-bold">•</span>
              <span>Silent Operation</span>
            </div>
          </div>

          {/* Row 1, Col 4: Garage */}
          <div className="group relative h-[254px] rounded-[11px] overflow-hidden bg-neutral-100 border border-neutral-200/50 shadow-xs hover:shadow-md transition-all duration-300">
            <img
              src={categories.garage.image}
              alt="Garage"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-end p-5 pointer-events-none">
              <span className="text-[#111111] font-bold text-lg xl:text-xl tracking-tight bg-white/40 backdrop-blur-[2px] px-2.5 py-0.5 rounded-md">
                Garage
              </span>
            </div>
          </div>

          {/* Row 2, Col 1: Car-Truck Owners */}
          <div className="group relative h-[254px] rounded-[11px] overflow-hidden bg-neutral-100 border border-neutral-200/50 shadow-xs hover:shadow-md transition-all duration-300">
            <img
              src={categories.carTruck.image}
              alt="Car-Truck Owners"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-end p-5 pointer-events-none">
              <span className="text-[#111111] font-bold text-lg xl:text-xl tracking-tight bg-white/40 backdrop-blur-[2px] px-2.5 py-0.5 rounded-md">
                Car-Truck Owners
              </span>
            </div>
          </div>

          {/* Row 2, Col 4: Shop */}
          <div className="group relative h-[254px] rounded-[11px] overflow-hidden bg-neutral-100 border border-neutral-200/50 shadow-xs hover:shadow-md transition-all duration-300">
            <img
              src={categories.shop.image}
              alt="Shop"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-end p-5 pointer-events-none">
              <span className="text-[#111111] font-bold text-lg xl:text-xl tracking-tight bg-white/40 backdrop-blur-[2px] px-2.5 py-0.5 rounded-md">
                Shop
              </span>
            </div>
          </div>

          {/* Row 3, Col 1: Godown */}
          <div className="group relative h-[258px] rounded-[11px] overflow-hidden bg-neutral-100 border border-neutral-200/50 shadow-xs hover:shadow-md transition-all duration-300">
            <img
              src={categories.godown.image}
              alt="Godown"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-end p-5 pointer-events-none">
              <span className="text-[#111111] font-bold text-lg xl:text-xl tracking-tight bg-white/40 backdrop-blur-[2px] px-2.5 py-0.5 rounded-md">
                Godown
              </span>
            </div>
          </div>

          {/* Row 3, Col 2: Hotels */}
          <div className="group relative h-[258px] rounded-[11px] overflow-hidden bg-neutral-100 border border-neutral-200/50 shadow-xs hover:shadow-md transition-all duration-300">
            <img
              src={categories.hotels.image}
              alt="Hotels"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-end p-5 pointer-events-none">
              <span className="text-[#111111] font-bold text-lg xl:text-xl tracking-tight bg-white/40 backdrop-blur-[2px] px-2.5 py-0.5 rounded-md">
                Hotels
              </span>
            </div>
          </div>

          {/* Row 3, Col 3: Factory */}
          <div className="group relative h-[258px] rounded-[11px] overflow-hidden bg-neutral-100 border border-neutral-200/50 shadow-xs hover:shadow-md transition-all duration-300">
            <img
              src={categories.factory.image}
              alt="Factory"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-end p-5 pointer-events-none">
              <span className="text-[#111111] font-bold text-lg xl:text-xl tracking-tight bg-white/40 backdrop-blur-[2px] px-2.5 py-0.5 rounded-md">
                Factory
              </span>
            </div>
          </div>

          {/* Row 3, Col 4: Hospital */}
          <div className="group relative h-[258px] rounded-[11px] overflow-hidden bg-neutral-100 border border-neutral-200/50 shadow-xs hover:shadow-md transition-all duration-300">
            <img
              src={categories.hospital.image}
              alt="Hospital"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-end p-5 pointer-events-none">
              <span className="text-[#111111] font-bold text-lg xl:text-xl tracking-tight bg-white/40 backdrop-blur-[2px] px-2.5 py-0.5 rounded-md">
                Hospital
              </span>
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* TABLET & MOBILE RESPONSIVE LAYOUT                          */}
        {/* ========================================================= */}
        <div className="lg:hidden flex flex-col gap-6">
          
          {/* Featured Device Card on Top for Mobile/Tablet (Unchanged) */}
          <div className="w-full bg-white rounded-2xl border border-neutral-200/80 p-5 sm:p-8 flex flex-col justify-between items-center text-center relative overflow-hidden shadow-xs">
            {/* Ambient Background Wave Effect */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-blue-400/30 animate-pulse" />
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-sky-300/25" />
            </div>

            <div className="z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight leading-tight">
                Ultrasonic Rat<br />
                Repellent Device
              </h3>
              <p className="text-neutral-500 text-xs sm:text-sm font-normal mt-1.5">
                One smart protection solution for multiple spaces.
              </p>
            </div>

            <div className="relative w-full max-w-[280px] sm:max-w-[320px] h-[200px] sm:h-[240px] flex items-center justify-center z-10 my-4">
              <img
                src="/images/home/product/product.webp"
                alt="Ultrasonic Rat Repellent Device"
                className="max-w-full max-h-full object-contain"
                loading="eager"
              />
            </div>

            <div className="w-full pt-3 border-t border-neutral-100 flex items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-neutral-600 flex-wrap z-10">
              <span>24/7 Protection</span>
              <span className="text-neutral-300">•</span>
              <span>Chemical-Free</span>
              <span className="text-neutral-300">•</span>
              <span>Silent Operation</span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* MOBILE VIEW (Infinite Loop, 1 Card Visible, Smooth Slide) */}
          {/* ========================================================= */}
          <div className="block sm:hidden w-full">
            <div className="relative w-full px-1">
              {/* Sliding Viewport */}
              <div
                className="overflow-hidden rounded-xl"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMobileTouchEnd}
              >
                <div
                  className="flex -mx-1"
                  style={{
                    transform: `translateX(-${mobileIndex * 100}%)`,
                    transition: isMobileTransitioning ? 'transform 450ms ease-out' : 'none',
                  }}
                  onTransitionEnd={handleMobileTransitionEnd}
                >
                  {infiniteCategoryList.map((item, idx) => (
                    <div
                      key={`${item.cat.id}-${idx}`}
                      className="w-full flex-shrink-0 px-1"
                    >
                      <div className="relative h-60 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs">
                        <img
                          src={item.cat.image}
                          alt={item.label}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-end justify-center pb-5 px-4 pointer-events-none">
                          <span className="text-[#111111] font-bold text-base tracking-tight bg-white/80 backdrop-blur-[4px] px-4 py-1.5 rounded-lg shadow-xs text-center">
                            {item.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Left Arrow Button */}
              <button
                type="button"
                onClick={prevMobileSlide}
                aria-label="Previous Category"
                className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs border border-neutral-200 shadow-md flex items-center justify-center text-neutral-800 active:scale-90 transition-all z-20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Right Arrow Button */}
              <button
                type="button"
                onClick={nextMobileSlide}
                aria-label="Next Category"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs border border-neutral-200 shadow-md flex items-center justify-center text-neutral-800 active:scale-90 transition-all z-20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Pagination Dots for Mobile (8 dots) */}
            <div className="flex items-center justify-center gap-1.5 mt-3.5">
              {baseCategoryList.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => jumpMobileSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeMobileDot
                      ? 'w-6 bg-[#0066FF]'
                      : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* TABLET VIEW (Infinite Loop, 2 Cards Visible, Persistent Gap) */}
          {/* ========================================================= */}
          <div className="hidden sm:block lg:hidden w-full">
            <div className="relative w-full px-2">
              {/* Sliding Viewport */}
              <div
                className="overflow-hidden rounded-xl"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTabletTouchEnd}
              >
                <div
                  className="flex -mx-2.5"
                  style={{
                    transform: `translateX(-${tabletIndex * 50}%)`,
                    transition: isTabletTransitioning ? 'transform 450ms ease-out' : 'none',
                  }}
                  onTransitionEnd={handleTabletTransitionEnd}
                >
                  {infiniteCategoryList.map((item, idx) => (
                    <div
                      key={`${item.cat.id}-${idx}`}
                      className="w-1/2 flex-shrink-0 px-2.5"
                    >
                      <div className="group relative h-56 md:h-64 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs">
                        <img
                          src={item.cat.image}
                          alt={item.label}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-end p-4 pointer-events-none">
                          <span className="text-[#111111] font-bold text-base md:text-lg tracking-tight bg-white/70 backdrop-blur-[3px] px-3 py-1 rounded-md shadow-xs">
                            {item.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Left Arrow Button */}
              <button
                type="button"
                onClick={prevTabletSlide}
                aria-label="Previous Categories"
                className="absolute -left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 backdrop-blur-xs border border-neutral-200 shadow-md flex items-center justify-center text-neutral-800 hover:bg-neutral-50 active:scale-95 transition-all z-20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Right Arrow Button */}
              <button
                type="button"
                onClick={nextTabletSlide}
                aria-label="Next Categories"
                className="absolute -right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 backdrop-blur-xs border border-neutral-200 shadow-md flex items-center justify-center text-neutral-800 hover:bg-neutral-50 active:scale-95 transition-all z-20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Pagination Dots for Tablet (8 dots) */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {baseCategoryList.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => jumpTabletSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeTabletDot
                      ? 'w-6 bg-[#0066FF]'
                      : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
