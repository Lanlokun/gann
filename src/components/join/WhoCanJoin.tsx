
import Image from "next/image";
import {
  GraduationCap,
  Microscope,
  HeartPulse,
  Laptop2,
} from "lucide-react";

const communities = [
  {
    title: "Students & Early-Career Learners",
    description:
      "Explore neuroscience, discover research pathways, and connect with people who share your curiosity.",
    image: "/images/join-student.webp",
    icon: GraduationCap,
  },
  {
    title: "Researchers & Academics",
    description:
      "Exchange scientific ideas and explore interdisciplinary research connections.",
    image: "/images/join-researcher.webp",
    icon: Microscope,
  },
  {
    title: "Healthcare Professionals",
    description:
      "Connect clinical perspectives with brain health, neuroscience, and emerging technologies.",
    image: "/images/join-healthcare.webp",
    icon: HeartPulse,
  },
  {
    title: "Technology & AI Practitioners",
    description:
      "Bring skills in machine learning, software engineering, data science, and computational research.",
    image: "/images/join-developer.webp",
    icon: Laptop2,
  },
];

export default function WhoCanJoin() {
  return (
    <section
      id="who-can-join"
      className="scroll-mt-24 bg-[#f4f8fb] py-20 lg:py-28"
    >
      <div className="container-main">
        <div className="mx-auto max-w-[740px] text-center">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-green-700">
            A Place for Different Perspectives
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
            Who Can Be Part of GANN?
          </h2>

          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-green-600" />

          <p className="mt-7 text-[15px] leading-8 text-slate-600">
            You do not need to be a neuroscientist to
            contribute. We welcome interest from people
            across disciplines, backgrounds, and levels
            of experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {communities.map((community) => {
            const Icon = community.icon;

            return (
              <article
                key={community.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={community.image}
                    alt={community.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="relative p-6 pt-9">
                  <div className="absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-green-50 text-green-700 shadow-sm">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-lg font-extrabold leading-snug text-[#092653]">
                    {community.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {community.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-9 text-center text-sm text-slate-600">
          Interested in neuroscience but don&apos;t fit
          these categories? You&apos;re welcome too.
        </p>
      </div>
    </section>
  );
}
