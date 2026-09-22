"use client";

import Link from "next/link";
import { Sparkles, ShieldCheck, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function PrivacyPolicyPage() {
  const sections = [
    { id: "overview", label: "Overview & Scope" },
    { id: "data-collection", label: "Information We Collect" },
    { id: "how-we-use", label: "How We Use Information" },
    { id: "reservations", label: "Reservations & Payments" },
    { id: "data-sharing", label: "Third-Party Sharing" },
    { id: "cookies", label: "Cookies & Analytics" },
    { id: "guest-rights", label: "Your Rights & Choices" },
    { id: "contact-dpo", label: "Contact Concierge" },
  ];

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1B1917] antialiased selection:bg-[#1B1917] selection:text-[#FDFBF7] overflow-x-hidden pt-28 sm:pt-36">
      
      <Navbar />
      {/* =========================================================
          01 - CLEAN TYPOGRAPHIC HEADER (NO HERO IMAGE)
      ========================================================== */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto pb-12 border-b border-[#E5E0D5]">
        <div className="flex items-center gap-2 mb-3">
       
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#7A6E58] font-semibold">
            Highland Hotel &bull; Legal Compliance
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.05] tracking-[-0.035em] text-[#1B1917]">
              Privacy <br />
              <span className="italic font-light text-[#7A6E58]">&amp; Cookie Policy</span>
            </h1>
          </div>

          <div className="text-xs font-mono text-[#7A6E58] lg:text-right space-y-1">
            <p>Effective Date: January 1, 2026</p>
            <p>Last Revised: September 2026</p>
          </div>
        </div>
      </section>

      {/* =========================================================
          02 - EDITORIAL 2-COLUMN LEGAL LAYOUT
      ========================================================== */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Sticky Table of Contents */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-32 p-6 rounded-2xl bg-[#FAF7F0] border border-[#E5E0D5]">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#EAE4D7]">
                <ShieldCheck className="w-4 h-4 text-[#7A6E58]" />
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#1B1917] font-semibold">
                  Policy Sections
                </span>
              </div>

              <nav className="space-y-2 font-sans text-xs">
                {sections.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-[#1B1917]/70 hover:text-[#1B1917] hover:translate-x-1 transition-all py-1"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-[#EAE4D7] text-[11px] font-sans text-[#1B1917]/60 space-y-2">
                <p>Have questions regarding guest data confidentiality?</p>
                <a
                  href="mailto:bookings@highlandhotel.in"
                  className="inline-flex items-center gap-1 text-[#1B1917] font-medium hover:underline"
                >
                  <span>bookings@highlandhotel.in</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column: Full Legal Content */}
          <div className="lg:col-span-8 space-y-14 font-sans text-sm sm:text-[15px] text-[#1B1917]/85 font-light leading-[1.8]">
            
            {/* Section 01 */}
            <article id="overview" className="scroll-mt-36 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1B1917] font-normal pb-2 border-b border-[#EAE4D7]">
                1. Overview &amp; Scope
              </h2>
              <p>
                Highland Hotel (a unit of Sangameshwara Hospitality Services Private Limited) respects the trust our guests place in us. This Privacy Policy details how we gather, utilize, store, and safeguard your personal data when you visit our premises, book accommodations or dining suites, access our website, or interact with our concierge.
              </p>
              <p>
                By accessing our services or reserving rooms via our website or authorized booking engines, you consent to the handling of your data in accordance with this document and prevailing Indian data protection regulations.
              </p>
            </article>

            {/* Section 02 */}
            <article id="data-collection" className="scroll-mt-36 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1B1917] font-normal pb-2 border-b border-[#EAE4D7]">
                2. Information We Collect
              </h2>
              <p>
                To provide hospitality services and comply with statutory hospitality records, we collect:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#1B1917]/80">
                <li>
                  <strong>Guest Identity &amp; Contact:</strong> Full legal name, date of birth, postal address, email address, telephone numbers, and government-approved identity proofs (Aadhaar, Passport, or Driving License as required for hotel check-in under Indian law).
                </li>
                <li>
                  <strong>Transaction &amp; Stay History:</strong> Room category booked, arrival and departure schedules, dietary allergies or preferences, wellness inquiries at KEVA Ayurveda, and event details for banquet reservations.
                </li>
                <li>
                  <strong>Payment Information:</strong> Credit/debit card numbers, billing addresses, and UPI references processed securely via encrypted gateway providers.
                </li>
                <li>
                  <strong>Technical Browsing Data:</strong> IP address, device type, browser settings, operating platform, and user interaction sessions collected via cookies.
                </li>
              </ul>
            </article>

            {/* Section 03 */}
            <article id="how-we-use" className="scroll-mt-36 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1B1917] font-normal pb-2 border-b border-[#EAE4D7]">
                3. How We Use Your Information
              </h2>
              <p>
                We use collected information strictly to fulfill legitimate operational, regulatory, and hospitality obligations:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-[#FAF7F0] border border-[#E5E0D5]">
                  <h3 className="font-serif text-base text-[#1B1917] font-medium mb-1">
                    Hospitality Delivery
                  </h3>
                  <p className="text-xs text-[#1B1917]/70 font-light">
                    Managing reservations, processing billing, verifying guest check-ins, and tailoring personalized suite experiences.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-[#FAF7F0] border border-[#E5E0D5]">
                  <h3 className="font-serif text-base text-[#1B1917] font-medium mb-1">
                    Statutory Compliance
                  </h3>
                  <p className="text-xs text-[#1B1917]/70 font-light">
                    Maintaining official guest registries (Form-C for international travelers) and adhering to local law enforcement mandates.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 04 */}
            <article id="reservations" className="scroll-mt-36 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1B1917] font-normal pb-2 border-b border-[#EAE4D7]">
                4. Reservations &amp; Payment Security
              </h2>
              <p>
                Online accommodation reservations are executed through our integration with <strong>ResAvenue</strong> (or certified payment processors). All financial transactions utilize 256-bit SSL encryption. Highland Hotel does not store raw credit card CVV details on its internal web servers.
              </p>
              <p className="text-xs italic text-[#7A6E58]">
                Please refer to ResAvenue&apos;s independent security documentation for specialized PCI-DSS compliance protocols.
              </p>
            </article>

            {/* Section 05 */}
            <article id="data-sharing" className="scroll-mt-36 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1B1917] font-normal pb-2 border-b border-[#EAE4D7]">
                5. Third-Party Sharing
              </h2>
              <p>
                We do not sell, rent, or trade your personal information. Data is disclosed only under these circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#1B1917]/80">
                <li>Authorized hotel service vendors (e.g., booking engines, SMS transaction gateways, IT cloud hosts).</li>
                <li>Law enforcement or municipal authorities when compelled by summons, search warrant, or statutory registry guidelines.</li>
                <li>Medical or emergency response teams in the event of an urgent health crisis on hotel grounds.</li>
              </ul>
            </article>

            {/* Section 06 */}
            <article id="cookies" className="scroll-mt-36 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1B1917] font-normal pb-2 border-b border-[#EAE4D7]">
                6. Cookies &amp; Digital Tracking
              </h2>
              <p>
                Our website utilizes small data cookies to remember preferences, analyze web traffic anonymously, and optimize user experience. You can modify your browser settings to reject non-essential cookies; however, certain booking flow functions may require cookies for state preservation.
              </p>
            </article>

            {/* Section 07 */}
            <article id="guest-rights" className="scroll-mt-36 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1B1917] font-normal pb-2 border-b border-[#EAE4D7]">
                7. Your Rights &amp; Choices
              </h2>
              <p>
                Subject to relevant legal exemptions regarding tax and police registration requirements, you possess the right to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#1B1917]/80">
                <li>Request access to the personal records maintained about you.</li>
                <li>Request correction of inaccurate or outdated contact information.</li>
                <li>Opt out of non-transactional marketing announcements or seasonal wellness bulletins at any time.</li>
              </ul>
            </article>

            {/* Section 08 */}
            <article id="contact-dpo" className="scroll-mt-36 space-y-4 pt-4 border-t border-[#EAE4D7]">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1B1917] font-normal pb-2">
                8. Contact Our Concierge Desk
              </h2>
              <p>
                For questions regarding this policy, data rectification requests, or privacy concerns, please contact our administrative desk:
              </p>

              <div className="p-6 rounded-2xl bg-[#FAF7F0] border border-[#E5E0D5] space-y-3 font-sans text-xs">
                <p className="font-medium text-sm text-[#1B1917]">
                  Highland Hotel &bull; Management Office
                </p>
                <p className="flex items-start gap-2 text-[#1B1917]/80">
                  <MapPin className="w-4 h-4 text-[#7A6E58] shrink-0 mt-0.5" />
                  <span>
                    #4 &amp; 5, MM Heights, Opp. Sapthagiri NPS University, Chikkasandra, Hesaraghatta Main Road, Bengaluru, Karnataka 560073
                  </span>
                </p>
                <p className="flex items-center gap-2 text-[#1B1917]/80">
                  <Phone className="w-4 h-4 text-[#7A6E58] shrink-0" />
                  <a href="tel:+919035034418" className="hover:underline">
                    +91 90350 34418 / +91 76192 31899
                  </a>
                </p>
                <p className="flex items-center gap-2 text-[#1B1917]/80">
                  <Mail className="w-4 h-4 text-[#7A6E58] shrink-0" />
                  <a href="mailto:bookings@highlandhotel.in" className="hover:underline">
                    bookings@highlandhotel.in
                  </a>
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* =========================================================
          03 - CLEAN LIGHT PARCHMENT FOOTER STRIP
      ========================================================== */}
      <section className="bg-[#F2ECE1] text-[#1B1917] py-16 px-6 sm:px-12 lg:px-20 border-t border-[#DFD8CA]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-sans text-[#1B1917]/70">
          <div>
            <p className="font-medium text-sm text-[#1B1917]">Highland Hotel Bengaluru</p>
            <p className="font-light mt-0.5">
              A Unit of Sangameshwara Hospitality Services Private Limited
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/term-condition" className="hover:underline">Terms &amp; Conditions</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </section>

    </main>
  );
}