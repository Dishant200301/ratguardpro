import React from 'react';
import { ShoppingBag, ArrowRight, Minus, Plus, Check } from 'lucide-react';

interface ProductSectionProps {
  quantity: number;
  isAdded: boolean;
  onAddToCart: () => void;
  onIncreaseQty: () => void;
  onDecreaseQty: () => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  quantity,
  isAdded,
  onAddToCart,
  onIncreaseQty,
  onDecreaseQty,
}) => {
  return (
    <section
      id="product-showcase-section"
      className="w-full bg-white py-12 sm:py-16 lg:py-24 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Real Product Image (55-60% width) */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div className="relative w-full max-w-lg sm:max-w-xl lg:max-w-2xl xl:max-w-3xl aspect-4/3 sm:aspect-square flex items-center justify-center p-2 sm:p-4 lg:p-6 group">
              {/* Soft subtle blue-tint background glow */}
              <div className="absolute inset-4 rounded-3xl bg-neutral-50 border border-neutral-100 -z-10 group-hover:scale-[1.02] transition-transform duration-500" />

              {/* Product Image */}
              <img
                src="/product/product.png"
                alt="Ultrasonic Rat Repellent Device"
                className="w-full h-auto max-h-[420px] lg:max-h-[560px] xl:max-h-[620px] object-contain drop-shadow-2xl transform group-hover:scale-[1.04] transition-transform duration-500"
                loading="eager"
              />
            </div>
          </div>

          {/* Right Column: Product Details & Add to Cart (Matching Reference Exactly) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* 1. Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
              Ultrasonic Rat Repellent Device
            </h2>

            {/* 2. Blue Accent Line (#0066FF) */}
            <div className="w-20 h-1.5 bg-[#0066FF] rounded-full" />

            {/* 3. Description */}
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
              Advanced ultrasonic technology keeps rats away without chemicals or traps. Safe, humane and effective for all environments.
            </p>

            {/* 4. Pricing (Blue #0066FF & Black & White color scheme) */}
            <div className="flex items-baseline gap-4 pt-1">
              <span className="text-4xl sm:text-5xl font-black text-[#0066FF] tracking-tight">
                ₹5,499
              </span>
              <span className="text-xl sm:text-2xl font-bold text-neutral-400 line-through">
                ₹6,999
              </span>
              <span className="bg-[#0066FF]/10 text-[#0066FF] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Save 21%
              </span>
            </div>

            {/* Key Feature Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-neutral-700 pt-1">
              <span className="flex items-center gap-1.5 bg-neutral-50 px-3 py-1.5 rounded-lg border border-neutral-200">
                <Check className="w-3.5 h-3.5 text-[#0066FF]" /> Free Express COD
              </span>
              <span className="flex items-center gap-1.5 bg-neutral-50 px-3 py-1.5 rounded-lg border border-neutral-200">
                <Check className="w-3.5 h-3.5 text-[#0066FF]" /> 1 Year Warranty
              </span>
              <span className="flex items-center gap-1.5 bg-neutral-50 px-3 py-1.5 rounded-lg border border-neutral-200">
                <Check className="w-3.5 h-3.5 text-[#0066FF]" /> 7-Day Returns
              </span>
            </div>

            {/* 5. Add to Cart / Quantity Controls (Pill shape matching reference with #0066FF cart badge) */}
            <div className="pt-3">
              {!isAdded ? (
                <button
                  id="product-add-to-cart-btn"
                  onClick={onAddToCart}
                  className="w-full sm:w-auto min-w-[280px] sm:min-w-[320px] flex items-center justify-between bg-[#111111] hover:bg-black active:scale-[0.98] text-white px-5 py-3.5 rounded-full shadow-2xl transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    {/* Blue Circular Cart Badge matching reference color scheme */}
                    <div className="w-10 h-10 rounded-full bg-[#0066FF] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <span className="font-extrabold text-sm sm:text-base tracking-wider uppercase text-white">
                      ADD TO CART
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white transition-transform duration-200 group-hover:translate-x-1.5" />
                </button>
              ) : (
                /* Quantity Counter when item is added */
                <div
                  id="product-quantity-control"
                  className="w-full sm:w-auto inline-flex items-center justify-between bg-[#111111] text-white px-3.5 py-2.5 rounded-full shadow-xl border border-neutral-800"
                >
                  <div className="flex items-center gap-4 px-2">
                    <button
                      id="qty-minus-btn"
                      onClick={onDecreaseQty}
                      aria-label="Decrease quantity"
                      className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-600 flex items-center justify-center text-white transition-colors cursor-pointer"
                    >
                      <Minus className="w-4 h-4" />
                    </button>

                    <div className="flex flex-col items-center px-3">
                      <span className="text-xl font-black text-white">{quantity}</span>
                      <span className="text-[9px] uppercase font-bold text-neutral-400">
                        In Cart
                      </span>
                    </div>

                    <button
                      id="qty-plus-btn"
                      onClick={onIncreaseQty}
                      aria-label="Increase quantity"
                      className="w-10 h-10 rounded-full bg-[#0066FF] hover:bg-blue-600 active:bg-blue-700 flex items-center justify-center text-white transition-colors cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <span className="text-sm font-extrabold text-[#0066FF] pr-4">
                    ₹{(5499 * quantity).toLocaleString('en-IN')}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

