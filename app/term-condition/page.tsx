"use client";

import Link from "next/link";
import {
  Sparkles,
  FileText,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  CreditCard,
  AlertCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function TermsAndConditionsPage() {
  const sections = [
    { id: "online-payments", label: "Online Payments & Scope" },
    { id: "privacy-policy", label: "Privacy & Data Disclosure" },
    { id: "general-terms", label: "General Conditions & Law" },
    { id: "chargebacks", label: "Refunds & Chargebacks" },
    { id: "session-timeout", label: "Server Slowdown / Timeout" },
    { id: "liability", label: "Limitation of Liability" },
    { id: "credentials", label: "Account & Password Security" },
    { id: "payment-details", label: "Card & Banking Undertakings" },
    { id: "disclaimer", label: "Payment Gateway Disclaimer" },
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
            Highland Hotel &bull; Legal Terms
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.05] tracking-[-0.035em] text-[#1B1917]">
              Terms <br />
              <span className="italic font-light text-[#7A6E58]">&amp; Conditions</span>
            </h1>
          </div>

          <div className="text-xs font-mono text-[#7A6E58] lg:text-right space-y-1">
            <p>Governing Online Reservations &amp; Payments</p>
            <p>Highland Hotel Bengaluru</p>
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
                <FileText className="w-4 h-4 text-[#7A6E58]" />
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#1B1917] font-semibold">
                  Navigation Index
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
                <p>Questions regarding a pending transaction or booking tariff?</p>
                <a
                  href="tel:+919035034418"
                  className="inline-flex items-center gap-1 text-[#1B1917] font-medium hover:underline"
                >
                  <span>+91 90350 34418</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column: Full Legal Content */}
          <div className="lg:col-span-8 space-y-14 font-sans text-sm sm:text-[15px] text-[#1B1917]/85 font-light leading-[1.8]">
            
            {/* Section 01 */}
            <article id="online-payments" className="scroll-mt-36 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1B1917] font-normal pb-2 border-b border-[#EAE4D7]">
                1. Terms &amp; Conditions for Online Payment
              </h2>
              <p>
                The Terms and Conditions contained herein shall apply to any person (&ldquo;User&rdquo; or &ldquo;Guest&rdquo;) using the services of Highland Hotel (hereinafter referred to as &ldquo;Highland Hotel&rdquo;, handled by own management) for making accommodation, dining, or banquet payments through an online payment gateway service provider via the official Highland Hotel website.
              </p>
              <p>
                Each User is deemed to have read, understood, and irrevocably accepted these Terms and Conditions before initiating any payment transaction.
              </p>
            </article>

            {/* Section 02 */}
            <article id="privacy-policy" className="scroll-mt-36 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1B1917] font-normal pb-2 border-b border-[#EAE4D7]">
                2. Privacy &amp; Data Disclosure
              </h2>
              <p>
                Highland Hotel respects and protects the privacy of individuals who access information and use our online facilities. Individually identifiable information about the User is not willfully disclosed to any external entity without first obtaining the User&rsquo;s authorization, except as explicitly delineated herein.
              </p>
              <p>
                Highland Hotel does not gather unique personal identifiers (such as name, contact address, or demographic data) unless the User specifically and knowingly submits such particulars. We may, from time to time, communicate updates regarding hotel services, features, and dining offerings.
              </p>
              <div className="p-5 rounded-xl bg-[#FAF7F0] border border-[#E5E0D5] space-y-2">
                <p className="font-medium text-[#1B1917] text-xs uppercase tracking-wider">
                  Mandatory Legal Disclosure Exceptions:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-[#1B1917]/80">
                  <li>To comply with valid judicial scrutiny, search warrants, or court orders under Indian law.</li>
                  <li>When a User&rsquo;s actions violate these Terms or service guidelines.</li>
                  <li>To protect or defend the legal rights, safety, or property of Highland Hotel, our website, or our patrons.</li>
                  <li>To investigate, prevent, or take punitive action regarding fraudulent activity, cyber threats, or system compromise.</li>
                </ul>
              </div>
            </article>

            {/* Section 03 */}
            <article id="general-terms" className="scroll-mt-36 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1B1917] font-normal pb-2 border-b border-[#EAE4D7]">
                3. General Conditions &amp; Applicable Law
              </h2>
              <p>
                Once a User has accepted these Terms and Conditions, he/she may register and utilize our online payment portal. A User may complete transactions by entering booking references, folio IDs, or mobile identifiers as directed by Highland Hotel.
              </p>
              <p>
                All rights, obligations, and undertakings shall be subject to the laws in force in the Republic of India and jurisdiction of courts in Bengaluru, Karnataka. Nothing contained herein shall curtail Highland Hotel&rsquo;s right to comply with law enforcement requirements or official governmental directives.
              </p>
              <p>
                These Terms and Conditions constitute the entire legal understanding between the User and Highland Hotel, superseding any prior electronic or verbal representations. The business records and system logs maintained by Highland Hotel and its designated Payment Service Providers shall serve as conclusive evidence of the authenticity and accuracy of transactions.
              </p>
            </article>

            {/* Section 04 */}
            <article id="chargebacks" className="scroll-mt-36 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1B1917] font-normal pb-2 border-b border-[#EAE4D7]">
                4. Refunds, Fraudulent Claims &amp; Chargebacks
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-serif text-lg text-[#1B1917] font-normal mb-1">
                    Chargeback Procedures
                  </h3>
                  <p>
                    In the event of any claim for chargeback by the User for any reason whatsoever, the User must immediately approach Highland Hotel directly with substantiated transaction details. Approved refunds (if any) shall be processed solely by Highland Hotel via appropriate banking mechanisms. No chargeback claims shall be entertained by third-party Payment Gateway Providers directly.
                  </p>
                  <p className="text-xs text-[#7A6E58] italic mt-1">
                    &ldquo;Chargeback&rdquo; refers to approved and settled card or net-banking transactions that are at any time refused, reversed, or debited back to the merchant account by acquiring banks, together with incidental bank penalties and administrative levies.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg text-[#1B1917] font-normal mb-1">
                    Fraudulent or Duplicate Deductions
                  </h3>
                  <p>
                    The User must report any suspected card/banking credential misuse or duplicate deduction directly to Highland Hotel management. The incident will be reviewed and resolved in accordance with hotel policy and merchant verification protocols.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 05 */}
            <article id="session-timeout" className="scroll-mt-36 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1B1917] font-normal pb-2 border-b border-[#EAE4D7]">
                5. Server Slowdown &amp; Session Timeouts
              </h2>
              <p>
                If the website or linked Payment Service Provider interface experiences server latency, connection disruption, or session expiration, the User must verify their bank account balance/statement <strong>before</strong> initiating a second attempt:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-5 rounded-xl bg-[#FAF7F0] border border-[#E5E0D5]">
                  <p className="font-sans text-xs uppercase tracking-wider text-[#7A6E58] font-semibold mb-1">
                    Scenario A: Account Debited
                  </p>
                  <p className="text-xs text-[#1B1917]/75">
                    Do not retry payment. Immediately contact Highland Hotel with the transaction timestamp and reference number to confirm booking receipt.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#FAF7F0] border border-[#E5E0D5]">
                  <p className="font-sans text-xs uppercase tracking-wider text-[#7A6E58] font-semibold mb-1">
                    Scenario B: Account Not Debited
                  </p>
                  <p className="text-xs text-[#1B1917]/75">
                    The User may proceed to initiate a fresh payment transaction to secure the reservation.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 06 */}
            <article id="liability" className="scroll-mt-36 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1B1917] font-normal pb-2 border-b border-[#EAE4D7]">
                6. Limitation of Liability &amp; Indemnity
              </h2>
              <p>
                Online payment services are provided purely as an operational amenity. Highland Hotel and its payment gateway partners expressly disclaim liability for any inaccuracy, transmission delay, network timeout, or incidental damages arising out of the provision, deficiency, or suspension of gateway connectivity.
              </p>
              <p>
                Under no circumstances shall Highland Hotel, its directors, officers, or service partners be liable for direct, indirect, incidental, punitive, or consequential damages resulting from unauthorized data interception, technical failure, or events beyond reasonable operational control.
              </p>
              <p>
                The User agrees to defend, indemnify, and hold harmless Highland Hotel, its executives, and its gateway associates against any claims, losses, or legal expenses arising from misuse of payment tools or non-compliance with these terms.
              </p>
            </article>

            {/* Section 07 */}
            <article id="credentials" className="scroll-mt-36 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1B1917] font-normal pb-2 border-b border-[#EAE4D7]">
                7. User Account &amp; Credential Security
              </h2>
              <p>
                Where registration is required to view folios or manage corporate bookings, Users must maintain the absolute confidentiality of their login credentials. Users are strictly responsible for all transactions executed through their authenticated account.
              </p>
              <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#E5E0D5] flex items-start gap-3 text-xs text-[#1B1917]/80">
                <AlertCircle className="w-4 h-4 text-[#7A6E58] shrink-0 mt-0.5" />
                <p>
                  Highland Hotel representatives will <strong>never</strong> ask for your password, CVV, or banking OTP via unsolicited phone calls, WhatsApp messages, or emails. Always sign out after finishing transactions on shared or public devices.
                </p>
              </div>
            </article>

            {/* Section 08 */}
            <article id="payment-details" className="scroll-mt-36 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1B1917] font-normal pb-2 border-b border-[#EAE4D7]">
                8. Card, UPI &amp; Banking Details
              </h2>
              <p>
                When initiating an electronic payment instruction, the User warrants and declares that:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#1B1917]/80">
                <li>The User is lawfully authorized to utilize the credit card, debit card, UPI ID, or net banking facility used.</li>
                <li>All financial account details entered on the gateway portal are accurate and current.</li>
                <li>The User authorizes the debit of the nominated account for the specific tariff, package fees, or incidental levies selected.</li>
                <li>Adequate credit or cleared funds are available in the nominated account at the time of transaction.</li>
              </ul>
            </article>

            {/* Section 09 */}
            <article id="disclaimer" className="scroll-mt-36 space-y-4 pt-4 border-t border-[#EAE4D7]">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1B1917] font-normal pb-2">
                9. Payment Gateway Disclaimer
              </h2>
              <p>
                Online payment facilities are extended solely to expedite room reservations, dining vouchers, and banquet settlement. Highland Hotel makes no representations, express or implied, regarding continuous uptime, banking network uninterrupted operations, or external gateway servers. Use of the payment gateway is undertaken entirely at the User&rsquo;s own discretion and risk.
              </p>

              {/* Hotel Concierge Contact Box */}
              <div className="mt-8 p-6 rounded-2xl bg-[#FAF7F0] border border-[#E5E0D5] space-y-3 font-sans text-xs">
                <p className="font-medium text-sm text-[#1B1917]">
                  Highland Hotel &bull; Accounts &amp; Reservations Desk
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
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </section>

    </main>
  );
}