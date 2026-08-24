import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  Flame,
  Car,
  Layers,
  HeartPulse,
  DollarSign,
  VolumeX,
  Package,
  AlertTriangle,
  Wrench,
  Shield,
} from 'lucide-react';
import { SolutionCategoryData } from '../../data/categorySolutionsData';

interface CategoryProblemSectionProps {
  categoryData: SolutionCategoryData;
}

export const CategoryProblemSection: React.FC<CategoryProblemSectionProps> = ({
  categoryData,
}) => {
  const [problemSlideIndex, setProblemSlideIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);

  // Responsive items per view: Mobile 1, Tablet 2, Laptop 3, Desktop 5
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 1024) {
        setVisibleCount(2);
      } else if (width < 1280) {
        setVisibleCount(3);
      } else {
        setVisibleCount(5);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxSlideIndex = Math.max(0, categoryData.problems.length - visibleCount);

  const handlePrevProblem = () => {
    setProblemSlideIndex((prev) => (prev <= 0 ? maxSlideIndex : prev - 1));
  };

  const handleNextProblem = () => {
    setProblemSlideIndex((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
  };

  const renderProblemIcon = (icon: string) => {
    const iconClass = "w-6 h-6 text-white";
    switch (icon) {
      case 'wire':
        return <Zap className={iconClass} />;
      case 'engine':
        return <Flame className={iconClass} />;
      case 'car':
        return <Car className={iconClass} />;
      case 'nest':
        return <Layers className={iconClass} />;
      case 'health':
        return <HeartPulse className={iconClass} />;
      case 'money':
        return <DollarSign className={iconClass} />;
      case 'smell':
        return <VolumeX className={iconClass} />;
      case 'food':
        return <Package className={iconClass} />;
      case 'alert':
        return <AlertTriangle className={iconClass} />;
      case 'tool':
        return <Wrench className={iconClass} />;
      case 'box':
        return <Package className={iconClass} />;
      case 'shield':
        return <Shield className={iconClass} />;
      default:
        return <Shield className={iconClass} />;
    }
  };

  return (
    <section id="problem-section" className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#111111] tracking-wider font-sans">
            {categoryData.problemSectionTitle}
          </h2>
        </div>

        {/* Responsive Slider Container with Side Arrows & Bottom Dots */}
        <div className="relative w-full group/slider">

          {/* Left Navigation Arrow */}
          {maxSlideIndex > 0 && (
            <button
              onClick={handlePrevProblem}
              aria-label="Previous Problem Card"
              className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-neutral-200 shadow-md flex items-center justify-center text-neutral-800 hover:text-white hover:bg-[#0066FF] hover:border-[#0066FF] active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}

          {/* Slider Cards Track */}
          <div className="overflow-hidden w-full py-2">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${problemSlideIndex * (100 / visibleCount)}%)`,
              }}
            >
              {categoryData.problems.map((problem) => (
                <div
                  key={problem.id}
                  className="shrink-0 px-2 sm:px-2.5"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-neutral-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col items-center text-center h-full justify-start min-h-[220px]">
                    {/* Brand Blue Circular Icon Badge */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#0066FF] flex items-center justify-center text-white mb-4 shadow-md shadow-blue-500/20 shrink-0">
                      {renderProblemIcon(problem.icon)}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#111111] tracking-tight mb-2 font-sans line-clamp-1 w-full" title={problem.title}>
                      {problem.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans line-clamp-4 min-h-[4.5rem] sm:min-h-[5rem] flex items-start justify-center">
                      {problem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Navigation Arrow */}
          {maxSlideIndex > 0 && (
            <button
              onClick={handleNextProblem}
              aria-label="Next Problem Card"
              className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-neutral-200 shadow-md flex items-center justify-center text-neutral-800 hover:text-white hover:bg-[#0066FF] hover:border-[#0066FF] active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}

        </div>

        {/* Bottom Center Pagination Dots */}
        {maxSlideIndex > 0 && (
          <div className="flex items-center justify-center gap-1.5 mt-6 sm:mt-8">
            {Array.from({ length: maxSlideIndex + 1 }).map((_, dotIdx) => {
              const isActive = dotIdx === problemSlideIndex;
              return (
                <button
                  key={dotIdx}
                  onClick={() => setProblemSlideIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${isActive
                    ? 'w-7 h-2 bg-[#0066FF] shadow-xs shadow-blue-500/30'
                    : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-400'
                    }`}
                />
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
