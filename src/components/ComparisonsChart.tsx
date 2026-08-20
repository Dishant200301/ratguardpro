import React from 'react';
import { Check, X } from 'lucide-react';

interface ComparisonItem {
  feature: string;
  icon: string;
}

const COMPARISON_ITEMS: ComparisonItem[] = [
  { feature: 'Eco-Friendly', icon: '🌿' },
  { feature: 'Safe for Pets & Children', icon: '🐾' },
  { feature: 'Maintenance-Free', icon: '⚙️' },
  { feature: 'Coverage Area', icon: '📡' },
  { feature: 'Effectiveness', icon: '💡' },
  { feature: 'Cost-Effective', icon: '💰' },
  { feature: 'Chemical-Free', icon: '☢️' },
];

export const ComparisonsChart: React.FC = () => {
  return (
    <section
      id="comparisons-chart-section"
      className="w-full bg-white py-14 sm:py-20 select-none overflow-hidden"
    >
      {/* Laptop / Desktop container with increased width */}
      <div className="max-w-5xl lg:max-w-7xl xl:max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#111111] uppercase tracking-tight flex items-center justify-center gap-2 font-sans">
            <span className="text-2xl sm:text-3xl">🐭</span>
            <span>COMPARISONS CHART</span>
          </h2>
        </div>



        {/* Responsive Table with increased min-width for mobile/tablet manual scrolling */}
        <div className="w-full overflow-x-auto pb-3 rounded-2xl shadow-sm border border-neutral-200/80 bg-white">
          <table className="w-full text-left border-collapse min-w-[840px] font-sans">
            {/* Header Row (#111111 with website blue brand accents - All Centered and Single-Line) */}
            <thead>
              <tr className="bg-[#111111] text-white text-sm sm:text-base font-bold select-none">
                <th className="py-4.5 sm:py-5 px-4 sm:px-6 font-bold w-[22%] text-center whitespace-nowrap">
                  <div className="flex items-center justify-center gap-2">
                    <span>🌟</span>
                    <span>Feature</span>
                  </div>
                </th>
                <th className="py-4.5 sm:py-5 px-4 sm:px-6 font-bold w-[36%] text-center border-b-2 border-[#0066FF] whitespace-nowrap">
                  <div className="flex items-center justify-center gap-2">
                    <span>🐭</span>
                    <span className="text-white">Ratguard Ultrasonic Rat Repellent</span>
                  </div>
                </th>
                <th className="py-4.5 sm:py-5 px-4 sm:px-6 font-bold w-[21%] text-center text-neutral-300 whitespace-nowrap">
                  <div className="flex items-center justify-center gap-2">
                    <span>🪤</span>
                    <span>Traditional Traps</span>
                  </div>
                </th>
                <th className="py-4.5 sm:py-5 px-4 sm:px-6 font-bold w-[21%] text-center text-neutral-300 whitespace-nowrap">
                  <div className="flex items-center justify-center gap-2">
                    <span>☠️</span>
                    <span>Chemical Poisons</span>
                  </div>
                </th>
              </tr>
            </thead>

            {/* Table Rows styled with website brand colors */}
            <tbody className="divide-y divide-neutral-200/60 text-sm sm:text-base">
              {COMPARISON_ITEMS.map((item, index) => (
                <tr key={index} className="transition-colors hover:brightness-[0.99]">
                  {/* Column 1: Feature Name (White Background) */}
                  <td className="py-4 sm:py-4.5 px-6 text-[#111111] font-bold bg-white">
                    <div className="flex items-center gap-2.5">
                      <span className="text-base sm:text-lg">{item.icon}</span>
                      <span>{item.feature}</span>
                    </div>
                  </td>

                  {/* Column 2: Ratguard Ultrasonic (Website Brand Blue Tint #F0F5FF with Royal Blue Badge) */}
                  <td className="py-4 sm:py-4.5 px-6 text-center bg-[#F0F5FF] text-[#0066FF] font-extrabold border-x border-blue-100/80">
                    <div className="flex items-center justify-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#0066FF] text-white flex items-center justify-center shadow-xs">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span className="text-[#0066FF] font-bold">Yes</span>
                    </div>
                  </td>

                  {/* Column 3: Traditional Traps (Neutral Soft Background #F9FAFB) */}
                  <td className="py-4 sm:py-4.5 px-6 text-center bg-[#F9FAFB] text-neutral-500 font-medium">
                    <div className="flex items-center justify-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-500 flex items-center justify-center">
                        <X className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span className="font-semibold text-neutral-600">No</span>
                    </div>
                  </td>

                  {/* Column 4: Chemical Poisons (Neutral Soft Background #F9FAFB) */}
                  <td className="py-4 sm:py-4.5 px-6 text-center bg-[#F9FAFB] text-neutral-500 font-medium border-l border-neutral-100">
                    <div className="flex items-center justify-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-500 flex items-center justify-center">
                        <X className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span className="font-semibold text-neutral-600">No</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
