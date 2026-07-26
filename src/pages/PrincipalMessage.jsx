import PageHero from "../components/ui/PageHero";
import Seo from "../components/ui/Seo";
import { principalMessage, school } from "../data/school";

export default function PrincipalMessage() {
  return (
    <>
      <Seo
        title="Principal's Message"
        description={`A welcome message from the Principal of ${school.fullName}.`}
      />
      <PageHero
        title="Principal's Message"
        subtitle="A note of welcome for students, parents, and guardians"
      />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-10">
          <p className="text-lg font-medium text-blue-800">
            {principalMessage.greeting}
          </p>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-700 sm:text-lg">
            {principalMessage.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-8 text-slate-700">{principalMessage.closing}</p>
          <p className="mt-2 text-lg font-semibold text-blue-800">
            {principalMessage.name}
          </p>
          <p className="text-sm text-slate-500">{principalMessage.role}</p>
        </article>
      </section>
    </>
  );
}
