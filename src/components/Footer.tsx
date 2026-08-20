import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer
      id="footer-section"
      className="w-full bg-[#0D0D0D] text-neutral-300 pt-16 pb-12 border-t border-neutral-800 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pb-12 border-b border-neutral-800 text-center">
          {/* 1. Industrial Grade Performance */}
          <div className="flex flex-col items-center justify-center text-center group cursor-default p-2">
            <div className="mb-3.5 flex items-center justify-center">
              <img
                src="/trust-badges/industrial-grade.svg"
                alt="Industrial Grade Performance"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]"
                loading="lazy"
              />
            </div>
            <p className="text-[#a3e635] font-extrabold text-xs sm:text-sm md:text-base leading-tight tracking-tight">
              Industrial Grade Performance
            </p>
          </div>

          {/* 2. 50,000+ happy customer */}
          <div className="flex flex-col items-center justify-center text-center group cursor-default p-2">
            <div className="mb-3.5 flex items-center justify-center">
              <img
                src="/trust-badges/happy-customers.svg"
                alt="50,000+ happy customer"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]"
                loading="lazy"
              />
            </div>
            <p className="text-[#a3e635] font-extrabold text-xs sm:text-sm md:text-base leading-tight tracking-tight">
              50,000+ happy customer
            </p>
          </div>

          {/* 3. 7-day money-back guarantee */}
          <div className="flex flex-col items-center justify-center text-center group cursor-default p-2">
            <div className="mb-3.5 flex items-center justify-center">
              <img
                src="/trust-badges/money-back.svg"
                alt="7-day money-back guarantee"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]"
                loading="lazy"
              />
            </div>
            <p className="text-[#a3e635] font-extrabold text-xs sm:text-sm md:text-base leading-tight tracking-tight">
              7-day money-back guarantee
            </p>
          </div>

          {/* 4. Made in india */}
          <div className="flex flex-col items-center justify-center text-center group cursor-default p-2">
            <div className="mb-3.5 flex items-center justify-center">
              <img
                src="/trust-badges/made-in-india.svg"
                alt="Made in india"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]"
                loading="lazy"
              />
            </div>
            <p className="text-[#a3e635] font-extrabold text-xs sm:text-sm md:text-base leading-tight tracking-tight">
              Made in india
            </p>
          </div>
        </div>

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-neutral-800 text-sm">
          {/* Brand & Bio Column (Spans 2 cols on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Manufactured with pride by <strong>Shyam Innovations</strong> (Est. 2017). Advanced ultrasonic rodent deterrent technology safeguarding vehicles, commercial spaces, and residences without chemicals or traps.
            </p>
            <div className="pt-2 text-xs text-neutral-400 space-y-1">
              <p>
                <strong className="text-white">Founder & R&D Lead:</strong> Mr. Bharat M. Parmar
              </p>
              <p>
                <strong className="text-white">Registered Address:</strong> Surat, Gujarat - 395006, India
              </p>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider">
              Spaces
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#bento-grid-section" className="hover:text-white transition-colors">
                  Car & Truck Owners
                </a>
              </li>
              <li>
                <a href="#bento-grid-section" className="hover:text-white transition-colors">
                  Garage & Workshops
                </a>
              </li>
              <li>
                <a href="#bento-grid-section" className="hover:text-white transition-colors">
                  Warehouses & Godowns
                </a>
              </li>
              <li>
                <a href="#bento-grid-section" className="hover:text-white transition-colors">
                  Hotels & Restaurants
                </a>
              </li>
              <li>
                <a href="#bento-grid-section" className="hover:text-white transition-colors">
                  Factories & Industrial
                </a>
              </li>
              <li>
                <a href="#bento-grid-section" className="hover:text-white transition-colors">
                  Hospitals & Clinics
                </a>
              </li>
              <li>
                <a href="#bento-grid-section" className="hover:text-white transition-colors">
                  Home & Kitchens
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#hero-section" className="hover:text-white transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#about-section" className="hover:text-white transition-colors">
                  About Bharat Parmar
                </a>
              </li>
              <li>
                <a href="#product-showcase-section" className="hover:text-white transition-colors">
                  Product Specs
                </a>
              </li>
              <li>
                <a href="#features-tech-section" className="hover:text-white transition-colors">
                  12 Key Features
                </a>
              </li>
              <li>
                <a href="#comparisons-chart-section" className="hover:text-white transition-colors">
                  Comparisons Chart
                </a>
              </li>
              <li>
                <a href="#faq-section" className="hover:text-white transition-colors">
                  FAQ & Installation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Orders */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider">
              Support & Orders
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              <a
                href="tel:+919409445443"
                className="flex items-center gap-2 hover:text-[#0066FF] transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-bold text-white">+91 9409445443</span>
              </a>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>support@ratguardpro.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>Shyam Innovations, Surat, Gujarat - India</span>
              </div>
              <div className="pt-2">
                <span className="inline-block bg-emerald-500/20 text-emerald-300 text-[11px] font-bold px-2.5 py-1 rounded border border-emerald-500/30">
                  Mon - Sat: 10 AM - 7 PM IST
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Payment Badges, Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} RatGuardPro™ by Shyam Innovations. All rights reserved.
          </div>
          {/* Payment Methods */}
          <div className="flex items-center gap-3 text-neutral-400 font-mono text-[11px]">
            <span className="bg-neutral-800 px-2 py-1 rounded text-white font-sans font-bold">
              UPI
            </span>
            <span className="bg-neutral-800 px-2 py-1 rounded text-white font-sans font-bold">
              RuPay
            </span>
            <span className="bg-neutral-800 px-2 py-1 rounded text-white font-sans font-bold">
              VISA / MC
            </span>
            <span className="bg-neutral-800 px-2 py-1 rounded text-emerald-400 font-sans font-bold">
              Cash on Delivery (COD)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
