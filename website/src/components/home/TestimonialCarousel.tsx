"use client";

import { useState, useEffect } from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-24 bg-navy-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedReveal>
          <SectionHeading
            label="Guest Stories"
            title="What Our Guests Say"
            light
          />
        </AnimatedReveal>

        <div
          className="relative mt-16 mx-auto max-w-3xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            {TESTIMONIALS.map((testimonial, i) => (
              <div
                key={i}
                className={`transition-all duration-500 ${
                  i === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 absolute inset-0"
                }`}
                style={{ display: i === current ? "block" : "none" }}
              >
                <div className="text-center">
                  <div className="flex justify-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-5 w-5 fill-gold-400 text-gold-400"
                      />
                    ))}
                  </div>
                  <blockquote className="mt-6 font-serif text-xl leading-relaxed text-white sm:text-2xl">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                  <div className="mt-6">
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-white/50">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() =>
                setCurrent(
                  (prev) =>
                    (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
                )
              }
              className="rounded-full border border-white/20 p-2 text-white/60 transition-colors hover:border-white/40 hover:text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current
                      ? "w-8 bg-gold-400"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() =>
                setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
              }
              className="rounded-full border border-white/20 p-2 text-white/60 transition-colors hover:border-white/40 hover:text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
