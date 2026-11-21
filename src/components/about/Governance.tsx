
import {
  BrainCircuit,
  Building2,
  GraduationCap,
  HeartPulse,
  Network,
  Scale,
  UsersRound,
} from "lucide-react";

const workingGroups = [
  {
    title: "Research & Scientific Development",
    description:
      "Coordinate research interests, scientific discussions, collaborative projects, and knowledge exchange.",
    icon: BrainCircuit,
  },
  {
    title: "Machine Learning & NeuroAI",
    description:
      "Explore computational neuroscience, machine learning methods, brain data analysis, and responsible AI.",
    icon: Network,
  },
  {
    title: "Education & Capacity Building",
    description:
      "Support learning opportunities, mentorship, technical workshops, and interdisciplinary training.",
    icon: GraduationCap,
  },
  {
    title: "Clinical & Community Engagement",
    description:
      "Connect scientific inquiry with healthcare professionals, community needs, and public understanding.",
    icon: HeartPulse,
  },
];

export default function Governance() {
  return (
    <section
      id="governance"
      className="bg-white py-20 lg:py-28"
    >
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green-700">
            How We Envision Working
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
            Governance & Organization
          </h2>

          <div className="mt-5 h-1 w-14 rounded-full bg-green-600" />

          <p className="mt-6 text-[15px] leading-8 text-slate-600">
            As GANN develops, we envision a collaborative
            organizational model that combines scientific
            guidance, operational coordination, and active
            participation from members across disciplines.
          </p>
        </div>

        {/* Proposed structure */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-[#f7f9fc] p-6 sm:p-10">
          <div className="mx-auto max-w-lg rounded-xl bg-[#092653] px-6 py-6 text-center text-white shadow-lg">
            <Scale className="mx-auto mb-3 text-green-400" size={28} />
            <h3 className="text-lg font-bold">
              Scientific & Advisory Council
            </h3>
            <p className="mt-2 text-xs leading-6 text-slate-300">
              Proposed scientific guidance, ethical oversight,
              and strategic advice
            </p>
          </div>

          <div className="mx-auto h-10 w-px bg-slate-300" />

          <div className="mx-auto max-w-lg rounded-xl border border-blue-100 bg-white px-6 py-6 text-center shadow-sm">
            <Building2 className="mx-auto mb-3 text-blue-700" size={28} />
            <h3 className="text-lg font-bold text-[#092653]">
              Network Coordination Team
            </h3>
            <p className="mt-2 text-xs leading-6 text-slate-600">
              Proposed coordination of programmes,
              partnerships, communications, and operations
            </p>
          </div>

          <div className="mx-auto h-10 w-px bg-slate-300" />

          <div className="mx-auto max-w-lg rounded-xl border border-green-200 bg-green-50 px-6 py-5 text-center">
            <UsersRound className="mx-auto mb-2 text-green-700" size={27} />
            <h3 className="font-bold text-[#092653]">
              Members & Scientific Working Groups
            </h3>
            <p className="mt-2 text-xs leading-6 text-slate-600">
              Collaborative participation across research,
              education, technology, and community engagement
            </p>
          </div>
        </div>

        {/* Working groups */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[#092653]">
            Proposed Working Groups
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            The following groups represent potential areas
            for members to organize activities and contribute
            expertise as the network develops.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {workingGroups.map((group) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.title}
                  className="flex gap-5 rounded-xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <Icon size={24} className="text-blue-700" />
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-[#092653]">
                      {group.title}
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {group.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <p className="mt-8 text-xs italic leading-6 text-slate-500">
          Note: This organizational model is preliminary.
          Formal governance arrangements and working groups
          will be developed through the network formation process.
        </p>
      </div>
    </section>
  );
}
