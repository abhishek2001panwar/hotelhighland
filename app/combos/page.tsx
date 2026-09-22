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
  Download,
  FileText,
} from "lucide-react";
import Navbar from "@/components/Navbar";

// Official Highland Hotel Assets
const heroBg =
  "https://highlandhotel.in/wp-content/uploads/2025/04/Untitled-design-2025-04-15T132306.479.png";

const tariffPages = [
  {
    id: 1,
    title: "Tariff & Package Details - Page 1",
    src: "https://highlandhotel.in/wp-content/uploads/2025/04/Highland-Hotel_Tariff-Chart-A4_v2_page-0001.jpg",
  },
  {
    id: 2,
    title: "Tariff & Package Details - Page 2",
    src: "https://highlandhotel.in/wp-content/uploads/2025/04/Highland-Hotel_Tariff-Chart-A4_v2_page-0002.jpg",
  },
];

const pdfDownloadUrl =
  "https://highlandhotel.in/wp-content/uploads/2025/04/Highland-Hotel_Tariff-Chart-A4_v2.pdf";

export default function ComboPackagesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.07]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (zoomIndex === null) return;
      if (e.key === "Escape") setZoomIndex(null);
      if (e.key === "ArrowRight")
        setZoomIndex((prev) => (prev !== null ? (prev + 1) % tariffPages.length : null));
      if (e.key === "ArrowLeft")
        setZoomIndex((prev) => (prev !== null ? (prev - 1 + tariffPages.length) % tariffPages.length : null));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomIndex]);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1B1917] antialiased selection:bg-[#1B1917] selection:text-[#FDFBF7] overflow-x-hidden">
      
    {/* =========================================================
          01 - CORNER MASTHEAD HERO (CRISP & SHARP)
      ========================================================== */}
      <section
        ref={heroRef}
        className="relative w-full h-[88svh] min-h-[620px] max-h-[920px] overflow-hidden flex flex-col justify-between p-6 sm:p-12 lg:p-16"
      >
        {/* Parallax Container with Locked Scale & Hardware Rendering */}
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

        {/* Crisp Gradient Overlay (Protects Text Contrast Without Muddying The Image) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/25 pointer-events-none z-10" />

        {/* TOP CORNERS */}
        <div className="relative z-20 w-full flex items-center justify-between text-white/90">
         <Navbar />
        </div>

        {/* BOTTOM CORNERS */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end text-white"
        >
          {/* Bottom-Left Heading */}
          <div className="lg:col-span-8">
            <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-stone-300 font-medium mb-3">
              Enjoy Your Dream Vacation with Us
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-normal leading-[1.02] tracking-[-0.035em] drop-shadow-md">
              Check Our <br />
              <span className="italic font-light text-stone-200">Combo Packages</span>
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

           
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          02 - DUAL PORTRAIT TARIFF SPREAD (CLEAN CENTERED VIEWPORT)
      ========================================================== */}
      <section id="tariff-sheets" className="py-20 sm:py-28 px-4 sm:px-8 max-w-[1300px] mx-auto select-none">
        
        {/* Top Header Label */}
        <div className="flex items-center justify-between max-w-4xl mx-auto mb-10 px-2 text-[#7A6E58] text-xs font-mono uppercase tracking-widest border-b border-[#E5E0D5] pb-4">
          <span>Official Tariff &amp; Inclusions</span>
          <span>A4 Folio &bull; 02 Pages</span>
        </div>

        {/* 2 Portrait Sheets Side-by-Side (Controlled Gap, No Borders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] sm:gap-[32px] md:gap-[40px] w-full max-w-4xl mx-auto justify-center items-center">
          {tariffPages.map((page, index) => (
            <div
              key={page.id}
              onClick={() => setZoomIndex(index)}
              className="relative aspect-[1/1.414] w-full cursor-pointer group overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm"
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

              {/* Minimal Hover Indicator */}
              <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white pointer-events-none">
                <div className="bg-black/60 p-3 rounded-full backdrop-blur-xs flex items-center gap-2 text-xs font-sans uppercase tracking-widest px-4 py-2 border border-white/20">
                  <Maximize2 className="w-4 h-4" />
                  <span>Inspect Page 0{page.id}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================
            03 - PDF DOWNLOAD LOGO CTA
        ========================================================== */}
        <div className="mt-20 pt-12 border-t border-[#E5E0D5] text-center max-w-2xl mx-auto">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#7A6E58] font-medium mb-6">
            Click Below to Download Our Combo Packages
          </p>

          <a
            href={pdfDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Highland-Hotel_Tariff-Chart.pdf"
            className="group inline-flex flex-col items-center justify-center p-8 rounded-2xl bg-[#F6F2E9] hover:bg-[#EFE9DC] border border-[#E0D9CB] transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
          >
            {/* Download Icon / Emblem */}
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xs border border-[#D8D0C0] group-hover:scale-110 transition-transform duration-300 mb-4">
              <Download className="w-7 h-7 text-[#1B1917] stroke-[1.6]" />
            </div>

            <div className="flex items-center gap-2 text-[#1B1917] font-serif text-lg sm:text-xl font-normal">
              <FileText className="w-4 h-4 text-[#7A6E58]" />
              <span>Download Official Tariff PDF</span>
            </div>

            <span className="font-sans text-[11px] text-[#1B1917]/60 tracking-wider uppercase mt-1">
              Highland-Hotel_Tariff-Chart-A4_v2.pdf
            </span>
          </a>
        </div>

      </section>

      {/* =========================================================
          04 - FULLSCREEN MODAL INSPECTOR
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
                Sheet 0{zoomIndex + 1} / 0{tariffPages.length}
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    setZoomIndex((prev) => (prev !== null ? (prev - 1 + tariffPages.length) % tariffPages.length : null))
                  }
                  className="p-2 rounded-full hover:bg-white/10 text-white cursor-pointer transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() =>
                    setZoomIndex((prev) => (prev !== null ? (prev + 1) % tariffPages.length : null))
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
                src={tariffPages[zoomIndex].src}
                alt={tariffPages[zoomIndex].title}
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
          05 - LIGHT PARCHMENT CONTACT FOOTER STRIP
      ========================================================== */}
      <section className="bg-[#F2ECE1] text-[#1B1917] py-20 px-6 sm:px-12 lg:px-20 border-t border-[#DFD8CA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-12 border-b border-[#D8D0C0]">
            <div className="lg:col-span-5">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#7A6E58] block mb-2 font-medium">
                Vacation Concierge &bull; Reservations
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#1B1917] font-normal mb-3">
                Plan Your Stay
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#1B1917]/75 font-light leading-relaxed">
                Experience tailored hospitality, curated wellness inclusions, and luxurious suite accommodations designed for memorable holidays and retreats.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs font-sans text-[#1B1917]/80">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#1B1917] font-sans uppercase tracking-widest text-[11px] font-semibold">
                  <Phone className="w-3.5 h-3.5 text-[#7A6E58]" />
                  <span>Package Bookings</span>
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
                  <span>Front Desk Concierge</span>
                </div>
                <p className="text-[#1B1917] text-sm font-medium">
                  24 / 7 Guest Reception
                </p>
                <p className="text-[11px] text-[#1B1917]/60 font-light">
                  Prior reservation recommended for custom weekend &amp; wellness combos.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#1B1917]/60">
            <p>Highland Hotel &bull; Luxury Suites &amp; Combo Packages</p>
            <div className="flex items-center gap-4">
              <Link
                href="/rooms"
                className="bg-[#1B1917] text-[#FDFBF7] hover:bg-stone-800 px-6 py-2.5 rounded-sm uppercase tracking-[0.2em] font-medium transition-all shadow-xs"
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