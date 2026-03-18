import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Heart, Compass, Anchor, Shield, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Captain Patrick",
  description:
    "Meet Captain Patrick — the Danish-born seafarer behind Captain Prive Malta. Learn about our story, values, and commitment to premium private sea experiences.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-500 to-sea-500" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-sand-50 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-300">
            Our Story
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            About Captain Prive
          </h1>
        </div>
      </section>

      {/* Patrick's Story */}
      <section className="py-24 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <AnimatedReveal>
              <div className="aspect-[3/4] max-w-lg mx-auto overflow-hidden rounded-2xl bg-gradient-to-br from-navy-300 to-sea-400 shadow-lg">
                <div className="flex h-full items-center justify-center text-white/50 text-sm">
                  Captain Patrick Portrait
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={200}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-gold-500">
                  Meet Your Captain
                </p>
                <h2 className="mt-3 font-serif text-3xl font-bold text-navy-500 sm:text-4xl">
                  Captain Patrick Wolter
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-300">
                  <p>
                    At the heart of Captain Prive Malta is Captain Patrick, a
                    Danish-born seafarer who has called Malta home for more than
                    five years. His journey began long before the company existed
                    — Patrick grew up sailing from a young age, spending
                    countless hours on the water and developing a natural
                    confidence, respect, and love for the sea.
                  </p>
                  <p>
                    When he moved to Malta, everything changed. He fell in love
                    not only with the island&apos;s coastline, but with its
                    culture, its people, and its rhythm. Malta became the place
                    where he built a life, met his wife, and welcomed his
                    daughter.
                  </p>
                  <p>
                    Patrick is known for his warm energy, great storytelling, and
                    ability to make guests feel instantly comfortable. Whether
                    he&apos;s guiding a couple through a proposal, sharing local
                    secrets about Malta&apos;s coastline, or capturing the
                    perfect photo, he brings a personal touch that transforms a
                    simple boat trip into something meaningful.
                  </p>
                  <blockquote className="border-l-4 border-gold-400 pl-6 italic text-navy-400">
                    &ldquo;Every guest should leave feeling special, happy, and
                    connected — not just to the sea, but to Malta itself.&rdquo;
                  </blockquote>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <SectionHeading
              label="Our Values"
              title="What Guides Every Journey"
              description="These principles shape every experience we create — from the first message to the final goodbye."
            />
          </AnimatedReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Personal Connection",
                description:
                  "Every trip is private, tailored, and hosted directly by the captain. Guests feel welcomed, recognized, and valued.",
              },
              {
                icon: Anchor,
                title: "Curated Simplicity",
                description:
                  "Luxury is expressed through ease — seamless service, effortless comfort, and thoughtful details.",
              },
              {
                icon: Award,
                title: "Exclusivity Over Volume",
                description:
                  "We prioritize quality, not quantity. Limited capacity ensures premium service and high guest satisfaction.",
              },
              {
                icon: Compass,
                title: "Local Authenticity",
                description:
                  "Experiences highlight Malta's true character — hidden coves, local stories, and unique coastal landscapes.",
              },
              {
                icon: Shield,
                title: "Safety First",
                description:
                  "Fully licensed captain, comprehensive insurance, safety briefings, and strict passenger limits on every trip.",
              },
              {
                icon: Heart,
                title: "Emotion-Driven",
                description:
                  "Each package is designed to evoke emotion: romance, celebration, serenity, or discovery.",
              },
            ].map((value, i) => (
              <AnimatedReveal key={value.title} delay={i * 100}>
                <div className="rounded-2xl border border-sand-200 p-8 transition-all hover:border-gold-200 hover:shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-50">
                    <value.icon className="h-5 w-5 text-gold-500" />
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-bold text-navy-500">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-300">
                    {value.description}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Boat */}
      <section className="py-24 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <AnimatedReveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-gold-500">
                  Your Vessel
                </p>
                <h2 className="mt-3 font-serif text-3xl font-bold text-navy-500 sm:text-4xl">
                  The Boat
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-300">
                  <p>
                    Our carefully selected premium vessel is designed for comfort
                    and intimacy. Accommodating up to 8 guests, it provides the
                    perfect balance of space and coziness for an unforgettable
                    experience.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Comfortable seating and sunbathing areas",
                      "Premium sound system for curated playlists",
                      "Shaded areas for relaxation",
                      "Snorkeling equipment onboard",
                      "Full safety equipment and certifications",
                      "Refreshment station",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={200}>
              <div className="aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-sea-300 to-navy-400 shadow-lg">
                <div className="flex h-full items-center justify-center text-white/50 text-sm">
                  The Boat
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-500">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <AnimatedReveal>
            <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
              Experience It Yourself
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Step aboard and discover why our guests call it unforgettable.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/booking"
                className="rounded-full bg-gold-500 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-gold-600 hover:shadow-lg"
              >
                Book Your Experience
              </Link>
              <Link
                href="/experiences"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
              >
                Browse Experiences
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
