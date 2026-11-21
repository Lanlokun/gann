
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Search,
  SlidersHorizontal,
  Inbox,
  X,
} from "lucide-react";

import OpportunityCard from "./OpportunityCard";
import { opportunities } from "@/data/opportunities";

const types = [
  "All Types",
  "Scholarship",
  "Fellowship",
  "Internship",
  "Research Position",
  "Grant",
  "Conference",
];

export default function FeaturedOpportunities() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All Types");
  const [region, setRegion] = useState("All Regions");
  const [level, setLevel] = useState("All Levels");

  const regions = useMemo(
    () => [
      "All Regions",
      ...Array.from(
        new Set(opportunities.map((item) => item.region))
      ).sort(),
    ],
    []
  );

  const levels = useMemo(
    () => [
      "All Levels",
      ...Array.from(
        new Set(opportunities.map((item) => item.level))
      ).sort(),
    ],
    []
  );

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    return opportunities.filter((item) => {
      const matchesSearch =
        !query ||
        [
          item.title,
          item.organization,
          item.description,
          item.location,
          item.type,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);

      const matchesType =
        type === "All Types" || item.type === type;

      const matchesRegion =
        region === "All Regions" || item.region === region;

      const matchesLevel =
        level === "All Levels" || item.level === level;

      const isOpen =
        !item.deadline ||
        /^\d{4}-\d{2}-\d{2}$/.test(item.deadline) &&
          new Date(`${item.deadline}T23:59:59Z`).getTime() >=
            Date.now();

      return (
        matchesSearch &&
        matchesType &&
        matchesRegion &&
        matchesLevel &&
        isOpen
      );
    });
  }, [search, type, region, level]);

  const hasFilters =
    search !== "" ||
    type !== "All Types" ||
    region !== "All Regions" ||
    level !== "All Levels";

  function resetFilters() {
    setSearch("");
    setType("All Types");
    setRegion("All Regions");
    setLevel("All Levels");
  }

  return (
    <section
      id="current-opportunities"
      className="bg-[#eef5fd] py-20 lg:py-28"
    >
      <div className="container-main">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.5fr] lg:gap-12">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-700">
              Featured Opportunities
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
              Current Opportunities
            </h2>

            <div className="mt-5 h-1 w-14 rounded-full bg-green-600" />

            <p className="mt-7 text-[15px] leading-8 text-slate-600">
              Discover external opportunities in
              neuroscience, computational research,
              artificial intelligence, and related fields.
            </p>

            <div className="relative mt-9 aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200">
              <Image
                src="/images/opportunities-researcher.webp"
                alt="Neuroscience researcher working with a microscope"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover object-center"
              />
            </div>

            <p className="mt-5 text-xs leading-6 text-slate-500">
              Listings will be added as relevant
              opportunities are verified.
            </p>
          </div>

          <div>
            <div className="mb-5 flex items-center gap-2 text-sm font-bold text-[#092653]">
              <SlidersHorizontal size={18} />
              Find an Opportunity
            </div>

            <div className="relative">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search opportunities, organizations, or keywords"
                aria-label="Search opportunities"
                className="w-full rounded-xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-sm text-[#092653] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <select
                value={type}
                onChange={(event) =>
                  setType(event.target.value)
                }
                aria-label="Filter by opportunity type"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#092653] outline-none focus:border-blue-500"
              >
                {types.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <select
                value={region}
                onChange={(event) =>
                  setRegion(event.target.value)
                }
                aria-label="Filter by region"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#092653] outline-none focus:border-blue-500"
              >
                {regions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <select
                value={level}
                onChange={(event) =>
                  setLevel(event.target.value)
                }
                aria-label="Filter by academic level"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#092653] outline-none focus:border-blue-500"
              >
                {levels.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="text-sm text-slate-600">
                <span className="font-bold text-[#092653]">
                  {filtered.length}
                </span>{" "}
                {filtered.length === 1
                  ? "opportunity"
                  : "opportunities"}{" "}
                found
              </p>

              {hasFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900"
                >
                  <X size={16} />
                  Clear Filters
                </button>
              )}
            </div>

            <div className="mt-5 space-y-4">
              {filtered.length > 0 ? (
                filtered.map((opportunity) => (
                  <OpportunityCard
                    key={opportunity.id}
                    opportunity={opportunity}
                  />
                ))
              ) : (
                <div className="rounded-2xl border border-slate-200 bg-white px-6 py-14 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Inbox size={30} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#092653]">
                    {hasFilters
                      ? "No Matching Opportunities"
                      : "Opportunities Coming Soon"}
                  </h3>

                  <p className="mx-auto mt-3 max-w-[400px] text-sm leading-7 text-slate-600">
                    {hasFilters
                      ? "No current listings match your search. Try adjusting your filters."
                      : "We're preparing a curated directory of scholarships, fellowships, research positions, grants, and scientific events. Check back as we begin publishing verified opportunities."}
                  </p>

                  {hasFilters && (
                    <button
                      type="button"
                      onClick={resetFilters}
                      className="mt-6 rounded-lg bg-[#092653] px-5 py-3 text-sm font-bold text-white hover:bg-blue-800"
                    >
                      Reset Filters
                    </button>
                  )}
                </div>
              )}
            </div>

            <p className="mt-6 text-xs leading-6 text-slate-500">
              External opportunities are managed by their
              respective organizations. Always verify
              eligibility, deadlines, and application
              requirements with the official provider.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
