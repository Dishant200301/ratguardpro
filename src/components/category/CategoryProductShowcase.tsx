import React from 'react';
import {
  Sparkles,
  Zap,
  Radio,
  Plug,
  Leaf,
  ShieldCheck,
  ShoppingCart,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { SolutionCategoryData } from '../../data/categorySolutionsData';

interface CategoryProductShowcaseProps {
  categoryData: SolutionCategoryData;
  onOpenBuyModal: () => void;
}

export const CategoryProductShowcase: React.FC<CategoryProductShowcaseProps> = ({
  categoryData,
  onOpenBuyModal,
}) => {
  return (
    <section id="buy-section" className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-neutral-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Clean Enclosed Card */}
        <div className="bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-14 border border-neutral-200/90 shadow-xl relative overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* LEFT COLUMN: Product Visual with Concentric Waves */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]">

              {/* Subtle Concentric Sound Wave Rings Behind Product */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-30 -z-0"
                viewBox="0 0 400 400"
                fill="none"
              >
                <circle cx="200" cy="240" r="75" stroke="#0066FF" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="200" cy="240" r="120" stroke="#0066FF" strokeWidth="1" opacity="0.6" />
                <circle cx="200" cy="240" r="165" stroke="#0066FF" strokeWidth="1" opacity="0.3" />
              </svg>

              {/* High Quality Angled Product Device */}
              <img
                src="/images/home/product/product.webp"
                alt="RatGuard SonicArmor X"
                className="max-h-[260px] sm:max-h-[340px] lg:max-h-[380px] w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)] transition-transform duration-500 relative z-10 select-none"
                loading="lazy"
              />
            </div>

            {/* RIGHT COLUMN: Product Details & Actions */}
            <div className="lg:col-span-7 space-y-4 lg:pl-2">

              {/* Top Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0066FF]/40 bg-blue-50/60 text-[#0066FF] text-xs font-bold uppercase tracking-wider font-sans mb-1 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
                <span>Flagship Ultrasonic Solution</span>
              </div>

              {/* Product Title: 1 Clean Line */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight font-sans whitespace-nowrap">
                <span className="text-[#111111]">Ultrasonic </span>
                <span className="text-[#0066FF]">Rat Repellent</span>
              </h2>

              {/* Tagline / Subtitle */}
              <p className="text-neutral-500 font-medium text-sm sm:text-base font-sans">
                {categoryData.productTagline || 'Your Ultimate Protection Partner'}
              </p>

              {/* 5 Real Feature Cards Grid */}
              <div className="grid grid-cols-5 gap-2 sm:gap-2.5 pt-2">
                <div className="bg-white border border-neutral-200/90 rounded-2xl p-2 sm:p-2.5 text-center flex flex-col items-center justify-center shadow-2xs hover:border-[#0066FF]/40 transition-colors">
                  <Zap className="w-5 h-5 text-[#0066FF] mb-1.5" />
                  <span className="text-[10px] sm:text-xs font-bold text-neutral-800 leading-tight font-sans">
                    18–36 kHz + LED
                  </span>
                </div>
                <div className="bg-white border border-neutral-200/90 rounded-2xl p-2 sm:p-2.5 text-center flex flex-col items-center justify-center shadow-2xs hover:border-[#0066FF]/40 transition-colors">
                  <Radio className="w-5 h-5 text-[#0066FF] mb-1.5" />
                  <span className="text-[10px] sm:text-xs font-bold text-neutral-800 leading-tight font-sans">
                    Vibration Sensor
                  </span>
                </div>
                <div className="bg-white border border-neutral-200/90 rounded-2xl p-2 sm:p-2.5 text-center flex flex-col items-center justify-center shadow-2xs hover:border-[#0066FF]/40 transition-colors">
                  <Plug className="w-5 h-5 text-[#0066FF] mb-1.5" />
                  <span className="text-[10px] sm:text-xs font-bold text-neutral-800 leading-tight font-sans">
                    3 Power Modes
                  </span>
                </div>
                <div className="bg-white border border-neutral-200/90 rounded-2xl p-2 sm:p-2.5 text-center flex flex-col items-center justify-center shadow-2xs hover:border-[#0066FF]/40 transition-colors">
                  <Leaf className="w-5 h-5 text-[#0066FF] mb-1.5" />
                  <span className="text-[10px] sm:text-xs font-bold text-neutral-800 leading-tight font-sans">
                    3-Month Battery
                  </span>
                </div>
                <div className="bg-white border border-neutral-200/90 rounded-2xl p-2 sm:p-2.5 text-center flex flex-col items-center justify-center shadow-2xs hover:border-[#0066FF]/40 transition-colors">
                  <ShieldCheck className="w-5 h-5 text-[#0066FF] mb-1.5" />
                  <span className="text-[10px] sm:text-xs font-bold text-neutral-800 leading-tight font-sans">
                    100% Pet Safe
                  </span>
                </div>
              </div>

              {/* Price Row */}
              <div className="pt-3 pb-1 flex flex-wrap items-baseline gap-3">
                <span className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#111111] font-sans tracking-tight">
                  ₹{categoryData.discountedPrice || '2,450'}
                </span>
                <span className="text-lg sm:text-xl text-neutral-400 line-through font-semibold font-sans">
                  ₹{categoryData.originalPrice || '7,999'}
                </span>
                <span className="text-xs font-bold text-[#0066FF] bg-blue-50 border border-blue-200/80 px-2.5 py-0.5 rounded-full font-sans">
                  69% OFF
                </span>
                <span className="text-xs text-neutral-500 font-medium block w-full mt-1 font-sans">
                  (Inclusive of all taxes & Free Express Shipping across India)
                </span>
              </div>

              {/* Single Action Button: EXACT MATCH to Home Hero Shop Now Button */}
              <div className="pt-2 flex justify-start">
                <button
                  onClick={onOpenBuyModal}
                  className="inline-flex items-center gap-3 sm:gap-5 bg-[#0D0D0D] hover:bg-black active:scale-[0.98] text-white pl-1.5 pr-4 py-1.5 sm:pl-2 sm:pr-5 sm:py-2 rounded-full shadow-2xl transition-all duration-200 group cursor-pointer border border-neutral-800"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0066FF] flex items-center justify-center text-white shrink-0 shadow-md transition-transform">
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="font-bold text-sm sm:text-base tracking-wider text-white font-sans whitespace-nowrap">
                    Shop now
                  </span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>

              {/* Trust Badges / Guarantees Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px] font-semibold text-neutral-600">
                <span className="flex items-center gap-1.5 bg-neutral-50 py-1.5 px-2.5 rounded-lg border border-neutral-200/70">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                  Free Delivery
                </span>
                <span className="flex items-center gap-1.5 bg-neutral-50 py-1.5 px-2.5 rounded-lg border border-neutral-200/70">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                  Pay on Delivery
                </span>
                <span className="flex items-center gap-1.5 bg-neutral-50 py-1.5 px-2.5 rounded-lg border border-neutral-200/70">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                  10-Day Return
                </span>
                <span className="flex items-center gap-1.5 bg-neutral-50 py-1.5 px-2.5 rounded-lg border border-neutral-200/70">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                  6M Warranty
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
