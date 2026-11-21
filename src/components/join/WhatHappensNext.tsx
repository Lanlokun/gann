
import {
  Send,
  UsersRound,
  MessagesSquare,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Share Your Interest",
    description:
      "Introduce yourself and tell us which scientific or community activities interest you.",
    icon: Send,
  },
  {
    number: "02",
    title: "Help Us Understand the Community",
    description:
      "Your expression of interest can help the founding team understand the skills, perspectives, and priorities of prospective participants.",
    icon: UsersRound,
  },
  {
    number: "03",
    title: "Stay Connected",
    description:
      "As the network develops, further information about participation and planned activities may be shared when available.",
    icon: MessagesSquare,
  },
];

export default function WhatHappensNext() {
  return (
    <section className="bg-[#f4f8fb] py-20 lg:py-28">
      <div className="container-main">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-green-700">
            The Next Steps
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
            What Happens Next?
          </h2>

          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-green-600" />

          <p className="mt-7 text-[15px] leading-8 text-slate-600">
            GANN is at an early stage. Here&apos;s how
            expressing interest can contribute to its
            development.
          </p>
        </div>

        <div className="relative mt-14 grid gap-7 md:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-9 hidden border-t-2 border-dashed border-green-200 md:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border-4 border-white bg-[#092653] text-white shadow-md">
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                <p className="mt-6 text-xs font-extrabold tracking-widest text-green-700">
                  STEP {step.number}
                </p>

                <h3 className="mt-3 text-xl font-extrabold text-[#092653]">
                  {step.title}
                </h3>

                <p className="mx-auto mt-4 max-w-[340px] text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
