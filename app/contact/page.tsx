"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Send,
  Lock,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Train,
  Plane,
  Bus,
  Compass,
  Building,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/Highlandhotel.info/" },
    { label: "Instagram", href: "https://www.instagram.com/highland__hotel/" },
    { label: "X-Twitter", href: "https://twitter.com/Highland__hotel" },
    { label: "YouTube", href: "http://www.youtube.com/@HIGH-LANDHOTEL" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/high-land-hotel/?" },
  ];

  const travelTimes = [
    { title: "Bus Stop", route: "Hotel to Bus Stop", time: "2 Min", icon: Bus },
    { title: "Railway Station", route: "Hotel to Station", time: "10 Min", icon: Train },
    { title: "Metro Station", route: "Hotel to Metro", time: "13 Min", icon: Compass },
    { title: "Airport", route: "Hotel to Airport", time: "50 Min", icon: Plane },
  ];

  const nearestStations = [
    { label: "City Center", value: "MG Road", icon: Building },
    { label: "Metro Station", value: "Nagasandra & Dasarahalli", icon: Compass },
    { label: "Railway Station", value: "Yeshwanthpur & Chikkabanavara", icon: Train },
    { label: "Airport", value: "Kempegowda International Airport", icon: Plane },
  ];

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1B1917] antialiased selection:bg-[#1B1917] selection:text-[#FDFBF7] overflow-x-hidden pt-28 sm:pt-36">
      <Navbar />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* =========================================================
            01 - HEADER (CLEAN & DIRECT)
        ========================================================== */}
        <section className="pb-10 border-b border-[#E5E0D5]">
          <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#7A6E58] font-semibold block mb-2">
            The Luxury Hotel &bull; General Enquiries
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight">
              Contact Us <br />
              <span className="italic font-light text-[#7A6E58]">
                Stay in our luxury Suites &amp; rooms
              </span>
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#1B1917]/70 max-w-md font-light leading-relaxed">
              Kindly connect with us for room reservations, dining queries, and banquet arrangements.
            </p>
          </div>
        </section>

        {/* =========================================================
            02 - DIRECT CHANNELS & MESSAGE FORM
        ========================================================== */}
        <section className="py-14 sm:py-20 border-b border-[#E5E0D5]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left: Contact Info (Point to Point) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#7A6E58] font-semibold block mb-1">
                  Highland Hotel
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal">
                  General Enquiries
                </h2>
              </div>

              {/* Reservations */}
              <div className="p-6 rounded-2xl bg-[#FAF7F0] border border-[#E5E0D5]">
                <div className="flex items-center gap-2 text-[#7A6E58] mb-1.5">
                  <Phone className="w-4 h-4" />
                  <span className="font-sans text-xs uppercase tracking-wider font-semibold">
                    Reservation
                  </span>
                </div>
                <div className="font-mono text-sm sm:text-base font-medium">
                  <a href="tel:+919035034418" className="hover:underline">
                    +91 90350 34418
                  </a>
                  <span className="text-[#7A6E58] mx-2">/</span>
                  <a href="tel:+917619231899" className="hover:underline">
                    7619231899
                  </a>
                </div>
              </div>

              {/* Helpline */}
              <div className="p-6 rounded-2xl bg-[#FAF7F0] border border-[#E5E0D5]">
                <div className="flex items-center gap-2 text-[#7A6E58] mb-1.5">
                  <Phone className="w-4 h-4" />
                  <span className="font-sans text-xs uppercase tracking-wider font-semibold">
                    Helpline
                  </span>
                </div>
                <div className="font-mono text-sm sm:text-base font-medium">
                  <a href="tel:08028396918" className="hover:underline">
                    080-28396918
                  </a>
                  <span className="text-[#7A6E58] mx-2">/</span>
                  <a href="tel:08028391199" className="hover:underline">
                    28391199
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="p-6 rounded-2xl bg-[#FAF7F0] border border-[#E5E0D5]">
                <div className="flex items-center gap-2 text-[#7A6E58] mb-1.5">
                  <Mail className="w-4 h-4" />
                  <span className="font-sans text-xs uppercase tracking-wider font-semibold">
                    General Email
                  </span>
                </div>
                <div className="font-mono text-sm sm:text-base font-medium">
                  <a href="mailto:bookings@highlandhotel.in" className="hover:underline">
                    bookings@highlandhotel.in
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#7A6E58] font-semibold block mb-3">
                  Connect With Us
                </span>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E0D5] hover:border-[#1B1917] text-xs font-sans hover:bg-[#1B1917] hover:text-[#FDFBF7] transition-all"
                    >
                      <span>{s.label}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E0D5]">
              <div className="mb-6">
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#7A6E58] font-semibold block mb-1">
                  Have Question?
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal">
                  We love To Hear From You!
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#1B1917]/70 font-light mt-1">
                  Kindly connect with us.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 bg-[#FAF7F0] rounded-2xl border border-[#E5E0D5] p-6">
                  <CheckCircle2 className="w-10 h-10 text-[#7A6E58] mx-auto" />
                  <h4 className="font-serif text-2xl">Message Dispatched</h4>
                  <p className="font-sans text-xs sm:text-sm text-[#1B1917]/70 font-light max-w-sm mx-auto">
                    Thank you for reaching out. Our front desk will contact you shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-3 px-6 py-2.5 rounded-xs bg-[#1B1917] text-[#FDFBF7] text-xs uppercase tracking-widest font-sans font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="block text-[11px] font-sans uppercase tracking-wider text-[#7A6E58] font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-lg bg-[#FAF7F0] border border-[#E0D9CB] focus:border-[#1B1917] text-sm outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-sans uppercase tracking-wider text-[#7A6E58] font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@domain.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#FAF7F0] border border-[#E0D9CB] focus:border-[#1B1917] text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="block text-[11px] font-sans uppercase tracking-wider text-[#7A6E58] font-medium">
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 00000 00000"
                        className="w-full px-4 py-3 rounded-lg bg-[#FAF7F0] border border-[#E0D9CB] focus:border-[#1B1917] text-sm outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-sans uppercase tracking-wider text-[#7A6E58] font-medium">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Suites, Dining, or Banquets"
                        className="w-full px-4 py-3 rounded-lg bg-[#FAF7F0] border border-[#E0D9CB] focus:border-[#1B1917] text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-sans uppercase tracking-wider text-[#7A6E58] font-medium">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-lg bg-[#FAF7F0] border border-[#E0D9CB] focus:border-[#1B1917] text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#1B1917]/70 font-light">
                    <Lock className="w-3.5 h-3.5 text-[#7A6E58] shrink-0" />
                    <span>Your privacy is important to us. We will not share or disclose your information to anyone.</span>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#1B1917] text-[#FDFBF7] hover:bg-stone-800 px-8 py-3 rounded-xs font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>

        {/* =========================================================
            03 - PERFECT LOCATION & TRANSIT DISTANCES
        ========================================================== */}
        <section className="py-14 sm:py-20">
          
          {/* Address Header */}
          <div className="mb-10">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#7A6E58] font-semibold block mb-1">
              Bangalore North
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-4">
              Perfect Location
            </h2>
            <div className="p-6 rounded-2xl bg-[#FAF7F0] border border-[#E5E0D5]">
              <h3 className="font-serif text-base font-semibold mb-1">
                HIGHLAND HOTEL
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#1B1917]/80 font-light leading-relaxed">
                A Unit of Sangameshwara Hospitality Services Private Limited <br />
                # 4 &amp; 5, MM Heights, Opposite Sapthagiri NPS University, Sidedahalli Chikkasandra, Hesaraghatta Main Road, Bangalore-560073 India.
              </p>
            </div>
          </div>

      

          {/* Interactive Google Map */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-sans uppercase tracking-widest text-[#7A6E58] font-semibold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Map Location
              </span>
              <a
                href="https://maps.google.com/?q=Highland+Hotel+MM+Heights+Chikkasandra+Hesaraghatta+Main+Road+Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans uppercase tracking-wider text-[#1B1917] hover:underline inline-flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div className="w-full aspect-[21/9] min-h-[360px] rounded-2xl overflow-hidden border border-[#E5E0D5] bg-[#FAF7F0]">
              <iframe
                title="Highland Hotel Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.721201524316!2d77.5029306!3d13.0534289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d100c6d2645%3A0xe98ad06a01da66eb!2sHighland%20Hotel!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
              />
            </div>
          </div>

        </section>
      </div>

      {/* =========================================================
          04 - LIGHT PARCHMENT FOOTER
      ========================================================== */}
      <section className="bg-[#F2ECE1] text-[#1B1917] py-12 px-6 sm:px-12 lg:px-16 border-t border-[#DFD8CA]">
        <div className="max-w-[1720px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#1B1917]/70">
          <div>
            <p className="font-medium text-[#1B1917]">Highland Hotel Bengaluru</p>
            <p className="font-light mt-0.5">A Unit of Sangameshwara Hospitality Services Private Limited</p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link href="/term-condition" className="hover:underline">Terms &amp; Conditions</Link>
          </div>
        </div>
      </section>
    </main>
  );
}