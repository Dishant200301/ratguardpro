import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SolutionCategoryData } from '../../data/categorySolutionsData';

interface CategoryFaqSectionProps {
  categoryData: SolutionCategoryData;
}

export const CategoryFaqSection: React.FC<CategoryFaqSectionProps> = ({
  categoryData,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section
      id="faq-section"
      className="w-full bg-white py-12 sm:py-16 lg:py-24 overflow-hidden"
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
  );
};
