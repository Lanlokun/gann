
import Link from "next/link";
import {
  Mail,
  Handshake,
  GraduationCap,
  UsersRound,
  ArrowUpRight,
} from "lucide-react";

export default function ContactInformation() {
  const email = process.env.NEXT_PUBLIC_GANN_CONTACT_EMAIL;

  return (
    <div>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-700">
        Connect With Us
      </p>

      <h2 className="text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
        Other Ways to Connect
      </h2>

      <div className="mt-5 h-1 w-14 rounded-full bg-green-600" />

      <p className="mt-6 text-[15px] leading-8 text-slate-600">
        You can also connect with us through the following
        channels and areas of interest.
      </p>

      <div className="mt-9 divide-y divide-slate-200">
        <div className="flex gap-5 py-6 first:pt-0">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#092653]">
            <Mail size={27} />
          </div>

          <div>
            <h3 className="text-lg font-extrabold text-[#092653]">
              Email
            </h3>

            {email ? (
              <a
                href={`mailto:${email}`}
                className="mt-1 block text-sm font-semibold text-blue-700 hover:underline"
              >
                {email}
              </a>
            ) : (
              <p className="mt-1 text-sm text-slate-500">
                Official contact email coming soon
              </p>
            )}

            <p className="mt-2 text-sm leading-7 text-slate-600">
              For general enquiries and collaboration ideas.
            </p>
          </div>
        </div>

        <div className="flex gap-5 py-6">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">
            <Handshake size={27} />
          </div>

          <div>
            <h3 className="text-lg font-extrabold text-[#092653]">
              Collaborations
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Discuss research, training, or institutional
              partnerships.
            </p>
          </div>
        </div>

        <div className="flex gap-5 py-6">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#092653]">
            <GraduationCap size={27} />
          </div>

          <div>
            <h3 className="text-lg font-extrabold text-[#092653]">
              Training & Learning
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Ask about future workshops, skills development,
              and learning opportunities.
            </p>
          </div>
        </div>

        <div className="flex gap-5 py-6">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">
            <UsersRound size={27} />
          </div>

          <div>
            <h3 className="text-lg font-extrabold text-[#092653]">
              Join GANN
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Express your interest in becoming part of
              the emerging GANN community.
            </p>

            <Link
              href="/join"
              className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:underline"
            >
              Express Interest
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
