// src/components/GoalSection.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GoalSection() {
    return (
        <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* LEFT: MINIMAL CLEAN IMAGE */}
                    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-navy/5">
                        <Image
                            src="/campany.png"
                            alt="Garment Manufacturing Facility"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* RIGHT: CLEAN TEXT CONTENT */}
                    <div className="space-y-6 max-w-lg">
                        <span className="text-xs font-bold tracking-widest text-orange uppercase">
                            OUR MISSION
                        </span>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-navy whitespace-nowrap">
                            Scaling <span className="text-orange">Your Brand.</span>
                        </h2>

                        <p className="text-navy/70 text-base sm:text-lg leading-relaxed font-normal">
                            We eliminate inventory risks for growing brands, resellers, and dropshippers. By combining direct factory manufacturing, low minimum orders, and end-to-end fulfillment, we make custom apparel production seamless and scalable. From high-grade fabric sourcing to private label finishing, our dedicated supply chain ensures your shelves stay stocked so you never miss a sale.
                        </p>

                        <div className="pt-2">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-orange hover:opacity-90 text-white text-sm font-bold px-7 py-3.5 rounded-sm transition shadow-sm"
                            >
                                <span>CONTACT US</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}