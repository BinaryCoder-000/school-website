import { Link } from "react-router-dom";
import { school } from "../../data/school";

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Begin your child’s journey with {school.shortName}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-blue-50 sm:text-lg">
          Admissions support, campus visits, and class guidance are available
          through the school office. We look forward to welcoming your family.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/admissions"
            className="inline-flex rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-200"
          >
            Admission Enquiry
          </Link>
          <Link
            to="/contact"
            className="inline-flex rounded-md border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Contact Office
          </Link>
        </div>
      </div>
    </section>
  );
}
