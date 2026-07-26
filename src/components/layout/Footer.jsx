import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { footerQuickLinks } from "../../data/navigation";
import { school } from "../../data/school";
import { getSmsLoginUrl } from "../../utils/smsUrl";

export default function Footer() {
  const smsUrl = getSmsLoginUrl();

  return (
    <footer className="mt-auto bg-blue-700 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold">{school.fullName}</h2>
          <p className="mt-3 text-sm leading-relaxed text-blue-100">
            {school.tagline}. A trusted learning community in Keonjhar, Odisha.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-3 space-y-2 text-sm text-blue-100">
            {footerQuickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="rounded underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {smsUrl ? (
              <li>
                <a
                  href={smsUrl}
                  className="rounded underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Portal Login
                </a>
              </li>
            ) : null}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Contact</h2>
          <ul className="mt-3 space-y-3 text-sm text-blue-100">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                {school.address.line1}
                <br />
                {school.address.line2}
              </span>
            </li>
            <li>
              <a
                href={school.phoneHref}
                className="inline-flex items-center gap-2 rounded hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {school.phone}
              </a>
            </li>
            <li>
              <a
                href={school.emailHref}
                className="inline-flex items-center gap-2 rounded hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {school.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Follow Us</h2>
          <div className="mt-4 flex gap-4">
            <SocialLink href={school.social.instagram} label="Instagram">
              <Instagram size={22} />
            </SocialLink>
            <SocialLink href={school.social.facebook} label="Facebook">
              <Facebook size={22} />
            </SocialLink>
            <SocialLink href={school.social.youtube} label="YouTube">
              <Youtube size={22} />
            </SocialLink>
            <SocialLink href={school.social.twitter} label="X / Twitter">
              <Twitter size={22} />
            </SocialLink>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 py-3 text-center text-sm text-blue-200">
        © {new Date().getFullYear()} {school.shortName} — All rights reserved.
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="rounded transition hover:text-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {children}
    </a>
  );
}
