import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const businessSolutions = [
  {
    title: 'SCREEN PRINTING SHOPS',
    description: 'Go beyond stock blanks with custom-weight fleece, colors, fits and constructions.',
    image: '/screenprint.png',
  },
  {
    title: 'EMBROIDERY & DECORATION SHOPS',
    description: 'Offer your customers garments developed around their decoration requirements.',
    image: '/embmachine.png',
  },
  {
    title: 'MERCH & PROMOTIONAL BUSINESSES',
    description: 'Create custom apparel programs instead of relying entirely on distributor catalogs.',
    image: '/foldhoodies.png',
  },
  {
    title: 'APPAREL BRANDS & RETAILERS',
    description: 'Develop your own garments, fabrics, fits, branding and packaging.',
    image: '/hangshirts.png',
  },
];

const coreProducts = [
  {
    title: 'HEAVYWEIGHT HOODIES',
    subtitle: '380-450 GSM',
    features: ['Pullover / Zip', 'Custom Fit', 'Custom Colors', 'Private Label'],
    image: '/shirt.png',
    href: '/hoodies',
  },
  {
    title: 'CREWNECK SWEATSHIRTS',
    subtitle: 'Cotton / Poly Fleece',
    features: ['Brushed Fleece', 'Custom GSM', 'Custom Construction', 'Tear-away Tags'],
    image: '/shirt.png',
    href: '/crewneck',
  },
  {
    title: 'SWEATPANTS & JOGGERS',
    subtitle: 'Matching Sets',
    features: ['Custom Fit', 'Custom Trims', 'Custom GSM', 'Zipper Pockets'],
    image: '/shirt.png',
    href: '/bottoms',
  },
  {
    title: 'PREMIUM T-SHIRTS',
    subtitle: 'Single Jersey',
    features: ['Oversized / Regular', 'Custom GSM', 'Custom Colors', 'Preshrunk Fabric'],
    image: '/shirt.png',
    href: '/t-shirts',
  },
];

export default function SolutionsAndProductsSection() {
  return (
    <section className="w-full bg-[#f8f9fa] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
        
        {/* ================= 1. BUSINESS SOLUTIONS (4 Cards) ================= */}
        <div>
          {/* Main Heading Center */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#FF5A00] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
              Tailored Manufacturing
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-[#092834] tracking-tight leading-tight">
              Built for Businesses That Sell Custom Apparel
            </h2>
          </div>

          {/* 4 Cards Grid with Increased Height */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessSolutions.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col bg-white rounded-xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#FF5A00]/40 transition-all duration-300"
              >
                {/* Image Container - Height Barha Di Hai (h-64 sm:h-72) */}
                <div className="relative w-full h-64 sm:h-72 bg-[#092834]/5 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    <h3 className="text-sm font-bold text-[#092834] uppercase tracking-wider mb-2.5 group-hover:text-[#FF5A00] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= 2. CORE PRODUCTS (4 Cards) ================= */}
        <div>
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-14 pb-4 border-b border-gray-200">
            <div className="text-center sm:text-left">
              <span className="text-[#FF5A00] text-xs font-bold uppercase tracking-[0.2em] mb-1 block">
                Catalog Essentials
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#092834] tracking-tight">
                Our Core Products
              </h2>
            </div>

            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#092834] hover:text-[#FF5A00] transition-colors group"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 text-[#FF5A00] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 4 Cards Grid with Increased Height & Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreProducts.map((product, index) => (
              <div
                key={index}
                className="group flex flex-col bg-white rounded-xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#004e72]/40 transition-all duration-300"
              >
                {/* Product Image Container - Height Barha Di Hai (h-64 sm:h-72) */}
                <div className="relative w-full h-64 sm:h-72 bg-[#f1f3f5] overflow-hidden flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 right-3 bg-[#092834]/80 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-md">
                    {product.subtitle}
                  </div>
                </div>

                {/* Product Specs Content */}
                <div className="p-6 flex flex-col flex-grow justify-between bg-white border-t border-gray-100">
                  <div>
                    <h3 className="text-sm font-bold text-[#092834] uppercase tracking-wider mb-4 group-hover:text-[#004e72] transition-colors">
                      {product.title}
                    </h3>
                    
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feat, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                          <Check className="w-3.5 h-3.5 text-[#FF5A00] flex-shrink-0" strokeWidth={2.5} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={product.href}
                    className="w-full text-center py-2.5 px-4 rounded-lg bg-[#092834]/5 text-[#092834] group-hover:bg-[#FF5A00] group-hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-200"
                  >
                    Explore Specs
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}