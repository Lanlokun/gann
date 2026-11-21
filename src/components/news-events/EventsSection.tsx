
import Image from "next/image";
import {
  CalendarDays,
  Globe2,
  MapPin,
} from "lucide-react";

import { events } from "@/data/events";
import EventCard from "./EventCard";

const gannEvents = events.filter(
  (event) => event.scope === "GANN"
);

const internationalEvents = events.filter(
  (event) => event.scope === "International"
);

export default function EventsSection() {
  return (
    <section
      id="events"
      className="bg-white py-20 lg:py-28"
    >
      <div className="container-main">
        <div className="max-w-[780px]">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-700">
            Scientific Events
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#092653] sm:text-4xl">
            Events & Scientific Gatherings
          </h2>

          <div className="mt-5 h-1 w-14 rounded-full bg-green-600" />

          <p className="mt-7 text-[15px] leading-8 text-slate-600">
            Discover scientific gatherings, workshops,
            conferences, and opportunities to connect
            with the neuroscience community locally,
            across Africa, and internationally.
          </p>
        </div>

        <div className="mt-14">
          <div className="mb-7 flex items-center gap-3">
            <MapPin size={23} className="text-green-700" />
            <h3 className="text-2xl font-extrabold text-[#092653]">
              GANN & Local Events
            </h3>
          </div>

          {gannEvents.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {gannEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-[#f4f7fb] lg:grid-cols-[1fr_1.2fr]">
              <div className="relative min-h-[260px]">
                <Image
                  src="/images/event-workshop.webp"
                  alt="Illustrative neuroscience classroom presentation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-8 lg:p-10">
                <div className="flex items-center gap-2 text-sm font-bold text-green-700">
                  <CalendarDays size={18} />
                  Events in Development
                </div>

                <h4 className="mt-4 text-2xl font-extrabold text-[#092653]">
                  Bringing Neuroscience Conversations Closer to Home
                </h4>

                <p className="mt-4 text-sm leading-8 text-slate-600">
                  GANN hopes to support seminars, research
                  discussions, and practical learning
                  experiences in The Gambia. Confirmed
                  activities will be published here as
                  the network develops.
                </p>

                <p className="mt-4 text-xs italic text-slate-500">
                  Image is illustrative; no event is being
                  announced here.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-16">
          <div className="mb-7 flex items-center gap-3">
            <Globe2 size={23} className="text-purple-700" />
            <h3 className="text-2xl font-extrabold text-[#092653]">
              International Events
            </h3>
          </div>

          {internationalEvents.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {internationalEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <>
              <p className="mb-7 max-w-[730px] text-sm leading-7 text-slate-600">
                We also aim to highlight relevant scientific
                gatherings beyond The Gambia. The locations
                below illustrate the international reach
                of the neuroscience community; they are not
                announcements of specific events.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    image: "/images/event-cape-town.webp",
                    location: "Cape Town, South Africa",
                    title: "Connect Across African Research Communities",
                  },
                  {
                    image: "/images/event-toronto.webp",
                    location: "Toronto, Canada",
                    title: "Explore Global Neuroscience Gatherings",
                  },
                ].map((item) => (
                  <article
                    key={item.location}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                  >
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={item.image}
                        alt={item.location}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />

                      <span className="absolute left-4 top-4 rounded-full bg-purple-100 px-4 py-2 text-xs font-bold text-purple-800">
                        International Focus
                      </span>
                    </div>

                    <div className="p-6">
                      <p className="text-xs font-bold uppercase tracking-wide text-purple-700">
                        {item.location}
                      </p>

                      <h4 className="mt-3 text-lg font-extrabold text-[#092653]">
                        {item.title}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        Verified international conferences,
                        workshops, and scientific meetings
                        will appear here with their official
                        dates and registration links.
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
