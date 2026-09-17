"use client";

import {
  MapPin,
  Navigation,
  Clock,
  Plane,
  Train,
  Building,
  TrainFront,
} from "lucide-react";

const transitData = [
  {
    destination: "Kempegowda International Airport",
    time: "Approx. 50 min",
    detail: "Airport access from Highland Hotel",
    icon: Plane,
  },
  {
    destination: "Nagasandra Metro Station",
    time: "Approx. 13 min",
    detail: "Green Line Metro connectivity",
    icon: TrainFront,
  },
  {
    destination: "Yeshwanthpur Railway Station",
    time: "Approx. 10 min",
    detail: "Railway connectivity",
    icon: Train,
  },
  {
    destination: "Bangalore City",
    time: "Easy access",
    detail: "Connected via Hesaraghatta Main Road",
    icon: Building,
  },
];

const neighborhoods = [
  {
    name: "Chikkasandra",
    desc: "Highland Hotel is located on Hesaraghatta Main Road, opposite Sapthagiri NPS University.",
  },
  {
    name: "Hesaraghatta Main Road",
    desc: "A convenient road connection for accessing North and West Bengaluru.",
  },
  {
    name: "North Bangalore",
    desc: "A practical location for guests visiting the city for business, events, dining and stays.",
  },
];

export default function Location() {
  return (
    <section className="relative w-full bg-[#f4f1ea] text-stone-900 py-24 sm:py-32 px-6 sm:px-12 lg:px-20 border-t border-stone-200/80">

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">

          <div className="max-w-xl">

            <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-stone-500 font-medium mb-3">
              Destination &amp; Access
            </p>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-stone-900 leading-[1.15]">
              Highland Hotel, North Bangalore
            </h2>

          </div>

          <p className="font-sans text-stone-600 text-sm sm:text-base font-light max-w-md leading-relaxed">
            Located on Hesaraghatta Main Road in Chikkasandra, Highland Hotel
            offers convenient access to metro, railway and airport connections
            across Bengaluru.
          </p>

        </div>

        {/* Main Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Panel */}
          <div className="lg:col-span-7 bg-white rounded-lg border border-stone-200 p-8 sm:p-10 shadow-sm flex flex-col justify-between">

            <div>

              {/* Property Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5 mb-8">

                <div>

                  <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-stone-400 block mb-1">
                    PROPERTY LOCATION
                  </span>

                  <h3 className="font-serif text-2xl text-stone-900">
                    Highland Hotel Bengaluru
                  </h3>

                </div>

                <span className="w-fit bg-orange-50 text-orange-700 text-[11px] font-sans tracking-wider uppercase px-3 py-1 rounded font-medium">
                  Chikkasandra
                </span>

              </div>

              {/* Address */}
              <div className="flex items-start gap-3 mb-8">

                <div className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-orange-500" />
                </div>

                <div>

                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-1">
                    Address
                  </p>

                  <p className="font-serif text-base text-stone-800 leading-relaxed">
                    #4 &amp; 5, MM Heights, Opposite Sapthagiri NPS
                    University, Sidedahalli Chikkasandra,
                    Hesaraghatta Main Road, Bangalore
                  </p>

                </div>

              </div>

              {/* Connectivity */}
              <div className="space-y-5">

                {transitData.map((item, index) => {

                  const Icon = item.icon;

                  return (
                    <div
                      key={item.destination}
                      className="flex items-center justify-between gap-5 py-3 border-b border-stone-100 last:border-b-0"
                    >

                      <div className="flex items-center gap-3.5">

                        <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 shrink-0">
                          <Icon className="w-4 h-4 text-orange-500" />
                        </div>

                        <div>

                          <p className="font-serif text-base text-stone-900">
                            {item.destination}
                          </p>

                          <p className="text-[11px] font-sans text-stone-500">
                            {item.detail}
                          </p>

                        </div>

                      </div>

                      <div className="text-right shrink-0">

                        <span className="font-serif text-lg font-medium text-stone-900 block">
                          {item.time}
                        </span>

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

            {/* Directions */}
            <div className="pt-8 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-5 mt-8">

              <div className="flex items-start gap-2 text-stone-500 text-xs font-sans">

                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />

                <span>
                  Opposite Sapthagiri NPS University,
                  Chikkasandra
                </span>

              </div>

              <a
                href="https://maps.google.com/?q=Highland+Hotel+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold px-6 py-3.5 rounded transition-colors text-center cursor-pointer shadow-sm"
              >
                <span>Get Directions</span>

                <Navigation className="w-3.5 h-3.5 text-orange-300" />
              </a>

            </div>

          </div>

          {/* Right Panel */}
          <div className="lg:col-span-5 flex flex-col gap-4">

            {neighborhoods.map((item, index) => (

              <div
                key={item.name}
                className="bg-white/80 backdrop-blur-sm rounded-lg border border-stone-200/90 p-6 flex-1 flex flex-col justify-center shadow-sm"
              >

                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-orange-600 font-semibold mb-1">
                  Area 0{index + 1}
                </span>

                <h4 className="font-serif text-xl text-stone-900 mb-2">
                  {item.name}
                </h4>

                <p className="font-sans text-xs text-stone-600 font-light leading-relaxed">
                  {item.desc}
                </p>

              </div>

            ))}

            {/* Travel Information */}
            <div className="bg-stone-900 text-white rounded-lg p-6 flex items-start gap-4">

              <Clock className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />

              <div>

                <p className="font-serif text-sm text-stone-100 font-medium mb-1">
                  Getting Around Bengaluru
                </p>

                <p className="font-sans text-xs text-stone-300 font-light leading-relaxed">
                  Highland Hotel lists Nagasandra and Dasarahalli
                  as nearby metro stations, with Yeshwanthpur and
                  Chikkabanavara railway stations also providing
                  convenient connectivity.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}