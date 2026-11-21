
import Image from "next/image";

export default function TrainingHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071d40]">
      <Image
        src="/images/training-hero.webp"
        alt="Student exploring neuroscience through digital brain imaging"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#061b3d]/95 via-[#061b3d]/75 to-[#061b3d]/10" />

      <div className="container-main relative z-10 flex min-h-[360px] items-center py-20 sm:min-h-[420px]">
        <div className="max-w-[620px]">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-green-400">
            Training & Education
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[58px]">
            Learning at GANN
          </h1>

          <div className="mt-5 h-1 w-14 rounded-full bg-green-400" />

          <p className="mt-7 max-w-[510px] text-base leading-8 text-slate-100 sm:text-lg">
            Building skills and knowledge in neuroscience,
            computation, and artificial intelligence in
            The Gambia and across the region.
          </p>
        </div>
      </div>
    </section>
  );
}
