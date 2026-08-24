import React from 'react';
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
  // Bottom 6 Feature Strip with brand blue line-style icons
  const bottomFeatures = [
    {
      id: 'f1',
      title: 'DUAL ULTRASONIC SPEAKERS',
      subtitle: 'Powerful & Effective',
      icon: (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8 sm:w-9 sm:h-9 text-[#0066FF]" stroke="currentColor">
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
      title: 'WIDE COVERAGE AREA',
      subtitle: 'Up to 1200 sq.ft Coverage',
      icon: (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8 sm:w-9 sm:h-9 text-[#0066FF]" stroke="currentColor">
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
      title: 'CHEMICAL-FREE & SAFE',
      subtitle: 'Safe for Family & Pets',
      icon: (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8 sm:w-9 sm:h-9 text-[#0066FF]" stroke="currentColor">
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
      title: 'NO TRAPS NO POISONS',
      subtitle: '100% Humane Solution',
      icon: (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8 sm:w-9 sm:h-9 text-[#0066FF]" stroke="currentColor">
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
      title: 'EASY TO INSTALL & USE',
      subtitle: 'Just Plug In & Stay Protected',
      icon: (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8 sm:w-9 sm:h-9 text-[#0066FF]" stroke="currentColor">
          <path
            d="M7 29 L 16 20 M 11 25 L 8 22 C 6 20, 6 17, 8 15 L 10 13 C 12 11, 15 11, 17 13 L 20 16 M 29 7 L 20 16 M 25 11 L 28 14 C 30 16, 30 19, 28 21 L 26 23 C 24 25, 21 25, 19 23 L 16 20"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 'f6',
      title: 'LOW POWER CONSUMPTION',
      subtitle: 'Energy Efficient Technology',
      icon: (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8 sm:w-9 sm:h-9 text-[#0066FF]" stroke="currentColor">
          <circle cx="18" cy="18" r="14" strokeWidth="2.2" />
          <path
            d="M19 8 L 12 19 L 17.5 19 L 16 28 L 24 17 L 18.5 17 Z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      ),
    },
  ];

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
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#111111] font-sans">
                OUR SOLUTION
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111111] mt-2 mb-3 leading-tight font-sans">
                <span>RATGUARD </span>
                <span className="text-[#0066FF]">SONICARMOR X</span>
              </h2>
              <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed font-sans max-w-md">
                {categorySubtitle}
              </p>
            </div>

            {/* Checklist with Brand Blue Circular Checkmarks & subtle dividers */}
            <div className="pt-2 divide-y divide-neutral-100">
              {solutionPoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3.5 py-2.5 sm:py-3">
                  <div className="w-5 h-5 rounded-full bg-[#0066FF] flex items-center justify-center text-white shrink-0 shadow-xs shadow-blue-500/20">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-[15px] font-bold text-[#111111] font-sans">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. CENTER & RIGHT: Complete Product in Center + Blue Ultrasonic Waves + Prohibited Mouse */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col md:flex-row items-center justify-center lg:justify-end gap-3 sm:gap-6 relative">
            
            {/* Center Complete Device Display */}
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px] xl:max-w-[480px] shrink-0 flex items-center justify-center">
              <img
                src={productImage}
                alt="Ratguard SonicArmor X Ultrasonic Device"
                className="w-full h-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)] select-none transition-transform duration-500 hover:scale-102"
                loading="eager"
              />
            </div>

            {/* Right Side: Blue Ultrasonic Waves + Prohibited Mouse Container */}
            <div className="flex items-center justify-center gap-1 sm:gap-2 shrink-0">
              
              {/* Concentric Ultrasonic Waves in Brand Blue */}
              <div className="shrink-0 flex items-center">
                <svg
                  className="w-14 sm:w-18 md:w-22 h-28 sm:h-36 md:h-44 text-[#0066FF] shrink-0"
                  viewBox="0 0 75 140"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 45 A 45 45 0 0 1 12 95"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M28 32 A 65 65 0 0 1 28 108"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M46 18 A 85 85 0 0 1 46 122"
                    stroke="currentColor"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M64 4 A 105 105 0 0 1 64 136"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Clean Mouse with Red Prohibition Sign (Zero Cut Product) */}
              <div className="relative w-24 sm:w-32 md:w-40 shrink-0 flex items-center justify-center select-none">
                <img
                  src="/images/home/product/rat-no-entry.png"
                  alt="Rodents Prohibited"
                  className="w-full h-auto object-contain select-none"
                  loading="eager"
                />
              </div>

            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* BOTTOM HORIZONTAL FEATURE STRIP (6 Equal Blocks)          */}
        {/* ========================================================= */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 border-t border-neutral-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-0">
            {bottomFeatures.map((feat, index) => (
              <div
                key={feat.id}
                className={`flex items-start gap-3.5 lg:px-4 xl:px-5 ${
                  index !== bottomFeatures.length - 1
                    ? 'lg:border-r lg:border-neutral-200'
                    : ''
                }`}
              >
                {/* Icon */}
                <div className="shrink-0 mt-0.5">
                  {feat.icon}
                </div>

                {/* Text */}
                <div className="flex flex-col justify-start">
                  <h4 className="text-xs sm:text-[13px] font-extrabold uppercase text-[#111111] tracking-tight leading-snug font-sans">
                    {feat.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-500 font-medium leading-tight mt-1 font-sans">
                    {feat.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
