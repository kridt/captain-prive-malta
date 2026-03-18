"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";

const GALLERY_ITEMS = [
  { id: 1, category: "sunsets", label: "Golden sunset over Comino" },
  { id: 2, category: "coastline", label: "Hidden cave near Dingli Cliffs" },
  { id: 3, category: "onboard", label: "Champagne service onboard" },
  { id: 4, category: "blue-lagoon", label: "Crystal clear Blue Lagoon" },
  { id: 5, category: "sunsets", label: "Romantic sunset cruise" },
  { id: 6, category: "coastline", label: "Secret cove swimming spot" },
  { id: 7, category: "onboard", label: "Proposal celebration" },
  { id: 8, category: "blue-lagoon", label: "Snorkeling in paradise" },
  { id: 9, category: "sunsets", label: "Mediterranean gold" },
  { id: 10, category: "coastline", label: "Ancient coastal formations" },
  { id: 11, category: "onboard", label: "Gourmet experience at sea" },
  { id: 12, category: "blue-lagoon", label: "Aerial view of the lagoon" },
];

const CATEGORIES = [
  { value: "all", label: "All" },
  { value: "sunsets", label: "Sunsets" },
  { value: "coastline", label: "Coastline" },
  { value: "onboard", label: "On Board" },
  { value: "blue-lagoon", label: "Blue Lagoon" },
];

// Generate gradient colors for placeholders
const GRADIENTS = [
  "from-amber-400 to-orange-500",
  "from-navy-400 to-sea-500",
  "from-gold-400 to-gold-600",
  "from-sea-300 to-sea-500",
  "from-orange-300 to-amber-500",
  "from-navy-300 to-navy-500",
  "from-gold-300 to-gold-500",
  "from-sea-400 to-navy-400",
  "from-amber-300 to-orange-400",
  "from-navy-400 to-sea-400",
  "from-gold-400 to-amber-500",
  "from-sea-300 to-navy-300",
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    filter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-500 to-sea-500" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-sand-50 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-300">
            Captured Moments
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Gallery
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            A glimpse into the experiences that await you on the Mediterranean.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  filter === cat.value
                    ? "bg-navy-500 text-white shadow-sm"
                    : "bg-white text-navy-400 hover:bg-navy-50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {filtered.map((item, i) => {
              const isLandscape = i % 3 !== 1;
              return (
                <AnimatedReveal key={item.id} delay={i * 50}>
                  <button
                    onClick={() =>
                      setLightboxIndex(
                        GALLERY_ITEMS.findIndex((g) => g.id === item.id)
                      )
                    }
                    className={`group relative mb-4 w-full overflow-hidden rounded-xl ${
                      isLandscape ? "aspect-[4/3]" : "aspect-[3/4]"
                    } bg-gradient-to-br ${GRADIENTS[item.id - 1]} transition-transform hover:scale-[1.02] cursor-pointer`}
                  >
                    <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-sm font-medium text-white">
                        {item.label}
                      </p>
                    </div>
                  </button>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={() =>
              setLightboxIndex(
                (lightboxIndex - 1 + GALLERY_ITEMS.length) %
                  GALLERY_ITEMS.length
              )
            }
            className="absolute left-4 text-white/70 hover:text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <div className="mx-16 max-w-4xl w-full">
            <div
              className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${GRADIENTS[GALLERY_ITEMS[lightboxIndex].id - 1]} flex items-center justify-center`}
            >
              <p className="text-xl font-medium text-white/80">
                {GALLERY_ITEMS[lightboxIndex].label}
              </p>
            </div>
            <p className="mt-4 text-center text-sm text-white/60">
              {lightboxIndex + 1} / {GALLERY_ITEMS.length}
            </p>
          </div>

          <button
            onClick={() =>
              setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length)
            }
            className="absolute right-4 text-white/70 hover:text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </>
  );
}
