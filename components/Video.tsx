"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";

const videoSlides = [
//   {
//     id: "video-1",
//     videoSrc:
//       "https://hsrtiles.in/wp-content/uploads/2026/10/Untitled-design.mp4",
//     posterSrc: "/test1.JPG",
//   },
  {
    id: "video-2",
    videoSrc:
      "https://hsrtiles.in/wp-content/uploads/2026/10/bhindi.mov",
    posterSrc: "/cinnamon/hero.webp",
  },
  {
    id: "video-3",
    videoSrc:
      "https://hsrtiles.in/wp-content/uploads/2026/10/FISH-FINAL.mov",
    posterSrc: "/banquet.jpg",
  },
  {
    id: "video-4",
    videoSrc:
      "https://hsrtiles.in/wp-content/uploads/2026/10/DOSA-FINAL-.mov",
    posterSrc: "/ayurveda/hero.webp",
  },
];

const appleEase = [0.16, 1, 0.3, 1] as const;

export default function VideoShowcaseCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Apple-style scroll expansion from inset rounded stage to full-width edge-to-edge
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const stageScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const stageRadius = useTransform(scrollYProgress, [0, 1], ["28px", "0px"]);

  // Play only active video & manage audio state
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      video.muted = isMuted;
      if (idx === activeIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex, isMuted]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? videoSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % videoSlides.length);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#FDFBF7] py-10 sm:py-16 overflow-hidden"
    >
      {/* Apple Scroll-Expanding Full-Width Stage */}
      <motion.div
        style={{
          scale: stageScale,
          borderRadius: stageRadius,
        }}
        className="relative w-full h-screen overflow-hidden shadow-2xl bg-[#3A2D21] will-change-transform transform-gpu"
      >
        {/* 4-Video Horizontal Track */}
        <motion.div
          animate={{ x: `-${activeIndex * 100}%` }}
          transition={{ duration: 0.85, ease: appleEase }}
          className="flex w-full h-full will-change-transform"
        >
          {videoSlides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative w-full h-full shrink-0 overflow-hidden bg-[#3A2D21]"
            >
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={slide.videoSrc}
                poster={slide.posterSrc}
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover object-center pointer-events-none"
              />
            </div>
          ))}
        </motion.div>

        {/* Top-Right Mute / Unmute Button */}
        <button
          type="button"
          onClick={() => setIsMuted((prev) => !prev)}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20 w-11 h-11 rounded-full bg-[#3A2D21]/60 hover:bg-[#A1611D] backdrop-blur-md border border-[#FDFBF7]/30 text-[#FDFBF7] flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer active:scale-95"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 stroke-[2.2]" />
          ) : (
            <Volume2 className="w-4 h-4 stroke-[2.2]" />
          )}
        </button>

        {/* Left Navigation Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous video"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#3A2D21]/60 hover:bg-[#A1611D] backdrop-blur-md border border-[#FDFBF7]/30 text-[#FDFBF7] flex items-center justify-center transition-all duration-300 shadow-xl cursor-pointer active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
        </button>

        {/* Right Navigation Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next video"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#3A2D21]/60 hover:bg-[#A1611D] backdrop-blur-md border border-[#FDFBF7]/30 text-[#FDFBF7] flex items-center justify-center transition-all duration-300 shadow-xl cursor-pointer active:scale-95"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
        </button>

        {/* Minimal Bottom Indicator Dots (No Text) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-[#3A2D21]/55 backdrop-blur-md px-4 py-2 rounded-full border border-[#FDFBF7]/20">
          {videoSlides.map((slide, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  isActive
                    ? "w-7 bg-[#A1611D]"
                    : "w-1.5 bg-[#FDFBF7]/55 hover:bg-[#FDFBF7]"
                }`}
              />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}