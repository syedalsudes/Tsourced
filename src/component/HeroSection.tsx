// src/components/HeroSection.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, Tag, Box, Truck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#fdfdfd] overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-12 py-10 sm:py-14 lg:py-20">
        
        {/* MAIN HERO GRID (50/50 SPLIT) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[550px] lg:min-h-[620px]">
          
          {/* LEFT CONTENT COLUMN (HEADING + CTA + 4 VALUE POINTS) */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-7 max-w-xl 2xl:max-w-2xl z-10">
            
            {/* Tagline Badge */}
            <span className="inline-block text-xs sm:text-sm font-extrabold tracking-wider text-[#FF5A00] uppercase">
              YOUR APPAREL PRODUCTION PARTNER
            </span>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] 2xl:text-[62px] font-black tracking-tight text-navy leading-[1.12]">
              We Build Garments. <br />
              You Build <span className="text-[#FF5A00]">Your Brand.</span>
            </h1>

            {/* Description */}
            <p className="text-navy/70 text-base sm:text-lg 2xl:text-xl leading-relaxed max-w-lg font-normal">
              Premium custom apparel manufacturing for decorators, apparel shops, merch companies and growing brands.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="#quote"
                className="inline-flex items-center justify-center gap-2 bg-[#FF5A00] hover:bg-[#e04f00] text-white text-sm font-bold px-7 py-3.5 rounded transition-all shadow-sm group"
              >
                <span>GET A QUOTE</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-navy/5 text-navy border border-navy/30 hover:border-navy text-sm font-bold px-7 py-3.5 rounded transition-all group"
              >
                <span>HOW IT WORKS</span>
                <ArrowRight className="w-4 h-4 text-[#FF5A00] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* INTEGRATED 4 VALUE POINTS (2x2 GRID) */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 mt-2 border-t border-navy/10">
              
              {/* Point 1 */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5A00] flex-shrink-0" />
                  <h4 className="font-bold text-xs sm:text-sm text-navy">Premium Quality</h4>
                </div>
                <p className="text-[11px] sm:text-xs text-navy/60 pl-6 sm:pl-7">Built to last.</p>
              </div>

              {/* Point 2 */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5A00] flex-shrink-0" />
                  <h4 className="font-bold text-xs sm:text-sm text-navy">Fully Customizable</h4>
                </div>
                <p className="text-[11px] sm:text-xs text-navy/60 pl-6 sm:pl-7">Your vision, our production.</p>
              </div>

              {/* Point 3 */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Box className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5A00] flex-shrink-0" />
                  <h4 className="font-bold text-xs sm:text-sm text-navy">Low MOQ</h4>
                </div>
                <p className="text-[11px] sm:text-xs text-navy/60 pl-6 sm:pl-7">Start small, grow big.</p>
              </div>

              {/* Point 4 */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5A00] flex-shrink-0" />
                  <h4 className="font-bold text-xs sm:text-sm text-navy">On-Time Delivery</h4>
                </div>
                <p className="text-[11px] sm:text-xs text-navy/60 pl-6 sm:pl-7">Reliable, every time.</p>
              </div>

            </div>

          </div>

          {/* RIGHT HERO IMAGE & CRESCENT BACKGROUND */}
          <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] 2xl:min-h-[600px] overflow-visible">
            
            {/* Orange Backdrop Disc */}
            <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[480px] lg:h-[480px] 2xl:w-[540px] 2xl:h-[540px] bg-[#FF5A00] rounded-full top-1/2 left-1/2 -translate-x-[42%] -translate-y-[50%] -z-0 pointer-events-none" />

            {/* Hoodie Visual with Preserved Positioning on Desktop */}
            <div className="relative z-10 top-0 lg:-top-10 rotate-3 lg:rotate-12 left-0 lg:left-24 w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[540px] 2xl:max-w-[620px] aspect-square flex items-center justify-center">
              <Image
                src="/hoodie.png"
                alt="T SOURCED Garment Production"
                width={700}
                height={700}
                className="object-contain drop-shadow-2xl scale-105 sm:scale-110 transition-transform duration-500 ease-out"
                priority
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}