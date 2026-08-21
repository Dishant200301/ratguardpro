import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

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
      className="w-full bg-white py-16 lg:py-24 border-b border-neutral-100 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-widest text-[#0066FF] bg-blue-50 px-3.5 py-1 rounded-full font-sans">
            REAL IMPACT & PROOF
          </span>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#111111] mt-3 uppercase tracking-tight font-sans">
            SEE THE DIFFERENCE
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base mt-2 font-sans">
            Slide horizontally to compare space before and after installing RatGuardPro Ultrasonic Repellent.
          </p>
        </div>

        {/* Rock-Solid Before/After Slider Container */}
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          className="relative w-full h-[360px] sm:h-[480px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 cursor-ew-resize select-none touch-none"
        >
          {/* 1. AFTER IMAGE (Rock-solid Base Layer underneath) */}
          <div className="absolute inset-0 w-full h-full bg-neutral-900 overflow-hidden">
            <img
              src="/before_after/after.png"
              alt="After RatGuardPro Protection"
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
              draggable={false}
              loading="eager"
            />

            {/* AFTER Label Badge (Right) - Website Brand Blue */}
            <div className="absolute top-5 sm:top-6 right-5 sm:right-6 z-10 bg-[#0066FF]/95 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg border border-blue-400/40 flex items-center gap-1.5 shadow-blue-500/20">
              <span>AFTER</span>
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
              src="/before_after/before.png"
              alt="Before RatGuardPro Protection"
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
              draggable={false}
              loading="eager"
            />

            {/* BEFORE Label Badge (Left) */}
            <div className="absolute top-5 sm:top-6 left-5 sm:left-6 z-10 bg-black/80 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg border border-white/20">
              BEFORE
            </div>
          </div>

          {/* 3. DRAGGABLE CENTER DIVIDER LINE & HANDLE */}
          <div
            className="absolute top-0 bottom-0 z-30 flex items-center justify-center pointer-events-none"
            style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          >
            {/* High-visibility Vertical Line with Glow */}
            <div className="w-[2px] h-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)]" />

            {/* Center Circular Drag Button */}
            <div className="absolute w-12 h-12 rounded-full bg-white shadow-2xl border-2 border-neutral-200 flex items-center justify-center text-neutral-800 pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 active:scale-95 transition-transform duration-150">
              <div className="flex items-center gap-1">
                <ChevronLeft className="w-4 h-4 text-neutral-600 -mr-1" />
                <ChevronRight className="w-4 h-4 text-neutral-600 -ml-1" />
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};
