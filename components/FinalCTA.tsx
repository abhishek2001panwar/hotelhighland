"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative w-full bg-[#F4EFE6] text-[#3A2D21] py-20 px-6 sm:px-12 lg:px-20 border-t border-[#DDD4C4] text-center overflow-hidden">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        
        {/* Subtle Gold Eyebrow */}
        <div className="flex items-center gap-2.5 mb-3">
          
          <p className="font-sans text-[11px] sm:text-xs tracking-[0.28em] uppercase text-[#A1611D] font-bold">
            Highland Hotel &bull; North Bangalore
          </p>
          
        </div>

        {/* Bold Serif Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3A2D21] tracking-tight leading-tight mb-4">
          Plan Your Stay at Highland
        </h2>

        {/* Supporting Narrative with Bolded Services & Facilities */}
        <p className="font-sans text-[#5A4A3B] text-xs sm:text-sm md:text-[15px] font-normal leading-relaxed max-w-lg mb-8">
          Whether you are reserving a{" "}
          <strong className="font-bold text-[#3A2D21]">Luxury Suite</strong>, planning a wedding at{" "}
          <strong className="font-bold text-[#3A2D21]">Utsava Banquet Hall</strong>, or seeking{" "}
          <strong className="font-bold text-[#3A2D21]">KEVA Ayurvedic Rejuvenation</strong> in North Bangalore, our hospitality team is here to assist.
        </p>

        {/* #A1611D Primary Pill Button & Warm Ivory Secondary Button */}
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-[#A1611D]  text-[#FDFBF7] font-sans text-xs uppercase tracking-[0.2em] font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <a
            href="https://bookings.resavenue.com/resBooking/availsearch?regCode=VTGA0517"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FDFBF7] hover:bg-white border border-[#A1611D]/45 hover:border-[#A1611D] text-[#3A2D21] font-sans text-xs uppercase tracking-[0.2em] font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-2xs active:scale-[0.98]"
          >
            <span>Book Your Stay</span>
          </a>
        </div>

      </div>
    </section>
  );
}