import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { academicPrograms } from "../../data/school";

export default function AcademicPrograms() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="programs-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          id="programs-heading"
          eyebrow="Academic Programs"
          title="Learning pathways with strong foundations"
          description="From early years to middle school, our classrooms balance knowledge, creativity, and character."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {academicPrograms.map((program, index) => (
            <Reveal key={program.title}>
              <article className="h-full rounded-xl border border-slate-200 bg-slate-50 p-6 transition hover:shadow-md">
                <p className="text-sm font-semibold text-orange-600">
                  0{index + 1}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-blue-800">
                  {program.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {program.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/academics"
            className="inline-flex rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            Explore Academics
          </Link>
        </div>
      </div>
    </section>
  );
}
