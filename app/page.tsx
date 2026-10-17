import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { adminWaLink } from "@/lib/chatbot";
import { advantages, faqs, processSteps, testimonials } from "@/lib/content";
import { formatRupiah, platforms } from "@/lib/services";
import { site, stats } from "@/lib/site";

const bestSellers = [
  { name: "TikTok Views", price: 2500 },
  { name: "Instagram Reels Views", price: 6000 },
  { name: "Instagram Likes Real", price: 12000 },
  { name: "TikTok Followers", price: 48000 },
  { name: "Instagram Followers Indonesia", price: 55000 },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-brand/25 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-accent/20 blur-[120px]"
        />

        <div className="container-page relative grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface px-4 py-1.5 text-xs font-medium text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Panel aktif 24/7 · Proses mulai &lt; 15 menit
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Naikkan <span className="text-gradient">Likes, Views</span> &amp; Followers
              Sosial Media Anda
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {site.name} adalah penyedia jasa social media marketing terpercaya sejak{" "}
              {site.founded}. Layanan Instagram, TikTok, YouTube, Facebook, X, hingga
              Shopee dengan harga termurah, proses instan, dan garansi refill.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={adminWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Order Sekarang
              </a>
              <Link
                href="/harga"
                className="rounded-full border border-border-soft px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand"
              >
                Lihat Daftar Harga
              </Link>
            </div>

            <p className="mt-6 text-sm text-muted">
              💬 Butuh estimasi biaya cepat? Klik tombol{" "}
              <span className="font-semibold text-foreground">Tanya NATHBot</span> di
              kanan bawah — chatbot kami menghitung total harga otomatis.
            </p>
          </div>

          <div className="animate-float card-surface p-6 shadow-2xl shadow-black/40">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Harga terlaris hari ini
            </p>
            <ul className="mt-5 space-y-3">
              {bestSellers.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between rounded-xl bg-surface-2 px-4 py-3 text-sm"
                >
                  <span className="text-foreground/85">{item.name}</span>
                  <span className="font-semibold text-brand">
                    {formatRupiah(item.price)}
                    <span className="ml-1 text-xs font-normal text-muted">/1k</span>
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/harga"
              className="mt-5 block rounded-xl border border-border-soft py-2.5 text-center text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
            >
              Lihat semua harga →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border-soft bg-surface/50">
        <div className="container-page grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-gradient text-3xl font-extrabold sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading
          eyebrow="Layanan Kami"
          title="Satu panel untuk semua platform"
          description="Lebih dari 180 jenis layanan siap pakai untuk personal branding, UMKM, artis, hingga agensi digital."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => (
            <Link
              key={platform.slug}
              href={`/layanan#${platform.slug}`}
              className="card-surface p-6 transition-colors hover:border-brand"
            >
              <span
                className="grid h-11 w-11 place-items-center rounded-xl text-sm font-bold text-background"
                style={{ backgroundColor: platform.color }}
              >
                {platform.icon}
              </span>
              <h3 className="mt-5 text-lg font-bold">{platform.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {platform.summary}
              </p>
              <p className="mt-4 text-sm font-semibold text-brand">
                {platform.services.length} layanan · mulai{" "}
                {formatRupiah(
                  Math.min(...platform.services.map((item) => item.pricePer1000)),
                )}
                /1k
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border-soft bg-surface/40">
        <div className="container-page py-20">
          <SectionHeading
            eyebrow="Kenapa NATHSMM"
            title="Alasan 42.000+ pelanggan memilih kami"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item) => (
              <div key={item.title} className="card-surface p-6">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="mt-4 text-base font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading
          eyebrow="Cara Order"
          title="Empat langkah, pesanan langsung jalan"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item) => (
            <div key={item.step} className="card-surface p-6">
              <span className="text-3xl font-extrabold text-brand/40">{item.step}</span>
              <h3 className="mt-3 text-base font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border-soft bg-surface/40">
        <div className="container-page py-20">
          <SectionHeading eyebrow="Testimoni" title="Kata pelanggan kami" />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="card-surface p-6">
                <p className="text-sm leading-relaxed text-foreground/85">
                  “{item.quote}”
                </p>
                <footer className="mt-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand/20 text-sm font-bold text-brand">
                    {item.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-muted">{item.role}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan yang sering diajukan"
          description="Belum terjawab? Tanyakan langsung ke NATHBot lewat tombol chat di kanan bawah."
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="card-surface group p-5">
              <summary className="cursor-pointer list-none text-sm font-semibold">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-brand transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="container-page pb-8">
        <div className="rounded-3xl border border-border-soft bg-gradient-to-br from-brand/25 via-surface to-accent/20 p-10 text-center sm:p-14">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Siap membuat akun Anda ramai hari ini?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted sm:text-base">
            Order sekarang dan rasakan bedanya dalam hitungan menit. Tim {site.name} siap
            membantu Anda dari pemilihan layanan sampai laporan hasil.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={adminWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Chat Admin WhatsApp
            </a>
            <Link
              href="/kontak"
              className="rounded-full border border-border-soft bg-background/40 px-6 py-3 text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
            >
              Kirim Pesan
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
