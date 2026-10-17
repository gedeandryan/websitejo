import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { milestones, values } from "@/lib/content";
import { site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `Profil perusahaan ${site.name} (${site.legal}), penyedia jasa social media marketing sejak ${site.founded}.`,
};

export default function TentangPage() {
  return (
    <>
      <section className="container-page py-16 lg:py-24">
        <SectionHeading
          align="left"
          eyebrow="Company Profile"
          title={
            <>
              Membantu brand Indonesia tumbuh di{" "}
              <span className="text-gradient">sosial media</span>
            </>
          }
          description={`${site.name} berdiri di bawah badan usaha ${site.legal} sejak ${site.founded}. Kami memulai dari layanan sederhana lewat WhatsApp dan berkembang menjadi panel social media marketing dengan lebih dari 180 jenis layanan.`}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="card-surface p-7 lg:col-span-2">
            <h3 className="text-lg font-bold">Profil Singkat</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Kami percaya setiap pelaku usaha berhak mendapatkan awal yang adil di sosial
              media. Algoritma platform cenderung memihak akun yang sudah punya
              engagement, sehingga akun baru sulit ditemukan. {site.name} hadir untuk
              memberi dorongan awal tersebut — likes, views, followers, dan komentar yang
              membuat konten Anda terlihat kredibel dan layak dibagikan.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Seluruh layanan diproses melalui panel otomatis yang terhubung ke lebih dari
              30 penyedia global, sehingga harga tetap kompetitif dan pengiriman stabil.
              Tim support kami berbasis di Semarang dan melayani pelanggan dari seluruh
              Indonesia — UMKM, content creator, artis, sampai agensi digital.
            </p>
          </div>

          <div className="card-surface p-7">
            <h3 className="text-lg font-bold">Data Perusahaan</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-muted">Nama badan usaha</dt>
                <dd className="font-medium">{site.legal}</dd>
              </div>
              <div>
                <dt className="text-muted">Merek layanan</dt>
                <dd className="font-medium">{site.name}</dd>
              </div>
              <div>
                <dt className="text-muted">Tahun berdiri</dt>
                <dd className="font-medium">{site.founded}</dd>
              </div>
              <div>
                <dt className="text-muted">Alamat</dt>
                <dd className="font-medium">{site.address}</dd>
              </div>
              <div>
                <dt className="text-muted">Jam operasional</dt>
                <dd className="font-medium">{site.operational}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="border-y border-border-soft bg-surface/50">
        <div className="container-page grid gap-8 py-14 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-gradient text-3xl font-extrabold">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card-surface p-7">
            <h3 className="text-lg font-bold">Visi</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Menjadi penyedia layanan social media marketing paling dipercaya di
              Indonesia — dikenal karena harga jujur, proses cepat, dan layanan pelanggan
              yang benar-benar membantu.
            </p>
          </div>
          <div className="card-surface p-7">
            <h3 className="text-lg font-bold">Misi</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
              <li>
                • Menyediakan layanan berkualitas dengan harga terjangkau untuk UMKM.
              </li>
              <li>• Menjaga keamanan akun pelanggan tanpa pernah meminta kredensial.</li>
              <li>• Memberi garansi dan penyelesaian komplain yang cepat serta adil.</li>
              <li>• Terus berinovasi lewat otomatisasi, API, dan asisten chat 24 jam.</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="card-surface p-6">
              <h4 className="text-base font-bold text-brand">{value.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border-soft bg-surface/40">
        <div className="container-page py-20">
          <SectionHeading eyebrow="Perjalanan" title="Milestone NATHSMM" />
          <ol className="mx-auto mt-12 max-w-3xl space-y-4">
            {milestones.map((item) => (
              <li key={item.year} className="card-surface flex gap-5 p-6">
                <span className="text-lg font-extrabold text-brand">{item.year}</span>
                <div>
                  <h4 className="text-base font-bold">{item.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 text-center">
            <Link
              href="/layanan"
              className="inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Jelajahi Layanan Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
