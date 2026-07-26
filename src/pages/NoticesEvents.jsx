import PageHero from "../components/ui/PageHero";
import Seo from "../components/ui/Seo";
import { events, notices, school } from "../data/school";
import { formatDate } from "../utils/formatDate";

export default function NoticesEvents() {
  return (
    <>
      <Seo
        title="Notices & Events"
        description={`Latest notices and upcoming events at ${school.fullName}.`}
      />
      <PageHero
        title="Notices & Events"
        subtitle="Stay updated with announcements and school activities"
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 sm:text-3xl">
              Notices
            </h2>
            <ul className="mt-6 space-y-4">
              {notices.map((notice) => (
                <li
                  key={notice.id}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <time
                    dateTime={notice.date}
                    className="text-sm font-medium text-orange-600"
                  >
                    {formatDate(notice.date)}
                  </time>
                  <h3 className="mt-2 text-lg font-semibold text-slate-800">
                    {notice.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {notice.summary}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-800 sm:text-3xl">
              Events
            </h2>
            <ul className="mt-6 space-y-4">
              {events.map((event) => (
                <li
                  key={event.id}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                >
                  <time
                    dateTime={event.date}
                    className="text-sm font-medium text-orange-600"
                  >
                    {formatDate(event.date)}
                  </time>
                  <h3 className="mt-2 text-lg font-semibold text-slate-800">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {event.summary}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
