"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

interface RoomItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  amenities: string[];
  images: {
    src: string;
    caption: string;
  }[];
  price: string;
  href: string;
}

const roomsData: RoomItem[] = [
  {
    id: "executive-suite",
    number: "01",
    title: "Executive Suite",
    subtitle: "King Bed & Lounge",
    tagline:
      "Generously proportioned suite with dedicated lounge quarters, expansive glazing, and panoramic views of North Bangalore.",
    amenities: ["King Bed", "High-Speed Wi-Fi", "Climate Control", "Smart TV"],
    images: [
      { src: "/rooms/1.webp", caption: "Master Bedroom Suite" },
      { src: "/rooms/2.webp", caption: "Living & Seating Lounge" },
      { src: "/rooms/3.webp", caption: "Executive Work Enclave" },
      { src: "/rooms/4.webp", caption: "En-suite & Vanity" },
      { src: "/rooms/5.webp", caption: "Balcony Vista" },
    ],
    price: "Contact for Rates",
    href: "/contact",
  },
  {
    id: "executive-twin-suite",
    number: "02",
    title: "Executive Twin Suite",
    subtitle: "Twin Bedding Arrangement",
    tagline:
      "Flexible, light-filled accommodation tailored for executive colleagues, delegates, and companions traveling together.",
    amenities: ["Twin Beds", "Ergonomic Desk", "High-Speed Wi-Fi", "Climate Control"],
    images: [
      { src: "/rooms/6.webp", caption: "Twin Bedroom Layout" },
      { src: "/rooms/7.webp", caption: "Vanity & Dressing Space" },
      { src: "/rooms/8.webp", caption: "Work Station Setup" },
      { src: "/rooms/9.webp", caption: "Ambient Evening Lighting" },
      { src: "/rooms/10.webp", caption: "Wardrobe & Entry" },
    ],
    price: "Contact for Rates",
    href: "/contact",
  },
  {
    id: "wellness",
    number: "03",
    title: "Ayurveda Retreat",
    subtitle: "Holistic Health Sanctuary",
    tagline:
      "Signature traditional therapies, bespoke herbal steam treatments, and restorative retreats curated by KEVA Ayurveda.",
    amenities: ["Herbal Steam", "Naturopathy", "Yoga Therapy", "Doctor Consultation"],
    images: [
      { src: "/rooms/11.webp", caption: "Therapy Sanctuary" },
      { src: "/rooms/12.webp", caption: "Ayurvedic Steam Cabin" },
      { src: "/rooms/13.webp", caption: "Consultation Enclave" },
      { src: "/rooms/14.webp", caption: "Relaxation Lounge" },
      { src: "/rooms/15.webp", caption: "Herbal Oil Treatment Bed" },
    ],
    price: "Consultation on Request",
    href: "/ayurveda",
  },
];

export default function Rooms() {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const activeRoom = roomsData[activeRoomIndex];
  const activePhoto = activeRoom.images[activePhotoIndex] || activeRoom.images[0];

  const handleRoomChange = (index: number) => {
    setActiveRoomIndex(index);
    setActivePhotoIndex(0);
  };

  return (
    <section className="relative w-full max-w-full bg-[#FDFBF7] text-[#3A2D21] py-14 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-14 border-t border-[#E5E0D5] overflow-hidden box-border">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-[#DDD4C4] gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
             
              <p className="font-mono text-[10px] sm:text-xs tracking-[0.28em] uppercase text-[#A1611D] font-bold">
                Highland Sanctuary &bull; Accommodations
              </p>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#3A2D21] font-semibold tracking-tight leading-[1.15]">
              Suites &amp; Restorative Living
            </h2>
          </div>

          <p className="font-sans text-[#5A4A3B] text-xs sm:text-sm font-normal max-w-md leading-relaxed">
            <strong className="font-bold text-[#3A2D21]">42 thoughtfully appointed suites</strong> combining quiet residential seclusion with <strong className="font-bold text-[#3A2D21]">attentive hospitality</strong> in North Bangalore.
          </p>
        </div>

        {/* ================= ROOM SELECTOR TABS (WARM BRONZE & CHAMPAGNE) ================= */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8 w-full">
          {roomsData.map((room, index) => {
            const isActive = index === activeRoomIndex;
            return (
              <button
                key={room.id}
                onClick={() => handleRoomChange(index)}
                className={`relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs font-sans tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 border flex-1 sm:flex-none ${
                  isActive
                    ? "bg-[#A1611D] text-[#FDFBF7] border-[#A1611D] shadow-sm font-bold"
                    : "bg-[#F4EFE6] text-[#3A2D21] border-[#DDD4C4] hover:bg-white hover:border-[#A1611D] font-semibold"
                }`}
              >
                <span className={`font-mono text-[10px] font-bold ${isActive ? "text-[#F4EFE6]" : "text-[#A1611D]"}`}>
                  {room.number}
                </span>
                <span className="text-[10px] sm:text-xs whitespace-nowrap">{room.title}</span>
              </button>
            );
          })}
        </div>

        {/* ================= MAIN TWO-COLUMN STAGE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start w-full">
          
          {/* LEFT: Dominant Image Canvas with Thumbnails */}
          <div className="lg:col-span-8 flex flex-col gap-3 w-full">
            
            {/* Main Stage */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/10] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-[#DDD4C4] bg-[#F4EFE6]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeRoom.id}-${activePhotoIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={activePhoto.src}
                    alt={`${activeRoom.title} - ${activePhoto.caption}`}
                    fill
                    priority
                    quality={95}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 65vw"
                    className="object-cover object-center"
                  />

                  {/* Soft Warm Espresso Scrim (Zero Black) */}
                  <div className="absolute inset-x-0 bottom-0 h-16 sm:h-28 bg-gradient-to-t from-[#3A2D21]/55 to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Subdued Minimal Thumbnails */}
            <div className="flex items-center gap-2 pt-1 w-full overflow-hidden">
              {activeRoom.images.map((img, idx) => {
                const isCurrentThumb = idx === activePhotoIndex;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActivePhotoIndex(idx)}
                    aria-label={`View photo ${idx + 1}`}
                    className={`relative flex-1 aspect-[4/3] max-w-[64px] sm:max-w-[70px] rounded-md overflow-hidden cursor-pointer transition-all duration-300 border ${
                      isCurrentThumb
                        ? "ring-2 ring-[#A1611D] ring-offset-2 ring-offset-[#FDFBF7] opacity-100 border-transparent shadow-sm scale-105"
                        : "opacity-45 hover:opacity-85 border-[#DDD4C4]"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.caption}
                      fill
                      sizes="70px"
                      className="object-cover object-center"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Curated Suite Dossier & Booking Strip */}
          <div className="lg:col-span-4 bg-[#F4EFE6] rounded-xl sm:rounded-2xl md:rounded-3xl border border-[#DDD4C4] p-5 sm:p-7 lg:p-8 flex flex-col justify-between self-stretch w-full box-border">
            
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A1611D] font-bold block mb-1.5 sm:mb-2">
                Suite Specification
              </span>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#3A2D21] font-bold leading-tight">
                {activeRoom.title}
              </h3>
              <p className="font-serif italic text-[#A1611D] font-semibold text-xs sm:text-sm mt-1">
                {activeRoom.subtitle}
              </p>

              <div className="mt-4 sm:mt-5 w-10 h-[1.5px] bg-[#A1611D]/50" />

              <p className="font-sans text-xs sm:text-[13px] text-[#5A4A3B] font-medium leading-relaxed mt-4 sm:mt-5">
                {activeRoom.tagline}
              </p>

              {/* Bold Amenity Badges */}
              <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-[#DDD4C4]">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#3A2D21] font-bold block mb-3">
                  Included Facilities &amp; Amenities
                </span>
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  {activeRoom.amenities.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-1.5 sm:gap-2 bg-[#FDFBF7] border border-[#DDD4C4] px-2.5 sm:px-3 py-2 rounded-lg text-[11px] font-sans font-bold text-[#3A2D21]"
                    >
                      <Check className="w-3.5 h-3.5 text-[#A1611D] stroke-[2.5] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Booking Action Strip (Brushed Antique Gold CTA) */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#DDD4C4] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-baseline justify-between sm:block">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#A1611D] font-bold block sm:mb-0.5">
                  Tariff Rate
                </span>
                <span className="font-serif text-base sm:text-lg font-bold text-[#3A2D21]">
                  {activeRoom.price}
                </span>
              </div>

              <Link
                href={activeRoom.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#A1611D] hover:bg-[#73582D] text-[#FDFBF7] font-sans text-xs uppercase tracking-[0.2em] font-bold px-6 py-3.5 rounded-md transition-all shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
              >
                <span>{activeRoom.id === "wellness" ? "Explore Spa" : "Reserve"}</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}