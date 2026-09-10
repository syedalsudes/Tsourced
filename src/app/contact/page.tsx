'use client';

import React, { useState } from 'react';
import {
    Send,
    UserCircle,
    Mail,
    PhoneCall,
    Building2,
    PackageSearch,
    PenTool,
    Factory,
    Clock,
    ShieldCheck,
    MessageSquare // Naya icon import kiya hai
} from 'lucide-react';

// Replace with your actual products import
import { PRODUCTS } from '@/lib/customdata';

export default function RequestQuotePage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        product: '',
        quantity: '',
        timeframe: '',
        projectDetails: '',
        additionalMessage: '' // Nayi state field add ki hai
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Quote Request Submitted Successfully! Our team will contact you within 24 hours.');
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#092834]">

            {/* ---------------- HERO SECTION WITH CURVE ---------------- */}
            <header className="relative w-full bg-[#092834] pt-32 pb-48 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Glowing Accents */}
                <div className="absolute top-[-20%] right-[-5%] w-[400px] h-[400px] bg-[#FF5A00] rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none"></div>

                <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-8">
                    <div className="max-w-2xl">
                        <p className="text-[#FF5A00] font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center lg:justify-start gap-2">
                            <span className="w-8 h-[2px] bg-[#FF5A00] inline-block"></span> B2B Partnerships
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight">
                            Bring Your Vision <br />
                            <span className="text-[#FF5A00]">To Reality.</span>
                        </h1>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
                            From initial tech-pack development to final stitch, we provide end-to-end premium manufacturing solutions.
                        </p>
                    </div>
                </div>

                {/* SVG Curve Seamless Transition - Gentle Wave */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-[1px] pointer-events-none">
                    <svg className="relative block w-full h-[60px] md:h-[120px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,60 C400,120 800,0 1200,60 L1200,120 L0,120 Z" className="fill-[#F8FAFC]"></path>
                    </svg>
                </div>
            </header>

            {/* ---------------- MAIN CONTENT (Overlapping Grid) ---------------- */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 lg:-mt-32 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* LEFT COLUMN: Premium Copy & Features */}
                    <div className="lg:col-span-5 space-y-6 pt-4">
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
                            <h2 className="text-2xl font-extrabold text-[#092834] mb-6">Why Partner With Us?</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-orange-50 rounded-xl text-[#FF5A00] shrink-0">
                                        <PenTool size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#092834]">Design to Execution</h4>
                                        <p className="text-sm text-gray-500 mt-1 leading-relaxed">Our experts assist in refining your tech-packs and selecting the perfect fabrics for your brand.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-orange-50 rounded-xl text-[#FF5A00] shrink-0">
                                        <Factory size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#092834]">Scalable Production</h4>
                                        <p className="text-sm text-gray-500 mt-1 leading-relaxed">Whether you need 50 pieces or 50,000, our facilities are equipped to handle your volume with strict QA.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-orange-50 rounded-xl text-[#FF5A00] shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#092834]">Rapid Turnarounds</h4>
                                        <p className="text-sm text-gray-500 mt-1 leading-relaxed">Optimized supply chains ensure your garments are manufactured and shipped precisely on schedule.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3">
                                <ShieldCheck className="text-emerald-500" size={24} />
                                <span className="text-sm font-bold text-gray-600">NDA Protected & Confidential Manufacturing</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Floating Quote Form */}
                    <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-2xl">
                        <div className="mb-8">
                            <h3 className="text-2xl font-extrabold text-[#092834] uppercase tracking-wide">Project Details</h3>
                            <p className="text-sm text-gray-500 mt-2">
                                Provide your requirements below. Our production specialists will review your specs and send a formal quotation.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">

                            {/* SECTION 1: CONTACT INFO */}
                            <div>
                                <h4 className="text-xs font-extrabold text-[#FF5A00] uppercase tracking-widest mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
                                    <UserCircle size={16} /> Contact Information
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="block text-xs font-bold text-gray-500">First Name *</label>
                                        <input required type="text" name="firstName" placeholder="e.g. Alex" value={formData.firstName} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] transition-all font-medium" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="block text-xs font-bold text-gray-500">Last Name *</label>
                                        <input required type="text" name="lastName" placeholder="e.g. Morgan" value={formData.lastName} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] transition-all font-medium" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="block text-xs font-bold text-gray-500">Corporate Email *</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none"><Mail size={16} className="text-gray-400" /></div>
                                            <input required type="email" name="email" placeholder="alex@company.com" value={formData.email} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 text-sm focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] transition-all font-medium" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="block text-xs font-bold text-gray-500">Phone Number *</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none"><PhoneCall size={16} className="text-gray-400" /></div>
                                            <input required type="tel" name="phone" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 text-sm focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] transition-all font-medium" />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2 space-y-1.5">
                                        <label className="block text-xs font-bold text-gray-500">
                                            Company / Brand Name <span className="font-normal text-gray-400">(Optional)</span>
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none"><Building2 size={16} className="text-gray-400" /></div>
                                            <input type="text" name="company" placeholder="e.g. Acme Apparel Group" value={formData.company} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 text-sm focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] transition-all font-medium" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SECTION 2: PRODUCT & MANUFACTURING INFO */}
                            <div>
                                <h4 className="text-xs font-extrabold text-[#FF5A00] uppercase tracking-widest mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
                                    <PackageSearch size={16} /> Manufacturing Specs
                                </h4>
                                <div className="space-y-5">

                                    <div className="space-y-1.5">
                                        <label className="block text-xs font-bold text-gray-500">Product Category *</label>
                                        <select
                                            required
                                            name="product"
                                            value={formData.product}
                                            onChange={handleChange}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] transition-all appearance-none cursor-pointer font-medium"
                                        >
                                            <option value="" disabled>Select the primary garment type...</option>
                                            {PRODUCTS && PRODUCTS.map((prod) => (
                                                <option key={prod.id} value={prod.name}>
                                                    {prod.name} - ({prod.category})
                                                </option>
                                            ))}
                                            {!PRODUCTS?.length && <option value="custom">Fully Custom Apparel Design</option>}
                                        </select>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label className="block text-xs font-bold text-gray-500">Target Quantity *</label>
                                            <input required type="number" min="50" name="quantity" placeholder="Min. 50 pieces" value={formData.quantity} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] transition-all font-medium" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="block text-xs font-bold text-gray-500">
                                                Expected Timeline <span className="font-normal text-gray-400">(Optional)</span>
                                            </label>
                                            <select
                                                name="timeframe"
                                                value={formData.timeframe}
                                                onChange={handleChange}
                                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] transition-all appearance-none cursor-pointer font-medium"
                                            >
                                                <option value="" disabled>Select expected delivery...</option>
                                                <option value="ASAP">ASAP (Urgent Request)</option>
                                                <option value="2-4 Weeks">Standard (2-4 Weeks)</option>
                                                <option value="1-2 Months">1-2 Months</option>
                                                <option value="Flexible">Flexible Timeline</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="block text-xs font-bold text-gray-500">
                                            Project Details & Customizations <span className="font-normal text-gray-400">(Optional)</span>
                                        </label>
                                        <textarea
                                            name="projectDetails"
                                            value={formData.projectDetails}
                                            onChange={handleChange}
                                            rows={4}
                                            placeholder="Please specify fabric choices, GSM, required sizes, colors, and any printing/embroidery details..."
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] transition-all resize-none custom-scrollbar font-medium"
                                        />
                                    </div>

                                    {/* Naya Optional Message Field */}
                                    <div className="space-y-1.5 pt-2">
                                        <label className="block text-xs font-bold text-gray-500 flex items-center gap-1.5">
                                            <MessageSquare size={14} className="text-gray-400" />
                                            Additional Message / Note <span className="font-normal text-gray-400">(Optional)</span>
                                        </label>
                                        <textarea
                                            name="additionalMessage"
                                            value={formData.additionalMessage}
                                            onChange={handleChange}
                                            rows={2}
                                            placeholder="Any other message, questions, or notes for our team..."
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] transition-all resize-none custom-scrollbar font-medium"
                                        />
                                    </div>

                                </div>
                            </div>

                            {/* Submit Section */}
                            <div className="pt-4 border-t border-gray-100">
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-[#FF5A00] hover:bg-[#092834] text-white font-extrabold rounded-xl transition-all duration-300 shadow-xl shadow-[#FF5A00]/20 hover:shadow-2xl hover:shadow-[#092834]/20 hover:-translate-y-1 flex items-center justify-center gap-3 text-lg group"
                                >
                                    Submit For Review <Send size={20} className="transform group-hover:translate-x-1 transition-transform" />
                                </button>
                                <p className="text-xs text-gray-400 text-center mt-4">
                                    By submitting this form, you agree to our B2B Terms of Service and Privacy Policy. No payment is required at this stage.
                                </p>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}