import React from 'react';
import {
  Play,
  Zap,
  Leaf,
  ShieldCheck,
  ShoppingCart,
  ArrowRight,
} from 'lucide-react';
import { SolutionCategoryData } from '../../data/categorySolutionsData';

interface CategoryHeroSectionProps {
  categoryData: SolutionCategoryData;
  onOpenBuyModal: () => void;
}

export const CategoryHeroSection: React.FC<CategoryHeroSectionProps> = ({
  categoryData,
  onOpenBuyModal,
}) => {
  const renderHeroFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'play':
        return <Play className="w-4 h-4 text-white fill-current translate-x-0.5" />;
      case 'power':
        return <Zap className="w-4 h-4 text-white fill-current" />;
      case 'eco':
        return <Leaf className="w-4 h-4 text-white" />;
      case 'water':
        return <ShieldCheck className="w-4 h-4 text-white" />;
      default:
        return <Zap className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section
      id="category-hero-section"
      className="relative w-full h-[85vh] min-h-[580px] max-h-[850px] bg-[#0A0A0A] overflow-hidden flex flex-col justify-between"
    >
      {/* Full Width Background Image with smooth subtle scale */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out scale-105"
        style={{
          backgroundImage: `url(${categoryData.heroBgImage})`,
        }}
      />
      {/* Gradient Overlay (Dark left for high text readability) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/40 to-black/10 lg:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

      {/* Main Hero Content Area (Aligned Left Exactly like Home Hero) */}
      <div className="relative z-20 w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center flex-1 my-auto">
        <div className="max-w-xl lg:max-w-2xl text-white space-y-5 py-6 md:ml-0">

          {/* 1. Main Heading (Strictly 2 lines across all screen sizes, Capitalized) */}
          <h1 className="text-[1.65rem] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.15] font-sans drop-shadow-lg capitalize">
            <span className="block whitespace-nowrap">
              Protect Your {categoryData.categoryName.toLowerCase()}
            </span>
            <span className="inline-flex items-center gap-2 mt-1 sm:mt-2">
              <span className="bg-[#0066FF] text-white px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md shadow-xl font-bold whitespace-nowrap normal-case">
                From Rats
              </span>
            </span>
          </h1>

          {/* 2. Horizontal Accent Line */}
          <div className="w-full max-w-sm sm:max-w-md h-1 bg-[#0066FF] rounded-full relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-white rounded-full" />
          </div>

          {/* 3. Subtitle / Paragraph */}
          <p className="text-neutral-200 text-sm sm:text-base font-medium leading-relaxed font-sans max-w-lg">
            {categoryData.heroSubheading}
          </p>

          {/* 4. Features 2 BY 2 GRID */}
          <div className="grid md:grid-cols-2 gap-1.5 md:gap-2 max-w-lg pt-0 pb-0 md:pt-1 md:pb-3">
            {[
              { icon: 'play', label: 'Plug & Play' },
              { icon: 'power', label: 'Low Power' },
              { icon: 'eco', label: 'Eco & Chemical Free' },
              { icon: 'water', label: 'Water & Heat Proof' },
            ].map((feature, fIdx) => (
              <div
                key={fIdx}
                className="flex items-center gap-3 px-0 md:pr-3.5 py-1 md:py-2.5 rounded-2xl shadow-xs hover:border-[#0066FF]/60 transition-colors"
              >
                {/* Circle Icon Badge in #0066FF */}
                <div className="w-8 h-8 rounded-full bg-[#0066FF] flex items-center justify-center shrink-0 shadow-md">
                  {renderHeroFeatureIcon(feature.icon)}
                </div>
                <span className="text-xs sm:text-sm font-bold text-white tracking-wide font-sans whitespace-nowrap">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>

          {/* 5. Shop Now Button (Matching Homepage Hero Design) */}
          <div className="pt-1.5 md:pt-2 flex justify-start">
            <button
              id="category-hero-shop-now-btn"
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

        </div>
      </div>

      {/* Subtle Bottom Accent Spacer */}
      <div className="relative z-20 pb-4" />
    </section>
  );
};
