import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQS } from '../data/restaurantData';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 bg-[#0e0e13] relative border-t border-[#1f1e29]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#181822] border border-[#d4af3733] text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Guest Inquiries</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-2">
            Frequently Asked <span className="gold-gradient-text italic font-normal">Questions</span>
          </h2>
          
          <p className="text-xs sm:text-sm text-[#a8a396]">
            Essential details regarding halal standards, reservations, private dining, and arrivals.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#14141c] border border-[#272635] hover:border-[#d4af374d] transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-serif font-semibold text-white">
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full bg-[#1e1d29] text-[#ffd768] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#d4af37] text-black' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#b8b3a8] leading-relaxed border-t border-[#201f2d] pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
