"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Sparkles, X } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "BANQUET HALL", href: "/banquet" },
  { label: "SANGAM GOSHALA", href: "/goshala" },
  { label: "AYURVEDA & SPA", href: "/ayurveda" },
  { label: "CINNAMON RESTAURANT", href: "/dining" },
  { label: "COMBOS & OFFERS", href: "/combos" },
  { label: "PRACTICAL INFO", href: "/info" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Edge-to-edge fixed header with subtle top shadow */}
      <header className="fixed top-0 left-0 w-full z-40 px-6 sm:px-12 py-7 bg-gradient-to-b from-black/80 via-black/30 to-transparent transition-all pointer-events-auto">
        <div className="w-full grid grid-cols-3 items-center text-white">
          
          {/* Left: Star Emblem & Clean Slogan */}
          <div className="flex items-center gap-2.5 justify-self-start">
            <Sparkles className="w-3.5 h-3.5 text-white/90" />
            <span className="font-sans text-[11px] sm:text-[12px] font-medium tracking-[0.24em] uppercase text-white/90">
              Where Luxury Meets Hospitality
            </span>
          </div>

          {/* Center: Brand Identity */}
          <Link
            href="/"
            className="justify-self-center flex items-baseline gap-1.5 select-none group"
          >
            <span className="font-sans text-lg sm:text-xl font-medium tracking-[0.28em] uppercase text-white transition-opacity group-hover:opacity-85">
              Highland
            </span>
            <span className="font-serif italic font-light text-xl sm:text-2xl text-stone-200 lowercase tracking-normal">
              hotel
            </span>
          </Link>

          {/* Right: Minimal MENU Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="justify-self-end flex items-center gap-2 font-sans text-xs font-medium tracking-[0.24em] uppercase text-white hover:text-stone-300 transition-colors py-1 cursor-pointer focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span>{isOpen ? "CLOSE" : "MENU"}</span>
            <div className="flex flex-col gap-1 w-4">
              <span className="h-[1.5px] w-full bg-white transition-transform duration-200" />
              <span className="h-[1.5px] w-full bg-white transition-transform duration-200" />
            </div>
          </button>
        </div>
      </header>

      {/* Backdrop overlay for smooth focus */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-500 ease-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Floating Card Menu (Farmform exact style) */}
      <div
        ref={menuRef}
        className={`fixed top-4 right-4 sm:top-6 sm:right-10 z-50 w-[calc(100vw-2rem)] sm:w-[650px] bg-black text-white rounded-md border border-neutral-800 shadow-2xl p-7 sm:p-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen
            ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
            : "-translate-y-6 opacity-0 scale-[0.98] pointer-events-none"
        }`}
      >
        {/* Top Header of the Menu Box */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-neutral-900">
          <div className="flex items-center gap-2">
            <span className="font-sans text-xs tracking-[0.24em] uppercase font-semibold text-white">
              Highland
            </span>
            <span className="font-serif italic text-sm text-stone-400">
              bengaluru
            </span>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-1.5 font-sans text-xs font-medium tracking-[0.22em] uppercase text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>MENU</span>
            <X className="w-3.5 h-3.5 stroke-[2]" />
          </button>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          
          {/* Left Column: Property Details & Contact */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-6 font-sans text-[12px] text-stone-400 leading-relaxed">
            <div className="space-y-1.5">
              <p className="font-medium text-white text-xs tracking-wider uppercase">
                Highland Hotel La Mama
              </p>
              <p className="text-stone-300 font-light">
                #4 &amp; 5, MM Heights, Opp. Sapthagiri NPS University,<br />
                Chikkasandra, Hesaraghatta Main Rd,<br />
                Bengaluru, Karnataka 560090
              </p>
              <p className="text-[11px] text-stone-500 pt-1">
                GST / VAT: 29AAECS1234F1Z5
              </p>
            </div>

            <div className="space-y-1 text-stone-300">
              <p>
                <a
                  href="mailto:info@highlandhotel.in"
                  className="hover:text-white transition-colors"
                >
                  info@highlandhotel.in
                </a>
              </p>
              <p>
                <a
                  href="tel:+919035034418"
                  className="hover:text-white transition-colors"
                >
                  T: +91 90350 34418
                </a>
              </p>
            </div>

            {/* Social Squares */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-sm bg-white text-black flex items-center justify-center hover:bg-stone-200 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-sm bg-white text-black flex items-center justify-center hover:bg-stone-200 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-sm bg-white text-black flex items-center justify-center hover:bg-stone-200 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Farmform-style Navigation Links */}
          <div className="md:col-span-6 md:border-l md:border-neutral-900 md:pl-8">
            <nav className="flex flex-col space-y-4 font-sans text-xs tracking-[0.2em] uppercase font-medium">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-stone-300 hover:text-white transition-colors duration-150 inline-block w-fit hover:underline underline-offset-4 decoration-stone-500"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

        </div>
      </div>
    </>
  );
}