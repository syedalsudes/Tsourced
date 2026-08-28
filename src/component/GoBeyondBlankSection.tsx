import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, X, Check } from 'lucide-react';

const standardBlankCons = [
  'Limited fabric options',
  'Limited colors',
  'Limited fit',
  'Limited branding',
  'Everyone has it',
];

const customerQuestions = [
  '"Can you make it heavier?"',
  '"Can we change the fit?"',
  '"Can we get this exact color?"',
  '"Can we add our label?"',
  '"Can you do something different?"',
];

const customSolutions = [
  'Custom development',
  'Custom manufacturing',
  'Custom branding',
  'Built for your customer',
  'Your competitive edge',
];

export default function GoBeyondBlankSection() {
  return (
    <section className="w-full bg-[#f8f9fa] py-20 lg:py-28 border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Text Content (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col justify-center pr-0 lg:pr-4">
            <span className="text-[#FF5A00] text-sm font-bold uppercase tracking-[0.25em] mb-4 block">
              Why Go Custom
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-[#092834] tracking-tight leading-[1.08] mb-6">
              Go Beyond <br className="hidden sm:inline" />
              the Blank.
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-9 max-w-lg font-normal">
              Standard blanks are convenient — until your customer wants a different GSM, fit, color, fabric, construction or branding.
            </p>

            <div>
              <Link
                href="/customization"
                className="inline-flex items-center gap-3 bg-[#FF5A00] hover:bg-[#e04f00] text-white font-bold text-sm tracking-wider uppercase px-7 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-[#FF5A00]/25 hover:-translate-y-0.5"
              >
                <span>LET'S BUILD YOUR PRODUCT</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Comparison Process Grid (8 Columns - Fits Side by Side) */}
          <div className="lg:col-span-8 flex flex-col md:flex-row items-center justify-between gap-3 lg:gap-4 relative">
            
            {/* 1. STANDARD BLANK CARD */}
            <div className="w-full md:flex-1 bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex flex-col items-center min-h-[460px]">
              <h3 className="text-xs font-bold text-[#092834] uppercase tracking-widest text-center mb-4">
                STANDARD BLANK
              </h3>
              <div className="relative w-full h-44 mb-5 bg-[#f1f3f5] rounded-xl overflow-hidden flex items-center justify-center">
                <Image
                  src="/shirt.png"
                  alt="Standard Blank Apparel"
                  fill
                  className="object-contain p-3 grayscale contrast-75"
                />
              </div>
              <ul className="w-full space-y-2.5">
                {standardBlankCons.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                    <X className="w-3.5 h-3.5 text-red-500 flex-shrink-0" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step Arrow 1 */}
            <div className="hidden md:flex items-center justify-center text-gray-300 flex-shrink-0">
              <ArrowRight className="w-5 h-5 text-[#092834]/30" strokeWidth={2} />
            </div>

            {/* 2. YOUR CUSTOMER (QUERIES) */}
            <div className="w-full md:flex-1 bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex flex-col items-center justify-between min-h-[460px]">
              <h3 className="text-xs font-bold text-[#092834] uppercase tracking-widest text-center mb-4">
                YOUR CUSTOMER
              </h3>
              <div className="w-full space-y-2.5 flex flex-col justify-center flex-grow py-2">
                {customerQuestions.map((query, index) => (
                  <div
                    key={index}
                    className="w-full bg-[#f8f9fa] text-[#092834] rounded-lg py-2.5 px-3 text-[11px] sm:text-xs text-center font-medium border border-gray-200/80 shadow-xs"
                  >
                    {query}
                  </div>
                ))}
              </div>
            </div>

            {/* Step Arrow 2 */}
            <div className="hidden md:flex items-center justify-center text-gray-300 flex-shrink-0">
              <ArrowRight className="w-5 h-5 text-[#092834]/30" strokeWidth={2} />
            </div>

            {/* 3. T SOURCED (CUSTOM ADVANTAGE) */}
            <div className="w-full md:flex-1 bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex flex-col items-center min-h-[460px]">
              <h3 className="text-xs font-bold text-[#092834] uppercase tracking-widest text-center mb-4">
                T SOURCED
              </h3>
              <div className="relative w-full h-44 mb-5 bg-[#092834]/5 rounded-xl overflow-hidden flex items-center justify-center">
                <Image
                  src="/shirt.png"
                  alt="Custom Manufactured T Sourced Apparel"
                  fill
                  className="object-contain p-3"
                />
              </div>
              <ul className="w-full space-y-2.5">
                {customSolutions.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-xs text-[#092834] font-semibold">
                    <Check className="w-3.5 h-3.5 text-[#FF5A00] flex-shrink-0" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}