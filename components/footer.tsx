import Link from "next/link";

import { navLinks, site } from "@/lib/site";

const serviceLinks = [
  { label: "Instagram", href: "/layanan#instagram" },
  { label: "TikTok", href: "/layanan#tiktok" },
  { label: "YouTube", href: "/layanan#youtube" },
  { label: "Facebook", href: "/layanan#facebook" },
  { label: "X (Twitter)", href: "/layanan#x-twitter" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border-soft bg-surface/60">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="text-xl font-extrabold tracking-tight">
            NATH<span className="text-gradient">SMM</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {site.description}
          </p>
          <p className="mt-4 text-xs text-muted">
            {site.legal} · Berdiri sejak {site.founded}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
            Navigasi
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-foreground/80 transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
            Layanan
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-foreground/80 transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border-soft">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex flex-wrap gap-4">
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
