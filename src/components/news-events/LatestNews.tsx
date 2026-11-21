
"use client";

import { useMemo, useState } from "react";
import { Newspaper, Search } from "lucide-react";

import { newsArticles } from "@/data/news";
import NewsCard from "./NewsCard";

const categories = [
  "All",
  "Announcement",
  "Research",
  "Community",
  "Education",
  "NeuroAI",
];

export default function LatestNews() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    return newsArticles
      .filter((article) => {
        const matchesCategory =
          category === "All" ||
          article.category === category;

        const matchesSearch =
          !query ||
          [
            article.title,
            article.excerpt,
            article.category,
          ]
            .join(" ")
            .toLowerCase()
            .includes(query);

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => b.date.localeCompare(a.date));
  }, [category, search]);

  return (
    <section
      id="latest-news"
      className="bg-[#f4f7fb] py-20 lg:py-28"
    >
      <div className="container-main">
        <div className="max-w-[760px]">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-700">
            News & Insights
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
            Latest News & Articles
          </h2>

          <div className="mt-5 h-1 w-14 rounded-full bg-green-600" />

          <p className="mt-7 text-[15px] leading-8 text-slate-600">
            Explore articles, research highlights, and
            community perspectives connecting neuroscience,
            computation, machine learning, and society.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-5">
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  category === item
                    ? "bg-[#092653] text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-[270px]">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search articles"
              aria-label="Search articles"
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((article) => (
              <NewsCard
                key={article.id}
                article={article}
              />
            ))}
          </div>
        ) : (
          <div className="mt-9 rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <Newspaper size={30} />
            </div>

            <h3 className="mt-6 text-xl font-bold text-[#092653]">
              {search || category !== "All"
                ? "No Matching Articles"
                : "Our Newsroom Is Taking Shape"}
            </h3>

            <p className="mx-auto mt-3 max-w-[470px] text-sm leading-7 text-slate-600">
              {search || category !== "All"
                ? "Try a different keyword or select another category."
                : "We're preparing a space for neuroscience news, research insights, and community stories. Published articles will appear here."}
            </p>

            {(search || category !== "All") && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="mt-6 rounded-lg bg-[#092653] px-6 py-3 text-sm font-bold text-white"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
