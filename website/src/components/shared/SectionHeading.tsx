interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {label && (
        <span
          className={`inline-block text-xs font-semibold uppercase tracking-[0.25em] ${
            light ? "text-gold-300" : "text-gold-500"
          }`}
        >
          {label}
        </span>
      )}
      {label && (
        <div
          className={`mt-3 w-12 divider-gold ${
            align === "center" ? "mx-auto" : ""
          }`}
        />
      )}
      <h2
        className={`${label ? "mt-5" : ""} font-serif text-3xl font-bold sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-navy-500"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/60" : "text-navy-300"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
