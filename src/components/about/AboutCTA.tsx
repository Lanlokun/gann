
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Network,
  UsersRound,
} from "lucide-react";

const opportunities = [
  {
    icon: BrainCircuit,
    title: "Contribute Ideas",
    description:
      "Help identify scientific priorities and opportunities for collaborative research.",
    color: "text-blue-700",
    background: "bg-blue-50",
  },
  {
    icon: UsersRound,
    title: "Connect With Others",
    description:
      "Meet researchers, students, clinicians, and technology professionals.",
    color: "text-green-700",
    background: "bg-green-50",
  },
  {
    icon: Network,
    title: "Build Together",
    description:
      "Explore opportunities to contribute to the network's development.",
    color: "text-violet-700",
    background: "bg-violet-50",
  },
];

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-[#eef4fa] py-20 lg:py-28">
      <div className="container-main">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-green-700">
            Be Part of the Beginning
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl lg:text-5xl">
            Help Shape the Future of GANN
          </h2>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-green-600" />

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600">
            The Gambia Neuroscience Network is taking shape,
            and meaningful collaboration begins with people.
            Whether your background is in neuroscience,
            medicine, machine learning, education, or another
            related field, your perspective and expertise
            can help shape what comes next.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {opportunities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.background}`}
                >
                  <Icon
                    size={27}
                    strokeWidth={1.8}
                    className={item.color}
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#092653]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            href="/join"
            className="inline-flex items-center gap-3 rounded-lg bg-[#092653] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#123d77]"
          >
            Join the Network
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-lg border border-[#092653] px-8 py-4 text-sm font-bold text-[#092653] transition hover:bg-white"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
