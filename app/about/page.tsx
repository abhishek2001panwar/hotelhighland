"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
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
    <main className="min-h-screen bg-[#FDFBF7] text-[#3A2D21] antialiased selection:bg-[#A1611D]/20 selection:text-[#3A2D21]">
      <Navbar />

      {/* ========================================================
          01 - FULL PARALLAX HERO (ZERO BLACK / RED, BOLD ENQUIRIES)
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

        {/* Warm Espresso Bronze Scrims (Zero Black) */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(44, 34, 24, 0.88) 0%, rgba(44, 34, 24, 0.42) 45%, rgba(44, 34, 24, 0.22) 100%)",
          }}
        />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-20 w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 pb-16 sm:pb-20 text-[#FDFBF7]"
        >
          <div className="flex items-center gap-2.5 mb-4">
            
            <p className="font-sans text-[11px] sm:text-xs tracking-[0.32em] uppercase text-[#E5C99B] font-bold">
              About Us &bull; Highland Hotel Bengaluru
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Premium 2-line Headline */}
            <div className="lg:col-span-8">
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl uppercase tracking-[0.04em] leading-[1.12]">
                <span className="font-light block text-[#F4EFE6]">
                  Embark on a Journey of
                </span>
                <span className="font-bold block tracking-[0.06em] text-[#FDFBF7]">
                  Wellness &amp; Luxury
                </span>
              </h1>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-4 lg:text-right">
              <p className="font-serif text-lg sm:text-xl text-[#FDFBF7] font-bold tracking-[0.18em] uppercase">
                Explore &bull; Discover &bull; Live
              </p>
              <div className="mt-2.5 flex items-center lg:justify-end gap-3 font-sans text-xs tracking-[0.25em] text-[#E5C99B] uppercase font-bold">
                <span>Est. 2008</span>
                <span>&bull;</span>
                <span>North Bangalore</span>
              </div>
            </div>
          </div>

          {/* Bold Enquiries Strip */}
          <div className="mt-10 pt-6 border-t border-[#FDFBF7]/20 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-sans text-[#F4EFE6]">
            <div className="flex flex-wrap items-center gap-2 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A1611D]" />
              <span className="text-[#E5C99B] uppercase tracking-wider">For Enquiries:</span>
              <a href="tel:+919035034418" className="text-[#FDFBF7] hover:text-[#E5C99B] transition-colors">
                +91 90350 34418
              </a>
              <span className="text-[#E5C99B]">/</span>
              <a href="tel:+917619231899" className="text-[#FDFBF7] hover:text-[#E5C99B] transition-colors">
                +91 76192 31899
              </a>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-[11px] uppercase font-sans font-bold tracking-widest text-[#E5C99B]">
              Scroll Down to Explore <span>&darr;</span>
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
            <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#A1611D] font-bold block mb-2">
              Our Heritage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3A2D21] font-bold leading-tight">
              Hotel Overview
            </h2>
            <div className="mt-4 w-12 h-[2px] bg-[#A1611D]" />
          </div>

          <div className="lg:col-span-8 space-y-6 text-[#5A4A3B] tracking-wide font-sans text-sm sm:text-base font-normal leading-relaxed">
            <p className="text-lg sm:text-xl font-serif font-bold text-[#3A2D21] leading-snug tracking-wide">
              At Highland Hotel, we believe in enriching lives through a holistic approach to hospitality.
            </p>
            <p>
              Founded in <strong className="font-bold text-[#3A2D21]">2008</strong> by visionary entrepreneur{" "}
              <strong className="font-bold text-[#3A2D21]">Balaji B Maka</strong>, our hotel stands as a testament to his unwavering commitment to creating a sanctuary where guests can escape the hustle and bustle of everyday life and immerse themselves in tranquility.
            </p>
            <p>
              Nestled in the green calm of <strong className="font-bold text-[#3A2D21]">North Bangalore</strong>, Highland is built around the timeless belief that true hospitality cares for the whole self-combining{" "}
              <strong className="font-bold text-[#3A2D21]">
                peaceful living spaces, restorative nature, authentic heritage therapies, and generous celebratory venues
              </strong>
              .
            </p>
          </div>
        </div>

        {/* Bold Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 mt-16 border-t border-[#DDD4C4]">
          {stats.map((item) => (
            <div key={item.label} className="border-l-2 border-[#A1611D] pl-5">
              <p className="font-serif text-3xl sm:text-5xl font-bold text-[#3A2D21] tracking-tight">
                {item.value}
              </p>
              <p className="font-sans text-xs uppercase tracking-wider text-[#A1611D] font-bold mt-1.5">
                {item.label}
              </p>
              <p className="font-sans text-xs text-[#3A2D21]/80 font-semibold mt-0.5">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          03 - CHAPTER II: EMBRACE HOLISTIC WELLNESS
      ======================================================== */}
      <section className="bg-[#F4EFE6] py-20 sm:py-28 px-6 sm:px-12 lg:px-16 border-y border-[#DDD4C4]">
        <div className="max-w-[1720px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Architectural Frame */}
            <div className="lg:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#DDD4C4] shadow-md bg-[#EAE1D0]">
              <Image
                src="/about/2.webp"
                alt="Ayurvedic Wellness Experience"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(44, 34, 24, 0.78) 0%, rgba(44, 34, 24, 0) 50%)",
                }}
              />
              <div className="absolute bottom-6 left-6 text-[#FDFBF7]">
                <span className="font-sans text-[11px] font-bold tracking-widest uppercase text-[#E5C99B] block mb-1">
                  Traditional Balance
                </span>
                <p className="font-serif text-xl sm:text-2xl font-bold">
                  KEVA Ayurveda &amp; Holistic Health
                </p>
              </div>
            </div>

            {/* Right: Narrative & 4 Pillars */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#A1611D] font-bold block mb-2">
                  Restorative Care
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl text-[#3A2D21] font-bold leading-[1.12] mb-6">
                  Embrace Holistic Wellness
                </h2>

                <p className="font-sans text-[#5A4A3B] text-sm sm:text-base font-normal leading-relaxed mb-4">
                  Experience a profound sense of well-being with our range of{" "}
                  <strong className="font-bold text-[#3A2D21]">
                    Ayurvedic, Naturopathy, Yoga, and Acupuncture services
                  </strong>
                  . Whether you’re seeking relaxation, rejuvenation, or healing, our{" "}
                  <strong className="font-bold text-[#3A2D21]">expert practitioners</strong> will guide you on a journey towards balance and harmony.
                </p>
                <p className="font-sans text-[#5A4A3B] text-sm font-normal leading-relaxed mb-10">
                  From <strong className="font-bold text-[#3A2D21]">personalized wellness consultations</strong> to therapeutic treatments, we are dedicated to nurturing your mind, body, and soul.
                </p>

                {/* 4 Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-8 border-t border-[#DDD4C4]">
                  {wellnessPillars.map((item) => (
                    <div key={item.num} className="bg-[#FDFBF7] p-5 rounded-xl border border-[#DDD4C4] shadow-2xs">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-sans text-xs text-[#A1611D] font-bold">{item.num}</span>
                        <h3 className="font-serif text-lg text-[#3A2D21] font-bold">{item.name}</h3>
                      </div>
                      <p className="font-sans text-xs text-[#5A4A3B] font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-[#DDD4C4]">
                <Link
                  href="/ayurveda"
                  className="inline-flex items-center gap-2 bg-[#A1611D] hover:bg-[#865017] text-[#FDFBF7] px-7 py-3.5 rounded-sm text-xs font-sans tracking-[0.2em] uppercase font-bold transition-all shadow-sm"
                >
                  <span>Explore All Wellness Therapies</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
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
              <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#A1611D] font-bold block mb-2">
                42 Rooms &amp; Suites
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#3A2D21] font-bold leading-[1.12] mb-6">
                Experience Unparalleled Luxury
              </h2>

              <p className="font-sans text-[#5A4A3B] text-sm sm:text-base font-normal leading-relaxed mb-4">
                Step into a world of refined luxury with our collection of{" "}
                <strong className="font-bold text-[#3A2D21]">42 meticulously designed rooms</strong>, each offering breath-taking views of the city skyline and elegant, contemporary interiors.
              </p>
              <p className="font-sans text-[#5A4A3B] text-sm font-normal leading-relaxed mb-6">
                Choose from <strong className="font-bold text-[#3A2D21]">36 Executive Suite Rooms</strong> or indulge in the generous comfort of our{" "}
                <strong className="font-bold text-[#3A2D21]">6 Executive Twin Suites</strong>, thoughtfully crafted to ensure privacy, relaxation, and sophistication. Each room features a{" "}
                <strong className="font-bold text-[#3A2D21]">plush 10-inch mattress</strong> for a truly restorative night’s sleep, complemented by modern conveniences including an{" "}
                <strong className="font-bold text-[#3A2D21]">Android Smart TV</strong> and{" "}
                <strong className="font-bold text-[#3A2D21]">complimentary premium in-room amenities</strong>.
              </p>

              {/* Bold Bullet Features */}
              <div className="space-y-3 pb-8 border-b border-[#DDD4C4] text-xs sm:text-sm font-sans font-bold text-[#3A2D21]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A1611D] stroke-[2.2] shrink-0" />
                  <span>Plush 10-inch orthopedic mattresses in all suites</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A1611D] stroke-[2.2] shrink-0" />
                  <span>High-definition Android Smart TVs with streaming support</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A1611D] stroke-[2.2] shrink-0" />
                  <span>Complimentary premium organic toiletries &amp; in-room amenities</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/rooms"
                className="inline-flex items-center gap-2 bg-[#A1611D] hover:bg-[#865017] text-[#FDFBF7] px-7 py-3.5 rounded-sm text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-sm"
              >
                <span>Stay In Our Luxury Suites &amp; Rooms</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-[#DDD4C4] shadow-md bg-[#EAE1D0] order-1 lg:order-2">
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
      <section className="bg-[#F4EFE6] py-20 sm:py-28 px-6 sm:px-12 lg:px-16 border-t border-[#DDD4C4]">
        <div className="max-w-[1720px] mx-auto">
          
          <div className="max-w-3xl mb-14">
            <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#A1611D] font-bold block mb-2">
              Dining &amp; Events
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#3A2D21] font-bold leading-[1.12]">
              Culinary Delights &amp; Celebratory Affairs
            </h2>
            <p className="font-sans text-[#5A4A3B] text-sm sm:text-base font-medium leading-relaxed mt-4">
              Savor the flavors of world cuisine at our{" "}
              <strong className="font-bold text-[#3A2D21]">Multicuisine Restaurant</strong>, where every dish is a culinary masterpiece crafted with love and passion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Dining Card */}
            <div className="bg-[#FDFBF7] rounded-2xl overflow-hidden border border-[#DDD4C4] shadow-xs flex flex-col justify-between">
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
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#3A2D21] font-bold mb-3">
                    Cinnamon Multicuisine Restaurant
                  </h3>
                  <p className="font-sans text-[#5A4A3B] text-xs sm:text-sm font-medium leading-relaxed mb-6">
                    A destination for <strong className="font-bold text-[#3A2D21]">comforting North Indian classics, authentic coastal recipes, fragrant Thai curries, and Ceylon spices</strong> prepared fresh by our culinary brigade.
                  </p>
                </div>
                <div>
                  <Link
                    href="/cinnamon"
                    className="inline-flex items-center gap-2 bg-[#A1611D] hover:bg-[#865017] text-[#FDFBF7] px-6 py-3 rounded-sm text-xs font-sans tracking-[0.2em] uppercase font-bold transition-all shadow-xs"
                  >
                    <span>Explore Restaurant</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Banquet Card */}
            <div className="bg-[#FDFBF7] rounded-2xl overflow-hidden border border-[#DDD4C4] shadow-xs flex flex-col justify-between">
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
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#3A2D21] font-bold mb-3">
                    Utsava Banquet Hall
                  </h3>
                  <p className="font-sans text-[#5A4A3B] text-xs sm:text-sm font-medium leading-relaxed mb-4">
                    With a banquet hall boasting a <strong className="font-bold text-[#3A2D21]">seating capacity of 200 people</strong> and space for{" "}
                    <strong className="font-bold text-[#3A2D21]">600 floating guests</strong>, Highland Hotel is the perfect venue for{" "}
                    <strong className="font-bold text-[#3A2D21]">weddings, birthdays, corporate events, and sangeet ceremonies</strong>.
                  </p>
                  <div className="flex items-center gap-6 font-sans text-xs sm:text-sm font-bold text-[#3A2D21] py-3 border-y border-[#DDD4C4] mb-6">
                    <span><strong className="text-[#A1611D]">200</strong> Seating Capacity</span>
                    <span className="text-[#A1611D]">&bull;</span>
                    <span><strong className="text-[#A1611D]">600</strong> Floating Capacity</span>
                  </div>
                </div>
                <div>
                  <Link
                    href="/banquet"
                    className="inline-flex items-center gap-2 bg-[#A1611D] hover:bg-[#865017] text-[#FDFBF7] px-6 py-3 rounded-sm text-xs font-sans tracking-[0.2em] uppercase font-bold transition-all shadow-xs"
                  >
                    <span>Book Banquet</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                  </Link>
                </div>
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
          <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#A1611D] font-bold block mb-2">
            Curated Benefits
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#3A2D21] font-bold">
            Highland Hotel Offers
          </h2>
          <p className="font-sans text-[#5A4A3B] text-sm font-semibold mt-2">
            Explore our curated stay, wellness, and celebration packages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer, idx) => (
            <Link
              key={offer.title}
              href={offer.href}
              className="group p-8 rounded-2xl bg-[#F4EFE6] border border-[#DDD4C4] shadow-2xs hover:border-[#A1611D] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="font-sans text-xs text-[#A1611D] font-bold">0{idx + 1}</span>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#A1611D] bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#DDD4C4]">
                    {offer.tag}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-[#3A2D21] font-bold group-hover:text-[#A1611D] transition-colors mb-2">
                  {offer.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#5A4A3B] font-medium leading-relaxed">
                  {offer.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DDD4C4] flex items-center justify-between text-xs font-sans font-bold tracking-widest uppercase text-[#A1611D]">
                <span>View Offer</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.2] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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