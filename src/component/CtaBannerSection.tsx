import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CtaBannerSection() {
  return (
    <section className="w-full bg-[#FF5A00] overflow-hidden p-0 m-0">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[340px] lg:min-h-[380px]">
        
        {/* 1. Left Orange CTA Box (Full Bleed - 5 Columns) */}
        <div className="lg:col-span-5 bg-[#FF5A00] p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-white z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight leading-[1.12] mb-4">
            Have a Product in Mind? <br />
            Let's Build It.
          </h2>

          <p className="text-white/95 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-normal">
            Tell us what you're looking to manufacture. Send a reference, tech pack or simply describe the product.
          </p>

          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-white text-[#092834] hover:bg-white/90 font-bold text-xs tracking-wider uppercase px-7 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <span>GET WHOLESALE PRICING</span>
              <ArrowRight className="w-4 h-4 text-[#FF5A00]" strokeWidth={2.5} />
            </Link>
          </div>
        </div>

        {/* 2. Right Images Wrapper (Full Bleed - 7 Columns) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 w-full h-full min-h-[300px]">
          
          {/* Small Image 1: Color Swatches (3 Columns) */}
          <div className="sm:col-span-3 relative h-64 sm:h-full bg-black/10">
            <Image
              src="/about4.png"
              alt="Color Swatches & Pantone Matching"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Small Image 2: Sketches / Tech Pack (3 Columns) */}
          <div className="sm:col-span-3 relative h-64 sm:h-full bg-black/10">
            <Image
              src="/about2.png"
              alt="Hoodie Tech Pack Sketch"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Large Image 3: Manufacturing Floor (Wide 6 Columns) */}
          <div className="sm:col-span-6 relative h-72 sm:h-full bg-black/10">
            <Image
              src="/campany.png"
              alt="Apparel Manufacturing Production Line"
              fill
              className="object-cover object-center"
            />
          </div>

        </div>

      </div>
    </section>
  );
}