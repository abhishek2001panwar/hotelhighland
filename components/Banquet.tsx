"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

const banquetSlides = [
  {
    id: 1,
    image: "https://highlandhotel.in/wp-content/uploads/2024/09/90-768x512.jpg",
    alt: "Utsava Banquet Hall Setup",
  },
  {
    id: 2,
    image: "https://highlandhotel.in/wp-content/uploads/2024/09/91-768x512.jpg",
    alt: "Banquet Hall Interior and Seating",
  },
  {
    id: 3,
    image: "https://highlandhotel.in/wp-content/uploads/2024/09/86-768x512.jpg",
    alt: "Celebratory Evening Lighting and Stage",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1600&auto=format&fit=crop",
    alt: "Social Dining and Banquet Gathering",
  },
];

export default function Banquet() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banquetSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-[#f8f7f4] text-stone-900 py-16 sm:py-24 px-6 sm:px-12 lg:px-20 border-t border-stone-200/80 overflow-hidden">
      {/* Constrain layout to max-w-5xl so the image doesn't stretch across huge screens */}
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-stone-500 font-medium">
                Utsava Banquet &amp; Events
              </p>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-normal tracking-tight text-stone-900 leading-[1.15]">
              Celebrate Something Extraordinary
            </h2>
          </div>

          <p className="font-sans text-stone-600 text-xs sm:text-sm font-light max-w-sm leading-relaxed">
            A celebration venue in North Bangalore crafted for weddings, gatherings, conferences, and milestone occasions.
          </p>
        </div>

        {/* Compact Media Container: capped at 420px height with max-width matching natural image resolution */}
        <div className="relative w-full max-w-4xl mx-auto h-[280px] sm:h-[380px] md:h-[430px] rounded-xl overflow-hidden border border-stone-300/80 shadow-lg bg-stone-900">
          {banquetSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                idx === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-102 pointer-events-none"
              }`}
            >
              {/* Blurred atmospheric backdrop to prevent empty margins */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-110 blur-xl opacity-40 -z-10"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Main Crisp Image */}
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={idx === 0}
                className="object-contain sm:object-cover object-center"
                sizes="(max-width: 896px) 100vw, 896px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          ))}

          {/* Minimal Dash Progress Indicators */}
          <div className="absolute bottom-5 right-5 flex items-center gap-2 z-10">
            {banquetSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Slide ${index + 1}`}
                className="py-2 cursor-pointer focus:outline-none"
              >
                <span
                  className={`block h-[2.5px] rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-8 bg-orange-500"
                      : "w-4 bg-white/50 hover:bg-white/80"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Compact Action Strip */}
        <div className="max-w-4xl mx-auto mt-6 flex flex-col sm:flex-row items-center justify-between gap-5 bg-white p-5 sm:p-7 rounded-xl border border-stone-200/90 shadow-sm">
          <div className="text-left">
            <h3 className="font-serif text-lg sm:text-xl text-stone-900 mb-0.5">
              Planning an Event?
            </h3>
            <p className="font-sans text-stone-600 text-xs font-light">
              Connect with our team for seating arrangements, audio-visual equipment, and catering.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            <Link
              href="/banquet"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-sans text-xs uppercase tracking-[0.16em] font-semibold px-5 py-3 rounded shadow-sm transition-all duration-200"
            >
              <span>Explore Utsava</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>

            <Link
              href="/contact-us?inquiry=banquet"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-stone-100 border border-stone-300 text-stone-800 font-sans text-xs uppercase tracking-[0.16em] font-medium px-5 py-3 rounded transition-colors duration-200"
            >
              <span>Enquire Now</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}