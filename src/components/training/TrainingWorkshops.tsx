
import Image from "next/image";
import {
  Presentation,
  Laptop,
  Users,
  CheckCircle2,
} from "lucide-react";

const experiences = [
  {
    icon: Presentation,
    title: "Expert Seminars",
    description:
      "Scientific talks and discussions introducing emerging ideas in neuroscience and NeuroAI.",
  },
  {
    icon: Laptop,
    title: "Hands-On Workshops",
    description:
      "Practical sessions focused on programming, brain data analysis, and computational research.",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description:
      "Peer learning, interdisciplinary study groups, and opportunities to exchange knowledge.",
  },
];

export default function TrainingWorkshops() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-slate-100 shadow-lg">
              <Image
                src="/images/training-workshop.webp"
                alt="Instructor teaching computational neuroscience to students"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm font-medium text-green-700">
              <CheckCircle2 size={18} />
              Practical, collaborative learning
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-700">
              Learning Experiences
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
              Beyond the Classroom
            </h2>

            <div className="mt-5 h-1 w-14 rounded-full bg-green-600" />

            <p className="mt-7 text-[15px] leading-8 text-slate-600">
              Scientific learning is most meaningful when
              knowledge can be explored, questioned, and
              applied. GANN envisions a combination of
              educational formats that encourage participation,
              experimentation, and collaboration.
            </p>

            <div className="mt-9 space-y-7">
              {experiences.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h3 className="font-bold text-[#092653]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-9 text-sm italic text-slate-500">
              Activities are currently being explored as part
              of GANN's development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
