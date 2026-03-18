"use client";

import { useState } from "react";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { PACKAGES, SITE_CONFIG } from "@/lib/constants";
import { Mail, Phone, MapPin, Instagram, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In Phase 3, this will POST to /api/contact
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-500 to-sea-500" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-sand-50 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-300">
            Let&apos;s Connect
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Questions, special requests, or just want to say hello? We&apos;d
            love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedReveal>
                {submitted ? (
                  <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="mt-6 font-serif text-2xl font-bold text-navy-500">
                      Message Sent!
                    </h3>
                    <p className="mt-3 text-base text-navy-300">
                      Thank you for reaching out. Captain Patrick will get back
                      to you within a few hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="rounded-2xl bg-white p-8 shadow-sm sm:p-10"
                  >
                    <h2 className="font-serif text-2xl font-bold text-navy-500">
                      Send Us a Message
                    </h2>
                    <p className="mt-2 text-sm text-navy-300">
                      We respond within 2 hours during operating hours.
                    </p>

                    <div className="mt-8 space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label className="block text-sm font-medium text-navy-500">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="mt-1 w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-sm text-navy-500 placeholder-navy-200 transition-colors focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20"
                            placeholder="John & Jane"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-navy-500">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className="mt-1 w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-sm text-navy-500 placeholder-navy-200 transition-colors focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20"
                            placeholder="hello@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label className="block text-sm font-medium text-navy-500">
                            Phone / WhatsApp
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            className="mt-1 w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-sm text-navy-500 placeholder-navy-200 transition-colors focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20"
                            placeholder="+356 1234 5678"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-navy-500">
                            Interested In
                          </label>
                          <select
                            value={formData.package}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                package: e.target.value,
                              })
                            }
                            className="mt-1 w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-sm text-navy-500 transition-colors focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20"
                          >
                            <option value="">Select an experience...</option>
                            {PACKAGES.map((pkg) => (
                              <option key={pkg.slug} value={pkg.slug}>
                                {pkg.name}
                              </option>
                            ))}
                            <option value="other">Something else</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-navy-500">
                          Your Message *
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          className="mt-1 w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-sm text-navy-500 placeholder-navy-200 transition-colors focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20 resize-none"
                          placeholder="Tell us about your plans — dates, occasion, number of guests, or any questions you have..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-gold-600 hover:shadow-lg"
                      >
                        Send Message
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </form>
                )}
              </AnimatedReveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedReveal delay={200}>
                <div className="space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-navy-500">
                      Contact Info
                    </h2>
                    <p className="mt-2 text-sm text-navy-300">
                      Reach out directly — Captain Patrick responds personally.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        icon: Mail,
                        label: "Email",
                        value: SITE_CONFIG.email,
                        href: `mailto:${SITE_CONFIG.email}`,
                      },
                      {
                        icon: Phone,
                        label: "WhatsApp",
                        value: "Message us on WhatsApp",
                        href: `https://wa.me/${SITE_CONFIG.whatsappNumber}`,
                      },
                      {
                        icon: Instagram,
                        label: "Instagram",
                        value: `@${SITE_CONFIG.instagram}`,
                        href: `https://instagram.com/${SITE_CONFIG.instagram}`,
                      },
                      {
                        icon: MapPin,
                        label: "Location",
                        value: SITE_CONFIG.location,
                        href: undefined,
                      },
                      {
                        icon: Clock,
                        label: "Season",
                        value: "April - October (High Season)",
                        href: undefined,
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-50">
                          <item.icon className="h-5 w-5 text-gold-500" />
                        </div>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-navy-300">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={
                                item.href.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                item.href.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="text-sm font-medium text-navy-500 hover:text-gold-500 transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm font-medium text-navy-500">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Map Placeholder */}
                  <div className="overflow-hidden rounded-xl bg-gradient-to-br from-sea-200 to-sea-400 aspect-[4/3] flex items-center justify-center">
                    <div className="text-center text-white/70">
                      <MapPin className="h-8 w-8 mx-auto" />
                      <p className="mt-2 text-sm font-medium">
                        Bugibba Harbour, Malta
                      </p>
                      <p className="text-xs">Map integration coming soon</p>
                    </div>
                  </div>
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
