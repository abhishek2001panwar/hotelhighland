"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Navigation } from "lucide-react";

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
  { label: "Terms and Conditions", href: "/term-condition" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#F3EDE2] text-[#3A2D21] border-t border-[#DCD3C3] overflow-hidden select-none">
      
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
          <div className="flex items-center gap-3.5 py-2.5 px-5 rounded-full bg-[#FAF7F0] border border-[#DCD3C3] w-fit shadow-2xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A1611D]/60 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#A1611D]" />
            </span>
            <span className="font-sans text-xs uppercase tracking-[0.22em] text-[#3A2D21] font-bold">
              Reception Open 24/7
            </span>
          </div>
        </div>

        {/* =========================================================
            MIDDLE ROW: 12-COL EDITORIAL SPREAD
        ========================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 py-16 border-b border-[#DCD3C3]">
          
          {/* Left Column (5 Cols): Luxury Location Dossier (Bold Contact & Location) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#A1611D] font-bold block">
              Property Location &amp; Inquiries
            </span>

            <div className="p-7 sm:p-8 rounded-2xl bg-[#FAF7F0] border border-[#DCD3C3] shadow-xs space-y-5">
              <div>
                <p className="font-serif text-2xl sm:text-[26px] text-[#3A2D21] font-bold leading-snug">
                  Highland Hotel
                </p>
                <p className="font-sans text-xs uppercase tracking-widest text-[#A1611D] font-bold mt-1">
                  A Unit of Sangameshwara Hospitality Services Pvt. Ltd.
                </p>
              </div>

              <div className="font-sans text-xs sm:text-[13px] text-[#3A2D21] font-semibold leading-relaxed">
                <p className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#A1611D] shrink-0 mt-0.5 stroke-[2.2]" />
                  <span>
                    # 4 &amp; 5, MM Heights, Opposite Sapthagiri NPS University, Sidedahalli Chikkasandra, Hesaraghatta Main Road, Bangalore-560073 India.
                  </span>
                </p>
              </div>

              {/* Bold Reservation & Landline Numbers */}
              <div className="pt-4 border-t border-[#EAE3D5] space-y-2.5">
                <div className="flex items-center gap-2 text-[#A1611D]">
                  <Phone className="w-4 h-4 stroke-[2.2]" />
                  <span className="font-sans text-xs uppercase tracking-wider font-bold">
                    For Reservations, Call:
                  </span>
                </div>
                
                <div className="font-sans text-base sm:text-lg font-bold text-[#3A2D21]">
                  <a href="tel:+919035034418" className="hover:text-[#A1611D] transition-colors">
                    +91 90350 34418
                  </a>
                  <span className="text-[#A1611D] mx-2 font-bold">/</span>
                  <a href="tel:+917619231899" className="hover:text-[#A1611D] transition-colors">
                    +91 76192 31899
                  </a>
                </div>

                <p className="font-sans text-xs sm:text-sm font-bold text-[#3A2D21]/85">
                  <a href="tel:08028396918" className="hover:text-[#A1611D] transition-colors">080 28396918</a>
                  <span className="mx-2 text-[#A1611D]">&bull;</span>
                  <a href="tel:08028391199" className="hover:text-[#A1611D] transition-colors">080 28391199</a>
                  <span className="mx-2 text-[#A1611D]">&bull;</span>
                  <a href="tel:08028396927" className="hover:text-[#A1611D] transition-colors">080 28396927</a>
                </p>
              </div>

              {/* Direction Button (#A1611D) */}
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Highland+Hotel+MM+Heights+Chikkasandra+Hesaraghatta+Main+Road+Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full bg-[#A1611D] hover:bg-[#865017] text-[#FDFBF7] px-6 py-3.5 rounded-sm font-sans text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-sm hover:shadow-md active:scale-[0.98]"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#FDFBF7] stroke-[2.2]" />
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Columns (7 Cols): Architectural Quick Links */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 lg:pl-6">
            
            {/* Column 1: The Estate & Stays */}
            <div className="space-y-4">
              <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#A1611D] font-bold block pb-2.5 border-b border-[#DCD3C3]">
                The Estate &amp; Stay
              </span>
              <nav className="flex flex-col space-y-3 font-sans text-xs sm:text-[13px] font-semibold">
                {estateLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="text-[#3A2D21] hover:text-[#A1611D] hover:translate-x-1 transition-all duration-200 w-fit flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    {item.external && (
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#A1611D] stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    )}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 2: Dining & Wellness */}
            <div className="space-y-4">
              <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#A1611D] font-bold block pb-2.5 border-b border-[#DCD3C3]">
                Gastronomy &amp; Spa
              </span>
              <nav className="flex flex-col space-y-3 font-sans text-xs sm:text-[13px] font-semibold">
                {diningWellnessLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[#3A2D21] hover:text-[#A1611D] hover:translate-x-1 transition-all duration-200 w-fit"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 3: Legal & Concierge */}
            <div className="space-y-4">
              <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#A1611D] font-bold block pb-2.5 border-b border-[#DCD3C3]">
                Journal &amp; Policies
              </span>
              <nav className="flex flex-col space-y-3 font-sans text-xs sm:text-[13px] font-semibold">
                {journalLegalLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[#3A2D21] hover:text-[#A1611D] hover:translate-x-1 transition-all duration-200 w-fit"
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs font-bold text-[#3A2D21]/80">
          <p>
            &copy; {new Date().getFullYear()} Highland Hotel Bengaluru. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 font-serif italic text-sm font-semibold text-[#A1611D]">
            <span>Where Quiet Luxury Meets Holistic Wellness</span>
          </div>
        </div>

      </div>
    </footer>
  );
}