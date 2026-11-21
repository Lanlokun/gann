
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071d40]">
      <Image
        src="/images/about-hero.webp"
        alt="Neural connections representing neuroscience"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#061b3e]/95 via-[#061b3e]/70 to-[#061b3e]/10" />

      <div className="container-main relative z-10 flex min-h-[280px] flex-col justify-center py-16 text-white md:min-h-[320px]">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 text-sm text-white/75"
        >
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight size={15} />
          <span className="text-white">About</span>
        </nav>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          About GANN
        </h1>

        <p className="mt-5 max-w-xl text-base leading-7 text-white/85 md:text-lg">
          Discover the people, ideas, and ambitions behind
          The Gambia Neuroscience Network.
        </p>

        <div className="mt-6 h-1 w-14 rounded-full bg-[#18a65b]" />
      </div>
    </section>
  );
}
