// src/components/Footer.tsx
import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#081e28] text-white overflow-hidden pt-16 sm:pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* 1. BRAND COLUMN (Span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-1">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  T <span className="text-[#FF5A00]">SOURCED</span>
                </span>
                <span className="w-2 h-2 rounded-full bg-[#FF5A00] mb-1 group-hover:scale-125 transition-transform" />
              </div>
              <span className="text-[10px] tracking-[0.22em] text-slate-400 font-bold uppercase block mt-1">
                Garments & Apparel Manufacturing
              </span>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm font-normal">
              Your dedicated apparel production partner. Sourcing high-GSM fabrics, custom cut-and-sew, private labeling, and direct dropship fulfillment.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#FF5A00] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="#"
                aria-label="Twitter"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#FF5A00] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#FF5A00] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* 2. EXPLORE (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[11px] font-black tracking-[0.2em] text-[#FF5A00] uppercase block">
              EXPLORE
            </span>
            <ul className="space-y-3 text-sm font-medium text-slate-300">
              <li>
                <Link href="#about" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">
                  FAQs & MOQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. PRODUCT CATEGORIES (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[11px] font-black tracking-[0.2em] text-[#FF5A00] uppercase block">
              GARMENTS
            </span>
            <ul className="space-y-3 text-sm font-medium text-slate-300">
              <li>
                <Link href="/hoodies" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">
                  Heavyweight Hoodies (400+ GSM)
                </Link>
              </li>
              <li>
                <Link href="/t-shirts" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">
                  Oversized Vintage T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/zipper-hoodies" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">
                  Full-Zip Fleeces
                </Link>
              </li>
              <li>
                <Link href="/bottoms" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">
                  Sweatpants & Cargo Bottoms
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. CONTACT DIRECT INFO (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[11px] font-black tracking-[0.2em] text-[#FF5A00] uppercase block">
              CONTACT US
            </span>
            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FF5A00] mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  Industrial Area, Karachi, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                <a href="tel:+923001234567" className="font-semibold hover:text-white transition-colors">
                  +92 300 1234567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                <a href="mailto:info@tsourced.com" className="font-semibold hover:text-white transition-colors">
                  info@tsourced.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & LEGAL BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-medium text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} T SOURCED. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Production
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}