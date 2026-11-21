
import Image from "next/image";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
} from "lucide-react";

import type { GANNEvent } from "@/data/events";

type Props = {
  event: GANNEvent;
};

function formatDate(date: string | null) {
  if (!date) return "Date to be announced";

  return new Date(`${date}T00:00:00Z`).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }
  );
}

export default function EventCard({ event }: Props) {
  const isInternational = event.scope === "International";

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span
          className={`absolute left-4 top-4 rounded-full px-4 py-2 text-xs font-bold shadow-sm ${
            isInternational
              ? "bg-purple-100 text-purple-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {isInternational
            ? "International Event"
            : "GANN Event"}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase tracking-wide text-green-700">
            {event.status}
          </span>

          <span className="text-xs text-slate-500">
            {event.organizer}
          </span>
        </div>

        <h3 className="mt-4 text-lg font-extrabold leading-snug text-[#092653]">
          {event.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
          {event.description}
        </p>

        <div className="mt-6 space-y-3 border-t border-slate-100 pt-5 text-sm text-slate-600">
          <div className="flex items-center gap-3">
            <CalendarDays
              size={17}
              className="shrink-0 text-blue-700"
            />
            {formatDate(event.startDate)}
          </div>

          <div className="flex items-center gap-3">
            <MapPin
              size={17}
              className="shrink-0 text-blue-700"
            />
            {event.location}
          </div>
        </div>

        {event.url ? (
          <a
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:underline"
          >
            View Event Details
            <ArrowUpRight size={18} />
          </a>
        ) : (
          <p className="mt-6 text-xs font-semibold text-slate-500">
            Further details will be shared when available.
          </p>
        )}
      </div>
    </article>
  );
}
