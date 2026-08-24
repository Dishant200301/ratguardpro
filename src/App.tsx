import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { ProductSection } from './components/ProductSection';
import { BentoGridSection } from './components/BentoGridSection';
import { ProductInfoSection } from './components/ProductInfoSection';
import { CategoryCarousel } from './components/CategoryCarousel';
import { FeaturesTechSection } from './components/FeaturesTechSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ShopThroughVideo } from './components/ShopThroughVideo';
import { ComparisonsChart } from './components/ComparisonsChart';
import { FaqSection } from './components/FaqSection';
import { ValuePropositionSection } from './components/ValuePropositionSection';
import { HomeCtaSection } from './components/HomeCtaSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { BuyNowModal } from './components/BuyNowModal';
import { CategorySolutionPage } from './components/CategorySolutionPage';
import { ContactPage } from './components/ContactPage';
import { CATEGORY_SOLUTIONS_DATA } from './data/categorySolutionsData';

type AppRoute =
  | { type: 'home' }
  | { type: 'solution'; slug: string }
  | { type: 'contact' };

export default function App() {
  const [productQuantity, setProductQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);

  // Initialize Route from window.location
  const getInitialRoute = (): AppRoute => {
    if (typeof window === 'undefined') return { type: 'home' };

    const pathname = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();

    // Check contact page
    if (pathname === '/contact' || pathname.startsWith('/contact') || hash.includes('contact')) {
      return { type: 'contact' };
    }

    // Check pathname e.g. /solutions/garage
    if (pathname.includes('/solutions/')) {
      const slug = pathname.split('/solutions/')[1]?.replace(/\/+$/, '');
      if (slug && CATEGORY_SOLUTIONS_DATA[slug]) {
        return { type: 'solution', slug };
      }
    }

    // Check hash fallback e.g. #/solutions/garage or #solutions-garage
    if (hash.includes('solution')) {
      for (const slug of Object.keys(CATEGORY_SOLUTIONS_DATA)) {
        if (hash.includes(slug)) {
          return { type: 'solution', slug };
        }
      }
    }

    return { type: 'home' };
  };

  const [currentRoute, setCurrentRoute] = useState<AppRoute>(getInitialRoute);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const route = getInitialRoute();
      setCurrentRoute(route);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update SEO Document Title dynamically based on current route
  useEffect(() => {
    if (currentRoute.type === 'solution' && CATEGORY_SOLUTIONS_DATA[currentRoute.slug]) {
      const cat = CATEGORY_SOLUTIONS_DATA[currentRoute.slug];
      document.title = `Protect Your ${cat.categoryName} From Rats | Ratguard Ultrasonic Repellent`;
    } else if (currentRoute.type === 'contact') {
      document.title = "Contact Us | RatGuardPro - Get in Touch & Support";
    } else {
      document.title = "RatGuardPro - India's No.1 Ultrasonic Rat Repellent";
    }
  }, [currentRoute]);

  // Instantly scroll to top whenever route changes (no animation)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentRoute]);

  const handleNavigateSolution = (slug: string) => {
    if (CATEGORY_SOLUTIONS_DATA[slug]) {
      window.history.pushState(null, '', `/solutions/${slug}`);
      setCurrentRoute({ type: 'solution', slug });
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };

  const handleNavigateContact = () => {
    window.history.pushState(null, '', '/contact');
    setCurrentRoute({ type: 'contact' });
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleNavigateHome = () => {
    window.history.pushState(null, '', '/');
    setCurrentRoute({ type: 'home' });
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleOpenBuyModal = () => {
    setIsBuyModalOpen(true);
  };

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setProductQuantity((prev) => (prev > 0 ? prev : 1));
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
    if (sectionId === 'hero-section' || sectionId === 'top') {
      if (currentRoute.type !== 'home') {
        handleNavigateHome();
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
      return;
    }

    if (currentRoute.type !== 'home') {
      window.history.pushState(null, '', '/');
      setCurrentRoute({ type: 'home' });
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickAddVideoItem = (_title: string, _price: string) => {
    setIsBuyModalOpen(true);
  };

  const activeCategoryData =
    currentRoute.type === 'solution'
      ? (CATEGORY_SOLUTIONS_DATA[currentRoute.slug] || CATEGORY_SOLUTIONS_DATA.garage)
      : null;

  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans antialiased flex flex-col selection:bg-[#0066FF] selection:text-white">
      {/* 1. STICKY NAVBAR with Announcement Bar & Solutions Dropdown */}
      <Navbar
        cartCount={isAddedToCart ? productQuantity : 0}
        onOpenCart={() => setCartDrawerOpen(true)}
        onNavigateSection={handleNavigateSection}
        onNavigateSolution={handleNavigateSolution}
        onNavigateHome={handleNavigateHome}
        onNavigateContact={handleNavigateContact}
      />

      {/* 2. MAIN CONTENT VIEW: Category Solution Page OR Contact Page OR Homepage */}
      <main className="flex-1 w-full">
        {currentRoute.type === 'solution' && activeCategoryData ? (
          /* ========================================================= */
          /* CATEGORY LANDING PAGE (Garage, Hotels, Hospital, etc.)   */
          /* ========================================================= */
          <CategorySolutionPage
            categoryData={activeCategoryData}
            onBackToHome={handleNavigateHome}
            onNavigateCategory={handleNavigateSolution}
            onOpenBuyModal={handleOpenBuyModal}
            onAddToCart={handleAddToCart}
          />
        ) : currentRoute.type === 'contact' ? (
          /* ========================================================= */
          /* DEDICATED CONTACT US PAGE (Form, Info, Map)               */
          /* ========================================================= */
          <ContactPage onBackToHome={handleNavigateHome} />
        ) : (
          /* ========================================================= */
          /* HOMEPAGE VIEW WITH COMPLETE PRODUCT & CATEGORY SECTIONS   */
          /* ========================================================= */
          <>
            {/* Hero Section */}
            <HeroSection onShopNow={handleOpenBuyModal} />

            {/* Dual Logo Marquee */}
            <MarqueeSection />

            {/* Product Showcase */}
            <ProductSection onBuyNow={handleOpenBuyModal} />

            {/* Bento Grid (Clickable Category Cards) */}
            <BentoGridSection onNavigateSolution={handleNavigateSolution} />

            {/* How It Works Info */}
            <ProductInfoSection onBuyNow={handleOpenBuyModal} />

            {/* Category Carousel (Clickable Category Reels) */}
            <CategoryCarousel onNavigateSolution={handleNavigateSolution} />

            {/* 12-Point Features / Technology */}
            <FeaturesTechSection onBuyNow={handleOpenBuyModal} />

            {/* Interactive Before & After Slider */}
            <BeforeAfterSlider />

            {/* Shop Through Video Section */}
            <ShopThroughVideo onAddToCart={handleQuickAddVideoItem} />

            {/* Comparisons Chart */}
            <ComparisonsChart />

            {/* Value Proposition Highlights */}
            <ValuePropositionSection />

            {/* FAQ Section */}
            <FaqSection />

            {/* Final CTA Card Section */}
            <HomeCtaSection onShopNow={handleOpenBuyModal} />
          </>
        )}
      </main>

      {/* 3. FOOTER SECTION */}
      <Footer
        onNavigateSolution={handleNavigateSolution}
        onNavigateHome={handleNavigateHome}
        onNavigateContact={handleNavigateContact}
      />

      {/* 4. BUY NOW / INQUIRY MODAL */}
      <BuyNowModal
        isOpen={isBuyModalOpen}
        onClose={() => setIsBuyModalOpen(false)}
      />

      {/* 5. CART & QUICK CHECKOUT DRAWER */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        quantity={isAddedToCart ? productQuantity : 0}
        onIncrease={handleIncreaseQty}
        onDecrease={handleDecreaseQty}
        onReset={handleResetCart}
      />
    </div>
  );
}
