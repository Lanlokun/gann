
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CollaborationSection() {
  return (
    <section className="bg-white pb-12 lg:pb-16">
      <div className="container-main">
        <div className="grid overflow-hidden rounded-2xl bg-[#e8f6f5] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[300px] lg:min-h-[390px]">
            <Image
              src="/images/news-microscope.webp"
              alt="Researcher examining a sample using a microscope"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-green-700">
              Collaborate With GANN
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
              Partner With Us
            </h2>

            <div className="mt-5 h-1 w-14 rounded-full bg-green-600" />

            <p className="mt-7 max-w-[590px] text-[15px] leading-8 text-slate-700">
              We are keen to build connections with
              researchers, academic institutions, healthcare
              professionals, technology experts, and
              organizations that share our interest in
              advancing neuroscience and brain health
              in The Gambia and across Africa.
            </p>

            <Link
              href="/research"
              className="mt-9 inline-flex w-fit items-center gap-3 rounded-lg bg-[#092653] px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-800"
            >
              Explore Research Collaboration
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
