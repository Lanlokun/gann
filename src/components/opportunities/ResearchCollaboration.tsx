
import {
  Network,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  "Connect with researchers across disciplines",
  "Explore emerging collaborative research ideas",
  "Contribute computational and scientific expertise",
  "Build regional and international research connections",
];

export default function ResearchCollaboration() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-700">
              <Network size={30} strokeWidth={1.8} />
            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-700">
              Research Collaborations
            </p>

            <h2 className="text-2xl font-extrabold tracking-tight text-[#092653] sm:text-3xl">
              Collaborate on Research
            </h2>

            <p className="mt-5 text-[15px] leading-8 text-slate-600">
              GANN aims to foster interdisciplinary
              collaboration between neuroscientists,
              clinicians, computer scientists, and AI
              researchers in The Gambia and beyond.
            </p>

            <div className="mt-7 space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-green-600"
                  />
                  <span className="text-sm leading-6 text-slate-700">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#f4f7fb] p-8 lg:p-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-700">
              Emerging Research Community
            </p>

            <h3 className="text-2xl font-bold text-[#092653]">
              From Shared Interests to Research Partnerships
            </h3>

            <p className="mt-5 text-sm leading-8 text-slate-600">
              As the network develops, we hope to create
              spaces where researchers can exchange ideas,
              identify shared scientific questions, and
              explore collaborative projects.
            </p>

            <p className="mt-5 text-sm leading-8 text-slate-600">
              Computational neuroscience, machine learning,
              and NeuroAI will be central to this vision,
              alongside experimental, clinical, and
              behavioral approaches to brain science.
            </p>

            <div className="mt-7 rounded-xl border border-blue-100 bg-white p-5">
              <p className="text-sm font-semibold text-[#092653]">
                Interested in collaborating?
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Reach out to share your research interests,
                expertise, or ideas for future partnerships.
              </p>

              <a
                href="/contact"
                className="mt-4 inline-block text-sm font-bold text-blue-700 hover:underline"
              >
                Contact GANN →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
