import React, { useState } from "react";
import { MessageCircle, ArrowRight, Maximize2, WifiOff, Tv } from "lucide-react";

interface HeroSectionProps {
  onCheckDateClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCheckDateClick }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative overflow-hidden border-b border-slate-800/80 pt-10 pb-14 lg:pt-16 lg:pb-20">
      {/* Subtle radial atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 right-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 2-Column Hero Split */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          {/* Left Column: Proposition & CTAs */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="text-xs sm:text-sm font-medium text-cyan-400 tracking-wide">
                Serving Pune · Mumbai · Navi Mumbai · Lonavala Destination Venues
              </p>

              <h1
                className="mt-4 font-display text-3xl sm:text-5xl lg:text-[3.35rem] font-bold tracking-tight text-white leading-[1.12]"
                style={{ textWrap: "balance" }}
              >
                Turn Any Birthday or Wedding Into an Unforgettable VR Arena.
              </h1>

              <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
                Wireless Meta Quest headsets, live spectator casting to your venue
                TV (or our operator&apos;s laptop stream if no TV is available), and
                a dedicated on-site operator. 20-minute setup anywhere in your
                home, banquet hall, or lawn.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href="#quote-builder"
                  onClick={(e) => {
                    e.preventDefault();
                    onCheckDateClick();
                  }}
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-950 hover:bg-cyan-400 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>Check Date on WhatsApp</span>
                </a>

                <a
                  href="#packages"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-100 hover:border-slate-500 hover:bg-slate-800/80 transition-colors duration-150 whitespace-nowrap shrink-0"
                >
                  <span>View Packages (From ₹7,999)</span>
                  <ArrowRight className="h-4 w-4 text-amber-400 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Trust badges below CTAs */}
            <div className="mt-10 border-t border-slate-800/80 pt-6">
              <p className="text-xs font-medium text-slate-400 mb-3">
                Built for Indian Homes, Clubhouses &amp; Luxury Banquet Venues
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2.5 rounded-lg border border-slate-800/90 bg-slate-900/50 px-3.5 py-2.5">
                  <Tv className="h-4 w-4 text-cyan-400 shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200 whitespace-nowrap">
                    Casts to Venue TV or Laptop Stream
                  </span>
                </div>
                <div className="flex items-center gap-2.5 rounded-lg border border-slate-800/90 bg-slate-900/50 px-3.5 py-2.5">
                  <Maximize2 className="h-4 w-4 text-violet-400 shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200 whitespace-nowrap">
                    Only 10×10 ft Space Needed
                  </span>
                </div>
                <div className="flex items-center gap-2.5 rounded-lg border border-slate-800/90 bg-slate-900/50 px-3.5 py-2.5">
                  <WifiOff className="h-4 w-4 text-amber-400 shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200 whitespace-nowrap">
                    Zero Cables or PCs
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact 16:9 / Full-Height Arena Visual */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 flex flex-col justify-end min-h-[320px] lg:h-full">
              {!imgError ? (
                <img
                  src="/src/assets/images/hero_vr_event_arena_1795614650561.jpg"
                  alt="Indian wedding and party guests cheering as a player enjoys wireless VR with live spectator screen casting"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-violet-950/40 p-6 text-center">
                  <Tv className="h-12 w-12 text-cyan-400 mb-3" aria-hidden="true" />
                  <p className="font-display text-lg font-semibold text-white">
                    Live Spectator Arena
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Venue TV Casting or Operator Laptop Stream
                  </p>
                </div>
              )}

              {/* Measured Scrim for Media Overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/45 to-transparent"
              />

              <div className="relative z-10 p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs text-amber-300 font-medium">
                  <span>Venue TV or Laptop Stream</span>
                  <span aria-hidden="true">·</span>
                  <span>Sangeet VR Cricket</span>
                  <span aria-hidden="true">·</span>
                  <span>Kids&apos; VIP Birthday Rounds</span>
                </div>
                <p className="mt-1.5 text-sm sm:text-base font-semibold text-white">
                  Nobody stands bored in line — we cast live gameplay to your venue
                  TV, or stream it on our laptop screen if no TV is available.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Quantitative Proof Row below Hero Split */}
        <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-slate-800/90 bg-slate-900/35 p-5 sm:grid-cols-4 sm:gap-6 sm:p-6">
          <div>
            <p className="font-mono-tabular text-2xl sm:text-3xl font-bold text-white">
              20 mins
            </p>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              Arrival to Play-Ready Setup
            </p>
          </div>
          <div>
            <p className="font-mono-tabular text-2xl sm:text-3xl font-bold text-cyan-400">
              30–60+
            </p>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              Guest Turns Per Hour (3-Min Rounds)
            </p>
          </div>
          <div>
            <p className="font-mono-tabular text-2xl sm:text-3xl font-bold text-amber-400">
              10×10 ft
            </p>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              Compact Footprint + 1 Socket
            </p>
          </div>
          <div>
            <p className="font-mono-tabular text-2xl sm:text-3xl font-bold text-violet-400">
              350+
            </p>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              Events Across Pune, Mumbai &amp; Lonavala
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
