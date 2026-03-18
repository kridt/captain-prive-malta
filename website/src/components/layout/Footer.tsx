import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-500 text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Captain Prive
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Premium private sea experiences in Malta. Curated moments on the
              Mediterranean, led personally by Captain Patrick.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Explore
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-gold-400"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/booking"
                className="text-sm text-gold-400 font-medium transition-colors hover:text-gold-300"
              >
                Book Now
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Contact
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-gold-400 shrink-0" />
                <span>{SITE_CONFIG.location}</span>
              </div>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 text-sm transition-colors hover:text-gold-400"
              >
                <Mail className="h-4 w-4 text-gold-400 shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors hover:text-gold-400"
              >
                <Phone className="h-4 w-4 text-gold-400 shrink-0" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`https://instagram.com/${SITE_CONFIG.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors hover:text-gold-400"
              >
                <Instagram className="h-4 w-4 text-gold-400 shrink-0" />
                <span>@{SITE_CONFIG.instagram}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} Captain Prive Malta Ltd. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
