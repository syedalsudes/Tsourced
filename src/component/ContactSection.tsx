// src/components/ContactSection.tsx
import React from "react";
import { Mail, Phone, ArrowRight, MessageSquare, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full bg-[#fcfcfc] py-18 sm:py-24 overflow-hidden border-t border-navy/5">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-orange/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: CTA-STYLE INFO SECTION */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange/10 border border-orange/20">
              <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
              <span className="text-[11px] sm:text-xs font-black tracking-[0.2em] text-orange uppercase">
                GET IN TOUCH & START PRODUCTION
              </span>
            </div>

            {/* Main Headline with Serif Accent */}
            <div className="space-y-1">
              <span className="font-serif italic text-2xl sm:text-3xl text-orange font-bold block -mb-2">
                Let&apos;s Talk
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-navy leading-[1.08]">
                Custom Apparel <br />
                <span className="text-orange">Made Simple.</span>
              </h2>
            </div>

            {/* Clean Punchy Copy */}
            <p className="text-navy/70 text-base sm:text-lg leading-relaxed font-normal max-w-md">
              Whether you need samples, private label customization, or bulk manufacturing rates, our team is ready to scale your next collection.
            </p>

            {/* Interactive Contact Cards */}
            <div className="space-y-3 pt-2">
              
              {/* WhatsApp / Phone */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-navy/10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-orange/40 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white transition-colors flex-shrink-0">
                  <Phone className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-navy/50 uppercase tracking-widest block">
                    CALL / WHATSAPP (24/7)
                  </span>
                  <a href="tel:+923001234567" className="text-base font-black text-navy group-hover:text-orange transition-colors">
                    +92 300 1234567
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-navy/10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-orange/40 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white transition-colors flex-shrink-0">
                  <Mail className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-navy/50 uppercase tracking-widest block">
                    OFFICIAL SUPPORT EMAIL
                  </span>
                  <a href="mailto:info@tsourced.com" className="text-base font-black text-navy group-hover:text-orange transition-colors">
                    info@tsourced.com
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: MODERN CONTACT FORM */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-navy/10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] relative">
            <form className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy uppercase tracking-wider block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Hamza Khan"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-navy/15 bg-[#fafafa] text-navy text-sm font-medium focus:outline-none focus:border-orange focus:bg-white focus:ring-2 focus:ring-orange/10 transition-all placeholder:text-navy/35"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy uppercase tracking-wider block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="hamza@brand.pk"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-navy/15 bg-[#fafafa] text-navy text-sm font-medium focus:outline-none focus:border-orange focus:bg-white focus:ring-2 focus:ring-orange/10 transition-all placeholder:text-navy/35"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone / WhatsApp */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy uppercase tracking-wider block">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+92 300 1234567"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-navy/15 bg-[#fafafa] text-navy text-sm font-medium focus:outline-none focus:border-orange focus:bg-white focus:ring-2 focus:ring-orange/10 transition-all placeholder:text-navy/35"
                  />
                </div>

                {/* Estimated Quantity */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy uppercase tracking-wider block">
                    Estimated Production Quantity
                  </label>
                  <select
                    className="w-full px-4 py-3.5 rounded-xl border border-navy/15 bg-[#fafafa] text-navy text-sm font-medium focus:outline-none focus:border-orange focus:bg-white focus:ring-2 focus:ring-orange/10 transition-all"
                    defaultValue=""
                  >
                    <option value="" disabled>Select Order Size</option>
                    <option value="samples">Sample Development Only</option>
                    <option value="50-100">50 - 100 Pieces</option>
                    <option value="100-500">100 - 500 Pieces</option>
                    <option value="500-1000">500 - 1,000 Pieces</option>
                    <option value="1000+">1,000+ Bulk Production</option>
                  </select>
                </div>
              </div>

              {/* Message / Tech Pack Requirements */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy uppercase tracking-wider block">
                  Project Details & Fabric Requirements
                </label>
                <textarea
                  rows={4}
                  placeholder="Need 400 GSM heavy fleece oversized hoodies with custom woven labels & puff screen printing..."
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-navy/15 bg-[#fafafa] text-navy text-sm font-medium focus:outline-none focus:border-orange focus:bg-white focus:ring-2 focus:ring-orange/10 transition-all resize-none placeholder:text-navy/35"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto bg-orange hover:bg-[#e04f00] text-white text-sm font-black tracking-wider uppercase px-9 py-4 rounded-xl transition-all shadow-[0_8px_20px_rgba(255,90,0,0.25)] hover:shadow-none hover:-translate-y-0.5 group"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>SUBMIT INQUIRY</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}