
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ResearchHero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#061b3b]"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(4,22,50,.92) 0%, rgba(4,22,50,.72) 43%, rgba(4,22,50,.05) 100%), url('/images/research-hero.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-main relative z-10 flex min-h-[380px] items-center py-20 lg:min-h-[430px]">
        <div className="max-w-[650px]">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-slate-300"
          >
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight size={15} />
            <span className="text-white">Research</span>
          </nav>

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-green-400">
            Research & Discovery
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Research at GANN
          </h1>

          <div className="mt-6 h-1 w-16 rounded-full bg-green-500" />

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
            Advancing understanding of the brain through
            interdisciplinary research, computation, and
            collaboration in The Gambia and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}
