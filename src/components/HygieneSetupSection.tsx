import React from "react";
import { ShieldCheck, Tv, Zap, UserCheck, Check } from "lucide-react";

const HYGIENE_CARDS = [
  {
    number: "01",
    title: "Sanitized Silicone Face Cushions",
    kicker: "Zero Sweat Absorption · Gentle on Makeup",
    description:
      "All our headsets are fitted with medical-grade, non-absorbent silicone face covers rather than porous foam. Our operator performs a thorough antibacterial wipe-down of the cushion and controllers before every guest's turn.",
    icon: ShieldCheck,
    accentText: "text-cyan-400",
  },
  {
    number: "02",
    title: "Venue TV Casting or Laptop Streaming",
    kicker: "TV Not Included · Connects to Your TV or Streams on Our Laptop",
    description:
      "TV is not included in the stall package. We cast the player's live view wirelessly to your home Smart TV or venue display—and if no TV is available at the event spot, we stream the live gameplay directly on our operator's laptop screen.",
    icon: Tv,
    accentText: "text-violet-400",
  },
  {
    number: "03",
    title: "20-Minute Wireless Setup",
    kicker: "10×10 ft Clear Floor · Only 1 Standard 5A Plug Socket",
    description:
      "Completely standalone Meta Quest headsets powered by hot-swappable battery packs. Zero gaming PCs, zero base-station towers, and zero tripping hazards—safe for toddlers and elderly guests walking nearby.",
    icon: Zap,
    accentText: "text-amber-400",
  },
  {
    number: "04",
    title: "Dedicated On-Site Operator",
    kicker: "Hands-Off Hosting for Parents & Wedding Planners",
    description:
      "Our trained, uniformed host manages the entire stall from start to finish: fitting head straps over glasses or buns, guiding first-time players in Hindi, Marathi, or English, and keeping queues moving smoothly.",
    icon: UserCheck,
    accentText: "text-cyan-400",
  },
];

export const HygieneSetupSection: React.FC = () => {
  return (
    <section
      id="hygiene-setup"
      className="border-b border-slate-800/80 py-16 lg:py-24 scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-medium text-amber-400">
            Built for Indian Hosts, Parents &amp; Venue Managers
          </p>
          <h2
            className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-white"
            style={{ textWrap: "balance" }}
          >
            Hassle-Free Sanitization &amp; Plug-and-Play 20-Minute Setup.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Whether you are hosting 25 kids in a Pune apartment living room or 400
            wedding guests at a Lonavala resort lawn, our self-contained setup runs
            without venue Wi-Fi or messy cables.
          </p>
        </div>

        {/* 4-Card Breakdown Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {HYGIENE_CARDS.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.number}
                className="rounded-2xl border border-slate-800/90 bg-slate-900/35 p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                    <span
                      className={`font-mono-tabular text-xs font-semibold ${card.accentText}`}
                    >
                      {card.number}. STANDARD PROTOCOL
                    </span>
                    <IconComponent
                      className={`h-5 w-5 ${card.accentText}`}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold text-white">
                    {card.title}
                  </h3>

                  <p className="mt-1 text-xs sm:text-sm font-medium text-slate-400">
                    {card.kicker}
                  </p>

                  <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Venue Readiness Checklist Bar */}
        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/55 p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold text-cyan-400">
                What We Need From Your Venue
              </p>
              <h3 className="mt-1 font-display text-lg sm:text-xl font-bold text-white">
                Host Readiness Checklist (Takes 2 Minutes)
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300">
                Our team arrives 45 minutes before your event start time with our
                laptop streaming station, casting router, and extension boards.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-slate-800/90 bg-slate-950/60 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Check className="h-4 w-4 text-cyan-400 shrink-0" aria-hidden="true" />
                  <span>10×10 ft Floor Area</span>
                </div>
                <p className="mt-1.5 text-xs text-slate-400">
                  Clear corner in living room, banquet hall, or covered lawn Shamiana.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800/90 bg-slate-950/60 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Check className="h-4 w-4 text-amber-400 shrink-0" aria-hidden="true" />
                  <span>Venue TV or Our Laptop</span>
                </div>
                <p className="mt-1.5 text-xs text-slate-400">
                  TV not included. We cast to your venue TV, or stream on our laptop if no TV is present.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800/90 bg-slate-950/60 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Check className="h-4 w-4 text-violet-400 shrink-0" aria-hidden="true" />
                  <span>1 Plug Point · No Wi-Fi</span>
                </div>
                <p className="mt-1.5 text-xs text-slate-400">
                  1 standard 5A socket for laptop/chargers. All games &amp; casting run offline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
