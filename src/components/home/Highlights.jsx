import { BookOpenCheck, HeartHandshake, ShieldCheck, Trees } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { highlights } from "../../data/school";

const icons = [BookOpenCheck, HeartHandshake, ShieldCheck, Trees];

export default function Highlights() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="highlights-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          id="highlights-heading"
          eyebrow="School Highlights"
          title="A caring place to learn and grow"
          description="Everyday excellence through strong teaching, safe spaces, and a values-led school culture."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={item.title}>
                <article className="h-full rounded-xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="inline-flex rounded-lg bg-blue-100 p-3 text-blue-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-blue-800">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
