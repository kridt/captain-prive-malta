"use client";

import { useState, useEffect } from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
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
    <section className="relative py-28 bg-navy-900 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(58,143,183,0.15)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(201,168,76,0.08)_0%,_transparent_50%)]" />

      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
          <path d="M0 0H1440V40C1200 80 960 60 720 70C480 80 240 40 0 60V0Z" fill="var(--color-sand-50)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
          {/* Decorative quote icon */}
          <Quote className="absolute -top-4 left-1/2 -translate-x-1/2 h-10 w-10 text-gold-400/20" />

          <div className="relative overflow-hidden min-h-[250px]">
            {TESTIMONIALS.map((testimonial, i) => (
              <div
                key={i}
                className={`text-center transition-all duration-500 ease-out ${
                  i === current
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 absolute inset-0 translate-x-8"
                }`}
                style={{ display: i === current ? "block" : "none" }}
              >
                <div className="flex justify-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>
                <blockquote className="mt-8 font-serif text-xl leading-relaxed text-white/90 sm:text-2xl">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
                <div className="mt-8">
                  <p className="font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-white/40 mt-1">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              onClick={() =>
                setCurrent(
                  (prev) =>
                    (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
                )
              }
              className="rounded-full border border-white/10 p-2.5 text-white/40 transition-all hover:border-gold-400/40 hover:text-gold-400 hover:bg-white/5"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === current
                      ? "w-10 bg-gold-400"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() =>
                setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
              }
              className="rounded-full border border-white/10 p-2.5 text-white/40 transition-all hover:border-gold-400/40 hover:text-gold-400 hover:bg-white/5"
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
