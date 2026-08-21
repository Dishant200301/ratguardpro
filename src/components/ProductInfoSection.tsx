import React from 'react';
import {
  ShoppingCart,
  ArrowRight,
  Home,
  Building2,
  Archive,
  Utensils,
  Layers,
  BookOpen,
  PawPrint,
  Monitor,
  HeartPulse,
  Trees,
  Bed,
  Car,
} from 'lucide-react';
import { PRODUCT_INFO_CHECKLIST } from '../data/mockData';

interface ProductInfoSectionProps {
  onBuyNow: () => void;
}

export const ProductInfoSection: React.FC<ProductInfoSectionProps> = ({ onBuyNow }) => {
  // Helper to render contextual icon for each space
  const renderItemIcon = (name: string) => {
    const iconClass = 'w-3.5 h-3.5 text-[#0066FF]';
    switch (name.toLowerCase()) {
      case 'home':
        return <Home className={iconClass} />;
      case 'office':
        return <Building2 className={iconClass} />;
      case 'store rooms':
        return <Archive className={iconClass} />;
      case 'kitchen':
        return <Utensils className={iconClass} />;
      case 'home elevation and ceiling':
        return <Layers className={iconClass} />;
      case 'study room':
        return <BookOpen className={iconClass} />;
      case 'pet areas':
        return <PawPrint className={iconClass} />;
      case 'computer work station':
        return <Monitor className={iconClass} />;
      case 'hospital rooms':
        return <HeartPulse className={iconClass} />;
      case 'farm house':
        return <Trees className={iconClass} />;
      case 'hotel rooms':
        return <Bed className={iconClass} />;
      case 'car parking':
        return <Car className={iconClass} />;
      default:
        return <Home className={iconClass} />;
    }
  };

  return (
    <section
      id="product-info-section"
      className="w-full bg-white overflow-hidden "
    >
      {/* 50-50 Split on Desktop/Laptop (lg:grid-cols-2) and clean responsive stack on Mobile/Tablet */}
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 min-h-[640px] items-stretch">
        
        {/* ========================================================= */}
        {/* LEFT INFORMATION PANEL (50% Split, White Background)       */}
        {/* ========================================================= */}
        <div className="w-full bg-white p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-neutral-100">
          <div className="max-w-3xl mx-auto lg:mx-0 w-full space-y-6">
            
            {/* Kicker */}
            <div>
              <span className="text-xs font-bold tracking-widest text-[#0066FF] bg-blue-50 px-3.5 py-1 rounded-full font-sans inline-block uppercase">
                Ultrasonic Rodent Repeller
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] font-sans">
              <span className="text-[#111111] block">Advanced Protection,</span>
              <span className="text-[#0066FF] block">Rodent-Free Living.</span>
            </h2>

            {/* Blue Accent Line */}
            <div className="w-20 h-1 bg-[#0066FF] rounded-full" />

            {/* Product Model & Area Covered */}
            <div className="space-y-1">
              <div className="text-lg sm:text-xl font-bold text-[#111111] font-sans">
                <span>Model: </span>
                <span className="text-[#0066FF] font-extrabold">RatGuard Pro-X</span>
              </div>
              <p className="text-sm sm:text-base font-semibold text-neutral-600 font-sans">
                Up to 2,500 Sq. Ft. Coverage Area
              </p>
            </div>

            {/* 12-Item Location Checklist with Custom Category Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
              {PRODUCT_INFO_CHECKLIST.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-neutral-800 font-sans group"
                >
                  <div className="w-6 h-6 rounded-md bg-blue-50/80 border border-blue-200/70 flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-blue-100/80 group-hover:border-[#0066FF]/40 transition-colors">
                    {renderItemIcon(item)}
                  </div>
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Buy Now CTA (Matching Exact Hero Section Pill Button Design) */}
            <div className="pt-3 sm:pt-4 flex justify-start">
              <button
                id="plug-in-buy-now-btn"
                onClick={onBuyNow}
                className="inline-flex items-center gap-3 sm:gap-5 bg-[#0D0D0D] hover:bg-black active:scale-[0.98] text-white pl-1.5 pr-4 py-1.5 sm:pl-2 sm:pr-5 sm:py-2 rounded-full transition-all duration-200 group cursor-pointer border border-neutral-800"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0066FF] flex items-center justify-center text-white shrink-0 shadow-md transition-transform group-hover:scale-105">
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="font-semibold text-sm sm:text-base tracking-wider text-white font-sans whitespace-nowrap">
                  Buy Now
                </span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT VISUAL PANEL (50% Split, Full Card Image)           */}
        {/* ========================================================= */}
        <div className="w-full relative overflow-hidden bg-[#080B11] min-h-[380px] sm:min-h-[480px] lg:min-h-[640px] flex flex-col justify-between p-6 sm:p-8 lg:p-10 xl:p-12 text-white">
          
          {/* Full Graphic Image Background */}
          <img
            src="/common/productinfo.png"
            alt="Plug It In. Protection Begins."
            className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
            loading="lazy"
          />

          {/* Heading & Subtitle on Dark Canvas (1-Line Heading & 2-Line Description) */}
          <div className="relative z-10 w-full max-w-xl">
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-[32px] xl:text-[38px] font-bold uppercase tracking-tight leading-tight font-sans drop-shadow-md">
              <span className="text-white block sm:inline">PLUG IT IN. </span>
              <span className="text-[#0066FF] block sm:inline">PROTECTION BEGINS.</span>
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-neutral-200 font-normal mt-2 sm:mt-3 leading-relaxed max-w-2xl font-sans drop-shadow-md">
              It’s simple as that! The RatGuardPro will begin working immediately. No confusing setup or settings to worry about.
              
            </p>
          </div>

          {/* Spacer for bottom balance */}
          <div className="relative z-10" />

        </div>

      </div>
    </section>
  );
};
