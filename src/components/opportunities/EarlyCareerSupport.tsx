
import {
  GraduationCap,
  BookOpen,
  Compass,
  Users,
} from "lucide-react";

const supportAreas = [
  {
    icon: GraduationCap,
    title: "Academic Pathways",
    description:
      "Explore graduate studies, research degrees, and academic routes into neuroscience.",
  },
  {
    icon: BookOpen,
    title: "Application Resources",
    description:
      "Discover resources for preparing research statements, academic CVs, and funding applications.",
  },
  {
    icon: Compass,
    title: "Career Exploration",
    description:
      "Learn about careers connecting neuroscience, computation, healthcare, and artificial intelligence.",
  },
  {
    icon: Users,
    title: "Community Connections",
    description:
      "Connect with peers and researchers who share interests in brain science and emerging technologies.",
  },
];

export default function EarlyCareerSupport() {
  return (
    <section className="bg-[#f4f7fb] py-20 lg:py-24">
      <div className="container-main">
        <div className="max-w-[760px]">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-700">
            Early-Career Support
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
            Supporting the Next Generation of Researchers
          </h2>

          <div className="mt-5 h-1 w-14 rounded-full bg-green-600" />

          <p className="mt-7 text-[15px] leading-8 text-slate-600">
            Building a career in neuroscience can involve
            navigating unfamiliar academic pathways,
            research opportunities, and funding systems.
            GANN aims to make relevant information and
            connections more accessible to emerging
            researchers.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {supportAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon size={25} />
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
      </div>
    </section>
  );
}
