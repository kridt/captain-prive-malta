"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface PageHeroProps {
  label?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  size?: "default" | "large";
}

export function PageHero({
  label,
  title,
  description,
  children,
  size = "default",
}: PageHeroProps) {
  const height =
    size === "large"
      ? "h-[60vh] min-h-[500px]"
      : "h-[50vh] min-h-[400px]";

  return (
    <section
      className={`relative flex items-center justify-center ${height} overflow-hidden`}
    >
      {/* Premium layered background */}
      <div className="absolute inset-0 bg-navy-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1a2744_0%,_#0c1425_70%)]" />

      {/* Ambient light orbs */}
      <motion.div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-sea-500/15 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-gold-500/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{
          duration: 8,
          delay: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Horizontal gold accent */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />

      {/* Curved wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100V50C240 20 480 0 720 10C960 20 1200 50 1440 30V100H0Z"
            fill="var(--color-sand-50)"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        {label && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse-soft" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
              {label}
            </span>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className={`${label ? "mt-5" : ""} font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl`}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mx-auto mt-5 max-w-xl text-lg text-white/55"
          >
            {description}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
