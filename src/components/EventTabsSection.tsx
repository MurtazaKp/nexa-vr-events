import React, { useState } from "react";
import {
  EventCategory,
  QuoteEventType,
  PackageTierId,
} from "../utils/booking";
import { Check, ArrowUpRight, Users, Clock, Sparkles } from "lucide-react";

interface EventTabDetail {
  id: EventCategory;
  quoteEventType: QuoteEventType;
  recommendedTier: PackageTierId;
  recommendedTierName: string;
  headline: string;
  summary: string;
  throughputMetric: string;
  attireAndSafetyNote: string;
  highlights: string[];
  spotlightGame: string;
  imagePath: string;
}

const EVENT_TABS: EventTabDetail[] = [
  {
    id: "Kids' Birthdays (Ages 8–16)",
    quoteEventType: "Birthday Party",
    recommendedTier: "signature",
    recommendedTierName: "Signature Party Stall (₹11,999)",
    headline: "Zero Long Queues. Non-Stop High-Energy Birthday Action.",
    summary:
      "Fast 3-minute turns so 30+ kids play without long queues, parent-approved safety boundaries, and a special extended VIP round for the birthday child.",
    throughputMetric: "30 to 45 Kids Play Easily in 3 Hours",
    attireAndSafetyNote:
      "Guardian floor boundary locked by operator; glasses-friendly spacer pre-installed",
    highlights: [
      "Fast 3-minute arcade turns keep 30+ energetic kids rotating smoothly without cranky waits",
      "Special extended VIP Finale Round for the birthday boy or girl",
      "Live gameplay cast to your living room Smart TV (or streamed on our operator's laptop if no TV is nearby)",
      "Parent-approved age-appropriate titles (Beat Saber, Fruit Ninja VR, First Encounters Mixed Reality)",
    ],
    spotlightGame: "Beat Saber + First Encounters Mixed Reality",
    imagePath: "/src/assets/images/vr_plank_experience_1795614653715.jpg",
  },
  {
    id: "Weddings",
    quoteEventType: "Wedding",
    recommendedTier: "grand",
    recommendedTierName: "Grand Wedding Arena (₹21,999)",
    headline: "Interactive VR Cricket & Outfit-Safe Family Fun.",
    summary:
      "Turn your wedding lounge or reception lawn into an interactive crowd zone with outfit-safe games designed for guests in sarees, lehengas, sherwanis, and heels.",
    throughputMetric: "60+ Guests/Hour Across 4 Wireless Headsets",
    attireAndSafetyNote:
      "100% Outfit-Safe: No jumping, crouching, or spinning — safe for sarees, lehengas & heels",
    highlights: [
      "Quick 1-Over VR Cricket batting sessions streamed live to your venue TV/LED screen or our operator laptop",
      "Outfit-safe standing or seated games (no jumping or sudden turns—safe for heavy ethnic wear & heels)",
      "Antibacterial silicone cushion wipe-down between turns keeps headsets fresh and gentle on makeup",
      "Decor-friendly wireless setup (TV not included — connects to venue display or streams on our laptop)",
    ],
    spotlightGame: "iB Cricket + Seated Roller Coasters for Elders",
    imagePath: "/src/assets/images/vr_cricket_sangeet_1795614654006.jpg",
  },
  {
    id: "Corporate & College Fests",
    quoteEventType: "Corporate",
    recommendedTier: "grand",
    recommendedTierName: "Grand Arena or Multi-Stall B2B Setup",
    headline: "Fast-Paced Arcade Challenges for Offsites & Fests.",
    summary:
      "Break the ice at annual offsites, family days, and college tech-fests with rapid 3-minute arcade sessions and live casting to venue screens or laptops.",
    throughputMetric: "Up to 240 Plays Per 4-Hour Session",
    attireAndSafetyNote:
      "GST Tax Invoice provided; security gate-pass & equipment manifest ready for IT parks",
    highlights: [
      "3-minute rhythm and cricket arcade sessions that let hundreds of attendees play without bottlenecks",
      "TV not included — plugs into your conference room / stage TV or streams live on our operator laptops",
      "Zero venue Wi-Fi dependency — local casting router and 5G hotspot backup included",
      "Uniformed operators handle high-volume crowds at Hinjewadi, BKC, Powai, and Lonavala resorts",
    ],
    spotlightGame: "Beat Saber Rhythm Action + iB Cricket",
    imagePath: "/src/assets/images/vr_rhythm_arcade_1795614659063.jpg",
  },
  {
    id: "Cafes & Hangouts",
    quoteEventType: "Cafe Pop-Up / Venue Partnership",
    recommendedTier: "custom",
    recommendedTierName: "Zero-Cost Cafe Pop-Up or ₹11,500 B2B Add-On",
    headline:
      "Turn Weekend Evenings Into a Crowd-Pulling VR Hangout — At Zero Cost to Your Cafe",
    summary:
      "Boost weekend table dwell time, group F&B bills, and private party bookings with a compact, glassware-safe wireless VR corner tailored for Pune, Mumbai, and Lonavala cafes.",
    throughputMetric: "₹150/Play Pay-Per-Turn or B2B Party Add-On",
    attireAndSafetyNote:
      "Tight 6×6 ft stationary boundary locked by operator — 100% safe around tables & glassware",
    highlights: [
      "Zero-Cost Fri–Sun Pop-Ups (₹150/play): We set up and staff the VR zone at ₹0 upfront cost to your cafe through guest pay-per-play or revenue share",
      "Higher F&B Orders & Dwell Time via live TV casting (using your cafe TV or our laptop stream) as friend groups stay longer ordering coffee, shakes, and snacks",
      "Mini VR Cricket Score Leaderboards: Quick 1-over cafe high-score challenges that keep college groups and regulars returning every weekend",
      "Tight 6×6 ft Stationary Setup (safe around glassware): Compact standing-in-place or seated footprint with zero swinging near adjacent dining tables",
      "Private Birthday Menu Add-Ons: Bundle our VR stall into your cafe's private birthday or kitty party packages at net ₹11,500 B2B partner rates",
    ],
    spotlightGame: "iB Cricket 1-Over Challenge + Beat Saber",
    imagePath: "/src/assets/images/vr_rhythm_arcade_1795614659063.jpg",
  },
];

interface EventTabsSectionProps {
  onSelectEventForQuote: (
    eventType: QuoteEventType,
    recommendedTier: PackageTierId
  ) => void;
}

export const EventTabsSection: React.FC<EventTabsSectionProps> = ({
  onSelectEventForQuote,
}) => {
  const [activeTabId, setActiveTabId] = useState<EventCategory>(
    "Kids' Birthdays (Ages 8–16)"
  );
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const activeTab =
    EVENT_TABS.find((t) => t.id === activeTabId) ?? EVENT_TABS[0];

  return (
    <section
      id="events"
      className="border-b border-slate-800/80 py-16 lg:py-24 scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-medium text-violet-400">
            Tailored Formats for Every Occasion
          </p>
          <h2
            className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-white"
            style={{ textWrap: "balance" }}
          >
            Engineered for Indian Celebrations — From Living Room Birthdays to
            500-Guest Weddings.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Select your event format below to see how we customize game selection,
            turn length, and booth layout for your guests.
          </p>
        </div>

        {/* Interactive 4-Tab Bar */}
        <div
          role="tablist"
          aria-label="Event Type Formats"
          className="mt-8 flex flex-wrap gap-2 rounded-xl border border-slate-800 bg-slate-900/60 p-1.5"
        >
          {EVENT_TABS.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveTabId(tab.id)}
                className={`flex-1 min-w-[180px] rounded-lg px-4 py-3 text-xs sm:text-sm font-semibold transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-cyan-500 text-slate-950 shadow-sm"
                    : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                }`}
              >
                {tab.id}
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Panel */}
        <div
          role="tabpanel"
          className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 lg:p-10"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left 7 Cols: Benefits & Specs */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-amber-400">
                <span>{activeTab.id}</span>
                <span aria-hidden="true">·</span>
                <span>Recommended: {activeTab.recommendedTierName}</span>
              </div>

              <h3
                className="mt-2.5 font-display text-xl sm:text-3xl font-bold text-white"
                style={{ textWrap: "balance" }}
              >
                {activeTab.headline}
              </h3>

              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeTab.summary}
              </p>

              {/* Bullet Highlights */}
              <ul className="mt-6 space-y-3">
                {activeTab.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-cyan-500/15 text-cyan-400">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Key Operational Metrics Row */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-slate-800/80">
                <div className="rounded-xl border border-slate-800/90 bg-slate-950/60 p-3.5">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Users className="h-4 w-4 text-cyan-400 shrink-0" aria-hidden="true" />
                    <span>Guest Throughput</span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {activeTab.throughputMetric}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800/90 bg-slate-950/60 p-3.5">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Clock className="h-4 w-4 text-amber-400 shrink-0" aria-hidden="true" />
                    <span>Safety &amp; Comfort Protocol</span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {activeTab.attireAndSafetyNote}
                  </p>
                </div>
              </div>

              {/* Action CTA */}
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() =>
                    onSelectEventForQuote(
                      activeTab.quoteEventType,
                      activeTab.recommendedTier
                    )
                  }
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Plan a {activeTab.quoteEventType} Quote</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </button>
                <span className="text-xs text-slate-400">
                  Signature Games: <strong className="text-slate-200">{activeTab.spotlightGame}</strong>
                </span>
              </div>
            </div>

            {/* Right 5 Cols: Visual Preview Card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950 aspect-[4/3]">
                {!imgErrors[activeTab.id] ? (
                  <img
                    src={activeTab.imagePath}
                    alt={`${activeTab.id} live VR setup`}
                    referrerPolicy="no-referrer"
                    onError={() =>
                      setImgErrors((prev) => ({ ...prev, [activeTab.id]: true }))
                    }
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-slate-900 p-6 text-center">
                    <Sparkles className="h-10 w-10 text-cyan-400 mb-2" aria-hidden="true" />
                    <p className="font-display text-base font-semibold text-white">
                      {activeTab.id}
                    </p>
                  </div>
                )}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-transparent to-transparent"
                />
                <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-slate-800/90 bg-[#090D16]/90 px-3.5 py-2.5 backdrop-blur-sm">
                  <p className="text-xs font-medium text-cyan-400">
                    Crowd-Tested Configuration
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-white truncate">
                    {activeTab.recommendedTierName}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
