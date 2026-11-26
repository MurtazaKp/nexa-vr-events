import React, { useState } from "react";
import {
  WHATSAPP_NUMBER,
  QuoteFormState,
  QuoteEventType,
  PackageTierId,
} from "./utils/booking";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { EventTabsSection } from "./components/EventTabsSection";
import { ExperiencesGridSection } from "./components/ExperiencesGridSection";
import { HygieneSetupSection } from "./components/HygieneSetupSection";
import { PricingSection } from "./components/PricingSection";
import { QuoteBuilderSection } from "./components/QuoteBuilderSection";
import { FaqFooterSection } from "./components/FaqFooterSection";

// Single top-level constant re-exported / referenced for quick access
export { WHATSAPP_NUMBER };

export default function App() {
  const [quoteFormState, setQuoteFormState] = useState<QuoteFormState>({
    eventType: "Birthday Party",
    packageTier: "signature",
    eventDate: "2026-12-12",
    cityArea: "Pune (Koregaon Park / Baner / Wakad / Kothrud)",
    customNeighborhood: "",
    venueType: "Home",
    guestCountEstimate: 35,
    hostName: "",
  });

  const scrollToQuoteBuilder = () => {
    const el = document.getElementById("quote-builder");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectEventForQuote = (
    eventType: QuoteEventType,
    recommendedTier: PackageTierId
  ) => {
    setQuoteFormState((prev) => ({
      ...prev,
      eventType,
      packageTier: recommendedTier,
    }));
    scrollToQuoteBuilder();
  };

  const handleSelectPackage = (tierId: PackageTierId) => {
    setQuoteFormState((prev) => ({
      ...prev,
      packageTier: tierId,
    }));
    scrollToQuoteBuilder();
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1">
        <HeroSection onCheckDateClick={scrollToQuoteBuilder} />
        <EventTabsSection onSelectEventForQuote={handleSelectEventForQuote} />
        <ExperiencesGridSection />
        <HygieneSetupSection />
        <PricingSection
          selectedTier={quoteFormState.packageTier}
          onSelectPackage={handleSelectPackage}
        />
        <QuoteBuilderSection
          formState={quoteFormState}
          onChangeFormState={setQuoteFormState}
        />
        <FaqFooterSection />
      </main>
    </div>
  );
}
