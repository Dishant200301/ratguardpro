import React from 'react';
import { ArrowRight, Award, ShieldCheck, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about-section"
      className="w-full bg-white py-16 lg:py-24 border-b border-neutral-100 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT VISUAL PANEL (Layered Founder & Product with Vibrant Green Backgrounds) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start relative">
            {/* Top Logo */}
            <div className="mb-6">
              <Logo size="lg" />
            </div>

            {/* Layered Founder Showcase Cards with Green Backgrounds */}
            <div className="relative w-full max-w-md h-96 sm:h-[420px] flex items-center justify-center">
              {/* Green Card 1: Top-Right Founder with Ultrasonic Device */}
              <div className="absolute top-0 right-2 sm:right-6 w-56 sm:w-64 h-64 sm:h-72 bg-[#52C41A] rounded-3xl p-4 shadow-xl flex flex-col justify-between overflow-hidden group">
                <div className="flex justify-between items-center text-white text-xs font-bold">
                  <span className="bg-black/20 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                    Shyam Innovations
                  </span>
                  <Award className="w-4 h-4 text-white" />
                </div>

                <div className="relative z-10 flex flex-col items-center my-auto">
                  {/* Stylized Founder Visual Image */}
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
                    alt="Bharat Parmar Founder"
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-white shadow-lg mb-2"
                  />
                  <span className="text-white font-extrabold text-sm sm:text-base tracking-tight text-center">
                    Bharat M. Parmar
                  </span>
                  <span className="text-white/90 text-xs font-medium">
                    Innovator & Co-Founder
                  </span>
                </div>

                <div className="bg-white text-[#111111] text-[10px] font-bold py-1 px-2.5 rounded-lg text-center shadow-xs">
                  Ultrasonic R&D Leader
                </div>
              </div>

              {/* Green Card 2: Lower-Left Layered Product Innovation Card */}
              <div className="absolute bottom-0 left-0 sm:left-4 w-52 sm:w-60 h-52 sm:h-60 bg-[#44AD13] rounded-3xl p-4 shadow-2xl flex flex-col justify-between overflow-hidden border-4 border-white">
                <div className="flex items-center gap-1.5 text-white text-xs font-extrabold">
                  <ShieldCheck className="w-4 h-4 text-yellow-300" />
                  <span>Made in Surat, Gujarat</span>
                </div>

                <div className="flex flex-col items-center justify-center my-auto text-white text-center">
                  <div className="text-2xl sm:text-3xl font-black tracking-tight">
                    Since 2017
                  </div>
                  <p className="text-xs text-white/90 font-medium mt-1">
                    50,000+ Units Shipped Nationwide
                  </p>
                </div>

                <div className="flex items-center justify-between text-[10px] font-bold text-white bg-black/25 px-2.5 py-1 rounded-lg">
                  <span>ISO Certified R&D</span>
                  <span>100% Non-Toxic</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT PANEL (Founder Story, Co-Founder badge, description, CTA) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* 1. Main Heading in Bright Green */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#52C41A] tracking-tight leading-tight">
              Bharat Parmar’s Vision & Innovation
            </h2>

            {/* 2. Role Badge */}
            <div className="inline-flex">
              <span className="bg-white border border-neutral-300 text-neutral-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-lg shadow-2xs">
                Co - Founder
              </span>
            </div>

            {/* 3. Company Description */}
            <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
              <p>
                Established as a Proprietor firm in the year 2017, we{' '}
                <strong className="text-[#111111] font-bold">
                  “Shyam Innovations”
                </strong>{' '}
                are a leading Manufacturer of a wide range of Snake Repellents,
                Ultrasonic Rat Repellent, Ultrasonic Pest Repeller, etc.
              </p>
              <p>
                Situated in Surat (Gujarat, India), we have constructed a wide and
                well functional infrastructural unit that plays an important role in
                the growth of our company. We offer these products at reasonable rates
                and deliver these within the promised time-frame.
              </p>
              <p>
                Under the headship of{' '}
                <strong className="text-[#111111] font-bold">
                  “Mr. Bharat M Parmar”
                </strong>{' '}
                (Business Partner), we have gained a huge clientele across the
                nation.
              </p>
            </div>

            {/* Key Quality Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3">
                <div className="text-xs text-neutral-400 font-bold uppercase">Experience</div>
                <div className="text-xl font-black text-[#111111] mt-0.5">8+ Years</div>
              </div>
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3">
                <div className="text-xs text-neutral-400 font-bold uppercase">Manufacturing</div>
                <div className="text-xl font-black text-[#111111] mt-0.5">Surat, Gujarat</div>
              </div>
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3 col-span-2 sm:col-span-1">
                <div className="text-xs text-neutral-400 font-bold uppercase">Warranty</div>
                <div className="text-xl font-black text-[#52C41A] mt-0.5">100% Guaranteed</div>
              </div>
            </div>

            {/* 4. CTA Button (Green button matching reference) */}
            <div className="pt-2">
              <a
                href="#footer-section"
                id="about-know-more-btn"
                className="inline-flex items-center gap-3 bg-[#52C41A] hover:bg-[#45a816] active:bg-[#398c12] text-white text-sm sm:text-base font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-green-500/20 transition-all duration-200 group transform hover:-translate-y-0.5"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
