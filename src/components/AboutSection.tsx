import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about-section"
      className="w-full bg-white py-16 lg:py-24 border-b border-neutral-100 overflow-hidden"
    >
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT VISUAL PANEL (Exact Founder & Device Showcase with Brand Blue & Website Logo) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center group">
              {/* Top-Left Website Logo Badge */}
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-20">
                <Logo size="md" />
              </div>

              <img
                src="/images/common/about.webp"
                alt="Bharat Parmar Founder & Innovation"
                className="w-full h-auto max-h-[420px] object-contain drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500 select-none"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT CONTENT PANEL (Founder Story, Co-Founder badge, description, CTA) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* 1. Main Heading in Website Brand Blue */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-tight font-sans">
              Bharat Parmar’s Vision & Innovation
            </h2>

            {/* 2. Role Badge */}
            <div className="inline-flex">
              <span className="bg-white border border-neutral-300 text-neutral-800 text-xs sm:text-sm font-semibold px-4 py-1 rounded-md shadow-2xs font-sans">
                Co - Founder
              </span>
            </div>

            {/* 3. Company Description matching exact text from reference */}
            <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed font-sans font-medium">
              <p>
                Established as a Proprietor firm in the year 2017, we{' '}
                <strong className="text-[#111111] font-bold">
                  “Shyam Innovations”
                </strong>{' '}
                are a leading Manufacturer of a wide range of Snake Repellents,
                Ultrasonic Rat Repellent, Ultrasonic Pest Repeller, etc. Situated in
                Surat (Gujarat, India), we have constructed a wide and well functional
                infrastructural unit that plays an important role in the growth of our
                company. We offer these products at reasonable rates and deliver these
                within the promised time-frame. Under the headship of{' '}
                <strong className="text-[#111111] font-bold">
                  “Mr. Bharat M Parmar”
                </strong>{' '}
                (Business Partner), we have gained a huge clientele across the nation.
              </p>
            </div>

            {/* 4. CTA Button (Hero-styled Button with Brand Blue Accent) */}
            <div className="pt-2">
              <a
                href="#footer-section"
                id="about-know-more-btn"
                className="inline-flex items-center justify-between gap-4 bg-[#111111] hover:bg-black active:scale-[0.98] text-white px-5 py-3 rounded-full shadow-xl transition-all duration-200 group cursor-pointer border border-neutral-800 font-sans"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0066FF] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                  <span className="font-extrabold text-sm sm:text-base tracking-wider uppercase text-white font-sans">
                    Know More About Us
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
