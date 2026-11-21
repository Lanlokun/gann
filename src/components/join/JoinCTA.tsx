
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

export default function JoinCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#eef8fb] py-20 lg:py-24">
      {/* Decorative network image — smaller and subtle */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-[75%] w-[65%] opacity-[0.16] sm:w-[55%] lg:w-[48%]">
        <Image
          src="/images/join-network-mesh.webp"
          alt=""
          fill
          sizes="(max-width: 640px) 65vw, (max-width: 1024px) 55vw, 48vw"
          className="object-cover object-left-bottom"
        />
      </div>

      {/* Content */}
      <div className="container-main relative z-10">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-green-700">
            The Future Starts With Connection
          </p>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#092653] sm:text-4xl">
            Help Shape the Future of Neuroscience in The Gambia
          </h2>

          <div className="mx-auto mt-6 h-1 w-14 rounded-full bg-green-600" />

          <p className="mx-auto mt-7 max-w-[620px] text-[15px] leading-8 text-slate-700">
            Whether you are taking your first steps into
            neuroscience or bringing years of experience,
            your perspective can contribute to an emerging
            community of discovery, learning, and
            collaboration.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="#express-interest"
              className="inline-flex items-center gap-3 rounded-xl bg-[#092653] px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-800"
            >
              Express Your Interest
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-xl border border-[#092653]/20 bg-white px-7 py-4 text-sm font-bold text-[#092653] transition hover:bg-slate-50"
            >
              <Mail size={18} />
              Contact GANN
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
