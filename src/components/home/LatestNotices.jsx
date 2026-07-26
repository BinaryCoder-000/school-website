import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { notices } from "../../data/school";
import { formatDate } from "../../utils/formatDate";

export default function LatestNotices() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="notices-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          id="notices-heading"
          eyebrow="Latest Notices"
          title="Stay informed with school updates"
          description="Important announcements for parents, guardians, and students."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {notices.slice(0, 4).map((notice) => (
            <Reveal key={notice.id}>
              <article className="h-full rounded-xl border border-slate-200 bg-slate-50 p-6">
                <time
                  dateTime={notice.date}
                  className="text-sm font-medium text-orange-600"
                >
                  {formatDate(notice.date)}
                </time>
                <h3 className="mt-2 text-lg font-semibold text-blue-800">
                  {notice.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {notice.summary}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/notices"
            className="inline-flex rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            All Notices & Events
          </Link>
        </div>
      </div>
    </section>
  );
}
