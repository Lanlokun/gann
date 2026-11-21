
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  UsersRound,
  UserRound,
} from "lucide-react";

const team = [
  {
    role: "Founding Leadership",
    focus: "Network strategy, development, and institutional engagement",
    icon: UsersRound,
  },
  {
    role: "Scientific Leadership",
    focus: "Research direction, scientific quality, and collaboration",
    icon: BrainCircuit,
  },
  {
    role: "Technology & Innovation",
    focus: "Machine learning, computational tools, and NeuroAI",
    icon: Code2,
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="bg-[#f5f7fb] py-20 lg:py-28"
    >
      <div className="container-main">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green-700">
            The People Behind GANN
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
            Founding Team & Leadership
          </h2>

          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-green-600" />

          <p className="mt-6 text-[15px] leading-8 text-slate-600">
            GANN is being developed through a shared commitment
            to advancing neuroscience, computational research,
            and machine learning in The Gambia. As the network
            takes shape, its founding team and leadership
            profiles will be introduced here.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {team.map((member) => {
            const Icon = member.icon;

            return (
              <article
                key={member.role}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-[#e9eff8] to-[#dce7f5]">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white bg-white/70 shadow-sm">
                    <Icon
                      size={42}
                      strokeWidth={1.4}
                      className="text-[#092653]"
                    />
                  </div>
                </div>

                <div className="p-7">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-green-700">
                    Profile to be announced
                  </p>

                  <h3 className="text-xl font-bold text-[#092653]">
                    {member.role}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-7 text-slate-600">
                    {member.focus}
                  </p>

                  <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-5 text-xs font-semibold text-slate-400">
                    <UserRound size={15} />
                    Details forthcoming
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-blue-100 bg-white p-7 sm:flex-row sm:items-center lg:p-9">
          <div>
            <h3 className="text-lg font-bold text-[#092653]">
              A Network Built Through Collaboration
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
              GANN welcomes expressions of interest from
              researchers, clinicians, educators, students,
              and technology professionals who would like
              to contribute to its development.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 font-semibold text-[#092653] hover:text-blue-700"
          >
            Express Interest
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
