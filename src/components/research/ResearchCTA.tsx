
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ResearchCTA() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#061b3b] py-20 lg:py-24"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(4,22,50,.96) 0%, rgba(4,22,50,.85) 40%, rgba(4,22,50,.1) 100%), url('/images/research-wave-banner.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-main relative z-10">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-green-400">
            Get Involved in Research
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Contribute to GANN&apos;s Research Agenda
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200">
            Are you working on a related research project,
            exploring a new idea, or interested in
            collaboration? We would love to hear from you.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-lg bg-white px-7 py-4 text-sm font-bold text-[#092653] transition hover:bg-slate-100"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/join"
              className="inline-flex items-center rounded-lg border border-white/60 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Join the Network
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
