import { useEffect, useId, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";
import logo from "../../assets/public/images/white_logo.jpeg";
import { navLinks } from "../../data/navigation";
import { school } from "../../data/school";
import { getSmsLoginUrl } from "../../utils/smsUrl";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const smsUrl = getSmsLoginUrl();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const linkClass = ({ isActive }) =>
    [
      "rounded-md px-1.5 py-1 text-[13px] font-medium whitespace-nowrap transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
      isActive ? "bg-blue-700 text-white" : "text-blue-50 hover:bg-blue-500/70",
    ].join(" ");

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-blue-600 text-white shadow-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-blue-700"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt=""
            width={56}
            height={56}
            className="h-11 w-11 rounded-full object-cover ring-2 ring-white/30 sm:h-14 sm:w-14"
          />
          <span className="truncate text-base font-semibold sm:text-xl">
            {school.shortName}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-0.5 xl:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          {smsUrl ? (
            <a
              href={smsUrl}
              className="ml-2 inline-flex items-center gap-2 rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <LogIn className="h-4 w-4" aria-hidden="true" />
              Login
            </a>
          ) : null}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white xl:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id={menuId}
        className={`border-t border-blue-500 bg-blue-700 xl:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4"
          aria-label="Mobile primary"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                [
                  "rounded-md px-3 py-3 text-base font-medium",
                  isActive ? "bg-blue-800 text-white" : "text-blue-50 hover:bg-blue-600",
                ].join(" ")
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          {smsUrl ? (
            <a
              href={smsUrl}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 px-3 py-3 text-base font-semibold text-white hover:bg-orange-600"
              onClick={() => setOpen(false)}
            >
              <LogIn className="h-4 w-4" aria-hidden="true" />
              Login
            </a>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
