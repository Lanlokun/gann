
import {
  Microscope,
  Database,
  UsersRound,
  Globe2,
} from "lucide-react";

const approaches = [
  {
    number: "01",
    icon: Microscope,
    title: "Scientific Rigor",
    description:
      "Encouraging well-designed studies, transparent methods, critical evaluation, and reproducible scientific practices.",
  },
  {
    number: "02",
    icon: Database,
    title: "Open Science & Shared Knowledge",
    description:
      "Supporting accessible research resources, knowledge exchange, and responsible sharing of scientific tools and data.",
  },
  {
    number: "03",
    icon: UsersRound,
    title: "Interdisciplinary Collaboration",
    description:
      "Bringing together researchers from neuroscience, computer science, medicine, psychology, and engineering.",
  },
  {
    number: "04",
    icon: Globe2,
    title: "African Research Relevance",
    description:
      "Encouraging research questions and methodologies that consider African populations, local contexts, and community needs.",
  },
];

export default function ResearchApproach() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green-700">
              How We Approach Research
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
              Grounded in Science.
              Driven by Collaboration.
            </h2>

            <div className="mt-5 h-1 w-14 rounded-full bg-green-600" />

            <p className="mt-8 text-[15px] leading-8 text-slate-600">
              Meaningful scientific progress depends on more
              than technology alone. It requires rigorous
              methodology, diverse perspectives, access to
              knowledge, and opportunities for researchers
              to learn from one another.
            </p>

            <p className="mt-5 text-[15px] leading-8 text-slate-600">
              GANN aims to encourage these principles as
              its research community and future activities
              take shape.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {approaches.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon size={24} />
                    </div>

                    <span className="text-3xl font-extrabold text-slate-200">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-bold text-[#092653]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
