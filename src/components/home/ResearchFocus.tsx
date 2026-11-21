
import {
  BrainCircuit,
  Activity,
  Cpu,
  Headset,
  HeartPulse,
  Scale,
} from "lucide-react";

const researchAreas = [
  {
    title: "Computational Neuroscience",
    description:
      "Understanding neural systems through computational modeling, data analysis, and mathematical approaches.",
    icon: BrainCircuit,
  },
  {
    title: "Neuroimaging & Brain Data",
    description:
      "Exploring EEG, fMRI, and other methods to study brain structure, function, and cognition.",
    icon: Activity,
  },
  {
    title: "Machine Learning & NeuroAI",
    description:
      "Developing intelligent computational approaches to understand brain activity and neural representations.",
    icon: Cpu,
  },
  {
    title: "Brain–Computer Interfaces",
    description:
      "Investigating emerging technologies that connect neural activity with computational systems.",
    icon: Headset,
  },
  {
    title: "AI for Brain & Mental Health",
    description:
      "Exploring accessible and responsible AI approaches to neurological and mental health challenges.",
    icon: HeartPulse,
  },
  {
    title: "Ethics & Inclusive Innovation",
    description:
      "Promoting equitable, ethical, and locally relevant neuroscience and AI research.",
    icon: Scale,
  },
];

export default function ResearchFocus() {
  return (
    <section className="section-space bg-[#f4f7fb]">
      <div className="container-main">
        <div className="max-w-3xl">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-green-700">
            Areas of Interest
          </span>

          <h2 className="section-title">
            Our Research Focus
          </h2>

          <p className="mt-7 text-[15px] leading-8 text-slate-600">
            GANN aims to bring together neuroscience, machine learning,
            and computational science to explore fundamental questions
            about the brain and support innovation relevant to
            African communities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
                className="group rounded-xl border border-slate-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-[#092653] group-hover:text-white">
                  <Icon size={29} strokeWidth={1.6} />
                </div>

                <h3 className="text-lg font-bold text-[#092653]">
                  {area.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {area.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
