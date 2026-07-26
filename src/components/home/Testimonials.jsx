import { Quote } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { testimonials } from "../../data/school";

export default function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Testimonials"
          title="What families say about us"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Reveal key={item.name}>
              <figure className="flex h-full flex-col rounded-xl border border-slate-200 bg-slate-50 p-6">
                <Quote
                  className="h-8 w-8 text-orange-400"
                  aria-hidden="true"
                />
                <blockquote className="mt-4 flex-1 text-slate-700 leading-relaxed">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-blue-800">
                  {item.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
