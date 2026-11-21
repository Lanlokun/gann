
import {
  Brain,
  Code2,
  Cpu,
  Scan,
  Activity,
  Network,
} from "lucide-react";

const pathways = [
  {
    icon: Brain,
    title: "Foundations of Neuroscience",
    description:
      "Explore the nervous system, brain anatomy, neural communication, cognition, and behavior.",
    topics: ["Brain anatomy", "Neural systems", "Cognition"],
    color: "blue",
  },
  {
    icon: Code2,
    title: "Python for Neuroscience",
    description:
      "Develop programming skills for scientific computing, data processing, visualization, and reproducible research.",
    topics: ["Python", "NumPy & Pandas", "Visualization"],
    color: "green",
  },
  {
    icon: Cpu,
    title: "Machine Learning & NeuroAI",
    description:
      "Learn how machine learning and artificial intelligence can support neuroscience research and brain-inspired computation.",
    topics: ["Machine learning", "Deep learning", "NeuroAI"],
    color: "purple",
  },
  {
    icon: Scan,
    title: "Neuroimaging & Brain Data",
    description:
      "Explore methods for working with brain imaging data, including fMRI analysis and computational interpretation.",
    topics: ["fMRI", "Brain imaging", "Data analysis"],
    color: "blue",
  },
  {
    icon: Activity,
    title: "EEG & Brain Signals",
    description:
      "Understand neural recordings, electrophysiological signals, preprocessing, and brain signal analysis.",
    topics: ["EEG", "Signal processing", "Brain activity"],
    color: "green",
  },
  {
    icon: Network,
    title: "Computational Neuroscience",
    description:
      "Explore mathematical models of neural systems, neural networks, and computational approaches to understanding the brain.",
    topics: ["Neural models", "Simulation", "Computation"],
    color: "purple",
  },
];

const colors = {
  blue: "bg-blue-50 text-blue-700",
  green: "bg-green-50 text-green-700",
  purple: "bg-purple-50 text-purple-700",
};

export default function TrainingPathways() {
  return (
    <section className="bg-[#f4f7fb] py-20 lg:py-28">
      <div className="container-main">
        <div className="max-w-[760px]">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-700">
            Learning Pathways
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
            Explore What You Can Learn
          </h2>

          <div className="mt-5 h-1 w-14 rounded-full bg-green-600" />

          <p className="mt-7 text-[15px] leading-8 text-slate-600">
            GANN is exploring a range of learning pathways
            designed to connect foundational neuroscience
            knowledge with modern computational tools.
            These proposed areas will help guide future
            educational activities and collaborations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pathways.map((pathway) => {
            const Icon = pathway.icon;

            return (
              <article
                key={pathway.title}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                    colors[pathway.color as keyof typeof colors]
                  }`}
                >
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 text-lg font-bold text-[#092653]">
                  {pathway.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {pathway.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {pathway.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-green-700">
                    Proposed Learning Area
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
