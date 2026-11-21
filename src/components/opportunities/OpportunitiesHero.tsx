
import Image from "next/image";

export default function OpportunitiesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#061b3b]">
      <Image
        src="/images/opportunities-hero.webp"
        alt="African students collaborating on a laptop in a library"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#061b3b]/80 via-[#061b3b]/25 to-transparent" />

      <div className="container-main relative z-10 flex min-h-[360px] items-center py-20 sm:min-h-[420px]">
        <div className="max-w-[590px]">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-green-400">
            Opportunities
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[1.08]">
            Grow, Collaborate,
            <br />
            and Contribute
          </h1>

          <div className="mt-6 h-1 w-14 rounded-full bg-green-400" />

          <p className="mt-7 max-w-[510px] text-base leading-8 text-slate-100 sm:text-lg">
            Discover opportunities in neuroscience,
            computational neuroscience, machine learning,
            and NeuroAI — in The Gambia, across Africa,
            and globally.
          </p>
        </div>
      </div>
    </section>
  );
}
