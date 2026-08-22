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
  ShoppingCart,
  ArrowRight,
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
      line1: '100% Safe For',
      line2: 'Pets & Children',
      icon: <HeartHandshake className="w-5 h-5 text-[#0066FF]" />,
    },
    {
      title: 'ECO Friendly',
      line1: 'Chemical Free',
      line2: '& Non-Toxic',
      icon: <Leaf className="w-5 h-5 text-[#0066FF]" />,
    },
    {
      title: 'Life Durability',
      line1: 'Long Life Span',
      line2: 'Up to 4-5 Years',
      icon: <Clock className="w-5 h-5 text-[#0066FF]" />,
    },
    {
      title: 'Powerful Waves',
      line1: '20 kHz - 65 kHz',
      line2: 'Frequency Sweep',
      icon: <Volume2 className="w-5 h-5 text-[#0066FF]" />,
    },
    {
      title: 'Electricity Saver',
      line1: 'Ultra Low Power',
      line2: 'Only 3 - 4 Watt',
      icon: <Plug className="w-5 h-5 text-[#0066FF]" />,
    },
  ];

  return (
    <section
      id="features-tech-section"
      className="w-full bg-white py-10 md:py-14 xl:py-16 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 xl:px-8">
        {/* 1. Section Header: Features & Specifications */}
        <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-10">
          <span className="text-sm font-semibold tracking-widest text-[#0066FF] bg-blue-50 px-3.5 py-1 rounded-full font-sans">
            Features & Specifications
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-[#111111] tracking-tight font-sans mt-3">
            Engineered For <span className="text-[#0066FF]">Maximum Protection</span>
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base mt-2.5 font-sans font-medium">
            Advanced ultrasonic frequency technology built for high performance, durability, and complete safety.
          </p>
        </div>

        {/* 2. 3-COLUMN COMPOSITION: Left 5 Cards | Center Specs + Product + Buy Now | Right 5 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-4 md:gap-6 xl:gap-6 items-start xl:items-start">
          {/* Left Column: 5 Feature Cards (1 col on mobile, left column of 5 on tablet, left sidebar on desktop) */}
          <div className="mt-10 xl:mt-0 sm:col-span-1 xl:col-span-3 xl:col-span-3 flex flex-col space-y-3.5 order-2 xl:order-1">
            {LEFT_FEATURES.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-neutral-200/80 rounded-xl sm:rounded-2xl p-3 sm:p-3.5 shadow-2xs flex items-start gap-3 cursor-default"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  {getFeatureIcon(item.iconType)}
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-[#111111] tracking-tight font-sans line-clamp-1 truncate">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-normal leading-snug mt-1 font-sans line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column: Top 4 Specs Icons (4 in row on desktop) + Real Product Image + Buy Now CTA */}
          <div className="sm:col-span-2 xl:col-span-6 xl:col-span-6 flex flex-col items-center justify-between h-full order-1 xl:order-2 my-6 xl:my-0">
            {/* Top Spec Badges Desktop (4 in 1 row) / Tablet (Row 1: 3 cards, Row 2: 2 cards centered) */}
            <div className="hidden sm:grid sm:grid-cols-6 xl:grid-cols-4 gap-2.5 sm:gap-3.5 w-full max-w-2xl mb-0 px-1 sm:px-2">
              {TOP_SPECS.map((spec, idx) => (
                <div
                  key={idx}
                  className={`bg-white border border-neutral-100 rounded-2xl sm:rounded-[20px] p-3 sm:p-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col items-center text-center justify-start cursor-default h-full min-h-[115px]  ${
                    idx < 3
                      ? 'sm:col-span-2 xl:col-span-1'
                      : idx === 3
                      ? 'sm:col-span-2 sm:col-start-2 xl:col-start-auto xl:col-span-1'
                      : 'sm:col-span-2 xl:hidden'
                  }`}
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-50/80 border border-blue-100/60 flex items-center justify-center shrink-0 mb-2.5">
                    {spec.icon}
                  </div>
                  <div className="flex flex-col items-center justify-center w-full">
                    <h5 className="text-[11px] sm:text-xs font-bold text-[#111111] tracking-tight font-sans leading-tight whitespace-nowrap truncate w-full text-center">
                      {spec.title}
                    </h5>
                    <div className="text-[9px] sm:text-[10px] text-neutral-500 font-medium leading-tight mt-1 font-sans text-center flex flex-col items-center justify-center">
                      <span>{spec.line1}</span>
                      <span>{spec.line2}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Top 5 Spec Badges Mobile Only: 2.5 Cards Visible Horizontal Scroll */}
            <div className="flex sm:hidden gap-2.5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-1 w-full mb-6">
              {TOP_SPECS.map((spec, idx) => (
                <div
                  key={idx}
                  className="shrink-0 w-[38vw] xs:w-[140px] bg-white border border-neutral-100 rounded-2xl p-2.5 sm:p-3 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col items-center text-center justify-start min-h-[110px] snap-start"
                >
                  <div className="w-9 h-9 rounded-full bg-blue-50/80 border border-blue-100/60 flex items-center justify-center shrink-0 mb-2">
                    {spec.icon}
                  </div>
                  <div className="flex flex-col items-center justify-center w-full">
                    <h5 className="text-[11px] font-bold text-[#111111] tracking-tight font-sans leading-tight whitespace-nowrap truncate w-full text-center">
                      {spec.title}
                    </h5>
                    <div className="text-[9.5px] text-neutral-500 font-medium leading-tight mt-1 font-sans text-center flex flex-col items-center justify-center">
                      <span>{spec.line1}</span>
                      <span>{spec.line2}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Central Product Image */}
            <div className="relative w-full max-w-md sm:max-w-lg aspect-4/2 flex items-center justify-center p-2 mt-6 group">
              <img
                src="/images/home/product/product.png"
                alt="RatGuardPro Ultrasonic Device"
                className="w-full h-auto max-h-[290px] sm:max-h-[250px] object-contain drop-shadow-2xl transform transition-transform duration-300  pointer-events-none"
                loading="eager"
              />
            </div>

            {/* Pill-shaped Buy Now Button matching Hero Section design */}
            <div className="mt-6 flex justify-center">
              <button
                id="tech-section-buy-now-btn"
                onClick={onBuyNow}
                className="inline-flex items-center gap-3 sm:gap-4 bg-[#0D0D0D] hover:bg-black active:scale-[0.98] text-white pl-1.5 pr-5 py-1.5 sm:pl-2 sm:pr-6 sm:py-2 rounded-full shadow-2xl transition-all duration-200 group cursor-pointer border border-neutral-800"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0066FF] flex items-center justify-center text-white shrink-0 shadow-md transition-transform">
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="font-bold text-sm sm:text-base tracking-wider uppercase text-white font-sans whitespace-nowrap">
                  BUY NOW
                </span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: 5 Feature Cards (1 col on mobile, right column of 5 on tablet, right sidebar on desktop) */}
          <div className="md:mt-10 xl:mt-0 sm:col-span-1 xl:col-span-3 xl:col-span-3 flex flex-col space-y-3.5 order-3">
            {RIGHT_FEATURES.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-neutral-200/80 rounded-xl sm:rounded-2xl p-3 sm:p-3.5 shadow-2xs flex items-start gap-3 cursor-default"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  {getFeatureIcon(item.iconType)}
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-[#111111] tracking-tight font-sans line-clamp-1 truncate">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-normal leading-snug mt-1 font-sans line-clamp-2">
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
