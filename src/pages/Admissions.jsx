import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import Seo from "../components/ui/Seo";
import { admissionsInfo, school } from "../data/school";

export default function Admissions() {
  return (
    <>
      <Seo
        title="Admissions"
        description={`Admission process, documents, and enquiry information for ${school.fullName}.`}
      />
      <PageHero
        title="Admissions"
        subtitle="Join a caring learning community rooted in Alekhapada"
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
          {admissionsInfo.intro}
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <h2 className="text-2xl font-semibold text-blue-800">
              Admission steps
            </h2>
            <ol className="mt-6 space-y-4">
              {admissionsInfo.steps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-slate-700">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-100 sm:p-8">
            <h2 className="text-2xl font-semibold text-blue-800">
              Documents checklist
            </h2>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-slate-700">
              {admissionsInfo.documents.map((doc) => (
                <li key={doc}>{doc}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              {admissionsInfo.note}
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              Contact Admissions Desk
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
