"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const banquetSlides = [
  {
    id: 1,
    image: "/90.jpg",
    alt: "Utsava Banquet Grand Interior & Stage Setup",
  },
  {
    id: 2,
    image: "/91.jpg",
    alt: "Banquet Hall Interior, Seating and Table Arrangements",
  },
  {
    id: 3,
    image: "/92.jpg",
    alt: "Celebratory Evening Lighting and Dining Ambiance",
  },
];

export default function Banquet() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-play slideshow timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banquetSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Apple-style scroll-driven expansion from inset rounded card to full-bleed stage
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const frameScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const frameRadius = useTransform(scrollYProgress, [0, 1], ["28px", "0px"]);
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], ["-6%", "0%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[90dvh] sm:h-[88dvh] min-h-[580px] max-h-[880px] bg-[#FDFBF7] flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Apple Scroll-Expanding Frame */}
      <motion.div
        style={{
          scale: frameScale,
          borderRadius: frameRadius,
        }}
        className="relative w-full h-full overflow-hidden shadow-2xl border border-[#DDD4C4] bg-[#3A2D21] flex flex-col justify-between p-6 sm:p-10 lg:p-14 will-change-transform transform-gpu"
      >
        {/* Background Slides */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          {banquetSlides.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <motion.div
                  style={{ y: imageParallaxY }}
                  className="w-full h-[112%] -top-[6%] relative will-change-transform"
                >
                  <div
                    className={`w-full h-full transform transition-transform duration-[7000ms] ease-out ${
                      isActive ? "scale-110" : "scale-100"
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      priority={idx === 0}
                      quality={95}
                      className="object-cover object-center"
                      sizes="100vw"
                    />
                  </div>
                </motion.div>
              </div>
            );
          })}

          {/* Warm Espresso Bronze Scrims (Zero Black) */}
          <div
            className="absolute inset-x-0 top-0 h-36 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(44, 34, 24, 0.55) 0%, rgba(44, 34, 24, 0.15) 55%, rgba(44, 34, 24, 0) 100%)",
            }}
          />
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(44, 34, 24, 0.88) 0%, rgba(44, 34, 24, 0.35) 38%, rgba(44, 34, 24, 0) 72%)",
            }}
          />
        </div>

        {/* Top Header / Bold Eyebrow Badge */}
        <div className="relative z-20 flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#3A2D21]/60 backdrop-blur-md border border-[#FDFBF7]/25 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E5C99B]" />
            <p className="font-sans text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[#FDFBF7] font-bold">
              Utsava Banquet Hall &bull; 1,904 Sq. Ft.
            </p>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#3A2D21]/60 backdrop-blur-md border border-[#FDFBF7]/20 text-[11px] font-mono font-bold uppercase tracking-wider text-[#E5C99B]">
            <span>200 Seated</span>
            <span>&bull;</span>
            <span>600 Floating Capacity</span>
          </div>
        </div>

        {/* Bottom Content Area: Bold Title, Facilities & Matching Gold/Ivory CTAs */}
        <div className="relative z-20 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-6">
          
          {/* Left: Heading & Bolded Event Facilities */}
          <div className="max-w-xl text-left">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#FDFBF7] leading-[1.08] mb-3 drop-shadow-[0_2px_14px_rgba(44,34,24,0.6)]">
              Celebrate Something <br className="hidden sm:inline" />
              <span className="italic font-light text-[#F4EFE6]">Extraordinary</span>
            </h2>

            <p className="font-sans text-[#F4EFE6] text-xs sm:text-sm font-medium max-w-lg leading-relaxed drop-shadow-[0_2px_10px_rgba(44,34,24,0.55)]">
              A premier pillarless venue in North Bangalore crafted for{" "}
              <strong className="font-bold text-[#E5C99B]">
                Weddings, Receptions, Corporate Conferences &amp; Milestone Celebrations
              </strong>{" "}
              with up to <strong className="font-bold text-[#FDFBF7]">600 guests</strong>.
            </p>
          </div>

          {/* Right: Progress Indicators & Matching Gold/Ivory Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-4">
            
            {/* Progress Indicators */}
            <div className="flex items-center gap-2">
              {banquetSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Slide ${index + 1}`}
                  className="md:py-1.5 cursor-pointer focus:outline-none group"
                >
                  <span
                    className={`block h-[2.5px] rounded-full transition-all duration-500 ${
                      index === currentSlide
                        ? "w-8 bg-[#E5C99B]"
                        : "w-3 bg-[#FDFBF7]/40 group-hover:bg-[#FDFBF7]/75"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* CTA Buttons (Brushed Antique Gold & Frosted Ivory) */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <Link
                href="/banquet"
                className="group relative inline-flex items-center justify-center gap-2 bg-[#A1611D] hover:bg-[#73582D] text-[#FDFBF7] font-sans text-xs uppercase tracking-[0.18em] font-bold px-6 py-3.5 rounded-md shadow-md transition-all duration-300 hover:shadow-lg active:scale-[0.98]"
              >
                <span>Explore Utsava</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#FDFBF7] hover:bg-[#F4EFE6] text-[#3A2D21] font-sans text-xs uppercase tracking-[0.18em] font-bold px-6 py-3.5 rounded-md transition-all duration-300 active:scale-[0.98] shadow-md"
              >
                <span>Enquire Now</span>
              </Link>
            </div>

          </div>
        </div>

      </motion.div>
    </section>
  );
}