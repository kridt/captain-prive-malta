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
        <p
          className={`text-sm font-semibold uppercase tracking-widest ${
            light ? "text-gold-300" : "text-gold-500"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`mt-2 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-navy-500"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/70" : "text-navy-300"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
