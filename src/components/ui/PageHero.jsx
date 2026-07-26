export default function PageHero({ title, subtitle, image, imageAlt = "" }) {
  return (
    <header className="relative min-h-[42vh] sm:min-h-[48vh] flex items-end overflow-hidden">
      {image ? (
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-900" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-900/55 to-blue-800/35" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-12 pt-28">
        <h1 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight fade-slide">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-3 max-w-2xl text-base sm:text-lg text-blue-50 leading-relaxed">
            {subtitle}
          </p>
        ) : null}
      </div>
    </header>
  );
}
