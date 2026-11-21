
"use client";

import { useState, type FormEvent } from "react";
import { Send, Info } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  affiliation: string;
  subject: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  affiliation: "",
  subject: "",
  message: "",
};

const fieldClass =
  "mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [notice, setNotice] = useState("");

  const recipient = process.env.NEXT_PUBLIC_GANN_CONTACT_EMAIL;

  function updateField(
    field: keyof FormState,
    value: string
  ) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
    setNotice("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!recipient) {
      setNotice(
        "The contact email has not been configured yet. Please try again later."
      );
      return;
    }

    const subject = encodeURIComponent(
      `[GANN Contact] ${form.subject}`
    );

    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Affiliation: ${form.affiliation || "Not specified"}`,
        "",
        "Message:",
        form.message,
      ].join("\n")
    );

    window.location.href =
      `mailto:${recipient}?subject=${subject}&body=${body}`;

    setNotice(
      "Your email application should open with the message prepared. Please review and send it there."
    );
  }

  return (
    <div>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-700">
        Contact Form
      </p>

      <h2 className="text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
        Send Us a Message
      </h2>

      <div className="mt-5 h-1 w-14 rounded-full bg-green-600" />

      <p className="mt-6 max-w-[570px] text-[15px] leading-8 text-slate-600">
        Use the form below to get in touch. Ask a question,
        suggest a collaboration, or express your interest
        in future activities.
      </p>

      <form onSubmit={handleSubmit} className="mt-9 space-y-5">
        <div>
          <label
            htmlFor="contact-name"
            className="text-sm font-bold text-[#092653]"
          >
            Full Name <span className="text-red-500">*</span>
          </label>

          <input
            id="contact-name"
            type="text"
            required
            maxLength={120}
            autoComplete="name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={(event) =>
              updateField("name", event.target.value)
            }
            className={fieldClass}
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="text-sm font-bold text-[#092653]"
          >
            Email Address <span className="text-red-500">*</span>
          </label>

          <input
            id="contact-email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder="Enter your email address"
            value={form.email}
            onChange={(event) =>
              updateField("email", event.target.value)
            }
            className={fieldClass}
          />
        </div>

        <div>
          <label
            htmlFor="contact-affiliation"
            className="text-sm font-bold text-[#092653]"
          >
            Your Affiliation (Optional)
          </label>

          <select
            id="contact-affiliation"
            value={form.affiliation}
            onChange={(event) =>
              updateField("affiliation", event.target.value)
            }
            className={fieldClass}
          >
            <option value="">Select your affiliation</option>
            <option value="Student">Student</option>
            <option value="Researcher">Researcher</option>
            <option value="Academic / Educator">
              Academic / Educator
            </option>
            <option value="Healthcare Professional">
              Healthcare Professional
            </option>
            <option value="Technology Professional">
              Technology Professional
            </option>
            <option value="Organization / Institution">
              Organization / Institution
            </option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="text-sm font-bold text-[#092653]"
          >
            Subject <span className="text-red-500">*</span>
          </label>

          <select
            id="contact-subject"
            required
            value={form.subject}
            onChange={(event) =>
              updateField("subject", event.target.value)
            }
            className={fieldClass}
          >
            <option value="">Choose a subject</option>
            <option value="General Enquiry">
              General Enquiry
            </option>
            <option value="Research Collaboration">
              Research Collaboration
            </option>
            <option value="Training and Workshops">
              Training and Workshops
            </option>
            <option value="Partnership Opportunity">
              Partnership Opportunity
            </option>
            <option value="Joining GANN">
              Joining GANN
            </option>
            <option value="News and Events">
              News and Events
            </option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="text-sm font-bold text-[#092653]"
          >
            Message <span className="text-red-500">*</span>
          </label>

          <textarea
            id="contact-message"
            required
            minLength={10}
            maxLength={5000}
            rows={6}
            placeholder="Write your message here..."
            value={form.message}
            onChange={(event) =>
              updateField("message", event.target.value)
            }
            className={`${fieldClass} resize-y`}
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-3 rounded-lg bg-[#092653] px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-800"
        >
          <Send size={18} />
          Prepare Message
        </button>

        <p className="flex items-start gap-2 text-xs leading-6 text-slate-500">
          <Info size={15} className="mt-1 shrink-0" />
          This form opens your email application to send
          your message. It does not submit information
          directly through the website.
        </p>

        {notice && (
          <p
            role="status"
            className="rounded-lg bg-blue-50 px-4 py-3 text-sm leading-6 text-blue-800"
          >
            {notice}
          </p>
        )}
      </form>
    </div>
  );
}
