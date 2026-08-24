import React, { useState, useEffect } from 'react';
import {
  Shield,
  Zap,
  CheckCircle2,
  Plug,
  Clock,
  VolumeX,
  Sparkles,
  AlertTriangle,
  Flame,
  Wrench,
  Package,
  Layers,
  HeartPulse,
  DollarSign,
  Car,
  Home,
  Check,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShoppingCart,
  Play,
  Leaf,
  ShieldCheck,
  Plus,
  Minus,
  Scale,
  X,
  Radio,
  Cpu,
  Volume2,
  RotateCcw,
} from 'lucide-react';
import { SolutionCategoryData } from '../data/categorySolutionsData';
import { OurSolutionSection } from './OurSolutionSection';
import { ProductSection } from './ProductSection';

interface CategorySolutionPageProps {
  categoryData: SolutionCategoryData;
  onBackToHome: () => void;
  onNavigateCategory: (slug: string) => void;
  onOpenBuyModal: () => void;
  onAddToCart: () => void;
}

export const CategorySolutionPage: React.FC<CategorySolutionPageProps> = ({
  categoryData,
  onBackToHome,
  onOpenBuyModal,
  onAddToCart,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [problemSlideIndex, setProblemSlideIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);

  // Responsive items per view for problem slider: Mobile 1, Tablet 2, Laptop 3, Desktop 5
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1); // Mobile: 1 card
      } else if (width < 1024) {
        setVisibleCount(2); // Tablet: 2 cards
      } else if (width < 1280) {
        setVisibleCount(3); // Laptop: 3 cards
      } else {
        setVisibleCount(5); // Desktop: 5 cards
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  // Instant scroll-to-top whenever a category changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [categoryData.slug]);

  const maxSlideIndex = Math.max(0, categoryData.problems.length - visibleCount);

  const handlePrevProblem = () => {
    setProblemSlideIndex((prev) => (prev <= 0 ? maxSlideIndex : prev - 1));
  };

  const handleNextProblem = () => {
    setProblemSlideIndex((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Helper to render problem icons (White icon on brand blue circle)
  const renderProblemIcon = (icon: string) => {
    const iconClass = "w-6 h-6 text-white";
    switch (icon) {
      case 'wire':
        return <Zap className={iconClass} />;
      case 'engine':
        return <Flame className={iconClass} />;
      case 'car':
        return <Car className={iconClass} />;
      case 'nest':
        return <Layers className={iconClass} />;
      case 'health':
        return <HeartPulse className={iconClass} />;
      case 'money':
        return <DollarSign className={iconClass} />;
      case 'smell':
        return <VolumeX className={iconClass} />;
      case 'food':
        return <Package className={iconClass} />;
      case 'alert':
        return <AlertTriangle className={iconClass} />;
      case 'tool':
        return <Wrench className={iconClass} />;
      case 'box':
        return <Package className={iconClass} />;
      case 'shield':
        return <Shield className={iconClass} />;
      default:
        return <Shield className={iconClass} />;
    }
  };

  // Helper to render benefit icons matching website brand colors
  const renderBenefitIcon = (icon: string) => {
    const iconClass = "w-6 h-6 md:w-7 md:h-7 text-[#0066FF]";
    switch (icon) {
      case 'wide':
        return <Radio className={iconClass} />;
      case 'plug':
        return <Plug className={iconClass} />;
      case 'clock':
        return <Clock className={iconClass} />;
      case 'safe':
        return <ShieldCheck className={iconClass} />;
      case 'shield':
        return <Shield className={iconClass} />;
      case 'eco':
        return <CheckCircle2 className={iconClass} />;
      case 'tool':
        return <Wrench className={iconClass} />;
      case 'money':
        return <DollarSign className={iconClass} />;
      case 'food':
        return <Package className={iconClass} />;
      case 'car':
        return <Car className={iconClass} />;
      case 'india':
        return <ShieldCheck className={iconClass} />;
      default:
        return <ShieldCheck className={iconClass} />;
    }
  };

  const renderHeroFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'play':
        return <Play className="w-4 h-4 text-white fill-current translate-x-0.5" />;
      case 'power':
        return <Zap className="w-4 h-4 text-white fill-current" />;
      case 'eco':
        return <Leaf className="w-4 h-4 text-white" />;
      case 'water':
        return <ShieldCheck className="w-4 h-4 text-white" />;
      default:
        return <Zap className="w-4 h-4 text-white" />;
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white text-[#111111] font-sans antialiased overflow-x-hidden selection:bg-[#0066FF] selection:text-white">

      {/* ========================================================= */}
      {/* 1. HERO SECTION (Matches Home Hero Design Exactly)        */}
      {/* ========================================================= */}
      <section
        id="category-hero-section"
        className="relative w-full h-[85vh] min-h-[580px] max-h-[850px] bg-[#0A0A0A] overflow-hidden flex flex-col justify-between"
      >
        {/* Full Width Background Image with smooth subtle scale */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out scale-105"
          style={{
            backgroundImage: `url(${categoryData.heroBgImage})`,
          }}
        />
        {/* Gradient Overlay (Dark left for high text readability) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/40 to-black/10 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

        {/* Top Breadcrumb Navigation */}
        {/* <div className="relative z-20 w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-6">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300 font-medium">
            <button
              onClick={onBackToHome}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-500" />
            <button
              onClick={onBackToHome}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Solutions
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-500" />
            <span className="text-[#0066FF] font-semibold">{categoryData.categoryName}</span>
          </nav>
        </div> */}

        {/* Main Hero Content Area (Aligned Left Exactly like Home Hero) */}
        <div className="relative z-20 w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center flex-1 my-auto">
          <div className="max-w-xl lg:max-w-2xl text-white space-y-5 py-6 md:ml-0">

            {/* 1. Main Heading (Strictly 2 lines across all screen sizes, Capitalized) */}
            <h1 className="text-[1.65rem] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.15] font-sans drop-shadow-lg capitalize">
              <span className="block whitespace-nowrap">
                Protect Your {categoryData.categoryName.toLowerCase()}
              </span>
              <span className="inline-flex items-center gap-2 mt-1 sm:mt-2">
                <span className="bg-[#0066FF] text-white px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md shadow-xl font-bold whitespace-nowrap normal-case">
                  From Rats
                </span>
              </span>
            </h1>

            {/* 2. Horizontal Accent Line */}
            <div className="w-full max-w-sm sm:max-w-md h-1 bg-[#0066FF] rounded-full relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-white rounded-full" />
            </div>

            {/* 3. Subtitle / Paragraph */}
            <p className="text-neutral-200 text-sm sm:text-base font-medium leading-relaxed font-sans max-w-lg">
              {categoryData.heroSubheading}
            </p>

            {/* 4. Features 2 BY 2 GRID */}
            <div className="grid md:grid-cols-2 gap-1.5 md:gap-2 max-w-lg pt-0 pb-0 md:pt-1 md:pb-3">
              {[
                { icon: 'play', label: 'Plug & Play' },
                { icon: 'power', label: 'Low Power' },
                { icon: 'eco', label: 'Eco & Chemical Free' },
                { icon: 'water', label: 'Water & Heat Proof' },
              ].map((feature, fIdx) => (
                <div
                  key={fIdx}
                  className="flex items-center gap-3 px-0 md:pr-3.5 py-1 md:py-2.5 rounded-2xl shadow-xs hover:border-[#0066FF]/60 transition-colors"
                >
                  {/* Circle Icon Badge in #0066FF */}
                  <div className="w-8 h-8 rounded-full bg-[#0066FF] flex items-center justify-center shrink-0 shadow-md">
                    {renderHeroFeatureIcon(feature.icon)}
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide font-sans whitespace-nowrap">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            {/* 5. Shop Now Button (Matching Homepage Hero Design) */}
            <div className="pt-1.5 md:pt-2 flex justify-start">
              <button
                id="category-hero-shop-now-btn"
                onClick={onOpenBuyModal}
                className="inline-flex items-center gap-3 sm:gap-5 bg-[#0D0D0D] hover:bg-black active:scale-[0.98] text-white pl-1.5 pr-4 py-1.5 sm:pl-2 sm:pr-5 sm:py-2 rounded-full shadow-2xl transition-all duration-200 group cursor-pointer border border-neutral-800"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0066FF] flex items-center justify-center text-white shrink-0 shadow-md transition-transform">
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="font-bold text-sm sm:text-base tracking-wider text-white font-sans whitespace-nowrap">
                  Shop now
                </span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        </div>

        {/* Subtle Bottom Accent Spacer */}
        <div className="relative z-20 pb-4" />
      </section>

      {/* ========================================================= */}
      {/* 2. RAT PROBLEM SECTION (Exact Image Match + Responsive Slider) */}
      {/* ========================================================= */}
      <section id="problem-section" className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Centered Heading Matching Reference Image */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#111111] tracking-wider font-sans">
              {categoryData.problemSectionTitle}
            </h2>
          </div>

          {/* Responsive Slider Container with Side Arrows & Bottom Dots */}
          <div className="relative w-full group/slider">

            {/* Left Navigation Arrow */}
            {maxSlideIndex > 0 && (
              <button
                onClick={handlePrevProblem}
                aria-label="Previous Problem Card"
                className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-neutral-200 shadow-md flex items-center justify-center text-neutral-800 hover:text-white hover:bg-[#0066FF] hover:border-[#0066FF] active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

            {/* Slider Cards Track */}
            <div className="overflow-hidden w-full py-2">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${problemSlideIndex * (100 / visibleCount)}%)`,
                }}
              >
                {categoryData.problems.map((problem) => (
                  <div
                    key={problem.id}
                    className="shrink-0 px-2 sm:px-2.5"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-neutral-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col items-center text-center h-full justify-start min-h-[220px]">
                      {/* Website Brand Blue Circular Icon Badge */}
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#0066FF] flex items-center justify-center text-white mb-4 shadow-md shadow-blue-500/20 shrink-0">
                        {renderProblemIcon(problem.icon)}
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-[#111111] tracking-tight mb-2 font-sans line-clamp-1 w-full" title={problem.title}>
                        {problem.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans line-clamp-4 min-h-[4.5rem] sm:min-h-[5rem] flex items-start justify-center">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Navigation Arrow */}
            {maxSlideIndex > 0 && (
              <button
                onClick={handleNextProblem}
                aria-label="Next Problem Card"
                className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-neutral-200 shadow-md flex items-center justify-center text-neutral-800 hover:text-white hover:bg-[#0066FF] hover:border-[#0066FF] active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

          </div>

          {/* Bottom Center Pagination Dots */}
          {maxSlideIndex > 0 && (
            <div className="flex items-center justify-center gap-1.5 mt-6 sm:mt-8">
              {Array.from({ length: maxSlideIndex + 1 }).map((_, dotIdx) => {
                const isActive = dotIdx === problemSlideIndex;
                return (
                  <button
                    key={dotIdx}
                    onClick={() => setProblemSlideIndex(dotIdx)}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${isActive
                      ? 'w-7 h-2 bg-[#0066FF] shadow-xs shadow-blue-500/30'
                      : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-400'
                      }`}
                  />
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. OUR SOLUTION (3-Column Layout + Bottom Feature Strip)  */}
      {/* ========================================================= */}
      <OurSolutionSection
        categorySubtitle={categoryData.solutionSubtitle}
        solutionPoints={categoryData.solutionPoints}
        productImage="/images/home/product/product.webp"
        onBuyNow={onOpenBuyModal}
      />

      {/* ========================================================= */}
      {/* 4. WHY CHOOSE RATGUARD FOR YOUR [CATEGORY]                 */}
      {/* ========================================================= */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top Pill, Title & Subtitle */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-[11px] font-semibold tracking-wider font-sans inline-flex items-center gap-1.5 text-[#0066FF] bg-blue-50/80 px-3.5 py-1.5 rounded-full border border-blue-200/80 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>Engineered for Excellence</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-[#111111] tracking-tight font-sans mt-3">
              {categoryData.whyChooseTitle.toLowerCase().includes('ratguard') ? (
                (() => {
                  const title = categoryData.whyChooseTitle;
                  const match = title.match(/ratguard/i);
                  if (match && match.index !== undefined) {
                    const before = title.substring(0, match.index);
                    const after = title.substring(match.index + match[0].length);
                    return (
                      <>
                        {before}
                        <span className="text-[#0066FF]">RatGuard</span>
                        {after}
                      </>
                    );
                  }
                  return title;
                })()
              ) : (
                categoryData.whyChooseTitle
              )}
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base mt-2.5 font-medium">
              Proven, chemical-free technology built for total long-term reliability.
            </p>
          </div>

          {/* 6 Benefit Cards Grid: 3 cols on Desktop, 2 cols on Tablet, 1 col on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {categoryData.benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-white hover:bg-neutral-50/60 rounded-2xl p-4 sm:p-6 border border-neutral-200/80 hover:border-blue-300 hover:shadow-md transition-all duration-300 flex items-start gap-4 sm:gap-4.5"
              >
                {/* Left: Rounded Square Icon Box */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-blue-50/70 border border-blue-100/90 flex items-center justify-center shrink-0 shadow-2xs">
                  {renderBenefitIcon(benefit.icon)}
                </div>

                {/* Right: Title, Accent Line & Description */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <h3 className="text-sm sm:text-md font-semibold text-[#111111] tracking-tight leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5 & 6. HOW IT WORKS & WHERE TO INSTALL (Side-by-Side Grid) */}
      {/* ========================================================= */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 ">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-14 items-start">

            {/* LEFT COLUMN: HOW IT WORKS (3 Step Cards with Illustrations & Arrows) */}
            <div className="xl:col-span-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111111] tracking-tight uppercase text-center mb-8 sm:mb-10 font-sans">
                HOW IT WORKS
              </h3>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2 relative">

                {/* Step 1 */}
                <div className="relative w-full sm:w-[31%] bg-white rounded-2xl p-3.5 sm:p-4 lg:p-5 border border-neutral-200/90 shadow-2xs flex flex-col items-center text-center pt-6 sm:pt-7 min-h-[220px] sm:min-h-[240px] justify-between">
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#0066FF] text-white font-bold text-xs flex items-center justify-center shadow-xs">
                    1
                  </div>
                  <div className="h-20 sm:h-24 flex items-center justify-center my-1">
                    <img
                      src="/images/category/plug_in.png"
                      alt="Plug In"
                      className="max-h-full object-contain select-none"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-2 w-full">
                    <h4 className="font-bold text-xs sm:text-[13px] md:text-sm lg:text-base text-[#111111] mb-1 font-sans whitespace-nowrap">
                      Plug In
                    </h4>
                    <p className="text-[11px] sm:text-xs text-neutral-500 leading-snug font-sans max-w-[170px] mx-auto">
                      Connect Ratguard device to power supply.
                    </p>
                  </div>
                </div>

                {/* Horizontal Arrow 1 */}
                <div className="hidden sm:flex items-center justify-center text-neutral-300">
                  <ArrowRight className="w-4 h-4 text-neutral-400 stroke-[2.5]" />
                </div>

                {/* Step 2 */}
                <div className="relative w-full sm:w-[31%] bg-white rounded-2xl p-3.5 sm:p-4 lg:p-5 border border-neutral-200/90 shadow-2xs flex flex-col items-center text-center pt-6 sm:pt-7 min-h-[220px] sm:min-h-[240px] justify-between">
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#0066FF] text-white font-bold text-xs flex items-center justify-center shadow-xs">
                    2
                  </div>
                  <div className="h-20 sm:h-24 flex items-center justify-center my-1">
                    <img
                      src="/images/category/Uttrasonic-Waves.png"
                      alt="Ultrasonic Waves"
                      className="max-h-full object-contain select-none"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-2 w-full">
                    <h4 className="font-bold text-xs sm:text-[13px] md:text-sm lg:text-base text-[#111111] mb-1 font-sans whitespace-nowrap">
                      Ultrasonic Waves
                    </h4>
                    <p className="text-[11px] sm:text-xs text-neutral-500 leading-snug font-sans max-w-[170px] mx-auto">
                      The device emits high frequency ultrasonic waves.
                    </p>
                  </div>
                </div>

                {/* Horizontal Arrow 2 */}
                <div className="hidden sm:flex items-center justify-center text-neutral-300">
                  <ArrowRight className="w-4 h-4 text-neutral-400 stroke-[2.5]" />
                </div>

                {/* Step 3 */}
                <div className="relative w-full sm:w-[31%] bg-white rounded-2xl p-3.5 sm:p-4 lg:p-5 border border-neutral-200/90 shadow-2xs flex flex-col items-center text-center pt-6 sm:pt-7 min-h-[220px] sm:min-h-[240px] justify-between">
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#0066FF] text-white font-bold text-xs flex items-center justify-center shadow-xs">
                    3
                  </div>
                  <div className="h-20 sm:h-24 flex items-center justify-center my-1">
                    <img
                      src="/images/category/rat.png"
                      alt="Rats Avoid The Area"
                      className="max-h-full object-contain select-none"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-2 w-full">
                    <h4 className="font-bold text-xs sm:text-[13px] md:text-sm lg:text-base text-[#111111] mb-1 font-sans whitespace-nowrap">
                      Rats Avoid The Area
                    </h4>
                    <p className="text-[11px] sm:text-xs text-neutral-500 leading-snug font-sans max-w-[170px] mx-auto">
                      Rats find the area uncomfortable and leave.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: WHERE TO INSTALL IN [CATEGORY] */}
            <div className="xl:col-span-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111111] tracking-tight uppercase text-center sm:text-left mb-8 sm:mb-10 font-sans">
                {categoryData.whereToInstallTitle}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-center">

                {/* Checkmark bullet list */}
                <div className="sm:col-span-6 space-y-3.5 sm:space-y-4">
                  {categoryData.installLocations.map((loc, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full border border-[#0066FF] text-[#0066FF] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-neutral-800 leading-tight">
                        {loc}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Location Image */}
                <div className="sm:col-span-6 relative rounded-2xl overflow-hidden shadow-sm border border-neutral-200/80 h-52 sm:h-60 lg:h-60 w-full">
                  <img
                    src={categoryData.installImage}
                    alt={categoryData.targetSpace}
                    className="w-full h-full object-cover select-none"
                    loading="lazy"
                  />
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. PRODUCT SHOWCASE (Buy Section with Clean Pedestal)     */}
      {/* ========================================================= */}
      {/* ========================================================= */}
      {/* 7. PRODUCT SHOWCASE (100% Match with Reference Image)     */}
      {/* ========================================================= */}
      <section id="buy-section" className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-neutral-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Clean Enclosed Card */}
          <div className="bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-14 border border-neutral-200/90 shadow-xl relative overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* LEFT COLUMN: Product Visual with Concentric Waves & Dot Grid */}
              <div className="lg:col-span-5 relative flex items-center justify-center min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]">

               

                {/* Subtle Concentric Sound Wave Rings Behind Product */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none opacity-30 -z-0"
                  viewBox="0 0 400 400"
                  fill="none"
                >
                  <circle cx="200" cy="240" r="75" stroke="#0066FF" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="200" cy="240" r="120" stroke="#0066FF" strokeWidth="1" opacity="0.6" />
                  <circle cx="200" cy="240" r="165" stroke="#0066FF" strokeWidth="1" opacity="0.3" />
                </svg>

                {/* High Quality Angled Product Device */}
                <img
                  src="/images/home/product/product.webp"
                  alt="RatGuard SonicArmor X"
                  className="max-h-[260px] sm:max-h-[340px] lg:max-h-[450px] w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)] transition-transform duration-500 relative z-10 select-none"
                  loading="lazy"
                />
              </div>

              {/* RIGHT COLUMN: Product Details & Actions */}
              <div className="lg:col-span-7 space-y-2 lg:pl-2">

                {/* Top Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0066FF]/40 bg-blue-50/60 text-[#0066FF] text-xs font-medium tracking-wider font-sans mb-1 shadow-2xs">
                  <Sparkles className="w-3 h-3 text-[#0066FF]" />
                  <span>Flagship Ultrasonic Solution</span>
                </div>

                {/* Product Title: 1 Clean Line (Black + Brand Blue) */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight font-sans whitespace-nowrap">
                  <span className="text-[#111111]">Ultrasonic </span>
                  <span className="text-[#0066FF]">Rat Repellent</span>
                </h2>

                {/* Tagline / Subtitle */}
                <p className="text-neutral-500 font-medium text-sm sm:text-base font-sans">
                  {categoryData.productTagline || 'Your Ultimate Protection Partner'}
                </p>

                {/* 5 Real Feature Cards Grid */}
                <div className="grid grid-cols-5 gap-2 sm:gap-2.5 pt-2">
                  <div className="bg-white border border-neutral-200/90 rounded-2xl p-2 sm:p-2.5 text-center flex flex-col items-center justify-center shadow-2xs hover:border-[#0066FF]/40 transition-colors">
                    <Zap className="w-5 h-5 text-[#0066FF] mb-1.5" />
                    <span className="text-[10px] sm:text-xs font-bold text-neutral-800 leading-tight font-sans">
                      18–36 kHz + LED
                    </span>
                  </div>
                  <div className="bg-white border border-neutral-200/90 rounded-2xl p-2 sm:p-2.5 text-center flex flex-col items-center justify-center shadow-2xs hover:border-[#0066FF]/40 transition-colors">
                    <Radio className="w-5 h-5 text-[#0066FF] mb-1.5" />
                    <span className="text-[10px] sm:text-xs font-bold text-neutral-800 leading-tight font-sans">
                      Vibration Sensor
                    </span>
                  </div>
                  <div className="bg-white border border-neutral-200/90 rounded-2xl p-2 sm:p-2.5 text-center flex flex-col items-center justify-center shadow-2xs hover:border-[#0066FF]/40 transition-colors">
                    <Plug className="w-5 h-5 text-[#0066FF] mb-1.5" />
                    <span className="text-[10px] sm:text-xs font-bold text-neutral-800 leading-tight font-sans">
                      3 Power Modes
                    </span>
                  </div>
                  <div className="bg-white border border-neutral-200/90 rounded-2xl p-2 sm:p-2.5 text-center flex flex-col items-center justify-center shadow-2xs hover:border-[#0066FF]/40 transition-colors">
                    <Leaf className="w-5 h-5 text-[#0066FF] mb-1.5" />
                    <span className="text-[10px] sm:text-xs font-bold text-neutral-800 leading-tight font-sans">
                      3-Month Battery
                    </span>
                  </div>
                  <div className="bg-white border border-neutral-200/90 rounded-2xl p-2 sm:p-2.5 text-center flex flex-col items-center justify-center shadow-2xs hover:border-[#0066FF]/40 transition-colors">
                    <ShieldCheck className="w-5 h-5 text-[#0066FF] mb-1.5" />
                    <span className="text-[10px] sm:text-xs font-bold text-neutral-800 leading-tight font-sans">
                      100% Pet Safe
                    </span>
                  </div>
                </div>

                {/* Price Row */}
                <div className="pt-3 pb-1 flex flex-wrap items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#111111] font-sans tracking-tight">
                    ₹{categoryData.discountedPrice || '2,450'}
                  </span>
                  <span className="text-lg sm:text-xl text-neutral-400 line-through font-medium font-sans">
                    ₹{categoryData.originalPrice || '7,999'}
                  </span>
                  <span className="text-xs font-bold text-[#0066FF] bg-blue-50 border border-blue-200/80 px-2.5 py-0.5 rounded-full font-sans">
                    69% OFF
                  </span>
                  <span className="text-xs text-neutral-500 font-medium block w-full mt-1 font-sans">
                    (Inclusive of all taxes & Free Express Shipping across India)
                  </span>
                </div>

                {/* Single Action Button: EXACT MATCH to Home Hero Shop Now Button */}
                <div className="pt-2 flex justify-start">
                  <button
                    onClick={onOpenBuyModal}
                    className="inline-flex items-center gap-3 sm:gap-5 bg-[#0D0D0D] hover:bg-black active:scale-[0.98] text-white pl-1.5 pr-4 py-1.5 sm:pl-2 sm:pr-5 sm:py-2 rounded-full transition-all duration-200 group cursor-pointer border border-neutral-800"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0066FF] flex items-center justify-center text-white shrink-0 shadow-md transition-transform">
                      <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="font-bold text-sm sm:text-base tracking-wider text-white font-sans whitespace-nowrap">
                      Shop now
                    </span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Trust Badges / Guarantees Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px] font-semibold text-neutral-600">
                  <span className="flex items-center gap-1.5 bg-neutral-50 py-1.5 px-2.5 rounded-lg border border-neutral-200/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                    Free Delivery
                  </span>
                  <span className="flex items-center gap-1.5 bg-neutral-50 py-1.5 px-2.5 rounded-lg border border-neutral-200/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                    Pay on Delivery
                  </span>
                  <span className="flex items-center gap-1.5 bg-neutral-50 py-1.5 px-2.5 rounded-lg border border-neutral-200/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                    10-Day Return
                  </span>
                  <span className="flex items-center gap-1.5 bg-neutral-50 py-1.5 px-2.5 rounded-lg border border-neutral-200/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                    6M Warranty
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
<ProductSection/>
      {/* ========================================================= */}
      {/* 8. PROBLEM VS SOLUTION (100% Reference Image Match)       */}
      {/* ========================================================= */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            {/* Side-by-side pill badge with Scale icon */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0066FF] mb-3">
              <Scale className="w-3.5 h-3.5 stroke-2" />
              <span className="text-[11px] font-semibold uppercase tracking-wider font-sans">
                SIDE-BY-SIDE COMPARISON
              </span>
            </div>

            {/* Heading: PROBLEM VS SOLUTION with VS in gray and accent underline */}
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-[#111111] tracking-tight font-sans mt-3">
                <span>PROBLEM</span>{" "}
                <span className="text-neutral-400 font-medium">VS</span>{" "}
                <span className="text-[#0066FF]">SOLUTION</span>
              </h2>

            </div>

            {/* Subtitle */}
            <p className="text-neutral-500 text-xs sm:text-sm md:text-base mt-3 font-medium font-sans">
              See the direct difference Ratguard makes in your {categoryData.targetSpace}.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-stretch">

            {/* Left Column: Visual Image Card (Hidden on Mobile & Tablet, Visible on Laptop/Desktop) */}
            <div className="hidden lg:flex lg:col-span-4 lg:h-auto min-h-[370px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-neutral-200 relative group flex-col justify-end">
              <img
                src={categoryData.comparisonImage}
                alt="Rat Infestation Damage"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

              {/* Bottom Card Content Box */}
              <div className="relative z-20 p-5 sm:p-6 space-y-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-white bg-[#D91B24] px-2.5 py-1 rounded-md shadow-xs">
                  <AlertTriangle className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>RAT PROBLEM</span>
                </span>
                <p className="text-white text-xs sm:text-sm font-medium leading-relaxed drop-shadow-xs">
                  Rats can cause serious hygiene issues, damage equipment, and put {categoryData.targetSpace.toLowerCase()} safety at risk.
                </p>
              </div>
            </div>

            {/* Right Column: Comparison Table with Horizontal Scroll on Small Mobile Screens */}
            <div className="w-full lg:col-span-8 bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-neutral-200">
              <div className="overflow-x-auto w-full">
                <div className="min-w-[500px] sm:min-w-[560px] lg:min-w-full flex flex-col justify-between h-full">

                  {/* Table Header: Left Black (Rat Problem) + Right Brand Blue (Ratguard Solution) */}
                  <div className="grid grid-cols-2">
                    {/* Left Header */}
                    <div className="bg-[#111111] text-white px-4 sm:px-5 py-3 lg:py-3.5 flex items-center gap-2 sm:gap-2.5 border-r border-neutral-800">
                      <img
                        src="/images/home/product/rats.png"
                        alt="Rat Problem"
                        className="w-5 h-5 sm:w-8 sm:h-8 object-contain shrink-0 drop-shadow-xs"
                      />
                      <span className="font-extrabold text-xs sm:text-sm tracking-wider uppercase font-sans whitespace-nowrap">
                        RAT PROBLEM
                      </span>
                    </div>

                    {/* Right Header */}
                    <div className="bg-[#0066FF] text-white px-4 sm:px-5 py-3 lg:py-3.5 flex items-center gap-2 sm:gap-2.5">
                      <img
                        src="/images/home/product/rat-no-entry.png"
                        alt="Ratguard Solution"
                        className="w-5 h-5 sm:w-10 sm:h-10 object-contain shrink-0 drop-shadow-xs"
                      />
                      <span className="font-extrabold text-xs sm:text-sm tracking-wider uppercase font-sans whitespace-nowrap">
                        RATGUARD SOLUTION
                      </span>
                    </div>
                  </div>

                  {/* Comparison Rows */}
                  <div className="divide-y divide-neutral-100 flex-1 flex flex-col justify-between">
                    {categoryData.comparisonRows.map((row, idx) => (
                      <div
                        key={idx}
                        className="grid grid-cols-2 hover:bg-neutral-50/50 transition-colors"
                      >
                        {/* Left Cell: Red Circle with X + Problem Text */}
                        <div className="px-4 sm:px-5 py-3 sm:py-3.5 flex items-center gap-2.5 sm:gap-3 border-r border-neutral-100">
                          <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#E51A24] flex items-center justify-center text-white shrink-0 shadow-xs">
                            <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                          </div>
                          <span className="font-bold text-xs sm:text-[13px] text-[#111111] leading-snug font-sans">
                            {row.problem}
                          </span>
                        </div>

                        {/* Right Cell: Brand Blue Circle with Check + Solution Text */}
                        <div className="px-4 sm:px-5 py-3 sm:py-3.5 flex items-center gap-2.5 sm:gap-3">
                          <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#0066FF] flex items-center justify-center text-white shrink-0 shadow-xs">
                            <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                          </div>
                          <span className="font-semibold text-xs sm:text-[13px] text-[#111111] leading-snug font-sans">
                            {row.solution}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. FREQUENTLY ASKED QUESTIONS (FAQ - Homepage Matching)   */}
      {/* ========================================================= */}
      <section
        id="faq-section"
        className="w-full bg-white y-12 sm:py-16 lg:py-24  overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top FAQs Heading */}
          <div className="mb-6 sm:mb-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] tracking-tight">
              FAQs
            </h2>
          </div>

          {/* FAQ Accordion Card */}
          <div className="bg-white border border-neutral-200/80 rounded-2xl p-5 sm:p-8 shadow-sm">
            {/* Inner Card Header */}
            {/* <div className="mb-4 sm:mb-6 pb-4 border-b border-neutral-100">
              <h3 className="font-extrabold text-base sm:text-lg text-[#111111]">
                Frequently Asked Questions
              </h3>
            </div> */}

            {/* Accordion Item List */}
            <div className="divide-y divide-neutral-100">
              {categoryData.faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index} className="py-4 sm:py-5 first:pt-2 last:pb-2">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left flex items-start justify-between gap-4 group cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-sm sm:text-base text-[#111111] leading-snug group-hover:text-[#0066FF] transition-colors pr-2">
                        {faq.question}
                      </span>
                      <div className="text-neutral-700 text-lg sm:text-xl font-bold shrink-0 select-none transition-transform duration-200">
                        {isOpen ? (
                          <Minus className="w-5 h-5 stroke-1 text-neutral-700" />
                        ) : (
                          <Plus className="w-6 h-6 stroke-1 text-neutral-600 group-hover:text-neutral-900" />
                        )}
                      </div>
                    </button>

                    {/* Smooth Collapsible Content Container */}
                    <div
                      className="grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out overflow-hidden"
                      style={{
                        gridTemplateRows: isOpen ? '1fr' : '0fr',
                        opacity: isOpen ? 1 : 0,
                        marginTop: isOpen ? '12px' : '0px',
                      }}
                    >
                      <div className="overflow-hidden">
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. FINAL CTA CARD SECTION                                */}
      {/* ========================================================= */}
      <section className="relative w-full py-12 sm:py-16 lg:py-20 text-[#111111] overflow-hidden">
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Enclosed CTA Card */}
          <div className="w-full bg-white rounded-3xl border border-[#bedbff] p-6 sm:p-10 lg:px-16 lg:py-16 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

              {/* Content Column (Order 2 on Mobile/Tablet, Order 1 on Desktop) */}
              <div className="order-2 lg:order-1 lg:col-span-7 xl:col-span-7 space-y-4 sm:space-y-5 flex flex-col items-center lg:items-start text-center lg:text-left">

                {/* Top Pill Badge with Shield Icon */}
                {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#bedbff] bg-blue-50/40 shadow-xs whitespace-nowrap">
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-[#0066FF] items-center justify-center text-white shrink-0">
                    <Shield className="w-2.5 h-2.5 fill-white stroke-[2.5]" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-[#111111] tracking-wide font-sans whitespace-nowrap">
                    Safe {categoryData.targetSpace}. Happy Family.
                  </span>
                </div> */}

                {/* Main Heading (Line 1 up to '&', Line 2 remainder + With RatGuard) */}
                {(() => {
                  const parts = categoryData.finalCtaAccent.split('&').map((p) => p.trim());
                  const hasAmpersand = parts.length > 1;

                  return (
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#111111] tracking-tight font-sans mt-3 leading-[1.2]">
                      <span className="block">
                        {categoryData.finalCtaTitle}{' '}
                        <span className="text-[#0066FF]">
                          {hasAmpersand ? `${parts[0]} &` : categoryData.finalCtaAccent}
                        </span>
                      </span>
                      <span className="block mt-1 sm:mt-1.5">
                        {hasAmpersand && (
                          <span className="text-[#0066FF]">{parts[1]} </span>
                        )}
                        With <span className="text-[#0066FF]">RatGuard</span>
                      </span>
                    </h2>
                  );
                })()}

                {/* Subtitle */}
                <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal font-sans max-w-lg pt-1 mx-auto lg:mx-0">
                  {categoryData.finalCtaSubtitle}
                </p>

                {/* Action Button (Solid Blue with Arrow, No shopping cart icon) */}
                <div className="pt-2 sm:pt-3 flex justify-center lg:justify-start w-full">
                  <button
                    onClick={onOpenBuyModal}
                    className="bg-[#0066FF] hover:bg-[#0052cc] active:scale-[0.98] text-white font-semibold text-xs sm:text-sm tracking-wide px-7 sm:px-7 py-3.5 sm:py-4 rounded-full shadow-lg shadow-blue-500/25 transition-all duration-200 cursor-pointer inline-flex items-center gap-2.5 group"
                  >
                    <span>{categoryData.finalCtaButtonText}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>

              </div>

              {/* Product Display with Concentric Waves (Order 1 on Mobile/Tablet, Order 2 on Desktop) */}
              <div className="order-1 lg:order-2 lg:col-span-5 xl:col-span-5 flex items-center justify-center relative my-4 lg:my-0">

                {/* Subtle Concentric Sound Wave Rings Behind Product */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0">
                  <svg
                    className="w-[125%] h-[125%] max-w-[580px] text-[#0066FF]/20"
                    viewBox="0 0 500 350"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="250"
                      cy="190"
                      rx="230"
                      ry="120"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="opacity-40"
                    />
                    <ellipse
                      cx="250"
                      cy="190"
                      rx="170"
                      ry="90"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="opacity-60"
                    />
                    <ellipse
                      cx="250"
                      cy="190"
                      rx="110"
                      ry="60"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="opacity-80"
                    />
                  </svg>
                </div>

                {/* Complete Authentic Ratguard Product Device */}
                <div className="relative z-10 w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[460px] xl:max-w-[500px] flex items-center justify-center">
                  <img
                    src="/images/home/product/product.webp"
                    alt="Ratguard SonicArmor X Device"
                    className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.16)] select-none transition-transform duration-500 hover:scale-102"
                    loading="lazy"
                  />
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
