import React from 'react';
import {
  ShieldCheck,
  Radio,
  Plug,
  Clock,
  Shield,
  CheckCircle2,
  Wrench,
  DollarSign,
  Package,
  Car,
} from 'lucide-react';
import { SolutionCategoryData } from '../../data/categorySolutionsData';

interface CategoryWhyChooseSectionProps {
  categoryData: SolutionCategoryData;
}

export const CategoryWhyChooseSection: React.FC<CategoryWhyChooseSectionProps> = ({
  categoryData,
}) => {
  const renderBenefitIcon = (icon: string) => {
    const iconClass = "w-6 h-6 md:w-7 md:h-7 text-[#0066FF]";
    switch (icon) {
      case 'wide':
        return <Radio className={iconClass} />;
      case 'plug':
        return <Plug className={iconClass} />;
      case 'clock':
        return <Clock className={iconClass} />;
      case 'safe':
        return <ShieldCheck className={iconClass} />;
      case 'shield':
        return <Shield className={iconClass} />;
      case 'eco':
        return <CheckCircle2 className={iconClass} />;
      case 'tool':
        return <Wrench className={iconClass} />;
      case 'money':
        return <DollarSign className={iconClass} />;
      case 'food':
        return <Package className={iconClass} />;
      case 'car':
        return <Car className={iconClass} />;
      case 'india':
        return <ShieldCheck className={iconClass} />;
      default:
        return <ShieldCheck className={iconClass} />;
    }
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Pill, Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] font-semibold tracking-wider font-sans inline-flex items-center gap-1.5 text-[#0066FF] bg-blue-50/80 px-3.5 py-1.5 rounded-full border border-blue-200/80 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>Engineered for Excellence</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-[#111111] tracking-tight font-sans mt-3">
            {categoryData.whyChooseTitle.toLowerCase().includes('ratguard') ? (
              (() => {
                const title = categoryData.whyChooseTitle;
                const match = title.match(/ratguard/i);
                if (match && match.index !== undefined) {
                  const before = title.substring(0, match.index);
                  const after = title.substring(match.index + match[0].length);
                  return (
                    <>
                      {before}
                      <span className="text-[#0066FF]">RatGuard</span>
                      {after}
                    </>
                  );
                }
                return title;
              })()
            ) : (
              categoryData.whyChooseTitle
            )}
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base mt-2.5 font-medium">
            Proven, chemical-free technology built for total long-term reliability.
          </p>
        </div>

        {/* 6 Benefit Cards Grid: 3 cols on Desktop, 2 cols on Tablet, 1 col on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {categoryData.benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white hover:bg-neutral-50/60 rounded-2xl p-4 sm:p-6 border border-neutral-200/80 hover:border-blue-300 hover:shadow-md transition-all duration-300 flex items-start gap-4 sm:gap-4.5"
            >
              {/* Left: Rounded Square Icon Box */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-blue-50/70 border border-blue-100/90 flex items-center justify-center shrink-0 shadow-2xs">
                {renderBenefitIcon(benefit.icon)}
              </div>

              {/* Right: Title, Accent Line & Description */}
              <div className="flex-1 min-w-0 pt-0.5">
                <h3 className="text-sm sm:text-md font-semibold text-[#111111] tracking-tight leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-normal">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
