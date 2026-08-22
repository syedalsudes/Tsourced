// src/components/ProductCatalog.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface Product {
  id: number;
  title: string;
  category: string;
  gsm: string;
  price: string;
  description: string;
  images: string[];
}

const products: Product[] = [
  {
    id: 1,
    title: "Heavyweight Boxy Pullover Hoodie",
    category: "Fleece & Outerwear",
    gsm: "420 GSM French Terry",
    price: "1400 PKR",
    description:
      "100% combed cotton, double-layered hood with drop shoulder silhouette and pre-shrunk finish.",
    images: [
      "/products/pro1img1.png",
      "/products/pro1img2.png",
      "/products/pro1img3.png",
      "/products/pro1img4.png",
      "/products/pro1img5.png",
      "/products/pro1img6.png",
      "/products/pro1img7.png",
    ],
  },
  {
    id: 2,
    title: "Vintage Oversized Streetwear Tee",
    category: "T-Shirts",
    gsm: "260 GSM Heavy Cotton",
    price: "1200 PKR",
    description:
      "Thick 1.25-inch collar ribbing, twin-needle stitching, enzyme-washed for ultra-soft handfeel.",
    images: [
      "/products/pro1img1.png",
      "/products/pro1img2.png",
      "/products/pro1img3.png",
      "/products/pro1img4.png",
      "/products/pro1img5.png",
      "/products/pro1img6.png",
      "/products/pro1img7.png",
    ],
  },
  {
    id: 3,
    title: "Full-Zip Relaxed Track Jacket",
    category: "Zip Hoodies",
    gsm: "380 GSM Brushed Fleece",
    price: "1500 PKR",
    description:
      "Custom YKK metallic two-way zipper, deep hidden side pockets, and reinforced wrist cuffs.",
    images: [
      "/products/pro1img1.png",
      "/products/pro1img2.png",
      "/products/pro1img3.png",
      "/products/pro1img4.png",
      "/products/pro1img5.png",
      "/products/pro1img6.png",
      "/products/pro1img7.png",
    ],
  },
];

function SingleProductCard({ product }: { product: Product }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIdx((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIdx((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-navy/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(255,90,0,0.12)] hover:border-orange/40 transition-all duration-300 flex flex-col justify-between">
      
      {/* PRODUCT IMAGE SLIDER CONTAINER */}
      <div className="relative w-full aspect-[3/4] bg-[#f2f4f7] overflow-hidden">
        
        {/* Active Product Image */}
        <Image
          src={product.images[currentIdx]}
          alt={`${product.title} view ${currentIdx + 1}`}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />


        {/* Previous Image Arrow (High Visibility White Circle + Orange Hover) */}
        <button
          onClick={prevImage}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-navy hover:bg-orange hover:text-white flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 z-20 border border-black/5"
        >
          <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Next Image Arrow (High Visibility White Circle + Orange Hover) */}
        <button
          onClick={nextImage}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-navy hover:bg-orange hover:text-white flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 z-20 border border-black/5"
        >
          <ChevronRight className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Bottom Slide Dots */}
        <div className="absolute bottom-2.5 left-0 right-0 flex items-center justify-center gap-1 z-10">
          {product.images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.preventDefault();
                setCurrentIdx(i);
              }}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === currentIdx ? "w-4 bg-orange" : "w-1 bg-black/25 hover:bg-black/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* CARD CONTENT */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-1.5">
          <span className="text-[10px] font-black text-orange uppercase tracking-widest block">
            {product.category}
          </span>
          <h3 className="text-base sm:text-lg font-black text-navy leading-snug group-hover:text-orange transition-colors line-clamp-1">
            {product.title}
          </h3>
          <p className="text-navy/70 text-xs sm:text-[13px] leading-relaxed line-clamp-2 font-normal">
            {product.description}
          </p>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-3 border-t border-navy/5 flex items-center justify-between">
          <div>
            <span className="text-[9px] text-navy/40 font-bold uppercase tracking-wider block">
              STARTING AT
            </span>
            <span className="text-base font-black text-navy">
              {product.price}
            </span>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-orange hover:bg-[#e04f00] text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm transition-all transform hover:-translate-y-0.5"
          >
            <span>Get A Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

    </div>
  );
}

export default function ProductCatalog() {
  return (
    <section id="catalog" className="relative w-full bg-[#f8f9fa] border-y border-navy/10 overflow-hidden py-16 sm:py-20 lg:py-24">
      
      {/* Background Canvas Texture & Ambient Glows */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-10 top-10 w-72 h-72 bg-orange/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* NEW STREAMLINED SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-1 mb-14 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-1">
            <span className="w-6 h-[2px] bg-orange rounded-full" />
            <span className="text-[11px] sm:text-xs font-black tracking-[0.25em] text-orange uppercase">
              FEATURED ESSENTIALS
            </span>
            <span className="w-6 h-[2px] bg-orange rounded-full" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-navy uppercase scale-y-105 leading-none">
            OUR <span className="text-orange">PRODUCTS</span>
          </h2>
        </div>

        {/* 3-COLUMN PRODUCT CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <SingleProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>

      {/* Bottom Orange Accent Strip */}
      <div className="w-full h-1.5 bg-orange absolute bottom-0 left-0" />
    </section>
  );
}