import React, { useState } from "react";
import {
  VR_EXPERIENCES,
  ExperienceFilter,
  filterExperiences,
} from "../utils/booking";
import { Gamepad2 } from "lucide-react";

const FILTER_OPTIONS: { id: ExperienceFilter; label: string }[] = [
  { id: "all", label: "All 6 Crowd Favorites" },
  { id: "weddings", label: "Weddings & Adults" },
  { id: "kids", label: "Kids & Teens (Ages 7–16)" },
  { id: "thrills", label: "Skyscraper & Coaster Thrills" },
];

export const ExperiencesGridSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ExperienceFilter>("all");
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const visibleGames = filterExperiences(VR_EXPERIENCES, activeFilter);

  return (
    <section
      id="experiences"
      className="border-b border-slate-800/80 py-16 lg:py-24 scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Bar */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium text-cyan-400">
              Curated Arcade Library · Fast 3–4 Minute Turns
            </p>
            <h2
              className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-white"
              style={{ textWrap: "balance" }}
            >
              Crowd-Favorite VR Experiences That Everyone Wants to Watch.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              We never run slow, complicated 30-minute solo quests at events. Every
              game in our lineup takes 30 seconds to learn and finishes in 3–4
              minutes so the whole party gets a turn.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="group"
            aria-label="Filter VR experiences by audience"
            className="flex flex-wrap items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900/60 p-1.5 self-start lg:self-auto"
          >
            {FILTER_OPTIONS.map((option) => {
              const isSelected = activeFilter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setActiveFilter(option.id)}
                  className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? "bg-violet-600 text-white shadow-sm"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 6-Card Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleGames.map((game, index) => (
            <article
              key={game.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-900/35 p-6 hover:border-slate-700 transition-colors duration-150"
            >
              <div>
                {/* Optional Visual Thumbnail for Spotlight Games or Clean Editorial Header */}
                {game.imagePath && !imgErrors[game.id] ? (
                  <div className="mb-5 overflow-hidden rounded-xl border border-slate-800/80 aspect-[16/9] bg-slate-950">
                    <img
                      src={game.imagePath}
                      alt={game.title}
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setImgErrors((prev) => ({ ...prev, [game.id]: true }))
                      }
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="mb-5 flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <span className="font-mono-tabular text-xs font-semibold text-cyan-400">
                      0{index + 1}. ARCADE TITLE
                    </span>
                    <Gamepad2 className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  </div>
                )}

                {/* Clean Unboxed Metadata Line (Zero-Pill Discipline) */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-amber-400">
                  <span className="font-mono-tabular">{game.sessionLength}</span>
                  <span aria-hidden="true">·</span>
                  <span>Thrill: {game.thrillLevel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{game.ageGroup}</span>
                </div>

                <h3 className="mt-2 font-display text-xl font-bold text-white">
                  {game.title}
                </h3>

                <p className="mt-1 text-xs sm:text-sm font-medium text-cyan-300">
                  {game.subtitle}
                </p>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {game.description}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-800/80 pt-3.5 text-xs text-slate-400 flex items-center justify-between gap-2">
                <span>{game.crowdFactor}</span>
                <span className="text-slate-300 font-medium whitespace-nowrap">
                  {game.outfitSafe ? "Outfit-Safe" : "Active"}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
