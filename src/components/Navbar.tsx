import React, { useState, useEffect } from 'react';
import {
  Search,
  User,
  ShoppingBag,
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
  cartCount: number;
  onOpenCart: () => void;
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
  cartCount,
  onOpenCart,
  onNavigateSection,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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
    <header className="w-full bg-white z-50 sticky top-0 shadow-sm select-none">
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
              className="flex items-center transition-transform duration-200 hover:scale-[1.02]"
            >
              <Logo size="md" />
            </a>
          </div>

          {/* Desktop Center: Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7 font-semibold text-sm text-[#111111]">
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

          {/* Desktop Right Action Icons: Search + Account + Cart (Hidden on Mobile & Tablet) */}
          <div className="hidden lg:flex items-center space-x-3 md:space-x-4">
            {/* Search Icon */}
            <button
              id="navbar-search-btn"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
              className="p-2 text-neutral-700 hover:text-[#0066FF] hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account / User Icon */}
            <button
              id="navbar-account-btn"
              aria-label="My Account"
              onClick={() => alert('Welcome to RatGuardPro Account Portal. Order tracking & fast re-orders are enabled.')}
              className="p-2 text-neutral-700 hover:text-[#0066FF] hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Shopping Cart Icon with Red Badge */}
            <button
              id="navbar-cart-btn"
              onClick={onOpenCart}
              aria-label={`Shopping cart with ${cartCount} items`}
              className="p-2 text-neutral-700 hover:text-[#0066FF] hover:bg-neutral-100 rounded-full transition-colors relative cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              <span
                id="navbar-cart-badge"
                className="absolute -top-0.5 -right-0.5 bg-[#E50914] text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-sm ring-2 ring-white"
              >
                {cartCount}
              </span>
            </button>
          </div>

          {/* Mobile / Tablet Right: Hamburger Menu Icon (Only element on right in mobile & tablet) */}
          <div className="flex lg:hidden items-center">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="p-2 text-neutral-800 hover:text-[#0066FF] focus:outline-none rounded-lg transition-colors cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Search Bar Dropdown */}
        {isSearchOpen && (
          <div
            id="navbar-search-panel"
            className="w-full bg-neutral-50 border-t border-neutral-200 px-4 py-3 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="max-w-3xl mx-auto flex items-center gap-2">
              <Search className="w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search rat repellent models, car protection, warehouse devices..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-sm focus:outline-none text-neutral-800 placeholder-neutral-400 py-1"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-xs text-neutral-500 hover:text-black px-2 py-1"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* 3. MOBILE & TABLET SLIDE-IN MENU PANEL (Smooth right-to-left drawer) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop Overlay */}
          <div
            id="mobile-drawer-backdrop"
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
          />

          {/* White Side Panel */}
          <div
            id="mobile-drawer-panel"
            className="relative w-full max-w-xs sm:max-w-sm bg-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-10 animate-in slide-in-from-right duration-300"
          >
            <div>
              {/* Top Row: Logo + Close Button */}
              <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
                <Logo size="sm" />
                <button
                  id="mobile-menu-close-btn"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-neutral-600 hover:text-black rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-4 pt-6 text-base font-semibold text-[#111111]">
                <button
                  onClick={() => handleNavClick('hero-section')}
                  className="text-left py-2 hover:text-[#0066FF] transition-colors border-b border-neutral-50"
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavClick('about-section')}
                  className="text-left py-2 hover:text-[#0066FF] transition-colors border-b border-neutral-50"
                >
                  About
                </button>
                <button
                  onClick={() => handleNavClick('product-showcase-section')}
                  className="text-left py-2 hover:text-[#0066FF] transition-colors border-b border-neutral-50"
                >
                  Product
                </button>
                <button
                  onClick={() => handleNavClick('bento-grid-section')}
                  className="text-left py-2 hover:text-[#0066FF] transition-colors border-b border-neutral-50"
                >
                  Categories
                </button>
                {/* Mobile Solutions Collapsible Dropdown */}
                <div className="border-b border-neutral-50 pb-2">
                  <button
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                    className="w-full flex items-center justify-between py-2 text-left hover:text-[#0066FF] transition-colors cursor-pointer"
                  >
                    <span>Solutions</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isSolutionsOpen ? 'rotate-180 text-[#0066FF]' : 'text-neutral-400'
                      }`}
                    />
                  </button>

                  {isSolutionsOpen && (
                    <div className="flex flex-col space-y-1 pt-2 pb-1 pl-3 text-sm font-medium text-neutral-700 animate-in fade-in slide-in-from-top-1 duration-200">
                      {SOLUTIONS_LIST.map((sol) => (
                        <button
                          key={sol.label}
                          onClick={() => handleNavClick('bento-grid-section')}
                          className="text-left py-2 px-3 rounded-lg hover:bg-blue-50 hover:text-[#0066FF] transition-all cursor-pointer"
                        >
                          {sol.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleNavClick('faq-section')}
                  className="text-left py-2 hover:text-[#0066FF] transition-colors border-b border-neutral-50 cursor-pointer"
                >
                  FAQ
                </button>
                <button
                  onClick={() => handleNavClick('footer-section')}
                  className="text-left py-2 hover:text-[#0066FF] transition-colors border-b border-neutral-50 cursor-pointer"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Bottom Support Info */}
            <div className="pt-8 border-t border-neutral-100 text-xs text-neutral-500">
              <p className="font-semibold text-black mb-1">RatGuardPro Customer Care</p>
              <p>Mon - Sat: 10:00 AM - 7:00 PM</p>
              <p className="font-bold text-[#0066FF] mt-1">+91 9409445443</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
