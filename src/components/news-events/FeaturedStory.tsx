
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BrainCircuit } from "lucide-react";

import { newsArticles } from "@/data/news";

export default function FeaturedStory() {
  const featured =
    newsArticles.find((article) => article.featured) ??
    newsArticles[0];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-main">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-700">
              Featured Story
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
              From the GANN Community
            </h2>

            <div className="mt-5 h-1 w-14 rounded-full bg-green-600" />
          </div>

          <Link
            href="#latest-news"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900"
          >
            Explore News
            <ArrowRight size={17} />
          </Link>
        </div>

        {featured ? (
          <Link
            href={`/news-events/articles/${featured.slug}`}
            className="group grid overflow-hidden rounded-3xl bg-[#061b3b] lg:grid-cols-2"
          >
            <div className="relative min-h-[320px] lg:min-h-[430px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col justify-center p-8 text-white sm:p-12">
              <span className="w-fit rounded-full bg-green-100 px-4 py-2 text-xs font-bold text-green-800">
                {featured.category}
              </span>

              <h3 className="mt-6 text-2xl font-extrabold leading-tight sm:text-3xl">
                {featured.title}
              </h3>

              <p className="mt-5 text-sm leading-8 text-slate-200">
                {featured.excerpt}
              </p>

              <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-green-300">
                Read Story
                <ArrowRight size={18} />
              </span>
            </div>
          </Link>
        ) : (
          <div className="grid overflow-hidden rounded-3xl bg-[#061b3b] lg:grid-cols-2">
            <div className="relative min-h-[320px] lg:min-h-[420px]">
              <Image
                src="/images/news-neuroai-lab.webp"
                alt="Illustration of computational neuroscience research"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-8 text-white sm:p-12">
              <span className="w-fit rounded-full bg-green-100 px-4 py-2 text-xs font-bold text-green-800">
                Our Editorial Vision
              </span>

              <h3 className="mt-6 text-2xl font-extrabold leading-tight sm:text-3xl">
                A New Space for Neuroscience Ideas and Discoveries
              </h3>

              <p className="mt-5 text-sm leading-8 text-slate-200">
                As The Gambia Neuroscience Network takes
                shape, this space will bring together
                scientific perspectives, emerging research,
                educational insights, and stories from
                the wider neuroscience community.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-green-300">
                <BrainCircuit size={20} />
                Stories and announcements will appear here.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
