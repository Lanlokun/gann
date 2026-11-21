
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GetInvolved() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-24"
      style={{
        backgroundImage: "url('/images/neuron-banner.webp')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#061b3e]/95 via-[#061b3e]/75 to-[#061b3e]/10" />

      <div className="container-main relative z-10 text-white">
        <div className="max-w-[620px]">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
            Become Part of the Community
          </span>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Get Involved
          </h2>

          <p className="mt-6 text-base leading-8 text-white/85">
            Whether you are a student, researcher, clinician,
            educator, or technology enthusiast, there is a place
            for your ideas and expertise in the future of
            neuroscience in The Gambia.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/join"
              className="inline-flex items-center gap-3 rounded-md bg-white px-7 py-4 text-sm font-bold text-[#092653] transition hover:bg-slate-100"
            >
              Join GANN
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-md border border-white/70 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
