import React from "react";
import {
  PACKAGE_TIERS,
  PackageTierId,
  WHATSAPP_NUMBER,
  buildWhatsAppUrl,
} from "../utils/booking";
import { Check, MessageCircle, ArrowRight, Handshake } from "lucide-react";

interface PricingSectionProps {
  selectedTier: PackageTierId;
  onSelectPackage: (tierId: PackageTierId) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  selectedTier,
  onSelectPackage,
}) => {
  const mainTiers = PACKAGE_TIERS.filter((tier) => tier.id !== "custom");

  const b2bWhatsAppUrl = buildWhatsAppUrl(
    "Hi NexaVR Events! I am a Cafe Owner / Wedding Planner / Event Organizer. Please share your Weekend Cafe Pop-Up terms (₹0 Upfront), VR + F&B Combo structure, and Net ₹11,500 B2B Partner Rate Card.",
    WHATSAPP_NUMBER
  );

  return (
    <section
      id="packages"
      className="border-b border-slate-800/80 py-16 lg:py-24 scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-medium text-cyan-400">
            All-Inclusive Event Pricing (INR) · No Hidden Setup Fees
          </p>
          <h2
            className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-white"
            style={{ textWrap: "balance" }}
          >
            Transparent Pricing Packages for Homes, Clubhouses &amp; Grand Banquets.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Every package includes trained on-site operators, sanitized silicone
            face cushions, and complete setup within Pune and Mumbai city limits.
            TV is not included—we cast to your venue TV or stream live on our
            operator&apos;s laptop.
          </p>
        </div>

        {/* 3-Column Pricing Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {mainTiers.map((tier) => {
            const isPopular = Boolean(tier.isPopular);
            const isCurrentlySelected = selectedTier === tier.id;

            return (
              <div
                key={tier.id}
                className={`flex flex-col justify-between rounded-2xl border p-6 sm:p-8 transition-colors duration-150 ${
                  isPopular
                    ? "border-cyan-500/80 bg-slate-900/75"
                    : "border-slate-800/90 bg-slate-900/35"
                }`}
              >
                <div>
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                    <span className="text-xs font-semibold text-slate-300">
                      {tier.duration} · {tier.headsets}
                    </span>
                    {isPopular && (
                      <span className="text-xs font-bold text-cyan-400 tracking-wide">
                        MOST POPULAR
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 font-display text-xl sm:text-2xl font-bold text-white">
                    {tier.name}
                  </h3>

                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-mono-tabular text-3xl sm:text-4xl font-bold text-white">
                      {tier.priceInr}
                    </span>
                    <span className="text-xs text-slate-400">
                      all-inclusive ({tier.duration})
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-amber-300 font-medium">
                    {tier.highlightFeature}
                  </p>

                  {/* Unboxed Spec Summary */}
                  <div className="mt-5 rounded-xl border border-slate-800/90 bg-slate-950/60 p-3.5 text-xs text-slate-300 space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Display Setup:</span>
                      <span className="font-semibold text-white">{tier.displaySpec}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Staffing:</span>
                      <span className="font-semibold text-white">{tier.operators}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Hygiene:</span>
                      <span className="font-semibold text-white">{tier.hygieneSpec}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="mt-6 space-y-3">
                    {tier.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 text-cyan-400 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Package Action Button */}
                <div className="mt-8 pt-4 border-t border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => onSelectPackage(tier.id)}
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                      isPopular
                        ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                        : "border border-slate-700 bg-slate-950 text-white hover:border-cyan-400 hover:text-cyan-300"
                    }`}
                  >
                    <span>
                      {isCurrentlySelected
                        ? `Selected: ${tier.shortLabel}`
                        : `Select ${tier.shortLabel}`}
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sleek B2B Callout Card Below Pricing Grid */}
        <div className="mt-8 rounded-2xl border border-amber-500/40 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-amber-950/20 p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <Handshake className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Venue &amp; Agency B2B Partnerships</span>
              </div>
              <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-white">
                Partner With Us: Cafe Owners, Wedding Planners &amp; Event Organizers
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Whether you run a bustling cafe hangout, plan luxury weddings, or
                organize birthday and corporate events across Pune, Mumbai, and
                Lonavala, plug our managed VR experience directly into your venue
                or client packages.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onSelectPackage("custom")}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-amber-400/60 bg-slate-950/80 px-5 py-3 text-xs sm:text-sm font-semibold text-amber-300 hover:bg-amber-500/10 transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Build Custom / B2B Quote</span>
              </button>

              <a
                href={b2bWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-950 hover:bg-amber-400 transition-colors whitespace-nowrap"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Request B2B Rates on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* 3 Mini Cards for Cafe & B2B Models */}
          <div className="mt-6 grid grid-cols-1 gap-4 pt-6 border-t border-slate-800/80 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-800/90 bg-slate-950/65 p-4">
              <p className="font-display text-sm sm:text-base font-bold text-amber-300">
                Weekend Footfall Pop-Up (₹0 Upfront)
              </p>
              <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                Zero setup fee for cafes. We install a compact 6×6 ft wireless VR
                station on Fri–Sun evenings at ₹150/play to pull college &amp;
                family crowds.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800/90 bg-slate-950/65 p-4">
              <p className="font-display text-sm sm:text-base font-bold text-cyan-300">
                VR + Cafe F&amp;B Combos
              </p>
              <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                Co-branded &quot;Burger / Coffee + 1 VR Over&quot; combo vouchers that
                increase average table ticket size and keep friend groups hanging
                out longer.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800/90 bg-slate-950/65 p-4">
              <p className="font-display text-sm sm:text-base font-bold text-violet-300">
                Cafe Birthday Package Add-On (₹11,500 B2B Rate)
              </p>
              <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                Upsell private 3-hour dual-headset VR birthday stalls to hosts
                booking your cafe or banquet area at our confidential ₹11,500 net
                partner rate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
