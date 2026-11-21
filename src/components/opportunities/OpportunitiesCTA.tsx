
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OpportunitiesCTA() {
  return (
<section className="bg-white pb-8">
          <div className="relative isolate overflow-hidden bg-[#061b3b] py-20 lg:py-24">
        <Image
          src="/images/research-wave-banner.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-65"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#061b3b]/95 via-[#061b3b]/80 to-[#061b3b]/20" />

        <div className="container-main relative z-10">
          <div className="max-w-[750px]">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-green-400">
              Stay Connected
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Be Part of GANN&apos;s Opportunities Network
            </h2>

            <p className="mt-6 max-w-[620px] text-[15px] leading-8 text-slate-200">
              Join our emerging community and stay connected
              as we share opportunities, explore research
              collaborations, and develop resources for
              neuroscience and NeuroAI.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#092653] transition hover:bg-slate-100"
              >
                Join GANN
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/training"
                className="inline-flex items-center gap-3 rounded-xl border border-white/50 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Explore Training
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
