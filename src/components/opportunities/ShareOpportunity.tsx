
import Link from "next/link";
import {
  Megaphone,
  ArrowRight,
} from "lucide-react";

export default function ShareOpportunity() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="container-main">
        <div className="grid items-center gap-8 rounded-2xl bg-[#e9f7ea] p-8 md:grid-cols-[auto_1fr_auto] md:p-10">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/70 text-green-700">
            <Megaphone size={34} strokeWidth={1.8} />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-[#092653] sm:text-3xl">
              Share an Opportunity
            </h2>

            <p className="mt-3 max-w-[650px] text-sm leading-7 text-slate-700">
              Know of a relevant scholarship, fellowship,
              research position, grant, internship, or
              scientific event? Help make opportunities
              more accessible by sharing them with GANN.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-xl border border-green-700 bg-white px-6 py-4 text-sm font-bold text-green-800 transition hover:bg-green-50"
          >
            Submit an Opportunity
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
