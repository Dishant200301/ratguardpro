import React, { useState, useRef } from 'react';
import {
  ShoppingBag,
  ArrowRight,
  ChevronUp,
  ChevronDown,
  Truck,
  ShieldCheck,
  RotateCcw,
  Minus,
  Plus,
} from 'lucide-react';

interface ProductSectionProps {
  onBuyNow?: () => void;
  quantity?: number;
  isAdded?: boolean;
  onAddToCart?: () => void;
  onIncreaseQty?: () => void;
  onDecreaseQty?: () => void;
}

const PRODUCT_IMAGES = [
  {
    id: 'product-main',
    src: '/product/product.png',
    alt: 'RatGuard Ultrasonic Rat Repellent Device',
  },
  {
    id: 'product-g1',
    src: '/product/gallery-1.png',
    alt: 'Technical Specifications & Design',
  },
  {
    id: 'product-g2',
    src: '/product/gallery-2.png',
    alt: 'Features & Controls Overview',
  },
  {
    id: 'product-g3',
    src: '/product/gallery-3.png',
    alt: '360 Degree 1500 Sq Ft Coverage Area',
  },
  {
    id: 'product-g4',
    src: '/product/gallery-4.png',
    alt: 'Multi-Environment Protection',
  },
  {
    id: 'product-g5',
    src: '/product/gallery-5.png',
    alt: '100% Effective Dual Speaker Tech',
  },
  {
    id: 'product-g6',
    src: '/product/gallery-6.png',
    alt: 'Advanced Ultrasonic Repellent Setup',
  },
];

export const ProductSection: React.FC<ProductSectionProps> = ({
  onBuyNow,
  onAddToCart,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const desktopThumbnailsRef = useRef<HTMLDivElement | null>(null);
  const mobileThumbnailsRef = useRef<HTMLDivElement | null>(null);

  const selectedImage = PRODUCT_IMAGES[selectedIndex] || PRODUCT_IMAGES[0];

  const handleBuyNowClick = () => {
    if (onBuyNow) {
      onBuyNow();
    } else if (onAddToCart) {
      onAddToCart();
    }
  };

  // Desktop vertical scroll by 1 thumbnail card
  const scrollThumbnails = (direction: 'up' | 'down') => {
    if (desktopThumbnailsRef.current) {
      const scrollAmount = 74;
      desktopThumbnailsRef.current.scrollBy({
        top: direction === 'up' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Interactive mouse move zoom calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <section
      id="product-showcase-section"
      className="w-full bg-white py-10 sm:py-14 lg:py-20 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ========================================================================= */}
          {/* LEFT SIDE: PRODUCT GALLERY (Vertical on Tablet & Desktop, Horizontal on Mobile) */}
          {/* ========================================================================= */}
          <div className="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-none mx-auto flex flex-col sm:flex-row items-center sm:justify-between lg:justify-center gap-2.5 sm:gap-3.5 lg:gap-4">

            {/* 1. VERTICAL THUMBNAILS (With Top/Down Arrows, Shows 6 Cards Matching Main Card Height) */}
            <div className="hidden sm:flex flex-col items-center shrink-0 justify-between h-[420px] md:h-[480px] lg:h-[400px] xl:h-[520px] py-0.5">
              {/* Up Chevron Button */}
              <button
                onClick={() => scrollThumbnails('up')}
                aria-label="Scroll thumbnails up"
                className="w-6 h-6 rounded-full flex items-center justify-center text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <ChevronUp className="w-4 h-4" />
              </button>

              {/* Exactly 6 Visible Thumbnails Container */}
              <div
                ref={desktopThumbnailsRef}
                className="flex flex-col gap-1.5 h-[364px] md:h-[420px] lg:h-[440px] xl:h-[460px] overflow-y-auto py-0.5 px-0.5 scrollbar-none scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {PRODUCT_IMAGES.map((img, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={img.id}
                      onClick={() => setSelectedIndex(idx)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      aria-label={`Select product image ${idx + 1}`}
                      className={`w-15 h-15 sm:w-16 sm:h-16 md:w-[66px] md:h-[66px] lg:w-[68px] lg:h-[68px] xl:w-[70px] xl:h-[70px] rounded-xl p-0 m-0 bg-white transition-all duration-200 shrink-0 overflow-hidden cursor-pointer flex items-center justify-center border-2 ${isSelected
                          ? 'border-[#0066FF] shadow-md shadow-blue-500/15 scale-102'
                          : 'border-neutral-200 hover:border-neutral-400 opacity-80 hover:opacity-100'
                        }`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </button>
                  );
                })}
              </div>

              {/* Down Chevron Button */}
              <button
                onClick={() => scrollThumbnails('down')}
                aria-label="Scroll thumbnails down"
                className="w-6 h-6 rounded-full flex items-center justify-center text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* 2. MAIN DISPLAY IMAGE CARD (Strictly 1:1 Aspect-Square, Full Width Justified on Tablet) */}
            <div className="w-full flex-1 flex items-center justify-center">
              <div
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleMouseMove}
                className="relative w-full aspect-square max-w-full sm:max-w-[420px] md:max-w-[480px] lg:max-w-[500px] xl:max-w-[520px] bg-white rounded-lg sm:rounded-xl border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex items-center justify-center p-0 m-0 overflow-hidden group cursor-crosshair select-none"
              >
                {/* Product Main Image */}
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  style={{
                    transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  }}
                  className={`w-full h-full object-contain pointer-events-none transition-transform ${isZoomed
                    ? 'scale-[2.3] duration-75 ease-out cursor-crosshair'
                    : 'scale-100 duration-300 ease-out'
                    }`}
                  loading="eager"
                />

                {/* Subtle Hover to Zoom hint badge */}
                {!isZoomed && (
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-sm">
                    <span>🔍 Hover to Zoom</span>
                  </div>
                )}
              </div>
            </div>

            {/* 3. MOBILE HORIZONTAL THUMBNAILS (Only visible on mobile screen < sm) */}
            <div className="flex sm:hidden w-full max-w-full mx-auto pt-2.5">
              <div
                ref={mobileThumbnailsRef}
                className="flex items-center gap-2 overflow-x-auto w-full py-1 px-0.5 scrollbar-none snap-x scroll-smooth -mr-4 pr-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {PRODUCT_IMAGES.map((img, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={img.id}
                      onClick={() => setSelectedIndex(idx)}
                      aria-label={`Select product image ${idx + 1}`}
                      className={`w-[calc((100%-28px)/4.5)] min-w-[62px] aspect-square rounded-xl p-0 m-0 bg-white transition-all duration-200 shrink-0 overflow-hidden cursor-pointer flex items-center justify-center border-2 snap-start ${isSelected
                        ? 'border-[#0066FF] shadow-md shadow-blue-500/20 scale-102'
                        : 'border-neutral-200 opacity-75 hover:opacity-100'
                        }`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT SIDE: PRODUCT DETAILS (50% Width on Laptop/Desktop)                 */}
          {/* ========================================================================= */}
          <div className="w-full flex flex-col space-y-5 lg:space-y-6">

            {/* 1. Main Heading */}
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-[#111111] tracking-tight leading-[1.15] font-sans">
              Ultrasonic Rat Repellent Device
            </h2>

            {/* 2. Blue Accent Line */}
            <div className="w-16 h-1 bg-[#0066FF] rounded-full" />

            {/* 3. Subtitle / Paragraph */}
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal font-sans">
              Advanced ultrasonic technology keeps rats away without chemicals or traps. Safe, humane and effective for all environments.
            </p>

            {/* 4. Price Row with Discount Badge */}
            <div className="flex items-center gap-3.5 pt-1">
              <span className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0066FF] tracking-tight font-sans">
                ₹2,450
              </span>
              <span className="text-lg sm:text-xl font-bold text-neutral-400 line-through font-sans">
                ₹7,999
              </span>
              <span className="bg-blue-50 text-[#0066FF] text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider font-sans">
                -69%
              </span>
            </div>

            {/* 5. Key Trust Badges (Fully Responsive on Mobile, Tablet, Desktop) */}
            <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap items-center sm:gap-2.5 pt-1 text-[11px] sm:text-xs font-semibold text-neutral-700">
              <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-1 sm:gap-1.5 bg-neutral-50 px-2 py-2 sm:px-3 sm:py-1.5 rounded-lg border border-neutral-200/80 shadow-2xs">
                <Truck className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-[#0066FF] shrink-0" />
                <span className="leading-tight">Free Express COD</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-1 sm:gap-1.5 bg-neutral-50 px-2 py-2 sm:px-3 sm:py-1.5 rounded-lg border border-neutral-200/80 shadow-2xs">
                <ShieldCheck className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-[#0066FF] shrink-0" />
                <span className="leading-tight">1 Year Warranty</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-1 sm:gap-1.5 bg-neutral-50 px-2 py-2 sm:px-3 sm:py-1.5 rounded-lg border border-neutral-200/80 shadow-2xs">
                <RotateCcw className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-[#0066FF] shrink-0" />
                <span className="leading-tight">7-Day Returns</span>
              </div>
            </div>

            {/* 6. Action Button (Click directly opens Modal) */}
            <div className="pt-2 sm:pt-4">
              <button
                id="product-buy-now-btn"
                onClick={handleBuyNowClick}
                className="inline-flex items-center gap-3 sm:gap-5 bg-[#0D0D0D] hover:bg-black active:scale-[0.98] text-white pl-1.5 pr-5 py-1.5 sm:pl-2 sm:pr-6 sm:py-2 rounded-full shadow-2xl transition-all duration-200 group cursor-pointer border border-neutral-800"
              >
                {/* Circular Blue Badge with ShoppingBag Icon */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0066FF] flex items-center justify-center text-white shrink-0 shadow-md transition-transform">
                  <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="font-bold text-sm sm:text-base tracking-wider text-white font-sans whitespace-nowrap">
                  Buy Now
                </span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

