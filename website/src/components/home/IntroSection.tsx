import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { Anchor, Heart, Compass } from "lucide-react";

export function IntroSection() {
  return (
    <section className="py-24 bg-sand-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-500">
              Your Private Escape
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-navy-500 sm:text-4xl lg:text-5xl">
              Where Luxury Meets the Sea
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-300">
              Captain Prive Malta delivers exclusive, high-quality private sea
              experiences that blend luxury, authenticity, and personal
              connection. Every journey is hosted personally by Captain Patrick
              — creating moments that stay with you long after you return to
              shore.
            </p>
          </div>
        </AnimatedReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Heart,
              title: "Intimate & Personal",
              description:
                "Every charter is private. Every route is tailored. You receive the full attention of your captain.",
            },
            {
              icon: Compass,
              title: "Authentically Maltese",
              description:
                "Hidden coves, local stories, and unique coastal landscapes that only a local captain can share.",
            },
            {
              icon: Anchor,
              title: "Effortless Luxury",
              description:
                "From chilled drinks on arrival to seamless navigation — designed to feel smooth, calm, and beautifully simple.",
            },
          ].map((item, i) => (
            <AnimatedReveal key={item.title} delay={i * 150}>
              <div className="rounded-2xl bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-50">
                  <item.icon className="h-6 w-6 text-gold-500" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-navy-500">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-300">
                  {item.description}
                </p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
