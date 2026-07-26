import PageHero from "../components/ui/PageHero";
import Seo from "../components/ui/Seo";
import Reveal from "../components/ui/Reveal";
import { academicPrograms, school } from "../data/school";

export default function Academics() {
  return (
    <>
      <Seo
        title="Academics"
        description={`Academic programs and learning approach at ${school.fullName}.`}
      />
      <PageHero
        title="Academics"
        subtitle="Strong foundations, joyful classrooms, and growth beyond textbooks"
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
          Our academic programme develops literacy, numeracy, scientific
          curiosity, communication, and character. Teachers plan with care so
          every child can progress with confidence.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {academicPrograms.map((program, index) => (
            <Reveal key={program.title}>
              <article className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-orange-600">
                  Programme {index + 1}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-blue-800">
                  {program.title}
                </h2>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {program.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-blue-50 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-blue-900">
            Assessment & parent partnership
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-700">
            Progress is shared through classroom feedback, periodic assessments,
            and parent–teacher meetings. We believe children thrive when school
            and home work together with clear expectations and encouragement.
          </p>
        </div>
      </section>
    </>
  );
}
