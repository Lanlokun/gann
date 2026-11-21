
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, UsersRound } from "lucide-react";

export default function JoinHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#061b3b]">
      {/* Full-width sunset river background */}
      <Image
        src="/images/join-hero.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061b3b]/95 via-[#061b3b]/75 to-[#061b3b]/10" />

      {/* Brain and neural flow overlay */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[65%] lg:block">
        <Image
          src="/images/join-brain.webp"
          alt=""
          fill
          priority
          sizes="65vw"
          className="object-contain object-right"
        />
      </div>

      <div className="container-main relative z-10 flex min-h-[440px] items-center py-12 sm:py-14 lg:min-h-[480px]">
        <div className="max-w-[580px]">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#9cf57e] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-[#061b3b]">
            <UsersRound size={15} />
            Join GANN
          </span>

          <h1 className="mt-4 text-[32px] font-extrabold leading-[1.12] tracking-tight text-white sm:text-[38px] lg:text-[43px]">
            Be Part of The Gambia&apos;s Emerging{" "}
            <span className="text-[#9cf57e]">
              Neuroscience
            </span>{" "}
            Community
          </h1>

          <div className="mt-5 h-1 w-14 rounded-full bg-[#9cf57e]" />

          <p className="mt-5 max-w-[530px] text-sm leading-7 text-slate-100 sm:text-[15px]">
            GANN is in formation, bringing together people
            interested in neuroscience, computational
            neuroscience, machine learning, brain health,
            and their real-world applications in The Gambia
            and across Africa.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-5">
            <Link
              href="#express-interest"
              className="inline-flex items-center gap-3 rounded-lg bg-[#9cf57e] px-6 py-3.5 text-sm font-bold text-[#061b3b] transition hover:bg-[#b5ffa0]"
            >
              Express Your Interest
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#who-can-join"
              className="text-sm font-semibold text-white underline decoration-green-400 underline-offset-4 hover:text-green-200"
            >
              Discover Our Community
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
