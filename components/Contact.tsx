"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Navigation, Check, Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-screen bg-[#f7f5f0] text-stone-900 font-sans selection:bg-orange-500/20">
     

      <section className=" pb-20 sm:pb-28 px-6 sm:px-12 lg:px-20 max-w-8xl mx-auto">
        
        {/* Subtle Brand Badge & Scaled-Down Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            
            <span className="text-stone-300">|</span>
            <p className="text-[10px] font-mono tracking-[0.28em] uppercase text-orange-600 font-medium">
              Inquiries &bull; Direct Access
            </p>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-normal tracking-tight text-stone-900 leading-snug">
            Plan your stay, celebration, or wellness retreat at Highland.
          </h1>
        </div>

        {/* 2-Column Balanced Dossier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT: Property Dossier & Fast Connectivity Matrix */}
          <div className="lg:col-span-5 bg-white/80 backdrop-blur-md rounded-xl border border-stone-200/90 p-7 sm:p-10 shadow-xs space-y-8">
            
            {/* Location */}
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-stone-400 block mb-2 font-medium">
                THE PROPERTY
              </span>
              <p className="font-serif text-xl sm:text-2xl text-stone-900 mb-1">
                Highland Hotel Bengaluru
              </p>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                #4 &amp; 5, MM Heights, Opposite Sapthagiri NPS University,<br />
                Chikkasandra, Hesaraghatta Main Road,<br />
                Bangalore   560073, Karnataka, India.
              </p>

              <a
                href="https://maps.google.com/?q=Highland+Hotel+Bengaluru"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-[11px] tracking-[0.18em] uppercase font-semibold text-stone-900 hover:text-orange-600 transition-colors group"
              >
                <span>Get Directions On Map</span>
                <Navigation className="w-3 h-3 text-orange-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Direct Lines */}
            <div className="pt-6 border-t border-stone-200/80 space-y-3">
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-stone-400 block font-medium">
                DIRECT RESERVATION &amp; DESK
              </span>

              <div className="space-y-1 font-serif text-base sm:text-lg text-stone-900">
                <a href="tel:+919035034418" className="block hover:text-orange-600 transition-colors">
                  +91 90350 34418
                </a>
                <a href="tel:+917619231899" className="block hover:text-orange-600 transition-colors">
                  +91 76192 31899
                </a>
              </div>

              <div className="text-[11px] font-mono text-stone-500 pt-1">
                Reception: 080 28396918 &bull; 080 28391199
              </div>

              <div>
                <a
                  href="mailto:info@highlandhotel.in"
                  className="text-xs tracking-wider uppercase text-stone-600 hover:text-stone-950 font-medium underline underline-offset-4"
                >
                  info@highlandhotel.in
                </a>
              </div>
            </div>

            {/* Transit Distances */}
            <div className="pt-6 border-t border-stone-200/80">
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-stone-400 block mb-3 font-medium">
                TRANSIT DISTANCES
              </span>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="border-r border-stone-200 pr-2">
                  <p className="font-serif text-base font-medium text-stone-900">38 min</p>
                  <p className="text-[9px] uppercase tracking-wider text-stone-500 mt-0.5">BLR Airport</p>
                </div>
                <div className="border-r border-stone-200 pr-2">
                  <p className="font-serif text-base font-medium text-stone-900">22 min</p>
                  <p className="text-[9px] uppercase tracking-wider text-stone-500 mt-0.5">Yeshwantpur</p>
                </div>
                <div>
                  <p className="font-serif text-base font-medium text-stone-900">25 min</p>
                  <p className="text-[9px] uppercase tracking-wider text-stone-500 mt-0.5">Manyata Tech</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: Minimalist Clean Form */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-stone-200/90 p-8 sm:p-10 shadow-sm">
            
            {sent ? (
              <div className="py-20 text-center space-y-3 animate-in fade-in duration-500">
                <div className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center mx-auto">
                  <Check className="w-4 h-4 stroke-[2.5]" />
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-stone-900">
                  Inquiry Received
                </h2>
                <p className="text-xs text-stone-500 font-light max-w-xs mx-auto leading-relaxed">
                  Our front office team will contact you shortly via phone or email.
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
                
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl text-stone-900 mb-1">
                    Send a Message
                  </h2>
                  <p className="text-xs text-stone-500 font-light">
                    For accommodations, Utsava events, or Ayurvedic consultations.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono tracking-widest uppercase text-stone-400 block">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arvind Rao"
                      className="w-full bg-stone-50/70 border border-stone-200 rounded px-3.5 py-3 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-mono tracking-widest uppercase text-stone-400 block">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-stone-50/70 border border-stone-200 rounded px-3.5 py-3 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-mono tracking-widest uppercase text-stone-400 block">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="arvind@company.com"
                    className="w-full bg-stone-50/70 border border-stone-200 rounded px-3.5 py-3 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-mono tracking-widest uppercase text-stone-400 block">
                    INQUIRY OR EVENT DETAILS *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share dates, room choices, event capacity, or wellness requirements..."
                    className="w-full bg-stone-50/70 border border-stone-200 rounded px-3.5 py-3 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white font-sans text-xs uppercase tracking-[0.2em] font-medium px-8 py-3.5 rounded-md transition-all duration-200 cursor-pointer shadow-sm group"
                  >
                    <span>Submit Inquiry</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </section>

      
    </main>
  );
}