import React, { useState } from "react";
import { ChevronDown, MessageCircle, Instagram, MapPin } from "lucide-react";
import { WHATSAPP_NUMBER, buildWhatsAppUrl } from "../utils/booking";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-kids-glasses",
    question: "Is it safe for kids and people wearing glasses?",
    answer:
      "Yes, 100%. Our Meta Quest headsets are fitted with dedicated eyeglass spacers so guests can play comfortably without removing their prescription glasses. For kids (ages 7+), our on-site operator locks a fixed 10×10 ft virtual Guardian boundary and monitors every turn within arm's reach.",
  },
  {
    id: "faq-sarees-heels",
    question: "Can guests in sarees or heels play?",
    answer:
      "Absolutely. For Indian weddings and Sangeets, we curate outfit-safe experiences like iB Cricket, Richie's Plank, and seated 360° Roller Coasters that require zero jumping, crouching, or fast spinning. Guests in heavy sarees, lehengas, sherwanis, and heels play comfortably standing in place or seated.",
  },
  {
    id: "faq-no-wifi",
    question: "What if our venue doesn't have Wi-Fi or a TV?",
    answer:
      "We do not need venue Wi-Fi at all—all games run offline on our standalone headsets. A TV is not included in our packages: we cast the live gameplay wirelessly to your home or venue TV, and if your venue doesn't have a TV available, we stream the live view directly on our operator's laptop screen.",
  },
  {
    id: "faq-space-electricity",
    question: "How much space and electricity do you need?",
    answer:
      "All we need is a 10×10 ft clear floor corner (about the size of a living room rug) and one standard 5-Amp household plug point to power our casting router, laptop streamer, and headset battery chargers.",
  },
  {
    id: "faq-booking-advance",
    question: "How far in advance should we book for weekend dates?",
    answer:
      "Weekend birthday slots and peak wedding/Sangeet dates in Pune, Mumbai, and Lonavala typically book out 10 to 21 days in advance. You can lock your date slot instantly on WhatsApp with a 25% booking advance and pay the balance on event day after setup.",
  },
];

export const FaqFooterSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string>("faq-kids-glasses");

  const directWhatsAppUrl = buildWhatsAppUrl(
    "Hi NexaVR Events! I have a question about booking a VR stall for our upcoming event.",
    WHATSAPP_NUMBER
  );

  return (
    <>
      {/* FAQ Accordion Section */}
      <section
        id="faq"
        className="border-b border-slate-800/80 py-16 lg:py-24 scroll-mt-16"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs sm:text-sm font-medium text-violet-400">
              Host &amp; Parent Peace of Mind
            </p>
            <h2
              className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-white"
              style={{ textWrap: "balance" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Everything you need to know about hygiene, space, glasses, ethnic
              wear, and power requirements.
            </p>
          </div>

          <div className="mt-10 divide-y divide-slate-800/90 rounded-2xl border border-slate-800 bg-slate-900/35">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div key={item.id} className="p-5 sm:p-6">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenFaqId((prev) => (prev === item.id ? "" : item.id))
                    }
                    className="flex w-full items-center justify-between gap-4 text-left font-display text-base sm:text-lg font-semibold text-white hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-cyan-400 transition-transform duration-150 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quiet, High-Trust Footer */}
      <footer className="bg-[#090D16] py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 pb-10 border-b border-slate-800/80">
            {/* Brand & Description */}
            <div className="md:col-span-5">
              <span className="font-display text-xl font-bold tracking-tight text-white">
                NexaVR Events
              </span>
              <p className="mt-3 max-w-sm text-sm text-slate-400 leading-relaxed">
                India&apos;s premier mobile Virtual Reality entertainment arena for
                birthday parties, luxury weddings, Sangeets, cafe hangouts, and
                corporate events.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-300">
                <MapPin className="h-4 w-4 text-cyan-400 shrink-0" aria-hidden="true" />
                <span>
                  Active Hubs: Pune · Mumbai · Navi Mumbai · Thane · Lonavala
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h3 className="text-xs font-semibold text-white tracking-wide">
                Quick Navigation
              </h3>
              <ul className="mt-3 space-y-2.5 text-sm text-slate-400">
                <li>
                  <a href="#events" className="hover:text-cyan-400 transition-colors">
                    Event Formats
                  </a>
                </li>
                <li>
                  <a href="#experiences" className="hover:text-cyan-400 transition-colors">
                    VR Experiences Lineup
                  </a>
                </li>
                <li>
                  <a href="#hygiene-setup" className="hover:text-cyan-400 transition-colors">
                    Hygiene &amp; 10×10 Setup
                  </a>
                </li>
                <li>
                  <a href="#packages" className="hover:text-cyan-400 transition-colors">
                    INR Packages &amp; B2B Rates
                  </a>
                </li>
                <li>
                  <a href="#quote-builder" className="hover:text-cyan-400 transition-colors">
                    Instant WhatsApp Quote Builder
                  </a>
                </li>
              </ul>
            </div>

            {/* Direct Contact & Socials */}
            <div className="md:col-span-4">
              <h3 className="text-xs font-semibold text-white tracking-wide">
                Direct Booking &amp; Socials
              </h3>
              <p className="mt-3 text-sm text-slate-400">
                WhatsApp Booking Desk: <span className="font-mono-tabular text-slate-200">+{WHATSAPP_NUMBER}</span>
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2.5 text-xs font-semibold text-slate-950 hover:bg-cyan-400 transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:border-slate-700 hover:text-white transition-colors whitespace-nowrap"
                >
                  <Instagram className="h-4 w-4 text-violet-400" aria-hidden="true" />
                  <span>@nexavrevents.in</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} NexaVR Events India. All rights reserved.</p>
            <p>Pune · Mumbai · Lonavala Destination Events</p>
          </div>
        </div>
      </footer>
    </>
  );
};
