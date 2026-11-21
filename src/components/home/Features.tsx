
import {
  Brain,
  GraduationCap,
  UsersRound,
  Sprout,
} from "lucide-react";

const features = [
  {
    title: "Research",
    description:
      "Advancing neuroscience through interdisciplinary inquiry, data, and scientific discovery.",
    icon: Brain,
    color: "text-blue-700",
    bg: "bg-blue-50",
  },
  {
    title: "Training",
    description:
      "Developing skills in neuroscience, computational methods, machine learning, and NeuroAI.",
    icon: GraduationCap,
    color: "text-violet-700",
    bg: "bg-violet-50",
  },
  {
    title: "Collaboration",
    description:
      "Connecting researchers, students, clinicians, and technology communities.",
    icon: UsersRound,
    color: "text-green-700",
    bg: "bg-green-50",
  },
  {
    title: "Impact",
    description:
      "Translating knowledge and innovation into meaningful local and regional impact.",
    icon: Sprout,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];

export default function Features() {
  return (
    <section className="relative z-10 -mt-10">
      <div className="container-main">
        <div className="grid gap-5 rounded-2xl border border-slate-100 bg-white p-7 shadow-[0_15px_60px_rgba(9,38,83,0.12)] md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.title} className="p-3">
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${feature.bg}`}
                >
                  <Icon
                    className={feature.color}
                    size={29}
                    strokeWidth={1.7}
                  />
                </div>

                <h3 className="text-lg font-bold text-[#092653]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
