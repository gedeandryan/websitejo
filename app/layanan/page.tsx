import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { adminWaLink } from "@/lib/chatbot";
import { formatRupiah, platforms } from "@/lib/services";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Daftar lengkap layanan NATHSMM: likes, views, followers, subscribers, komentar, dan engagement untuk Instagram, TikTok, YouTube, Facebook, X, Shopee, Spotify, dan Telegram.",
};

export default function LayananPage() {
  return (
    <>
      <section className="container-page py-16 lg:py-20">
        <SectionHeading
          align="left"
          eyebrow="Layanan"
          title={
            <>
              Semua layanan <span className="text-gradient">social media</span> dalam satu
              tempat
            </>
          }
          description={`${site.name} melayani seluruh kebutuhan engagement sosial media Anda. Setiap layanan mencantumkan harga per 1.000 unit, batas order, kecepatan, dan garansi secara transparan.`}
        />
      </section>

      {platforms.map((platform) => (
        <section
          key={platform.slug}
          id={platform.slug}
          className="container-page scroll-mt-24 pb-16"
        >
          <div className="flex flex-wrap items-center gap-4">
            <span
              className="grid h-12 w-12 place-items-center rounded-xl text-sm font-bold text-background"
              style={{ backgroundColor: platform.color }}
            >
              {platform.icon}
            </span>
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">{platform.name}</h2>
              <p className="mt-1 max-w-2xl text-sm text-muted">{platform.summary}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {platform.services.map((service) => (
              <article key={service.id} className="card-surface flex flex-col p-5">
                <h3 className="text-base font-bold leading-snug">{service.name}</h3>
                <p className="mt-2 text-lg font-extrabold text-brand">
                  {formatRupiah(service.pricePer1000)}
                  <span className="ml-1 text-xs font-normal text-muted">/ 1.000</span>
                </p>

                <dl className="mt-4 space-y-1.5 text-xs text-muted">
                  <div className="flex justify-between gap-3">
                    <dt>Batas order</dt>
                    <dd className="text-right text-foreground/80">
                      {service.min.toLocaleString("id-ID")} –{" "}
                      {service.max.toLocaleString("id-ID")}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt>Mulai proses</dt>
                    <dd className="text-right text-foreground/80">{service.start}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt>Kecepatan</dt>
                    <dd className="text-right text-foreground/80">{service.speed}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt>Garansi</dt>
                    <dd className="text-right text-foreground/80">{service.guarantee}</dd>
                  </div>
                </dl>

                <a
                  href={waLink(
                    `Halo ${site.name}, saya ingin order layanan "${service.name}". Mohon dibantu.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 rounded-xl border border-border-soft py-2.5 text-center text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
                >
                  Order layanan ini
                </a>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="container-page pb-8">
        <div className="card-surface flex flex-col items-center gap-4 p-10 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight">
            Layanan yang Anda cari belum ada?
          </h2>
          <p className="max-w-xl text-sm text-muted">
            Kami punya lebih dari 180 layanan aktif di panel. Tanyakan ke NATHBot atau
            hubungi admin — kami bantu carikan layanan yang paling sesuai kebutuhan dan
            budget Anda.
          </p>
          <a
            href={adminWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Tanya Admin
          </a>
        </div>
      </section>
    </>
  );
}
