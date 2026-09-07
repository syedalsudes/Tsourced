'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, SlidersHorizontal, Package, Zap, ShieldCheck } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '@/lib/products';

export default function ProductsCatalogue() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(prod => prod.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans text-navy selection:bg-orange selection:text-white">
      
      {/* Hero Section */}
      <header className="relative w-full bg-navy pt-32 pb-40 px-6 md:px-12 shadow-md overflow-hidden">
        <div className="absolute top-[-20%] right-[-5%] w-[400px] h-[400px] bg-orange rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        <div className="absolute bottom-[-20%] left-[-5%] w-[300px] h-[300px] bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <p className="text-orange font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-orange inline-block"></span> Ready To Wear Collection <span className="w-8 h-[2px] bg-orange inline-block"></span>
          </p>
          
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-6 text-white leading-tight">
            Explore Our Premium <br />
            <span className="text-orange">Product Lineup</span>
          </h1>
          
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Browse our complete catalog of high-quality finished apparel. Select your favorite items and order directly with flexible bulk purchasing options.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-white text-sm font-medium">
            <div className="flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-sm border border-white/10 shadow-lg">
              <ShieldCheck className="text-orange" size={18} /> Premium Quality
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-sm border border-white/10 shadow-lg">
              <Package className="text-orange" size={18} /> In Stock & Ready
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-sm border border-white/10 shadow-lg">
              <Zap className="text-orange" size={18} /> Express Dispatch
            </div>
          </div>
        </div>

        {/* SVG Curve at the Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-[1px]">
          <svg className="relative block w-full h-[60px] md:h-[120px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.1,130.83,115.1,188.73,109.18C233.72,104.53,277.6,83.9,321.39,56.44Z" className="fill-gray-50"></path>
          </svg>
        </div>
      </header>
    
      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        <div className="flex flex-col items-center justify-center mb-16 -mt-16 gap-4">
          <div className="flex items-center gap-2 bg-white p-2 rounded-full shadow-xl border border-gray-100 overflow-x-auto max-w-full">
            <div className="pl-4 pr-2 text-orange hidden md:block">
              <SlidersHorizontal size={20} />
            </div>
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all whitespace-nowrap ${
                  activeCategory === category 
                    ? 'bg-navy text-white shadow-md' 
                    : 'text-gray-500 hover:text-navy hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(prod => (
            <Link href={`/products/${prod.id}`} key={prod.id} className="group">
              <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl hover:border-orange/30 transition-all duration-500 flex flex-col h-full transform hover:-translate-y-2">
                
                {/* Image Container with Proper Aspect Ratio & No Crop/Over-Zoom */}
                <div className="h-80 w-full bg-[#f8f9fa] relative p-6 flex items-center justify-center">
                  {prod.badge && (
                    <div className="absolute top-5 left-5 z-20 bg-orange text-white text-[10px] font-extrabold uppercase tracking-widest py-2 px-4 rounded-full shadow-lg">
                      {prod.badge}
                    </div>
                  )}
                  
                  <div className="relative w-full h-full">
                    <Image
                      src={prod.img}
                      alt={prod.name}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="absolute inset-0 z-10 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-white text-navy font-bold py-3 px-6 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl flex items-center gap-2">
                      View Details <ArrowRight size={18} className="text-orange" />
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow relative bg-white">                  
                  <h3 className="text-2xl font-extrabold text-navy mb-3 group-hover:text-orange transition-colors">{prod.name}</h3>
                  <p className="text-sm text-gray-500 mb-8 flex-grow leading-relaxed">{prod.desc}</p>
                  
                  <div className="w-full h-[1px] bg-gray-100 mb-5 group-hover:bg-orange/20 transition-colors"></div>
                  
                  <div className="flex items-center justify-between text-sm font-bold text-navy group-hover:text-orange transition-colors">
                    <span>View Product Details</span>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-orange/10 transition-colors">
                      <ArrowRight size={16} className="text-gray-400 group-hover:text-orange transform group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </section>
      
    </div>
  );
}