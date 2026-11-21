
import {
  BrainCircuit,
  Network,
  GraduationCap,
  Globe2,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    title: "Connect Across Disciplines",
    description:
      "Meet people interested in brain science, healthcare, computing, psychology, and artificial intelligence.",
    icon: Network,
  },
  {
    number: "02",
    title: "Explore Research Ideas",
    description:
      "Discover opportunities to exchange ideas and explore potential collaborations in neuroscience and NeuroAI.",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "Grow Your Skills",
    description:
      "Stay informed about potential workshops, learning resources, mentorship, and research training.",
    icon: GraduationCap,
  },
  {
    number: "04",
    title: "Build Local and Global Connections",
    description:
      "Help strengthen links between emerging Gambian researchers and the wider African and international scientific community.",
    icon: Globe2,
  },
];

export default function WhyJoin() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-green-700">
              Why Get Involved
            </p>

            <h2 className="max-w-[450px] text-3xl font-extrabold leading-tight tracking-tight text-[#092653] sm:text-4xl">
              A Community Built Around Curiosity and Collaboration
            </h2>

            <div className="mt-6 h-1 w-14 rounded-full bg-green-600" />

            <p className="mt-7 max-w-[460px] text-[15px] leading-8 text-slate-600">
              Neuroscience is increasingly interdisciplinary.
              GANN aims to create an environment where
              different perspectives can contribute to
              understanding the brain and addressing
              challenges that matter to our communities.
            </p>

            <p className="mt-5 max-w-[460px] text-[15px] leading-8 text-slate-600">
              By expressing interest now, you can help
              shape the direction of this emerging network.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.number}
                  className="border-t border-slate-200 pt-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-green-700">
                      {benefit.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#092653]">
                      <Icon size={25} strokeWidth={1.8} />
                    </div>
                  </div>

                  <h3 className="mt-6 text-lg font-extrabold text-[#092653]">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {benefit.description}
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
