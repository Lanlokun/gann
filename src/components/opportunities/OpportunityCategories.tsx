
import {
  GraduationCap,
  Users,
  Laptop,
  Microscope,
  Layers,
  CalendarDays,
} from "lucide-react";

const categories = [
  {
    icon: GraduationCap,
    title: "Scholarships",
    description:
      "Funding opportunities for undergraduate, graduate, and postgraduate studies.",
    color: "text-sky-600 bg-sky-50",
  },
  {
    icon: Users,
    title: "Fellowships",
    description:
      "Research fellowships and professional development programmes.",
    color: "text-purple-600 bg-purple-50",
  },
  {
    icon: Laptop,
    title: "Internships",
    description:
      "Practical experience in research, data science, and neurotechnology.",
    color: "text-green-600 bg-green-50",
  },
  {
    icon: Microscope,
    title: "Research Positions",
    description:
      "PhD, postdoctoral, and project-based research opportunities.",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: Layers,
    title: "Grants",
    description:
      "Funding for research, training, and collaborative scientific projects.",
    color: "text-violet-600 bg-violet-50",
  },
  {
    icon: CalendarDays,
    title: "Conferences",
    description:
      "Scientific meetings, workshops, summer schools, and networking events.",
    color: "text-emerald-600 bg-emerald-50",
  },
];

export default function OpportunityCategories() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container-main">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-700">
              Explore Opportunities
            </p>

            <h2 className="max-w-[570px] text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
              Opportunities Across Your Neuroscience Journey
            </h2>

            <div className="mt-5 h-1 w-14 rounded-full bg-green-600" />
          </div>

          <p className="max-w-[520px] text-[15px] leading-8 text-slate-600">
            From academic funding to research collaborations,
            explore pathways to develop your skills, gain
            experience, and build connections in neuroscience,
            machine learning, and related fields.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${category.color}`}
                >
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-base font-bold text-[#092653]">
                  {category.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-slate-600">
                  {category.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
