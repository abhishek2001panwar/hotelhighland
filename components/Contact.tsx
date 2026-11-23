"use client";

import { useState } from "react";
import { ArrowUpRight, Navigation, Check, Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#3A2D21] font-sans selection:bg-[#A1611D]/20">
      <section className="pt-28 sm:pt-36 pb-20 sm:pb-28 px-6 sm:px-12 lg:px-20 max-w-8xl mx-auto">
        
        {/* Subtle Brand Badge & Bold Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 mb-3">
           
            <p className="text-[11px] sm:text-xs font-sans tracking-[0.28em] uppercase text-[#A1611D] font-bold">
              Inquiries &bull; Direct Access
            </p>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#3A2D21] leading-snug">
            Plan your stay, celebration, or wellness retreat at Highland.
          </h1>
        </div>

        {/* 2-Column Balanced Dossier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT: Property Dossier & Bold Contact Details */}
          <div className="lg:col-span-5 bg-[#F4EFE6] rounded-2xl border border-[#DDD4C4] p-7 sm:p-10 shadow-xs space-y-8">
            
            {/* Location */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#A1611D] stroke-[2.2]" />
                <span className="text-[11px] font-sans tracking-[0.24em] uppercase text-[#A1611D] font-bold">
                  The Property
                </span>
              </div>
              <p className="font-serif text-xl sm:text-2xl font-bold text-[#3A2D21] mb-2">
                Highland Hotel Bengaluru
              </p>
              <p className="text-xs sm:text-[13px] text-[#3A2D21] font-semibold leading-relaxed">
                #4 &amp; 5, MM Heights, Opposite Sapthagiri NPS University,<br />
                Chikkasandra, Hesaraghatta Main Road,<br />
                Bangalore – 560073, Karnataka, India.
              </p>

              <a
                href="https://maps.google.com/?q=Highland+Hotel+Bengaluru"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-xs tracking-[0.18em] uppercase font-bold text-[#A1611D] hover:text-[#73582D] transition-colors group"
              >
                <span>Get Directions On Map</span>
                <Navigation className="w-3.5 h-3.5 text-[#A1611D] stroke-[2.2] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Direct Lines (Bolded for Maximum Visibility) */}
            <div className="pt-6 border-t border-[#DDD4C4] space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#A1611D] stroke-[2.2]" />
                <span className="text-[11px] font-sans tracking-[0.24em] uppercase text-[#A1611D] font-bold">
                  Direct Reservation &amp; Desk
                </span>
              </div>

              <div className="space-y-1.5 font-serif text-lg sm:text-xl font-bold text-[#3A2D21]">
                <a href="tel:+919035034418" className="block hover:text-[#A1611D] transition-colors">
                  +91 90350 34418
                </a>
                <a href="tel:+917619231899" className="block hover:text-[#A1611D] transition-colors">
                  +91 76192 31899
                </a>
              </div>

              <div className="text-xs font-sans font-bold text-[#3A2D21] pt-1">
                Reception: <a href="tel:08028396918" className="hover:text-[#A1611D]">080 28396918</a> &bull;{" "}
                <a href="tel:08028391199" className="hover:text-[#A1611D]">080 28391199</a>
              </div>

              <div className="pt-1">
                <a
                  href="mailto:info@highlandhotel.in"
                  className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-[#3A2D21] hover:text-[#A1611D] font-bold underline underline-offset-4 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#A1611D]" />
                  <span>info@highlandhotel.in</span>
                </a>
              </div>
            </div>

            {/* Transit Distances */}
            <div className="pt-6 border-t border-[#DDD4C4]">
              <span className="text-[11px] font-sans tracking-[0.24em] uppercase text-[#A1611D] block mb-3.5 font-bold">
                Transit Distances
              </span>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="border-r border-[#DDD4C4] pr-2">
                  <p className="font-serif text-lg font-bold text-[#3A2D21]">38 min</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#5A4A3B] mt-0.5">BLR Airport</p>
                </div>
                <div className="border-r border-[#DDD4C4] pr-2">
                  <p className="font-serif text-lg font-bold text-[#3A2D21]">22 min</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#5A4A3B] mt-0.5">Yeshwantpur</p>
                </div>
                <div>
                  <p className="font-serif text-lg font-bold text-[#3A2D21]">25 min</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#5A4A3B] mt-0.5">Manyata Tech</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: Clean Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#DDD4C4] p-8 sm:p-10 shadow-sm">
            
            {sent ? (
              <div className="py-20 text-center space-y-3 animate-in fade-in duration-500">
                <div className="w-12 h-12 rounded-full bg-[#A1611D] text-[#FDFBF7] flex items-center justify-center mx-auto shadow-sm">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3A2D21]">
                  Inquiry Received
                </h2>
                <p className="text-xs sm:text-sm text-[#5A4A3B] font-medium max-w-xs mx-auto leading-relaxed">
                  Our <strong className="font-bold text-[#3A2D21]">front office team</strong> will contact you shortly via phone or email.
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
                
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3A2D21] mb-1">
                    Send a Message
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5A4A3B] font-medium">
                    For <strong className="font-bold text-[#3A2D21]">Suite Accommodations, Utsava Banquet Events, Cinnamon Dining, or KEVA Ayurvedic Consultations</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-sans font-bold tracking-widest uppercase text-[#3A2D21] block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arvind Rao"
                      className="w-full bg-[#FDFBF7] border border-[#DDD4C4] rounded-md px-3.5 py-3 text-xs font-medium text-[#3A2D21] placeholder:text-[#5A4A3B]/50 focus:outline-none focus:border-[#A1611D] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-sans font-bold tracking-widest uppercase text-[#3A2D21] block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#FDFBF7] border border-[#DDD4C4] rounded-md px-3.5 py-3 text-xs font-medium text-[#3A2D21] placeholder:text-[#5A4A3B]/50 focus:outline-none focus:border-[#A1611D] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-sans font-bold tracking-widest uppercase text-[#3A2D21] block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="arvind@company.com"
                    className="w-full bg-[#FDFBF7] border border-[#DDD4C4] rounded-md px-3.5 py-3 text-xs font-medium text-[#3A2D21] placeholder:text-[#5A4A3B]/50 focus:outline-none focus:border-[#A1611D] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-sans font-bold tracking-widest uppercase text-[#3A2D21] block">
                    Inquiry or Event Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share dates, room choices, event capacity, or wellness requirements..."
                    className="w-full bg-[#FDFBF7] border border-[#DDD4C4] rounded-md px-3.5 py-3 text-xs font-medium text-[#3A2D21] placeholder:text-[#5A4A3B]/50 focus:outline-none focus:border-[#A1611D] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2.5 bg-[#A1611D]  text-[#FDFBF7] font-sans text-xs uppercase tracking-[0.2em] font-bold px-8 py-4 rounded-md transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md active:scale-[0.98] group"
                  >
                    <span>Submit Inquiry</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.2] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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