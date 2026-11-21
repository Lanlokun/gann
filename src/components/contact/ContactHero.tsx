
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#061b3b]">
      <Image
        src="/images/contact-hero.webp"
        alt="Baobab tree beside a river at sunset"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#061b3b]/95 via-[#061b3b]/70 to-transparent" />

      <div className="container-main relative z-10 flex min-h-[350px] items-center py-16 sm:min-h-[390px] lg:min-h-[420px]">
        <div className="max-w-[610px]">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-green-400">
            Contact GANN
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[56px]">
            Get in Touch
          </h1>

          <div className="mt-6 h-1 w-14 rounded-full bg-green-400" />

          <p className="mt-7 max-w-[540px] text-base leading-8 text-slate-100 sm:text-lg">
            We welcome your questions, ideas, and collaboration
            opportunities. Whether you&apos;re interested in
            research, training, partnerships, or getting
            involved in the network, we&apos;d be glad to
            hear from you.
          </p>
        </div>
      </div>
    </section>
  );
}
