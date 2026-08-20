import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/mockData';

const getNumberEmoji = (num: number) => {
  const emojis = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
  if (num >= 1 && num <= 10) {
    return emojis[num - 1];
  }
  return num
    .toString()
    .split('')
    .map((d) => (parseInt(d, 10) > 0 ? emojis[parseInt(d, 10) - 1] : '0️⃣'))
    .join('');
};

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq-section"
      className="w-full bg-neutral-50/50 py-12 sm:py-16 lg:py-24 border-b border-neutral-200/60 select-none overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top FAQs Heading */}
        <div className="mb-6 sm:mb-8 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            FAQs
          </h2>
        </div>

        {/* FAQ Accordion Card */}
        <div className="bg-white border border-neutral-200/80 rounded-2xl p-5 sm:p-8 shadow-sm">
          {/* Inner Card Header */}
          <div className="flex items-center gap-2 mb-4 sm:mb-6 pb-4 border-b border-neutral-100">
            <span className="text-xl sm:text-2xl">🛠️</span>
            <h3 className="font-extrabold text-base sm:text-lg text-[#111111]">
              Frequently Asked Questions
            </h3>
          </div>

          {/* Accordion Item List */}
          <div className="divide-y divide-neutral-100">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.id || index} className="py-4 sm:py-5 first:pt-2 last:pb-2">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left flex items-start justify-between gap-4 group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3 sm:gap-3.5 pr-2">
                      <span className="text-base sm:text-lg shrink-0 select-none pt-0.5 w-6 sm:w-7 flex items-center justify-center">
                        {getNumberEmoji(faq.id)}
                      </span>
                      <span className="font-bold text-sm sm:text-base text-[#111111] leading-snug group-hover:text-[#0066FF] transition-colors pt-0.5">
                        {faq.question}
                      </span>
                    </div>
                    <div className="text-neutral-700 text-lg sm:text-xl font-bold shrink-0 select-none pt-0.5 transition-transform duration-200">
                      {isOpen ? (
                        <Minus className="w-5 h-5 stroke-1.5  text-neutral-700" />
                      ) : (
                        <Plus className="w-6 h-6 stroke-1.5 text-neutral-600 group-hover:text-neutral-900" />
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
                      <div className="flex items-start gap-3 sm:gap-3.5 text-xs sm:text-sm text-neutral-600 leading-relaxed pr-2">
                        <span className="text-base sm:text-lg shrink-0 select-none pt-0.5 w-6 sm:w-7 flex items-center justify-center">
                          💡
                        </span>
                        <p className="pt-0.5">{faq.answer}</p>
                      </div>
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

