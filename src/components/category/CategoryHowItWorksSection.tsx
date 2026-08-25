import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SolutionCategoryData } from '../../data/categorySolutionsData';

interface CategoryHowItWorksSectionProps {
  categoryData: SolutionCategoryData;
}

export const CategoryHowItWorksSection: React.FC<CategoryHowItWorksSectionProps> = ({
  categoryData,
}) => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-10 xl:gap-14 items-start">

          {/* LEFT COLUMN: HOW IT WORKS (3 Step Cards with Illustrations & Arrows) */}
          <div className="xl:col-span-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111111] tracking-tight uppercase text-center mb-8 sm:mb-10 font-sans">
              HOW IT WORKS
            </h3>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2 relative">

              {/* Step 1 */}
              <div className="relative w-full sm:w-[31%] bg-white rounded-2xl p-3.5 sm:p-4 lg:p-5 border border-neutral-200/90 shadow-2xs flex flex-col items-center text-center pt-6 sm:pt-7 min-h-[220px] sm:min-h-[240px] justify-between">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#0066FF] text-white font-bold text-xs flex items-center justify-center shadow-xs">
                  1
                </div>
                <div className="h-20 sm:h-24 flex items-center justify-center my-1">
                  <img
                    src="/images/category/plug_in.png"
                    alt="Plug In"
                    className="max-h-full object-contain select-none"
                    loading="lazy"
                  />
                </div>
                <div className="mt-2 w-full">
                  <h4 className="font-bold text-xs sm:text-[13px] md:text-sm lg:text-base text-[#111111] mb-1 font-sans whitespace-nowrap">
                    Plug In
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-500 leading-snug font-sans max-w-[170px] mx-auto">
                    Connect Ratguard device to power supply.
                  </p>
                </div>
              </div>

              {/* Horizontal Arrow 1 */}
              <div className="hidden sm:flex items-center justify-center text-neutral-300">
                <ArrowRight className="w-4 h-4 text-neutral-400 stroke-[2.5]" />
              </div>

              {/* Step 2 */}
              <div className="relative w-full sm:w-[31%] bg-white rounded-2xl p-3.5 sm:p-4 lg:p-5 border border-neutral-200/90 shadow-2xs flex flex-col items-center text-center pt-6 sm:pt-7 min-h-[220px] sm:min-h-[240px] justify-between">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#0066FF] text-white font-bold text-xs flex items-center justify-center shadow-xs">
                  2
                </div>
                <div className="h-20 sm:h-24 flex items-center justify-center my-1">
                  <img
                    src="/images/category/Uttrasonic-Waves.png"
                    alt="Ultrasonic Waves"
                    className="max-h-full object-contain select-none"
                    loading="lazy"
                  />
                </div>
                <div className="mt-2 w-full">
                  <h4 className="font-bold text-xs sm:text-[13px] md:text-sm lg:text-base text-[#111111] mb-1 font-sans whitespace-nowrap">
                    Ultrasonic Waves
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-500 leading-snug font-sans max-w-[170px] mx-auto">
                    The device emits high frequency ultrasonic waves.
                  </p>
                </div>
              </div>

              {/* Horizontal Arrow 2 */}
              <div className="hidden sm:flex items-center justify-center text-neutral-300">
                <ArrowRight className="w-4 h-4 text-neutral-400 stroke-[2.5]" />
              </div>

              {/* Step 3 */}
              <div className="relative w-full sm:w-[31%] bg-white rounded-2xl p-3.5 sm:p-4 lg:p-5 border border-neutral-200/90 shadow-2xs flex flex-col items-center text-center pt-6 sm:pt-7 min-h-[220px] sm:min-h-[240px] justify-between">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#0066FF] text-white font-bold text-xs flex items-center justify-center shadow-xs">
                  3
                </div>
                <div className="h-20 sm:h-24 flex items-center justify-center my-1">
                  <img
                    src="/images/category/rat.png"
                    alt="Rats Avoid The Area"
                    className="max-h-full object-contain select-none"
                    loading="lazy"
                  />
                </div>
                <div className="mt-2 w-full">
                  <h4 className="font-bold text-xs sm:text-[13px] md:text-sm lg:text-base text-[#111111] mb-1 font-sans whitespace-nowrap">
                    Rats Avoid The Area
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-500 leading-snug font-sans max-w-[170px] mx-auto">
                    Rats find the area uncomfortable and leave.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: WHERE TO INSTALL IN [CATEGORY] */}
          <div className="xl:col-span-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111111] tracking-tight uppercase text-center sm:text-left mb-4 sm:mb-6 font-sans">
              {categoryData.whereToInstallTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-center">

              {/* Checkmark bullet list */}
              <div className="sm:col-span-6 space-y-3.5 sm:space-y-4">
                {categoryData.installLocations.map((loc, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full border border-[#0066FF] text-[#0066FF] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-neutral-800 leading-tight">
                      {loc}
                    </span>
                  </div>
                ))}
              </div>

              {/* Location Image */}
              <div className="sm:col-span-6 relative rounded-2xl overflow-hidden shadow-sm border border-neutral-200/80 h-52 sm:h-60 lg:h-60 w-full">
                <img
                  src={categoryData.installImage}
                  alt={categoryData.targetSpace}
                  className="w-full h-full object-cover select-none"
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
