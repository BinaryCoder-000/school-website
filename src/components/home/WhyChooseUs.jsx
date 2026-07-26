import { CheckCircle2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { school, whyChooseUs } from "../../data/school";

export default function WhyChooseUs() {
  return (
    <section className="bg-blue-50 py-16 sm:py-20" aria-labelledby="why-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading
            id="why-heading"
            align="left"
            eyebrow="Why Choose Us"
            title="Trusted by families in and around Alekhapada"
            description={school.mission}
          />
          <dl className="mt-2 grid grid-cols-2 gap-4">
            {school.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
              >
                <dt className="text-sm text-slate-500">{stat.label}</dt>
                <dd className="mt-1 text-3xl font-bold text-blue-700">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <Reveal>
          <ul className="space-y-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            {whyChooseUs.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-orange-500"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
