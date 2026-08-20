import React from 'react';
import {
  Radio,
  Zap,
  Plug,
  Shield,
  Maximize,
  CheckCircle2,
  Sliders,
  Eye,
  Settings,
  Thermometer,
  Flag,
  Award,
  ArrowRight,
  Leaf,
  VolumeX,
} from 'lucide-react';
import { LEFT_FEATURES, RIGHT_FEATURES } from '../data/mockData';

interface FeaturesTechSectionProps {
  onBuyNow: () => void;
}

export const FeaturesTechSection: React.FC<FeaturesTechSectionProps> = ({ onBuyNow }) => {
  const getFeatureIcon = (iconType: string) => {
    switch (iconType) {
      case 'waves':
        return <Radio className="w-4 h-4 text-[#52C41A]" />;
      case 'energy':
        return <Zap className="w-4 h-4 text-[#52C41A]" />;
      case 'plug':
        return <Plug className="w-4 h-4 text-[#52C41A]" />;
      case 'shield':
        return <Shield className="w-4 h-4 text-[#52C41A]" />;
      case 'radar':
        return <Maximize className="w-4 h-4 text-[#52C41A]" />;
      case 'durable':
        return <CheckCircle2 className="w-4 h-4 text-[#52C41A]" />;
      case 'placement':
        return <Sliders className="w-4 h-4 text-[#52C41A]" />;
      case 'led':
        return <Eye className="w-4 h-4 text-[#52C41A]" />;
      case 'maintenance':
        return <Settings className="w-4 h-4 text-[#52C41A]" />;
      case 'temp':
        return <Thermometer className="w-4 h-4 text-[#52C41A]" />;
      case 'india':
        return <Flag className="w-4 h-4 text-[#52C41A]" />;
      case 'warranty':
        return <Award className="w-4 h-4 text-[#52C41A]" />;
      default:
        return <Shield className="w-4 h-4 text-[#52C41A]" />;
    }
  };

  return (
    <section
      id="features-tech-section"
      className="w-full bg-white py-16 lg:py-24 border-b border-neutral-100 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. TOP BRAND HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <h3 className="text-2xl sm:text-3xl font-black text-[#111111] uppercase tracking-wider">
            RATGUARDS
          </h3>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-800 tracking-tight">
            Advanced Ultrasonic Rat Repellent
          </h2>
          <div className="text-xs sm:text-sm font-extrabold text-[#52C41A] tracking-widest uppercase pt-1">
            ADVANCED. EFFECTIVE. DURABLE.
          </div>
        </div>

        {/* 2. BENEFIT ICON ROW (5 items) */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 lg:gap-8 flex-wrap mb-12 py-3 px-4 bg-neutral-50 rounded-2xl border border-neutral-100 max-w-4xl mx-auto text-xs font-semibold text-neutral-700">
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-[#52C41A]" />
            <span>100% Safe</span>
          </div>
          <span className="text-neutral-300">•</span>
          <div className="flex items-center gap-1.5">
            <Leaf className="w-4 h-4 text-[#52C41A]" />
            <span>Eco-Friendly</span>
          </div>
          <span className="text-neutral-300">•</span>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-[#52C41A]" />
            <span>High Power</span>
          </div>
          <span className="text-neutral-300">•</span>
          <div className="flex items-center gap-1.5">
            <VolumeX className="w-4 h-4 text-[#52C41A]" />
            <span>Silent to Humans</span>
          </div>
          <span className="text-neutral-300">•</span>
          <div className="flex items-center gap-1.5">
            <Plug className="w-4 h-4 text-[#52C41A]" />
            <span>Easy Plug & Play</span>
          </div>
        </div>

        {/* 3. DESKTOP 3-COLUMN COMPOSITION: Left 6 Cards | Central Product | Right 6 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: 6 Feature Cards */}
          <div className="lg:col-span-4 flex flex-col space-y-3.5 order-2 lg:order-1">
            {LEFT_FEATURES.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-neutral-200/90 rounded-xl p-3.5 shadow-2xs hover:shadow-md hover:border-[#52C41A] transition-all duration-200 flex items-start gap-3.5 group"
              >
                <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                  {getFeatureIcon(item.iconType)}
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xs sm:text-sm font-extrabold text-[#111111] tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-normal leading-snug mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column: Large Product Image with Ultrasonic Waves & Buy Now CTA */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2 my-6 lg:my-0">
            <div className="relative w-full max-w-sm aspect-square flex items-center justify-center p-4">
              {/* Concentric Ultrasonic Waves */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-72 h-72 rounded-full border border-blue-400/20 animate-pulse-slow" />
                <div className="w-60 h-60 rounded-full border border-cyan-400/30" />
                <div className="w-48 h-48 rounded-full border border-emerald-400/25" />
              </div>

              {/* Hardware Device Visual */}
              <div className="relative z-10 w-64 h-48 bg-gradient-to-br from-neutral-900 via-black to-neutral-950 rounded-2xl border-2 border-neutral-700 shadow-2xl p-5 flex flex-col justify-between text-white transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-between items-center text-[10px] text-neutral-400 font-mono">
                  <span className="text-emerald-400 font-bold">● ACTIVE SWEEP</span>
                  <span>2500 SQ FT</span>
                </div>
                <div className="grid grid-cols-2 gap-2 my-auto">
                  <div className="bg-neutral-800/80 rounded-xl p-2 flex flex-col items-center">
                    <div className="grid grid-cols-4 gap-1">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-neutral-600 rounded-full" />
                      ))}
                    </div>
                  </div>
                  <div className="bg-neutral-800/80 rounded-xl p-2 flex flex-col items-center">
                    <div className="grid grid-cols-4 gap-1">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-neutral-600 rounded-full" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-center font-bold text-xs tracking-wider text-neutral-200">
                  RATGUARD ULTRA
                </div>
              </div>
            </div>

            {/* Buy Now Button below Central Device */}
            <div className="mt-4">
              <button
                id="tech-section-buy-now-btn"
                onClick={onBuyNow}
                className="inline-flex items-center gap-2.5 bg-[#52C41A] hover:bg-[#43ab13] active:bg-[#388f10] text-white text-sm font-extrabold px-8 py-3 rounded-full shadow-md shadow-green-500/20 transition-all duration-200 group"
              >
                <span>Buy Now</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: 6 Feature Cards */}
          <div className="lg:col-span-4 flex flex-col space-y-3.5 order-3">
            {RIGHT_FEATURES.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-neutral-200/90 rounded-xl p-3.5 shadow-2xs hover:shadow-md hover:border-[#52C41A] transition-all duration-200 flex items-start gap-3.5 group"
              >
                <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                  {getFeatureIcon(item.iconType)}
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xs sm:text-sm font-extrabold text-[#111111] tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-normal leading-snug mt-0.5">
                    {item.description}
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
