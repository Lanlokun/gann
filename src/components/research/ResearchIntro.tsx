
import {
  BrainCircuit,
  Database,
  Network,
} from "lucide-react";

const principles = [
  {
    icon: BrainCircuit,
    title: "Understand the Brain",
    description:
      "Explore cognition, neural activity, behavior, and the computational principles underlying brain function.",
  },
  {
    icon: Database,
    title: "Advance Through Data",
    description:
      "Apply machine learning, computational modeling, and data-driven methods to neuroscience questions.",
  },
  {
    icon: Network,
    title: "Connect Disciplines",
    description:
      "Encourage collaboration between neuroscience, computer science, medicine, and related fields.",
  },
];

export default function ResearchIntro() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green-700">
              Our Scientific Vision
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
              Exploring the Brain Through
              Science and Computation
            </h2>

            <div className="mt-5 h-1 w-14 rounded-full bg-green-600" />

            <p className="mt-8 text-[15px] leading-8 text-slate-600">
              Neuroscience is increasingly shaped by advances
              in computation, artificial intelligence, and
              interdisciplinary scientific discovery.
              These developments create opportunities to
              investigate complex questions about how the
              brain processes information, supports cognition,
              and influences human behavior.
            </p>

            <p className="mt-5 text-[15px] leading-8 text-slate-600">
              GANN aims to help develop a research community
              in The Gambia that can participate in these
              advances, while encouraging approaches that
              reflect local priorities, available resources,
              and the needs of African communities.
            </p>

            <p className="mt-5 text-[15px] leading-8 text-slate-600">
              As a network in formation, our research agenda
              represents emerging areas of interest rather
              than established institutional programmes.
            </p>
          </div>

          <div className="space-y-5">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-5 rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 transition hover:border-blue-200 hover:shadow-md sm:p-7"
                >
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${
                      index === 1
                        ? "bg-green-50 text-green-700"
                        : "bg-blue-50 text-blue-700"
                    }`}
                  >
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#092653]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
