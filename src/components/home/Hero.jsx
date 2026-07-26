import { Link } from "react-router-dom";
import banner960 from "../../assets/images/banner-960.webp";
import banner1600 from "../../assets/images/banner-1600.webp";
import bannerJpg from "../../assets/images/banner-1600.jpg";
import { school } from "../../data/school";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[78vh] overflow-hidden text-white sm:min-h-[85vh]">
      <div className="absolute inset-0">
        <picture>
          <source
            type="image/webp"
            srcSet={`${banner960} 960w, ${banner1600} 1600w`}
            sizes="100vw"
          />
          <img
            src={bannerJpg}
            alt=""
            width={1600}
            height={900}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </picture>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-900/65 to-blue-800/35" />

      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center px-4 py-20 sm:min-h-[85vh] sm:px-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-300">
          Official School Website
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          {school.fullName}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-blue-50 sm:text-lg">
          {school.tagline}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/admissions"
            className="inline-flex items-center justify-center rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-200"
          >
            Apply for Admission
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-md border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Discover Our School
          </Link>
        </div>
      </div>
    </section>
  );
}
