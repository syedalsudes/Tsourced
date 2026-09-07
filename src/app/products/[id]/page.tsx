'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingBag, ArrowLeft, Plus, Minus, Check, Droplet, Ruler, Scissors, Palette, Sparkles, ShieldCheck, Info } from 'lucide-react';
import Link from 'next/link';
import { PRODUCTS } from '@/lib/products';

interface ProductSelections {
  fabric: string[];
  weight: string[];
  fit: string[];
  colors: string[];
  additionalOptions: string[];
  quantity: number;
}

export default function StandardProductDetailPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>(null);
  
  const [selections, setSelections] = useState<ProductSelections>({
    fabric: [],
    weight: [],
    fit: [],
    colors: [],
    additionalOptions: [],
    quantity: 0
  });

  useEffect(() => {
    const found = PRODUCTS?.find((p: any) => p.id === params.id);
    if (found) setProduct(found);
  }, [params.id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-navy font-extrabold text-2xl tracking-widest animate-pulse">
        LOADING PRODUCT...
      </div>
    );
  }

  // Fallback options agar product object me specifics defined na hon
  const availableFabrics: string[] = product.fabrics || ['100% Organic Cotton', 'Polyester Blend', 'Heavyweight Fleece'];
  const availableWeights: string[] = product.weights || ['240 GSM', '300 GSM', '360 GSM'];
  const availableFits: string[] = product.fits || ['Regular Fit', 'Oversized Fit', 'Relaxed Fit'];
  const availableColors: { name: string; hex: string }[] = product.colors || [
    { name: 'Onyx Black', hex: '#111827' },
    { name: 'Pure White', hex: '#FFFFFF' },
    { name: 'Heather Grey', hex: '#9CA3AF' },
    { name: 'Navy Blue', hex: '#1E3A8A' },
    { name: 'Rust Orange', hex: '#EA580C' }
  ];
  const availableAdditional: string[] = product.additionalOpts || ['Custom Neck Label', 'Individual Polybag', 'Hangtag Included', 'Pre-Shrunk Finish'];

  // Multi-select toggle helper
  const toggleSelection = (key: keyof Omit<ProductSelections, 'quantity'>, value: string) => {
    setSelections(prev => {
      const currentList = prev[key] as string[];
      const exists = currentList.includes(value);
      return {
        ...prev,
        [key]: exists 
          ? currentList.filter(item => item !== value)
          : [...currentList, value]
      };
    });
  };

  // Quantity helpers
  const updateQuantity = (amount: number) => {
    setSelections(prev => ({
      ...prev,
      quantity: Math.max(0, prev.quantity + amount)
    }));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    setSelections(prev => ({
      ...prev,
      quantity: isNaN(val) ? 0 : Math.max(0, val)
    }));
  };

  // Requirement: Saari 5 categories me kam se kam ek choice multiple selected ho AND quantity > 0 ho
  const isFormValid = 
    selections.fabric.length > 0 && 
    selections.weight.length > 0 && 
    selections.fit.length > 0 &&
    selections.colors.length > 0 &&
    selections.additionalOptions.length > 0 &&
    selections.quantity > 0;

  const handleAddToCart = () => {
    if (!isFormValid) return;
    console.log('Product Order Selections:', { productId: product.id, productName: product.name, ...selections });
    alert(`${product.name} with selected specifications added to cart successfully!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24 px-4 sm:px-6 lg:px-8 font-sans text-navy selection:bg-orange selection:text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Link */}
        <Link href="/products" className="group inline-flex items-center text-sm font-bold text-gray-400 hover:text-orange transition-colors mb-8">
          <ArrowLeft size={18} className="mr-2 transform group-hover:-translate-x-1 transition-transform" /> 
          Back to Catalogue
        </Link>

        {/* Product Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col lg:flex-row">
          
          {/* LEFT: Image Showcase & Extra Product Info */}
          <div className="lg:w-1/2 p-6 lg:p-10 bg-gray-50/50 border-r border-gray-100 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none flex flex-col justify-between">
            <div className="sticky top-32 space-y-8">
              
              <div className="h-max w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-inner bg-gray-200 group relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: `url(${product.img})` }}
                ></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-navy text-xs font-extrabold px-3 py-1.5 rounded-md uppercase tracking-widest shadow-sm">
                  {product.category}
                </div>
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-orange text-white text-xs font-extrabold px-3 py-1.5 rounded-md uppercase tracking-widest shadow-sm">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Extra Dynamic Text / Specifications Section */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider flex items-center gap-2">
                  <Info className="text-orange" size={18} /> Product Specifications & Notes
                </h4>
                
                <p className="text-xs text-gray-500 leading-relaxed">
                  {product.extraNotes || "This item is manufactured with high-density precision stitching, pre-shrunk treatment to minimize shrinkage after washing, and eco-friendly dyes for long-lasting color brilliance."}
                </p>

                {product.highlights && (
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {product.highlights.map((highlight: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs font-bold text-navy bg-gray-50 p-2 rounded-lg">
                        <ShieldCheck size={14} className="text-orange shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* RIGHT: Product Selections */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none bg-white">
            
            <h1 className="text-3xl lg:text-5xl font-extrabold text-navy mb-3 leading-tight">{product.name}</h1>
            <p className="text-gray-500 mb-8 leading-relaxed text-base">
              {product.desc}
            </p>

            <div className="space-y-8">
              
              {/* 1. FABRIC SELECTION (Required Multi-select) */}
              <div>
                <label className="flex items-center justify-between text-sm font-extrabold text-navy uppercase tracking-widest mb-3">
                  <span className="flex items-center gap-2"><Scissors className="text-orange" size={18}/> Fabric Material <span className="text-red-500">*</span></span>
                  <span className="text-xs font-normal text-gray-400 uppercase">Select One or More</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {availableFabrics.map(opt => {
                    const isSelected = selections.fabric.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleSelection('fabric', opt)}
                        className={`py-3.5 px-4 rounded-xl border-2 text-sm font-bold text-left transition-all flex justify-between items-center ${
                          isSelected 
                            ? 'border-orange bg-orange/5 text-orange shadow-sm' 
                            : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {opt}
                        {isSelected && <Check size={16} />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. WEIGHT / GSM SELECTION (Required Multi-select) */}
              <div>
                <label className="flex items-center justify-between text-sm font-extrabold text-navy uppercase tracking-widest mb-3">
                  <span className="flex items-center gap-2"><Droplet className="text-orange" size={18}/> Fabric Weight <span className="text-red-500">*</span></span>
                  <span className="text-xs font-normal text-gray-400 uppercase">Select One or More</span>
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {availableWeights.map(opt => {
                    const isSelected = selections.weight.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleSelection('weight', opt)}
                        className={`py-3 px-2 rounded-xl border-2 text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                          isSelected 
                            ? 'border-navy bg-navy text-white shadow-md' 
                            : 'border-gray-200 text-gray-600 hover:border-navy'
                        }`}
                      >
                        {opt}
                        {isSelected && <Check size={14} />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. FIT PATTERN SELECTION (Required Multi-select) */}
              <div>
                <label className="flex items-center justify-between text-sm font-extrabold text-navy uppercase tracking-widest mb-3">
                  <span className="flex items-center gap-2"><Ruler className="text-orange" size={18}/> Fit Pattern <span className="text-red-500">*</span></span>
                  <span className="text-xs font-normal text-gray-400 uppercase">Select One or More</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {availableFits.map(opt => {
                    const isSelected = selections.fit.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleSelection('fit', opt)}
                        className={`py-3 px-3 rounded-xl border-2 text-xs font-bold transition-all flex items-center justify-between ${
                          isSelected 
                            ? 'border-orange bg-orange/5 text-orange shadow-sm' 
                            : 'border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        {opt}
                        {isSelected && <Check size={14} />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. COLOR SELECTION (Circle Colors - Required Multi-select) */}
              <div>
                <label className="flex items-center justify-between text-sm font-extrabold text-navy uppercase tracking-widest mb-3">
                  <span className="flex items-center gap-2"><Palette className="text-orange" size={18}/> Available Colors <span className="text-red-500">*</span></span>
                  <span className="text-xs font-normal text-gray-400 uppercase">Select Circles</span>
                </label>
                <div className="flex flex-wrap gap-4 items-center bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  {availableColors.map(colorObj => {
                    const isSelected = selections.colors.includes(colorObj.name);
                    return (
                      <button
                        key={colorObj.name}
                        type="button"
                        title={colorObj.name}
                        onClick={() => toggleSelection('colors', colorObj.name)}
                        className={`relative w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center transform hover:scale-110 ${
                          isSelected ? 'border-orange ring-4 ring-orange/20 scale-105' : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: colorObj.hex }}
                      >
                        {isSelected && (
                          <Check 
                            size={18} 
                            className={colorObj.hex.toLowerCase() === '#ffffff' ? 'text-black' : 'text-white'} 
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 5. ADDITIONAL OPTIONS (Required Multi-select) */}
              <div>
                <label className="flex items-center justify-between text-sm font-extrabold text-navy uppercase tracking-widest mb-3">
                  <span className="flex items-center gap-2"><Sparkles className="text-orange" size={18}/> Packaging & Finishing <span className="text-red-500">*</span></span>
                  <span className="text-xs font-normal text-gray-400 uppercase">Select One or More</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {availableAdditional.map(opt => {
                    const isSelected = selections.additionalOptions.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleSelection('additionalOptions', opt)}
                        className={`py-3 px-4 rounded-xl text-xs font-bold border-2 transition-all flex items-center justify-between ${
                          isSelected 
                            ? 'bg-navy text-white border-navy shadow-md' 
                            : 'bg-white text-gray-600 border-gray-200 hover:border-navy'
                        }`}
                      >
                        <span>{opt}</span>
                        {isSelected && <Check size={14} />}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* CHECKOUT / ADD TO CART SECTION */}
            <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-end gap-6">
              
              {/* Quantity Input */}
              <div className="w-full md:w-auto">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">
                  Quantity <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden h-[60px] bg-white">
                  <button 
                    type="button"
                    onClick={() => updateQuantity(-1)}
                    className="w-14 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-orange transition-colors"
                  >
                    <Minus size={20} />
                  </button>
                  <input 
                    type="number"
                    value={selections.quantity === 0 ? '' : selections.quantity}
                    placeholder="0"
                    onChange={handleQuantityChange}
                    className="w-20 text-center font-extrabold text-xl text-navy focus:outline-none hide-number-arrows"
                    min="0"
                  />
                  <button 
                    type="button"
                    onClick={() => updateQuantity(1)}
                    className="w-14 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-orange transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>

              {/* Submit Button (All 5 mandatory fields + Qty > 0 check) */}
              <button 
                type="button"
                disabled={!isFormValid}
                onClick={handleAddToCart}
                className={`w-full flex-1 h-[60px] rounded-xl font-extrabold text-lg flex items-center justify-center gap-3 transition-all ${
                  isFormValid 
                    ? 'bg-orange text-white hover:bg-navy shadow-xl shadow-orange/20 cursor-pointer transform hover:-translate-y-1' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60'
                }`}
              >
                <ShoppingBag size={24} />
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}