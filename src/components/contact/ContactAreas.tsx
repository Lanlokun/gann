
import {
  FlaskConical,
  BookOpen,
  UsersRound,
} from "lucide-react";

const areas = [
  {
    title: "Research Connections",
    description:
      "Discuss ideas, share expertise, and explore opportunities for collaborative research.",
    icon: FlaskConical,
  },
  {
    title: "Training & Capacity Building",
    description:
      "Explore workshops, courses, and skills development in neuroscience and related fields.",
    icon: BookOpen,
  },
  {
    title: "Community Engagement",
    description:
      "Connect around outreach, awareness, brain health, and initiatives that promote scientific literacy.",
    icon: UsersRound,
  },
];

export default function ContactAreas() {
  return (
    <section className="bg-white pb-20 lg:pb-28">
      <div className="container-main">
        <div className="grid gap-6 md:grid-cols-3">
          {areas.map((area) => {
            const Icon = area.icon;

            return (
              <div
                key={area.title}
                className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon
                  size={32}
                  strokeWidth={1.8}
                  className="text-green-700"
                />

                <h3 className="mt-5 text-lg font-extrabold leading-snug text-[#092653]">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
