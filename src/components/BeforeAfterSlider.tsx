import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Sparkles } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect mobile width for switching between horizontal & vertical slider orientation
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMove = useCallback(
    (clientX: number, clientY: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      if (!isMobile) {
        // Horizontal Drag
        const x = clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPos(percentage);
      } else {
        // Vertical Drag
        const y = clientY - rect.top;
        const percentage = Math.max(0, Math.min(100, (y / rect.height) * 100));
        setSliderPos(percentage);
      }
    },
    [isMobile]
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX, e.clientY);
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMove]);

  return (
    <section
      id="before-after-section"
      className="w-full bg-white py-16 lg:py-24 border-b border-neutral-100 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full">
            REAL IMPACT
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#111111] mt-3 tracking-tight">
            See the Difference
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base mt-2">
            Before and after protection with our ultrasonic rat repellent in real kitchens & spaces.
          </p>
        </div>

        {/* Comparison Container */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          className="relative w-full h-[400px] sm:h-[480px] lg:h-[580px] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 cursor-ew-resize md:cursor-col-resize select-none"
        >
          {/* 1. AFTER IMAGE (Full Layer underneath) */}
          <div className="absolute inset-0 w-full h-full bg-neutral-900">
            {/* Clean kitchen with mounted device */}
            <img
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1600&auto=format&fit=crop"
              alt="After RatGuard Protection - Clean Kitchen"
              className="w-full h-full object-cover brightness-105"
            />
            {/* Ultrasonic Wall Unit Overlay Effect */}
            <div className="absolute top-16 right-1/4 w-16 h-20 bg-black/90 border border-neutral-600 rounded-xl p-2 flex flex-col items-center justify-center shadow-2xl">
              <div className="w-full flex justify-between px-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              </div>
              <span className="text-[7px] font-bold text-neutral-300 uppercase mt-1">
                RatGuard
              </span>
              <div className="w-24 h-24 absolute -inset-4 border border-blue-400/40 rounded-full animate-pulse pointer-events-none" />
            </div>

            {/* AFTER Label Badge */}
            <div className="absolute top-6 right-6 z-10 bg-emerald-600/90 text-white text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg border border-emerald-400/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AFTER (Protected)</span>
            </div>
          </div>

          {/* 2. BEFORE IMAGE (Clipped Layer on Top based on sliderPos) */}
          <div
            className="absolute inset-0 h-full overflow-hidden"
            style={
              !isMobile
                ? { width: `${sliderPos}%` }
                : { height: `${sliderPos}%`, width: '100%' }
            }
          >
            {/* Dirty/Messy Kitchen with warning tone */}
            <img
              src="https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=1600&auto=format&fit=crop"
              alt="Before RatGuard Protection - Unprotected Space"
              className="w-full h-full object-cover filter contrast-110 saturate-120"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                height: containerRef.current ? `${containerRef.current.clientHeight}px` : '100%',
                maxWidth: 'none',
              }}
            />
            {/* Dark/Warm vignette for dirty problem state */}
            <div className="absolute inset-0 bg-amber-950/20 mix-blend-multiply" />

            {/* BEFORE Label Badge */}
            <div className="absolute top-6 left-6 z-10 bg-black/80 text-white text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg border border-white/20">
              BEFORE (Unprotected)
            </div>
          </div>

          {/* 3. DRAGGABLE DIVIDER & HANDLE */}
          {!isMobile ? (
            /* Horizontal Desktop/Tablet Divider */
            <div
              className="absolute top-0 bottom-0 z-30 flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
            >
              {/* Thin White Line */}
              <div className="w-1 h-full bg-white shadow-xl" />

              {/* Center Circular Drag Handle */}
              <div className="absolute w-12 h-12 rounded-full bg-white shadow-2xl border-2 border-neutral-300 flex items-center justify-center text-neutral-800 pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
                <div className="flex items-center gap-0.5">
                  <ChevronLeft className="w-4 h-4 -mr-1" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                  <ChevronRight className="w-4 h-4 -ml-1" />
                </div>
              </div>
            </div>
          ) : (
            /* Vertical Mobile Divider */
            <div
              className="absolute left-0 right-0 z-30 flex items-center justify-center pointer-events-none"
              style={{ top: `${sliderPos}%`, transform: 'translateY(-50%)' }}
            >
              {/* Thin White Line */}
              <div className="h-1 w-full bg-white shadow-xl" />

              {/* Center Circular Drag Handle */}
              <div className="absolute w-12 h-12 rounded-full bg-white shadow-2xl border-2 border-neutral-300 flex items-center justify-center text-neutral-800 pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
                <div className="flex flex-col items-center">
                  <ChevronUp className="w-4 h-4 -mb-1" />
                  <ChevronDown className="w-4 h-4 -mt-1" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User drag tip */}
        <p className="text-center text-xs text-neutral-400 mt-4 font-medium">
          Drag the center handle {!isMobile ? 'left or right' : 'up or down'} to compare before & after protection.
        </p>
      </div>
    </section>
  );
};
