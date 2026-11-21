
import {
  ArrowUpRight,
  BookOpen,
  Database,
  Code2,
  BrainCircuit,
} from "lucide-react";

const resources = [
  {
    icon: BrainCircuit,
    title: "OpenNeuro",
    description:
      "An open platform for sharing and exploring neuroscience datasets.",
    url: "https://openneuro.org/",
    category: "Brain Data",
  },
  {
    icon: Code2,
    title: "MNE-Python",
    description:
      "Open-source tools for analyzing EEG, MEG, and other electrophysiological data.",
    url: "https://mne.tools/",
    category: "Signal Analysis",
  },
  {
    icon: Database,
    title: "Nilearn",
    description:
      "Python tools for statistical learning and analysis of neuroimaging data.",
    url: "https://nilearn.github.io/",
    category: "Neuroimaging",
  },
  {
    icon: BookOpen,
    title: "Neuromatch Academy",
    description:
      "Educational resources in computational neuroscience, deep learning, and related fields.",
    url: "https://neuromatch.io/",
    category: "Education",
  },
];

export default function LearningResources() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-main">
        <div className="max-w-[760px]">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-700">
            Open Science
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
            Resources to Start Learning
          </h2>

          <div className="mt-5 h-1 w-14 rounded-full bg-green-600" />

          <p className="mt-7 text-[15px] leading-8 text-slate-600">
            You don't need to wait for a formal training
            programme to begin exploring neuroscience.
            These independent platforms provide tools,
            datasets, and educational materials for
            self-directed learning.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {resources.map((resource) => {
            const Icon = resource.icon;

            return (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-slate-200 p-7 transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon size={24} />
                  </div>

                  <ArrowUpRight
                    size={21}
                    className="text-slate-400 transition-colors group-hover:text-blue-700"
                  />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-wider text-green-700">
                  {resource.category}
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#092653]">
                  {resource.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {resource.description}
                </p>
              </a>
            );
          })}
        </div>

        <p className="mt-7 text-xs leading-6 text-slate-500">
          These are independent external resources and are
          not affiliated with or operated by GANN.
        </p>
      </div>
    </section>
  );
}
