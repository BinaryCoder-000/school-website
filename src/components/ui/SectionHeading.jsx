export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}) {
  const alignment =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`flex flex-col gap-3 mb-10 md:mb-14 ${alignment}`}>
      {eyebrow ? (
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-wide ${
            light
              ? "bg-white/15 text-orange-200"
              : "bg-orange-100 text-orange-700"
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        id={id}
        className={`text-3xl sm:text-4xl font-semibold tracking-tight ${
          light ? "text-white" : "text-slate-800"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-2xl text-base sm:text-lg leading-relaxed ${
            light ? "text-blue-50" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
