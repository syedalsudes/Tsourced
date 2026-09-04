import React from 'react';
import {
  Printer,
  Sparkles,
  Shirt,
  ShoppingBag,
  Store,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  const targetAudience = [
    { icon: Printer, label: 'Screen Printers' },
    { icon: Sparkles, label: 'Embroidery Shops' },
    { icon: Shirt, label: 'Merch Companies' },
    { icon: ShoppingBag, label: 'Apparel Brands' },
    { icon: Store, label: 'Retailers' },
  ];

  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center pt-28 pb-14 overflow-hidden bg-[#092834]">
      {/* 1. Full Background Image */}
      <Image
        src="/herobanner.png"
        alt="Custom Knit Apparel Banner"
        fill
        priority
        className="object-cover object-right lg:object-center select-none"
      />

      {/* 2. Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12">
        <div className="max-w-xl lg:max-w-2xl flex flex-col justify-center">

          {/* Tagline - Bright Silver/White */}
          <span className="text-[#d1d5db] text-xs font-semibold tracking-[0.22em] uppercase mb-4 drop-shadow-sm">
            Custom Knit Apparel Manufacturing
          </span>

          {/* Main Heading - Pure Bright White */}
          <h1 className="text-3xl sm:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight leading-[1.12] text-[#ffffff] mb-5 drop-shadow-md">
            Custom Knit Apparel. <br />
            Built for Your Business.
          </h1>

          {/* Subheading / Description - Off-White (Bilkul Clear) */}
          <p className="text-[#e5e7eb] text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-normal drop-shadow-sm">
            Custom hoodies, sweatshirts, fleece, joggers and premium tees
            manufactured to your specifications — from fabric and fit to
            branding and finishing.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-14">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-[#ffffff] text-[#092834] font-bold text-xs tracking-wider uppercase px-5 py-3 rounded hover:bg-[#f3f4f6] transition-all duration-200 shadow-md"
            >
              GET WHOLESALE PRICING
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-transparent text-[#ffffff] font-semibold text-xs tracking-wider uppercase px-5 py-3 rounded border border-white/60 hover:border-white hover:bg-white/10 transition-all duration-200"
            >
              VIEW PRODUCTS
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Target Audience Bar */}
          <div className="pt-6 border-t border-white/20 max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#9ca3af] font-semibold mb-4">
              For Apparel Businesses Like Yours
            </p>

            <div className="pt-4 grid grid-cols-3 sm:grid-cols-5 gap-3">
              {targetAudience.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center sm:items-start gap-2 text-center sm:text-left group cursor-pointer"
                  >
                    <IconComponent className="w-5 h-5 text-[#ffffff] group-hover:text-[#FF5A00] transition-colors" strokeWidth={1.75} />
                    <span className="text-[11px] sm:text-xs text-[#e5e7eb] font-medium leading-tight whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;