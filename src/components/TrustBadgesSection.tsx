import React from 'react';

export const TrustBadgesSection: React.FC = () => {
  const TRUST_ITEMS = [
    {
      id: 'industrial',
      text: 'Industrial Grade Performance',
      image: '/icons/factory.png',
    },
    {
      id: 'customers',
      text: '50,000+ happy customer',
      image: '/icons/user.png',
    },
    {
      id: 'guarantee',
      text: '7-day money-back guarantee',
      image: '/icons/money.png',
    },
    {
      id: 'india',
      text: 'Made in india',
      image: '/icons/made-in-india.png',
    },
  ];

  return (
    <section
      id="trust-badges-section"
      className="w-full bg-[#111111] py-8 sm:py-10 border-y border-neutral-800/80 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center text-center group cursor-default p-2 sm:p-3 w-full"
            >
              <div className="mb-3 sm:mb-3.5 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]"
                  loading="lazy"
                />
              </div>
              <p className="text-[#a3e635] font-extrabold text-xs sm:text-sm md:text-base leading-tight tracking-tight">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

