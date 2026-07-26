import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { events } from "../../data/school";
import { formatDate } from "../../utils/formatDate";

export default function UpcomingEvents() {
  return (
    <section className="bg-blue-600 py-16 text-white sm:py-20" aria-labelledby="events-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          id="events-heading"
          light
          eyebrow="Upcoming Events"
          title="Moments that bring the school community together"
          description="Sports, culture, exhibitions, and academic milestones across the year."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {events.map((event) => (
            <Reveal key={event.id}>
              <article className="h-full rounded-xl bg-white/10 p-5 ring-1 ring-white/20 backdrop-blur-sm">
                <time
                  dateTime={event.date}
                  className="text-sm font-semibold text-orange-300"
                >
                  {formatDate(event.date)}
                </time>
                <h3 className="mt-3 text-lg font-semibold">{event.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-50">
                  {event.summary}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
