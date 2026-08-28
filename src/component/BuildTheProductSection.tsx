import React from 'react';
import Image from 'next/image';

export default function BuildTheProductSection() {
    return (
        <section className="w-full selection:bg-yellow-600 bg-[#FF5A00] py-10 lg:py-14 text-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 xl:gap-8 items-center">

                    {/* ================= 1. LEFT TEXT CONTENT (4 Cols) ================= */}
                    <div className="lg:col-span-4 flex gap-2 flex-col justify-center pr-0 lg:pr-2">
                        <span className="text-yellow-300 text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] mb-2.5 block">
                            BUILT AROUND YOU
                        </span>

                        <h2 className="text-3xl sm:text-4xl lg:text-[2.35rem] xl:text-[2.6rem] font-black text-white tracking-tight leading-[1.12] mb-4">
                            Build the Product. <br />
                            Not Just a Blank.
                        </h2>

                        <p className="text-white/90 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
                            Hundreds of combinations. One perfect product for your brand and your customer.
                        </p>
                    </div>

                    {/* ================= 2. CENTER BLUEPRINT IMAGE (5 Cols) ================= */}
                    <div className="lg:col-span-5 relative w-full h-[360px] sm:h-[420px] flex items-center justify-center">
                        <div className="relative w-full h-full max-w-[480px] drop-shadow-2xl">
                            <Image
                                src="/hoodietags.png"
                                alt="Build the Product Blueprint"
                                fill
                                priority
                                className="object-contain object-center"
                            />
                        </div>
                    </div>

                    {/* ================= 3. RIGHT SINGLE STACKED DETAIL IMAGE (3 Cols) ================= */}
                    <div className="lg:col-span-3 relative w-full h-[360px] sm:h-[420px] overflow-hidden border border-white/30 bg-black/10 shadow-lg">
                        <Image
                            src="/3hoodie.png"
                            alt="Custom Manufacturing Details"
                            fill
                            className="object-cover object-center"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}