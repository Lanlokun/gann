
import Image from "next/image";
import {
  ArrowUpRight,
  BrainCircuit,
  Network,
} from "lucide-react";

export default function OurStory() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-main">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text content */}
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green-700">
              Our Beginnings
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
              From Vision to Network
            </h2>

            <div className="mt-5 h-1 w-14 rounded-full bg-green-600" />

            <div className="mt-8 space-y-5 text-[15px] leading-8 text-slate-600">
              <p>
                The Gambia Neuroscience Network (GANN) is an
                emerging interdisciplinary initiative bringing
                together people interested in understanding the
                brain and applying scientific knowledge to
                challenges relevant to our communities.
              </p>

              <p>
                The idea behind GANN is rooted in a simple
                observation: meaningful neuroscience research
                increasingly requires collaboration across
                disciplines, institutions, and technical fields.
              </p>

              <p>
                By connecting neuroscience with machine learning,
                computational methods, and responsible artificial
                intelligence, GANN aims to create opportunities
                for research, skills development, and scientific
                exchange in The Gambia.
              </p>

              <p>
                The network is currently in formation. Its
                priorities, activities, and organizational
                structures will continue to develop through
                collaboration with its emerging community.
              </p>
            </div>

            {/* Focus cards */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 p-5">
                <BrainCircuit
                  className="mb-4 text-blue-700"
                  size={27}
                />
                <h3 className="font-bold text-[#092653]">
                  Interdisciplinary Science
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Connecting brain science, computation,
                  and machine learning.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-5">
                <Network
                  className="mb-4 text-green-700"
                  size={27}
                />
                <h3 className="font-bold text-[#092653]">
                  A Connected Community
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Building relationships across disciplines
                  and institutions.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Research image */}
          <div className="lg:pt-12">
            <div className="overflow-hidden rounded-2xl bg-slate-100 shadow-lg">
              <Image
                src="/images/eeg-research.webp"
                alt="Researcher wearing an EEG cap while examining brain activity"
                width={1200}
                height={750}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="block h-auto w-full"
              />
            </div>

            {/* Image caption */}
            <div className="mt-6 flex items-start gap-4 border-l-4 border-green-600 py-2 pl-5">
              <ArrowUpRight
                size={22}
                className="mt-1 shrink-0 text-green-700"
              />

              <div>
                <h3 className="text-lg font-bold text-[#092653]">
                  Science Without Boundaries
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Building connections between neuroscience,
                  technology, and the communities they serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
