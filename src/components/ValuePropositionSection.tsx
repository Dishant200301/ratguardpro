import React, { useState, useEffect, useRef } from 'react';

interface ValueCard {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

/* 1. 3D-styled Royal Blue Shield with Checkmark Icon */
const ShieldCheckIcon = () => (
  <svg
    className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="shieldBlueGrad" x1="28" y1="4" x2="28" y2="52" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#3388FF" />
        <stop offset="50%" stopColor="#0066FF" />
        <stop offset="100%" stopColor="#0044CC" />
      </linearGradient>
      <linearGradient id="shieldBlueGloss" x1="14" y1="6" x2="42" y2="28" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </linearGradient>
      <filter id="shieldBlueShadow" x="4" y="4" width="48" height="50" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#0044cc" floodOpacity="0.3" />
      </filter>
    </defs>
    {/* Outer Shield with Shadow */}
    <path
      d="M28 4L46 11.5V26C46 38.5 38.3 47.8 28 52C17.7 47.8 10 38.5 10 26V11.5L28 4Z"
      fill="url(#shieldBlueGrad)"
      filter="url(#shieldBlueShadow)"
    />
    {/* Glossy top bevel */}
    <path
      d="M28 6.5L43.5 13V25.5C43.5 36.2 36.9 44.5 28 48.8C19.1 44.5 12.5 36.2 12.5 25.5V13L28 6.5Z"
      fill="url(#shieldBlueGloss)"
    />
    {/* Clean White Checkmark */}
    <path
      d="M21 27.5L25.8 32.5L35.5 21.5"
      stroke="#FFFFFF"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* 2. 3D-styled Eco Care Hands Icon (Website Blue & Cyan Theme) */
const EcoHandsIcon = () => (
  <svg
    className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="leafBlueLeft" x1="16" y1="8" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="leafBlueRight" x1="40" y1="8" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#0066FF" />
      </linearGradient>
      <linearGradient id="handBlueGrad" x1="14" y1="30" x2="42" y2="50" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#93C5FD" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
    {/* Left Sprout Leaf */}
    <path
      d="M28 26C28 26 14 24 13 14C12 4 23 7 28 17C28 20 28 26 28 26Z"
      fill="url(#leafBlueLeft)"
    />
    {/* Right Sprout Leaf */}
    <path
      d="M28 26C28 26 42 24 43 14C44 4 33 7 28 17C28 20 28 26 28 26Z"
      fill="url(#leafBlueRight)"
    />
    {/* Center Stem */}
    <path
      d="M28 18V32"
      stroke="#0066FF"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Left Hand Holding */}
    <path
      d="M13 36C13 36 17 32 23 35C26 36.5 27 39 27 41L21 44C17 44 13 41 13 36Z"
      fill="url(#handBlueGrad)"
    />
    {/* Right Hand Holding */}
    <path
      d="M43 36C43 36 39 32 33 35C30 36.5 29 39 29 41L35 44C39 44 43 41 43 36Z"
      fill="url(#handBlueGrad)"
    />
    {/* Sleeve / Base Accents */}
    <rect x="12" y="42" width="10" height="6" rx="2" fill="#0066FF" />
    <rect x="34" y="42" width="10" height="6" rx="2" fill="#0066FF" />
  </svg>
);

/* 3. 3D-styled Hourglass / Timer Icon (Website Blue Theme) */
const HourglassIcon = () => (
  <svg
    className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="blueFrame" x1="16" y1="4" x2="40" y2="52" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="50%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#1E40AF" />
      </linearGradient>
      <linearGradient id="blueSand" x1="28" y1="12" x2="28" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0066FF" />
      </linearGradient>
    </defs>
    {/* Top Cap */}
    <rect x="14" y="6" width="28" height="5" rx="2.5" fill="url(#blueFrame)" />
    {/* Bottom Cap */}
    <rect x="14" y="45" width="28" height="5" rx="2.5" fill="url(#blueFrame)" />
    {/* Glass Bulb Top & Bottom with Hourglass Waist */}
    <path
      d="M18 11H38C38 21 31 25 29 27C27 25 20 21 20 11Z"
      fill="#E8F1FF"
      fillOpacity="0.85"
      stroke="#93C5FD"
      strokeWidth="1.5"
    />
    <path
      d="M18 45H38C38 35 31 31 29 29C27 31 20 35 20 45Z"
      fill="#E8F1FF"
      fillOpacity="0.85"
      stroke="#93C5FD"
      strokeWidth="1.5"
    />
    {/* Blue Sand Top */}
    <path
      d="M21 15H35C35 20 31 23 28 25C25 23 21 20 21 15Z"
      fill="url(#blueSand)"
    />
    {/* Blue Sand Bottom */}
    <path
      d="M22 44H34C34 39 31 36 28 34C25 36 22 39 22 44Z"
      fill="url(#blueSand)"
    />
    {/* Center trickle */}
    <line x1="28" y1="26" x2="28" y2="34" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" />
    {/* Side Pillar Supports */}
    <rect x="15" y="10" width="2.5" height="36" rx="1" fill="url(#blueFrame)" />
    <rect x="38.5" y="10" width="2.5" height="36" rx="1" fill="url(#blueFrame)" />
  </svg>
);

const VALUE_ITEMS: ValueCard[] = [
  {
    id: 'effective-protection',
    title: 'Effective Protection',
    subtitle: 'Shields Vehicle & Home',
    icon: <ShieldCheckIcon />,
  },
  {
    id: 'eco-friendly',
    title: 'Eco-Friendly Formula',
    subtitle: 'Safe for Pets & Humans',
    icon: <EcoHandsIcon />,
  },
  {
    id: 'long-lasting',
    title: 'Long-Lasting Effect',
    subtitle: 'Long-Lasting Protection',
    icon: <HourglassIcon />,
  },
];

export const ValuePropositionSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 5-second automatic sliding for mobile & tablet views
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % VALUE_ITEMS.length);
    }, 5000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % VALUE_ITEMS.length);
      }, 5000);
    }
  };

  return (
    <section
      id="value-proposition-section"
      className="w-full bg-white py-10 sm:py-14 select-none"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. LAPTOP / DESKTOP VIEW (3-COLUMN GRID WITHOUT PAGINATION DOTS) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 lg:gap-8">
          {VALUE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-[#F2F7FF] rounded-2xl p-6 sm:p-7 flex items-center gap-5 border border-[#DCE7FC] transition-all duration-300 hover:shadow-md hover:shadow-blue-500/10 hover:border-blue-300 hover:-translate-y-0.5 group"
            >
              {/* Icon */}
              {item.icon}

              {/* Website Theme Blue Divider Line */}
              <div className="w-[1.5px] h-12 bg-[#0066FF] shrink-0 rounded-full" />

              {/* Text */}
              <div className="flex flex-col justify-center">
                <h3 className="text-[#111111] font-bold text-xl xl:text-2xl leading-tight font-sans tracking-tight">
                  {item.title}
                </h3>
                <p className="text-neutral-500 text-sm xl:text-base mt-1 font-normal font-sans">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 2. MOBILE & TABLET VIEW (1 FULL WIDTH CARD WITH 5S AUTO-SLIDE & PAGINATION DOTS) */}
        <div className="block lg:hidden">
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {VALUE_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="w-full shrink-0 px-0.5"
                >
                  <div className="bg-[#F2F7FF] rounded-2xl p-6 sm:p-7 flex items-center gap-4 sm:gap-6 border border-[#DCE7FC] shadow-xs">
                    {/* Icon */}
                    {item.icon}

                    {/* Website Theme Blue Divider Line */}
                    <div className="w-[1.5px] h-12 sm:h-14 bg-[#0066FF] shrink-0 rounded-full" />

                    {/* Text */}
                    <div className="flex flex-col justify-center">
                      <h3 className="text-[#111111] font-bold text-lg sm:text-xl md:text-2xl leading-tight font-sans tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-neutral-500 text-xs sm:text-sm md:text-base mt-1 font-normal font-sans">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Indicator Dots (Mobile & Tablet only) */}
          <div className="flex justify-center items-center gap-2 mt-4 pt-1">
            {VALUE_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleDotClick(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-6 h-2 bg-[#0066FF]'
                    : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
