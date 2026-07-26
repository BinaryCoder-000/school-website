import { Mail, MapPin, Phone, Clock3 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { contactOfficeHours, school } from "../../data/school";

export default function ContactInfo() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="contact-info-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          id="contact-info-heading"
          eyebrow="Contact Information"
          title="Visit or reach the school office"
          description="We are happy to help with admissions, academic queries, and general information."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <InfoBlock icon={MapPin} title="Address">
            {school.address.line1}
            <br />
            {school.address.line2}
          </InfoBlock>
          <InfoBlock icon={Phone} title="Phone">
            <a
              href={school.phoneHref}
              className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              {school.phone}
            </a>
          </InfoBlock>
          <InfoBlock icon={Mail} title="Email">
            <a
              href={school.emailHref}
              className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              {school.email}
            </a>
          </InfoBlock>
          <InfoBlock icon={Clock3} title="Office Hours">
            {contactOfficeHours.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </InfoBlock>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ icon, title, children }) {
  const Icon = icon;
  return (
    <article className="rounded-xl border border-slate-200 bg-slate-50 p-6">
      <div className="inline-flex rounded-lg bg-blue-100 p-3 text-blue-700">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-blue-800">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{children}</p>
    </article>
  );
}
