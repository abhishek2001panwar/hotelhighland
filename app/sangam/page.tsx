"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowUpRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";

// Official Assets
const heroImg =
  "https://highlandhotel.in/wp-content/uploads/2026/03/Untitled-design-63.png";

const goshalaVideo =
  "https://highlandhotel.in/wp-content/uploads/2026/03/IMG_4071-1.mp4";

// 7 Dedicated Goshala Images
const goshalaGallery = [
  {
    id: "01",
    src: "https://highlandhotel.in/wp-content/uploads/2026/02/2-600x450.png",
    span: "md:col-span-4 aspect-[4/3]",
  },
  {
    id: "02",
    src: "https://highlandhotel.in/wp-content/uploads/2026/02/1-600x450.png",
    span: "md:col-span-4 aspect-[4/3]",
  },
  {
    id: "03",
    src: "https://highlandhotel.in/wp-content/uploads/2026/02/5-600x450.png",
    span: "md:col-span-4 aspect-[4/3]",
  },
  {
    id: "04",
    src: "https://highlandhotel.in/wp-content/uploads/2026/02/6-600x450.png",
    span: "md:col-span-6 aspect-[16/10]",
  },
  {
    id: "05",
    src: "https://highlandhotel.in/wp-content/uploads/2026/02/3-600x450.png",
    span: "md:col-span-6 aspect-[16/10]",
  },
  {
    id: "06",
    src: "https://highlandhotel.in/wp-content/uploads/2026/02/6-600x450.png",
    span: "md:col-span-5 aspect-[4/3]",
  },
  {
    id: "07",
    src: "https://highlandhotel.in/wp-content/uploads/2026/02/Untitled-design-30-2048x1479.png",
    span: "md:col-span-7 aspect-[16/10]",
  },
];

export default function SangamGoshalaPage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax tracking
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <main className="min-h-screen bg-[#fbf9f5] text-[#1e1b18] antialiased selection:bg-orange-500/20 selection:text-orange-950 overflow-x-hidden">
      <Navbar />
      {/* =========================================================
          01 - HERO BANNER WITH PARALLAX & FLOATING TEXT
      ========================================================== */}
      <section
        ref={heroRef}
        className="relative w-full h-[90svh] min-h-[620px] max-h-[920px] overflow-hidden flex flex-col justify-end"
      >
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-x-0 -top-[12%] h-[126%] w-full will-change-transform pointer-events-none"
        >
          <Image
            src={heroImg}
            alt="Sangam Goshala at Highland Hotel Bengaluru"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/25 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-black/15 pointer-events-none z-10" />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-20 w-full max-w-8xl mx-auto px-6 sm:px-12 lg:px-16 pb-16 sm:pb-20 text-white"
        >
          <div className="flex items-center gap-2 mb-4">
            <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-orange-300 font-medium">
              Devotional &bull; Compassionate
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-normal leading-[1.04] tracking-[-0.03em] drop-shadow-md">
                Our Sangam <br />
                <span className="italic font-light text-stone-200">Goshala</span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <p className="font-serif italic text-lg sm:text-xl text-stone-200 font-light leading-relaxed">
                &ldquo;A sanctuary of love, care, and sacred tradition.&rdquo;
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-stone-300">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <span>Direct Enquiries:</span>
              <a href="tel:+919035034418" className="text-white hover:text-orange-300 transition-colors font-medium ml-1">
                +91 90350 34418
              </a>
              <span>/</span>
              <a href="tel:+917619231899" className="text-white hover:text-orange-300 transition-colors font-medium">
                +91 76192 31899
              </a>
            </div>

            <a
              href="mailto:sangamgoshala@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-stone-900   px-6 py-2.5 rounded-md font-sans text-[10px] uppercase tracking-[0.22em] font-medium transition-all shadow-md active:scale-95"
            >
              <span>Connect With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          02 - STORY & QUOTE (PURE EDITORIAL PARAGRAPHS - NO IMAGES)
      ========================================================== */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-20 sm:py-28">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-orange-600 font-medium">
              Gomatha Seva &bull; Sanctuary Philosophy
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
          </div>

          <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-normal leading-[1.2] tracking-tight">
            &ldquo;Our Sangam Goshala stands as a sanctuary of love and care for cows. With heartfelt Gomatha Seva, we nurture and protect them, honoring their sacred place in our culture and traditions.&rdquo;
          </blockquote>

          <div className="w-16 h-[1px] bg-stone-300 mx-auto" />

          <p className="font-sans text-stone-600 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Rooted in authentic values of compassion, Gomatha Seva at Highland provides an organic, serene environment where cows are cared for with reverence, unadulterated feed, and dedicated attention. Guests and devotees are warmly welcome to participate in quiet morning and evening seva rituals.
          </p>
        </div>
      </section>

      {/* =========================================================
          03 - 7-IMAGE GALLERY GRID
      ========================================================== */}
      <section className="bg-[#f4f0e6] py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-t border-stone-300/70">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 pb-6 border-b border-stone-300/80">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-orange-600 block mb-2 font-medium">
                Visual Documentation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
                Moments of Seva
              </h2>
            </div>

          </div>

          {/* 7-Image Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {goshalaGallery.map((item, idx) => (
              <div
                key={`${item.src}-${idx}`}
                className={`relative rounded-xl overflow-hidden bg-stone-900 border border-stone-300/80 shadow-md group ${item.span}`}
              >
                <Image
                  src={item.src}
                  alt={`Sangam Goshala sanctuary moment 0${idx + 1}`}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                  style={{
                    imageRendering: "-webkit-optimize-contrast",
                  }}
                />

             
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          04 - SANCTUARY LIVE VIDEO (AFTER IMAGES)
      ========================================================== */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-20 sm:py-28 border-t border-stone-300/60">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-orange-600 block mb-2 font-medium">
              Live Atmosphere
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
              A Day at the Goshala
            </h2>
          </div>

          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-stone-900 border border-stone-300/80 shadow-xl group">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              poster={heroImg}
              className="w-full h-full object-cover object-center"
            >
              <source src={goshalaVideo} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

            <div className="absolute top-5 left-5 z-20">
              <span className="font-mono text-[9px] uppercase tracking-widest text-white/90 bg-black/45 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                Gomatha Seva &bull; Sanctuary Video
              </span>
            </div>

            <div className="absolute bottom-5 inset-x-5 flex items-center justify-between z-20 text-white">
              <p className="font-serif text-base sm:text-lg font-light italic text-stone-200">
                Peaceful rhythms of daily care
              </p>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/20 hover:bg-black/80 flex items-center justify-center transition-all cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-orange-400" />}
                </button>
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/20 hover:bg-black/80 flex items-center justify-center transition-all cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          05 - LOCATION, CONTACT & SOCIAL CHANNELS WITH ICONS
      ========================================================== */}
      <section className="bg-[#f4f0e6] px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-20 sm:py-28 border-t border-stone-300/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <div className="lg:col-span-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-orange-600 block mb-2 font-medium">
              Location &bull; Reach Out
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-stone-900 font-normal leading-[1.12]">
              Connect with <br />
              <span className="italic font-light text-stone-700">Sangam Goshala</span>
            </h2>
            <p className="font-sans text-stone-600 text-xs sm:text-sm font-light leading-relaxed mt-4 max-w-sm">
              Visitors and devotees are welcome to participate in morning and evening Gomatha Seva.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-8 border-t border-stone-300/80 pt-8 lg:pt-0 lg:border-t-0">
            
            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-1" />
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400 block">
                  Location
                </span>
                <p className="font-serif text-base text-stone-900">
                  Sangam Goshala
                </p>
                <p className="font-sans text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  A Unit of Sangameshwara Hospitality Services Private Limited<br />
                  # 4 &amp; 5, MM Heights, Opposite Sapthagiri NPS University,<br />
                  Sidedahalli Chikkasandra, Hesaraghatta Main Road,<br />
                  Bangalore - 560073, Karnataka, India.
                </p>
              </div>
            </div>

            {/* Mobile Numbers */}
            <div className="flex items-start gap-4 pt-6 border-t border-stone-200">
              <Phone className="w-4 h-4 text-orange-600 shrink-0 mt-1" />
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400 block">
                  Mobile
                </span>
                <div className="flex flex-wrap items-center gap-3 text-stone-900 text-sm font-medium">
                  <a href="tel:+919035034418" className="hover:text-orange-600 transition-colors">
                    +91 90350 34418
                  </a>
                  <span className="text-stone-300">&bull;</span>
                  <a href="tel:+917619231899" className="hover:text-orange-600 transition-colors">
                    +91 76192 31899
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 pt-6 border-t border-stone-200">
              <Mail className="w-4 h-4 text-orange-600 shrink-0 mt-1" />
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400 block">
                  Email
                </span>
                <a
                  href="mailto:sangamgoshala@gmail.com"
                  className="text-stone-900 text-sm font-medium hover:text-orange-600 transition-colors block"
                >
                  sangamgoshala@gmail.com
                </a>
              </div>
            </div>

            {/* Social Connectivity with Custom SVG Icons */}
            <div className="pt-6 border-t border-stone-200">
              <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400 block mb-3.5">
                Connect Us
              </span>
              
              <div className="flex flex-wrap gap-2.5 text-[11px] font-sans uppercase tracking-[0.18em] font-medium text-stone-700">
                
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/Highlandhotel.info/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full border border-stone-300 bg-white hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all flex items-center gap-2 shadow-2xs group"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-400 group-hover:text-white" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/highland__hotel/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full border border-stone-300 bg-white hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all flex items-center gap-2 shadow-2xs group"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-400 group-hover:text-white" />
                </a>

                {/* X - Twitter */}
                <a
                  href="https://x.com/Highland__hotel"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full border border-stone-300 bg-white hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all flex items-center gap-2 shadow-2xs group"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>X-Twitter</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-400 group-hover:text-white" />
                </a>

                {/* Youtube */}
                <a
                  href="https://www.youtube.com/@HIGH-LANDHOTEL"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full border border-stone-300 bg-white hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all flex items-center gap-2 shadow-2xs group"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span>Youtube</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-400 group-hover:text-white" />
                </a>

                {/* Linkedin */}
                <a
                  href="https://www.linkedin.com/company/high-land-hotel"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full border border-stone-300 bg-white hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all flex items-center gap-2 shadow-2xs group"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>Linkedin</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-400 group-hover:text-white" />
                </a>

              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}