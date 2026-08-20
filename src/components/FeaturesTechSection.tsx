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
  Leaf,
  Volume2,
  HeartHandshake,
  Clock,
} from 'lucide-react';
import { LEFT_FEATURES, RIGHT_FEATURES } from '../data/mockData';

interface FeaturesTechSectionProps {
  onBuyNow: () => void;
}

export const FeaturesTechSection: React.FC<FeaturesTechSectionProps> = ({ onBuyNow }) => {
  const getFeatureIcon = (iconType: string) => {
    switch (iconType) {
      case 'waves':
        return <Radio className="w-4 h-4 text-[#0066FF]" />;
      case 'energy':
        return <Zap className="w-4 h-4 text-[#0066FF]" />;
      case 'plug':
        return <Plug className="w-4 h-4 text-[#0066FF]" />;
      case 'shield':
        return <Shield className="w-4 h-4 text-[#0066FF]" />;
      case 'radar':
        return <Maximize className="w-4 h-4 text-[#0066FF]" />;
      case 'durable':
        return <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />;
      case 'placement':
        return <Sliders className="w-4 h-4 text-[#0066FF]" />;
      case 'led':
        return <Eye className="w-4 h-4 text-[#0066FF]" />;
      case 'maintenance':
        return <Settings className="w-4 h-4 text-[#0066FF]" />;
      case 'temp':
        return <Thermometer className="w-4 h-4 text-[#0066FF]" />;
      case 'india':
        return <Flag className="w-4 h-4 text-[#0066FF]" />;
      case 'warranty':
        return <Award className="w-4 h-4 text-[#0066FF]" />;
      default:
        return <Shield className="w-4 h-4 text-[#0066FF]" />;
    }
  };

  const TOP_SPECS = [
    {
      title: 'Creatures Safety',
      desc: 'Safe for Pets & Children',
      icon: <HeartHandshake className="w-5 h-5 text-[#0066FF]" />,
    },
    {
      title: 'ECO Friendly',
      desc: 'No Harmful Chemicals & Non-Toxic',
      icon: <Leaf className="w-5 h-5 text-[#0066FF]" />,
    },
    {
      title: 'Life Durability',
      desc: 'Product Shelf Life 4-5 Years',
      icon: <Clock className="w-5 h-5 text-[#0066FF]" />,
    },
    {
      title: 'Powerful Frequency',
      desc: '20 Hz To 65 kHz Sweep',
      icon: <Volume2 className="w-5 h-5 text-[#0066FF]" />,
    },
    {
      title: 'Electricity Saver',
      desc: 'Ultra Low 3 - 4 Watt',
      icon: <Plug className="w-5 h-5 text-[#0066FF]" />,
    },
  ];

  return (
    <section
      id="features-tech-section"
      className="w-full bg-white py-16 lg:py-24 border-b border-neutral-100 select-none overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. TOP BRAND HEADING MATCHING REFERENCE SCREENSHOT */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#111111] uppercase tracking-wider font-sans">
            RATGUARDS
          </h3>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-800 tracking-tight mt-1.5 font-sans">
            Advanced Ultrasonic Rat Repellent
          </h2>
          <div className="text-xs sm:text-sm font-extrabold text-[#0066FF] tracking-widest uppercase mt-2 font-sans">
            ADVANCED. EFFECTIVE. DURABLE.
          </div>
        </div>

        {/* 2. 3-COLUMN COMPOSITION: Left 6 Cards | Center Specs + Product + Buy Now | Right 6 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: 6 Feature Cards */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col space-y-3.5 order-2 lg:order-1">
            {LEFT_FEATURES.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-neutral-200/90 rounded-2xl p-3.5 sm:p-4 shadow-2xs hover:shadow-md hover:border-[#0066FF] transition-all duration-200 flex items-center gap-3.5 group cursor-default"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-[#0066FF] transition-colors">
                  <div className="group-hover:brightness-0 group-hover:invert transition-all">
                    {getFeatureIcon(item.iconType)}
                  </div>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xs sm:text-sm font-extrabold text-[#111111] tracking-tight font-sans">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-normal leading-snug mt-0.5 font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column: Top 5 Specs Icons + Real Product Image with Ultrasonic Waves + Buy Now CTA */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2 my-6 lg:my-0">
            {/* Top 5 Spec Badges Directly Above Product Image */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 w-full max-w-2xl mb-6 px-2 text-center">
              {TOP_SPECS.map((spec, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-2 rounded-xl bg-neutral-50/80 border border-neutral-100 hover:border-blue-200 transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100/80 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                    {spec.icon}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-neutral-800 leading-tight">
                    {spec.title}
                  </span>
                  <span className="text-[9px] text-neutral-500 leading-tight mt-0.5">
                    {spec.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* Central Product Image */}
            <div className="relative w-full max-w-md sm:max-w-lg aspect-4/3 flex items-center justify-center p-2 group">
              <img
                src="/product/product.png"
                alt="RatGuardPro Ultrasonic Device"
                className="w-full h-auto max-h-[290px] sm:max-h-[330px] object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-300 select-none pointer-events-none"
                loading="eager"
              />
            </div>

            {/* Pill-shaped Buy Now Button below Central Device (Website Theme Blue #0066FF) */}
            <div className="mt-6">
              <button
                id="tech-section-buy-now-btn"
                onClick={onBuyNow}
                className="inline-flex items-center justify-center bg-[#0066FF] hover:bg-[#0052cc] active:bg-[#004099] text-white text-sm sm:text-base font-extrabold px-10 py-3 rounded-full shadow-lg shadow-blue-500/30 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 font-sans"
              >
                <span>Buy Now</span>
              </button>
            </div>
          </div>

          {/* Right Column: 6 Feature Cards */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col space-y-3.5 order-3">
            {RIGHT_FEATURES.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-neutral-200/90 rounded-2xl p-3.5 sm:p-4 shadow-2xs hover:shadow-md hover:border-[#0066FF] transition-all duration-200 flex items-center gap-3.5 group cursor-default"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-[#0066FF] transition-colors">
                  <div className="group-hover:brightness-0 group-hover:invert transition-all">
                    {getFeatureIcon(item.iconType)}
                  </div>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xs sm:text-sm font-extrabold text-[#111111] tracking-tight font-sans">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-normal leading-snug mt-0.5 font-sans">
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
