'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { 
  ArrowLeft, 
  UserCircle, 
  Mail, 
  Building2, 
  MapPin, 
  PhoneCall, 
  Send, 
  Layers, 
  Package,
  Globe2,
  Map,
  Building,
  CheckCircle2
} from 'lucide-react';

// Country Data mapping with States and Phone formatting rules
const COUNTRY_DATA = {
  US: { name: 'United States', code: '+1', phoneLength: 10, format: '(###) ###-####', states: ['California', 'Texas', 'New York', 'Florida', 'Illinois', 'Washington'] },
  CA: { name: 'Canada', code: '+1', phoneLength: 10, format: '(###) ###-####', states: ['Ontario', 'Quebec', 'British Columbia', 'Alberta'] },
  UK: { name: 'United Kingdom', code: '+44', phoneLength: 10, format: '#### ######', states: ['England', 'Scotland', 'Wales', 'Northern Ireland'] },
  PK: { name: 'Pakistan', code: '+92', phoneLength: 10, format: '### #######', states: ['Sindh', 'Punjab', 'KPK', 'Balochistan', 'Gilgit Baltistan'] },
  AU: { name: 'Australia', code: '+61', phoneLength: 9, format: '### ### ###', states: ['New South Wales', 'Victoria', 'Queensland', 'Western Australia'] }
};

export default function CheckoutPage() {
  const { cart } = useCart();
  const router = useRouter();
  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    country: 'US',
    province: '',
    city: '',
    phone: ''
  });

  // Redirect to cart if empty
  useEffect(() => {
    if (cart.length === 0) {
      router.push('/cart');
    }
  }, [cart, router]);

  const currentCountryInfo = COUNTRY_DATA[formData.country as keyof typeof COUNTRY_DATA];

  // Phone number formatter based on country rule
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, ''); // Remove non-digits
    
    // Limit length
    if (val.length > currentCountryInfo.phoneLength) {
      val = val.slice(0, currentCountryInfo.phoneLength);
    }

    // Apply Format (e.g., (###) ###-####)
    let formatted = val;
    if (currentCountryInfo.format && val.length > 0) {
      let formatStr = currentCountryInfo.format;
      formatted = '';
      let valIndex = 0;
      for (let i = 0; i < formatStr.length; i++) {
        if (valIndex >= val.length) break;
        if (formatStr[i] === '#') {
          formatted += val[valIndex];
          valIndex++;
        } else {
          formatted += formatStr[i];
        }
      }
    }

    setFormData({ ...formData, phone: formatted });
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ 
      ...formData, 
      country: e.target.value, 
      province: '', // Reset province when country changes
      phone: ''     // Reset phone to match new format
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Yahan API integration hogi jo Email send karegi admin ko
    alert('Quote Request Submitted! We will contact you soon.');
    // clearCart() & redirect to success page
  };

  if (cart.length === 0) return null;

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-24 px-4 sm:px-6 lg:px-8 font-sans text-[#092834]">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200/80 pb-6">
          <div>
            <Link href="/cart" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-[#FF5A00] transition-colors mb-3">
              <ArrowLeft size={16} className="mr-2" /> Return to Cart
            </Link>
            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-[#092834]">
              Finalize Quote Request
            </h1>
            <p className="text-gray-500 text-sm mt-2 max-w-2xl">
              Please provide your business and contact details below. Our production team will review your requirements and get back to you with a formal quotation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT: FORM SECTION */}
          <div className="lg:col-span-7 xl:col-span-8">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-xl space-y-10">
              
              {/* 1. Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                  <div className="p-2 bg-orange-50 rounded-lg text-[#FF5A00]">
                    <UserCircle size={22} />
                  </div>
                  <h2 className="text-xl font-extrabold text-[#092834]">Contact Representative</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide">First Name *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <UserCircle size={16} className="text-gray-400" />
                      </div>
                      <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] font-medium transition-all" placeholder="e.g. Alex" />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide">Last Name *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <UserCircle size={16} className="text-gray-400" />
                      </div>
                      <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] font-medium transition-all" placeholder="e.g. Morgan" />
                    </div>
                  </div>

                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide">Email Address *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Mail size={16} className="text-gray-400" />
                      </div>
                      <input required type="email" name="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] font-medium transition-all" 
                        placeholder="e.g. alex@gmail.com"
                       />
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Business Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                  <div className="p-2 bg-orange-50 rounded-lg text-[#FF5A00]">
                    <Building2 size={22} />
                  </div>
                  <h2 className="text-xl font-extrabold text-[#092834]">Business Information</h2>
                </div>
                
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide">Company / Brand Name (Optional)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Building2 size={16} className="text-gray-400" />
                    </div>
                    <input type="text" name="company" className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] font-medium transition-all" placeholder="e.g. Acme Apparel Group" />
                  </div>
                </div>
              </div>

              {/* 3. Location & Phone */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                  <div className="p-2 bg-orange-50 rounded-lg text-[#FF5A00]">
                    <MapPin size={22} />
                  </div>
                  <h2 className="text-xl font-extrabold text-[#092834]">Location & Communication</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Country Dropdown */}
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide">Country / Region *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Globe2 size={16} className="text-gray-400" />
                      </div>
                      <select 
                        value={formData.country} 
                        onChange={handleCountryChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] font-medium appearance-none transition-all cursor-pointer"
                      >
                        {Object.entries(COUNTRY_DATA).map(([key, data]) => (
                          <option key={key} value={key}>{data.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Province/State Dropdown */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide">State / Province *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Map size={16} className="text-gray-400" />
                      </div>
                      <select 
                        required
                        value={formData.province}
                        onChange={(e) => setFormData({...formData, province: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] font-medium appearance-none transition-all cursor-pointer"
                      >
                        <option value="" disabled>Select State/Province</option>
                        {currentCountryInfo.states.map(state => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* City */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide">City *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Building size={16} className="text-gray-400" />
                      </div>
                      <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] font-medium transition-all" placeholder="e.g. New York City" />
                    </div>
                  </div>

                  {/* Smart Phone Input */}
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide">Business Phone Number *</label>
                    <div className="flex shadow-sm rounded-xl">
                      <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 bg-gray-100 text-[#092834] font-bold">
                        <PhoneCall size={16} className="mr-2 text-gray-400" />
                        {currentCountryInfo.code}
                      </span>
                      <input 
                        required 
                        type="text" 
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder={currentCountryInfo.format}
                        className="w-full bg-gray-50 border border-gray-200 rounded-r-xl px-4 py-3.5 focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] font-medium transition-all" 
                      />
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1">We will use this number to contact you regarding your order requirements.</p>
                  </div>

                </div>
              </div>

              {/* Submit Section */}
              <div className="pt-8 mt-8 border-t border-gray-200">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#FF5A00] hover:bg-[#092834] text-white font-extrabold rounded-xl transition-all duration-300 shadow-xl shadow-[#FF5A00]/20 hover:shadow-2xl hover:shadow-[#092834]/20 hover:-translate-y-1 flex items-center justify-center gap-3 text-lg group"
                >
                  Submit Quote Request <Send size={20} className="transform group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500 font-medium bg-gray-50 py-2.5 rounded-lg border border-gray-100">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  No upfront payment required. This is purely a B2B inquiry.
                </div>
              </div>

            </form>
          </div>

          {/* RIGHT: ORDER SUMMARY (Sticky Sidebar) */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xl sticky top-28">
              
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-gray-100">
                <h3 className="text-xl font-extrabold text-[#092834]">Order Summary</h3>
                <span className="bg-orange-50 text-[#FF5A00] text-xs font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  Review
                </span>
              </div>

              {/* Mini Cart Items List */}
              <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item) => (
                  <div key={item.cartItemId} className="flex gap-4 items-center bg-gray-50/80 p-3 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
                    <div 
                      className="w-16 h-20 rounded-xl bg-cover bg-center shrink-0 border border-gray-200/60 shadow-sm" 
                      style={{ backgroundImage: `url(${item.img})` }}
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-extrabold text-[#092834] truncate">{item.name}</h4>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mt-0.5">{item.category}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="bg-white border border-gray-200 text-gray-600 text-[11px] font-bold px-2 py-0.5 rounded shadow-sm">
                          Qty: {item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Metrics Breakdown */}
              <div className="bg-[#092834] rounded-2xl p-5 text-white space-y-4 shadow-inner relative overflow-hidden">
                {/* Decorative background circle */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex justify-between items-center relative z-10">
                  <span className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                    <Layers size={16} className="text-[#FF5A00]" /> Unique Styles
                  </span>
                  <span className="font-bold text-lg">{cart.length}</span>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-white/10 relative z-10">
                  <span className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                    <Package size={16} className="text-[#FF5A00]" /> Total Units Required
                  </span>
                  <span className="font-black text-[#FF5A00] text-xl">{totalItems.toLocaleString()}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}