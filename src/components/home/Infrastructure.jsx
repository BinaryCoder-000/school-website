import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { facilities } from "../../data/school";

export default function Infrastructure() {
  return (
    <section className="bg-slate-100 py-16 sm:py-20" aria-labelledby="infra-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          id="infra-heading"
          eyebrow="Infrastructure"
          title="Spaces that support focused learning"
          description="Practical campus facilities designed for teaching, play, culture, and everyday student care."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.slice(0, 6).map((item) => (
            <Reveal key={item.title}>
              <article className="h-full rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-semibold text-blue-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/facilities"
            className="inline-flex rounded-md border border-blue-600 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            View Facilities
          </Link>
        </div>
      </div>
    </section>
  );
}
