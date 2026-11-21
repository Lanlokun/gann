
import Link from "next/link";
import {
  ArrowRight,
  Handshake,
} from "lucide-react";

export default function Partners() {
  return (
    <section className="border-t border-slate-100 bg-[#f5f7fb] py-20">
      <div className="container-main">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-[720px]">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-green-700">
              Collaboration
            </span>

            <h2 className="section-title">
              Building Partnerships
            </h2>

            <p className="mt-7 text-[15px] leading-8 text-slate-600">
              We welcome opportunities to collaborate with
              universities, research institutions, healthcare
              organizations, technology communities, and
              individuals who share our interest in advancing
              neuroscience and machine learning in The Gambia.
            </p>
          </div>

          <Link
            href="/contact"
            className="btn-primary shrink-0"
          >
            <Handshake size={19} />
            Explore Collaboration
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
