"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Sparkles, Navigation } from "lucide-react";

const estateLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Rooms & Suites", href: "/rooms" },
  { label: "Banquet Hall", href: "/banquet" },
  { label: "Sangam Goshala", href: "/sangam" },
  {
    label: "Reservation",
    href: "https://bookings.resavenue.com/resBooking/availsearch?regCode=VTGA0517",
    external: true,
  },
];

const diningWellnessLinks = [
  { label: "Cinnamon", href: "/cinnamon" },
  { label: "Ayurveda", href: "/ayurveda" },
  { label: "Combos", href: "/combos" },
  { label: "Culinary Menu", href: "/menu" },
  { label: "Videos", href: "/videos" },
  { label: "Gallery", href: "/gallery" },
];

const journalLegalLinks = [
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#F3EDE2] text-[#1B1917] border-t border-[#DCD3C3] overflow-hidden select-none">
      
      {/* 00 - ARCHITECTURAL BACKGROUND WATERMARK */}
      <div 
        aria-hidden="true"
        className="absolute bottom-[-4%] right-[-2%] font-serif text-[18vw] leading-none text-[#E8DFCF]/70 font-light pointer-events-none select-none tracking-[-0.04em] z-0"
      >
        HIGHLAND
      </div>

      <div className="relative z-10 max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 pt-20 sm:pt-28 pb-12">
        
        {/* =========================================================
            TOP ROW: BRAND CREST + PROPERTY STATUS
        ========================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 border-b border-[#DCD3C3]">
          <div>
           

            <Link
              href="/"
              className="inline-block relative w-56 h-16 sm:w-68 sm:h-20"
              aria-label="Highland Hotel Bengaluru Home"
            >
              <Image
                src="https://highlandhotel.in/wp-content/uploads/2023/08/Untitled-design-24.png"
                alt="Highland Hotel Logo"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 224px, 302px"
              />
            </Link>
          </div>

          {/* Property Live Desk Status Pill */}
          <div className="flex items-center gap-4 py-2 px-5 rounded-full bg-[#FAF7F0] border border-[#DCD3C3] w-fit shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#1B1917]/85 font-medium">
               Open 24/7
            </span>
          </div>
        </div>

        {/* =========================================================
            MIDDLE ROW: 12-COL EDITORIAL SPREAD
        ========================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 py-16 border-b border-[#DCD3C3]">
          
          {/* Left Column (5 Cols): Luxury Location Dossier */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#7A6E58] font-semibold block">
              Property Location &amp; Inquiries
            </span>

            <div className="p-7 sm:p-8 rounded-2xl bg-[#FAF7F0] border border-[#DCD3C3] shadow-xs space-y-5">
              <div>
                <p className="font-serif text-2xl text-[#1B1917] font-normal leading-snug">
                  Highland Hotel
                </p>
                <p className="font-sans text-xs uppercase tracking-widest text-[#7A6E58] font-medium mt-0.5">
                  A Unit of Sangameshwara Hospitality Services Pvt. Ltd.
                </p>
              </div>

              <div className="space-y-1 font-sans text-xs sm:text-[13px] text-[#1B1917]/75 font-light leading-relaxed">
                <p className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#7A6E58] shrink-0 mt-0.5" />
                  <span>
                    # 4 &amp; 5, MM Heights, Opposite Sapthagiri NPS University, Sidedahalli Chikkasandra, Hesaraghatta Main Road, Bangalore-560073 India.
                  </span>
                </p>
              </div>

              {/* Reservation Numbers */}
              <div className="pt-4 border-t border-[#EAE3D5] space-y-2">
                <div className="flex items-center gap-2 text-[#7A6E58]">
                  <Phone className="w-3.5 h-3.5" />
                  <span className="font-sans text-[11px] uppercase tracking-wider font-semibold">
                    For Reservations, Call:
                  </span>
                </div>
                
                <div className="font-mono text-sm sm:text-base font-semibold text-[#1B1917]">
                  <a href="tel:+919035034418" className="hover:text-[#7A6E58] transition-colors">
                    +91 9035034418
                  </a>
                  <span className="text-[#7A6E58] mx-2 font-normal">/</span>
                  <a href="tel:+917619231899" className="hover:text-[#7A6E58] transition-colors">
                    7619231899
                  </a>
                </div>

                <p className="font-mono text-xs sm:text-sm text-[#1B1917]/70">
                  <a href="tel:08028396918" className="hover:underline">080 28396918</a>
                  <span className="mx-1.5 text-[#7A6E58]">&bull;</span>
                  <a href="tel:08028391199" className="hover:underline">28391199</a>
                  <span className="mx-1.5 text-[#7A6E58]">&bull;</span>
                  <a href="tel:08028396927" className="hover:underline">28396927</a>
                </p>
              </div>

              {/* Direction Button */}
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Highland+Hotel+MM+Heights+Chikkasandra+Hesaraghatta+Main+Road+Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full bg-[#1B1917] hover:bg-stone-800 text-[#FDFBF7] px-6 py-3.5 rounded-xs font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md active:scale-[0.98]"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#D8CBB6]" />
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Columns (7 Cols): Architectural Quick Links */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 lg:pl-6">
            
            {/* Column 1: The Estate & Stays */}
            <div className="space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#7A6E58] font-semibold block pb-2 border-b border-[#DCD3C3]">
                The Estate &amp; Stay
              </span>
              <nav className="flex flex-col space-y-2.5 font-sans text-xs sm:text-[13px]">
                {estateLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[#1B1917]/80 hover:text-[#1B1917] hover:translate-x-1 transition-all duration-200 w-fit flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    {item.external && (
                      <ArrowUpRight className="w-3 h-3 text-[#7A6E58] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    )}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 2: Dining & Wellness */}
            <div className="space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#7A6E58] font-semibold block pb-2 border-b border-[#DCD3C3]">
                Gastronomy &amp; Spa
              </span>
              <nav className="flex flex-col space-y-2.5 font-sans text-xs sm:text-[13px]">
                {diningWellnessLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[#1B1917]/80 hover:text-[#1B1917] hover:translate-x-1 transition-all duration-200 w-fit"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 3: Legal & Concierge */}
            <div className="space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#7A6E58] font-semibold block pb-2 border-b border-[#DCD3C3]">
                Journal &amp; Policies
              </span>
              <nav className="flex flex-col space-y-2.5 font-sans text-xs sm:text-[13px]">
                {journalLegalLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[#1B1917]/80 hover:text-[#1B1917] hover:translate-x-1 transition-all duration-200 w-fit"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

          </div>

        </div>

        {/* =========================================================
            BOTTOM ROW: COPYRIGHT & BRAND SIGN-OFF
        ========================================================== */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[11px] text-[#1B1917]/60">
          <p>
            &copy; {new Date().getFullYear()} Highland Hotel Bengaluru. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 font-serif italic text-xs text-[#7A6E58]">
            <span>Where Quiet Luxury Meets Holistic Wellness</span>
          </div>
        </div>

      </div>
    </footer>
  );
}