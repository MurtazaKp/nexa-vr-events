import React, { useState } from "react";
import {
  QuoteFormState,
  QuoteEventType,
  PackageTierId,
  CityArea,
  VenueType,
  PACKAGE_TIERS,
  calculateEstimatedTurns,
  validateQuoteForm,
  buildWhatsAppMessage,
  buildWhatsAppUrl,
  WHATSAPP_NUMBER,
} from "../utils/booking";
import {
  MessageCircle,
  Calendar,
  MapPin,
  Building2,
  Users,
  CheckCircle2,
  Copy,
  Check,
  AlertCircle,
} from "lucide-react";

interface QuoteBuilderSectionProps {
  formState: QuoteFormState;
  onChangeFormState: React.Dispatch<React.SetStateAction<QuoteFormState>>;
}

const EVENT_TYPE_OPTIONS: QuoteEventType[] = [
  "Birthday Party",
  "Wedding / Sangeet",
  "Corporate",
  "Cafe Pop-Up / Venue Partnership",
];

const PACKAGE_TIER_OPTIONS: { id: PackageTierId; label: string }[] = [
  { id: "starter", label: "₹7,999 Starter" },
  { id: "signature", label: "₹13,500 Signature" },
  { id: "grand", label: "₹24,999 Grand Wedding" },
  { id: "custom", label: "Custom / B2B" },
];

const CITY_AREA_OPTIONS: CityArea[] = [
  "Pune (Koregaon Park / Baner / Wakad / Kothrud)",
  "Mumbai (Bandra / Andheri / Powai / South Mumbai)",
  "Navi Mumbai & Thane",
  "Lonavala & Aamby Valley Resorts",
];

const VENUE_TYPE_OPTIONS: VenueType[] = [
  "Home",
  "Clubhouse",
  "Banquet Hall",
  "Lawn",
];

export const QuoteBuilderSection: React.FC<QuoteBuilderSectionProps> = ({
  formState,
  onChangeFormState,
}) => {
  const [errors, setErrors] = useState<
    Partial<Record<keyof QuoteFormState, string>>
  >({});
  const [inquiryGenerated, setInquiryGenerated] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const selectedPackage =
    PACKAGE_TIERS.find((p) => p.id === formState.packageTier) ?? PACKAGE_TIERS[1];
  const throughput = calculateEstimatedTurns(formState.packageTier);
  const previewMessage = buildWhatsAppMessage(formState);
  const whatsAppUrl = buildWhatsAppUrl(previewMessage, WHATSAPP_NUMBER);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateQuoteForm(formState);
    if (!validation.valid) {
      setErrors(validation.errors);
      setInquiryGenerated(false);
      return;
    }
    setErrors({});
    setInquiryGenerated(true);
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(previewMessage);
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2500);
    } catch {
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2500);
    }
  };

  return (
    <section
      id="quote-builder"
      className="border-b border-slate-800/80 py-16 lg:py-24 scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-medium text-cyan-400">
            Instant Availability Check · Direct WhatsApp Booking Builder
          </p>
          <h2
            className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-white"
            style={{ textWrap: "balance" }}
          >
            Configure Your Event &amp; Send Your Inquiry in 15 Seconds.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Select your event details below to calculate guest throughput and
            generate a ready-to-send WhatsApp booking message directly to our
            scheduling desk.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left 7 Cols: Interactive Builder Form */}
          <form
            onSubmit={handleFormSubmit}
            noValidate
            className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/45 p-6 sm:p-8 space-y-6"
          >
            {/* 1. Event Type Dropdown + Quick Select */}
            <div>
              <label
                htmlFor="event-type-select"
                className="block text-xs sm:text-sm font-semibold text-slate-200 mb-2.5"
              >
                1. Select Event Type
              </label>
              <select
                id="event-type-select"
                value={formState.eventType}
                onChange={(e) => {
                  const nextType = e.target.value as QuoteEventType;
                  setInquiryGenerated(false);
                  onChangeFormState((prev) => ({
                    ...prev,
                    eventType: nextType,
                    packageTier:
                      nextType === "Cafe Pop-Up / Venue Partnership"
                        ? "custom"
                        : prev.packageTier,
                  }));
                }}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
              >
                {EVENT_TYPE_OPTIONS.map((typeOption) => (
                  <option key={typeOption} value={typeOption}>
                    {typeOption}
                  </option>
                ))}
              </select>

              <div
                role="group"
                aria-label="Quick select event type"
                className="mt-2.5 flex flex-wrap gap-2"
              >
                {EVENT_TYPE_OPTIONS.map((typeOption) => {
                  const active = formState.eventType === typeOption;
                  return (
                    <button
                      key={typeOption}
                      type="button"
                      onClick={() => {
                        setInquiryGenerated(false);
                        onChangeFormState((prev) => ({
                          ...prev,
                          eventType: typeOption,
                          packageTier:
                            typeOption === "Cafe Pop-Up / Venue Partnership"
                              ? "custom"
                              : prev.packageTier,
                        }));
                      }}
                      className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                        active
                          ? "border-cyan-400 bg-cyan-500/15 text-cyan-300"
                          : "border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700 hover:text-white"
                      }`}
                    >
                      {typeOption}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Package Tier */}
            <div>
              <label
                id="package-tier-group-label"
                className="block text-xs sm:text-sm font-semibold text-slate-200 mb-2.5"
              >
                2. Select Package Tier
              </label>
              <div
                role="radiogroup"
                aria-labelledby="package-tier-group-label"
                className="grid grid-cols-1 gap-2.5 sm:grid-cols-2"
              >
                {PACKAGE_TIER_OPTIONS.map((tierOption) => {
                  const active = formState.packageTier === tierOption.id;
                  return (
                    <button
                      key={tierOption.id}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => {
                        setInquiryGenerated(false);
                        onChangeFormState((prev) => ({
                          ...prev,
                          packageTier: tierOption.id,
                        }));
                      }}
                      className={`rounded-xl border px-4 py-3 text-xs sm:text-sm font-semibold transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                        active
                          ? "border-violet-400 bg-violet-500/20 text-violet-200"
                          : "border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700 hover:text-white"
                      }`}
                    >
                      {tierOption.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Date & Estimated Guest Count */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="event-date-input"
                  className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-200 mb-2"
                >
                  <Calendar className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                  <span>3. Event Date</span>
                </label>
                <input
                  id="event-date-input"
                  type="date"
                  value={formState.eventDate}
                  onChange={(e) => {
                    setInquiryGenerated(false);
                    setErrors((prev) => ({ ...prev, eventDate: undefined }));
                    onChangeFormState((prev) => ({
                      ...prev,
                      eventDate: e.target.value,
                    }));
                  }}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
                />
                {errors.eventDate && (
                  <p
                    role="alert"
                    className="mt-1.5 flex items-center gap-1 text-xs text-rose-400"
                  >
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.eventDate}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="guest-count-input"
                  className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-200 mb-2"
                >
                  <Users className="h-4 w-4 text-amber-400" aria-hidden="true" />
                  <span>Estimated Players / Guests</span>
                </label>
                <input
                  id="guest-count-input"
                  type="number"
                  min={5}
                  max={2000}
                  value={formState.guestCountEstimate}
                  onChange={(e) => {
                    setInquiryGenerated(false);
                    setErrors((prev) => ({
                      ...prev,
                      guestCountEstimate: undefined,
                    }));
                    onChangeFormState((prev) => ({
                      ...prev,
                      guestCountEstimate: Number(e.target.value),
                    }));
                  }}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white font-mono-tabular focus:border-cyan-400 focus:outline-none"
                />
                {errors.guestCountEstimate && (
                  <p
                    role="alert"
                    className="mt-1.5 flex items-center gap-1 text-xs text-rose-400"
                  >
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.guestCountEstimate}</span>
                  </p>
                )}
              </div>
            </div>

            {/* 4. City / Area & Suburb */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="city-area-select"
                  className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-200 mb-2"
                >
                  <MapPin className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                  <span>4. City &amp; Service Zone</span>
                </label>
                <select
                  id="city-area-select"
                  value={formState.cityArea}
                  onChange={(e) => {
                    setInquiryGenerated(false);
                    onChangeFormState((prev) => ({
                      ...prev,
                      cityArea: e.target.value as CityArea,
                    }));
                  }}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
                >
                  {CITY_AREA_OPTIONS.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="neighborhood-input"
                  className="block text-xs sm:text-sm font-semibold text-slate-200 mb-2"
                >
                  Locality or Hotel Name (Optional)
                </label>
                <input
                  id="neighborhood-input"
                  type="text"
                  placeholder="e.g. Baner, Juhu, Della Resort"
                  value={formState.customNeighborhood}
                  onChange={(e) => {
                    setInquiryGenerated(false);
                    onChangeFormState((prev) => ({
                      ...prev,
                      customNeighborhood: e.target.value,
                    }));
                  }}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            {/* 5. Venue Type & Host Name */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  id="venue-type-group-label"
                  className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-200 mb-2"
                >
                  <Building2 className="h-4 w-4 text-violet-400" aria-hidden="true" />
                  <span>5. Venue Type</span>
                </label>
                <div
                  role="radiogroup"
                  aria-labelledby="venue-type-group-label"
                  className="grid grid-cols-2 gap-2"
                >
                  {VENUE_TYPE_OPTIONS.map((venue) => {
                    const active = formState.venueType === venue;
                    return (
                      <button
                        key={venue}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => {
                          setInquiryGenerated(false);
                          onChangeFormState((prev) => ({
                            ...prev,
                            venueType: venue,
                          }));
                        }}
                        className={`rounded-xl border px-3 py-2 text-xs font-semibold transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                          active
                            ? "border-amber-400 bg-amber-500/15 text-amber-300"
                            : "border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700 hover:text-white"
                        }`}
                      >
                        {venue}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label
                  htmlFor="host-name-input"
                  className="block text-xs sm:text-sm font-semibold text-slate-200 mb-2"
                >
                  Your Name (Optional)
                </label>
                <input
                  id="host-name-input"
                  type="text"
                  placeholder="e.g. Priya Deshmukh"
                  value={formState.hostName}
                  onChange={(e) => {
                    setInquiryGenerated(false);
                    onChangeFormState((prev) => ({
                      ...prev,
                      hostName: e.target.value,
                    }));
                  }}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Submit & Direct WhatsApp Launch */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-950 hover:bg-cyan-400 transition-colors duration-150 whitespace-nowrap cursor-pointer"
              >
                <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>Send Booking Inquiry via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleCopyMessage}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-200 hover:border-slate-500 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
              >
                {copiedMessage ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                    <span>Copied Message</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-slate-400" aria-hidden="true" />
                    <span>Copy Quote Text</span>
                  </>
                )}
              </button>
            </div>

            {/* Confirmation & Direct WhatsApp Link Banner */}
            {inquiryGenerated && (
              <div
                role="status"
                className="rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-4 text-xs sm:text-sm text-emerald-200 space-y-2.5"
              >
                <div className="flex items-center gap-2 font-semibold text-emerald-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>
                    Your custom WhatsApp inquiry for {formState.eventType} ({selectedPackage.priceInr}) is ready!
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  Click the direct WhatsApp link below to open your chat with our
                  events coordinator (+{WHATSAPP_NUMBER}):
                </p>
                <div className="pt-1">
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>Open WhatsApp Chat (+{WHATSAPP_NUMBER})</span>
                  </a>
                </div>
              </div>
            )}
          </form>

          {/* Right 5 Cols: Live Quote Summary & Pre-Filled Message Preview */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/65 p-6 sm:p-8 space-y-6">
            <div className="border-b border-slate-800/80 pb-4">
              <p className="text-xs font-semibold text-amber-400">
                Live Quote &amp; Throughput Summary
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-white">
                {selectedPackage.name}
              </h3>
              <div className="mt-2 flex items-baseline justify-between">
                <span className="font-mono-tabular text-2xl sm:text-3xl font-bold text-cyan-400">
                  {selectedPackage.priceInr}
                </span>
                <span className="text-xs text-slate-400">
                  {selectedPackage.duration} · {selectedPackage.headsets}
                </span>
              </div>
            </div>

            {/* Throughput Estimation Box */}
            <div className="grid grid-cols-2 gap-3 rounded-xl border border-slate-800/90 bg-slate-950/70 p-4">
              <div>
                <p className="text-xs text-slate-400">Hourly Capacity</p>
                <p className="mt-0.5 font-mono-tabular text-lg font-bold text-white">
                  ~{throughput.turnsPerHour} turns/hr
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Total Event Capacity</p>
                <p className="mt-0.5 font-mono-tabular text-lg font-bold text-amber-400">
                  Up to {throughput.totalTurns} turns
                </p>
              </div>
            </div>

            {/* Live Pre-Filled WhatsApp Message Preview */}
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>Pre-filled WhatsApp Inquiry Preview</span>
                <span className="font-mono-tabular text-cyan-400">
                  wa.me/{WHATSAPP_NUMBER}
                </span>
              </div>
              <pre
                data-testid="whatsapp-message-preview"
                className="whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono-tabular text-xs text-slate-200 leading-relaxed"
              >
                {previewMessage}
              </pre>
            </div>

            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-500/50 bg-cyan-500/10 px-4 py-3 text-xs sm:text-sm font-semibold text-cyan-300 hover:bg-cyan-500/20 transition-colors whitespace-nowrap"
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Launch Direct WhatsApp Chat Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
