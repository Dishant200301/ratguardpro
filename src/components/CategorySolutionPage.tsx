import React, { useEffect } from 'react';
import { SolutionCategoryData } from '../data/categorySolutionsData';
import { CategoryHeroSection } from './category/CategoryHeroSection';
import { CategoryProblemSection } from './category/CategoryProblemSection';
import { OurSolutionSection } from './OurSolutionSection';
import { CategoryWhyChooseSection } from './category/CategoryWhyChooseSection';
import { CategoryHowItWorksSection } from './category/CategoryHowItWorksSection';
import { CategoryProductShowcase } from './category/CategoryProductShowcase';
import { CategoryComparisonSection } from './category/CategoryComparisonSection';
import { CategoryFaqSection } from './category/CategoryFaqSection';
import { CategoryFinalCtaSection } from './category/CategoryFinalCtaSection';

interface CategorySolutionPageProps {
  categoryData: SolutionCategoryData;
  onBackToHome: () => void;
  onNavigateCategory: (slug: string) => void;
  onOpenBuyModal: () => void;
  onAddToCart: () => void;
}

export const CategorySolutionPage: React.FC<CategorySolutionPageProps> = ({
  categoryData,
  onOpenBuyModal,
}) => {
  // Instant scroll-to-top whenever a category changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [categoryData.slug]);

  return (
    <div className="w-full bg-white text-[#111111] font-sans antialiased overflow-x-hidden selection:bg-[#0066FF] selection:text-white">

      {/* 1. HERO SECTION */}
      <CategoryHeroSection
        categoryData={categoryData}
        onOpenBuyModal={onOpenBuyModal}
      />

      {/* 2. RAT PROBLEM SECTION */}
      <CategoryProblemSection
        categoryData={categoryData}
      />

      {/* 3. OUR SOLUTION SECTION */}
      <OurSolutionSection
        categorySubtitle={categoryData.solutionSubtitle}
        solutionPoints={categoryData.solutionPoints}
        productImage="/images/home/product/product.webp"
        onBuyNow={onOpenBuyModal}
      />

      {/* 4. WHY CHOOSE RATGUARD SECTION */}
      <CategoryWhyChooseSection
        categoryData={categoryData}
      />

      {/* 5 & 6. HOW IT WORKS & WHERE TO INSTALL */}
      <CategoryHowItWorksSection
        categoryData={categoryData}
      />

      {/* 7. PRODUCT SHOWCASE */}
      <CategoryProductShowcase
        categoryData={categoryData}
        onOpenBuyModal={onOpenBuyModal}
      />

      {/* 8. PROBLEM VS SOLUTION */}
      <CategoryComparisonSection
        categoryData={categoryData}
      />

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <CategoryFaqSection
        categoryData={categoryData}
      />

      {/* 10. FINAL CTA CARD SECTION */}
      <CategoryFinalCtaSection
        categoryData={categoryData}
        onOpenBuyModal={onOpenBuyModal}
      />

    </div>
  );
};
