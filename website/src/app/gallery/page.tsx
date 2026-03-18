"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { PageHero } from "@/components/shared/PageHero";
import { motion, AnimatePresence } from "framer-motion";

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
      <PageHero
        label="Captured Moments"
        title="Gallery"
        description="A glimpse into the experiences that await you on the Mediterranean."
      />

      {/* Gallery */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <AnimatedReveal variant="fadeUp">
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    filter === cat.value
                      ? "bg-navy-900 text-white shadow-lg"
                      : "bg-white text-navy-400 border border-sand-200/50 hover:border-gold-200 hover:text-gold-600"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </AnimatedReveal>

          {/* Grid */}
          <motion.div
            layout
            className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => {
                const isLandscape = i % 3 !== 1;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: i * 0.03 }}
                  >
                    <button
                      onClick={() =>
                        setLightboxIndex(
                          GALLERY_ITEMS.findIndex((g) => g.id === item.id)
                        )
                      }
                      className={`group relative mb-4 w-full overflow-hidden rounded-xl ${
                        isLandscape ? "aspect-[4/3]" : "aspect-[3/4]"
                      } bg-gradient-to-br ${GRADIENTS[item.id - 1]} cursor-pointer`}
                    >
                      <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />
                      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-medium text-white">
                          {item.label}
                        </p>
                      </div>
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 backdrop-blur-md"
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors rounded-full p-2 hover:bg-white/10"
              aria-label="Close lightbox"
            >
              <X className="h-7 w-7" />
            </button>

            <button
              onClick={() =>
                setLightboxIndex(
                  (lightboxIndex - 1 + GALLERY_ITEMS.length) %
                    GALLERY_ITEMS.length
                )
              }
              className="absolute left-4 text-white/50 hover:text-white transition-colors rounded-full p-2 hover:bg-white/10"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="mx-16 max-w-4xl w-full"
            >
              <div
                className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${GRADIENTS[GALLERY_ITEMS[lightboxIndex].id - 1]} flex items-center justify-center shadow-2xl`}
              >
                <p className="text-xl font-medium text-white/80">
                  {GALLERY_ITEMS[lightboxIndex].label}
                </p>
              </div>
              <p className="mt-4 text-center text-sm text-white/40">
                {lightboxIndex + 1} / {GALLERY_ITEMS.length}
              </p>
            </motion.div>

            <button
              onClick={() =>
                setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length)
              }
              className="absolute right-4 text-white/50 hover:text-white transition-colors rounded-full p-2 hover:bg-white/10"
              aria-label="Next image"
            >
              <ChevronRight className="h-10 w-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
