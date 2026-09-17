"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative w-full bg-[#f4f1ea] text-stone-900 py-24 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-stone-200/80 text-center overflow-hidden">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        
        {/* Minimalist Organic Emblem */}
        <div className="mb-8 select-none text-stone-800">
          <svg
            className="w-10 h-7 mx-auto fill-current"
            viewBox="0 0 48 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 8C10.5 8 9 9.5 9 11C9 12.5 10.5 14 12 14C13.5 14 15 12.5 15 11C15 9.5 13.5 8 12 8Z" />
            <path d="M22 22C19.8 22 18 20.2 18 18C18 15.8 19.8 14 22 14C24.2 14 26 15.8 26 18C26 20.2 24.2 22 22 22Z" />
            <path d="M38 12C32 12 24 18 14 26C12.5 27.2 10 26.5 10 24.5C10 23.5 10.8 22.5 11.8 21.8C20 15 28 8 36 8C39.5 8 42 10 42 12.5C42 14 40.5 15 39 15C37.5 15 36.5 14 36.5 13C36.5 12.4 37 12 38 12Z" />
          </svg>
        </div>

        {/* Serif Headline with Highland Identity */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 tracking-tight leading-tight mb-4">
          Plan Your Stay at Highland
        </h2>

        {/* Highland Supporting Narrative */}
        <p className="font-sans text-stone-600 text-xs sm:text-sm md:text-[15px] font-light leading-relaxed max-w-lg mb-8">
          Whether you are reserving a suite, planning a wedding at Utsava, or seeking authentic Ayurvedic rejuvenation in North Bangalore, our hospitality team is here to assist.
        </p>

        {/* Minimal Pill CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact-us"
            className="group inline-flex items-center gap-2 bg-black hover:bg-stone-800 text-white font-sans text-[11px] sm:text-xs uppercase tracking-[0.22em] font-medium px-8 py-3.5 rounded-full transition-all duration-200 shadow-sm"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-stone-200/50 border border-stone-300 text-stone-800 font-sans text-[11px] sm:text-xs uppercase tracking-[0.22em] font-medium px-8 py-3.5 rounded-full transition-colors duration-200"
          >
            <span>Book Your Stay</span>
          </Link>
        </div>

      </div>
    </section>
  );
}