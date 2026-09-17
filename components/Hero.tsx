"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// The 2 authentic Hotel Highland images
const slides = [
  {
    id: 1,
    tagline: "NORTH BANGALORE • HESARAGHATTA ROAD",
    src: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202405021653296251-fa2274cd-4e3f-4a7f-8b82-cf43d942e545.jpg",
    alt: "Highland Hotel Exterior & Lawns",
  },
  {
    id: 2,
    tagline: "AYURVEDIC WELLNESS & SPA",
    src: "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/202405021653296251-17dedc59-af12-43f0-ab84-b1259f5ca6ec.jpg",
    alt: "Ayurveda Wellness & Rejuvenation Center",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance between the 2 slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[680px] flex flex-col justify-end overflow-hidden px-6 sm:px-12 lg:px-16 pb-12 sm:pb-16 text-white">
      
      {/* Background Image Carousel (2 Images) */}
      <div className="absolute inset-0 w-full h-full -z-20">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            } transition-transform duration-[7000ms]`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Cinematic Vignette Overlay (Darker towards bottom-left for contrast) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent -z-10" />
      <div className="absolute inset-y-0 left-0 w-full sm:w-1/2 bg-gradient-to-r from-black/60 to-transparent -z-10" />

      {/* Bottom Layout Row */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-8 z-10">
        
        {/* Left: Compact Content Block */}
        <div className="max-w-2xl text-left">
          {/* Tagline / Kicker */}
          <p className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-orange-400 font-medium mb-2.5 transition-all duration-300">
            {slides[currentSlide].tagline}
          </p>

          {/* Clean 2-Line Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal leading-[1.14] tracking-tight mb-3.5 drop-shadow-md">
            Where Tranquility Meets <br />
            Hospitality Excellence
          </h1>

          {/* Compact Paragraph */}
          <p className="text-stone-300 text-xs sm:text-sm font-light max-w-sm mb-6 leading-relaxed">
            A refined stay, dining, events and wellness experience in North Bangalore.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3.5">
            <Link
              href="/booking"
              className="group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-200 shadow-lg"
            >
              <span>Book Your Stay</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-md text-xs uppercase tracking-[0.18em] font-medium transition-colors duration-200"
            >
              Explore Highland
            </Link>
          </div>
        </div>

        {/* Right: Functional 2-Slide Indicators */}
        <div className="flex items-center gap-2 pb-1">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Slide ${index + 1}`}
              className="py-2 cursor-pointer focus:outline-none"
            >
              <span
                className={`block h-[2.5px] rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? "w-10 bg-orange-500"
                    : "w-6 bg-white/40 hover:bg-white/70"
                }`}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}