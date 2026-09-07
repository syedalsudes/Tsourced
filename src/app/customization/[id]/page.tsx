'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingBag, ArrowLeft, Plus, Minus, Check, Droplet, Ruler, Scissors } from 'lucide-react';
import Link from 'next/link';
import { PRODUCTS } from '@/lib/customdata';

interface QuoteItem {
  fabric: string[];
  gsm: string[];
  fit: string[];
  color: string;
  decorations: string[];
  quantity: number;
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>(null);
  
  // Initial state me quantity ko 0 set kiya gaya hai
  const [selections, setSelections] = useState<QuoteItem>({
    fabric: [],
    gsm: [],
    fit: [],
    color: '',
    decorations: [],
    quantity: 0
  });

  // Mock Options
  const fabricOptions = ['Fleece', 'French Terry', 'Cotton Twill', 'Single Jersey'];
  const gsmOptions = ['280 GSM', '320 GSM', '350 GSM', '400+ GSM'];
  const fitOptions = ['Regular Fit', 'Oversized', 'Drop Shoulder', 'Boxy Fit'];
  const decorationOptions = ['Screen Print', 'Embroidery', 'Puff Print', 'DTG', 'Custom Labels'];

  useEffect(() => {
    const found = PRODUCTS?.find((p: any) => p.id === params.id);
    if (found) setProduct(found);
  }, [params.id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-navy font-extrabold text-2xl tracking-widest animate-pulse">
        LOADING CANVAS...
      </div>
    );
  }

  // Generic multi-select toggle helper
  const toggleSelection = (key: 'fabric' | 'gsm' | 'fit' | 'decorations', value: string) => {
    setSelections(prev => {
      const exists = prev[key].includes(value);
      return {
        ...prev,
        [key]: exists 
          ? prev[key].filter(item => item !== value)
          : [...prev[key], value]
      };
    });
  };

  // Quantity ko 1 se increment / decrement karne ke liye helper function
  const updateQuantity = (amount: number) => {
    setSelections(prev => ({
      ...prev,
      quantity: Math.max(0, prev.quantity + amount)
    }));
  };

  // Direct Typing handle karne ke liye function
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    setSelections(prev => ({
      ...prev,
      quantity: isNaN(val) ? 0 : Math.max(0, val)
    }));
  };

  // Validation: Fabric, GSM, Fit teeno select hon AND Quantity > 0 honi chahiye
  const isFormValid = 
    selections.fabric.length > 0 && 
    selections.gsm.length > 0 && 
    selections.fit.length > 0 &&
    selections.quantity > 0;

  const handleAddToQuote = () => {
    if (!isFormValid) return;
    console.log('Added to Quote Cart:', { product: product.name, ...selections });
    alert(`${product.name} added to your quote cart successfully!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24 px-4 sm:px-6 lg:px-8 font-sans text-navy selection:bg-orange selection:text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb / Back Button */}
        <Link href="/customization" className="group inline-flex items-center text-sm font-bold text-gray-400 hover:text-orange transition-colors mb-8">
          <ArrowLeft size={18} className="mr-2 transform group-hover:-translate-x-1 transition-transform" /> 
          Back to Catalogue
        </Link>

        {/* Main Product Configurator Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col lg:flex-row">
          
          {/* LEFT COLUMN: Sticky Image Showcase */}
          <div className="lg:w-1/2 p-6 lg:p-10 bg-gray-50/50 border-r border-gray-100 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
            <div className="sticky top-32 h-max w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-inner bg-gray-200 group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: `url(${product.img})` }}
              ></div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-navy text-xs font-extrabold px-3 py-1.5 rounded-md uppercase tracking-widest shadow-sm">
                {product.category}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Configurator Form */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none bg-white">
            
            <h1 className="text-3xl lg:text-5xl font-extrabold text-navy mb-4 leading-tight">{product.name}</h1>
            <p className="text-gray-500 mb-10 leading-relaxed text-lg">
              {product.desc} Build your custom tech-pack by selecting the specifications below.
            </p>

            <div className="space-y-10">
              
              {/* FABRIC SELECTION (Mandatory & Multi-select) */}
              <div>
                <label className="flex items-center gap-2 text-sm font-extrabold text-navy uppercase tracking-widest mb-4">
                  <Scissors className="text-orange" size={18}/> Fabric Shell <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {fabricOptions.map(opt => {
                    const isSelected = selections.fabric.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleSelection('fabric', opt)}
                        className={`py-4 px-4 rounded-xl border-2 text-sm font-bold text-left transition-all flex justify-between items-center ${
                          isSelected 
                            ? 'border-orange bg-orange/5 text-orange shadow-sm' 
                            : 'border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {opt}
                        {isSelected && <Check size={16} />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* GSM SELECTION (Mandatory & Multi-select) */}
              <div>
                <label className="flex items-center gap-2 text-sm font-extrabold text-navy uppercase tracking-widest mb-4">
                  <Droplet className="text-orange" size={18}/> Weight (GSM) <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {gsmOptions.map(opt => {
                    const isSelected = selections.gsm.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleSelection('gsm', opt)}
                        className={`py-3 px-2 rounded-xl border-2 text-sm font-bold transition-all flex items-center justify-center gap-1 ${
                          isSelected 
                            ? 'border-navy bg-navy text-white shadow-md' 
                            : 'border-gray-200 text-gray-500 hover:border-navy'
                        }`}
                      >
                        {opt}
                        {isSelected && <Check size={14} />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* FIT SELECTION (Mandatory & Multi-select) */}
              <div>
                <label className="flex items-center gap-2 text-sm font-extrabold text-navy uppercase tracking-widest mb-4">
                  <Ruler className="text-orange" size={18}/> Fit Pattern <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {fitOptions.map(opt => {
                    const isSelected = selections.fit.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleSelection('fit', opt)}
                        className={`py-4 px-4 rounded-xl border-2 text-sm font-bold text-left transition-all flex justify-between items-center ${
                          isSelected 
                            ? 'border-orange bg-orange/5 text-orange shadow-sm' 
                            : 'border-gray-200 text-gray-500 hover:border-gray-300'
                        }`}
                      >
                        {opt}
                        {isSelected && <Check size={16} />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* COLOR INPUT */}
              <div>
                <label className="text-sm font-extrabold text-navy uppercase tracking-widest mb-4 block">
                  Pantone / Dye Shade
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="e.g. Onyx Black or PMS 202C"
                    value={selections.color}
                    onChange={(e) => setSelections({...selections, color: e.target.value})}
                    className="w-full border-2 border-gray-200 rounded-xl py-4 px-5 text-navy font-bold focus:outline-none focus:border-orange focus:ring-4 focus:ring-orange/10 transition-all placeholder:font-medium placeholder:text-gray-400"
                  />
                  <div className="absolute right-4 top-4 w-6 h-6 rounded-full border border-gray-300 shadow-sm" style={{ backgroundColor: selections.color ? selections.color : '#f3f4f6' }}></div>
                </div>
              </div>

              {/* DECORATIONS (Multi-select) */}
              <div>
                <label className="text-sm font-extrabold text-navy uppercase tracking-widest mb-4 block">
                  Additional Decor Options
                </label>
                <div className="flex flex-wrap gap-3">
                  {decorationOptions.map(opt => {
                    const isSelected = selections.decorations.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleSelection('decorations', opt)}
                        className={`py-2.5 px-5 rounded-lg text-sm font-bold border-2 transition-all ${
                          isSelected 
                            ? 'bg-navy text-white border-navy shadow-md' 
                            : 'bg-white text-gray-500 border-gray-200 hover:border-navy'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* CHECKOUT / ADD TO QUOTE SECTION */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-end gap-6">
              
              {/* Custom Quantity Input */}
              <div className="w-full md:w-auto">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">
                  Target Qty <span className="text-red-500">*</span>
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
                    className="w-24 text-center font-extrabold text-xl text-navy focus:outline-none hide-number-arrows"
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

              {/* Submit Button (Form aur Quantity Valid hone par hi active hoga) */}
              <button 
                type="button"
                disabled={!isFormValid}
                onClick={handleAddToQuote}
                className={`w-full flex-1 h-[60px] rounded-xl font-extrabold text-lg flex items-center justify-center gap-3 transition-all ${
                  isFormValid 
                    ? 'bg-orange text-white hover:bg-navy shadow-xl shadow-orange/20 cursor-pointer transform hover:-translate-y-1' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60'
                }`}
              >
                <ShoppingBag size={24} />
                ADD TO QUOTE
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}