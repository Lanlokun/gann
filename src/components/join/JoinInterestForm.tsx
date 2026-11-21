
"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Check,
  Info,
  Mail,
} from "lucide-react";

type InterestForm = {
  fullName: string;
  email: string;
  country: string;
  affiliation: string;
  background: string;
  interests: string[];
  motivation: string;
  consent: boolean;
};

const interestOptions = [
  "Neuroscience",
  "Computational Neuroscience",
  "Machine Learning & AI",
  "NeuroAI",
  "Brain Health",
  "Neuroimaging",
  "Brain-Computer Interfaces",
  "Research Collaboration",
  "Training & Education",
  "Community Outreach",
];

const initialForm: InterestForm = {
  fullName: "",
  email: "",
  country: "",
  affiliation: "",
  background: "",
  interests: [],
  motivation: "",
  consent: false,
};

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

export default function JoinInterestForm() {
  const [form, setForm] = useState<InterestForm>(initialForm);
  const [notice, setNotice] = useState("");

  const recipient =
    process.env.NEXT_PUBLIC_GANN_CONTACT_EMAIL?.trim();

  function update<K extends keyof InterestForm>(
    field: K,
    value: InterestForm[K]
  ) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
    setNotice("");
  }

  function toggleInterest(interest: string) {
    const next = form.interests.includes(interest)
      ? form.interests.filter((item) => item !== interest)
      : [...form.interests, interest];

    update("interests", next);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.interests.length) {
      setNotice("Please select at least one area of interest.");
      return;
    }

    if (!recipient) {
      setNotice(
        "The GANN contact email has not yet been configured. Please try again once submissions are available."
      );
      return;
    }

    const subject = encodeURIComponent(
      "GANN Expression of Interest"
    );

    const body = encodeURIComponent(
      [
        "GANN Expression of Interest",
        "",
        `Full Name: ${form.fullName}`,
        `Email: ${form.email}`,
        `Country: ${form.country}`,
        `Affiliation: ${form.affiliation || "Not specified"}`,
        `Background: ${form.background}`,
        "",
        "Areas of Interest:",
        ...form.interests.map((item) => `- ${item}`),
        "",
        "Motivation:",
        form.motivation || "Not provided",
        "",
        "The applicant has agreed to share this information with GANN for the purpose of responding to this expression of interest.",
      ].join("\n")
    );

    window.location.href =
      `mailto:${recipient}?subject=${subject}&body=${body}`;

    setNotice(
      "Your email application should open with your expression of interest. Please review and send the message there to complete the process."
    );
  }

  return (
    <section
      id="express-interest"
      className="scroll-mt-24 bg-white py-20 lg:py-28"
    >
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-green-700">
              Get Involved
            </p>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#092653] sm:text-4xl">
              Express Your Interest in GANN
            </h2>

            <div className="mt-6 h-1 w-14 rounded-full bg-green-600" />

            <p className="mt-7 text-[15px] leading-8 text-slate-600">
              Tell us a little about yourself and the
              areas of neuroscience or technology that
              interest you.
            </p>

            <p className="mt-5 text-[15px] leading-8 text-slate-600">
              This will help the founding team understand
              the interests and expertise of people who
              would like to be involved as the network
              develops.
            </p>

            <div className="mt-9 rounded-2xl bg-[#eef8f1] p-6">
              <div className="flex items-start gap-4">
                <Check
                  size={22}
                  className="mt-0.5 shrink-0 text-green-700"
                />

                <div>
                  <h3 className="font-bold text-[#092653]">
                    An Expression of Interest
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    This is not a formal membership
                    application. No membership fee or
                    commitment is required to express
                    interest.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex items-start gap-3 text-sm leading-7 text-slate-600">
              <Mail
                size={20}
                className="mt-1 shrink-0 text-blue-700"
              />
              Questions? You can also reach out through
              our Contact page.
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-6 shadow-sm sm:p-9 lg:p-11">
            <h3 className="text-2xl font-extrabold text-[#092653]">
              Tell Us About Yourself
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Fields marked * are required.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="join-name"
                    className="text-sm font-bold text-[#092653]"
                  >
                    Full Name *
                  </label>

                  <input
                    id="join-name"
                    type="text"
                    required
                    maxLength={120}
                    autoComplete="name"
                    value={form.fullName}
                    onChange={(event) =>
                      update("fullName", event.target.value)
                    }
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="join-email"
                    className="text-sm font-bold text-[#092653]"
                  >
                    Email Address *
                  </label>

                  <input
                    id="join-email"
                    type="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    value={form.email}
                    onChange={(event) =>
                      update("email", event.target.value)
                    }
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="join-country"
                    className="text-sm font-bold text-[#092653]"
                  >
                    Country *
                  </label>

                  <input
                    id="join-country"
                    type="text"
                    required
                    maxLength={100}
                    autoComplete="country-name"
                    value={form.country}
                    onChange={(event) =>
                      update("country", event.target.value)
                    }
                    placeholder="Country of residence"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="join-affiliation"
                    className="text-sm font-bold text-[#092653]"
                  >
                    Institution / Organization
                  </label>

                  <input
                    id="join-affiliation"
                    type="text"
                    maxLength={180}
                    value={form.affiliation}
                    onChange={(event) =>
                      update("affiliation", event.target.value)
                    }
                    placeholder="Optional"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="join-background"
                  className="text-sm font-bold text-[#092653]"
                >
                  Your Background *
                </label>

                <select
                  id="join-background"
                  required
                  value={form.background}
                  onChange={(event) =>
                    update("background", event.target.value)
                  }
                  className={inputClass}
                >
                  <option value="">Select your background</option>
                  <option value="Student">Student</option>
                  <option value="Researcher / Academic">
                    Researcher / Academic
                  </option>
                  <option value="Healthcare Professional">
                    Healthcare Professional
                  </option>
                  <option value="Technology / AI Professional">
                    Technology / AI Professional
                  </option>
                  <option value="Educator">Educator</option>
                  <option value="Organization Representative">
                    Organization Representative
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <fieldset>
                <legend className="text-sm font-bold text-[#092653]">
                  Areas of Interest *
                </legend>

                <p className="mt-2 text-xs text-slate-500">
                  Select all that apply.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {interestOptions.map((interest) => {
                    const selected =
                      form.interests.includes(interest);

                    return (
                      <label
                        key={interest}
                        className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 text-sm transition ${
                          selected
                            ? "border-green-600 bg-green-50 text-[#092653]"
                            : "border-slate-200 bg-white text-slate-600 hover:border-green-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selected}
                          onChange={() =>
                            toggleInterest(interest)
                          }
                          className="h-4 w-4 accent-green-700"
                        />

                        {interest}
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div>
                <label
                  htmlFor="join-motivation"
                  className="text-sm font-bold text-[#092653]"
                >
                  Why Are You Interested in GANN?
                </label>

                <textarea
                  id="join-motivation"
                  rows={5}
                  maxLength={2000}
                  value={form.motivation}
                  onChange={(event) =>
                    update("motivation", event.target.value)
                  }
                  placeholder="Tell us what interests you or how you would like to contribute (optional)."
                  className={`${inputClass} resize-y`}
                />
              </div>

              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  required
                  checked={form.consent}
                  onChange={(event) =>
                    update("consent", event.target.checked)
                  }
                  className="mt-1 h-4 w-4 shrink-0 accent-green-700"
                />

                <span className="text-xs leading-6 text-slate-600">
                  I agree to share the information provided
                  with GANN for the purpose of responding
                  to my expression of interest. *
                </span>
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#092653] px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-800"
              >
                Prepare Expression of Interest
                <ArrowRight size={18} />
              </button>

              <p className="flex items-start gap-2 text-xs leading-6 text-slate-500">
                <Info
                  size={15}
                  className="mt-1 shrink-0"
                />
                This opens your email application. Your
                information is not submitted directly
                through this website.
              </p>

              {notice && (
                <p
                  role="status"
                  className="rounded-xl bg-blue-50 px-4 py-3 text-sm leading-7 text-blue-800"
                >
                  {notice}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
