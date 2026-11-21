
import {
  Check,
  CircleDot,
  Compass,
  FlaskConical,
  GraduationCap,
  Network,
} from "lucide-react";

const milestones = [
  {
    phase: "Phase 01",
    title: "Network Formation",
    status: "In progress",
    description:
      "Define the network's identity, engage interested contributors, establish communication channels, and develop its initial organizational foundations.",
    icon: Compass,
    active: true,
  },
  {
    phase: "Phase 02",
    title: "Community Development",
    status: "Planned",
    description:
      "Grow an interdisciplinary community of researchers, students, clinicians, educators, and technology professionals.",
    icon: Network,
    active: false,
  },
  {
    phase: "Phase 03",
    title: "Training & Scientific Exchange",
    status: "Planned",
    description:
      "Explore seminars, reading groups, workshops, mentorship, and practical learning opportunities in neuroscience and machine learning.",
    icon: GraduationCap,
    active: false,
  },
  {
    phase: "Phase 04",
    title: "Research & Partnerships",
    status: "Long-term direction",
    description:
      "Pursue collaborative research initiatives, institutional relationships, scientific projects, and opportunities for wider regional participation.",
    icon: FlaskConical,
    active: false,
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="bg-[#f5f7fb] py-20 lg:py-28"
    >
      <div className="container-main">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green-700">
            Looking Ahead
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
            Our Development Roadmap
          </h2>

          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-green-600" />

          <p className="mt-6 text-[15px] leading-8 text-slate-600">
            GANN is at the beginning of its journey.
            Our proposed roadmap outlines how the network
            could grow from an emerging initiative into
            an active scientific community.
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute bottom-10 left-[23px] top-10 w-px bg-slate-200 md:left-1/2" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;

              return (
                <div
                  key={milestone.phase}
                  className="relative grid items-center gap-6 md:grid-cols-[1fr_60px_1fr]"
                >
                  <div
                    className={`ml-16 md:ml-0 ${
                      index % 2 === 0
                        ? "md:col-start-1 md:row-start-1"
                        : "md:col-start-3 md:row-start-1"
                    }`}
                  >
                    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-green-700">
                          {milestone.phase}
                        </span>

                        <span
                          className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                            milestone.active
                              ? "bg-green-50 text-green-700"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {milestone.status}
                        </span>
                      </div>

                      <div className="mt-5 flex items-center gap-3">
                        <Icon
                          size={24}
                          className="shrink-0 text-blue-700"
                        />

                        <h3 className="text-lg font-bold text-[#092653]">
                          {milestone.title}
                        </h3>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-0 top-8 z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#f5f7fb] bg-[#092653] text-white md:static md:col-start-2 md:row-start-1 md:mx-auto">
                    {milestone.active ? (
                      <Check size={19} />
                    ) : (
                      <CircleDot size={18} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-xs italic leading-6 text-slate-500">
          This roadmap is indicative rather than a fixed
          implementation schedule. Activities and priorities
          may evolve as the network develops.
        </p>
      </div>
    </section>
  );
}
