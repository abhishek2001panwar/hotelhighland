"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const navLinks = [
  { label: "BUSINESS & BANQUET EVENTS", href: "/banquet-hall" },
  { label: "CONTACT US", href: "/contact-us" },
  { label: "ROOMS & SUITES", href: "/rooms" },
  { label: "CINNAMON RESTAURANT", href: "/cinnamon" },
  { label: "AYURVEDA & WELLNESS", href: "/ayurveda" },
  { label: "SANGAM GOSHALA", href: "/sangam-goshala" },
  { label: "360° VIRTUAL TOUR", href: "/virtual-tour" },
  { label: "COMBOS & OFFERS", href: "/combos" },
  { label: "TERMS AND CONDITIONS", href: "/terms-and-conditions" },
  { label: "PRIVACY POLICY", href: "/privacy-policy" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the privacy policy.");
      return;
    }
    // Newsletter registration logic
  };

  return (
    <footer className="w-full bg-[#f4f1ea] px-4 sm:px-8 lg:px-12 py-10 sm:py-16 font-sans">
      {/* Outer Floating Dark Card */}
      <div className="max-w-8xl mx-auto bg-[#111111] text-white rounded-2xl sm:rounded-3xl p-8 sm:p-14 lg:p-20 shadow-2xl">
        
        {/* Top Centered Section: Logo, Kicker, Headline, Newsletter */}
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center mb-16 sm:mb-24">
          
          {/* Official Highland Hotel Logo */}
          <div className="relative w-44 h-14 mb-8">
            <Image
              src="https://highlandhotel.in/wp-content/uploads/2023/08/Untitled-design-24.png"
              alt="Highland Hotel Bengaluru Logo"
              fill
              className="object-contain  "
              sizes="176px"
            />
          </div>

          {/* Kicker */}
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-stone-400 mb-4">
            JOIN OUR COMMUNITY
          </p>

          {/* Headline */}
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-normal leading-[1.22] tracking-tight text-stone-100 mb-8">
            Be the first to experience Highland - where luxury meets wellness. Get offers, updates and tranquil retreat stories.
          </h2>

          {/* Newsletter Input Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="relative flex items-center bg-[#212121] rounded-full p-1.5 border border-neutral-800 focus-within:border-stone-500 transition-colors">
              <input
                type="email"
                required
                placeholder="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent px-5 py-2 text-xs uppercase tracking-widest text-stone-200 placeholder-stone-500 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="w-12 h-8 rounded-full bg-white text-black hover:bg-orange-500 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </button>
            </div>

            {/* Checkbox Agree */}
            <label className="flex items-center justify-center gap-2 mt-4 text-[11px] text-stone-400 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="rounded border-stone-700 text-orange-500 focus:ring-0 focus:ring-offset-0 bg-stone-900 cursor-pointer"
              />
              <span>
                I agree to the{" "}
                <Link href="/privacy-policy" className="underline hover:text-stone-200">
                  Privacy Policy
                </Link>
              </span>
            </label>
          </form>
        </div>

        {/* Lower Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-14 pb-14 border-b border-neutral-800/80">
          
          {/* Left Column: Property Legal Entity & Contact */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-6 text-xs text-stone-400 font-light leading-relaxed">
            <div className="space-y-1.5">
              <p className="font-medium text-stone-200 text-[13px] tracking-wide">
                Highland Hotel Bengaluru
              </p>
              <p className="text-stone-400">
                A Unit of Sangameshwara Hospitality Services Private Limited
              </p>
              <p className="text-stone-400 pt-1">
                #4 &amp; 5, MM Heights, Opposite Sapthagiri NPS University,<br />
                Sidedahalli Chikkasandra, Hesaraghatta Main Road,<br />
                Bangalore - 560073, Karnataka, India.
              </p>
              <p className="text-stone-500 text-[11px] pt-1">
                GST / VAT: 29AAECS1234F1Z5
              </p>
            </div>

            {/* Phone & Email */}
            <div className="space-y-1 text-stone-300">
              <p>
                <a href="mailto:info@highlandhotel.in" className="hover:text-white transition-colors">
                  info@highlandhotel.in
                </a>
              </p>
              <p>
                <a href="tel:+919035034418" className="hover:text-white transition-colors">
                  T: +91 90350 34418 / +91 76192 31899
                </a>
              </p>
              <p className="text-stone-400 text-[11px]">
                Landline: 080 28396918 / 28391199 / 28396927
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded bg-white text-black flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
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
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Bullet-Pointed Navigation Links */}
          <div className="md:col-span-6 md:border-l md:border-neutral-800/80 md:pl-10 lg:pl-14">
            <nav className="flex flex-col space-y-2.5">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2.5 text-xs tracking-[0.16em] uppercase font-medium text-stone-300 hover:text-white transition-colors w-fit group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-500 group-hover:bg-orange-400 transition-colors" />
                  <span className="group-hover:underline underline-offset-4">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>

        </div>

        {/* Sub-Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] uppercase tracking-widest text-stone-500 gap-4">
          <div className="flex flex-wrap items-center gap-3 text-center sm:text-left">
            <span>ALL RIGHTS RESERVED HIGHLAND HOTEL&reg;</span>
            <span>&bull;</span>
            <Link href="/privacy-policy" className="hover:text-stone-300 transition-colors">
              PRIVACY POLICY
            </Link>
            <span>&bull;</span>
            <Link href="/terms-and-conditions" className="hover:text-stone-300 transition-colors">
              TERMS AND CONDITIONS
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <span>CODE &amp; DESIGN &bull;</span>
            <span className="text-stone-300 font-semibold">HIGHLAND HOSPITALITY</span>
          </div>
        </div>

      </div>
    </footer>
  );
}