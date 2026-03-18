"use client";

import { useState } from "react";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { PageHero } from "@/components/shared/PageHero";
import { PACKAGES, SITE_CONFIG } from "@/lib/constants";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";

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
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        label="Let's Connect"
        title="Get in Touch"
        description="Questions, special requests, or just want to say hello? We'd love to hear from you."
      />

      {/* Content */}
      <section className="py-28 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedReveal variant="fadeLeft">
                {submitted ? (
                  <div className="rounded-2xl bg-white p-12 text-center shadow-sm border border-sand-200/50">
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
                    className="rounded-2xl bg-white p-8 shadow-sm border border-sand-200/50 sm:p-10"
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
                            className="mt-1 w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-sm text-navy-500 placeholder-navy-200 transition-all duration-300 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20 focus:shadow-sm"
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
                            className="mt-1 w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-sm text-navy-500 placeholder-navy-200 transition-all duration-300 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20 focus:shadow-sm"
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
                            className="mt-1 w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-sm text-navy-500 placeholder-navy-200 transition-all duration-300 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20 focus:shadow-sm"
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
                            className="mt-1 w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-sm text-navy-500 transition-all duration-300 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20 focus:shadow-sm"
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
                          className="mt-1 w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-sm text-navy-500 placeholder-navy-200 transition-all duration-300 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20 focus:shadow-sm resize-none"
                          placeholder="Tell us about your plans — dates, occasion, number of guests, or any questions you have..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-gold-600 hover:shadow-[0_8px_30px_rgba(201,168,76,0.35)]"
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
              <AnimatedReveal variant="fadeRight" delay={200}>
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
                        className="group flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm border border-sand-200/50 transition-all duration-300 hover:shadow-md hover:border-gold-200/50"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-50 to-gold-100 transition-all duration-300 group-hover:shadow-md group-hover:shadow-gold-200/30">
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
                  <div className="overflow-hidden rounded-xl bg-gradient-to-br from-sea-200 to-sea-400 aspect-[4/3] flex items-center justify-center shadow-sm">
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
