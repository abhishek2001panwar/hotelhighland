"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Phone,
  ArrowUpRight,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";

// Official Highland Hotel High-Res Hero Image
const heroBg =
  "/menu/hero.webp";

// The 10 Menu Sheet Images
const menuImages = [
  "/menu/1.webp",
  "/menu/2.webp",
  "/menu/3.webp",
  "/menu/4.webp",
  "/menu/5.webp",
  "/menu/6.webp",
  "/menu/7.webp",
  "/menu/8.webp",
  "/menu/9.webp",
  "/menu/10.webp",
  "/menu/11.webp",
  "/menu/12.webp",
  "/menu/13.webp",
  "/menu/14.webp",
  "/menu/15.webp",
  "/menu/16.webp",
  "/menu/17.webp",
  "/menu/18.webp",
  "/menu/19.webp",
  "/menu/20.webp",
  "/menu/21.webp",
  "/menu/22.webp",
  "/menu/23.webp",
  "/menu/24.webp"
];

export default function RestaurantMenuPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (zoomIndex === null) return;
      if (e.key === "Escape") setZoomIndex(null);
      if (e.key === "ArrowRight")
        setZoomIndex((prev) => (prev !== null ? (prev + 1) % menuImages.length : null));
      if (e.key === "ArrowLeft")
        setZoomIndex((prev) => (prev !== null ? (prev - 1 + menuImages.length) % menuImages.length : null));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomIndex]);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1B1917] antialiased selection:bg-[#1B1917] selection:text-[#FDFBF7] overflow-x-hidden">
      <Navbar />
      {/* =========================================================
          01 - CORNER MASTHEAD HERO (CRISP & UNBLURRED)
      ========================================================== */}
      <section
        ref={heroRef}
        className="relative w-full h-[88svh] min-h-[620px] max-h-[920px] overflow-hidden flex flex-col justify-between p-6 sm:p-12 lg:p-16"
      >
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-x-0 -top-[8%] h-[116%] w-full will-change-transform pointer-events-none transform-gpu"
        >
          <Image
            src={heroBg}
            alt="Highland Hotel Cinnamon Restaurant Experience"
            fill
            priority
            quality={95}
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
            style={{
              imageRendering: "-webkit-optimize-contrast",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          />
        </motion.div>

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/25 pointer-events-none z-10" />

        {/* TOP CORNERS */}
        <div className="relative z-20 w-full flex items-center justify-between text-white/90">
        
        </div>

        {/* BOTTOM CORNERS */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end text-white"
        >
          {/* Bottom-Left Heading */}
          <div className="lg:col-span-8">
            <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-stone-300 font-medium mb-3">
              Culinary Collection
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-normal leading-[1.02] tracking-[-0.035em] drop-shadow-md">
              Check Our <br />
              <span className="italic font-light text-stone-200">Menu</span>
            </h1>
          </div>

          {/* Bottom-Right Enquiries */}
          <div className="lg:col-span-4 lg:text-right flex flex-col lg:items-end justify-end space-y-4">
            <p className="font-sans text-xs uppercase tracking-[0.22em] text-stone-200 font-medium leading-relaxed">
              For Any Enquiries Connect Us:
            </p>

            <div className="flex flex-col lg:items-end gap-1 text-sm font-sans text-white font-medium">
              <a href="tel:+919035034418" className="hover:text-stone-300 transition-colors">
                +91 90350 34418
              </a>
              <span className="text-white/40 text-xs hidden lg:block">/</span>
              <a href="tel:+917619231899" className="hover:text-stone-300 transition-colors">
                +91 76192 31899
              </a>
            </div>

           <div className="pt-2">
              <Link
                href="https://highlandhotel.in/wp-content/uploads/2026/08/Cinnamon-Restaurant-Food-Menu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#1B1917] hover:bg-stone-100 px-6 py-2.5 rounded-sm font-sans text-[10px] uppercase tracking-[0.2em] font-medium transition-all shadow-sm active:scale-95"
              >
                <span>View Menu Sheet</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.8]" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          02 - DUAL PORTRAIT SPREADS (EXACT COMBOS PAGE STYLE)
      ========================================================== */}
      <section id="menu-sheets" className="py-20 sm:py-28 px-4 sm:px-8 max-w-[1300px] mx-auto select-none">
        
        {/* Top Header Label */}
        <div className="flex items-center justify-between max-w-4xl mx-auto mb-10 px-2 text-[#7A6E58] text-xs font-mono uppercase tracking-widest border-b border-[#E5E0D5] pb-4">
          <span>Official Dining Catalogue</span>
        
        </div>

        {/* Centered Dual-Portrait Grid with Clean Card Shadow and Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] sm:gap-[32px] md:gap-[40px] w-full max-w-4xl mx-auto justify-center items-center">
          {menuImages.map((src, index) => (
            <div
              key={index}
              onClick={() => setZoomIndex(index)}
              className="relative aspect-[1/1.414] w-full cursor-pointer group overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm"
            >
              <Image
                src={src}
                alt={`Highland Menu Sheet 0${index + 1}`}
                fill
                priority={index < 2}
                unoptimized
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-center transition-transform duration-500 group-hover:scale-[1.02]"
                style={{
                  imageRendering: "-webkit-optimize-contrast",
                }}
              />

              {/* Minimal Hover Inspector Pill */}
              <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white pointer-events-none">
                <div className="bg-black/60 p-3 rounded-full backdrop-blur-xs flex items-center gap-2 text-xs font-sans uppercase tracking-widest px-4 py-2 border border-white/20">
                  <Maximize2 className="w-4 h-4" />
                  <span>Inspect Sheet 0{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          03 - FULLSCREEN MODAL INSPECTOR
      ========================================================== */}
      <AnimatePresence>
        {zoomIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-8"
          >
            <div className="w-full flex items-center justify-between text-white z-20 pb-4 border-b border-white/10">
              <span className="font-mono text-xs text-white/60">
                Sheet 0{zoomIndex + 1} / 0{menuImages.length}
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    setZoomIndex((prev) => (prev !== null ? (prev - 1 + menuImages.length) % menuImages.length : null))
                  }
                  className="p-2 rounded-full hover:bg-white/10 text-white cursor-pointer transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() =>
                    setZoomIndex((prev) => (prev !== null ? (prev + 1) % menuImages.length : null))
                  }
                  className="p-2 rounded-full hover:bg-white/10 text-white cursor-pointer transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setZoomIndex(null)}
                  className="p-2 rounded-full hover:bg-white/10 text-white cursor-pointer ml-3 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="relative w-full h-[82vh] flex items-center justify-center p-2">
              <Image
                src={menuImages[zoomIndex]}
                alt={`Menu page zoom ${zoomIndex + 1}`}
                fill
                unoptimized
                sizes="100vw"
                className="object-contain object-center"
              />
            </div>

            <div className="text-center font-sans text-xs text-white/40 pt-2">
              Use Left / Right arrow keys &bull; Esc to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          04 - LIGHT PARCHMENT CONTACT FOOTER STRIP
      ========================================================== */}
      <section className="bg-[#F2ECE1] text-[#1B1917] py-20 px-6 sm:px-12 lg:px-20 border-t border-[#DFD8CA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-12 border-b border-[#D8D0C0]">
            <div className="lg:col-span-5">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#7A6E58] block mb-2 font-medium">
                Hospitality &bull; Cinnamon Dining
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#1B1917] font-normal mb-3">
                Connect With Us
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#1B1917]/75 font-light leading-relaxed">
                For table reservations, special chef tastings, and private banquet catering, our culinary concierge is at your service.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs font-sans text-[#1B1917]/80">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#1B1917] font-sans uppercase tracking-widest text-[11px] font-semibold">
                  <Phone className="w-3.5 h-3.5 text-[#7A6E58]" />
                  <span>Enquiries &amp; Bookings</span>
                </div>
                <div className="text-[#1B1917] text-sm font-medium space-y-0.5">
                  <p>
                    <a href="tel:+919035034418" className="hover:underline">
                      +91 90350 34418
                    </a>
                  </p>
                  <p>
                    <a href="tel:+917619231899" className="hover:underline">
                      +91 76192 31899
                    </a>
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#1B1917] font-sans uppercase tracking-widest text-[11px] font-semibold">
                  <span>Dining Hours</span>
                </div>
                <p className="text-[#1B1917] text-sm font-medium">
                  Breakfast, Lunch, High Tea &amp; Dinner
                </p>
                <p className="text-[11px] text-[#1B1917]/60 font-light">
                  A La Carte service open daily from 7:00 AM to 10:30 PM.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#1B1917]/60">
            <p>Highland Hotel &bull; Cinnamon Multicuisine Restaurant</p>
            <div className="flex items-center gap-4">
              <Link
                href="/cinnamon"
                className="bg-[#1B1917] text-[#FDFBF7] hover:bg-stone-800 px-6 py-2.5 rounded-sm uppercase tracking-[0.2em] font-medium transition-all shadow-xs"
              >
                About Cinnamon
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}