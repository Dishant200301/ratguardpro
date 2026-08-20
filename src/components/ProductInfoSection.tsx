import React from 'react';
import { Check, ArrowRight, Plug, Radio, Sparkles } from 'lucide-react';
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
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[700px]">
        {/* LEFT INFORMATION PANEL (White Background, approx 45% on desktop) */}
        <div className="lg:col-span-5 bg-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <div className="max-w-md mx-auto lg:mx-0 w-full space-y-6">
            {/* 1. Kicker */}
            <span className="text-xs uppercase font-extrabold tracking-widest text-neutral-400 block">
              ULTRASONIC RODENT REPELLER
            </span>

            {/* 2. Main Heading (First line black, Second line orange #F4510B) */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              <span className="text-[#111111] block">Advanced Protection,</span>
              <span className="text-[#F4510B] block">Rodent-Free Living.</span>
            </h2>

            {/* 3. Orange Accent Line */}
            <div className="w-20 h-1 bg-[#F4510B] rounded-full" />

            {/* 4. Product Model & Area Covered */}
            <div className="space-y-1">
              <div className="text-lg font-bold text-[#111111]">
                <span>Model : </span>
                <span className="text-[#F4510B] font-extrabold">F1-E186HC</span>
              </div>
              <p className="text-sm font-semibold text-neutral-700">
                Up to 1000 SQ Close Area Covered
              </p>
            </div>

            {/* 5. 12-Item Location Checklist with Green Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {PRODUCT_INFO_CHECKLIST.map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 text-xs font-bold text-neutral-800">
                  <div className="w-4.5 h-4.5 rounded-md bg-[#4CAF50] text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* 6. Buy Now CTA (Orange button matching reference) */}
            <div className="pt-4">
              <button
                id="plug-in-buy-now-btn"
                onClick={onBuyNow}
                className="inline-flex items-center justify-center gap-3 bg-[#F4510B] hover:bg-[#d94406] active:bg-[#bf3a04] text-white text-base font-extrabold px-10 py-4 rounded-xl shadow-lg shadow-orange-500/20 transition-all duration-200 group transform hover:-translate-y-0.5"
              >
                <span>Buy Now</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL PANEL (Dark Charcoal/Black Background with Cinematic Lighting, approx 55%) */}
        <div className="lg:col-span-7 bg-[#0A0A0A] p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden text-white">
          {/* Subtle background ambient gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top-Left Heading on Dark Canvas */}
          <div className="relative z-10 max-w-xl mb-8">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight">
              <span className="text-white block">PLUG IT IN.</span>
              <span className="text-[#F4510B] block">PROTECTION BEGINS.</span>
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 font-normal mt-4 leading-relaxed max-w-md">
              It’s Simple as that! The Earth Innovation® will begin Working. No Confusing Setup or Settings To Worry about.
            </p>
          </div>

          {/* Hardware Device Visualization Connected to Wall Socket with Ultrasonic Glow */}
          <div className="relative z-10 w-full flex items-center justify-center my-6">
            <div className="relative w-full max-w-lg aspect-16/10 flex items-center justify-center">
              {/* Wall Socket on Upper Right */}
              <div className="absolute top-2 right-8 w-20 h-24 bg-neutral-900 border-2 border-neutral-700 rounded-xl p-2 flex flex-col items-center justify-center shadow-2xl">
                <div className="w-6 h-3 bg-neutral-800 rounded-xs mb-2 border border-neutral-600" />
                <div className="grid grid-cols-3 gap-1.5 w-10">
                  <div className="w-2 h-2 rounded-full bg-neutral-950" />
                  <div className="w-2 h-2 rounded-full bg-neutral-950" />
                  <div className="w-2 h-2 rounded-full bg-neutral-950" />
                </div>
                {/* Plug In Cord Connection */}
                <div className="w-4 h-6 bg-neutral-700 rounded-xs mt-2" />
              </div>

              {/* Cord curving down to device */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 300">
                <path
                  d="M440 70 C 440 180, 360 220, 270 230"
                  fill="none"
                  stroke="#262626"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>

              {/* Concentric Ultrasonic Waves Emanating Upward */}
              <div className="absolute -top-6 flex flex-col items-center justify-center pointer-events-none">
                <div className="w-44 h-16 border-t-2 border-white/80 rounded-t-full animate-pulse" />
                <div className="w-32 h-12 border-t-2 border-white/60 rounded-t-full -mt-2 animate-pulse-slow" />
                <div className="w-20 h-8 border-t-2 border-white/40 rounded-t-full -mt-1" />
              </div>

              {/* Central Ultrasonic Heavy Duty Device */}
              <div className="relative z-20 w-72 sm:w-80 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black rounded-2xl border-2 border-neutral-700 shadow-2xl p-5 flex flex-col items-center">
                {/* Top Speakers with dual mesh grilles */}
                <div className="grid grid-cols-2 gap-3 w-full mb-3">
                  <div className="bg-neutral-950 border border-neutral-700 rounded-xl p-2 flex flex-col items-center">
                    <div className="grid grid-cols-5 gap-1">
                      {Array.from({ length: 15 }).map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                      ))}
                    </div>
                  </div>
                  <div className="bg-neutral-950 border border-neutral-700 rounded-xl p-2 flex flex-col items-center">
                    <div className="grid grid-cols-5 gap-1">
                      {Array.from({ length: 15 }).map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Status bar */}
                <div className="w-full flex items-center justify-between px-2 pt-2 border-t border-neutral-800 text-[11px]">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>ULTRASONIC ACTIVE</span>
                  </div>
                  <span className="font-mono text-neutral-400">1000 SQ. FT</span>
                </div>
              </div>

              {/* Blue Concentric Protection Rings at the Bottom */}
              <div className="absolute -bottom-8 flex items-center justify-center pointer-events-none">
                <div className="w-80 h-16 border-b-2 border-cyan-400/40 rounded-b-full animate-pulse-slow" />
                <div className="w-64 h-12 border-b-2 border-blue-500/30 rounded-b-full -mt-2" />
              </div>
            </div>
          </div>

          {/* Bottom Trust Note */}
          <div className="relative z-10 pt-4 flex items-center justify-between text-xs text-neutral-400 border-t border-neutral-900">
            <span className="flex items-center gap-1.5">
              <Plug className="w-4 h-4 text-orange-400" /> Instant Zero-Config Plug & Play
            </span>
            <span className="font-bold text-white">Continuous 24/7 Protection</span>
          </div>
        </div>
      </div>
    </section>
  );
};
