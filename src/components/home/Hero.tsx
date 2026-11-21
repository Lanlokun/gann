
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate w-full bg-[#092653]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero-banjul.webp"
          alt="Banjul waterfront and arch at sunset"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[65%_center]
            lg:object-center
          "
        />

        {/* Gradient to improve text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071d40]/80 via-[#071d40]/30 to-transparent" />
      </div>

      {/* Hero content */}
      <div
        className="
          container-main relative z-10
          flex min-h-[600px] items-center
          py-16
          lg:min-h-[480px]
          lg:py-12
        "
      >
        <div className="w-full max-w-[520px] text-white">
          {/* Eyebrow */}
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-white/90 sm:text-xs">
            The Gambia Neuroscience Network
          </p>

          {/* Main title */}
          <h1 className="text-[66px] font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-[82px] lg:text-[76px]">
            GANN
          </h1>

          {/* Headline */}
          <h2 className="mt-3 text-[25px] font-bold leading-[1.18] tracking-tight sm:text-[30px] lg:text-[28px]">
            Advancing Brain Science, AI,
            <br className="hidden sm:block" />
            and Mental Health in The Gambia
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-[480px] text-[14px] leading-[1.65] text-white/90">
            A collaborative, interdisciplinary network for neuroscience,
            computational neuroscience, and machine learning to drive
            research, training, and real-world impact in The Gambia
            and beyond.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="
                inline-flex items-center justify-center gap-2
                rounded-md bg-white px-5 py-3
                text-[13px] font-bold text-[#092653]
                shadow-sm transition hover:bg-slate-100
              "
            >
              Learn About GANN
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/join"
              className="
                inline-flex items-center justify-center
                rounded-md border border-white/80
                px-5 py-3 text-[13px] font-semibold text-white
                transition hover:bg-white/10
              "
            >
              Join the Network
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
