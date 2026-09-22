"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, Phone, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import {
  Wifi,
  Leaf,
  ConciergeBell,
  Briefcase,
  UtensilsCrossed,
  Shirt,
  ShoppingBag,
  Users,
  ArrowUpRight,
} from "lucide-react";

const heroBg =
  "https://highlandhotel.in/wp-content/uploads/2024/06/Untitled-design-57.png";

const hallImages = [
  "https://highlandhotel.in/wp-content/uploads/2023/08/2-12.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/4-3.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/1-4.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/1-11.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/6-1.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/2-4.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/1-6.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/2-7.png",
];

const metrics = [
  { value: "42", label: "Total Accommodations", sub: "Suites & Rooms" },
  { value: "1,904", unit: "sq. ft", label: "Event Space", sub: "Utsava Banquet Hall" },
  { value: "1,400", unit: "sq. ft", label: "Dining Space", sub: "Dedicated Buffet & Dining" },
  { value: "600", label: "Hall Capacity", sub: "Floating Guest Arrangement" },
  { value: "60+", label: "Open Car Parks", sub: "Valet & Dedicated Parking" },
];
const conferenceServices = [
  {
    title: "Free Internet Access",
    desc: "High-speed Wi-Fi throughout banquet and meeting premises",
    icon: Wifi,
  },
  {
    title: "Ayurveda Wellness",
    desc: "Holistic therapies and rejuvenation at KEVA Ayurveda",
    icon: Leaf,
  },
  {
    title: "Room Service",
    desc: "In-room dining and refreshment service for delegates",
    icon: ConciergeBell,
  },
  {
    title: "Business Services",
    desc: "Print, scan, secretarial assistance & high-tech setups",
    icon: Briefcase,
  },
  {
    title: "Dine-in Restaurant",
    desc: "Cinnamon multicuisine dining with indoor & balcony seats",
    icon: UtensilsCrossed,
  },
  {
    title: "Laundry Service",
    desc: "Same-day express dry cleaning and guest pressing",
    icon: Shirt,
  },
  {
    title: "Take away & Delivery",
    desc: "Bespoke packed meal boxes and takeaway culinary orders",
    icon: ShoppingBag,
  },
  {
    title: "Meeting Facilities",
    desc: "Utsava hall, audiovisual gear, podiums & breakout areas",
    icon: Users,
  },
];

export default function BanquetHallPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev - 1 + hallImages.length) % hallImages.length);
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % hallImages.length);
  };

  return (
    <main className="min-h-screen bg-[#f8f7f4] text-[#1b1916] antialiased selection:bg-orange-500/20 selection:text-orange-950 overflow-x-hidden">
      <Navbar   />
      {/* =========================================================
          01 - CINEMATIC PARALLAX HERO
      ========================================================== */}
      <section
        ref={heroRef}
        className="relative w-full h-[92svh] min-h-[640px] max-h-[960px] overflow-hidden flex flex-col justify-end"
      >
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-x-0 -top-[12%] h-[126%] w-full will-change-transform pointer-events-none"
        >
          <Image
            src={heroBg}
            alt="Utsava Banquet Hall at Highland Hotel"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/25 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-black/15 pointer-events-none z-10" />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-20 w-full max-w-8xl mx-auto px-6 sm:px-12 lg:px-20 pb-16 sm:pb-10 text-white"
        >
          <div className="flex items-center gap-2 mb-4">
            <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-orange-300 font-medium">
              Highland Hotel &bull; Celebrations &amp; Conventions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem]  leading-[1.04] tracking-[-0.035em] drop-shadow-md">
                Utsava <br />
                <span className="italic font-light text-stone-200">Banquet Hall</span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <p className="font-sans text-xs uppercase tracking-[0.24em] text-stone-200 font-medium leading-relaxed">
                Stay in our luxury meeting hall
              </p>
              <div className="mt-3 flex items-center lg:justify-end gap-3 font-mono text-[10px] tracking-widest text-stone-300/80 uppercase">
                <span>200 Seated</span>
                <span>&bull;</span>
                <span>600 Floating</span>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-stone-300">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <span className="text-stone-300">For Any Enquiries Connect With Us:</span>
              <a
                href="tel:+919035034418"
                className="text-white hover:text-orange-300 transition-colors font-medium ml-1"
              >
                +91 90350 34418
              </a>
              <span>/</span>
              <a
                href="tel:+917619231899"
                className="text-white hover:text-orange-300 transition-colors font-medium"
              >
                +91 76192 31899
              </a>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-stone-900 hover:bg-orange-500 hover:text-white px-6 py-2.5 rounded-md font-sans text-[10px] uppercase tracking-[0.22em] font-medium transition-all shadow-md active:scale-95"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          02 - OVERVIEW & NARRATIVE
      ========================================================== */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-orange-600 block mb-2 font-medium">
              Welcome to Highland Hotel
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal leading-[1.15]">
              Host your next meeting, launch or celebration
            </h2>
            <div className="mt-5 w-12 h-[1px] bg-stone-300" />
          </div>

          <div className="lg:col-span-8 space-y-6 text-stone-700 font-sans text-sm sm:text-base font-light leading-relaxed">
            <p className="font-serif text-xl sm:text-2xl text-stone-900 leading-snug font-normal">
              Welcome to Hotel Highland, your premier destination for hosting unforgettable events.
            </p>
            <p>
              Our spacious banquet hall boasts a capacity of <strong>200 seated guests</strong> and <strong>600 guests in a floating arrangement</strong>, making it the perfect venue for any occasion.
            </p>
            <p>
              Whether you&apos;re planning a conference, wedding, sangeet ceremony, birthday party, anniversary celebration, or any other special event, our versatile space and exceptional service will ensure a memorable experience.
            </p>
            <p className="text-stone-800 font-normal pt-2">
              Let Hotel Highland be the backdrop for your next event, where elegance and convenience come together seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          03 - ARCHITECTURAL CAPACITY & VENUE METRICS
      ========================================================== */}
      <section className="bg-[#f2eee5] py-16 sm:py-20 border-y border-stone-300/70 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10">
            {metrics.map((item) => (
              <div key={item.label} className="border-l border-stone-300/80 pl-5 sm:pl-6">
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-4xl sm:text-5xl font-light text-stone-900 tracking-tight">
                    {item.value}
                  </span>
                  {item.unit && (
                    <span className="font-mono text-xs text-stone-500 uppercase">
                      {item.unit}
                    </span>
                  )}
                </div>

                <p className="font-sans text-xs uppercase tracking-wider text-stone-900 font-medium mt-2">
                  {item.label}
                </p>

                <p className="font-sans text-[11px] text-stone-500 font-light mt-0.5">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* =========================================================
          04 - CONFERENCE & MEETINGS: SERVICES IN HIGHLAND (ICON-DRIVEN)
      ========================================================== */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left: Section Header & CTA */}
          <div className="lg:col-span-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#7A6E58] block mb-2 font-semibold">
              Overview &bull; Conference &amp; Meetings
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1B1917] font-normal leading-[1.1]">
              Services in <br />
              <span className="italic font-light text-[#7A6E58]">Highland</span>
            </h2>
            <p className="font-sans text-[#1B1917]/70 text-xs sm:text-sm font-light leading-relaxed mt-5">
              Comprehensive hospitality infrastructure supporting corporate seminars, banquet receptions, private dinners, and residential delegates.
            </p>

            {/* <div className="mt-8 pt-8 border-t border-[#E5E0D5]">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-[#1B1917] hover:bg-stone-800 text-[#FDFBF7] px-7 py-3.5 rounded-xs font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-sm"
              >
                <span>Reserve Event Date</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div> */}
          </div>

          {/* Right: 2-Column Grid with Dedicated Icons */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 border-t border-[#E5E0D5]">
            {conferenceServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className="flex items-start gap-4 py-6 border-b border-[#E5E0D5] sm:odd:pr-8 sm:even:pl-8 sm:even:border-l"
                >
                  {/* Dedicated Brass / Parchment Icon Badge */}
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] border border-[#E5E0D5] flex items-center justify-center shrink-0 shadow-2xs">
                    <IconComponent className="w-5 h-5 text-[#7A6E58] stroke-[1.8]" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif text-base sm:text-lg text-[#1B1917] font-normal leading-snug">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs text-[#1B1917]/60 font-light leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

  {/* =========================================================
          05 - CLEAN GALLERY SHOWCASE (NO BACKGROUND, NO BORDERS)
      ========================================================== */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Subtle Section Label */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5E0D5]">
            <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#7A6E58] font-semibold">
              Utsava Hall Perspectives
            </span>
            <span className="font-serif italic text-sm text-[#7A6E58]">
              Highland Event Spaces
            </span>
          </div>

          {/* Main Stage - Zero BG, Zero Border, Pure Image */}
          <div className="relative w-full h-[400px] sm:h-[520px] md:h-[620px] flex items-center justify-center group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={hallImages[activeImageIndex]}
              alt="Highland Utsava Banquet Hall View"
              className="max-h-full max-w-full object-contain object-center transition-opacity duration-300"
              style={{
                imageRendering: "-webkit-optimize-contrast",
              }}
            />

            {/* Prev Control */}
            <button
              onClick={handlePrev}
              aria-label="Previous photo"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 text-[#1B1917] hover:bg-[#1B1917] hover:text-white transition-all flex items-center justify-center cursor-pointer shadow-md opacity-80 group-hover:opacity-100"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2]" />
            </button>

            {/* Next Control */}
            <button
              onClick={handleNext}
              aria-label="Next photo"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 text-[#1B1917] hover:bg-[#1B1917] hover:text-white transition-all flex items-center justify-center cursor-pointer shadow-md opacity-80 group-hover:opacity-100"
            >
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </button>
          </div>

          {/* Clean Thumbnails - No borders, purely opacity-driven */}
          <div className="flex items-center gap-4 overflow-x-auto pt-8 pb-2 no-scrollbar justify-start sm:justify-center">
            {hallImages.map((src, index) => {
              const isSelected = index === activeImageIndex;
              return (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative shrink-0 w-20 sm:w-24 md:w-28 aspect-[4/3] rounded-md overflow-hidden transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "opacity-100 scale-105"
                      : "opacity-40 hover:opacity-80"
                  }`}
                  aria-label={`Select photo ${index + 1}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </button>
              );
            })}
          </div>

        </div>
      </section>

     

    </main>
  );
}