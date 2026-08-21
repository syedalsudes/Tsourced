// src/components/PromoBanner.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Globe, ArrowRight } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="relative w-full bg-[#f8f9fa] border-y border-navy/10 overflow-hidden py-12 lg:py-16">
      
      {/* Background Graphic Grid Texture */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      {/* Decorative Ambient Shapes */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-10 top-10 w-72 h-72 bg-orange/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          {/* 1. LEFT COLUMN: TYPOGRAPHY & CONTACT DETAILS */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 text-left">
            
            <div className="space-y-1">
              <span className="font-serif italic text-3xl sm:text-4xl text-orange font-bold block -mb-2">
                New
              </span>
              <h2 className="text-5xl sm:text-6xl lg:text-[70px] font-black tracking-tight text-orange uppercase leading-[0.95]">
                FASHION
              </h2>
              <span className="text-xl sm:text-2xl lg:text-[26px] font-black tracking-[0.25em] text-navy uppercase block pt-1">
                COLLECTION
              </span>
            </div>

            <p className="text-navy/70 text-sm sm:text-base max-w-md leading-relaxed font-medium">
              Premium GSM heavy-cotton essentials built for high-end streetwear brands and custom creators.
            </p>

            {/* Bottom Contact Pills */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              
              {/* Call Now */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border-2 border-orange flex items-center justify-center text-orange bg-white shadow-sm flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-black text-navy/50 uppercase tracking-widest block leading-none">
                    CALL NOW
                  </span>
                  <a href="tel:+123456789" className="text-xs sm:text-sm font-black text-navy hover:text-orange transition-colors">
                    000 123 456 789
                  </a>
                </div>
              </div>

              {/* Visit Now */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border-2 border-orange flex items-center justify-center text-orange bg-white shadow-sm flex-shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-black text-navy/50 uppercase tracking-widest block leading-none">
                    VISIT NOW
                  </span>
                  <a href="https://tsourced.com" className="text-xs sm:text-sm font-black text-navy hover:text-orange transition-colors">
                    www.tsourced.com
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* 2. CENTER COLUMN: PROMINENT SHIRT VISUAL */}
          <div className="lg:col-span-4 relative flex items-center justify-center min-h-[300px] sm:min-h-[360px]">
            {/* Subtle Circular Backdrop Glow */}
            <div className="absolute w-[240px] sm:w-[290px] aspect-square rounded-full bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-navy/5 -z-0" />

            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] aspect-square flex items-center justify-center">
              <Image
                src="/shirt.png"
                alt="New Fashion Garment Collection"
                width={500}
                height={500}
                className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.16)] scale-110 sm:scale-125 transition-transform duration-500 hover:scale-[1.28]"
                priority
              />
            </div>
          </div>

          {/* 3. RIGHT COLUMN: CENTERED BADGE + BUTTON + SOCIALS */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center space-y-6 text-center">
            
            {/* Hanging Circle Badge */}
            <div className="relative flex flex-col items-center group">
              {/* Hanging String */}
              <div className="w-[2px] h-6 bg-navy/20 -mt-6 mb-1" />

              {/* Orange Circle Disc */}
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-orange text-white shadow-[0_12px_28px_rgba(255,90,0,0.35)] flex flex-col items-center justify-center p-3 text-center border-4 border-white transform group-hover:scale-105 transition-transform duration-300">
                <span className="text-[11px] sm:text-xs font-black tracking-widest uppercase leading-tight">
                  FREE
                </span>
                <span className="text-[11px] sm:text-xs font-black tracking-widest uppercase leading-tight">
                  SHIPPING
                </span>
                <span className="text-[9px] font-medium leading-tight text-white/90 my-0.5">
                  on orders over
                </span>
                <span className="text-lg sm:text-xl font-black text-white leading-none">
                  $50
                </span>
              </div>
            </div>

            {/* Pill CTA Button (Centered directly under circle) */}
            <div className="w-full max-w-[220px]">
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center gap-2 w-full bg-orange hover:bg-[#e04f00] text-white font-black text-xs sm:text-sm tracking-wider uppercase py-3.5 px-6 rounded-full shadow-[0_8px_20px_rgba(255,90,0,0.3)] hover:shadow-none transition-all transform hover:-translate-y-0.5"
              >
                <span>ORDER NOW</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Centered Social Follow Us */}
<div className="flex flex-col items-center gap-2 pt-1">
  <span className="text-[10px] sm:text-[11px] font-black text-navy/60 uppercase tracking-[0.2em]">
    FOLLOW US
  </span>
  <div className="flex items-center gap-2 text-white">
    {/* Facebook */}
    <a
      href="#"
      aria-label="Facebook"
      className="w-7 h-7 rounded-full bg-orange flex items-center justify-center hover:opacity-85 shadow-sm transition"
    >
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    </a>

    {/* X (Twitter) */}
    <a
      href="#"
      aria-label="X (Twitter)"
      className="w-7 h-7 rounded-full bg-orange flex items-center justify-center hover:opacity-85 shadow-sm transition"
    >
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    </a>

    {/* Instagram */}
    <a
      href="#"
      aria-label="Instagram"
      className="w-7 h-7 rounded-full bg-orange flex items-center justify-center hover:opacity-85 shadow-sm transition"
    >
      <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    </a>
  </div>
</div>
          </div>

        </div>
      </div>
      
      {/* Bottom Orange Accent Strip */}
      <div className="w-full h-2 bg-orange absolute bottom-0 left-0" />
    </section>
  );
}