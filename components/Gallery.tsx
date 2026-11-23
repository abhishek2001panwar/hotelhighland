"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: number;
  alt: string;
  src: string;
}

const galleryItems: GalleryImage[] = [
  {
    id: 1,
    alt: "Highland Hotel Facade & Grounds",
    src: "/gallery1.webp",
  },
  {
    id: 2,
    alt: "Executive Suite Living Area",
    src: "/gallery2.webp",
  },
  {
    id: 3,
    alt: "Utsava Banquet Grand Interior",
    src: "/gallery3.webp",
  },
  {
    id: 4,
    alt: "Executive Twin Suite",
    src: "/gallery4.webp",
  },
  {
    id: 5,
    alt: "Cinnamon Multicuisine Dining",
    src: "/gallery5.webp",
  },
  {
    id: 6,
    alt: "Ayurveda & Holistic Rejuvenation",
    src: "/gallery6.webp",
  },
];

// Ultra-buttery, critically-damped luxury spring (zero bounce, liquid deceleration)
const luxurySpring = {
  type: "spring" as const,
  stiffness: 130,
  damping: 26,
  mass: 1.1,
  restDelta: 0.001,
};

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const total = galleryItems.length;

  useEffect(() => {
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevLightbox = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : prev === 0 ? total - 1 : prev - 1
    );
  }, [total]);

  const nextLightbox = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % total));
  }, [total]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
      if (e.key === "ArrowRight") nextLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, prevLightbox, nextLightbox]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [lightboxIndex]);

  const slideOffset = isDesktop
    ? `calc(-${activeIndex} * (28vw + 2rem))`
    : `calc(-${activeIndex} * (78vw + 1.25rem))`;

  return (
    <section
      data-scroll-section
      className="relative w-full bg-[#FDFBF7] text-[#3A2D21] py-14 sm:py-20 border-t border-[#DDD4C4] overflow-hidden select-none"
    >
      {/* Top Bar: Stationary Header + Stationary Pill Controls */}
      <div className="relative z-30 w-full px-6 sm:px-12 lg:px-16 mb-6 sm:mb-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          
          <span className="font-sans text-[11px] sm:text-xs tracking-[0.28em] uppercase text-[#A1611D] font-bold">
            Visual Gallery
          </span>
        </div>

        {/* Stationary Pill Arrows & Counter */}
        <div className="flex items-center gap-3.5 sm:gap-4 shrink-0 pointer-events-auto">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous image"
            className="w-11 h-8 sm:w-12 sm:h-8 rounded-full bg-[#EAE1D0] hover:bg-[#DDD4C4] text-[#3A2D21] flex items-center justify-center transition-colors cursor-pointer active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2]" />
          </button>

          <span className="font-sans text-xs font-bold tracking-[0.18em] text-[#3A2D21] min-w-[38px] text-center">
            {activeIndex + 1}/{total}
          </span>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next image"
            className="w-11 h-8 sm:w-12 sm:h-8 rounded-full bg-[#A1611D] hover:bg-[#865017] text-[#FDFBF7] flex items-center justify-center transition-colors cursor-pointer active:scale-95 shadow-xs"
          >
            <ArrowRight className="w-4 h-4 stroke-[2]" />
          </button>
        </div>
      </div>

      {/* ONLY THE IMAGES MOVE INSIDE THIS ISOLATED VIEWPORT */}
      <div className="relative z-10 w-full overflow-hidden pl-6 sm:pl-12 lg:pl-16">
        <motion.div
          animate={{ x: slideOffset }}
          transition={luxurySpring}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.08}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50) handleNext();
            else if (info.offset.x > 50) handlePrev();
          }}
          className="flex items-end gap-5 lg:gap-8 will-change-transform transform-gpu cursor-grab active:cursor-grabbing"
        >
          {galleryItems.map((item, idx) => {
            const isActive = idx === activeIndex;

            return (
              <motion.div
                key={item.id}
                animate={{
                  width: isDesktop
                    ? isActive
                      ? "70vw"
                      : "28vw"
                    : isActive
                    ? "86vw"
                    : "78vw",
                  height: isDesktop
                    ? isActive
                      ? 570
                      : 330
                    : isActive
                    ? 380
                    : 260,
                  opacity: isActive ? 1 : 0.85,
                }}
                transition={luxurySpring}
                onClick={() => {
                  if (isActive) openLightbox(idx);
                  else setActiveIndex(idx);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    if (isActive) openLightbox(idx);
                    else setActiveIndex(idx);
                  }
                }}
                aria-label={item.alt}
                className="relative shrink-0 rounded-2xl overflow-hidden bg-[#F4EFE6] border border-[#DDD4C4] shadow-md hover:opacity-100 will-change-[width,height] transform-gpu group"
              >
                {/* Inner Parallax Counter-Scale so image never stretches during width/height expansion */}
                <motion.div
                  animate={{
                    scale: isActive ? 1 : 1.07,
                  }}
                  transition={luxurySpring}
                  className="relative w-full h-full will-change-transform transform-gpu"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    priority={idx <= 2}
                    quality={95}
                    draggable={false}
                    className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-103 pointer-events-none"
                    sizes="(max-width: 1024px) 86vw, 72vw"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && galleryItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-[#241B14]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery fullscreen preview"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-[#FDFBF7] hover:bg-[#A1611D] p-3 rounded-full bg-[#3A2D21]/80 border border-[#FDFBF7]/20 transition-colors z-50 cursor-pointer"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={prevLightbox}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-[#FDFBF7] p-3.5 rounded-full bg-[#3A2D21]/80 border border-[#FDFBF7]/20 hover:bg-[#A1611D] hover:border-[#A1611D] transition-colors z-50 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextLightbox}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-[#FDFBF7] p-3.5 rounded-full bg-[#3A2D21]/80 border border-[#FDFBF7]/20 hover:bg-[#A1611D] hover:border-[#A1611D] transition-colors z-50 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center">
            <Image
              src={galleryItems[lightboxIndex].src}
              alt={galleryItems[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="95vw"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}