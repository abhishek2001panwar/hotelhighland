"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Phone,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const heroBg = "/65.jpg";

const tariffPages = [
  {
    id: 1,
    title: "Tariff & Package Details - Page 1",
    src: "/combos/1.jpg",
  },
  {
    id: 2,
    title: "Tariff & Package Details - Page 2",
    src: "/combos/2.webp",
  },
];

const pdfDownloadUrl =
  "https://highlandhotel.in/wp-content/uploads/2025/04/Highland-Hotel_Tariff-Chart-A4_v2.pdf";

export default function ComboPackagesPage() {
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
    setZoomIndex((prev) => (prev !== null ? (prev + 1) % tariffPages.length : null));
  };

  const prevSheet = () => {
    resetZoom();
    setZoomIndex((prev) =>
      prev !== null ? (prev - 1 + tariffPages.length) % tariffPages.length : null
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
      {/* =========================================================
          01 - CORNER MASTHEAD HERO (ORIGINAL HEADING KEPT, BOLD & ZERO BLACK/RED)
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
            alt="Highland Hotel Luxury Suites & Rooms"
            fill
            priority
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

        {/* Deep Botanical Forest Gradient Overlay (Zero Black) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1D2A24]/90 via-[#1D2A24]/30 to-[#1D2A24]/25 pointer-events-none z-10" />

        {/* TOP CORNERS */}
        <div className="relative z-20 w-full flex items-center justify-between text-[#FDFBF7]">
          <Navbar />
        </div>

        {/* BOTTOM CORNERS */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end text-[#FDFBF7]"
        >
          {/* Bottom-Left Heading (Original Text Preserved, Bold Hierarchy) */}
          <div className="lg:col-span-8">
            <p className="font-sans text-xs sm:text-sm tracking-[0.3em] uppercase text-amber-200 font-bold mb-3">
              Enjoy Your Dream Vacation with Us
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-semibold leading-[1.04] tracking-[-0.02em] drop-shadow-md">
              Check Our <br />
              <span className="italic font-normal text-[#F4EFE6]">Combo Packages</span>
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
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          02 - DUAL PORTRAIT TARIFF SPREAD (CLEAN, CLICK TO ZOOM)
      ========================================================== */}
      <section id="tariff-sheets" className="py-20 sm:py-28 px-4 sm:px-8 max-w-[1300px] mx-auto select-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] sm:gap-[32px] md:gap-[40px] w-full max-w-4xl mx-auto justify-center items-center">
          {tariffPages.map((page, index) => (
            <div
              key={page.id}
              onClick={() => openViewer(index)}
              className="relative aspect-[1/1.414] w-full cursor-zoom-in group overflow-hidden bg-white border border-[#E2D9CB] shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm"
            >
              <Image
                src={page.src}
                alt={page.title}
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                style={{
                  imageRendering: "-webkit-optimize-contrast",
                }}
              />
            </div>
          ))}
        </div>

        {/* =========================================================
            03 - PDF DOWNLOAD CTA
        ========================================================== */}
        <div className="mt-20 pt-12 border-t border-[#E5E0D5] text-center max-w-2xl mx-auto">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#A1611D] font-bold mb-6">
            Click Below to Download Our Combo Packages
          </p>

          <a
            href={pdfDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Highland-Hotel_Tariff-Chart.pdf"
            className="group inline-flex flex-col items-center justify-center p-8 rounded-2xl bg-[#F6F2E9] hover:bg-[#EFE9DC] border border-[#E0D9CB] transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xs border border-[#D8D0C0] group-hover:scale-110 transition-transform duration-300 mb-4">
              <Download className="w-7 h-7 text-[#24332C] stroke-[2]" />
            </div>

            <div className="flex items-center gap-2 text-[#24332C] font-serif text-lg sm:text-xl font-bold">
              <FileText className="w-4 h-4 text-[#A1611D]" />
              <span>Download Official Tariff PDF</span>
            </div>

            <span className="font-sans text-[11px] text-[#24332C]/75 font-semibold tracking-wider uppercase mt-1">
              Highland-Hotel_Tariff-Chart-A4_v2.pdf
            </span>
          </a>
        </div>
      </section>

      {/* =========================================================
          04 - SCROLLABLE ZOOM FULLSCREEN VIEWER (UP/DOWN/LEFT/RIGHT)
      ========================================================== */}
      <AnimatePresence>
        {zoomIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1D2A24]/95 backdrop-blur-md flex flex-col"
          >
            {/* Top Controls Bar (Controls Only, No Text or Page Numbers) */}
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

            {/* Native Scrollable Zoom Viewport */}
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
                  src={tariffPages[zoomIndex].src}
                  alt={tariffPages[zoomIndex].title}
                  className="w-full h-auto block rounded-sm shadow-2xl select-none"
                  draggable={false}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          05 - LIGHT PARCHMENT CONTACT FOOTER STRIP (BOLD DETAILS)
      ========================================================== */}
      <section className="bg-[#F2ECE1] text-[#24332C] py-20 px-6 sm:px-12 lg:px-20 border-t border-[#DFD8CA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-12 border-b border-[#D8D0C0]">
            <div className="lg:col-span-5">
              <span className="font-sans text-xs uppercase tracking-[0.28em] text-[#A1611D] block mb-2 font-bold">
                Vacation Concierge &bull; Reservations
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#24332C] font-bold mb-3">
                Plan Your Stay
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#24332C]/90 font-medium leading-relaxed">
                Experience <strong>tailored hospitality</strong>, <strong>curated wellness inclusions</strong>, and <strong>luxurious suite accommodations</strong> designed for memorable holidays and retreats.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs font-sans text-[#24332C]">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#24332C] font-sans uppercase tracking-widest text-xs font-bold">
                  <Phone className="w-4 h-4 text-[#A1611D]" />
                  <span>Package Bookings</span>
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
                  <span>Front Desk Concierge</span>
                </div>
                <p className="text-[#24332C] text-base font-bold">
                  24 / 7 Guest Reception
                </p>
                <p className="text-xs text-[#24332C]/85 font-semibold">
                  Prior reservation recommended for custom weekend &amp; wellness combos.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#24332C] font-bold">
            <p>Highland Hotel &bull; Luxury Suites &amp; Combo Packages</p>
            <div className="flex items-center gap-4">
              <Link
                href="/rooms"
                className="bg-[#24332C] text-[#FDFBF7] hover:bg-[#2F4239] px-6 py-3 rounded-sm uppercase tracking-[0.2em] font-bold transition-all shadow-xs"
              >
                View Rooms
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}