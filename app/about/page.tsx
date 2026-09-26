"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "2008", label: "Year Founded", note: "Vision of Balaji B Maka" },
  { value: "42", label: "Refined Keys", note: "Total Rooms & Suites" },
  { value: "36", label: "Executive Suites", note: "Private city skyline views" },
  { value: "06", label: "Executive Twin", note: "Spacious shared luxury" },
];

const wellnessPillars = [
  {
    num: "01",
    name: "Ayurvedic Medicine",
    desc: "Personalized Dosha consultations and traditional herbal body therapies designed to restore innate vitality.",
  },
  {
    num: "02",
    name: "Naturopathy Care",
    desc: "Botanical nourishment, lifestyle counselling, and non-invasive natural healing to restore internal equilibrium.",
  },
  {
    num: "03",
    name: "Classical Yoga",
    desc: "Mindful asana postures, pranayama breathwork, and meditation sessions tailored for restorative clarity.",
  },
  {
    num: "04",
    name: "Meridian Acupuncture",
    desc: "Gentle stimulation of key meridian pathways by seasoned practitioners to relieve tension and unblock energy flow.",
  },
];

const offers = [
  {
    title: "Ayurvedic Healthy Food Dining",
    desc: "Wholesome, sattvic, and nutrition-focused culinary selections designed to support daily detoxification.",
    tag: "Wellness Plan",
    href: "/ayurveda",
  },
  {
    title: "Luxury Suites & Rooms Retreat",
    desc: "Exclusive weekend and extended stay rates featuring plush 10-inch mattresses and smart in-room tech.",
    tag: "Accommodations",
    href: "/rooms",
  },
  {
    title: "Utsava Banquet Hall Celebration",
    desc: "Full-service wedding and corporate packages with 200 seating and 600 floating capacity.",
    tag: "Events & Galas",
    href: "/banquet",
  },
  {
    title: "Holistic Rejuvenation Combos",
    desc: "Curated packages combining room stays, Ayurvedic spa treatments, and farm-fresh multi-cuisine meals.",
    tag: "All-Inclusive",
    href: "/combos",
  },
];

export default function About() {
  const heroRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1B1917] antialiased selection:bg-[#1B1917] selection:text-[#FDFBF7]">
      <Navbar />

      {/* ========================================================
          01 - FULL PARALLAX HERO
          ======================================================== */}
      <section
        ref={heroRef}
        className="relative w-full h-[90svh] min-h-[640px] max-h-[950px] overflow-hidden flex flex-col justify-end"
      >
        <motion.div
          style={{ y: imageY }}
          className="absolute inset-x-0 -top-[12%] h-[124%] w-full will-change-transform pointer-events-none transform-gpu"
        >
          <Image
            src="/06.jpg"
            alt="Highland Hotel Bengaluru Exterior and Grounds"
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

        {/* Ambient Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25 pointer-events-none z-10" />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-20 w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 pb-16 sm:pb-20 text-white"
        >
          <div className="flex items-center gap-2 mb-3">
         
            <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-stone-300 font-medium">
              About Us &bull; Highland Hotel Bengaluru
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.04] tracking-[-0.03em] drop-shadow-md">
                Embark on a Journey of <br className="hidden sm:inline" />
                <span className="italic font-light text-stone-200">Wellness and Luxury</span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <p className="font-serif italic text-xl sm:text-2xl text-stone-200 font-light leading-snug drop-shadow-sm">
                &ldquo;Explore! Discover! Live!&rdquo;
              </p>
              <div className="mt-3 flex items-center lg:justify-end gap-3 font-mono text-[10px] tracking-widest text-stone-300/80 uppercase">
                <span>Since 2008</span>
                <span>&bull;</span>
                <span>North Bangalore</span>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-stone-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>For Enquiries:</span>
              <a href="tel:+919035034418" className="text-white hover:underline transition-colors font-medium">
                +91 90350 34418
              </a>
              <span>/</span>
              <a href="tel:+917619231899" className="text-white hover:underline transition-colors font-medium">
                +91 76192 31899
              </a>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-[10px] uppercase font-mono tracking-widest text-stone-400">
              Scroll Down to Explore <span className="text-stone-300">&darr;</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ========================================================
          02 - CHAPTER I: HOTEL OVERVIEW & VISION
          ======================================================== */}
      <section className="px-6 sm:px-12 lg:px-16 max-w-[1720px] mx-auto py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4">
           
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1B1917] font-normal leading-tight">
              Hotel Overview
            </h2>
            <div className="mt-4 w-12 h-[1px] bg-[#DCD3C3]" />
          </div>

          <div className="lg:col-span-8 space-y-6 text-[#1B1917]/75 font-sans text-sm sm:text-base font-light leading-relaxed">
            <p className="text-lg sm:text-xl font-serif text-[#1B1917] leading-snug">
              At Highland Hotel, we believe in enriching lives through a holistic approach to hospitality.
            </p>
            <p>
              Founded in 2008 by visionary entrepreneur <strong>Balaji B Maka</strong>, our hotel stands as a testament to his unwavering commitment to creating a sanctuary where guests can escape the hustle and bustle of everyday life and immerse themselves in tranquility.
            </p>
            <p>
              Nestled in the green calm of North Bangalore, Highland is built around the timeless belief that true hospitality cares for the whole self-combining peaceful living spaces, restorative nature, authentic heritage therapies, and generous celebratory venues.
            </p>
          </div>
        </div>

        {/* Minimal Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 mt-16 border-t border-[#E5E0D5]">
          {stats.map((item) => (
            <div key={item.label} className="border-l border-[#DCD3C3] pl-5">
              <p className="font-serif text-3xl sm:text-5xl font-light text-[#1B1917] tracking-tight">
                {item.value}
              </p>
              <p className="font-sans text-xs uppercase tracking-wider text-[#1B1917] font-medium mt-1">
                {item.label}
              </p>
              <p className="font-sans text-[11px] text-[#1B1917]/60 font-light mt-0.5">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          03 - CHAPTER II: EMBRACE HOLISTIC WELLNESS
          ======================================================== */}
      <section className="bg-[#FAF7F0] py-20 sm:py-28 px-6 sm:px-12 lg:px-16 border-y border-[#E5E0D5]">
        <div className="max-w-[1720px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Architectural Frame */}
            <div className="lg:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#E5E0D5] shadow-xs bg-stone-200">
              <Image
                src="/about/2.webp"
                alt="Ayurvedic Wellness Experience"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="font-sans text-[10px] tracking-widest uppercase text-stone-300 block mb-1">
                  Traditional Balance
                </span>
                <p className="font-serif text-xl font-light">
                  Ayurveda &amp; Holistic Health
                </p>
              </div>
            </div>

            {/* Right: Narrative & 4 Pillars */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
               
                <h2 className="font-serif text-3xl sm:text-5xl text-[#1B1917] font-normal leading-[1.12] mb-6">
                  Embrace Holistic Wellness
                </h2>

                <p className="font-sans text-[#1B1917]/75 text-sm sm:text-base font-light leading-relaxed mb-4">
                  Experience a profound sense of well-being with our range of Ayurvedic, naturopathy, yoga, and acupuncture services. Whether you’re seeking relaxation, rejuvenation, or healing, our expert practitioners will guide you on a journey towards balance and harmony.
                </p>
                <p className="font-sans text-[#1B1917]/70 text-sm font-light leading-relaxed mb-10">
                  From personalized wellness consultations to therapeutic treatments, we are dedicated to nurturing your mind, body, and soul.
                </p>

                {/* 4 Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-8 border-t border-[#E5E0D5]">
                  {wellnessPillars.map((item) => (
                    <div key={item.num} className="bg-white p-5 rounded-xl border border-[#E5E0D5] shadow-2xs">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-mono text-xs text-[#7A6E58] font-semibold">{item.num}</span>
                        <h3 className="font-serif text-base text-[#1B1917] font-medium">{item.name}</h3>
                      </div>
                      <p className="font-sans text-xs text-[#1B1917]/70 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-[#E5E0D5]">
                <Link
                  href="/ayurveda"
                  className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase font-semibold text-[#1B1917] hover:text-[#7A6E58] transition-colors"
                >
                  <span>Explore All Wellness Therapies</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          04 - CHAPTER III: UNPARALLELED LUXURY
          ======================================================== */}
      <section className="px-6 sm:px-12 lg:px-16 max-w-[1720px] mx-auto py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 flex flex-col justify-between order-2 lg:order-1">
            <div>
             
              <h2 className="font-serif text-3xl sm:text-5xl text-[#1B1917] font-normal leading-[1.12] mb-6">
                Experience Unparalleled Luxury
              </h2>

              <p className="font-sans text-[#1B1917]/75 text-sm sm:text-base font-light leading-relaxed mb-4">
                Step into a world of refined luxury with our collection of 42 meticulously designed rooms, each offering breath-taking views of the city skyline and elegant, contemporary interiors.
              </p>
              <p className="font-sans text-[#1B1917]/70 text-sm font-light leading-relaxed mb-6">
                Choose from 36 Executive Suite Rooms or indulge in the generous comfort of our 6 Executive Twin Suites, thoughtfully crafted to ensure privacy, relaxation, and sophistication. Each room features a plush 10-inch mattress for a truly restorative night’s sleep, complemented by modern conveniences including an Android Smart TV and complimentary premium in-room amenities.
              </p>
              <p className="font-sans text-[#1B1917]/70 text-sm font-light leading-relaxed mb-8">
                Every detail has been carefully curated to deliver an exceptional stay where comfort, style, and convenience come together seamlessly.
              </p>

              {/* Bullet Features */}
              <div className="space-y-2.5 pb-8 border-b border-[#E5E0D5] text-xs sm:text-sm font-sans text-[#1B1917]/85">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7A6E58] shrink-0" />
                  <span>Plush 10-inch orthopedic mattresses in all suites</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7A6E58] shrink-0" />
                  <span>High-definition Android Smart TVs with streaming support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7A6E58] shrink-0" />
                  <span>Complimentary premium organic toiletries &amp; in-room amenities</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/rooms"
                className="inline-flex items-center gap-2 bg-[#1B1917] hover:bg-stone-800 text-[#FDFBF7] px-7 py-3.5 rounded-xs text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-xs"
              >
                <span>Stay In Our Luxury Suites &amp; Rooms</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-[#E5E0D5] shadow-xs bg-stone-200 order-1 lg:order-2">
            <Image
              src="/about/3.webp"
              alt="Executive Suite at Highland Hotel Bengaluru"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ========================================================
          05 - CHAPTER IV: CULINARY DELIGHTS & CELEBRATIONS
          ======================================================== */}
      <section className="bg-[#FAF7F0] py-20 sm:py-28 px-6 sm:px-12 lg:px-16 border-t border-[#E5E0D5]">
        <div className="max-w-[1720px] mx-auto">
          
          <div className="max-w-3xl mb-14">
           
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1B1917] font-normal leading-[1.12]">
              Culinary Delights &amp; Celebratory Affairs
            </h2>
            <p className="font-sans text-[#1B1917]/70 text-sm sm:text-base font-light leading-relaxed mt-4">
              Savor the flavors of world cuisine at our Multicuisine Restaurant, where every dish is a culinary masterpiece crafted with love and passion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Dining Card */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E5E0D5] shadow-xs flex flex-col justify-between">
              <div className="relative h-64 sm:h-72 w-full">
                <Image
                  src="/about/4.webp"
                  alt="Cinnamon Multicuisine Restaurant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-[#1B1917] font-normal mb-3">
                    Cinnamon Multicuisine Restaurant
                  </h3>
                  <p className="font-sans text-[#1B1917]/70 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    A destination for comforting North Indian classics, authentic coastal recipes, fragrant Thai curries, and Ceylon spices prepared fresh by our culinary brigade.
                  </p>
                </div>
                <Link
                  href="/cinnamon"
                  className="inline-flex items-center gap-1.5 text-xs font-sans tracking-[0.2em] uppercase font-semibold text-[#1B1917] hover:text-[#7A6E58] transition-colors"
                >
                  <span>Explore Restaurant</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Banquet Card */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E5E0D5] shadow-xs flex flex-col justify-between">
              <div className="relative h-64 sm:h-72 w-full">
                <Image
                  src="/about/5.webp"
                  alt="Utsava Banquet Hall Celebrations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-[#1B1917] font-normal mb-3">
                    Utsava Banquet Hall
                  </h3>
                  <p className="font-sans text-[#1B1917]/70 text-xs sm:text-sm font-light leading-relaxed mb-4">
                    With a banquet hall boasting a seating capacity of 200 people and space for 600 floating guests, Highland Hotel is the perfect venue for weddings, birthdays, corporate events, sangeet ceremonies, and more.
                  </p>
                  <div className="flex items-center gap-6 font-mono text-xs text-[#1B1917]/80 py-3 border-y border-[#EAE3D5] mb-6">
                    <span><strong>200</strong> Seating</span>
                    <span>&bull;</span>
                    <span><strong>600</strong> Floating</span>
                  </div>
                </div>
                <Link
                  href="/banquet"
                  className="inline-flex items-center gap-1.5 text-xs font-sans tracking-[0.2em] uppercase font-semibold text-[#1B1917] hover:text-[#7A6E58] transition-colors"
                >
                  <span>Book Banquet</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          06 - CHAPTER V: HIGHLAND HOTEL OFFERS
          ======================================================== */}
      <section className="px-6 sm:px-12 lg:px-16 max-w-[1720px] mx-auto py-20 sm:py-28">
        <div className="mb-14">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#7A6E58] font-semibold block mb-2">
            Curated Benefits
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1B1917] font-normal">
            Highland Hotel Offers
          </h2>
          <p className="font-sans text-[#1B1917]/70 text-sm font-light mt-2">
            Explore our curated stay, wellness, and celebration packages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer, idx) => (
            <Link
              key={offer.title}
              href={offer.href}
              className="group p-8 rounded-2xl bg-white border border-[#E5E0D5] shadow-2xs hover:border-[#1B1917]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="font-mono text-xs text-[#7A6E58] font-medium">0{idx + 1}</span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#7A6E58] bg-[#FAF7F0] px-2.5 py-1 rounded border border-[#E5E0D5]">
                    {offer.tag}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-[#1B1917] font-normal group-hover:text-[#7A6E58] transition-colors mb-2">
                  {offer.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#1B1917]/70 font-light leading-relaxed">
                  {offer.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#EAE3D5] flex items-center justify-between text-xs font-mono tracking-widest uppercase text-[#7A6E58] group-hover:text-[#1B1917]">
                <span>View Offer</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ========================================================
          07 - ARCHITECTURAL FOOTER
          ======================================================== */}
      <Footer />
    </main>
  );
}