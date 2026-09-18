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

const navLinks: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about-us" },
  { label: "BANQUET HALL", href: "/banquet" },
  { label: "SANGAM GOSHALA", href: "/sangam-goshala" },
  {
    label: "AYURVEDA",
    href: "/ayurveda",
    sublinks: [
      {
        label: "Ayurveda Specialities",
        subtext: "Traditional therapies, consultations & Panchakarma",
        href: "/ayurveda#specialities",
      },
      {
        label: "Yoga, Naturopathy & Acupuncture",
        subtext: "Holistic meridian wellness & meditative flow",
        href: "/wellness",
      },
    ],
  },
  {
    label: "CINNAMON",
    href: "/dining",
    sublinks: [
      {
        label: "Cinnamon Multicuisine Restaurant",
        subtext: "Indoor elegance & scenic balcony fine dining",
        href: "/dining",
      },
      {
        label: "Culinary Menu",
        subtext: "Explore Indian, Thai & Sri Lankan selections",
        href: "/dining#menu",
      },
    ],
  },
  { label: "COMBOS", href: "/combos" },
  { label: "CONTACT US", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
      {/* Fixed Header Bar */}
      <header className="fixed top-0 left-0 w-full z-40 px-5 sm:px-10 lg:px-14 py-3 sm:py-5 bg-gradient-to-b from-black/90 via-black/50 to-transparent transition-all pointer-events-auto">
        <div className="max-w-8xl mx-auto flex items-center justify-between text-white">
          
          {/* Left: Brand Logo */}
          <Link
            href="/"
            className="flex items-center select-none group shrink-0"
            aria-label="Highland Hotel Home"
          >
            <div className="relative w-52 h-16 sm:w-64 sm:h-20 lg:w-72 lg:h-22 transition-transform duration-300 group-hover:scale-[1.01]">
              <Image
                src="https://highlandhotel.in/wp-content/uploads/2023/08/Untitled-design-24.png"
                alt="Highland Hotel Bengaluru Logo"
                fill
                priority
                className="object-contain object-left drop-shadow-lg"
                sizes="(max-width: 640px) 208px, (max-width: 1024px) 256px, 288px"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links with Dropdowns */}
          <div className="hidden xl:flex items-center">
            <nav className="flex items-center gap-5 2xl:gap-7 font-sans text-[10px] tracking-[0.24em] uppercase font-medium">
              {navLinks.map((item) => {
                const hasSublinks = !!item.sublinks;

                if (!hasSublinks) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-stone-200/90 hover:text-white transition-colors duration-200 hover:underline underline-offset-[6px] decoration-orange-400"
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
                    {/* Parent Menu Anchor */}
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-stone-200/90 group-hover:text-white transition-colors duration-200 group-hover:underline underline-offset-[6px] decoration-orange-400"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3 h-3 text-stone-400 transition-transform duration-300 group-hover:rotate-180 group-hover:text-orange-400" />
                    </Link>

                    {/* Desktop Hover Flyout */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 pointer-events-none group-hover:pointer-events-auto opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <div className="w-[320px] bg-[#141414]/95 backdrop-blur-xl border border-neutral-800 rounded-xl p-3 shadow-2xl shadow-black/80 flex flex-col gap-1">
                        {item.sublinks?.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="group/item flex flex-col p-3 rounded-lg hover:bg-white/5 transition-all text-left"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-serif text-sm normal-case tracking-normal font-normal text-stone-100 group-hover/item:text-orange-400 transition-colors">
                                {sub.label}
                              </span>
                              <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-orange-400" />
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
          </div>

          {/* Mobile & Tablet MENU Trigger */}
          <div className="flex xl:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 font-sans text-[11px] font-medium tracking-[0.24em] uppercase text-white hover:text-orange-400 transition-colors py-1 cursor-pointer focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span>{isOpen ? "CLOSE" : "MENU"}</span>
              <div className="flex flex-col gap-1 w-4">
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

      {/* Mobile/Tablet Backdrop overlay */}
      <div
        className={`xl:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-xs transition-opacity duration-500 ease-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile/Tablet Floating Menu Modal */}
      <div
        ref={menuRef}
        className={`xl:hidden fixed top-3 inset-x-3 sm:inset-x-auto sm:top-6 sm:right-8 z-50 w-auto sm:w-[580px] md:w-[660px] max-h-[92vh] overflow-y-auto bg-[#111111] text-white rounded-xl border border-neutral-800 shadow-2xl p-6 sm:p-9 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen
            ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
            : "-translate-y-6 opacity-0 scale-[0.98] pointer-events-none"
        }`}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-800 sticky top-0 bg-[#111111] z-10">
          <div className="flex items-baseline gap-2">
            <span className="font-sans text-xs tracking-[0.24em] uppercase font-semibold text-white">
              Highland
            </span>
            <span className="font-serif italic text-xs text-orange-400">
              bengaluru
            </span>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-1.5 font-sans text-xs font-medium tracking-[0.2em] uppercase text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>CLOSE</span>
            <X className="w-3.5 h-3.5 stroke-[2]" />
          </button>
        </div>

        {/* 2-Column Mobile Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          
          {/* Navigation Links */}
          <div className="order-1 md:order-2 md:col-span-6 md:border-l md:border-neutral-800 md:pl-8">
            <span className="text-[10px] font-sans tracking-[0.24em] uppercase text-orange-400 block mb-3 font-semibold md:hidden">
              Navigation
            </span>
            <nav className="flex flex-col space-y-3 sm:space-y-3.5 font-sans text-[11px] tracking-[0.2em] uppercase font-medium">
              {navLinks.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-stone-300 hover:text-white transition-colors duration-150 inline-block w-fit hover:underline underline-offset-4 decoration-orange-400"
                  >
                    {item.label}
                  </Link>

                  {/* Indented Mobile Sub-links */}
                  {item.sublinks && (
                    <div className="pl-3 mt-1.5 flex flex-col space-y-1.5 border-l border-neutral-800">
                      {item.sublinks.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="font-serif normal-case tracking-normal text-xs text-stone-400 hover:text-orange-400 transition-colors py-0.5"
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

          {/* Property Details & Contact */}
          <div className="order-2 md:order-1 md:col-span-6 flex flex-col justify-between space-y-6 font-sans text-xs text-stone-400 leading-relaxed border-t border-neutral-800/80 pt-6 md:border-t-0 md:pt-0">
            <div className="space-y-1.5">
              <p className="font-medium text-white text-xs tracking-wider uppercase">
                Highland Hotel
              </p>
              <p className="text-stone-400 text-[11px] sm:text-xs font-light">
                #4 &amp; 5, MM Heights, Opp. Sapthagiri NPS University,<br />
                Chikkasandra, Hesaraghatta Main Rd,<br />
                Bengaluru, Karnataka 560073
              </p>
              <p className="text-[10px] text-stone-500 pt-0.5">
                GST / VAT: 29AAECS1234F1Z5
              </p>
            </div>

            <div className="space-y-1 text-stone-300 text-xs">
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
                  T: +91 90350 34418 / +91 76192 31899
                </a>
              </p>
            </div>

            {/* Social Squares */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded bg-white text-black flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
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
                className="w-7 h-7 rounded bg-white text-black flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
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
                className="w-7 h-7 rounded bg-white text-black flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}