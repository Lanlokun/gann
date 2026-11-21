
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
} from "lucide-react";

import type { NewsArticle } from "@/data/news";

type Props = {
  article: NewsArticle;
};

export default function NewsCard({ article }: Props) {
  const date = new Date(
    `${article.date}T00:00:00Z`
  ).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/news-events/articles/${article.slug}`}>
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <span className="inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
            {article.category}
          </span>

          <h3 className="mt-4 text-lg font-extrabold leading-snug text-[#092653]">
            {article.title}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
            {article.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-4 text-xs text-slate-500">
            <span className="inline-flex items-center gap-2">
              <CalendarDays size={15} />
              {date}
            </span>

            <span className="inline-flex items-center gap-2">
              <Clock3 size={15} />
              {article.readTime} min read
            </span>

            <ArrowUpRight
              size={19}
              className="ml-auto text-blue-700"
            />
          </div>
        </div>
      </Link>
    </article>
  );
}
