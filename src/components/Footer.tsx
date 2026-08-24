import React, { useState, useEffect } from 'react';
import {
  Facebook,
  Instagram,
  X,
  CheckCircle2,
} from 'lucide-react';

interface PolicyModalData {
  title: string;
  subtitle: string;
  content: React.ReactNode;
}

/* Shopify-style Vector Payment Badges */
const UpiBadge = () => (
  <span className="h-7 px-2.5 bg-white rounded-md flex items-center justify-center shadow-xs border border-neutral-200 hover:scale-105 transition-transform select-none">
    <svg className="h-3.5 w-auto" viewBox="0 0 70 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L4 22H11L19 2H12Z" fill="#097939" />
      <path d="M22 2L14 22H21L29 2H22Z" fill="#ED752E" />
      <text x="32" y="17" fill="#111827" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="15" letterSpacing="0.5">UPI</text>
    </svg>
  </span>
);

const RupayBadge = () => (
  <span className="h-7 px-2.5 bg-white rounded-md flex items-center justify-center shadow-xs border border-neutral-200 hover:scale-105 transition-transform select-none">
    <svg className="h-3.5 w-auto" viewBox="0 0 74 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="17" fill="#092042" fontFamily="system-ui, sans-serif" fontWeight="900" fontStyle="italic" fontSize="14">RuPay</text>
      <path d="M56 4L49 20H55L62 4H56Z" fill="#00A0DF" />
      <path d="M62 4L55 20H61L68 4H62Z" fill="#EE7324" />
    </svg>
  </span>
);

const VisaBadge = () => (
  <span className="h-7 px-2.5 bg-white rounded-md flex items-center justify-center shadow-xs border border-neutral-200 hover:scale-105 transition-transform select-none">
    <svg className="h-3.5 w-auto" viewBox="0 0 54 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.2 18.5L23.4 1.5H28.4L25.2 18.5H20.2Z" fill="#1A1F71" />
      <path d="M38.8 1.9C37.8 1.5 36.2 1.1 34.3 1.1C29.6 1.1 26.3 3.6 26.3 7.1C26.3 9.7 28.7 11.2 30.5 12.1C32.3 13 32.9 13.6 32.9 14.4C32.9 15.6 31.5 16.2 30.1 16.2C28.1 16.2 26.9 15.9 25.4 15.2L24.7 14.9L24 19.3C25.3 19.9 27.6 20.4 30 20.4C35 20.4 38.3 17.9 38.3 14.1C38.3 11 36.3 9.4 33.7 8.1C32.2 7.3 31.2 6.8 31.2 5.9C31.2 5.1 32.1 4.3 33.9 4.3C35.5 4.3 36.7 4.7 37.6 5.1L38.1 5.3L38.8 1.9Z" fill="#1A1F71" />
      <path d="M44.7 12.5C45.1 11.4 46.9 6.5 46.9 6.5C46.9 6.5 47.3 5.4 47.5 4.7L47.9 6.4C47.9 6.4 49 11.8 49.3 13.1H44.7V12.5ZM51.4 1.5H47.4C46.2 1.5 45.3 1.9 44.8 3.1L38.3 18.5H43.6L44.7 15.5H51.1L51.7 18.5H56.4L52.3 1.5H51.4Z" fill="#1A1F71" />
      <path d="M15.4 1.5L10.5 13.1L10 10.5C9.1 7.4 6.2 3.9 2.9 2.1L7.4 18.5H12.7L20.6 1.5H15.4Z" fill="#1A1F71" />
      <path d="M5.8 1.5H0.6L0.5 1.7C4.6 2.8 7.9 5.7 9.1 8.7L7.8 2.5C7.5 1.8 6.8 1.5 5.8 1.5Z" fill="#F7B600" />
    </svg>
  </span>
);

const MastercardBadge = () => (
  <span className="h-7 px-2.5 bg-white rounded-md flex items-center justify-center shadow-xs border border-neutral-200 hover:scale-105 transition-transform select-none">
    <svg className="h-4 w-auto" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13" cy="12" r="9" fill="#EB001B" />
      <circle cx="25" cy="12" r="9" fill="#F79E1B" fillOpacity="0.92" />
    </svg>
  </span>
);

const GPayBadge = () => (
  <span className="h-7 px-2.5 bg-white rounded-md flex items-center justify-center shadow-xs border border-neutral-200 hover:scale-105 transition-transform select-none">
    <svg className="h-3.5 w-auto" viewBox="0 0 46 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 7.8v2.4h5.8c-.3 1.4-1.7 3.3-5.8 3.3-3.5 0-6.4-2.9-6.4-6.5S4 0.5 7.5 0.5c2 0 3.3.9 4.1 1.6L13.5 0.2C12.2-.9 10.1-1.5 7.5-1.5 2.8-1.5-.6 2.3-.6 7s3.4 8.5 8.1 8.5c4.3 0 7.2-3 7.2-7.3 0-.5-.1-1-.2-1.3H7.5v.9z" transform="translate(1, 1)" fill="#4285F4" />
      <text x="18" y="13" fill="#3C4043" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="12">Pay</text>
    </svg>
  </span>
);

const CodBadge = () => (
  <span className="h-7 px-2.5 bg-white rounded-md flex items-center gap-1.5 shadow-xs border border-neutral-200 hover:scale-105 transition-transform select-none">
    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
    <span className="text-[11px] font-bold text-emerald-800 tracking-tight uppercase font-sans">
      Cash on Delivery
    </span>
  </span>
);

interface FooterProps {
  onNavigateSolution?: (slug: string) => void;
  onNavigateHome?: () => void;
  onNavigateContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSolution,
  onNavigateHome,
  onNavigateContact,
}) => {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activeModal, setActiveModal] = useState<PolicyModalData | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        setActiveModal(null);
      }
    };

    if (activeModal) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmailInput('');
    }, 2500);
  };

  const handleSmoothScroll = (id: string) => {
    if (id === 'hero-section' || id === 'top') {
      if (onNavigateHome) {
        onNavigateHome();
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }
    if (onNavigateHome) {
      onNavigateHome();
    }
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const openPolicy = (policyKey: string) => {
    switch (policyKey) {
      case 'privacy':
        setActiveModal({
          title: 'Privacy Policy',
          subtitle: 'Last updated: 2026',
          content: (
            <div className="space-y-4 text-neutral-300 text-sm leading-relaxed">
              <p>
                At <strong>Pro</strong> (operated by Shyam Innovations & VAMASHAY), we prioritize your privacy. We strictly collect only the essential shipping information required to deliver your ultrasonic repellent and fulfill your order.
              </p>
              <h4 className="text-white font-bold text-base pt-2">Information We Collect</h4>
              <p>
                When you place a Cash on Delivery (COD) or prepaid order, we collect your name, phone number, delivery address, and pincode to arrange express courier dispatch.
              </p>
              <h4 className="text-white font-bold text-base pt-2">Data Security</h4>
              <p>
                We do not sell, rent, or trade customer contact details with third-party advertising networks. All transaction and customer data is securely processed via 256-bit SSL encryption.
              </p>
            </div>
          ),
        });
        break;

      case 'shipping':
        setActiveModal({
          title: 'Shipping Policy',
          subtitle: 'Fast 3-5 Days Express Delivery across India',
          content: (
            <div className="space-y-4 text-neutral-300 text-sm leading-relaxed">
              <p>
                We provide <strong>Free Express Shipping</strong> across all PIN codes in India.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-neutral-300">
                <li><strong>Order Dispatch:</strong> Dispatched within 24 hours of order confirmation.</li>
                <li><strong>Delivery Timeline:</strong> Major metro cities receive delivery in 3 to 4 business days; rest of India in 4 to 6 business days.</li>
                <li><strong>Tracking:</strong> Live WhatsApp and SMS tracking links are automatically sent upon courier pickup.</li>
                <li><strong>COD Service:</strong> Zero extra fee for Cash on Delivery across 19,000+ pincodes.</li>
              </ul>
            </div>
          ),
        });
        break;

      case 'return':
        setActiveModal({
          title: 'Return & Refund Policy',
          subtitle: '7-Day 100% Money-Back Guarantee',
          content: (
            <div className="space-y-4 text-neutral-300 text-sm leading-relaxed">
              <p>
                We stand firmly behind the ultrasonic efficacy of Pro. If you are not completely satisfied with the product performance, you are entitled to our 7-day risk-free money-back guarantee.
              </p>
              <h4 className="text-white font-bold text-base pt-2">How Returns Work</h4>
              <p>
                1. Contact our support team via WhatsApp or phone (+91 9409445443) within 7 days of receiving the package.<br />
                2. Our courier team will arrange reverse doorstep pickup.<br />
                3. Upon receipt and basic inspection, full refund is credited via UPI / Bank Transfer within 48 hours.
              </p>
            </div>
          ),
        });
        break;

      case 'terms':
        setActiveModal({
          title: 'Terms and Conditions',
          subtitle: 'User Agreement & Purchase Terms',
          content: (
            <div className="space-y-4 text-neutral-300 text-sm leading-relaxed">
              <p>
                By accessing or purchasing from Pro, you agree to comply with Indian e-commerce consumer guidelines and our fair usage standards.
              </p>
              <p>
                Pro is engineered for pest deterrent purposes using non-lethal, high-frequency ultrasonic waves. The device must be connected to standard 220V AC household/commercial outlets as per the included instruction card.
              </p>
            </div>
          ),
        });
        break;

      case 'legal':
        setActiveModal({
          title: 'Legal Policy & Compliance',
          subtitle: 'Registered Manufacturing & Trademarks',
          content: (
            <div className="space-y-4 text-neutral-300 text-sm leading-relaxed">
              <p>
                <strong>Brand Name:</strong>  / Pro<br />
                <strong>Trade Name:</strong> VAMASHAY & SHYAM INNOVATIONS (Est. 2017)<br />
                <strong>Registered Office:</strong> Plot No C/25, 1st Floor, Shyamdham Society, Vijayraj Circle, Singanpore Road, Surat, Gujarat - 395004, India.
              </p>
              <p>
                All brand logos, graphics, and ultrasonic circuit schematics are proprietary intellectual property.
              </p>
            </div>
          ),
        });
        break;

      case 'disclaimer':
        setActiveModal({
          title: 'Product Performance Disclaimer',
          subtitle: 'Safe, Non-Lethal Ultrasonic Sound Technology',
          content: (
            <div className="space-y-4 text-neutral-300 text-sm leading-relaxed">
              <p>
                Pro emits specialized ultrasonic frequency sound waves (20 kHz to 65 kHz) which disrupt the auditory and nervous systems of rodents (rats, mice).
              </p>
              <p>
                The frequency is completely inaudible and 100% safe for humans, children, cats, dogs, and birds. It does not penetrate solid brick/concrete walls, so we recommend 1 unit per room or vehicle bonnet space for maximum coverage.
              </p>
            </div>
          ),
        });
        break;

      case 'warranty':
        setActiveModal({
          title: '1 Year Replacement Warranty',
          subtitle: 'Hassle-Free Doorstep Replacement',
          content: (
            <div className="space-y-4 text-neutral-300 text-sm leading-relaxed">
              <p>
                Every Pro unit comes with an official <strong>1-Year Hassle-Free Instant Replacement Warranty</strong> covering any manufacturing defects or electronic component failures.
              </p>
              <p>
                In the rare case of any malfunction, simply WhatsApp our support helpline with your order number, and a replacement unit will be dispatched immediately.
              </p>
            </div>
          ),
        });
        break;

      case 'installation':
        setActiveModal({
          title: 'Installation & Placement Guide',
          subtitle: 'Maximize Ultrasonic Coverage in Any Space',
          content: (
            <div className="space-y-4 text-neutral-300 text-sm leading-relaxed">
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Home & Kitchens:</strong> Plug in 20cm to 80cm above the floor facing open areas. Keep clear of thick curtains or large blocking furniture.</li>
                <li><strong>Car Engine Bay:</strong> Mount in the engine compartment with the speaker pointing toward the open wiring harness.</li>
                <li><strong>Warehouses & Godowns:</strong> Place 1 unit every 800 - 1,000 sq.ft for complete multi-directional pest deterrence.</li>
                <li><strong>Continuous Operation:</strong> Keep plugged in 24/7. Consumes under 3 Watts (less than ₹15 electricity per month).</li>
              </ul>
            </div>
          ),
        });
        break;

      case '404':
        setActiveModal({
          title: '404 Page Preview',
          subtitle: 'Page Not Found Simulation',
          content: (
            <div className="text-center py-6 space-y-4">
              <div className="text-6xl font-black text-white tracking-widest">404</div>
              <p className="text-neutral-300 text-sm max-w-sm mx-auto">
                The requested URL does not exist or has been moved. Return to the homepage to explore ultrasonic repellent solutions.
              </p>
              <button
                onClick={() => {
                  setActiveModal(null);
                  handleSmoothScroll('hero-section');
                }}
                className="bg-[#0066FF] hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full transition-all cursor-pointer"
              >
                Back to Home
              </button>
            </div>
          ),
        });
        break;

      default:
        break;
    }
  };

  return (
    <footer
      id="footer-section"
      className="w-full bg-[#111111] text-neutral-300 pt-10 pb-10 border-t border-neutral-800 font-sans"
    >
      {/* 1. TOP TRUST HIGHLIGHTS BAR - FULL SCREEN-WIDTH BORDER */}
      <div className="w-full border-b border-neutral-800 pb-10 mb-2">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {/* 1. Industrial Grade Performance */}
            <div className="flex flex-col items-center justify-center text-center group cursor-default p-2">
              <div className="mb-3 flex items-center justify-center">
                <img
                  src="/images/icons/factory.webp"
                  alt="Industrial Grade Performance"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                  loading="lazy"
                />
              </div>
              <p className="text-white font-medium text-xs sm:text-sm md:text-base leading-tight tracking-tight">
                Industrial Grade Performance
              </p>
            </div>

            {/* 2. 50,000+ happy customer */}
            <div className="flex flex-col items-center justify-center text-center group cursor-default p-2">
              <div className="mb-3 flex items-center justify-center">
                <img
                  src="/images/icons/user.webp"
                  alt="50,000+ happy customer"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                  loading="lazy"
                />
              </div>
              <p className="text-white font-extrabold text-xs sm:text-sm md:text-base leading-tight tracking-tight">
                50,000+ happy customer
              </p>
            </div>

            {/* 3. 7-day money-back guarantee */}
            <div className="flex flex-col items-center justify-center text-center group cursor-default p-2">
              <div className="mb-3 flex items-center justify-center">
                <img
                  src="/images/icons/money.webp"
                  alt="7-day money-back guarantee"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                  loading="lazy"
                />
              </div>
              <p className="text-white font-extrabold text-xs sm:text-sm md:text-base leading-tight tracking-tight">
                7-day money-back guarantee
              </p>
            </div>

            {/* 4. Made in india */}
            <div className="flex flex-col items-center justify-center text-center group cursor-default p-2">
              <div className="mb-3 flex items-center justify-center">
                <img
                  src="/images/icons/made-in-india.webp"
                  alt="Made in india"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                  loading="lazy"
                />
              </div>
              <p className="text-white font-extrabold text-xs sm:text-sm md:text-base leading-tight tracking-tight">
                Made in india
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT GRID */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 py-10 border-b border-neutral-800 text-sm">
          {/* COLUMN 1: LOGO & REGISTERED BUSINESS DETAILS */}
          <div className="col-span-2 md:col-span-1 lg:col-span-4 order-2 md:order-1 lg:order-1 space-y-3 sm:space-y-4">
            {/* Original Brand Logo */}
            <div className="flex items-center gap-3 select-none">
              <img
                src="/apple-touch-icon.webp"
                alt="Pro Logo"
                className="w-11 h-11 object-contain rounded-xl shadow-md transition-transform duration-200 hover:scale-105"
                loading="lazy"
              />
              <span className="text-2xl font-semibold tracking-tight text-white font-sans">
                <span className="text-[#0066FF]">Pro</span>
              </span>
            </div>

            {/* Business Contact Lines */}
            <div className="text-xs text-neutral-300 space-y-1.5 pt-1 leading-relaxed">
              <p>
                <span className="text-neutral-400">Brand name:</span> <strong className="text-white">Pro</strong>
              </p>
              <p>
                <span className="text-neutral-400">Trade name:</span> <strong className="text-white">VAMASHAY</strong>
              </p>
              <p className="text-neutral-300">
                Monday–Saturday 10am–7pm
              </p>
              <p>
                <a
                  href="tel:+919409445443"
                  className="text-white font-medium hover:text-[#0066FF] transition-colors inline-block footer-link-animated"
                >
                  +91 9409445443
                </a>
              </p>
              <p className="text-neutral-400 text-[11px] leading-normal pt-1 max-w-xs">
                Plot No C/25, 1st Floor, Shyamdham Society, Vijayraj Circle, Singanpore Road, 395004, Surat, Gujarat India
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-300 hover:border-[#0066FF] hover:text-[#0066FF] hover:bg-[#0066FF]/10 transition-all"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-300 hover:border-[#0066FF] hover:text-[#0066FF] hover:bg-[#0066FF]/10 transition-all"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: STAY IN TOUCH NEWSLETTER FORM (Directly below trust bar on mobile, top-right on tablet, far right on desktop) */}
          <div className="col-span-2 md:col-span-1 lg:col-span-3 order-1 md:order-2 lg:order-4 space-y-3 sm:space-y-4">
            <h4 className="text-white font-bold text-base tracking-tight">
              Stay in touch...
            </h4>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Subscribe and be the first to know about exclusive offers, products, promotions & more
            </p>

            {/* Newsletter Pill Container */}
            <form onSubmit={handleSubscribe} className="pt-1">
              <div className="relative flex items-center bg-[#242424] border border-neutral-700/60 rounded-full p-1 pl-4 sm:pl-5 focus-within:border-[#0066FF] transition-colors shadow-inner">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-neutral-400 focus:outline-none pr-2"
                />
                <button
                  type="submit"
                  className="bg-[#0066FF] hover:bg-blue-600 active:scale-95 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all shrink-0 cursor-pointer shadow-md shadow-blue-500/20"
                >
                  Send
                </button>
              </div>
              {isSubscribed && (
                <div className="flex items-center gap-1.5 text-blue-400 text-xs mt-2 font-semibold animate-in fade-in duration-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Thank you for subscribing!</span>
                </div>
              )}
            </form>
          </div>

          {/* COLUMN 3: QUICK LINK (Left column in 2-col mobile, Bottom-Left on Tablet, Col 2 on Desktop) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 order-3 lg:order-2 space-y-3">
            <h4 className="text-white font-bold text-base tracking-tight mb-3">
              Quick Link
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
              <li>
                <button
                  onClick={() => handleSmoothScroll('hero-section')}
                  className="footer-link-animated hover:text-[#0066FF] transition-colors cursor-pointer text-left font-medium"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSmoothScroll('about-section')}
                  className="footer-link-animated hover:text-[#0066FF] transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onNavigateContact) {
                      onNavigateContact();
                    } else {
                      handleSmoothScroll('footer-section');
                    }
                  }}
                  className="footer-link-animated hover:text-[#0066FF] transition-colors cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSmoothScroll('product-showcase-section')}
                  className="footer-link-animated hover:text-[#0066FF] transition-colors cursor-pointer text-left"
                >
                  Product page
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSmoothScroll('faq-section')}
                  className="footer-link-animated hover:text-[#0066FF] transition-colors cursor-pointer text-left"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: POLICIES PAGES (Right column in 2-col mobile, Bottom-Right on Tablet, Col 3 on Desktop) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3 order-4 lg:order-3 space-y-3">
            <h4 className="text-white font-bold text-base tracking-tight mb-3">
              Policies Pages
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
              <li>
                <button
                  onClick={() => openPolicy('privacy')}
                  className="footer-link-animated hover:text-[#0066FF] transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => openPolicy('shipping')}
                  className="footer-link-animated hover:text-[#0066FF] transition-colors cursor-pointer text-left"
                >
                  Shipping Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => openPolicy('return')}
                  className="footer-link-animated hover:text-[#0066FF] transition-colors cursor-pointer text-left"
                >
                  Return Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => openPolicy('terms')}
                  className="footer-link-animated hover:text-[#0066FF] transition-colors cursor-pointer text-left"
                >
                  Terms and Conditions
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. BOTTOM ROW: COPYRIGHT & SHOPIFY-STYLE PAYMENT BADGES */}
        <div className="pt-8 flex flex-col lg:flex-row items-center lg:justify-between gap-4 text-xs text-neutral-500">
          <div className="order-1 text-center lg:text-left">
            © {new Date().getFullYear()} Pro™ by Shyam Innovations & VAMASHAY. All rights reserved.
          </div>
          {/* Shopify-Style Realistic Payment Cards (Below copyright on mobile/tablet, right-aligned on desktop) */}
          <div className="order-2 flex flex-wrap items-center justify-center lg:justify-end gap-2.5">
            <UpiBadge />
            <RupayBadge />
            <VisaBadge />
            <MastercardBadge />
            <GPayBadge />
            <CodBadge />
          </div>
        </div>
      </div>

      {/* POLICY POPUP MODAL DIALOG */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            onClick={() => setActiveModal(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity duration-200"
          />

          {/* Modal Card */}
          <div className="relative w-full max-w-lg bg-[#141414] border border-neutral-800 rounded-2xl p-6 sm:p-7 shadow-2xl text-left z-10 max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-neutral-800 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {activeModal.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {activeModal.subtitle}
                </p>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                aria-label="Close modal"
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="pb-4">
              {activeModal.content}
            </div>

            <div className="pt-4 border-t border-neutral-800 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs px-5 py-2 rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
