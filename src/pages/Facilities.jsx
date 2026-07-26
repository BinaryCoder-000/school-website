import PageHero from "../components/ui/PageHero";
import Seo from "../components/ui/Seo";
import Reveal from "../components/ui/Reveal";
import { facilities, school } from "../data/school";

export default function Facilities() {
  return (
    <>
      <Seo
        title="Facilities"
        description={`Campus facilities and learning spaces at ${school.fullName}.`}
      />
      <PageHero
        title="Facilities"
        subtitle="Practical spaces that support teaching, play, culture, and care"
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((item) => (
            <Reveal key={item.title}>
              <article className="h-full rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md">
                <h2 className="text-xl font-semibold text-blue-800">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
