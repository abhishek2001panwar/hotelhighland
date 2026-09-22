"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowUpRight,
  Tv,
  Wifi,
  Coffee,
  Check,
  Bed,
  Wind,
  ShieldCheck,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const BOOK_NOW_URL =
  "https://bookings.resavenue.com/resBooking/availsearch?regCode=VTGA0517";

const suites = [
  {
    number: "01",
    name: "Executive Suite Room",
    category: "Master King Suite",
    inventory: "36 Suites Available",
    dimensions: "360 sq. ft (33.5 sq. m)",
    bed: "Plush King Bed • 10-Inch Orthopedic Restorative Sleep System",
    occupancy: "Up to 2 Adults + 1 Child",
    view: "Bengaluru Skyline & Green Tree Canopies",
    description:
      "Crafted for business leaders and travelers who value restorative stillness. Floor-to-ceiling glass invites warm daylight over custom honey teakwood furniture, an executive work table, and an acoustically insulated master bedroom.",
    image:
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202405021653296251-fa2274cd-4e3f-4a7f-8b82-cf43d942e545.jpg",
    amenities: [
      "10-inch restorative posture mattress",
      "Android Smart TV with HD streaming",
      "Complimentary high-speed fiber Wi-Fi",
      "Round-the-clock in-room dining",
      "Rain shower with organic herbal toiletries",
      "Artisanal coffee and tea station",
      "Electronic laptop-sized digital safe",
      "Full acoustic sound insulation",
    ],
  },
  {
    number: "02",
    name: "Executive Twin Suite",
    category: "Twin Configuration",
    inventory: "06 Suites Available",
    dimensions: "335 sq. ft (31 sq. m)",
    bed: "Two Twin Posture-Pedic Beds",
    occupancy: "Up to 2 Adults",
    view: "Campus Greenery & Quiet Courtyard",
    description:
      "Engineered specifically for corporate colleagues and conference delegates. Two independently positioned restorative twin beds with separate reading lights, dedicated device charging ports, and a shared executive workspace.",
    image:
      "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/202405021653296251-17dedc59-af12-43f0-ab84-b1259f5ca6ec.jpg",
    amenities: [
      "Two individual orthopedic posture beds",
      "Android Smart TV with satellite feeds",
      "Executive desk with ergonomic armchair",
      "Individual whisper-quiet air conditioning",
      "Same-day laundry and pressing service",
      "Spacious wardrobe and vanity dressing",
      "Daily bottled mountain spring water",
      "Direct line to 24/7 concierge desk",
    ],
  },
];

const standards = [
  {
    icon: Bed,
    title: "10\" Orthopedic Mattresses",
    desc: "Every suite is equipped with specialized sleep systems designed for spinal alignment and deep recovery.",
  },
  {
    icon: Wind,
    title: "Whisper Climate Control",
    desc: "Silent, independently governed dual-zone cooling with integrated continuous air filtration.",
  },
  {
    icon: Tv,
    title: "Connected Smart Entertainment",
    desc: "Wall-mounted high-definition Android smart screens ready for personal streaming accounts.",
  },
  {
    icon: Wifi,
    title: "Dedicated Fiber Internet",
    desc: "Enterprise-grade high-throughput Wi-Fi coverage across all 42 suites and work tables.",
  },
  {
    icon: Coffee,
    title: "In-Suite Refreshment Bar",
    desc: "Electric brewing kettle, artisan roasted filter blends, and hand-selected herbal infusions.",
  },
  {
    icon: ShieldCheck,
    title: "Discreet Safety Architecture",
    desc: "RFID smart access locks, 24-hour monitored security, and in-room digital personal safes.",
  },
];

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1B1917] antialiased selection:bg-[#1B1917] selection:text-[#FDFBF7] overflow-x-hidden pt-28 sm:pt-36">
      <Navbar />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* =========================================================
            01 - MINIMAL EDITORIAL MASTHEAD
        ========================================================== */}
        <section className="pb-16 border-b border-[#E5E0D5]">
          <div className="flex items-center gap-2 mb-3">
          
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#7A6E58] font-semibold">
              The Accommodations &bull; Highland Hotel Bengaluru
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.04] tracking-tight text-[#1B1917]">
                Rooms &amp; Suites <br />
                <span className="italic font-light text-[#7A6E58]">
                  42 Keys of Quiet Sanctuary
                </span>
              </h1>
            </div>

            <div className="text-xs sm:text-[13px] font-sans text-[#1B1917]/70 lg:text-right max-w-md font-light leading-relaxed">
              Thoughtfully arranged over dedicated executive levels, our 42 keys balance restorative orthopedic comfort with unhurried residential privacy in North Bangalore.
            </div>
          </div>

          {/* Key Facts Strip */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#EAE3D5]">
            <div className="border-l border-[#DCD3C3] pl-5">
              <span className="font-serif text-3xl sm:text-4xl font-light text-[#1B1917]">42</span>
              <p className="font-sans text-[11px] uppercase tracking-wider text-[#7A6E58] mt-1 font-medium">
                Total Keys
              </p>
            </div>
            <div className="border-l border-[#DCD3C3] pl-5">
              <span className="font-serif text-3xl sm:text-4xl font-light text-[#1B1917]">36</span>
              <p className="font-sans text-[11px] uppercase tracking-wider text-[#7A6E58] mt-1 font-medium">
                Executive King Suites
              </p>
            </div>
            <div className="border-l border-[#DCD3C3] pl-5">
              <span className="font-serif text-3xl sm:text-4xl font-light text-[#1B1917]">06</span>
              <p className="font-sans text-[11px] uppercase tracking-wider text-[#7A6E58] mt-1 font-medium">
                Executive Twin Suites
              </p>
            </div>
            <div className="border-l border-[#DCD3C3] pl-5">
              <span className="font-serif text-3xl sm:text-4xl font-light text-[#1B1917]">10&quot;</span>
              <p className="font-sans text-[11px] uppercase tracking-wider text-[#7A6E58] mt-1 font-medium">
                Orthopedic Sleep Systems
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            02 - THE SUITES DOSSIER (BOTH ROOMS VISIBLE)
        ========================================================== */}
        <section className="py-20 sm:py-28 space-y-24 border-b border-[#E5E0D5]">
          {suites.map((item, index) => (
            <div
              key={item.name}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              
              {/* Photo Canvas */}
              <div
                className={`lg:col-span-7 relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-stone-900 border border-[#E5E0D5] shadow-xs group ${
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  priority={index === 0}
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  style={{
                    imageRendering: "-webkit-optimize-contrast",
                  }}
                />

                <div className="absolute top-5 left-5 z-10">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#1B1917] bg-[#FAF7F0]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E5E0D5]">
                    {item.inventory}
                  </span>
                </div>
              </div>

              {/* Text & Specification Editorial */}
              <div
                className={`lg:col-span-5 space-y-6 ${
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#7A6E58]">
                    <span>Suite {item.number}</span>
                    <span>&bull;</span>
                    <span className="uppercase tracking-widest">{item.category}</span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#1B1917] font-normal leading-snug">
                    {item.name}
                  </h2>
                </div>

                <p className="font-sans text-xs sm:text-sm text-[#1B1917]/75 font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Subtle Specs Block */}
                <div className="py-3 border-y border-[#EAE3D5] space-y-2 text-xs font-sans">
                  <div className="flex justify-between text-[#1B1917]/70">
                    <span>Floor Area</span>
                    <span className="font-medium text-[#1B1917]">{item.dimensions}</span>
                  </div>
                  <div className="flex justify-between text-[#1B1917]/70">
                    <span>Sleeping Arrangement</span>
                    <span className="font-medium text-[#1B1917] text-right">{item.bed}</span>
                  </div>
                  <div className="flex justify-between text-[#1B1917]/70">
                    <span>Aspect</span>
                    <span className="font-medium text-[#1B1917]">{item.view}</span>
                  </div>
                </div>

                {/* Micro Amenity Pills */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {item.amenities.slice(0, 6).map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-2 text-[11px] font-sans text-[#1B1917]/80"
                    >
                      <Check className="w-3 h-3 text-[#7A6E58] shrink-0 stroke-[2.5]" />
                      <span className="truncate">{amenity}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={BOOK_NOW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#1B1917] hover:bg-stone-800 text-[#FDFBF7] px-7 py-3 rounded-xs font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-xs active:scale-95"
                  >
                    <span>Reserve Suite</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-[#1B1917] hover:text-[#7A6E58] transition-colors py-2"
                  >
                    <span>Enquire Availability</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </section>

        {/* =========================================================
            03 - THE HIGHLAND STAY STANDARDS
        ========================================================== */}
        <section className="py-20 sm:py-28 border-b border-[#E5E0D5]">
          <div className="max-w-3xl mb-14">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#7A6E58] font-semibold block mb-2">
              Bespoke Hospitality
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1B1917] font-normal leading-snug">
              Every detail engineered for your comfort
            </h2>
            <p className="font-sans text-[#1B1917]/70 text-xs sm:text-sm font-light mt-2 max-w-xl">
              From orthopedic spinal alignment to discreet acoustic isolation, every stay element is tailored to promote deep rest and quiet focus.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {standards.map((std) => {
              const Icon = std.icon;
              return (
                <div
                  key={std.title}
                  className="p-8 rounded-2xl bg-white border border-[#E5E0D5] space-y-3 shadow-2xs hover:border-[#1B1917]/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] border border-[#E5E0D5] flex items-center justify-center text-[#7A6E58]">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="font-serif text-lg text-[#1B1917] font-normal">
                    {std.title}
                  </h3>
                  <p className="font-sans text-xs text-[#1B1917]/70 font-light leading-relaxed">
                    {std.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================
            04 - CHECK-IN PROTOCOL & CONCIERGE ASSISTANCE
        ========================================================== */}
        <section className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-3xl bg-[#FAF7F0] border border-[#E5E0D5]">
            <div className="lg:col-span-8 space-y-3">
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#7A6E58] font-semibold block">
                Reception Protocol
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1B1917] font-normal">
                Check-in: 1:00 PM &bull; Check-out: 11:00 AM
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#1B1917]/75 font-light leading-relaxed max-w-2xl">
                Early check-in and late departures are facilitated subject to prior room availability. A valid government photo ID (Passport, Aadhaar, or Driving License) is required for each registered guest at check-in.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#7A6E58] pt-2">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 90350 34418</span>
                </span>
                <span>/</span>
                <span>+91 76192 31899</span>
                <span>&bull;</span>
                <span>Landline: 080 28396918</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href={BOOK_NOW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1B1917] hover:bg-stone-800 text-[#FDFBF7] py-3.5 rounded-xs font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-xs active:scale-95 text-center"
              >
                <span>Book Direct on ResAvenue</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-white border border-[#E5E0D5] hover:border-[#1B1917] text-[#1B1917] py-3.5 rounded-xs font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all text-center"
              >
                <span>Corporate &amp; Group Enquiries</span>
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* =========================================================
          05 - CLEAN PARCHMENT FOOTER STRIP
      ========================================================== */}
      <section className="bg-[#F2ECE1] text-[#1B1917] py-14 px-6 sm:px-12 lg:px-16 border-t border-[#DFD8CA]">
        <div className="max-w-[1720px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#1B1917]/70">
          <div>
            <p className="font-medium text-[#1B1917]">Highland Hotel Bengaluru</p>
            <p className="font-light mt-0.5">
              #4 &amp; 5, MM Heights, Opposite Sapthagiri NPS University, Hesaraghatta Main Road
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/cinnamon" className="hover:underline">Cinnamon Dining</Link>
            <Link href="/banquet" className="hover:underline">Banquet Hall</Link>
            <Link href="/contact" className="hover:underline">Contact Concierge</Link>
          </div>
        </div>
      </section>
    </main>
  );
}