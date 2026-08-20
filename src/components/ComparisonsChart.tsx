import React from 'react';
import { Check, X } from 'lucide-react';
import { COMPARISON_ROWS } from '../data/mockData';

export const ComparisonsChart: React.FC = () => {
  return (
    <section
      id="comparisons-chart-section"
      className="w-full bg-white py-16 lg:py-24 border-b border-neutral-100 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-[#111111] uppercase tracking-tight flex items-center justify-center gap-2">
            <span>🐭</span>
            <span>COMPARISONS CHART</span>
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base mt-2">
            Why leading businesses and homeowners choose RatGuard over obsolete traps and dangerous poisons.
          </p>
        </div>

        {/* 1. DESKTOP & TABLET: 4-Column Structured Table with Container Scroll */}
        <div className="hidden sm:block overflow-x-auto no-scrollbar shadow-xl rounded-3xl border border-neutral-200">
          <table className="w-full text-left border-collapse min-w-[700px]">
            {/* Header Row (#111111 background) */}
            <thead>
              <tr className="bg-[#111111] text-white text-sm sm:text-base font-extrabold">
                <th className="py-5 px-6 font-extrabold w-1/4">⭐ Feature</th>
                <th className="py-5 px-6 font-extrabold w-1/4 text-center bg-[#1a2e15] border-x border-neutral-800">
                  <div className="flex items-center justify-center gap-2">
                    <span>🐭</span>
                    <span>RatGuard Ultrasonic</span>
                  </div>
                </th>
                <th className="py-5 px-6 font-extrabold w-1/4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span>🪤</span>
                    <span>Traditional Traps</span>
                  </div>
                </th>
                <th className="py-5 px-6 font-extrabold w-1/4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span>☠️</span>
                    <span>Chemical Poisons</span>
                  </div>
                </th>
              </tr>
            </thead>

            {/* Comparison Rows */}
            <tbody className="divide-y divide-neutral-200 text-xs sm:text-sm font-bold">
              {COMPARISON_ROWS.map((row, index) => (
                <tr key={index} className="transition-colors hover:bg-neutral-50/50">
                  {/* Feature Name Column (White BG) */}
                  <td className="py-4.5 px-6 text-[#111111] font-extrabold bg-white">
                    <span className="mr-2">{row.icon}</span>
                    <span>{row.feature}</span>
                  </td>

                  {/* RatGuard Column (Light Green #E5F7DF) */}
                  <td className="py-4.5 px-6 text-center bg-[#E5F7DF] text-[#246b14] border-x border-emerald-200/50 font-black">
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-[#52C41A] text-white flex items-center justify-center shadow-xs">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span>Yes</span>
                    </div>
                  </td>

                  {/* Traditional Traps Column (Light Pink #FCEDED) */}
                  <td className="py-4.5 px-6 text-center bg-[#FCEDED] text-[#b91c1c] font-bold">
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-[#ef4444] text-white flex items-center justify-center shadow-xs">
                        <X className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span>No</span>
                    </div>
                  </td>

                  {/* Chemical Poisons Column (Light Pink #FCEDED) */}
                  <td className="py-4.5 px-6 text-center bg-[#FCEDED] text-[#b91c1c] font-bold border-l border-red-100">
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-[#ef4444] text-white flex items-center justify-center shadow-xs">
                        <X className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span>No</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 2. MOBILE: Responsive Stacked Cards Layout */}
        <div className="block sm:hidden space-y-4">
          {COMPARISON_ROWS.map((row, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm"
            >
              {/* Feature Header */}
              <div className="bg-[#111111] text-white px-4 py-3 font-extrabold text-sm flex items-center gap-2">
                <span>{row.icon}</span>
                <span>{row.feature}</span>
              </div>

              {/* Comparison Results */}
              <div className="p-3 space-y-2 text-xs font-bold">
                {/* RatGuard Result (Highlighted in Light Green #E5F7DF) */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#E5F7DF] border border-emerald-200 text-[#246b14]">
                  <div className="flex items-center gap-2 font-black">
                    <span>🐭 RatGuard Ultrasonic</span>
                  </div>
                  <div className="flex items-center gap-1 font-black">
                    <span className="w-4 h-4 rounded-full bg-[#52C41A] text-white flex items-center justify-center">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>Yes</span>
                  </div>
                </div>

                {/* Traditional Traps */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FCEDED] text-[#b91c1c]">
                  <span className="font-semibold">🪤 Traditional Traps</span>
                  <div className="flex items-center gap-1 font-bold">
                    <span className="w-4 h-4 rounded-full bg-[#ef4444] text-white flex items-center justify-center">
                      <X className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>No</span>
                  </div>
                </div>

                {/* Chemical Poisons */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FCEDED] text-[#b91c1c]">
                  <span className="font-semibold">☠️ Chemical Poisons</span>
                  <div className="flex items-center gap-1 font-bold">
                    <span className="w-4 h-4 rounded-full bg-[#ef4444] text-white flex items-center justify-center">
                      <X className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>No</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
