'use client';

import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Scissors, 
  Shirt, 
  Palette, 
  Sparkles, 
  Tags,
  ChevronRight,
  Send,
  User,
  Mail,
  Phone,
  Building2,
  Box
} from 'lucide-react';

// --- MASTER DATA CONFIGURATION ---
const PRODUCTS = [
  { id: 'hoodie', name: 'Heavyweight Hoodie', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80', defaultFabric: 'Fleece' },
  { id: 'crewneck', name: 'Crewneck Sweatshirt', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80', defaultFabric: 'French Terry' },
  { id: 'joggers', name: 'Premium Joggers', img: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=600&q=80', defaultFabric: 'Fleece' },
  { id: 'tshirt', name: 'Oversized T-Shirt', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80', defaultFabric: 'Single Jersey' }
];

const FABRIC_DATA = {
  types: ['Fleece', 'French Terry', 'Single Jersey', 'Rib'],
  gsm: {
    'Fleece': ['280 GSM', '320 GSM', '350 GSM', '400+ GSM'],
    'French Terry': ['240 GSM', '280 GSM', '320 GSM'],
    'Single Jersey': ['160 GSM', '180 GSM', '220 GSM', '250 GSM'],
    'Rib': ['200 GSM', '250 GSM', '300 GSM']
  },
  finishes: ['Brushed', 'Unbrushed', 'Enzyme Wash', 'Silicone Wash']
};

const FIT_OPTIONS = [
  { id: 'regular', name: 'Regular Fit', desc: 'Standard true-to-size fit.' },
  { id: 'oversized', name: 'Oversized Fit', desc: 'Relaxed, wide-cut body.' },
  { id: 'drop-shoulder', name: 'Drop Shoulder', desc: 'Extended shoulder seams.' },
  { id: 'custom', name: 'Custom Pattern', desc: 'Upload your own tech pack.' }
];

const PRODUCT_COLORS = {
  'hoodie': [
    { name: 'Onyx Black', hex: '#111111' }, { name: 'Heather Grey', hex: '#9CA3AF' }, 
    { name: 'Dusty Taupe', hex: '#8B7355' }, { name: 'Midnight Navy', hex: '#092834' },
    { name: 'Burnt Orange', hex: '#FF5A00' }
  ],
  'crewneck': [
    { name: 'Onyx Black', hex: '#111111' }, { name: 'Vintage White', hex: '#F3F4F6' },
    { name: 'Forest Green', hex: '#064E3B' }, { name: 'Maroon', hex: '#7F1D1D' }
  ],
  'joggers': [
    { name: 'Onyx Black', hex: '#111111' }, { name: 'Heather Grey', hex: '#9CA3AF' },
    { name: 'Charcoal', hex: '#374151' }
  ],
  'tshirt': [
    { name: 'Onyx Black', hex: '#111111' }, { name: 'Optic White', hex: '#FFFFFF' },
    { name: 'Sand', hex: '#D2B48C' }, { name: 'Ocean Blue', hex: '#004e72' }
  ]
};

const DECORATION_METHODS = [
  { id: 'screen-print', name: 'Screen Printing', cost: 'Standard' },
  { id: 'embroidery', name: 'Embroidery', cost: 'Premium' },
  { id: 'puff-print', name: 'Puff Printing', cost: 'Premium' },
  { id: 'chenille', name: 'Chenille Patches', cost: 'Luxury' },
  { id: 'dtg', name: 'DTG Print', cost: 'Standard' }
];

const BRANDING_OPTIONS = [
  { id: 'woven-label', name: 'Woven Neck Label' },
  { id: 'hangtag', name: 'Custom Hangtag' },
  { id: 'polybag', name: 'Frosted Poly Bag' },
  { id: 'silicone-patch', name: 'Silicone Brand Patch' }
];

export default function CustomizationEngine() {
  // --- STATE MANAGEMENT ---
  const [activeTab, setActiveTab] = useState('Product');
  const [selections, setSelections] = useState({
    product: PRODUCTS[0],
    fabric: { type: 'Fleece', gsm: '400+ GSM', finish: 'Brushed' },
    fit: 'Oversized Fit',
    color: PRODUCT_COLORS['hoodie'][0],
    decorations: [],
    branding: [],
    customPantone: ''
  });
  const [customerDetails, setCustomerDetails] = useState({ name: '', email: '', company: '', phone: '', notes: '' });

  // Update logic mapped strictly to state
  const updateFabric = (key, value) => {
    setSelections(prev => {
      const newFabric = { ...prev.fabric, [key]: value };
      // Auto-adjust GSM if fabric type changes and current GSM isn't available
      if (key === 'type' && !FABRIC_DATA.gsm[value].includes(prev.fabric.gsm)) {
        newFabric.gsm = FABRIC_DATA.gsm[value][0];
      }
      return { ...prev, fabric: newFabric };
    });
  };

  const toggleArraySelection = (category, item) => {
    setSelections(prev => {
      const currentList = prev[category];
      const exists = currentList.find(i => i.id === item.id);
      return {
        ...prev,
        [category]: exists 
          ? currentList.filter(i => i.id !== item.id) 
          : [...currentList, item]
      };
    });
  };

  const changeProduct = (prod) => {
    setSelections(prev => ({
      ...prev,
      product: prod,
      fabric: { ...prev.fabric, type: prod.defaultFabric, gsm: FABRIC_DATA.gsm[prod.defaultFabric][0] },
      color: PRODUCT_COLORS[prod.id][0] // Reset to first color of new product
    }));
  };

  const tabs = ['Product', 'Fabric', 'Fit', 'Color', 'Decoration', 'Branding'];

  // --- RENDER HELPERS ---
  const renderTabNavigation = () => (
    <div className="flex overflow-x-auto border-b border-gray-200 hide-scroll-bar bg-white sticky top-0 z-20 shadow-sm">
      {tabs.map((tab, idx) => {
        const isActive = activeTab === tab;
        const isCompleted = tabs.indexOf(activeTab) > idx;
        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`min-w-[140px] flex-1 py-4 px-6 text-sm md:text-base font-bold flex items-center justify-center gap-2 transition-all border-b-4 ${
              isActive 
                ? 'text-orange border-orange bg-orange/5' 
                : 'text-gray-400 border-transparent hover:text-navy hover:bg-gray-50'
            }`}
          >
            {isCompleted ? <CheckCircle2 size={18} className="text-orange" /> : <span className="opacity-50">0{idx + 1}</span>}
            {tab}
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-navy pb-32">
      
      {/* HEADER */}
      <header className="bg-navy text-white py-36 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest mb-4">
          Build <span className="text-orange">The Product</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Select every detail from thread to packaging. Your selections are logged below in real-time.
        </p>
      </header>

      {/* MAIN BUILDER SECTION */}
      <main className="max-w-7xl mx-auto mt-[-2rem] px-4 md:px-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {renderTabNavigation()}

          <div className="p-8 md:p-12 min-h-[500px]">
            
            {/* STEP 1: PRODUCT */}
            {activeTab === 'Product' && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-extrabold mb-8 text-navy flex items-center gap-3">
                  <Box className="text-orange" /> Select Canvas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {PRODUCTS.map(prod => (
                    <div 
                      key={prod.id}
                      onClick={() => changeProduct(prod)}
                      className={`cursor-pointer rounded-xl border-2 overflow-hidden transition-all duration-300 group ${
                        selections.product.id === prod.id ? 'border-orange ring-4 ring-orange/20' : 'border-gray-100 hover:border-gray-300'
                      }`}
                    >
                      <div className="h-64 bg-cover bg-center relative" style={{backgroundImage: `url(${prod.img})`}}>
                        <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-all"></div>
                        {selections.product.id === prod.id && (
                          <div className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-lg">
                            <CheckCircle2 className="text-orange" size={24} />
                          </div>
                        )}
                      </div>
                      <div className={`p-4 font-bold text-center ${selections.product.id === prod.id ? 'bg-orange text-white' : 'bg-white text-navy'}`}>
                        {prod.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: FABRIC */}
            {activeTab === 'Fabric' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 animate-fadeIn">
                <div className="col-span-1 space-y-6">
                  <h2 className="text-2xl font-extrabold mb-6 flex items-center gap-3"><Scissors className="text-orange"/> Fabric Details</h2>
                  
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block">Material Type</label>
                    <div className="space-y-3">
                      {FABRIC_DATA.types.map(type => (
                        <button
                          key={type}
                          onClick={() => updateFabric('type', type)}
                          className={`w-full text-left px-5 py-4 rounded-lg font-bold border-2 transition-all flex justify-between items-center ${
                            selections.fabric.type === type ? 'bg-navy border-navy text-white shadow-lg' : 'bg-white border-gray-200 text-navy hover:border-orange'
                          }`}
                        >
                          {type}
                          {selections.fabric.type === type && <div className="w-2.5 h-2.5 rounded-full bg-orange shadow-[0_0_8px_#FF5A00]"></div>}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-span-2 space-y-8 bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 block">Weight (GSM)</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {FABRIC_DATA.gsm[selections.fabric.type].map(gsm => (
                        <button
                          key={gsm}
                          onClick={() => updateFabric('gsm', gsm)}
                          className={`py-3 rounded-lg font-bold border-2 transition-all ${
                            selections.fabric.gsm === gsm ? 'bg-orange text-white border-orange shadow-md' : 'bg-white border-gray-200 text-navy hover:border-orange'
                          }`}
                        >
                          {gsm}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 block">Surface Finish</label>
                    <div className="grid grid-cols-2 gap-4">
                      {FABRIC_DATA.finishes.map(finish => (
                        <button
                          key={finish}
                          onClick={() => updateFabric('finish', finish)}
                          className={`py-4 px-6 rounded-lg font-bold border-2 text-left transition-all ${
                            selections.fabric.finish === finish ? 'bg-blue/5 border-blue text-blue shadow-sm' : 'bg-white border-gray-200 hover:border-blue'
                          }`}
                        >
                          {finish}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: FIT */}
            {activeTab === 'Fit' && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-extrabold mb-8 flex items-center gap-3"><Shirt className="text-orange"/> Silhouette & Fit</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {FIT_OPTIONS.map(fit => (
                    <div 
                      key={fit.id}
                      onClick={() => setSelections(prev => ({ ...prev, fit: fit.name }))}
                      className={`cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[200px] ${
                        selections.fit === fit.name ? 'border-orange bg-orange/5 shadow-lg scale-105' : 'border-gray-200 bg-white hover:border-orange hover:shadow-md'
                      }`}
                    >
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors ${
                        selections.fit === fit.name ? 'bg-orange text-white' : 'bg-gray-100 text-gray-400'
                      }`}>
                        <Shirt size={32} />
                      </div>
                      <h3 className="font-extrabold text-lg mb-2">{fit.name}</h3>
                      <p className="text-sm text-gray-500">{fit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 4: COLOR */}
            {activeTab === 'Color' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fadeIn">
                <div>
                  <h2 className="text-2xl font-extrabold mb-4 flex items-center gap-3"><Palette className="text-orange"/> Choose Brand Color</h2>
                  <p className="text-gray-500 mb-8">Showing available premium dyes for <strong>{selections.product.name}</strong>.</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {PRODUCT_COLORS[selections.product.id].map(color => (
                      <button
                        key={color.name}
                        onClick={() => setSelections(prev => ({ ...prev, color: color, customPantone: '' }))}
                        className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all ${
                          selections.color?.name === color.name ? 'border-orange shadow-md bg-white' : 'border-gray-100 bg-gray-50 hover:border-gray-300'
                        }`}
                      >
                        <div className="w-12 h-12 rounded-full mb-3 shadow-inner border border-gray-200" style={{ backgroundColor: color.hex }}></div>
                        <span className="text-sm font-bold text-center">{color.name}</span>
                      </button>
                    ))}
                  </div>

                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <label className="text-sm font-bold text-navy mb-2 block">Custom Pantone (Optional)</label>
                    <input 
                      type="text" 
                      placeholder="e.g. PMS 202 C" 
                      value={selections.customPantone}
                      onChange={(e) => setSelections(prev => ({ 
                        ...prev, 
                        customPantone: e.target.value,
                        color: e.target.value ? { name: `Custom: ${e.target.value}`, hex: '#ffffff' } : PRODUCT_COLORS[selections.product.id][0]
                      }))}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent font-medium"
                    />
                  </div>
                </div>

                <div className="bg-gray-100 rounded-2xl flex items-center justify-center p-12 min-h-[400px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply" style={{backgroundImage: `url(${selections.product.img})`}}></div>
                  <div className="absolute inset-0 transition-colors duration-500 mix-blend-color" style={{ backgroundColor: selections.color?.hex }}></div>
                  
                  <div className="relative z-10 bg-white/90 backdrop-blur p-6 rounded-xl shadow-xl text-center border border-white/50">
                    <div className="w-16 h-16 rounded-full mx-auto mb-3 shadow-md border-4 border-white" style={{ backgroundColor: selections.color?.hex }}></div>
                    <p className="font-extrabold text-xl">{selections.color?.name}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Selected Shade</p>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5 & 6: DECORATION & BRANDING */}
            {(activeTab === 'Decoration' || activeTab === 'Branding') && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-extrabold mb-2 flex items-center gap-3">
                  {activeTab === 'Decoration' ? <Sparkles className="text-orange"/> : <Tags className="text-orange"/>} 
                  {activeTab === 'Decoration' ? 'Art & Decoration' : 'Trims & Packaging'}
                </h2>
                <p className="text-gray-500 mb-8">Select multiple options. These define your final retail presentation.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(activeTab === 'Decoration' ? DECORATION_METHODS : BRANDING_OPTIONS).map(item => {
                    const category = activeTab === 'Decoration' ? 'decorations' : 'branding';
                    const isSelected = selections[category].find(i => i.id === item.id);
                    
                    return (
                      <div 
                        key={item.id}
                        onClick={() => toggleArraySelection(category, item)}
                        className={`cursor-pointer p-6 rounded-xl border-2 transition-all flex items-start gap-4 ${
                          isSelected ? 'border-blue bg-blue/5 shadow-md' : 'border-gray-200 bg-white hover:border-blue/50'
                        }`}
                      >
                        <div className={`mt-1 w-6 h-6 rounded flex items-center justify-center border-2 shrink-0 ${
                          isSelected ? 'bg-blue border-blue text-white' : 'border-gray-300'
                        }`}>
                          {isSelected && <CheckCircle2 size={16} />}
                        </div>
                        <div>
                          <h3 className={`font-extrabold text-lg ${isSelected ? 'text-blue' : 'text-navy'}`}>{item.name}</h3>
                          {item.cost && <span className="text-xs font-bold text-gray-400 uppercase">{item.cost} Tier</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>
          
          {/* Navigation Footer within Card */}
          <div className="bg-gray-50 p-6 border-t border-gray-200 flex justify-end">
            <button 
              onClick={() => {
                const currentIndex = tabs.indexOf(activeTab);
                if (currentIndex < tabs.length - 1) setActiveTab(tabs[currentIndex + 1]);
              }}
              className="bg-navy text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-orange transition-colors"
            >
              {activeTab === 'Branding' ? 'Review Below' : 'Next Step'} <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </main>

      {/* --- LIVE SUMMARY & FINAL FORM SECTION --- */}
      <section className="max-w-7xl mx-auto mt-16 px-4 md:px-8">
        <div className="bg-navy rounded-3xl p-8 md:p-12 shadow-2xl text-white grid grid-cols-1 lg:grid-cols-2 gap-16 relative overflow-hidden">
          
          {/* Decorative background elements */}
          <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-orange rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-96 h-96 bg-blue rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>

          {/* Left: Dynamic Build Summary */}
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold mb-2 text-white">Your Tech Pack <span className="text-orange">Summary</span></h2>
            <p className="text-gray-400 mb-8 text-sm">Review your custom specifications before submitting.</p>
            
            <div className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs text-orange font-bold uppercase tracking-widest mb-1">Base Product</p>
                  <p className="text-xl font-extrabold">{selections.product.name}</p>
                </div>
                <p className="font-bold text-gray-300">{selections.fit}</p>
              </div>

              <div className="grid grid-cols-2 gap-6 pb-4 border-b border-white/10">
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Fabric Shell</p>
                  <p className="font-bold">{selections.fabric.type} • {selections.fabric.gsm}</p>
                  <p className="text-sm text-gray-300 mt-1">{selections.fabric.finish} Finish</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Master Color</p>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="w-6 h-6 rounded-full border border-gray-600 shadow-sm" style={{ backgroundColor: selections.color?.hex }}></div>
                    <p className="font-bold">{selections.color?.name}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">Decorations</p>
                  {selections.decorations.length > 0 ? (
                    <ul className="space-y-1">
                      {selections.decorations.map(d => <li key={d.id} className="text-sm font-medium text-gray-200 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue"></span> {d.name}</li>)}
                    </ul>
                  ) : <p className="text-sm text-gray-500 italic">None selected</p>}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">Trims & Branding</p>
                  {selections.branding.length > 0 ? (
                    <ul className="space-y-1">
                      {selections.branding.map(b => <li key={b.id} className="text-sm font-medium text-gray-200 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange"></span> {b.name}</li>)}
                    </ul>
                  ) : <p className="text-sm text-gray-500 italic">None selected</p>}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Lead Capture Form */}
          <div className="relative z-10 flex flex-col justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl text-navy">
              <h3 className="text-2xl font-extrabold mb-6 flex items-center gap-2"><Send className="text-orange" size={24} /> Get Custom Quote</h3>
              
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); console.log('SUBMITTING PAYLOAD:', { selections, customerDetails }); alert('Requirements logged in console!'); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      required
                      value={customerDetails.name}
                      onChange={(e) => setCustomerDetails({...customerDetails, name: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange font-medium" 
                    />
                  </div>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="Brand / Company" 
                      value={customerDetails.company}
                      onChange={(e) => setCustomerDetails({...customerDetails, company: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange font-medium" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      required
                      value={customerDetails.email}
                      onChange={(e) => setCustomerDetails({...customerDetails, email: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange font-medium" 
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      value={customerDetails.phone}
                      onChange={(e) => setCustomerDetails({...customerDetails, phone: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange font-medium" 
                    />
                  </div>
                </div>

                <textarea 
                  placeholder="Additional specific requirements, target quantities, or deadlines..." 
                  rows="3"
                  value={customerDetails.notes}
                  onChange={(e) => setCustomerDetails({...customerDetails, notes: e.target.value})}
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange font-medium resize-none"
                ></textarea>

                <button 
                  type="submit"
                  className="w-full bg-orange text-white py-4 rounded-lg font-extrabold text-lg hover:bg-navy transition-colors shadow-lg shadow-orange/30 mt-2"
                >
                  Submit Requirements Request
                </button>
                <p className="text-xs text-center text-gray-400 mt-3 font-medium">
                  By submitting, you send the selected tech pack specs for quotation. No payment required yet.
                </p>
              </form>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
}