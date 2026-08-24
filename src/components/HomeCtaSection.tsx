import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HomeCtaSectionProps {
  onShopNow: () => void;
}

export const HomeCtaSection: React.FC<HomeCtaSectionProps> = ({ onShopNow }) => {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 text-[#111111] overflow-hidden">
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enclosed CTA Card */}
        <div className="w-full bg-white rounded-3xl border border-[#bedbff] p-6 sm:p-10 lg:px-16 lg:py-16 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Content Column (Order 2 on Mobile/Tablet, Order 1 on Desktop) */}
            <div className="order-2 lg:order-1 lg:col-span-7 xl:col-span-7 space-y-4 sm:space-y-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Main Heading (Line 1 up to '&', Line 2 remainder + With RatGuard) */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#111111] tracking-tight font-sans mt-3 leading-[1.2]">
                <span className="block">
                  Protect Your <span className="text-[#0066FF]">Family &</span>
                </span>
                <span className="block mt-1 sm:mt-1.5">
                  <span className="text-[#0066FF]">Home </span>
                  With <span className="text-[#0066FF]">RatGuard</span>
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal font-sans max-w-lg pt-1 mx-auto lg:mx-0">
                Keep your loved ones safe from rat infestations with Ratguard's
                advanced ultrasonic protection.
              </p>

              {/* Action Button (Solid Blue with Arrow, No shopping cart icon) */}
              <div className="pt-2 sm:pt-3 flex justify-center lg:justify-start w-full">
                <button
                  onClick={onShopNow}
                  className="bg-[#0066FF] hover:bg-[#0052cc] active:scale-[0.98] text-white font-semibold text-xs sm:text-sm tracking-wide px-7 sm:px-7 py-3.5 sm:py-4 rounded-full shadow-lg shadow-blue-500/25 transition-all duration-200 cursor-pointer inline-flex items-center gap-2.5 group"
                >
                  <span>Protect My Home</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Product Display with Concentric Waves (Order 1 on Mobile/Tablet, Order 2 on Desktop) */}
            <div className="order-1 lg:order-2 lg:col-span-5 xl:col-span-5 flex items-center justify-center relative my-4 lg:my-0">
              {/* Subtle Concentric Sound Wave Rings Behind Product */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0">
                <svg
                  className="w-[125%] h-[125%] max-w-[580px] text-[#0066FF]/20"
                  viewBox="0 0 500 350"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="250"
                    cy="190"
                    rx="230"
                    ry="120"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="opacity-40"
                  />
                  <ellipse
                    cx="250"
                    cy="190"
                    rx="170"
                    ry="90"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="opacity-60"
                  />
                  <ellipse
                    cx="250"
                    cy="190"
                    rx="110"
                    ry="60"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="opacity-80"
                  />
                </svg>
              </div>

              {/* Complete Authentic Ratguard Product Device */}
              <div className="relative z-10 w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[460px] xl:max-w-[500px] flex items-center justify-center">
                <img
                  src="/images/home/product/product.webp"
                  alt="Ratguard SonicArmor X Device"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.16)] select-none transition-transform duration-500 hover:scale-102"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
