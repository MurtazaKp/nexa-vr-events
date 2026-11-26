import React, { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, buildWhatsAppUrl } from "../utils/booking";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const quickWhatsAppUrl = buildWhatsAppUrl(
    "Hi NexaVR Events! I'd like to check date availability and pricing for a VR event stall in Pune / Mumbai / Lonavala.",
    WHATSAPP_NUMBER
  );

  const navLinks = [
    { label: "Experiences", href: "#experiences" },
    { label: "Events", href: "#events" },
    { label: "Hygiene & Setup", href: "#hygiene-setup" },
    { label: "Packages", href: "#packages" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#090D16]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-display text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
        >
          NexaVR Events
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-cyan-400 transition-colors duration-150 whitespace-nowrap shrink-0 underline-offset-8 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={quickWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Book on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex md:hidden items-center justify-center rounded-lg border border-slate-800 p-2 text-slate-300 hover:bg-slate-900 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden border-t border-slate-800/80 bg-[#090D16]/95 px-4 py-3"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-800/60 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#quote-builder"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-cyan-400 hover:bg-slate-800/60 transition-colors"
            >
              Instant Quote Builder
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
