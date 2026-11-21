
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Telescope,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="section-space bg-white">
      <div className="container-main grid items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-green-700">
            Who We Are
          </span>

          <h2 className="section-title">About GANN</h2>

          <p className="mt-8 text-[15px] leading-8 text-slate-600">
            The Gambia Neuroscience Network (GANN) is an emerging
            interdisciplinary initiative dedicated to advancing
            neuroscience, computational neuroscience, artificial
            intelligence, and machine learning in The Gambia.
          </p>

          <p className="mt-5 text-[15px] leading-8 text-slate-600">
            We envision a community where researchers, students,
            healthcare professionals, and technology innovators
            collaborate to understand the brain, expand scientific
            knowledge, and address challenges relevant to our society.
          </p>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl bg-[#092653] p-6 text-white">
              <Target size={30} strokeWidth={1.6} />

              <h3 className="mt-5 text-lg font-bold">
                Our Vision
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/80">
                A thriving Gambian neuroscience community contributing
                to scientific discovery and responsible innovation.
              </p>
            </div>

            <div className="rounded-xl bg-[#092653] p-6 text-white">
              <Telescope size={30} strokeWidth={1.6} />

              <h3 className="mt-5 text-lg font-bold">
                Our Mission
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/80">
                To strengthen neuroscience through research,
                education, mentorship, and interdisciplinary
                collaboration.
              </p>
            </div>
          </div>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#092653] hover:text-blue-700"
          >
            Learn More About GANN
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="relative h-[520px] overflow-hidden rounded-2xl">
          <Image
            src="/images/researcher-lab.webp"
            alt="Researcher working with a microscope"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
