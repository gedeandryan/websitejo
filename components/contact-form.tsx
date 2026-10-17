"use client";

import { useState } from "react";

import { platforms } from "@/lib/services";
import { site, waLink } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [platform, setPlatform] = useState(platforms[0].name);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const composed = `Halo ${site.name}, saya ${name || "(nama)"}.\nPlatform: ${platform}\nPesan: ${message || "(pesan)"}`;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
        window.open(waLink(composed), "_blank", "noopener,noreferrer");
      }}
      className="card-surface p-7"
    >
      <h3 className="text-lg font-bold">Kirim Pesan</h3>
      <p className="mt-2 text-sm text-muted">
        Isi form di bawah, pesan Anda akan diteruskan ke WhatsApp admin kami beserta
        detail yang sudah tersusun rapi.
      </p>

      <div className="mt-6 space-y-4">
        <label className="block text-sm">
          <span className="text-muted">Nama Anda</span>
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Contoh: Rani Puspita"
            className="mt-1.5 w-full rounded-xl border border-border-soft bg-background px-3 py-2.5 text-sm outline-none placeholder:text-muted/60 focus:border-brand"
          />
        </label>

        <label className="block text-sm">
          <span className="text-muted">Platform yang dibutuhkan</span>
          <select
            value={platform}
            onChange={(event) => setPlatform(event.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border-soft bg-background px-3 py-2.5 text-sm outline-none focus:border-brand"
          >
            {platforms.map((item) => (
              <option key={item.slug} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm">
          <span className="text-muted">Pesan</span>
          <textarea
            required
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Ceritakan kebutuhan Anda, contoh: butuh 5.000 followers Instagram untuk toko online."
            className="mt-1.5 w-full resize-none rounded-xl border border-border-soft bg-background px-3 py-2.5 text-sm outline-none placeholder:text-muted/60 focus:border-brand"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-brand py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
      >
        Kirim via WhatsApp
      </button>

      {submitted ? (
        <p className="mt-3 text-center text-xs text-emerald-400">
          Pesan Anda sudah disiapkan. Jika WhatsApp tidak terbuka otomatis, hubungi{" "}
          {site.phone}.
        </p>
      ) : null}
    </form>
  );
}
