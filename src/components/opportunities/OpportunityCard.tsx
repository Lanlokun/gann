
import {
  ArrowUpRight,
  CalendarDays,
  GraduationCap,
  MapPin,
  Building2,
} from "lucide-react";

import type { Opportunity } from "@/data/opportunities";

type Props = {
  opportunity: Opportunity;
};

export default function OpportunityCard({
  opportunity,
}: Props) {
  const deadline = opportunity.deadline
    ? new Date(`${opportunity.deadline}T00:00:00Z`)
    : null;

  const formattedDeadline =
    deadline && !Number.isNaN(deadline.getTime())
      ? deadline.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
          timeZone: "UTC",
        })
      : "Not specified";

  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <span className="inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
            {opportunity.type}
          </span>

          <h3 className="mt-3 text-lg font-bold leading-snug text-[#092653]">
            {opportunity.title}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
            <Building2 size={15} className="shrink-0" />
            <span>{opportunity.organization}</span>
          </div>
        </div>

        <a
          href={opportunity.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${opportunity.title}`}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-[#092653] transition group-hover:bg-[#092653] group-hover:text-white"
        >
          <ArrowUpRight size={20} />
        </a>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        {opportunity.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 border-t border-slate-100 pt-4 text-xs text-slate-500">
        <span className="inline-flex items-center gap-2">
          <MapPin size={15} />
          {opportunity.location}
        </span>

        <span className="inline-flex items-center gap-2">
          <GraduationCap size={15} />
          {opportunity.level}
        </span>

        <span className="inline-flex items-center gap-2">
          <CalendarDays size={15} />
          Deadline: {formattedDeadline}
        </span>
      </div>
    </article>
  );
}
