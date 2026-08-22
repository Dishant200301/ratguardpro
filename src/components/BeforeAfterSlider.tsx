import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, XCircle, CheckCircle2, ShieldCheck, AlertTriangle, Sparkles } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
      window.addEventListener('pointercancel', handlePointerUp);
    }
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [isDragging, handleMove]);

  return (
    <section
      id="before-after-section"
      className="w-full bg-white py-10 sm:py-16 lg:py-20 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold tracking-widest text-[#0066FF] bg-blue-50 px-3.5 py-1 rounded-full font-sans">
            Real Impact & Proof
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-[#111111] tracking-tight font-sans mt-3">
            See The {" "}
            <span className="text-[#0066FF]">Difference</span>
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base mt-2.5 font-sans font-medium">
            Slide horizontally to compare space before and after installing RatGuardPro Ultrasonic Repellent.
          </p>
        </div>

        {/* Rock-Solid Before/After Slider Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Main Interactive Comparison Viewport */}
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            className="relative w-full h-[280px] xs:h-[340px] sm:h-[440px] md:h-[500px] lg:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm cursor-ew-resize select-none touch-none bg-neutral-900"
          >
            {/* 1. AFTER IMAGE (Rock-solid Base Layer underneath) */}
            <div className="absolute inset-0 w-full h-full bg-neutral-900 overflow-hidden">
              <img
                src="/images/home/before_after/after.png"
                alt="After RatGuardPro Protection - 100% Clean & Rodent Free"
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                draggable={false}
                loading="eager"
              />

              {/* AFTER Label Badge (Fixed in Top-Right corner, hides smoothly as slider moves past 80%) */}
              <div
                className={`absolute top-4 sm:top-6 right-4 sm:right-6 z-10 bg-[#0066FF]/95 text-white text-xs sm:text-sm font-semibold tracking-wider px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full backdrop-blur-md shadow-lg border border-blue-400/40 flex items-center gap-1.5 shadow-blue-500/20 transition-all duration-200 ${
                  sliderPos > 80 ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
                }`}
              >
                <span>After</span>
              </div>
            </div>

            {/* 2. BEFORE IMAGE (Clipped Layer on Top - Image coordinates never shift) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{
                clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                WebkitClipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
              }}
            >
              <img
                src="/images/home/before_after/before.png"
                alt="Before RatGuardPro Protection - Pest Infestation & Damage"
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                draggable={false}
                loading="eager"
              />

              {/* BEFORE Label Badge (Fixed in Top-Left corner, hides smoothly as slider moves below 20%) */}
              <div
                className={`absolute top-4 sm:top-6 left-4 sm:left-6 z-10 bg-black/80 text-white text-xs sm:text-sm font-semibold tracking-wider px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full backdrop-blur-md shadow-lg border border-white/20 transition-all duration-200 ${
                  sliderPos < 20 ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
                }`}
              >
                Before
              </div>
            </div>

            {/* 3. DRAGGABLE CENTER DIVIDER LINE & HANDLE */}
            <div
              className="absolute top-0 bottom-0 z-30 flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
            >
              {/* High-visibility Vertical Line with Glow */}
              <div className="w-[2px] h-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.8)]" />

              {/* Center Circular Drag Button */}
              <div className="absolute w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-white shadow-2xl border-2 border-[#0066FF] flex items-center justify-center text-neutral-900 pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-105 active:scale-95 transition-transform duration-150">
                <div className="flex items-center">
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#0066FF] -mr-1" />
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#0066FF] -ml-1" />
                </div>
              </div>
            </div>

            {/* Subtle bottom drag instruction banner for mobile users */}
            <div className="absolute bottom-3 inset-x-0 mx-auto w-fit z-10 pointer-events-none bg-black/60 backdrop-blur-md text-white/90 text-[10px] sm:text-xs px-3 py-1 rounded-full border border-white/10 hidden xs:flex items-center gap-1.5">
              <span>⟵ Drag or tap to compare ⟶</span>
            </div>
          </div>


        </div>

        {/* Detailed Side-by-Side Content Breakdown (Responsive Grid) */}
        <div className="max-w-4xl mx-auto mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* BEFORE CARD */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-rose-200/80 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-rose-50 rounded-full blur-2xl pointer-events-none -mr-8 -mt-8"></div>
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold tracking-wider uppercase text-rose-600">Common Problems</span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900">Before RatGuardPro</h3>
              </div>
            </div>

            <ul className="space-y-3.5 text-neutral-700">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                  <XCircle className="w-4 h-4 text-rose-500" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-[#111111] tracking-tight font-sans line-clamp-1 truncate">
                    Severe Property Damage
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-normal leading-snug mt-0.5 font-sans line-clamp-2">
                    Rats chew appliance wires, kitchen cables, and wooden furniture.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                  <XCircle className="w-4 h-4 text-rose-500" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-[#111111] tracking-tight font-sans line-clamp-1 truncate">
                    Food Contamination & Diseases
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-normal leading-snug mt-0.5 font-sans line-clamp-2">
                    Dangerous droppings, bacteria, and foul odor hazards in kitchens.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                  <XCircle className="w-4 h-4 text-rose-500" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-[#111111] tracking-tight font-sans line-clamp-1 truncate">
                    Toxic Poisons & Messy Traps
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-normal leading-snug mt-0.5 font-sans line-clamp-2">
                    Continuous expenses on sticky glue pads and hazardous chemical baits.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                  <XCircle className="w-4 h-4 text-rose-500" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-[#111111] tracking-tight font-sans line-clamp-1 truncate">
                    Dead Rodent Stench
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-normal leading-snug mt-0.5 font-sans line-clamp-2">
                    Unpleasant cleanup and rotting carcasses behind inaccessible walls.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* AFTER CARD */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-blue-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full blur-2xl pointer-events-none -mr-8 -mt-8"></div>
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0066FF]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#0066FF]">Guaranteed Results</span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900">After RatGuardPro</h3>
              </div>
            </div>

            <ul className="space-y-3.5 text-neutral-700">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-[#111111] tracking-tight font-sans line-clamp-1 truncate">
                    100% Pest-Free Zone
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-normal leading-snug mt-0.5 font-sans line-clamp-2">
                    Continuous high-frequency ultrasonic waves force rats to flee permanently.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-[#111111] tracking-tight font-sans line-clamp-1 truncate">
                    Clean & Hygienic Living
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-normal leading-snug mt-0.5 font-sans line-clamp-2">
                    No more rat droppings, contaminated pantries, or chewed wires.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-[#111111] tracking-tight font-sans line-clamp-1 truncate">
                    Safe for Family & Pets
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-normal leading-snug mt-0.5 font-sans line-clamp-2">
                    Zero poisons, zero radiation, and inaudible to humans and household pets.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-[#111111] tracking-tight font-sans line-clamp-1 truncate">
                    Zero Recurring Cost
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-normal leading-snug mt-0.5 font-sans line-clamp-2">
                    Plug-and-play operation with ultra-low electricity consumption (under 5W).
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>


      </div>
    </section>
  );
};
