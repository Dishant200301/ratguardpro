import React from 'react';
import { Check, X, Minus } from 'lucide-react';

type ComparisonStatus = 'check' | 'cross' | 'neutral';

interface ComparisonRow {
  icon: string;
  feature: string;
  ratguard: ComparisonStatus;
  traps: ComparisonStatus;
  poisons: ComparisonStatus;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    icon: '🌿',
    feature: 'Chemical-Free & Non-Toxic',
    ratguard: 'check',
    traps: 'check',
    poisons: 'cross',
  },
  {
    icon: '🐾',
    feature: 'Safe for Pets & Children',
    ratguard: 'check',
    traps: 'cross',
    poisons: 'cross',
  },
  {
    icon: '🧹',
    feature: 'Zero Dead Body Cleanup',
    ratguard: 'check',
    traps: 'cross',
    poisons: 'cross',
  },
  {
    icon: '🏷️',
    feature: 'Low Upfront Purchase Cost',
    ratguard: 'neutral',
    traps: 'check',
    poisons: 'check',
  },
  {
    icon: '💰',
    feature: 'Zero Recurring / Refill Cost',
    ratguard: 'check',
    traps: 'cross',
    poisons: 'cross',
  },
  {
    icon: '📡',
    feature: '1,500 Sq. Ft. Coverage Area',
    ratguard: 'check',
    traps: 'cross',
    poisons: 'cross',
  },
  {
    icon: '⚙️',
    feature: 'Maintenance-Free Operation',
    ratguard: 'check',
    traps: 'cross',
    poisons: 'cross',
  },
  {
    icon: '🧠',
    feature: 'Long-Term Prevention',
    ratguard: 'check',
    traps: 'cross',
    poisons: 'cross',
  },
];

const StatusIcon: React.FC<{ status: ComparisonStatus }> = ({ status }) => {
  if (status === 'check') {
    return (
      <div className="flex items-center justify-center">
        <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0066FF] text-white flex items-center justify-center shadow-sm">
          <Check className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[3]" />
        </span>
      </div>
    );
  }

  if (status === 'cross') {
    return (
      <div className="flex items-center justify-center">
        <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-200 text-neutral-600 flex items-center justify-center shadow-2xs">
          <X className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[3]" />
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-100 border border-neutral-300 text-neutral-600 flex items-center justify-center shadow-2xs">
        <Minus className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[3]" />
      </span>
    </div>
  );
};

export const ComparisonsChart: React.FC = () => {
  return (
    <section
      id="comparisons-chart-section"
      className="w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      <div className="max-w-5xl lg:max-w-7xl xl:max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-sm font-semibold tracking-widest text-[#0066FF] bg-blue-50 px-3.5 py-1 rounded-full font-sans">
            Honest Comparison
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[#111111] tracking-tight font-sans mt-3">
            How RatGuardPro <span className="text-[#0066FF]">Compares</span>
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base mt-2.5 max-w-2xl mx-auto font-sans font-medium">
            Side-by-side comparison of smart ultrasonic technology against traditional traps and poisons.
          </p>
        </div>

        {/* Responsive Table Container with Equal Spacing */}
        <div className="w-full overflow-x-auto rounded-2xl sm:rounded-3xl shadow-sm border border-neutral-200/90 bg-white">
          <table className="w-full text-left border-collapse min-w-[780px] font-sans table-fixed">
            {/* Header Row: All Black (#111111) with Equal Widths */}
            <thead>
              <tr className="bg-[#111111] text-white text-sm sm:text-base font-bold select-none">
                <th className="py-4.5 sm:py-5 px-4 sm:px-6 w-[31%] text-left whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg">⭐</span>
                    <span>Feature / Criteria</span>
                  </div>
                </th>
                <th className="py-4.5 sm:py-5 px-4 sm:px-6 w-[23%] text-center whitespace-nowrap border-x border-neutral-800">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-base sm:text-lg">🛡️</span>
                    <span className="font-extrabold text-white">RatGuardPro</span>
                  </div>
                </th>
                <th className="py-4.5 sm:py-5 px-4 sm:px-6 w-[23%] text-center text-neutral-300 whitespace-nowrap">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-base sm:text-lg">🪤</span>
                    <span>Traps</span>
                  </div>
                </th>
                <th className="py-4.5 sm:py-5 px-4 sm:px-6 w-[23%] text-center text-neutral-300 whitespace-nowrap border-l border-neutral-800">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-base sm:text-lg">☠️</span>
                    <span>Poisons</span>
                  </div>
                </th>
              </tr>
            </thead>

            {/* Table Body with Equal Spacing & Centered Icons */}
            <tbody className="divide-y divide-neutral-200/70 text-sm sm:text-base">
              {COMPARISON_ROWS.map((row, index) => (
                <tr key={index} className="transition-colors hover:bg-neutral-50/50">
                  {/* Column 1: Feature */}
                  <td className="py-4 sm:py-4.5 px-4 sm:px-6 bg-white align-middle font-semibold text-[#111111]">
                    <div className="flex items-center gap-2.5">
                      {/* <span className="text-base sm:text-lg shrink-0">{row.icon}</span> */}
                      <span>{row.feature}</span>
                    </div>
                  </td>

                  {/* Column 2: RatGuardPro (Highlighted Brand Blue Tint) */}
                  <td className="py-4 sm:py-4.5 px-4 sm:px-6 bg-[#F0F5FF]/70 border-x border-blue-100/80 align-middle text-center">
                    <StatusIcon status={row.ratguard} />
                  </td>

                  {/* Column 3: Traditional Traps */}
                  <td className="py-4 sm:py-4.5 px-4 sm:px-6 bg-neutral-50/50 align-middle text-center">
                    <StatusIcon status={row.traps} />
                  </td>

                  {/* Column 4: Chemical Poisons */}
                  <td className="py-4 sm:py-4.5 px-4 sm:px-6 bg-neutral-50/50 border-l border-neutral-200/50 align-middle text-center">
                    <StatusIcon status={row.poisons} />
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
