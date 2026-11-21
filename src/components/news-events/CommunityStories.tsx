
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  PenLine,
  Users,
} from "lucide-react";

export default function CommunityStories() {
  return (
    <section className="bg-[#f4f7fb] py-20 lg:py-28">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-700">
              Community Voices
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
              Every Scientific Journey Has a Story
            </h2>

            <div className="mt-5 h-1 w-14 rounded-full bg-green-600" />

            <p className="mt-7 text-[15px] leading-8 text-slate-600">
              The future of neuroscience in The Gambia
              will be shaped by people from many different
              backgrounds. We want this platform to create
              space for their ideas, perspectives, and
              experiences.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <PenLine
                  size={25}
                  className="mt-1 shrink-0 text-blue-700"
                />

                <div>
                  <h3 className="font-bold text-[#092653]">
                    Share Your Perspective
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Contribute educational articles,
                    research reflections, or perspectives
                    on neuroscience and NeuroAI.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users
                  size={25}
                  className="mt-1 shrink-0 text-green-700"
                />

                <div>
                  <h3 className="font-bold text-[#092653]">
                    Highlight Community Work
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Help bring attention to research,
                    learning initiatives, and scientific
                    contributions across our communities.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#092653] px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-800"
            >
              Share a Story
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-slate-200 shadow-lg">
            <Image
              src="/images/news-community.webp"
              alt="Student reflecting on academic research in a library"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
