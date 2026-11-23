"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Phone,
  ArrowUpRight,
  UtensilsCrossed,
  Globe2,
  Clock,
  BookOpen,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const heroBg = "/cinnamon/hero.webp";
const diningAmbianceImg = "/cinnamon/dinning.webp";

const abroadCuisines = [
  {
    title: "Sri Lankan Cuisine",
    subtitle: "Authentic Coastal & Island Flavors",
    description:
      "A tribute to aromatic island curries, fragrant tempered spices, coconut sambols, and time-honored Ceylon heritage recipes prepared fresh by our specialty chefs.",
    src: "/cinnamon/srilanka.webp",
  },
  {
    title: "Thailand Cuisine",
    subtitle: "Vibrant Asian Aromas",
    description:
      "Harmonizing the quintessential Thai balance of sweet, sour, salty, and spicy with authentic kaffir lime, galangal, lemongrass, and rich coconut broths.",
    src: "/cinnamon/thailand.webp",
  },
];

const culinaryGallery = [
  {
    src: "/cinnamon/1.webp",
    span: "md:col-span-4 aspect-square",
  },
  {
    src: "/cinnamon/2.webp",
    span: "md:col-span-4 aspect-square",
  },
  {
    src: "/cinnamon/3.webp",
    span: "md:col-span-4 aspect-square",
  },
  {
    src: "/cinnamon/4.webp",
    span: "md:col-span-4 aspect-[4/3]",
  },
  {
    src: "/cinnamon/5.webp",
    span: "md:col-span-4 aspect-[4/3]",
  },
  {
    src: "/cinnamon/6.webp",
    span: "md:col-span-4 aspect-[4/3]",
  },
  // {
  //   src: "/cinnamon/7.webp",
  //   span: "md:col-span-4 aspect-[4/3]",
  // },
  {
    src: "/cinnamon/8.webp",
    span: "md:col-span-4 aspect-[4/3]",
  },
  {
    src: "/cinnamon/9.webp",
    span: "md:col-span-4 aspect-[4/3]",
  },
];

export default function CinnamonRestaurantPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#3A2D21] antialiased selection:bg-[#A1611D]/20 selection:text-[#3A2D21] overflow-x-hidden">
      <Navbar />

      {/* =========================================================
          01 - EDITORIAL HERO (ZERO BLACK / RED, BOLD ENQUIRIES, #A1611D CTA)
      ========================================================== */}
      <section
        ref={heroRef}
        className="relative w-full h-[88svh] min-h-[600px] max-h-[900px] overflow-hidden flex flex-col justify-end p-6 sm:p-12 lg:p-16"
      >
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-x-0 -top-[10%] h-[120%] w-full will-change-transform pointer-events-none transform-gpu"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroBg}
            alt="Cinnamon Multicuisine Restaurant at Highland Hotel"
            className="w-full h-full object-cover object-center"
            style={{
              imageRendering: "-webkit-optimize-contrast",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
            loading="eager"
          />
        </motion.div>

        {/* Warm Espresso Bronze Scrim (Zero Black) */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(44, 34, 24, 0.88) 0%, rgba(44, 34, 24, 0.42) 45%, rgba(44, 34, 24, 0.22) 100%)",
          }}
        />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-20 w-full max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end text-[#FDFBF7]"
        >
          {/* Bottom-Left Heading */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2.5 mb-3">
             
              <p className="font-sans text-[11px] sm:text-xs tracking-[0.32em] uppercase text-[#E5C99B] font-bold">
                Meet Our Multicuisine Restaurant
              </p>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold leading-[1.04] tracking-wide drop-shadow-sm">
              Cinnamon <br />
              <span className="italic font-light text-[#F4EFE6]">
                Multicuisine Restaurant
              </span>
            </h1>
          </div>

          {/* Bottom-Right Info & Action */}
          <div className="lg:col-span-4 lg:text-right flex flex-col lg:items-end justify-end space-y-4">
            <p className="font-serif italic text-base sm:text-lg text-[#F4EFE6] font-semibold leading-snug tracking-wide max-w-sm">
              &ldquo;Where every dish tells a story and every meal becomes a cherished memory.&rdquo;
            </p>

            <div className="pt-2 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 text-xs sm:text-sm font-sans text-[#F4EFE6]">
              <div className="flex items-center gap-2 font-bold tracking-wide">
                <Phone className="w-4 h-4 text-[#E5C99B] shrink-0" />
                <span className="text-[#E5C99B]">Enquiries:</span>
                <a
                  href="tel:+919035034422"
                  className="text-[#FDFBF7] hover:text-[#E5C99B] transition-colors underline underline-offset-4"
                >
                  +91-9035034422
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:+919035034422"
                  className="inline-flex items-center gap-2 bg-[#A1611D] hover:bg-[#865017] text-[#FDFBF7] px-6 py-3 rounded-sm font-sans text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-md active:scale-95"
                >
                  <span>Reserve a Table</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                </a>

                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 bg-[#FDFBF7] hover:bg-[#F4EFE6] text-[#3A2D21] px-6 py-3 rounded-sm font-sans text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-md active:scale-95"
                >
                  <BookOpen className="w-4 h-4 text-[#A1611D] stroke-[2.2]" />
                  <span>View Menu</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          02 - RESTAURANT INTRODUCTION & AMBIANCE (BOLD HIGHLIGHTS & WIDE TRACKING)
      ========================================================== */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Ambiance Image */}
          <div className="lg:col-span-5 relative w-full rounded-2xl overflow-hidden bg-[#F4EFE6] border border-[#DDD4C4] p-3 shadow-xs">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#EAE1D0]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={diningAmbianceImg}
                alt="Cinnamon Restaurant dining experience and interiors"
                className="w-full h-full object-cover object-center"
                style={{
                  imageRendering: "-webkit-optimize-contrast",
                }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Lead Editorial Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-[#A1611D] stroke-[2.2]" />
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#A1611D] font-bold">
                Signature Dining &bull; 1,400 Sq. Ft.
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#3A2D21] font-bold leading-[1.12] tracking-wide">
              Cinnamon Multicuisine Restaurant
            </h2>

            <p className="font-sans text-[#5A4A3B] text-sm sm:text-base font-normal leading-relaxed tracking-wide">
              Step into a world of culinary delight at Highland Hotel’s signature restaurant,{" "}
              <strong className="font-bold text-[#3A2D21]">Cinnamon</strong>. Boasting an exquisite blend of{" "}
              <strong className="font-bold text-[#3A2D21]">
                captivating interior design and impeccable hospitality
              </strong>
              , Cinnamon offers a gastronomic experience like no other.
            </p>

            <p className="font-sans text-[#5A4A3B] text-sm sm:text-base font-normal leading-relaxed tracking-wide">
              Indulge your senses with a{" "}
              <strong className="font-bold text-[#3A2D21]">
                diverse Indian, Continental, and Pan-Asian menu
              </strong>{" "}
              crafted from the finest seasonal ingredients, expertly prepared by our skilled chefs. Whether you’re savoring a gourmet meal in our{" "}
              <strong className="font-bold text-[#3A2D21]">
                air-conditioned indoor dining room
              </strong>{" "}
              or enjoying{" "}
              <strong className="font-bold text-[#3A2D21]">
                al fresco dining on the scenic balconies
              </strong>
              , every moment at Cinnamon is infused with warmth and culinary excellence.
            </p>

            <p className="font-sans text-[#5A4A3B] text-sm sm:text-base font-normal leading-relaxed tracking-wide">
              From intimate family dinners to celebratory gatherings, let Cinnamon be your destination for unforgettable dining experiences.
            </p>

            <div className="pt-4 border-t border-[#DDD4C4] flex flex-wrap items-center gap-4 sm:gap-6 font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#A1611D]">
              <span>Air-Conditioned Dining Room</span>
              <span>&bull;</span>
              <span>Scenic Balcony Seating</span>
              <span>&bull;</span>
              <span>Buffet &amp; A La Carte</span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          03 - OUR SPECIAL ABROAD CONNECTION WITH FOODS
      ========================================================== */}
      <section className="bg-[#F4EFE6] py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-y border-[#DDD4C4]">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-2 mb-2.5">
              <Globe2 className="w-4 h-4 text-[#A1611D] stroke-[2.2]" />
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#A1611D] font-bold">
                Global Gastronomy
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#3A2D21] font-bold leading-[1.12] tracking-wide">
              Our Special Abroad Connection with Foods
            </h2>
            <p className="font-sans text-[#5A4A3B] text-sm font-medium mt-3 tracking-wide">
              Bringing <strong className="font-bold text-[#3A2D21]">master authentic recipes</strong> from our international culinary partners straight to your table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {abroadCuisines.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FDFBF7] rounded-2xl overflow-hidden border border-[#DDD4C4] shadow-xs flex flex-col justify-between"
              >
                <div className="relative w-full aspect-[16/10] bg-[#EAE1D0]/60 overflow-hidden flex items-center justify-center p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain object-center transition-transform duration-700 hover:scale-102"
                    style={{
                      imageRendering: "-webkit-optimize-contrast",
                    }}
                    loading="lazy"
                  />
                </div>

                <div className="p-7 sm:p-8 space-y-3">
                  <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#A1611D] font-bold block">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#3A2D21] font-bold tracking-wide">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#5A4A3B] font-medium leading-relaxed tracking-wide">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          04 - GALLERY (THE 9 FULL-RESOLUTION CULINARY MOMENTS)
      ========================================================== */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-20 sm:py-28">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#A1611D] block mb-2.5 font-bold">
            Visual Flavors
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#3A2D21] font-bold leading-[1.12] tracking-wide">
            Culinary Craft &amp; Presentation
          </h2>
          <p className="font-sans text-[#5A4A3B] text-sm font-medium mt-2 tracking-wide">
            A glimpse into our <strong className="font-bold text-[#3A2D21]">freshly prepared appetizers, signature curries, and comforting dining service</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-5 sm:gap-6">
          {culinaryGallery.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl overflow-hidden bg-[#F4EFE6] border border-[#DDD4C4] shadow-xs group ${item.span}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt="Cinnamon Restaurant dish moment"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                style={{
                  imageRendering: "-webkit-optimize-contrast",
                }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          05 - LIGHT PARCHMENT CONTACT & RESERVATION FOOTER STRIP
      ========================================================== */}
      <section className="bg-[#F4EFE6] text-[#3A2D21] py-20 px-6 sm:px-12 lg:px-20 border-t border-[#DDD4C4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-12 border-b border-[#DDD4C4]">
            <div className="lg:col-span-5">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#A1611D] block mb-2 font-bold">
                Table Reservations &bull; Highland Hotel
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#3A2D21] font-bold tracking-wide mb-3">
                Dine at Cinnamon
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#5A4A3B] font-medium leading-relaxed tracking-wide">
                Whether you are joining us for <strong className="font-bold text-[#3A2D21]">breakfast, lunch, or an evening dinner celebration</strong>, our team is at your service to ensure an impeccable dining experience.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs font-sans text-[#3A2D21]">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#A1611D] font-sans uppercase tracking-widest text-xs font-bold">
                  <Phone className="w-4 h-4 text-[#A1611D] stroke-[2.2]" />
                  <span>Restaurant Desk</span>
                </div>
                <p className="text-[#3A2D21] text-base sm:text-lg font-bold tracking-wide">
                  <a href="tel:+919035034422" className="hover:text-[#A1611D] transition-colors">
                    +91-9035034422
                  </a>
                </p>
                <p className="text-xs text-[#5A4A3B] font-semibold">
                  Direct line for table bookings and banquet catering inquiries.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#A1611D] font-sans uppercase tracking-widest text-xs font-bold">
                  <Clock className="w-4 h-4 text-[#A1611D] stroke-[2.2]" />
                  <span>Service Hours</span>
                </div>
                <p className="text-[#3A2D21] text-base sm:text-lg font-bold tracking-wide">
                  7:00 AM – 10:30 PM
                </p>
                <p className="text-xs text-[#5A4A3B] font-semibold">
                  Breakfast, Lunch, High Tea &amp; Dinner service daily.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans font-bold text-[#3A2D21]">
            <p className="tracking-wide">Highland Hotel &bull; Cinnamon Multicuisine Restaurant</p>
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href="/menu"
                className="bg-[#FDFBF7] hover:bg-white border border-[#DDD4C4] hover:border-[#A1611D] text-[#3A2D21] px-6 py-3 rounded-sm uppercase tracking-[0.2em] font-bold transition-all shadow-2xs"
              >
                Explore Menu
              </Link>
              <a
                href="tel:+919035034422"
                className="bg-[#A1611D] hover:bg-[#865017] text-[#FDFBF7] px-7 py-3 rounded-sm uppercase tracking-[0.2em] font-bold transition-all shadow-sm active:scale-95"
              >
                Call for Reservation
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}