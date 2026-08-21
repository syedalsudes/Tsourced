// src/components/FaqSection.tsx
"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 1,
    question: "What is your Minimum Order Quantity (MOQ)?",
    answer: "Our standard MOQ starts as low as 50 pieces per style/colorway. This allows growing brands, dropshippers, and apparel shops to test new designs and drop collections without tying up cash in heavy inventory.",
  },
  {
    id: 2,
    question: "Do you offer full custom private labeling?",
    answer: "Yes, we handle complete end-to-end custom branding. This includes custom woven neck labels, satin care tags, bespoke hangtags, branded poly bags, and precision embroidery or screen printing tailored to your exact tech pack.",
  },
  {
    id: 3,
    question: "What fabrics and GSM weights do you work with?",
    answer: "We source and knit premium fabrics ranging from 180 to 320 GSM combed cotton for t-shirts to heavy 380 to 520 GSM French Terry and fleece for hoodies, complete with pre-shrunk and anti-pilling treatments.",
  },
];

export default function FaqSection() {
  // Default is null so all accordions start closed
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="w-full bg-[#fdfdfd] py-16 sm:py-20 lg:py-28 border-t border-navy/5">
      <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: HEADING & OVERVIEW */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
            <span className="text-xs font-bold tracking-widest text-[#FF5A00] uppercase">
              FREQUENTLY ASKED
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-navy leading-[1.15]">
              Got <span className="text-[#FF5A00]">Questions?</span> <br />
              We’ve Got Answers.
            </h2>

            <p className="text-navy/70 text-base sm:text-lg leading-relaxed pt-2 max-w-md">
              Everything you need to know about our garment production capabilities, custom sizing, fabric options, and private labeling.
            </p>
          </div>

          {/* RIGHT: EXPANDED 3 ACCORDION CARDS */}
          <div className="lg:col-span-7 space-y-5">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all duration-300 ${
                    isOpen 
                      ? "border-[#FF5A00]/40 shadow-[0_10px_30px_rgba(255,90,0,0.06)]" 
                      : "border-navy/10 hover:border-navy/20 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-6 sm:py-7 px-6 sm:px-8 flex items-center justify-between text-left gap-4 transition-colors"
                  >
                    <span className="text-base sm:text-lg lg:text-xl font-bold text-navy leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen ? "bg-[#FF5A00] text-white rotate-180" : "bg-navy/5 text-navy hover:bg-navy/10"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-7 pt-1 text-sm sm:text-base text-navy/75 leading-relaxed border-t border-navy/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}