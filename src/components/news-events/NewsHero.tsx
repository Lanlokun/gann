
import Image from "next/image";

export default function NewsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#061b3b]">
      <Image
        src="/images/news-hero.webp"
        alt="Participants attending a scientific conference"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#061b3b]/95 via-[#061b3b]/70 to-[#061b3b]/5" />

      <div className="container-main relative z-10 flex min-h-[360px] items-center py-20 sm:min-h-[420px]">
        <div className="max-w-[630px]">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-green-400">
            News & Events
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Updates, Events,
            <br />
            and Community News
          </h1>

          <div className="mt-6 h-1 w-14 rounded-full bg-green-400" />

          <p className="mt-7 max-w-[530px] text-base leading-8 text-slate-100 sm:text-lg">
            Stay informed about GANN&apos;s announcements,
            research highlights, learning opportunities,
            and neuroscience events in The Gambia and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}
