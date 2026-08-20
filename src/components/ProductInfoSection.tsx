import React from 'react';
import { Check, ArrowRight, Plug, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { PRODUCT_INFO_CHECKLIST } from '../data/mockData';

interface ProductInfoSectionProps {
  onBuyNow: () => void;
}

export const ProductInfoSection: React.FC<ProductInfoSectionProps> = ({ onBuyNow }) => {
  return (
    <section
      id="product-info-section"
      className="w-full bg-white select-none border-b border-neutral-100 overflow-hidden"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[680px]">
        {/* LEFT INFORMATION PANEL (White Background, approx 45% on desktop) */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-10 lg:p-14 xl:p-16 flex flex-col justify-center">
          <div className="max-w-md mx-auto lg:mx-0 w-full space-y-6">
            {/* 1. Kicker */}
            <span className="text-xs font-bold tracking-widest text-[#0066FF] bg-blue-50 px-3.5 py-1 rounded-full font-sans inline-block">
              ULTRASONIC RODENT REPELLER
            </span>

            {/* 2. Main Heading (Website Brand Blue #0066FF) */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight font-sans">
              <span className="text-[#111111] block">Advanced Protection,</span>
              <span className="text-[#0066FF] block">Rodent-Free Living.</span>
            </h2>

            {/* 3. Blue Accent Line */}
            <div className="w-20 h-1.5 bg-[#0066FF] rounded-full" />

            {/* 4. Product Model & Area Covered */}
            <div className="space-y-1">
              <div className="text-lg font-bold text-[#111111] font-sans">
                <span>Model : </span>
                <span className="text-[#0066FF] font-extrabold">RatGuard Pro-X</span>
              </div>
              <p className="text-sm font-semibold text-neutral-600 font-sans">
                Up to 2,500 Sq. Ft. Coverage Area
              </p>
            </div>

            {/* 5. 12-Item Location Checklist with Brand Blue Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {PRODUCT_INFO_CHECKLIST.map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 text-xs font-bold text-neutral-800 font-sans">
                  <div className="w-5 h-5 rounded-md bg-blue-50 text-[#0066FF] border border-blue-200/80 flex items-center justify-center shrink-0 shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* 6. Buy Now CTA (Website Theme Blue #0066FF) */}
            <div className="pt-4">
              <button
                id="plug-in-buy-now-btn"
                onClick={onBuyNow}
                className="inline-flex items-center justify-center gap-3 bg-[#0066FF] hover:bg-[#0052cc] active:bg-[#004099] text-white text-base font-extrabold px-10 py-4 rounded-full shadow-lg shadow-blue-500/25 transition-all duration-200 group transform hover:-translate-y-0.5 cursor-pointer font-sans"
              >
                <span>Buy Now</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL PANEL (Solid Charcoal/Black Background with High Contrast Context) */}
        <div className="lg:col-span-7 bg-[#0B0F19] p-6 sm:p-10 lg:p-14 xl:p-16 flex flex-col justify-between relative overflow-hidden text-white">
          {/* Subtle Ambient Blue Background Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066FF]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top-Left Heading on Dark Canvas */}
          <div className="relative z-10 max-w-xl mb-6 sm:mb-8">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-tight font-sans">
              <span className="text-white block">PLUG IT IN.</span>
              <span className="text-[#0066FF] block">PROTECTION BEGINS.</span>
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 font-normal mt-3 leading-relaxed max-w-md font-sans">
              It’s simple as that! The RatGuardPro will begin working immediately. No confusing setup or settings to worry about.
            </p>
          </div>

          {/* Hardware Device Visualization - Clean Product Cutout without extra wave circles */}
          <div className="relative z-10 w-full flex items-center justify-center my-4 sm:my-6">
            <div className="relative w-full max-w-lg aspect-16/10 flex items-center justify-center p-4 group">
              {/* Soft Ambient Radial Backdrop */}
              <div className="absolute w-64 h-64 bg-[#0066FF]/20 rounded-full blur-3xl -z-10 group-hover:bg-[#0066FF]/30 transition-all duration-500" />

              {/* Real Product Image */}
              <img
                src="/product/product.png"
                alt="RatGuardPro Plug In Ultrasonic Device"
                className="relative z-10 w-full h-auto max-h-[260px] sm:max-h-[300px] object-contain drop-shadow-[0_20px_40px_rgba(0,102,255,0.3)] transform group-hover:scale-105 transition-transform duration-300 select-none pointer-events-none"
                loading="eager"
              />
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};
