import { Link } from "react-router-dom";
import Seo from "../components/ui/Seo";
import { school } from "../data/school";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description={`The page you requested was not found on the ${school.shortName} website.`}
      />
      <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
          The page you are looking for does not exist or may have moved. Use the
          links below to continue browsing {school.shortName}.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex rounded-md border border-blue-600 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            Contact Office
          </Link>
        </div>
      </section>
    </>
  );
}
