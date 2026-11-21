
import Image from "next/image";
import { BookOpen, Code2 } from "lucide-react";

export default function TrainingIntro() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-700">
              Building Knowledge
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
              Making Brain Science More Accessible
            </h2>

            <div className="mt-5 h-1 w-14 rounded-full bg-green-600" />

            <div className="mt-7 space-y-5 text-[15px] leading-8 text-slate-600">
              <p>
                Neuroscience is becoming increasingly
                interdisciplinary. Understanding the brain
                now involves knowledge from biology, medicine,
                psychology, computer science, mathematics,
                and artificial intelligence.
              </p>

              <p>
                GANN aims to help students, researchers, and
                professionals develop the skills needed to
                participate in this rapidly evolving field.
              </p>

              <p>
                Our proposed educational activities will
                emphasize practical learning, open scientific
                tools, computational methods, and collaboration
                across disciplines.
              </p>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-5">
                <BookOpen
                  size={28}
                  className="mb-4 text-blue-700"
                />
                <h3 className="font-bold text-[#092653]">
                  Accessible Learning
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Supporting learners from different academic
                  and professional backgrounds.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <Code2
                  size={28}
                  className="mb-4 text-green-700"
                />
                <h3 className="font-bold text-[#092653]">
                  Practical Skills
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Connecting neuroscience theory with
                  computation and real-world applications.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 shadow-lg">
              <Image
                src="/images/training-pathways.webp"
                alt="Neuroscience hologram alongside books about computational neuroscience and machine learning"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
