import React from 'react';
import { BENTO_CATEGORIES } from '../data/mockData';

export const BentoGridSection: React.FC = () => {
  const getCategory = (id: string) =>
    BENTO_CATEGORIES.find((c) => c.id === id) || BENTO_CATEGORIES[0];

  return (
    <section
      id="bento-grid-section"
      className="w-full bg-white py-12 sm:py-16 lg:py-24 border-b border-neutral-100 select-none overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Bento Layout Grid (Matching Reference Image Exactly) */}
        <div className="flex flex-col gap-5 sm:gap-6">
          {/* TOP 3-COLUMN SECTION ON DESKTOP (Left Stack, Center Card, Right Stack) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">

            {/* LEFT COLUMN: Home Owners & Car-Truck Owners (lg:col-span-3) */}
            <div className="lg:col-span-3 flex flex-col gap-5 sm:gap-6 justify-between">
              {/* 1. Home Owners */}
              <div className="group relative h-52 sm:h-60 lg:h-[260px] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs hover:shadow-md transition-all duration-300">
                <img
                  src={getCategory('home').image}
                  alt="Home Owners"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-4 sm:p-5">
                  <span className="text-white font-extrabold text-lg sm:text-xl tracking-tight drop-shadow-md">
                    Home Owners
                  </span>
                </div>
              </div>

              {/* 2. Car-Truck Owners */}
              <div className="group relative h-52 sm:h-60 lg:h-[260px] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs hover:shadow-md transition-all duration-300">
                <img
                  src={getCategory('car-truck').image}
                  alt="Car-Truck Owners"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-4 sm:p-5">
                  <span className="text-white font-extrabold text-lg sm:text-xl tracking-tight drop-shadow-md">
                    Car-Truck Owners
                  </span>
                </div>
              </div>
            </div>

            {/* CENTER FEATURED CARD: Ultrasonic Rat Repellent Device (lg:col-span-6) */}
            <div className="md:col-span-2 lg:col-span-6 bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/80 p-6 sm:p-8 md:p-10 flex flex-col justify-between items-center text-center relative overflow-hidden shadow-xs hover:shadow-sm transition-all duration-300 group min-h-[380px] sm:min-h-[460px] lg:min-h-[540px]">
              {/* Header */}
              <div className="z-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight leading-tight">
                  Ultrasonic Rat <br className="hidden sm:inline" />
                  Repellent Device
                </h3>
                <p className="text-neutral-500 text-xs sm:text-sm font-medium mt-2">
                  One smart protection solution for multiple spaces.
                </p>
              </div>

              {/* Center Product Image seated on concentric sound wave rings */}
              <div className="my-4 sm:my-6 relative w-full max-w-md aspect-4/3 flex items-center justify-center z-10">
                {/* Concentric sound wave rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                  <div className="w-56 sm:w-72 h-56 sm:h-72 rounded-full border border-blue-400/40 animate-pulse-slow" />
                  <div className="w-72 sm:w-96 h-72 sm:h-96 rounded-full border border-cyan-400/30" />
                </div>

                {/* Product Image */}
                <img
                  src="/product/product.png"
                  alt="Ultrasonic Rat Repellent Device"
                  className="w-full h-auto max-h-[220px] sm:max-h-[300px] object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 relative z-10"
                  loading="eager"
                />
              </div>

              {/* Bottom Benefits Footer */}
              <div className="w-full pt-4 border-t border-neutral-100 flex items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-extrabold text-neutral-700 flex-wrap z-10">
                <span>24/7 Protection</span>
                <span className="text-neutral-300">•</span>
                <span>Chemical-Free</span>
                <span className="text-neutral-300">•</span>
                <span>Silent Operation</span>
              </div>
            </div>

            {/* RIGHT COLUMN: Garage & Hospital (lg:col-span-3) */}
            <div className="lg:col-span-3 flex flex-col gap-5 sm:gap-6 justify-between">
              {/* 3. Garage */}
              <div className="group relative h-52 sm:h-60 lg:h-[260px] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs hover:shadow-md transition-all duration-300">
                <img
                  src={getCategory('garage').image}
                  alt="Garage"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-4 sm:p-5">
                  <span className="text-white font-extrabold text-lg sm:text-xl tracking-tight drop-shadow-md">
                    Garage
                  </span>
                </div>
              </div>

              {/* 4. Hospital */}
              <div className="group relative h-52 sm:h-60 lg:h-[260px] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs hover:shadow-md transition-all duration-300">
                <img
                  src={getCategory('hospital').image}
                  alt="Hospital"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-4 sm:p-5">
                  <span className="text-white font-extrabold text-lg sm:text-xl tracking-tight drop-shadow-md">
                    Hospital
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* BOTTOM ROW: 4 CATEGORIES (Godown, Hotels, Factory, Shop) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {/* 5. Godown */}
            <div className="group relative h-48 sm:h-56 lg:h-64 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs hover:shadow-md transition-all duration-300">
              <img
                src={getCategory('godown').image}
                alt="Godown"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-4 sm:p-5">
                <span className="text-white font-extrabold text-base sm:text-xl tracking-tight drop-shadow-md">
                  Godown
                </span>
              </div>
            </div>

            {/* 6. Hotels */}
            <div className="group relative h-48 sm:h-56 lg:h-64 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs hover:shadow-md transition-all duration-300">
              <img
                src={getCategory('hotels').image}
                alt="Hotels"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-4 sm:p-5">
                <span className="text-white font-extrabold text-base sm:text-xl tracking-tight drop-shadow-md">
                  Hotels
                </span>
              </div>
            </div>

            {/* 7. Factory */}
            <div className="group relative h-48 sm:h-56 lg:h-64 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs hover:shadow-md transition-all duration-300">
              <img
                src={getCategory('factory').image}
                alt="Factory"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-4 sm:p-5">
                <span className="text-white font-extrabold text-base sm:text-xl tracking-tight drop-shadow-md">
                  Factory
                </span>
              </div>
            </div>

            {/* 8. Shop */}
            <div className="group relative h-48 sm:h-56 lg:h-64 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs hover:shadow-md transition-all duration-300">
              <img
                src={getCategory('shop').image}
                alt="Shop"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-4 sm:p-5">
                <span className="text-white font-extrabold text-base sm:text-xl tracking-tight drop-shadow-md">
                  Shop
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

