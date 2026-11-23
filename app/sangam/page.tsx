"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const heroImg = "/sangam/hero.webp";

const goshalaVideo =
  "https://hsrtiles.in/wp-content/uploads/2026/10/IMG_4071-1.mp4";

const goshalaGallery = [
  { id: "01", src: "/sangam/1.webp", span: "md:col-span-4 aspect-[4/3]" },
  { id: "02", src: "/sangam/2.webp", span: "md:col-span-4 aspect-[4/3]" },
  { id: "03", src: "/sangam/3.webp", span: "md:col-span-4 aspect-[4/3]" },
  { id: "04", src: "/sangam/4.webp", span: "md:col-span-6 aspect-[16/10]" },
  { id: "05", src: "/sangam/5.webp", span: "md:col-span-6 aspect-[16/10]" },
  { id: "06", src: "/sangam/6.webp", span: "md:col-span-5 aspect-[4/3]" },
  { id: "07", src: "/sangam/7.webp", span: "md:col-span-7 aspect-[16/10]" },
];

export default function SangamGoshalaPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#3A2D21] antialiased selection:bg-[#A1611D]/20 selection:text-[#3A2D21] overflow-x-hidden">
      <Navbar />

      {/* =========================================================
          01 - HERO BANNER (ZERO BLACK / RED, #A1611D CTA, WIDE TRACKING)
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

        {/* Warm Espresso Bronze Scrims (Zero Black) */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(44, 34, 24, 0.9) 0%, rgba(44, 34, 24, 0.42) 45%, rgba(44, 34, 24, 0.2) 100%)",
          }}
        />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-20 w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 pb-16 sm:pb-20 text-[#FDFBF7]"
        >
          <div className="flex items-center gap-2.5 mb-4">
            
            <p className="font-sans text-[11px] sm:text-xs tracking-[0.32em] uppercase text-[#E5C99B] font-bold">
              Devotional &bull; Compassionate Seva
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold leading-[1.04] tracking-wide drop-shadow-sm">
                Our Sangam <br />
                <span className="italic font-light text-[#F4EFE6]">Goshala</span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <p className="font-serif italic text-lg sm:text-xl text-[#F4EFE6] font-semibold leading-relaxed tracking-wide">
                &ldquo;A sanctuary of love, care, and sacred tradition.&rdquo;
              </p>
            </div>
          </div>

          {/* Bold Enquiries Strip & #A1611D CTA */}
          <div className="mt-10 pt-6 border-t border-[#FDFBF7]/20 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-sans text-[#F4EFE6]">
            <div className="flex flex-wrap items-center gap-2 font-bold tracking-wide">
              <Phone className="w-4 h-4 text-[#E5C99B] shrink-0" />
              <span className="text-[#E5C99B]">Direct Enquiries:</span>
              <a
                href="tel:+919035034418"
                className="text-[#FDFBF7] hover:text-[#E5C99B] transition-colors ml-1"
              >
                +91 90350 34418
              </a>
              <span className="text-[#E5C99B]">/</span>
              <a
                href="tel:+917619231899"
                className="text-[#FDFBF7] hover:text-[#E5C99B] transition-colors"
              >
                +91 76192 31899
              </a>
            </div>

            <a
              href="mailto:sangamgoshala@gmail.com"
              className="inline-flex items-center gap-2 bg-[#A1611D] hover:bg-[#865017] text-[#FDFBF7] px-7 py-3 rounded-sm font-sans text-xs uppercase tracking-[0.22em] font-bold transition-all shadow-md active:scale-95"
            >
              <span>Connect With Us</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          02 - STORY & PHILOSOPHY (WIDE TRACKING & BOLD HIGHLIGHTS)
      ========================================================== */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-20 sm:py-28">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2.5">
            
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#A1611D] font-bold">
              Gomatha Seva &bull; Sanctuary Philosophy
            </span>
            
          </div>

          <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3A2D21] font-bold leading-[1.22] tracking-wide">
            &ldquo;Our Sangam Goshala stands as a sanctuary of love and care for cows. With heartfelt Gomatha Seva, we nurture and protect them, honoring their sacred place in our culture and traditions.&rdquo;
          </blockquote>

          <div className="w-16 h-[2px] bg-[#A1611D] mx-auto" />

          <p className="font-sans text-[#5A4A3B] text-sm sm:text-base font-normal leading-relaxed tracking-wide max-w-2xl mx-auto">
            Rooted in authentic values of compassion,{" "}
            <strong className="font-bold text-[#3A2D21]">Gomatha Seva at Highland</strong>{" "}
            provides an organic, serene environment where cows are cared for with{" "}
            <strong className="font-bold text-[#3A2D21]">
              reverence, unadulterated natural feed, and dedicated veterinary attention
            </strong>
            . Guests and devotees are warmly welcome to participate in quiet{" "}
            <strong className="font-bold text-[#3A2D21]">
              morning and evening seva rituals
            </strong>
            .
          </p>
        </div>
      </section>

      {/* =========================================================
          03 - 7-IMAGE GALLERY GRID
      ========================================================== */}
      <section className="bg-[#F4EFE6] py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-t border-[#DDD4C4]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 pb-6 border-b border-[#DDD4C4]">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#A1611D] font-bold">
                  Visual Documentation
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#3A2D21] font-bold tracking-wide">
                Moments of Seva
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {goshalaGallery.map((item, idx) => (
              <div
                key={`${item.src}-${idx}`}
                className={`relative rounded-xl overflow-hidden bg-[#EAE1D0] border border-[#DDD4C4] shadow-md group ${item.span}`}
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
          04 - SANCTUARY LIVE VIDEO
      ========================================================== */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-20 sm:py-28 border-t border-[#DDD4C4]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2.5 mb-2">
              
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#A1611D] font-bold">
                Live Atmosphere
              </span>
              
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3A2D21] font-bold tracking-wide">
              A Day at the Goshala
            </h2>
          </div>

          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#3A2D21] border border-[#DDD4C4] shadow-xl">
            <video
              controls
              playsInline
              preload="metadata"
              poster={heroImg}
              className="w-full h-full object-cover"
            >
              <source src={goshalaVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* =========================================================
          05 - LOCATION, CONTACT & SOCIAL CHANNELS
      ========================================================== */}
      <section className="bg-[#F4EFE6] px-6 sm:px-12 lg:px-20 py-20 sm:py-28 border-t border-[#DDD4C4]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-2.5">
              
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#A1611D] font-bold">
                Location &bull; Reach Out
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#3A2D21] font-bold leading-[1.12] tracking-wide">
              Connect with <br />
              <span className="italic font-normal text-[#A1611D]">Sangam Goshala</span>
            </h2>
            <p className="font-sans text-[#5A4A3B] text-xs sm:text-sm font-medium leading-relaxed tracking-wide mt-4 max-w-sm">
              Visitors and devotees are welcome to participate in{" "}
              <strong className="font-bold text-[#3A2D21]">
                morning and evening Gomatha Seva
              </strong>
              .
            </p>
          </div>

          <div className="lg:col-span-7 space-y-8 border-t border-[#DDD4C4] pt-8 lg:pt-0 lg:border-t-0">
            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="w-4 h-4 text-[#A1611D] stroke-[2.2] shrink-0 mt-1" />
              <div className="space-y-1">
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#A1611D] block">
                  Location
                </span>
                <p className="font-serif text-lg font-bold text-[#3A2D21] tracking-wide">
                  Sangam Goshala
                </p>
                <p className="font-sans text-xs sm:text-sm text-[#3A2D21] font-semibold leading-relaxed tracking-wide">
                  A Unit of Sangameshwara Hospitality Services Private Limited<br />
                  # 4 &amp; 5, MM Heights, Opposite Sapthagiri NPS University,<br />
                  Sidedahalli Chikkasandra, Hesaraghatta Main Road,<br />
                  Bangalore - 560073, Karnataka, India.
                </p>
              </div>
            </div>

            {/* Mobile Numbers */}
            <div className="flex items-start gap-4 pt-6 border-t border-[#DDD4C4]">
              <Phone className="w-4 h-4 text-[#A1611D] stroke-[2.2] shrink-0 mt-1" />
              <div className="space-y-1">
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#A1611D] block">
                  Mobile
                </span>
                <div className="flex flex-wrap items-center gap-3 text-[#3A2D21] text-base font-bold tracking-wide">
                  <a href="tel:+919035034418" className="hover:text-[#A1611D] transition-colors">
                    +91 90350 34418
                  </a>
                  <span className="text-[#A1611D]">&bull;</span>
                  <a href="tel:+917619231899" className="hover:text-[#A1611D] transition-colors">
                    +91 76192 31899
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 pt-6 border-t border-[#DDD4C4]">
              <Mail className="w-4 h-4 text-[#A1611D] stroke-[2.2] shrink-0 mt-1" />
              <div className="space-y-1">
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#A1611D] block">
                  Email
                </span>
                <a
                  href="mailto:sangamgoshala@gmail.com"
                  className="text-[#3A2D21] text-sm sm:text-base font-bold hover:text-[#A1611D] transition-colors block tracking-wide"
                >
                  sangamgoshala@gmail.com
                </a>
              </div>
            </div>

            {/* Social Connectivity (#A1611D Hover Pills) */}
            <div className="pt-6 border-t border-[#DDD4C4]">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#A1611D] block mb-3.5">
                Connect With Us
              </span>

              <div className="flex flex-wrap gap-2.5 text-xs font-sans uppercase tracking-[0.18em] font-bold text-[#3A2D21]">
                <a
                  href="https://www.facebook.com/Highlandhotel.info/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-full border border-[#DDD4C4] bg-[#FDFBF7] hover:bg-[#A1611D] hover:text-[#FDFBF7] hover:border-[#A1611D] transition-all flex items-center gap-2 shadow-2xs group"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A1611D] group-hover:text-[#FDFBF7]" />
                </a>

                <a
                  href="https://www.instagram.com/highland__hotel/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-full border border-[#DDD4C4] bg-[#FDFBF7] hover:bg-[#A1611D] hover:text-[#FDFBF7] hover:border-[#A1611D] transition-all flex items-center gap-2 shadow-2xs group"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A1611D] group-hover:text-[#FDFBF7]" />
                </a>

                <a
                  href="https://x.com/Highland__hotel"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-full border border-[#DDD4C4] bg-[#FDFBF7] hover:bg-[#A1611D] hover:text-[#FDFBF7] hover:border-[#A1611D] transition-all flex items-center gap-2 shadow-2xs group"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>X-Twitter</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A1611D] group-hover:text-[#FDFBF7]" />
                </a>

                <a
                  href="https://www.youtube.com/@HIGH-LANDHOTEL"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-full border border-[#DDD4C4] bg-[#FDFBF7] hover:bg-[#A1611D] hover:text-[#FDFBF7] hover:border-[#A1611D] transition-all flex items-center gap-2 shadow-2xs group"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span>Youtube</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A1611D] group-hover:text-[#FDFBF7]" />
                </a>

                <a
                  href="https://www.linkedin.com/company/high-land-hotel"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-full border border-[#DDD4C4] bg-[#FDFBF7] hover:bg-[#A1611D] hover:text-[#FDFBF7] hover:border-[#A1611D] transition-all flex items-center gap-2 shadow-2xs group"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>Linkedin</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A1611D] group-hover:text-[#FDFBF7]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}