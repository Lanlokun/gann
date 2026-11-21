
import {
  GraduationCap,
  Microscope,
  Stethoscope,
  Code2,
  BookOpen,
  Users,
} from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    description:
      "University students and emerging scientists interested in neuroscience and computation.",
  },
  {
    icon: Microscope,
    title: "Researchers",
    description:
      "Researchers seeking interdisciplinary knowledge and computational research skills.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Professionals",
    description:
      "Clinicians and health professionals interested in brain science and neurological research.",
  },
  {
    icon: Code2,
    title: "Technology Professionals",
    description:
      "Developers, data scientists, and AI practitioners exploring neuroscience applications.",
  },
  {
    icon: BookOpen,
    title: "Educators",
    description:
      "Teachers and academic professionals interested in developing neuroscience education.",
  },
  {
    icon: Users,
    title: "Curious Learners",
    description:
      "Individuals from other disciplines motivated to explore the science of the brain.",
  },
];

export default function TrainingAudience() {
  return (
    <section className="bg-[#f4f7fb] py-20 lg:py-28">
      <div className="container-main">
        <div className="text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-700">
            Who Can Participate
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
            Learning Is for Everyone
          </h2>

          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-green-600" />

          <p className="mx-auto mt-7 max-w-[700px] text-[15px] leading-8 text-slate-600">
            Neuroscience benefits from diverse perspectives.
            GANN aims to create an inclusive learning
            environment that welcomes people from different
            academic and professional backgrounds.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <Icon
                  size={28}
                  className="text-blue-700"
                  strokeWidth={1.8}
                />

                <h3 className="mt-5 text-lg font-bold text-[#092653]">
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
    </section>
  );
}
