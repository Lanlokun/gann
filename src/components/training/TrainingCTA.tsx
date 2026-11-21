
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Lightbulb,
} from "lucide-react";

export default function TrainingCTA() {
  return (
    <section className="relative overflow-hidden bg-[#eaf3ff] py-20 lg:py-24">
      <div className="container-main">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-green-700">
              Shape Future Learning
            </p>

            <h2 className="max-w-[650px] text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
              Help Build the Future of Neuroscience Education
            </h2>

            <p className="mt-6 max-w-[620px] text-[15px] leading-8 text-slate-600">
              GANN is exploring educational activities
              that reflect the interests and needs of its
              emerging community. Whether you want to learn,
              teach, mentor, or contribute ideas, we welcome
              your interest.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-lg bg-[#092653] px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-800"
              >
                Express Your Interest
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/opportunities"
                className="inline-flex items-center gap-3 rounded-lg border border-[#092653]/20 bg-white px-7 py-4 text-sm font-bold text-[#092653] transition hover:bg-slate-50"
              >
                Explore Opportunities
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="flex items-start gap-4 rounded-2xl border border-white bg-white/80 p-6 shadow-sm">
              <GraduationCap
                size={28}
                className="shrink-0 text-blue-700"
              />
              <div>
                <h3 className="font-bold text-[#092653]">
                  Interested in Learning?
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Share the topics and skills you would
                  like to explore.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-white bg-white/80 p-6 shadow-sm">
              <Lightbulb
                size={28}
                className="shrink-0 text-green-700"
              />
              <div>
                <h3 className="font-bold text-[#092653]">
                  Have Expertise to Share?
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Help shape future workshops, seminars,
                  and educational collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
