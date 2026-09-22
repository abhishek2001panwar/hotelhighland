"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sparkles,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Film,
} from "lucide-react";
import Navbar from "@/components/Navbar";

// Official Highland Video Hero Background
const heroBg =
  "https://highlandhotel.in/wp-content/uploads/revslider/video-media/highland-compressed-1_1.jpeg";

// All 11 Verified Video Sources
const videos = [
  "https://highlandhotel.in/wp-content/uploads/2023/08/Untitled-design.mp4",
  "https://highlandhotel.in/wp-content/uploads/2024/08/bnquet-final.mov",
  "https://highlandhotel.in/wp-content/uploads/2023/08/FISH-FINAL.mov",
  "https://highlandhotel.in/wp-content/uploads/2023/08/high-.mov",
  "https://highlandhotel.in/wp-content/uploads/2023/08/ICE-CREAM-FINAL-.mov",
  "https://highlandhotel.in/wp-content/uploads/2023/08/DOSA-FINAL-.mov",
  "https://highlandhotel.in/wp-content/uploads/2023/08/PASTA-VID.mov",
  "https://highlandhotel.in/wp-content/uploads/2023/08/interior-final.mov",
  "https://highlandhotel.in/wp-content/uploads/2023/08/SPRING-ROOL-FINAL-.mov",
  "https://highlandhotel.in/wp-content/uploads/2024/08/Hotel-Menu.mov",
  "https://highlandhotel.in/wp-content/uploads/2023/08/bhindi.mov",
];

export default function VideoGalleryPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingStates, setPlayingStates] = useState<boolean[]>(
    new Array(videos.length).fill(false)
  );
  const [mutedStates, setMutedStates] = useState<boolean[]>(
    new Array(videos.length).fill(true)
  );
  const [progressStates, setProgressStates] = useState<number[]>(
    new Array(videos.length).fill(0)
  );

  // Parallax Scroll Tracking for Hero
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

  const togglePlay = (index: number) => {
    const currentVideo = videoRefs.current[index];
    if (!currentVideo) return;

    if (currentVideo.paused) {
      // Pause any other currently running video
      videoRefs.current.forEach((vid, i) => {
        if (vid && i !== index && !vid.paused) {
          vid.pause();
        }
      });

      currentVideo
        .play()
        .then(() => {
          setPlayingStates((prev) => {
            const next = new Array(videos.length).fill(false);
            next[index] = true;
            return next;
          });
        })
        .catch(() => {});
    } else {
      currentVideo.pause();
      setPlayingStates((prev) => {
        const next = [...prev];
        next[index] = false;
        return next;
      });
    }
  };

  const toggleMute = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const currentVideo = videoRefs.current[index];
    if (!currentVideo) return;

    currentVideo.muted = !currentVideo.muted;
    setMutedStates((prev) => {
      const next = [...prev];
      next[index] = currentVideo.muted;
      return next;
    });
  };

  const openFullscreen = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const currentVideo = videoRefs.current[index];
    if (!currentVideo) return;

    if (currentVideo.requestFullscreen) {
      currentVideo.requestFullscreen();
    } else if ((currentVideo as any).webkitRequestFullscreen) {
      (currentVideo as any).webkitRequestFullscreen();
    }
  };

  const handleTimeUpdate = (index: number) => {
    const currentVideo = videoRefs.current[index];
    if (!currentVideo || !currentVideo.duration) return;
    const progress = (currentVideo.currentTime / currentVideo.duration) * 100;
    setProgressStates((prev) => {
      const next = [...prev];
      next[index] = progress;
      return next;
    });
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1B1917] antialiased selection:bg-[#1B1917] selection:text-[#FDFBF7] overflow-x-hidden">
      
      {/* =========================================================
          01 - DEEP PARALLAX EDITORIAL HERO CANVAS
      ========================================================== */}
      <section
        ref={heroRef}
        className="relative w-full h-[88svh] min-h-[640px] max-h-[960px] overflow-hidden flex flex-col justify-between p-6 sm:p-12 lg:p-18"
      >
        {/* Parallax Background Canvas */}
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-x-0 -top-[20%] h-[140%] w-full will-change-transform pointer-events-none transform-gpu"
        >
          <Image
            src={heroBg}
            alt="Highland Hotel Video Gallery Hero"
            fill
            priority
            quality={95}
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
            style={{
              imageRendering: "-webkit-optimize-contrast",
            }}
          />
        </motion.div>

        {/* Multi-layered Ambient Vignette Protection */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/30 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60 pointer-events-none z-10" />

        {/* Top Corner Masthead */}
        <div className="relative z-20 w-full flex items-center justify-between text-white/85">
        <Navbar />
        </div>

        {/* Bottom Heading: Pure "Video Gallery" */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-20 w-full max-w-8xl pb-4 sm:pb-8"
        >
          <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-stone-300 font-medium block mb-3">
            Motion &bull; Moments &bull; Living
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7.25rem] font-normal leading-[0.96] tracking-[-0.04em] text-white drop-shadow-lg">
            Video 
            <span className="italic font-light text-stone-200">Gallery</span>
          </h1>
        </motion.div>
      </section>

      {/* =========================================================
          02 - 2-IN-A-ROW BESPOKE GALLERY STAGE
      ========================================================== */}
      <section className="py-24 sm:py-32 px-5 sm:px-10 lg:px-16 max-w-[1520px] mx-auto">
        
        {/* Subtle Decorative Rule */}
        <div className="flex items-center justify-between pb-8 mb-12 sm:mb-16 border-b border-[#E5E0D5]">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#7A6E58] font-semibold">
            Highland videos
          </span>
          <span className="font-serif italic text-sm text-[#7A6E58]">
            Sound &bull; Ambience &bull; Hospitality
          </span>
        </div>

        {/* 2 per row grid with 32px / 44px spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[28px] sm:gap-[36px] lg:gap-[48px]">
          {videos.map((src, index) => {
            const isPlaying = playingStates[index];
            const isMuted = mutedStates[index];
            const progress = progressStates[index] || 0;

            return (
              <div
                key={index}
                onClick={() => togglePlay(index)}
                className="group relative bg-[#FAF7F0] p-3 sm:p-4 rounded-[20px] border border-[#E7E1D4] shadow-[0_12px_36px_-12px_rgba(27,25,23,0.12)] hover:shadow-[0_20px_48px_-10px_rgba(27,25,23,0.2)] transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                {/* Cinema Display Window */}
                <div className="relative aspect-[16/10] w-full rounded-[14px] overflow-hidden bg-[#0A0A0A]">
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={src}
                    playsInline
                    loop
                    muted={isMuted}
                    preload="metadata"
                    onTimeUpdate={() => handleTimeUpdate(index)}
                    onEnded={() => {
                      setPlayingStates((prev) => {
                        const next = [...prev];
                        next[index] = false;
                        return next;
                      });
                    }}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.015]"
                  />

                  {/* Ambient Darkened Scrim Overlay */}
                  <div
                    className={`absolute inset-0 bg-black/35 transition-opacity duration-300 pointer-events-none ${
                      isPlaying ? "opacity-0 group-hover:opacity-60" : "opacity-70"
                    }`}
                  />

                  {/* Center Floating Play/Pause HUD Button */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1B1917]/75 text-white border border-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl transition-all duration-300 ${
                        isPlaying
                          ? "opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
                          : "opacity-100 scale-100 group-hover:scale-110"
                      }`}
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 fill-white stroke-none" />
                      ) : (
                        <Play className="w-6 h-6 fill-white stroke-none ml-1" />
                      )}
                    </div>
                  </div>

                  {/* Top Corner Floating Mute Button */}
                  <div className="absolute top-4 right-4 z-20">
                    <button
                      onClick={(e) => toggleMute(index, e)}
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                      className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/15 backdrop-blur-md flex items-center justify-center transition-all active:scale-95 cursor-pointer shadow-md"
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 stroke-[1.8]" />
                      ) : (
                        <Volume2 className="w-4 h-4 stroke-[1.8]" />
                      )}
                    </button>
                  </div>

                  {/* Bottom Interactive HUD Bar */}
                  <div className="absolute bottom-0 inset-x-0 p-4 pt-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    
                    {/* Scrub / Progress Bar */}
                    <div className="w-full h-1 bg-white/25 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white transition-all duration-150 ease-linear rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-white/80 text-[10px] uppercase font-sans tracking-widest">
                      <span>{isPlaying ? "Playing Reel" : "Paused"}</span>

                      <button
                        onClick={(e) => openFullscreen(index, e)}
                        aria-label="Fullscreen view"
                        className="p-1 hover:text-white transition-colors cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5 stroke-[2]" />
                      </button>
                    </div>
                  </div>

                </div>

                {/* Bottom Frame Trim */}
             

              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          03 - LIGHT PARCHMENT EDITORIAL FOOTER STRIP
      ========================================================== */}
      <section className="bg-[#F2ECE1] text-[#1B1917] py-16 px-6 sm:px-12 lg:px-20 border-t border-[#DFD8CA]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-sans text-[#1B1917]/70">
          <div>
            <p className="font-medium text-sm text-[#1B1917]">
              Highland Hotel Bengaluru
            </p>
            <p className="font-light mt-0.5">
              #4 &amp; 5, MM Heights, Chikkasandra, Hesaraghatta Main Road
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/ayurveda" className="hover:underline">
              Ayurveda
            </Link>
            <Link href="/cinnamon" className="hover:underline">
              Cinnamon
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}