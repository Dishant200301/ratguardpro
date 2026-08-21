import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  ShoppingCart,
  Truck,
  Zap,
  Flame,
} from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  cartCount?: number;
  onOpenCart?: () => void;
  onNavigateSection: (sectionId: string) => void;
}

const SOLUTIONS_LIST = [
  { label: 'Garage', id: 'garage-sec' },
  { label: 'Hotels', id: 'hotels-sec' },
  { label: 'Hospital', id: 'hospital-sec' },
  { label: 'Factory', id: 'factory-sec' },
  { label: 'Shop', id: 'shop-sec' },
  { label: 'Godown', id: 'godown-sec' },
  { label: 'Car-Truck Owners', id: 'cartruck-sec' },
  { label: 'Home owners', id: 'home-sec' },
];

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateSection,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (sectionId: string) => {
    onNavigateSection(sectionId);
    setIsMobileMenuOpen(false);
    setIsSolutionsOpen(false);
  };

  return (
    <header className="w-full bg-white z-50 sticky top-0 shadow-sm">
      {/* 1. TOP ANNOUNCEMENT BAR (Black #000000 with continuous smooth right-to-left marquee) */}
      <div
        id="top-announcement-bar"
        className="w-full bg-[#000000] text-white py-2 text-xs md:text-sm font-medium overflow-hidden border-b border-neutral-900"
      >
        <div className="relative w-full flex items-center">
          <div className="animate-marquee whitespace-nowrap flex items-center text-white">
            <span className="inline-flex items-center gap-2 px-6">
              <ShoppingCart className="w-3.5 h-3.5 text-white" />
              <span>Order Now</span>
            </span>
            <span className="text-neutral-500">|</span>
            <span className="inline-flex items-center gap-2 px-6">
              <Truck className="w-3.5 h-3.5 text-white" />
              <span>Free COD Available Across India</span>
            </span>
            <span className="text-neutral-500">|</span>
            <span className="inline-flex items-center gap-2 px-6">
              <Zap className="w-3.5 h-3.5 text-white" />
              <span>Delivery in Just 5 Days</span>
            </span>
            <span className="text-neutral-500">|</span>
            <span className="inline-flex items-center gap-2 px-6">
              <Flame className="w-3.5 h-3.5 text-white" />
              <span>Products Upto 50% Off</span>
            </span>
            <span className="text-neutral-500">|</span>
            <span className="inline-flex items-center gap-2 px-6">
              <ShoppingCart className="w-3.5 h-3.5 text-white" />
              <span>Order Now</span>
            </span>
            <span className="text-neutral-500">|</span>
            <span className="inline-flex items-center gap-2 px-6">
              <Truck className="w-3.5 h-3.5 text-white" />
              <span>Free COD Available Across India</span>
            </span>
            <span className="text-neutral-500">|</span>
            <span className="inline-flex items-center gap-2 px-6">
              <Zap className="w-3.5 h-3.5 text-white" />
              <span>Delivery in Just 5 Days</span>
            </span>
            <span className="text-neutral-500">|</span>
            <span className="inline-flex items-center gap-2 px-6">
              <Flame className="w-3.5 h-3.5 text-white" />
              <span>Products Upto 50% Off</span>
            </span>
            <span className="text-neutral-500">|</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR ROW */}
      <nav className="w-full bg-white border-b border-neutral-100">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-18 flex items-center justify-between relative">
          {/* Left Side: Brand Logo (Aligned left on Mobile, Tablet & Desktop) */}
          <div className="flex items-center">
            <a
              href="#hero-section"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('hero-section');
              }}
              className="flex items-center transition-transform duration-200"
            >
              <Logo size="md" />
            </a>
          </div>

          {/* Desktop Center: Navigation Links (Centrally aligned) */}
          <div className="hidden lg:flex items-center space-x-8 font-semibold text-sm text-[#111111] absolute left-1/2 -translate-x-1/2">
            <button
              id="nav-link-home"
              onClick={() => handleNavClick('hero-section')}
              className="hover:text-[#0066FF] transition-colors py-2 cursor-pointer"
            >
              Home
            </button>

            <button
              id="nav-link-about"
              onClick={() => handleNavClick('about-section')}
              className="hover:text-[#0066FF] transition-colors py-2 cursor-pointer"
            >
              About
            </button>

            <button
              id="nav-link-product"
              onClick={() => handleNavClick('product-showcase-section')}
              className="hover:text-[#0066FF] transition-colors py-2 cursor-pointer"
            >
              Product
            </button>

            <button
              id="nav-link-features"
              onClick={() => handleNavClick('features-tech-section')}
              className="hover:text-[#0066FF] transition-colors py-2 cursor-pointer"
            >
              Features
            </button>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                id="nav-dropdown-solutions"
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="flex items-center gap-1 hover:text-[#0066FF] transition-colors py-2 cursor-pointer"
              >
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-neutral-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {SOLUTIONS_LIST.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick('bento-grid-section')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-neutral-700 hover:bg-neutral-50 hover:text-[#0066FF] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              id="nav-link-faq"
              onClick={() => handleNavClick('faq-section')}
              className="hover:text-[#0066FF] transition-colors py-2 cursor-pointer"
            >
              FAQ
            </button>

            <button
              id="nav-link-contact"
              onClick={() => handleNavClick('footer-section')}
              className="hover:text-[#0066FF] transition-colors py-2 cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Mobile / Tablet Right: Hamburger Menu Icon with Smooth Morphing to Close Icon */}
          <div className="flex lg:hidden items-center">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              className="p-2 text-neutral-800 hover:text-[#0066FF] focus:outline-none rounded-lg transition-colors cursor-pointer w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            >
              <span
                className={`w-6 h-0.5 bg-neutral-800 rounded-full transition-all duration-300 ease-in-out transform ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-[#0066FF]' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-neutral-800 rounded-full transition-all duration-200 ease-in-out ${
                  isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-neutral-800 rounded-full transition-all duration-300 ease-in-out transform ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-[#0066FF]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* 3. MOBILE & TABLET FULL-HEIGHT SLIDE-DOWN MENU (Touches screen bottom) */}
      <div
        id="mobile-dropdown-panel"
        className={`lg:hidden absolute top-full left-0 right-0 w-full bg-white z-50 shadow-2xl border-t border-neutral-100 flex flex-col overflow-y-auto transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'visible opacity-100 translate-y-0 pointer-events-auto'
            : 'invisible opacity-0 -translate-y-2 pointer-events-none'
        }`}
        style={{
          height: isMobileMenuOpen ? 'calc(100dvh - 100%)' : '0px',
        }}
      >
        <div className="max-w-[1500px] w-full mx-auto px-5 sm:px-8 py-5 flex flex-col justify-between flex-1 h-full min-h-[calc(100dvh-100%)]">
          {/* Navigation Links */}
          <div className="flex flex-col space-y-1.5 text-base sm:text-lg font-bold text-[#111111] pt-1">
            <button
              onClick={() => handleNavClick('hero-section')}
              className="text-left py-3 px-4 rounded-xl hover:bg-blue-50 hover:text-[#0066FF] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about-section')}
              className="text-left py-3 px-4 rounded-xl hover:bg-blue-50 hover:text-[#0066FF] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('product-showcase-section')}
              className="text-left py-3 px-4 rounded-xl hover:bg-blue-50 hover:text-[#0066FF] transition-colors cursor-pointer"
            >
              Product
            </button>
            <button
              onClick={() => handleNavClick('features-tech-section')}
              className="text-left py-3 px-4 rounded-xl hover:bg-blue-50 hover:text-[#0066FF] transition-colors cursor-pointer"
            >
              Features
            </button>

            {/* Mobile Solutions Collapsible Dropdown */}
            <div className="py-0.5">
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="w-full flex items-center justify-between py-3 px-4 rounded-xl hover:bg-blue-50 hover:text-[#0066FF] transition-colors cursor-pointer"
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isSolutionsOpen ? 'rotate-180 text-[#0066FF]' : 'text-neutral-400'
                  }`}
                />
              </button>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out overflow-hidden ${
                  isSolutionsOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col space-y-1 pt-1 pb-1.5 pl-4 text-sm sm:text-base font-medium text-neutral-700">
                    {SOLUTIONS_LIST.map((sol) => (
                      <button
                        key={sol.label}
                        onClick={() => handleNavClick('bento-grid-section')}
                        className="text-left py-2 px-3 rounded-lg hover:bg-blue-50 hover:text-[#0066FF] transition-colors cursor-pointer"
                      >
                        {sol.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleNavClick('faq-section')}
              className="text-left py-3 px-4 rounded-xl hover:bg-blue-50 hover:text-[#0066FF] transition-colors cursor-pointer"
            >
              FAQ
            </button>
            <button
              onClick={() => handleNavClick('footer-section')}
              className="text-left py-3 px-4 rounded-xl hover:bg-blue-50 hover:text-[#0066FF] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Bottom Support Info pinned to screen bottom */}
          <div className="pt-5 pb-2 mt-auto border-t border-neutral-100 text-xs text-neutral-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-4">
            <div>
              <p className="font-bold text-sm text-black mb-0.5">RatGuardPro Customer Care</p>
              <p className="text-xs text-neutral-500">Mon - Sat: 10:00 AM - 7:00 PM</p>
            </div>
            <a
              href="tel:+919409445443"
              className="font-extrabold text-[#0066FF] text-base hover:underline"
            >
              +91 9409445443
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
