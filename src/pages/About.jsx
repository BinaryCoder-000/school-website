import PageHero from "../components/ui/PageHero";
import Seo from "../components/ui/Seo";
import Reveal from "../components/ui/Reveal";
import logo from "../assets/public/images/white_logo.jpeg";
import { school, whyChooseUs } from "../data/school";

export default function About() {
  return (
    <>
      <Seo
        title="About School"
        description={`Learn about the mission, vision, and values of ${school.fullName}.`}
      />
      <PageHero
        title="About Our School"
        subtitle={school.tagline}
        image={logo}
        imageAlt=""
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-base leading-relaxed text-slate-700 sm:text-lg">
            <p>{school.mission}</p>
            <p>
              <span className="font-semibold text-blue-800">Our vision: </span>
              {school.vision}
            </p>
            <p>
              Located in {school.address.line2}, {school.shortName} partners
              with families to nurture emotionally healthy children who are
              ready for the next stage of schooling and life.
            </p>
          </div>

          <Reveal>
            <aside className="rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-100 sm:p-8">
              <h2 className="text-xl font-semibold text-blue-800">At a glance</h2>
              <dl className="mt-5 grid grid-cols-2 gap-4">
                {school.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-sm text-slate-500">{stat.label}</dt>
                    <dd className="text-2xl font-bold text-blue-700">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </Reveal>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-800 sm:text-3xl">
            What guides our classrooms
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {whyChooseUs.map((item) => (
              <li
                key={item}
                className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="font-semibold text-blue-700">{item}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
