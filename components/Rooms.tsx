"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface RoomItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  amenities: string[];
  image: string;
  size: string;
  price: string;
  href: string;
}

const roomsData: RoomItem[] = [
  {
    id: "executive-suite",
    number: "01",
    title: "Executive Suite",
    tagline:
      "Comfortable accommodation designed for relaxed business, corporate, and leisure stays in North Bangalore.",
    amenities: [
      "King Bed",
      "High-Speed Wi-Fi",
      "Air Conditioning",
      "Smart TV",
    ],
    image:
      "https://highlandhotel.in/wp-content/uploads/2024/09/53.jpg",
    size: "Executive Suite",
    price: "Contact for Rates",
    href: "/contact-us?inquiry=executive-suite",
  },
  {
    id: "executive-twin-suite",
    number: "02",
    title: "Executive Twin Suite",
    tagline:
      "Spacious accommodation with twin bedding, ideally suited for colleagues, families, and shared travel.",
    amenities: [
      "Twin Beds",
      "High-Speed Wi-Fi",
      "Air Conditioning",
      "Work Desk",
    ],
    image:
      "https://highlandhotel.in/wp-content/uploads/2024/09/59.jpg",
    size: "Executive Twin Suite",
    price: "Contact for Rates",
    href: "/contact-us?inquiry=executive-twin-suite",
  },
  {
    id: "wellness",
    number: "03",
    title: "Ayurveda & Spa Retreat",
    tagline:
      "Complement your stay with authentic Ayurvedic therapies, Naturopathy, restorative Yoga, and Acupuncture.",
    amenities: [
      "Ayurveda",
      "Naturopathy",
      "Yoga Therapy",
      "Acupuncture",
    ],
    image:
      "https://highlandhotel.in/wp-content/uploads/2024/09/128.jpg",
    size: "Holistic Wellness",
    price: "Consultation on Request",
    href: "/ayurveda",
  },
];

export default function Rooms() {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const activeRoom = roomsData[activeRoomIndex];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#f8f7f4] text-stone-900 py-20 px-6 sm:px-12 lg:px-20 border-t border-stone-200/80 overflow-hidden selection:bg-orange-500/20"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Section Header: Mask-Reveal Transitions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            {/* Tagline Mask */}
            <div className="overflow-hidden mb-3">
              <div
                className={`flex items-center gap-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isInView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-stone-500 font-medium">
                  Sanctuary &bull; Accommodations
                </p>
              </div>
            </div>

            {/* Headline Mask */}
            <div className="overflow-hidden">
              <h2
                className={`font-serif text-3xl sm:text-5xl font-normal tracking-tight text-stone-900 leading-[1.12] transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isInView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
              >
                Stay Your Way
              </h2>
            </div>
          </div>

          {/* Supporting Copy Mask */}
          <div className="overflow-hidden max-w-md">
            <p
              className={`font-sans text-stone-600 text-xs sm:text-sm md:text-[15px] font-light leading-relaxed transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              Thoughtfully crafted suites in North Bangalore, combining quiet residential serenity, luxury amenities, and gracious service.
            </p>
          </div>
        </div>

        {/* 2-Column Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Interactive Nav Cards with Cascading Delay */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            <div className="space-y-3">
              {roomsData.map((room, index) => {
                const isActive = index === activeRoomIndex;
                const delays = ["delay-150", "delay-300", "delay-450"];

                return (
                  <button
                    key={room.id}
                    type="button"
                    onClick={() => setActiveRoomIndex(index)}
                    aria-pressed={isActive}
                    className={`group relative w-full text-left p-6 rounded-xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer overflow-hidden border ${
                      delays[index]
                    } ${
                      isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                    } ${
                      isActive
                        ? "bg-white border-stone-300 shadow-md shadow-stone-200/60"
                        : "bg-white/40 border-stone-200/60 hover:bg-white hover:border-stone-300 text-stone-600"
                    }`}
                  >
                    {/* Active Left Pill Accent */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 bg-orange-500 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive ? "scale-y-100" : "scale-y-0"
                      }`}
                    />

                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-4">
                        <span
                          className={`font-mono text-xs tracking-widest transition-colors duration-300 ${
                            isActive
                              ? "text-orange-600 font-semibold"
                              : "text-stone-400 group-hover:text-stone-700"
                          }`}
                        >
                          {room.number}
                        </span>

                        <h3
                          className={`font-serif text-xl sm:text-2xl transition-colors duration-300 ${
                            isActive
                              ? "text-stone-900 font-medium"
                              : "text-stone-700 group-hover:text-stone-900"
                          }`}
                        >
                          {room.title}
                        </h3>
                      </div>

                      <span
                        className={`text-[10px] font-sans tracking-[0.2em] uppercase transition-all duration-300 ${
                          isActive
                            ? "text-orange-600 opacity-100 font-medium translate-x-0"
                            : "opacity-0 -translate-x-2 pointer-events-none"
                        }`}
                      >
                        Viewing
                      </span>
                    </div>

                    {/* Animated Detail Container */}
                    {isActive && (
                      <div
                        key={room.id}
                        className="mt-4 pt-4 border-t border-stone-100 animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both"
                      >
                        <p className="font-sans text-xs sm:text-[13px] text-stone-600 font-light mb-3.5 leading-relaxed">
                          {room.tagline}
                        </p>

                        <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[10px] font-sans text-stone-500 uppercase tracking-[0.16em]">
                          {room.amenities.map((item, i) => (
                            <span
                              key={item}
                              style={{ animationDelay: `${i * 60}ms` }}
                              className="flex items-center gap-1.5 animate-in fade-in slide-in-from-bottom-1 duration-400 fill-mode-both"
                            >
                              <span className="w-1 h-1 rounded-full bg-orange-500" />
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Bottom Dynamic Action Strip */}
            <div
              key={`footer-${activeRoom.id}`}
              className={`pt-6 border-t border-stone-300/80 flex items-center justify-between mt-auto transition-all duration-1000 delay-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-stone-400 block mb-0.5">
                  {activeRoom.id === "wellness" ? "Therapy Sessions" : "Reservations"}
                </span>

                <span className="font-serif text-lg sm:text-xl font-medium text-stone-900">
                  {activeRoom.price}
                </span>
              </div>

              {/* High-End Primary Button */}
              <Link
                href={activeRoom.href}
                className="group inline-flex items-center gap-2 bg-stone-900 hover:bg-black text-white font-sans text-[11px] uppercase tracking-[0.2em] font-medium px-6 py-3.5 rounded-md shadow-sm transition-all duration-300 hover:shadow-md active:scale-[0.98] cursor-pointer"
              >
                <span>
                  {activeRoom.id === "wellness" ? "Explore Spa" : "Reserve Suite"}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange-400" />
              </Link>
            </div>

          </div>

          {/* Right Column: Layered Canvas Settle Entrance */}
          <div
            className={`lg:col-span-7 relative min-h-[420px] sm:min-h-[520px] rounded-2xl overflow-hidden border border-stone-200/90 shadow-xl bg-stone-950 transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isInView ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-[0.98]"
            }`}
          >
            {roomsData.map((room, index) => {
              const isCurrent = index === activeRoomIndex;

              return (
                <div
                  key={room.id}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                    isCurrent
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <div
                    className={`relative w-full h-full transform transition-transform duration-[7000ms] ease-out will-change-transform ${
                      isCurrent ? "scale-105" : "scale-100"
                    }`}
                  >
                    <Image
                      src={room.image}
                      alt={`${room.title} at Highland Hotel Bengaluru`}
                      fill
                      quality={90}
                      priority={index === 0}
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>

                  {/* Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

                  {/* Specification Corner Badges */}
                  <div className="absolute top-6 right-6 z-20">
                   
                  </div>

                  <div className="absolute bottom-6 left-6 z-20 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-orange-400 block mb-1">
                      Highland Sanctuary
                    </span>
                    <p className="font-serif text-xl sm:text-2xl font-light">
                      {room.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}