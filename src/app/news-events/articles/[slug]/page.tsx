
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";

import { newsArticles } from "@/data/news";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const article = newsArticles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return {
      title: "Article Not Found | GANN",
    };
  }

  return {
    title: `${article.title} | GANN`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: Props) {
  const { slug } = await params;

  const article = newsArticles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  const formattedDate = new Date(
    `${article.date}T00:00:00Z`
  ).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <main className="bg-white">
      <article className="container-main py-16 lg:py-24">
        <div className="mx-auto max-w-[850px]">
          <Link
            href="/news-events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline"
          >
            <ArrowLeft size={17} />
            Back to News & Events
          </Link>

          <div className="mt-10">
            <span className="rounded-full bg-green-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-green-700">
              {article.category}
            </span>

            <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#092653] sm:text-5xl">
              {article.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {article.excerpt}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-slate-500">
              <span>By {article.author}</span>

              <span className="inline-flex items-center gap-2">
                <CalendarDays size={16} />
                {formattedDate}
              </span>

              <span className="inline-flex items-center gap-2">
                <Clock3 size={16} />
                {article.readTime} min read
              </span>
            </div>
          </div>

          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          <div className="mt-12 space-y-6 text-base leading-9 text-slate-700">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
