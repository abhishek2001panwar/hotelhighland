"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
      "Comfortable accommodation designed for relaxed business and leisure stays.",
    amenities: [
      "King Bed",
      "High-Speed Wi-Fi",
      "Air Conditioning",
      "Smart TV",
    ],
    image:
      "https://highlandhotel.in/wp-content/uploads/2024/09/53-1536x1024.jpg",
    size: "Executive Suite",
    price: "Contact for Rates",
    href: "/rooms/executive-suite",
  },
  {
    id: "executive-twin-suite",
    number: "02",
    title: "Executive Twin Suite",
    tagline:
      "Spacious accommodation with twin bedding, suited for families and shared stays.",
    amenities: [
      "Twin Beds",
      "High-Speed Wi-Fi",
      "Air Conditioning",
      "Work Desk",
    ],
    image:
      "https://highlandhotel.in/wp-content/uploads/2024/09/59-1536x1024.jpg",
    size: "Executive Twin Suite",
    price: "Contact for Rates",
    href: "/rooms/executive-twin-suite",
  },
  {
    id: "wellness",
    number: "03",
    title: "Wellness Experiences",
    tagline:
      "Complement your stay with Highland's Ayurveda, Naturopathy, Yoga and Acupuncture experiences.",
    amenities: [
      "Ayurveda",
      "Naturopathy",
      "Yoga",
      "Acupuncture",
    ],
    image:
      "https://highlandhotel.in/wp-content/uploads/2024/09/55-1536x1024.jpg",
    size: "Wellness",
    price: "Enquire",
    href: "/wellness",
  },
];

export default function Rooms() {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const activeRoom = roomsData[activeRoomIndex];

  return (
    <section className="relative w-full bg-[#f8f7f4] text-stone-900 py-24 sm:py-32 px-6 sm:px-12 lg:px-20 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-stone-500 font-medium mb-3">
              Accommodation
            </p>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-stone-900 leading-[1.15]">
              Stay Your Way
            </h2>
          </div>

          <p className="font-sans text-stone-600 text-sm sm:text-base font-light max-w-md leading-relaxed">
            Thoughtfully designed accommodations in North Bangalore, combining
            comfort, convenience and a welcoming stay experience.
          </p>
        </div>

        {/* Main Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Vertical Room Navigation */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            <div className="space-y-3">
              {roomsData.map((room, index) => {
                const isActive = index === activeRoomIndex;

                return (
                  <button
                    key={room.id}
                    type="button"
                    onClick={() => setActiveRoomIndex(index)}
                    aria-pressed={isActive}
                    className={`w-full text-left p-6 rounded-lg transition-all duration-300 cursor-pointer border ${
                      isActive
                        ? "bg-white border-stone-300 shadow-lg"
                        : "bg-transparent border-transparent hover:bg-stone-200/40 text-stone-600"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      
                      <div className="flex items-baseline gap-4">
                        <span
                          className={`font-serif text-sm tracking-wider ${
                            isActive
                              ? "text-orange-500 font-semibold"
                              : "text-stone-400"
                          }`}
                        >
                          {room.number}
                        </span>

                        <h3
                          className={`font-serif text-xl sm:text-2xl transition-colors ${
                            isActive
                              ? "text-stone-900 font-medium"
                              : "text-stone-600"
                          }`}
                        >
                          {room.title}
                        </h3>
                      </div>

                      <span
                        className={`text-xs font-sans tracking-wider uppercase transition-opacity ${
                          isActive
                            ? "text-orange-600 opacity-100 font-medium"
                            : "opacity-0"
                        }`}
                      >
                        Selected
                      </span>
                    </div>

                    {/* Expandable Details */}
                    {isActive && (
                      <div className="mt-4 pt-4 border-t border-stone-100 transition-all duration-300">
                        <p className="font-sans text-xs sm:text-sm text-stone-600 font-light mb-3">
                          {room.tagline}
                        </p>

                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] font-sans text-stone-500 uppercase tracking-wider">
                          {room.amenities.map((item) => (
                            <span
                              key={item}
                              className="flex items-center gap-1"
                            >
                              <span className="w-1 h-1 rounded-full bg-orange-400" />
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

            {/* Bottom Card Footer */}
            <div className="pt-6 border-t border-stone-200/80 flex items-center justify-between mt-auto">
              
              <div>
                <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-stone-400 block">
                  {activeRoom.price === "Enquire"
                    ? "Availability"
                    : "Rates"}
                </span>

                <span className="font-serif text-xl font-medium text-stone-900">
                  {activeRoom.price}
                </span>
              </div>

              {/* Primary CTA */}
              <Link
                href={activeRoom.href}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold px-6 py-3.5 rounded shadow-md transition-all duration-200 hover:shadow-lg"
              >
                <span>
                  {activeRoom.id === "wellness"
                    ? "Explore Wellness"
                    : "Explore Room"}
                </span>

                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Dynamic Image Showcase */}
          <div className="lg:col-span-7 relative min-h-[420px] sm:min-h-[520px] rounded-lg overflow-hidden border border-stone-200 shadow-xl bg-stone-200">
            
            {roomsData.map((room, index) => (
              <div
                key={room.id}
                className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                  index === activeRoomIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105 pointer-events-none"
                }`}
              >
                <Image
                  src={room.image}
                  alt={`${room.title} at Highland Hotel`}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />

                {/* Subtle Specification Badge */}
                <div className="absolute top-6 right-6 bg-stone-950/70 backdrop-blur-md text-white text-[11px] font-sans uppercase tracking-widest px-3.5 py-1.5 rounded">
                  {room.size}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}