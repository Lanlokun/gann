
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
} from "lucide-react";

const articles = [
  {
    category: "Community",
    title: "Building a Neuroscience Community in The Gambia",
    description:
      "Exploring how an interdisciplinary network can connect scientific talent and create opportunities for collaboration.",
    image: "/images/workshop.webp",
  },
  {
    category: "Research",
    title: "The Promise of Computational Neuroscience",
    description:
      "Understanding how brain imaging, computational models, and machine learning can support scientific discovery.",
    image: "/images/brain-imaging.webp",
  },
  {
    category: "Education",
    title: "Growing the Next Generation of Neuroscientists",
    description:
      "Our vision for accessible training, mentorship, and interdisciplinary learning.",
    image: "/images/training.webp",
  },
];

export default function NewsEvents() {
  return (
    <section className="section-space bg-white">
      <div className="container-main">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-green-700">
              Insights & Community
            </span>

            <h2 className="section-title">
              News & Insights
            </h2>

            <p className="mt-7 max-w-2xl text-[15px] leading-8 text-slate-600">
              Explore ideas, emerging research directions, and the
              vision behind our growing neuroscience community.
            </p>
          </div>

          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#092653]"
          >
            View All Insights
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-xl"
            >
              <div className="relative h-[230px] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <span className="text-xs font-bold uppercase tracking-wider text-green-700">
                  {article.category}
                </span>

                <h3 className="mt-4 text-lg font-bold leading-7 text-[#092653]">
                  {article.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {article.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <BookOpen size={15} />
                  Topic preview
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
