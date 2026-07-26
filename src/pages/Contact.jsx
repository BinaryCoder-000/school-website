import { Mail, MapPin, Phone, Clock3 } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import Seo from "../components/ui/Seo";
import { contactOfficeHours, school } from "../data/school";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description={`Contact details and office hours for ${school.fullName}.`}
      />
      <PageHero
        title="Contact Us"
        subtitle="Reach the school office for admissions and general enquiries"
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <ContactRow icon={MapPin} title="Campus Address">
              {school.address.line1}
              <br />
              {school.address.line2}
            </ContactRow>
            <ContactRow icon={Phone} title="Phone">
              <a
                href={school.phoneHref}
                className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                {school.phone}
              </a>
            </ContactRow>
            <ContactRow icon={Mail} title="Email">
              <a
                href={school.emailHref}
                className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                {school.email}
              </a>
            </ContactRow>
            <ContactRow icon={Clock3} title="Office Hours">
              {contactOfficeHours.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </ContactRow>
          </div>

          <div className="rounded-2xl bg-blue-600 p-6 text-white sm:p-8">
            <h2 className="text-2xl font-semibold">Plan a visit</h2>
            <p className="mt-3 text-sm leading-relaxed text-blue-50 sm:text-base">
              For admission counselling or campus information, please call or
              email during office hours. When visiting, carry basic student
              details to help the office assist you quickly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={school.phoneHref}
                className="inline-flex rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-200"
              >
                Call Office
              </a>
              <a
                href={school.emailHref}
                className="inline-flex rounded-md border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({ icon, title, children }) {
  const Icon = icon;
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-lg bg-blue-100 p-2 text-blue-700">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-blue-800">{title}</h2>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">
            {children}
          </p>
        </div>
      </div>
    </article>
  );
}
