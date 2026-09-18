"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <section className="relative w-full bg-[#f4f1ea] text-stone-900 py-20 px-6 sm:px-12 lg:px-20 border-t border-stone-200/80 text-center overflow-hidden">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        
        {/* Minimalist Organic Emblem */}
        {/* <div className="mb-8 select-none text-stone-800">
         <div className="relative w-44 h-14 mb-8">
                    <Image
                      src="https://highlandhotel.in/wp-content/uploads/2023/08/Untitled-design-24.png"
                      alt="Highland Hotel Bengaluru Logo"
                      fill
                      className="object-contain  "
                      sizes="176px"
                    />
                  </div>
        </div> */}

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