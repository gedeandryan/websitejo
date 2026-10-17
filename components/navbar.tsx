"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { adminWaLink } from "@/lib/chatbot";
import { navLinks } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors ${
        scrolled
          ? "border-border-soft bg-background/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-extrabold tracking-tight">
          NATH<span className="text-gradient">SMM</span>
        </Link>

        <ul className="hidden items-center gap-7 text-sm md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-colors ${
                    active ? "text-brand" : "text-foreground/80 hover:text-brand"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={adminWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark sm:inline-flex"
          >
            Order Sekarang
          </a>
          <button
            type="button"
            aria-label="Buka menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-border-soft md:hidden"
          >
            <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border-soft bg-surface md:hidden">
          <ul className="container-page flex flex-col py-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2.5 ${
                    pathname === link.href ? "text-brand" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={adminWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-brand px-5 py-2 font-semibold text-white"
              >
                Order Sekarang
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
