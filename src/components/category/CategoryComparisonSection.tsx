import React from 'react';
import { Scale, AlertTriangle, X, Check } from 'lucide-react';
import { SolutionCategoryData } from '../../data/categorySolutionsData';

interface CategoryComparisonSectionProps {
  categoryData: SolutionCategoryData;
}

export const CategoryComparisonSection: React.FC<CategoryComparisonSectionProps> = ({
  categoryData,
}) => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          {/* Side-by-side pill badge with Scale icon */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0066FF] mb-3">
            <Scale className="w-3.5 h-3.5 stroke-2" />
            <span className="text-[11px] font-semibold uppercase tracking-wider font-sans">
              SIDE-BY-SIDE COMPARISON
            </span>
          </div>

          {/* Heading: PROBLEM VS SOLUTION with VS in gray */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-[#111111] tracking-tight font-sans mt-3">
              <span>PROBLEM</span>{" "}
              <span className="text-neutral-400 font-medium">VS</span>{" "}
              <span className="text-[#0066FF]">SOLUTION</span>
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-neutral-500 text-xs sm:text-sm md:text-base mt-3 font-medium font-sans">
            See the direct difference Ratguard makes in your {categoryData.targetSpace}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-stretch">

          {/* Left Column: Visual Image Card (Hidden on Mobile & Tablet, Visible on Laptop/Desktop) */}
          <div className="hidden lg:flex lg:col-span-4 lg:h-auto min-h-[370px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-neutral-200 relative group flex-col justify-end">
            <img
              src={categoryData.comparisonImage}
              alt="Rat Infestation Damage"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

            {/* Bottom Card Content Box */}
            <div className="relative z-20 p-5 sm:p-6 space-y-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-white bg-[#D91B24] px-2.5 py-1 rounded-md shadow-xs">
                <AlertTriangle className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>RAT PROBLEM</span>
              </span>
              <p className="text-white text-xs sm:text-sm font-medium leading-relaxed drop-shadow-xs">
                Rats can cause serious hygiene issues, damage equipment, and put {categoryData.targetSpace.toLowerCase()} safety at risk.
              </p>
            </div>
          </div>

          {/* Right Column: Comparison Table with Horizontal Scroll on Small Mobile Screens */}
          <div className="w-full lg:col-span-8 bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-neutral-200">
            <div className="overflow-x-auto w-full">
              <div className="min-w-[500px] sm:min-w-[560px] lg:min-w-full flex flex-col justify-between h-full">

                {/* Table Header: Left Black (Rat Problem) + Right Brand Blue (Ratguard Solution) */}
                <div className="grid grid-cols-2">
                  {/* Left Header */}
                  <div className="bg-[#111111] text-white px-4 sm:px-5 py-3 lg:py-3.5 flex items-center gap-2 sm:gap-2.5 border-r border-neutral-800">
                    <img
                      src="/images/home/product/rats.png"
                      alt="Rat Problem"
                      className="w-5 h-5 sm:w-8 sm:h-8 object-contain shrink-0 drop-shadow-xs"
                    />
                    <span className="font-extrabold text-xs sm:text-sm tracking-wider uppercase font-sans whitespace-nowrap">
                      RAT PROBLEM
                    </span>
                  </div>

                  {/* Right Header */}
                  <div className="bg-[#0066FF] text-white px-4 sm:px-5 py-3 lg:py-3.5 flex items-center gap-2 sm:gap-2.5">
                    <img
                      src="/images/home/product/rat-no-entry.png"
                      alt="Ratguard Solution"
                      className="w-5 h-5 sm:w-10 sm:h-10 object-contain shrink-0 drop-shadow-xs"
                    />
                    <span className="font-extrabold text-xs sm:text-sm tracking-wider uppercase font-sans whitespace-nowrap">
                      RATGUARD SOLUTION
                    </span>
                  </div>
                </div>

                {/* Comparison Rows */}
                <div className="divide-y divide-neutral-100 flex-1 flex flex-col justify-between">
                  {categoryData.comparisonRows.map((row, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-2 hover:bg-neutral-50/50 transition-colors"
                    >
                      {/* Left Cell: Red Circle with X + Problem Text */}
                      <div className="px-4 sm:px-5 py-3 sm:py-3.5 flex items-center gap-2.5 sm:gap-3 border-r border-neutral-100">
                        <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#E51A24] flex items-center justify-center text-white shrink-0 shadow-xs">
                          <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                        </div>
                        <span className="font-bold text-xs sm:text-[13px] text-[#111111] leading-snug font-sans">
                          {row.problem}
                        </span>
                      </div>

                      {/* Right Cell: Brand Blue Circle with Check + Solution Text */}
                      <div className="px-4 sm:px-5 py-3 sm:py-3.5 flex items-center gap-2.5 sm:gap-3">
                        <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#0066FF] flex items-center justify-center text-white shrink-0 shadow-xs">
                          <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                        </div>
                        <span className="font-semibold text-xs sm:text-[13px] text-[#111111] leading-snug font-sans">
                          {row.solution}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
