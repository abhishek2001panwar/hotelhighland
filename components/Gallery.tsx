"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";

interface GalleryImage {
  id: number;
  number: string;
  title: string;
  category: string;
  src: string;
  aspect: "wide" | "tall";
  speed: number; // Parallax intensity multiplier
}

const galleryItems: GalleryImage[] = [
  {
    id: 1,
    number: "01",
    title: "Highland Hotel Facade & Grounds",
    category: "Architecture",
    src: "https://highlandhotel.in/wp-content/uploads/2024/09/174-2048x1365.jpg",
    aspect: "wide",
    speed: 0.12,
  },
  {
    id: 2,
    number: "02",
    title: "Executive Suite Living Area",
    category: "Accommodations",
    src: "https://highlandhotel.in/wp-content/uploads/2024/09/15-2048x1365.jpg",
    aspect: "tall",
    speed: -0.16,
  },
  {
    id: 3,
    number: "03",
    title: "Utsava Banquet Grand Interior",
    category: "Celebrations",
    src: "https://highlandhotel.in/wp-content/uploads/2024/09/87-2048x1365.jpg",
    aspect: "tall",
    speed: 0.14,
  },
  {
    id: 4,
    number: "04",
    title: "Executive Twin Suite",
    category: "Accommodations",
    src: "https://highlandhotel.in/wp-content/uploads/2024/09/53-2048x1365.jpg",
    aspect: "wide",
    speed: -0.1,
  },
  {
    id: 5,
    number: "05",
    title: "Cinnamon Multicuisine Dining",
    category: "Gastronomy",
    src: "https://highlandhotel.in/wp-content/uploads/2024/09/155-2048x1365.jpg",
    aspect: "wide",
    speed: 0.15,
  },
  {
    id: 6,
    number: "06",
    title: "Ayurveda & Holistic Rejuvenation",
    category: "Wellness",
    src: "https://highlandhotel.in/wp-content/uploads/2024/09/20-2048x1365.jpg",
    aspect: "tall",
    speed: -0.14,
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [parallaxProgress, setParallaxProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Smooth scroll tracking for native parallax
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top <= windowHeight && rect.bottom >= 0) {
              const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
              setParallaxProgress(progress - 0.5); // Center around 0
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // In-view observer for initial entrance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null || galleryItems.length === 0) return;
    setLightboxIndex((prev) => (prev === null || prev === 0 ? galleryItems.length - 1 : prev - 1));
  }, [lightboxIndex]);

  const nextImage = useCallback(() => {
    if (lightboxIndex === null || galleryItems.length === 0) return;
    setLightboxIndex((prev) => (prev === null || prev === galleryItems.length - 1 ? 0 : prev + 1));
  }, [lightboxIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, prevImage, nextImage]);

  // Prevent scroll when lightbox open
  useEffect(() => {
    if (lightboxIndex === null) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [lightboxIndex]);

  return (
    <section
      ref={sectionRef}
      data-scroll-section
      className="relative w-full bg-[#f8f7f4] text-stone-900 py-16 px-6 sm:px-12 lg:px-20 border-t border-stone-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading with subtle entrance */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6 transition-all duration-1000 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-xl text-left">
            <div className="flex items-center gap-2 mb-2.5">
             
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-900 leading-[1.12]">
              Moments of Highland
            </h2>
          </div>

          <p className="font-sans text-stone-600 text-xs sm:text-sm font-light max-w-sm leading-relaxed text-left md:text-right">
            An architectural and experiential glimpse into the suites, dining, celebrations, and wellness sanctuary.
          </p>
        </div>

        {/* Parallax Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {galleryItems.map((item, index) => {
            const isWide = item.aspect === "wide";
            // Calculates individual image translation offset in pixels based on assigned speed
            const translateY = parallaxProgress * item.speed * 280;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => openLightbox(index)}
                data-scroll
                data-scroll-speed={item.speed > 0 ? "1" : "-1"}
                className={`relative group cursor-pointer overflow-hidden rounded-xl border border-stone-200 shadow-sm bg-stone-900 h-[320px] sm:h-[400px] text-left transition-all duration-700 ${
                  isWide
                    ? "md:col-span-7 lg:col-span-8"
                    : "md:col-span-5 lg:col-span-4"
                } ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 80}ms`,
                }}
                aria-label={`View ${item.title}`}
              >
                {/* Parallax Window: oversized inner container with vertical translation */}
                <div
                  className="absolute -top-[15%] left-0 w-full h-[130%] will-change-transform pointer-events-none transition-transform duration-300 ease-out"
                  style={{
                    transform: `translate3d(0, ${translateY}px, 0)`,
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    quality={90}
                    priority={index <= 1}
                    className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 850px"
                  />
                </div>

                {/* Permanent Minimal Number Badge */}
                <div className="absolute top-5 left-5 z-10">
                 
                </div>

                {/* Luxury Hover Overlay & Meta */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 sm:p-7 text-white z-10">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 flex items-end justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-orange-400 block mb-1">
                        {item.category}
                      </span>
                      <p className="font-serif text-lg sm:text-xl font-light leading-snug">
                        {item.title}
                      </p>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && galleryItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery fullscreen preview"
        >
          {/* Close Trigger */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-stone-400 hover:text-white p-2.5 rounded-full bg-stone-900/70 border border-white/10 transition-colors z-50 cursor-pointer"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-stone-900/70 border border-white/10 hover:bg-orange-500 hover:border-orange-500 transition-colors z-50 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-stone-900/70 border border-white/10 hover:bg-orange-500 hover:border-orange-500 transition-colors z-50 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Active Centered Image Stage */}
          <div className="relative max-w-5xl w-full h-[75vh] flex flex-col items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].title}
                fill
                className="object-contain"
                sizes="95vw"
                priority
              />
            </div>

            {/* Lightbox Footer Meta */}
            <div className="mt-4 flex items-center justify-between w-full text-stone-300 text-xs sm:text-sm font-sans px-2 gap-4">
              <div className="flex items-center gap-3 truncate">
                <span className="text-[10px] font-mono tracking-widest uppercase text-orange-400 bg-white/10 px-2 py-0.5 rounded">
                  {galleryItems[lightboxIndex].category}
                </span>
                <span className="truncate font-serif text-base text-white">
                  {galleryItems[lightboxIndex].title}
                </span>
              </div>
              <span className="font-mono text-xs text-stone-400 tracking-widest uppercase shrink-0">
                0{lightboxIndex + 1} / 0{galleryItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}