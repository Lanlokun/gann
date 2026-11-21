
import {
  GraduationCap,
  Building2,
  Stethoscope,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const collaborators = [
  {
    icon: GraduationCap,
    title: "Researchers & Students",
    description:
      "Explore opportunities for scientific exchange, mentorship, collaborative inquiry, and skills development.",
  },
  {
    icon: Building2,
    title: "Universities & Research Institutions",
    description:
      "Discuss potential research collaborations, knowledge-sharing activities, and interdisciplinary initiatives.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Professionals",
    description:
      "Help connect neuroscience research with clinical perspectives, public health questions, and community needs.",
  },
  {
    icon: Code2,
    title: "Technology & AI Communities",
    description:
      "Contribute computational expertise in machine learning, data science, software engineering, and research tools.",
  },
];

export default function ResearchCollaboration() {
  return (
    <section className="bg-[#f3f6fa] py-20 lg:py-28">
      <div className="container-main">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green-700">
              Research Community
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
              Collaboration Across Disciplines
            </h2>

            <div className="mt-5 h-1 w-14 rounded-full bg-green-600" />

            <p className="mt-7 text-[15px] leading-8 text-slate-600">
              Building a neuroscience research ecosystem
              requires different forms of expertise.
              GANN welcomes conversations with individuals
              and organizations interested in shaping
              future collaborative activities.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 self-start rounded-lg bg-[#092653] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#123d77]"
          >
            Explore Collaboration
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {collaborators.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:shadow-md"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-green-50 text-green-700">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 text-lg font-bold text-[#092653]">
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
