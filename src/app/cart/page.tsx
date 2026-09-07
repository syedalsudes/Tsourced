'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { 
  ShoppingCart, 
  ArrowLeft, 
  Trash2, 
  Plus, 
  Minus, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Package,
  Layers,
  Sparkles
} from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const handleQuantityInputChange = (cartItemId: string, value: string) => {
    const num = parseInt(value, 10);
    if (isNaN(num) || num < 1) {
      updateQuantity(cartItemId, 1);
    } else {
      updateQuantity(cartItemId, num);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-24 px-4 sm:px-6 lg:px-8 font-sans text-[#092834]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-6 border-b border-gray-200/80 gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-[#092834]">
              Your Quote Cart
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Review your customized tech-packs & specifications before submitting to production.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center text-sm font-bold text-gray-600 hover:text-[#FF5A00] transition-colors w-fit bg-white px-4 py-2.5 rounded-xl border border-gray-200 shadow-xs"
          >
            <ArrowLeft size={16} className="mr-2" /> Continue Browsing
          </Link>
        </div>

        {/* Empty State */}
        {cart.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 sm:p-16 text-center border border-gray-200/80 shadow-xl max-w-2xl mx-auto my-8 relative overflow-hidden">
            {/* Background Accent Circle */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#FF5A00]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#092834]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-24 h-24 bg-orange-50 border border-[#FF5A00]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#FF5A00] shadow-inner">
                <ShoppingCart  size={44} strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092834] mb-3">
                Your Quote Cart is Empty
              </h2>
              <p className="text-gray-500 mb-8 max-w-md mx-auto text-sm leading-relaxed">
                You haven't added any customized tech-packs or apparel specs to your quote request yet. Explore our catalog to build your custom order.
              </p>

              <div className="grid grid-cols-3 gap-3 max-w-md mx-auto mb-8 text-left bg-[#F8FAFC] p-4 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                  <CheckCircle2 size={14} className="text-[#FF5A00] shrink-0" />
                  <span>Custom Tech-Packs</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                  <CheckCircle2 size={14} className="text-[#FF5A00] shrink-0" />
                  <span>MOQ 50 Pcs</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                  <CheckCircle2 size={14} className="text-[#FF5A00] shrink-0" />
                  <span>Fast Turnaround</span>
                </div>
              </div>

              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#FF5A00] hover:bg-[#e04f00] text-white font-extrabold rounded-xl transition-all shadow-lg shadow-[#FF5A00]/25 hover:-translate-y-0.5"
              >
                Explore Products Catalog
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* ITEMS LIST (Left Column) */}
            <div className="lg:col-span-2 space-y-5">
              {cart.map((item) => (
                <div
                  key={item.cartItemId}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row gap-5 relative group"
                >
                  {/* Image */}
                  <div 
                    className="w-full sm:w-36 h-44 rounded-xl bg-[#F1F5F9] bg-cover bg-center shrink-0 border border-gray-200/60 overflow-hidden relative" 
                    style={{ backgroundImage: `url(${item.img})` }}
                  >
                    <span className="absolute top-2 left-2 bg-[#092834]/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-3">
                        <h3 className="text-lg sm:text-xl font-bold text-[#092834] leading-snug">
                          {item.name}
                        </h3>

                        {/* TRASH BIN BUTTON */}
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-xl transition-all border border-transparent hover:border-red-100 shrink-0"
                          title="Remove Item"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                      {/* Selected Attributes Badge List */}
                      <div className="mt-3 space-y-2 text-xs">
                        
                        {/* Fabrics */}
                        {item.fabric && item.fabric.length > 0 && (
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="font-semibold text-gray-400">Fabric:</span>
                            {item.fabric.map((f, i) => (
                              <span key={i} className="bg-gray-100 text-[#092834] font-semibold px-2.5 py-0.5 rounded-md border border-gray-200/80">
                                {f}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Weight / GSM */}
                        {(item.gsm || item.weight) && (
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="font-semibold text-gray-400">Weight:</span>
                            {(item.gsm || item.weight)?.map((w, i) => (
                              <span key={i} className="bg-[#FF5A00]/10 text-[#FF5A00] font-bold px-2.5 py-0.5 rounded-md border border-[#FF5A00]/20">
                                {w}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Fit */}
                        {item.fit && item.fit.length > 0 && (
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="font-semibold text-gray-400">Fit:</span>
                            {item.fit.map((ft, i) => (
                              <span key={i} className="bg-gray-100 text-[#092834] font-semibold px-2.5 py-0.5 rounded-md border border-gray-200/80">
                                {ft}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Shade / Colors */}
                        {item.color && (
                          <div className="flex items-center gap-1.5">
                            <span className="font-semibold text-gray-400">Shade:</span>
                            <span className="bg-[#092834] text-white font-semibold px-2.5 py-0.5 rounded-md">
                              {item.color}
                            </span>
                          </div>
                        )}
                        {item.colors && item.colors.length > 0 && (
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="font-semibold text-gray-400">Colors:</span>
                            {item.colors.map((c, i) => (
                              <span key={i} className="bg-[#092834] text-white font-semibold px-2.5 py-0.5 rounded-md">
                                {c}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Options / Customizations */}
                        {(item.decorations || item.additionalOptions) && (
                          <div className="flex flex-wrap items-center gap-1.5 pt-1">
                            <span className="font-semibold text-gray-400">Customization:</span>
                            {(item.decorations || item.additionalOptions)?.map((opt, i) => (
                              <span key={i} className="bg-emerald-50 text-emerald-700 font-semibold px-2.5 py-0.5 rounded-md border border-emerald-200/80">
                                {opt}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* QUANTITY CONTROLS (INCLUDES TYPABLE INPUT) */}
                    <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Target Quantity (Units)
                      </span>

                      <div className="flex items-center bg-[#F8FAFC] border border-gray-300 rounded-xl p-1 shadow-2xs">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, Math.max(1, item.quantity - 1))}
                          className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-xs rounded-lg transition-all"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>

                        {/* TYPABLE INPUT FIELD */}
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleQuantityInputChange(item.cartItemId, e.target.value)}
                          className="w-16 text-center font-extrabold text-sm text-[#092834] bg-transparent focus:outline-none focus:ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />

                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-xs rounded-lg transition-all"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              ))}

              <div className="flex justify-between items-center pt-2">
                <p className="text-xs text-gray-400">
                  * Minimum Order Quantity (MOQ) applies per design spec.
                </p>
                <button
                  onClick={clearCart}
                  className="text-xs font-bold text-gray-400 hover:text-red-500 transition-colors uppercase tracking-wider flex items-center gap-1.5"
                >
                  <Trash2 size={14} /> Clear Entire Cart
                </button>
              </div>
            </div>

            {/* SUMMARY & SUBMIT QUOTE (Right Column) */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-6 lg:p-7 border border-gray-200/80 shadow-xl sticky top-28">
                
                {/* Title */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
                  <h3 className="text-xl font-extrabold text-[#092834]">
                    Quote Summary
                  </h3>
                  <span className="bg-[#092834]/5 text-[#092834] text-xs font-bold px-2.5 py-1 rounded-full border border-[#092834]/10">
                    Draft
                  </span>
                </div>

                {/* Metrics Breakdown */}
                <div className="space-y-3.5 text-sm mb-6">
                  <div className="flex justify-between items-center text-gray-600 font-medium">
                    <span className="flex items-center gap-2">
                      <Layers size={16} className="text-gray-400" />
                      Total Tech-Packs:
                    </span>
                    <span className="font-bold text-[#092834]">{cart.length}</span>
                  </div>

                  <div className="flex justify-between items-center text-gray-600 font-medium">
                    <span className="flex items-center gap-2">
                      <Package size={16} className="text-gray-400" />
                      Total Units Requested:
                    </span>
                    <span className="font-black text-[#FF5A00] text-base">
                      {totalItems.toLocaleString()} pcs
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-gray-600 font-medium">
                    <span className="flex items-center gap-2">
                      <Clock size={16} className="text-gray-400" />
                      Estimated Response:
                    </span>
                    <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-xs border border-emerald-100">
                      Within 24 Hours
                    </span>
                  </div>
                </div>

                {/* Instant Guarantee Box */}
                <div className="p-4 bg-gradient-to-br from-[#FF5A00]/5 to-orange-50/50 rounded-2xl border border-[#FF5A00]/15 mb-6 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FF5A00] uppercase tracking-wider">
                    <ShieldCheck size={16} /> Direct Factory Review
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Your full tech-pack specs will be routed directly to our production engineer for instant material & labor costing.
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => alert('Quote Request Submitted Successfully! Our team will contact you shortly.')}
                  className="w-full py-4 bg-[#FF5A00] hover:bg-[#e04f00] text-white font-extrabold rounded-xl transition-all shadow-xl shadow-[#FF5A00]/25 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base cursor-pointer"
                >
                  <Send size={18} /> Request Formal Quote
                </button>

                <p className="text-[11px] text-gray-400 text-center mt-3">
                  No payment required at this stage.
                </p>

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}