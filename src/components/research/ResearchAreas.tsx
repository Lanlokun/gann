
import Image from "next/image";
import {
  BrainCircuit,
  Activity,
  Cpu,
  Scan,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

const researchAreas = [
  {
    icon: BrainCircuit,
    title: "Computational Neuroscience",
    description:
      "Investigating neural computation, brain representations, cognition, and behavior through mathematical models and data-driven approaches.",
  },
  {
    icon: Scan,
    title: "Neuroimaging & Brain Data",
    description:
      "Exploring EEG, fMRI, and other neurophysiological data to study neural activity, connectivity, and brain function.",
  },
  {
    icon: Cpu,
    title: "Machine Learning & NeuroAI",
    description:
      "Applying machine learning to neuroscience and exploring how insights from the brain can inform intelligent computational systems.",
  },
  {
    icon: Activity,
    title: "Brain-Computer Interfaces",
    description:
      "Investigating technologies that interpret neural signals and create new possibilities for human-computer interaction.",
  },
  {
    icon: HeartPulse,
    title: "AI for Brain & Mental Health",
    description:
      "Exploring computational approaches that may support research into neurological conditions, mental health, and accessible healthcare.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible & Inclusive Research",
    description:
      "Promoting ethical data practices, scientific reproducibility, fairness, and research relevant to African populations.",
  },
];

export default function ResearchAreas() {
  return (
    <section className="bg-[#f3f6fa] py-20 lg:py-28">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green-700">
            Areas of Exploration
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
            Our Research Focus
          </h2>

          <div className="mt-5 h-1 w-14 rounded-full bg-green-600" />

          <p className="mt-7 text-[15px] leading-8 text-slate-600">
            GANN seeks to connect researchers across several
            complementary fields. These emerging priorities
            provide a foundation for future scientific
            collaboration and interdisciplinary discovery.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-[#092653] group-hover:text-white">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 text-lg font-bold text-[#092653]">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {area.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Research imagery */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-[#07152a] shadow-sm">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/research-brain-activation.webp"
                alt="Three-view brain activation visualization"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>

            <div className="bg-white p-6">
              <h3 className="text-lg font-bold text-[#092653]">
                Understanding Brain Activity
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Neuroimaging and computational analysis can
                reveal patterns associated with neural
                activity, cognition, and brain function.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-[#07152a] shadow-sm">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/research-neurons.webp"
                alt="Scientific visualization of connected neurons"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="bg-white p-6">
              <h3 className="text-lg font-bold text-[#092653]">
                Exploring Neural Networks
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Computational models help researchers
                investigate information processing,
                learning, and connectivity in neural systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
