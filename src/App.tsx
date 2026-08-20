import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { ProductSection } from './components/ProductSection';
import { BentoGridSection } from './components/BentoGridSection';
import { ProductInfoSection } from './components/ProductInfoSection';
import { AboutSection } from './components/AboutSection';
import { CategoryCarousel } from './components/CategoryCarousel';
import { FeaturesTechSection } from './components/FeaturesTechSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ShopThroughVideo } from './components/ShopThroughVideo';
import { ComparisonsChart } from './components/ComparisonsChart';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { PhoneCall, MessageSquare } from 'lucide-react';

export default function App() {
  const [productQuantity, setProductQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setProductQuantity(1);
    setCartDrawerOpen(true);
  };

  const handleIncreaseQty = () => {
    setProductQuantity((prev) => prev + 1);
  };

  const handleDecreaseQty = () => {
    if (productQuantity > 1) {
      setProductQuantity((prev) => prev - 1);
    } else {
      setIsAddedToCart(false);
      setProductQuantity(0);
    }
  };

  const handleResetCart = () => {
    setIsAddedToCart(false);
    setProductQuantity(0);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShopNow = () => {
    const el = document.getElementById('product-showcase-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickAddVideoItem = (_title: string, _price: string) => {
    setIsAddedToCart(true);
    setProductQuantity((prev) => (prev === 0 ? 1 : prev + 1));
    setCartDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans antialiased flex flex-col selection:bg-[#0066FF] selection:text-white">
      {/* 1. STICKY NAVBAR with Top Announcement Marquee */}
      <Navbar
        cartCount={isAddedToCart ? productQuantity : 0}
        onOpenCart={() => setCartDrawerOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* MAIN CONTENT SECTIONS IN REQUESTED STRUCTURE */}
      <main className="flex-1 w-full">
        {/* 2. HERO SECTION (8 slides, 5s auto-slide, pause on hover, dots pagination) */}
        <HeroSection onShopNow={handleShopNow} />

       

        {/* 3. DUAL LOGO MARQUEE SECTION (Left track + Right track with vertical divider) */}
        <MarqueeSection />

        {/* 4. PRODUCT SHOWCASE SECTION (Interactive Add to Cart / - 1 + Quantity control) */}
        <ProductSection
          quantity={productQuantity}
          isAdded={isAddedToCart}
          onAddToCart={handleAddToCart}
          onIncreaseQty={handleIncreaseQty}
          onDecreaseQty={handleDecreaseQty}
        />

        {/* 5. BENTO GRID SECTION (9-area layout, center large product, 8 space categories) */}
        <BentoGridSection />

        {/* 6. PLUG IT IN / HOW IT WORKS SECTION (White info left + Dark visual right) */}
        <ProductInfoSection onBuyNow={handleShopNow} />

        {/* 7. ABOUT / FOUNDER STORY SECTION (Bharat Parmar & Shyam Innovations) */}
        <AboutSection />

        {/* 8. CATEGORY CAROUSEL (8 spaces, horizontal scroll, tablet/mobile responsive) */}
        <CategoryCarousel />

        {/* 9. FEATURES / TECHNOLOGY 12-POINT SECTION (Left 6, Center Product, Right 6) */}
        <FeaturesTechSection onBuyNow={handleShopNow} />

        {/* 10. INTERACTIVE BEFORE & AFTER SLIDER (Kitchen pest comparison) */}
        <BeforeAfterSlider />

        {/* 11. SHOP THROUGH VIDEO SECTION (Reels carousel with hover-to-play) */}
        <ShopThroughVideo onAddToCart={handleQuickAddVideoItem} />

        {/* 12. COMPARISONS CHART (7-row feature matrix vs traps & poisons) */}
        <ComparisonsChart />

        {/* 13. FAQ & INSTALLATION GUIDE SECTION (Accordion tabs) */}
        <FaqSection />
      </main>
 
      {/* 14. FOOTER SECTION (Trust badges, links, support info, copyright) */}
      <Footer />

      {/* 15. CART & QUICK CHECKOUT DRAWER */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        quantity={isAddedToCart ? productQuantity : 0}
        onIncrease={handleIncreaseQty}
        onDecrease={handleDecreaseQty}
        onReset={handleResetCart}
      />

      {/* Floating Quick Action Button (Direct WhatsApp / Phone Support) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 items-end">
        <a
          href="https://api.whatsapp.com/send?phone=919409445443&text=Hi%20RatGuardPro,%20I%20want%20to%20order%20the%20Ultrasonic%20Rat%20Repellent"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order on WhatsApp"
          className="bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2 group transition-all duration-300 hover:pr-4"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="hidden group-hover:inline text-xs font-bold whitespace-nowrap">
            Order on WhatsApp
          </span>
        </a>

        <a
          href="tel:+919409445443"
          aria-label="Call Customer Support"
          className="bg-[#111111] hover:bg-black active:scale-95 text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2 group transition-all duration-300 hover:pr-4 border border-neutral-800"
        >
          <PhoneCall className="w-5 h-5 text-emerald-400" />
          <span className="hidden group-hover:inline text-xs font-bold whitespace-nowrap">
            Call +91 9409445443
          </span>
        </a>
      </div>
    </div>
  );
}
