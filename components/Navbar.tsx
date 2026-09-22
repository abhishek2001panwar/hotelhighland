"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { X, ChevronDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface SubLink {
  label: string;
  subtext: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  sublinks?: SubLink[];
}

const BOOK_NOW_URL =
  "https://bookings.resavenue.com/resBooking/availsearch?regCode=VTGA0517";

const navLinks: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "BANQUET HALL", href: "/banquet" },
  { label: "SANGAM GOSHALA", href: "/sangam" },
  {
    label: "AYURVEDA",
    href: "/ayurveda",
    sublinks: [
      {
        label: "Ayurveda Specialities",
        subtext: "Traditional therapies, consultations & Panchakarma",
        href: "/ayurveda",
      },
      {
        label: "Yoga, Naturopathy & Acupuncture",
        subtext: "Holistic meridian wellness & meditative flow",
        href: "/yoga",
      },
    ],
  },
  {
    label: "CINNAMON",
    href: "/cinnamon",
    sublinks: [
      {
        label: "Cinnamon Multicuisine Restaurant",
        subtext: "Indoor elegance & scenic balcony fine dining",
        href: "/cinnamon",
      },
      {
        label: "Culinary Menu",
        subtext: "Explore Indian, Thai & Sri Lankan selections",
        href: "/menu",
      },
    ],
  },
  { label: "COMBOS", href: "/combos" },
  { label: "CONTACT US", href: "/contact" },
];

const menuQuickLinks = [
  { label: "Blogs", href: "/blogs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Videos", href: "/videos" },
  { label: "Reservation", href: BOOK_NOW_URL, external: true },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [, setActiveDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* =========================================================
          FIXED HEADER BAR
      ========================================================== */}
      <header className="fixed top-0 left-0 w-full z-40 px-4 sm:px-8 lg:px-14 py-3 sm:py-4 bg-gradient-to-b from-black/90 via-black/50 to-transparent transition-all pointer-events-auto">
        <div className="max-w-[1720px] mx-auto flex items-center justify-between text-white gap-3 sm:gap-4">
          
          {/* Left: Brand Logo */}
          <Link
            href="/"
            className="flex items-center select-none group shrink-0"
            aria-label="Highland Hotel Home"
          >
            <div className="relative w-40 h-12 sm:w-56 sm:h-16 lg:w-64 lg:h-18 transition-transform duration-300 group-hover:scale-[1.01]">
              <Image
                src="https://highlandhotel.in/wp-content/uploads/2023/08/Untitled-design-24.png"
                alt="Highland Hotel Bengaluru Logo"
                fill
                priority
                className="object-contain object-left drop-shadow-lg"
                sizes="(max-width: 640px) 160px, (max-width: 1024px) 224px, 256px"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links + Book Now + Menu Button */}
          <div className="hidden xl:flex items-center gap-5 2xl:gap-7">
            <nav className="flex items-center gap-3.5 2xl:gap-5 font-sans text-[10px] 2xl:text-[11px] tracking-[0.22em] uppercase font-medium">
              {navLinks.map((item) => {
                const hasSublinks = !!item.sublinks;

                if (!hasSublinks) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-stone-200/90 hover:text-white transition-colors duration-200 hover:underline underline-offset-[6px] decoration-stone-300 whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className="relative group py-2"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-stone-200/90 group-hover:text-white transition-colors duration-200 group-hover:underline underline-offset-[6px] decoration-stone-300 whitespace-nowrap"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3 h-3 text-stone-400 transition-transform duration-300 group-hover:rotate-180 group-hover:text-white" />
                    </Link>

                    {/* Desktop Dropdown Flyout */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 pointer-events-none group-hover:pointer-events-auto opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <div className="w-[320px] bg-[#141414]/95 backdrop-blur-xl border border-neutral-800 rounded-xl p-3 shadow-2xl shadow-black/80 flex flex-col gap-1">
                        {item.sublinks?.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="group/item flex flex-col p-3 rounded-lg hover:bg-white/5 transition-all text-left"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-serif text-sm normal-case tracking-normal font-normal text-stone-100 group-hover/item:text-stone-300 transition-colors">
                                {sub.label}
                              </span>
                              <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-stone-300" />
                            </div>
                            <span className="font-sans text-[11px] normal-case tracking-normal font-light text-stone-400 mt-1 leading-snug">
                              {sub.subtext}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            {/* Desktop "Book Now" Button (NO BACKGROUND, PURE WHITE TEXT) */}
            <a
              href={BOOK_NOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-transparent text-white border border-white/50 hover:border-white hover:bg-white/10 px-4 py-2 rounded-xs font-sans text-[10px] 2xl:text-[11px] uppercase tracking-[0.22em] font-medium transition-all active:scale-95 whitespace-nowrap"
            >
              <span>Book Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.8]" />
            </a>

            {/* Desktop Menu Trigger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 font-sans text-[10px] 2xl:text-[11px] font-semibold tracking-[0.24em] uppercase text-white hover:text-stone-300 transition-colors py-2 px-3 rounded-xs border border-white/20 hover:border-white/40 cursor-pointer"
              aria-label="Toggle Full Menu"
            >
              <span>{isOpen ? "CLOSE" : "MENU"}</span>
              <div className="flex flex-col gap-1 w-3.5">
                <span
                  className={`h-[1.5px] w-full bg-current transition-transform duration-300 ${
                    isOpen ? "rotate-45 translate-y-[2.5px]" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] w-full bg-current transition-transform duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-[2.5px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile & Tablet Header Controls */}
          <div className="flex xl:hidden items-center gap-2.5">
            {/* Mobile "Book" Button (NO BACKGROUND, PURE WHITE TEXT) */}
            <a
              href={BOOK_NOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-transparent text-white border border-white/40 hover:border-white px-2.5 py-1.5 rounded-xs font-sans text-[10px] uppercase tracking-[0.2em] font-medium transition-all active:scale-95"
            >
              <span>Book</span>
              <ArrowUpRight className="w-3 h-3 stroke-[1.8]" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1.5 font-sans text-[10px] sm:text-[11px] font-medium tracking-[0.22em] uppercase text-white hover:text-stone-300 transition-colors py-1 px-2 border border-white/20 rounded-xs cursor-pointer focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span>{isOpen ? "CLOSE" : "MENU"}</span>
              <div className="flex flex-col gap-1 w-3.5">
                <span
                  className={`h-[1.5px] w-full bg-current transition-transform duration-300 ${
                    isOpen ? "rotate-45 translate-y-[2.5px]" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] w-full bg-current transition-transform duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-[2.5px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* =========================================================
          BACKDROP OVERLAY
      ========================================================== */}
      <div
        className={`fixed inset-0 z-40 bg-black/75 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* =========================================================
          UNIVERSAL DRAWER / MODAL (MOBILE RESPONSIVE + DESKTOP)
      ========================================================== */}
      <div
        ref={menuRef}
        className={`fixed z-50 transition-all duration-300 ease-out bg-[#111111] text-white border-neutral-800 shadow-2xl flex flex-col justify-between
          /* Mobile: Full viewport slide down / overlay */
          inset-0 sm:inset-auto sm:top-5 sm:right-6 lg:right-10 sm:w-[620px] md:w-[740px] lg:w-[860px] sm:max-h-[92vh] sm:rounded-2xl sm:border
          ${
            isOpen
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-4 sm:-translate-y-6 opacity-0 pointer-events-none"
          }`}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between p-5 sm:p-7 border-b border-neutral-800 shrink-0 bg-[#111111]">
          <div className="flex items-baseline gap-2">
            <span className="font-sans text-xs tracking-[0.24em] uppercase font-semibold text-white">
              Highland Hotel
            </span>
            <span className="font-serif italic text-xs text-stone-400">
              Bengaluru
            </span>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-1.5 font-sans text-xs font-medium tracking-[0.2em] uppercase text-stone-400 hover:text-white transition-colors cursor-pointer py-1 px-2"
          >
            <span>CLOSE</span>
            <X className="w-4 h-4 stroke-[2]" />
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="overflow-y-auto p-5 sm:p-8 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
            
            {/* Column 1: Primary Navigation */}
            <div className="md:col-span-5 flex flex-col space-y-3">
              <span className="text-[10px] font-sans tracking-[0.24em] uppercase text-stone-400 font-semibold block mb-1">
                Main Pages
              </span>
              <nav className="flex flex-col space-y-3 font-sans text-xs tracking-[0.18em] uppercase font-medium">
                {navLinks.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-stone-300 hover:text-white transition-colors duration-150 inline-block w-fit hover:underline underline-offset-4 decoration-stone-300 py-0.5"
                    >
                      {item.label}
                    </Link>

                    {/* Sub-links */}
                    {item.sublinks && (
                      <div className="pl-3 mt-1.5 flex flex-col space-y-1.5 border-l border-neutral-800">
                        {item.sublinks.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="font-serif normal-case tracking-normal text-xs text-stone-400 hover:text-white transition-colors py-0.5"
                          >
                            &bull; {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Column 2: Exclusive Quick Links */}
            <div className="md:col-span-4 md:border-l md:border-neutral-800 md:pl-6 flex flex-col space-y-3 border-t border-neutral-800 pt-6 md:border-t-0 md:pt-0">
              <span className="text-[10px] font-sans tracking-[0.24em] uppercase text-stone-400 font-semibold block mb-1">
                Explore &amp; Policies
              </span>
              <nav className="flex flex-col space-y-3 font-sans text-xs tracking-[0.16em] uppercase font-medium">
                {menuQuickLinks.map((item) => {
                  if (item.external) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-300 hover:text-white transition-colors inline-flex items-center gap-1.5 py-0.5"
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-stone-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-stone-300 w-fit py-0.5"
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Column 3: Direct Hotel Info & Book Action */}
            <div className="md:col-span-3 md:border-l md:border-neutral-800 md:pl-6 flex flex-col justify-between space-y-6 font-sans text-xs text-stone-400 leading-relaxed border-t border-neutral-800 pt-6 md:border-t-0 md:pt-0">
              <div className="space-y-2">
                <p className="font-semibold text-white text-xs uppercase tracking-wider">
                  Direct Desk
                </p>
                <div className="space-y-1.5 text-xs text-stone-300 font-light">
                  <p>
                    <a href="tel:+919035034418" className="hover:underline">
                      +91 90350 34418
                    </a>
                  </p>
                  <p>
                    <a href="tel:+917619231899" className="hover:underline">
                      +91 76192 31899
                    </a>
                  </p>
                  <p className="pt-1">
                    <a href="mailto:bookings@highlandhotel.in" className="hover:underline">
                      bookings@highlandhotel.in
                    </a>
                  </p>
                </div>
              </div>

              {/* Book Button inside modal (NO BACKGROUND, PURE WHITE TEXT) */}
              <div className="pt-2">
                <a
                  href={BOOK_NOW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-transparent text-white border border-white/50 hover:border-white hover:bg-white/10 py-3 rounded-xs font-sans text-xs uppercase tracking-[0.22em] font-medium transition-all active:scale-95"
                >
                  <span>Book Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.8]" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Footer info strip on mobile */}
        <div className="p-4 sm:p-5 border-t border-neutral-800 text-[10px] text-stone-500 font-mono text-center shrink-0">
          Highland Hotel Bengaluru &bull; All Rights Reserved
        </div>
      </div>
    </>
  );
}