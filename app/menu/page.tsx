"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Phone,
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const heroBg = "/menu/hero.webp";

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
  "/menu/24.webp",
];

export default function RestaurantMenuPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  const resetZoom = () => {
    setZoomLevel(1);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, left: 0 });
    }
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(Number((prev + 0.5).toFixed(1)), 2.5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(Number((prev - 0.5).toFixed(1)), 1));
  };

  const openViewer = (index: number) => {
    setZoomIndex(index);
    setZoomLevel(1);
  };

  const closeViewer = () => {
    setZoomIndex(null);
    setZoomLevel(1);
  };

  const nextSheet = () => {
    resetZoom();
    setZoomIndex((prev) => (prev !== null ? (prev + 1) % menuImages.length : null));
  };

  const prevSheet = () => {
    resetZoom();
    setZoomIndex((prev) =>
      prev !== null ? (prev - 1 + menuImages.length) % menuImages.length : null
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (zoomIndex === null) return;
      if (e.key === "Escape") closeViewer();
      if (e.key === "ArrowRight") nextSheet();
      if (e.key === "ArrowLeft") prevSheet();
      if (e.key === "+" || e.key === "=") handleZoomIn();
      if (e.key === "-") handleZoomOut();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomIndex]);

  // Prevent background page scrolling while viewer is open
  useEffect(() => {
    if (zoomIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [zoomIndex]);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#24332C] antialiased selection:bg-[#24332C] selection:text-[#FDFBF7] overflow-x-hidden">
      <Navbar />

      {/* =========================================================
          01 - CORNER MASTHEAD HERO
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

        <div className="absolute inset-0 bg-gradient-to-t from-[#1D2A24]/90 via-[#1D2A24]/30 to-[#1D2A24]/25 pointer-events-none z-10" />

        <div className="relative z-20 w-full flex items-center justify-between text-white/90" />

        {/* BOTTOM CORNERS */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end text-[#FDFBF7]"
        >
          {/* Bottom-Left Bold Heading */}
          <div className="lg:col-span-8">
            <p className="font-sans text-xs sm:text-sm tracking-[0.3em] uppercase text-amber-200 font-bold mb-3">
              Cinnamon Restaurant &bull; Culinary Collection
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-semibold leading-[1.04] tracking-[-0.02em] drop-shadow-md">
              Check Our <br />
              <span className="italic font-normal text-[#F4EFE6]">Menu</span>
            </h1>
          </div>

          {/* Bottom-Right Bold Enquiries & Contact Details */}
          <div className="lg:col-span-4 lg:text-right flex flex-col lg:items-end justify-end space-y-3">
            <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.22em] text-amber-200 font-bold leading-relaxed">
              For Any Enquiries Connect With Us:
            </p>

            <div className="flex flex-col lg:items-end gap-1.5 text-base sm:text-lg font-sans text-[#FDFBF7] font-bold">
              <a
                href="tel:+919035034418"
                className="inline-flex items-center gap-2 hover:text-amber-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-200" />
                <span>+91 90350 34418</span>
              </a>
              <a
                href="tel:+917619231899"
                className="inline-flex items-center gap-2 hover:text-amber-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-200" />
                <span>+91 76192 31899</span>
              </a>
            </div>

            <div className="pt-2">
              <Link
                href="https://highlandhotel.in/wp-content/uploads/2026/08/Cinnamon-Restaurant-Food-Menu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FDFBF7] text-[#24332C] hover:bg-[#F4EFE6] px-6 py-3 rounded-sm font-sans text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-sm active:scale-95"
              >
                <span>View Menu Sheet</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          02 - MENU SHEETS GRID
      ========================================================== */}
      <section id="menu-sheets" className="py-20 sm:py-28 px-4 sm:px-8 max-w-[1300px] mx-auto select-none">
        <div className="max-w-4xl mx-auto mb-10 px-2 border-b border-[#E5E0D5] pb-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#24332C]">
            Official Dining Catalogue
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] sm:gap-[32px] md:gap-[40px] w-full max-w-4xl mx-auto justify-center items-center">
          {menuImages.map((src, index) => (
            <div
              key={index}
              onClick={() => openViewer(index)}
              className="relative aspect-[1/1.414] w-full cursor-zoom-in group overflow-hidden bg-white border border-[#E2D9CB] shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm"
            >
              <Image
                src={src}
                alt="Cinnamon Restaurant Menu"
                fill
                priority={index < 2}
                unoptimized
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-center transition-transform duration-500 group-hover:scale-[1.02]"
                style={{
                  imageRendering: "-webkit-optimize-contrast",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          03 - SCROLLABLE ZOOM FULLSCREEN VIEWER (UP/DOWN/LEFT/RIGHT)
      ========================================================== */}
      <AnimatePresence>
        {zoomIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1D2A24]/95 backdrop-blur-md flex flex-col"
          >
            {/* Top Controls Bar */}
            <div className="w-full flex items-center justify-end gap-2 sm:gap-3 text-[#FDFBF7] z-20 p-3 sm:px-6 sm:py-4 border-b border-white/15 shrink-0">
              {/* Zoom Controls */}
              <div className="flex items-center gap-1 sm:gap-1.5 bg-[#24332C] px-2.5 py-1.5 rounded-full border border-white/15">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= 1}
                  className="p-1.5 rounded-full hover:bg-white/15 disabled:opacity-35 text-white cursor-pointer transition-colors"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <button
                  type="button"
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= 2.5}
                  className="p-1.5 rounded-full hover:bg-white/15 disabled:opacity-35 text-white cursor-pointer transition-colors"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {zoomLevel > 1 && (
                  <button
                    type="button"
                    onClick={resetZoom}
                    className="p-1.5 rounded-full hover:bg-white/15 text-amber-200 cursor-pointer transition-colors"
                    aria-label="Reset zoom"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Prev / Next / Close Buttons */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  type="button"
                  onClick={prevSheet}
                  className="p-2 rounded-full bg-[#24332C] hover:bg-[#2F4239] text-white cursor-pointer transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextSheet}
                  className="p-2 rounded-full bg-[#24332C] hover:bg-[#2F4239] text-white cursor-pointer transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={closeViewer}
                  className="p-2 rounded-full bg-[#A1611D] hover:bg-[#755A2F] text-white cursor-pointer ml-1 sm:ml-2 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Native Scrollable Zoom Viewport (Supports full Up/Down/Left/Right scroll) */}
            <div
              ref={scrollContainerRef}
              className="flex-1 w-full overflow-auto p-4 sm:p-8 flex"
            >
              <div
                onClick={() => setZoomLevel((prev) => (prev === 1 ? 1.8 : 1))}
                style={{
                  width: zoomLevel === 1 ? "auto" : `${zoomLevel * 100}%`,
                  maxWidth: zoomLevel === 1 ? "640px" : "none",
                }}
                className={`m-auto transition-all duration-300 ease-out ${
                  zoomLevel > 1 ? "cursor-zoom-out" : "cursor-zoom-in"
                }`}
              >
                <img
                  src={menuImages[zoomIndex]}
                  alt="Cinnamon Restaurant Menu"
                  className="w-full h-auto block rounded-sm shadow-2xl select-none"
                  draggable={false}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          04 - LIGHT PARCHMENT CONTACT FOOTER STRIP
      ========================================================== */}
      <section className="bg-[#F2ECE1] text-[#24332C] py-20 px-6 sm:px-12 lg:px-20 border-t border-[#DFD8CA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-12 border-b border-[#D8D0C0]">
            <div className="lg:col-span-5">
              <span className="font-sans text-xs uppercase tracking-[0.28em] text-[#A1611D] block mb-2 font-bold">
                Hospitality &bull; Cinnamon Dining
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#24332C] font-bold mb-3">
                Connect With Us
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#24332C]/90 font-medium leading-relaxed">
                For <strong>table reservations</strong>, special chef tastings, and{" "}
                <strong>private banquet catering</strong>, our culinary concierge is at your service.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs font-sans text-[#24332C]">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#24332C] font-sans uppercase tracking-widest text-xs font-bold">
                  <Phone className="w-4 h-4 text-[#A1611D]" />
                  <span>Enquiries &amp; Bookings</span>
                </div>
                <div className="text-[#24332C] text-base sm:text-lg font-bold space-y-1">
                  <p>
                    <a href="tel:+919035034418" className="hover:text-[#A1611D] transition-colors">
                      +91 90350 34418
                    </a>
                  </p>
                  <p>
                    <a href="tel:+917619231899" className="hover:text-[#A1611D] transition-colors">
                      +91 76192 31899
                    </a>
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#24332C] font-sans uppercase tracking-widest text-xs font-bold">
                  <span>Dining Hours &amp; Facilities</span>
                </div>
                <p className="text-[#24332C] text-base font-bold">
                  Breakfast, Lunch, High Tea &amp; Dinner
                </p>
                <p className="text-xs text-[#24332C]/85 font-semibold">
                  A La Carte service open daily from 7:00 AM to 10:30 PM. Indoor &amp; Scenic Balcony Seating available.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#24332C] font-bold">
            <p>Highland Hotel &bull; Cinnamon Multicuisine Restaurant</p>
            <div className="flex items-center gap-4">
              <Link
                href="/cinnamon"
                className="bg-[#24332C] text-[#FDFBF7] hover:bg-[#2F4239] px-6 py-3 rounded-sm uppercase tracking-[0.2em] font-bold transition-all shadow-xs"
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