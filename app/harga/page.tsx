import type { Metadata } from "next";

import { PriceCalculator } from "@/components/price-calculator";
import { SectionHeading } from "@/components/section-heading";
import { packages, paymentMethods } from "@/lib/content";
import { allServices, formatRupiah, platforms } from "@/lib/services";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Harga",
  description:
    "Daftar harga lengkap NATHSMM per 1.000 unit untuk likes, views, followers, subscribers, dan layanan lainnya, plus paket hemat dan kalkulator harga.",
};

export default function HargaPage() {
  return (
    <>
      <section className="container-page py-16 lg:py-20">
        <SectionHeading
          align="left"
          eyebrow="Daftar Harga"
          title={
            <>
              Harga <span className="text-gradient">transparan</span>, tanpa biaya
              tersembunyi
            </>
          }
          description={`Semua harga dihitung per 1.000 unit dan berlaku untuk pembelian retail. Total ${allServices.length} layanan aktif. Reseller mendapat harga khusus hingga 25% lebih murah.`}
        />
      </section>

      <section className="container-page pb-16">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <PriceCalculator />

          <div className="card-surface p-7">
            <h3 className="text-lg font-bold">Metode Pembayaran</h3>
            <ul className="mt-4 grid gap-2 text-sm text-muted sm:grid-cols-2">
              {paymentMethods.map((method) => (
                <li key={method} className="rounded-xl bg-surface-2 px-4 py-2.5">
                  {method}
                </li>
              ))}
            </ul>
            <h4 className="mt-6 text-sm font-bold">Catatan penting</h4>
            <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted">
              <li>• Harga dapat berubah mengikuti kurs penyedia global.</li>
              <li>• Order minimum dan maksimum berbeda tiap layanan.</li>
              <li>• Link atau username wajib publik selama pesanan berjalan.</li>
              <li>• Refill garansi diproses maksimal 24 jam setelah pengajuan.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border-soft bg-surface/40">
        <div className="container-page py-20">
          <SectionHeading eyebrow="Paket Hemat" title="Pilih paket sesuai kebutuhan" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((item) => (
              <div
                key={item.name}
                className={`card-surface relative flex flex-col p-7 ${
                  item.highlight ? "border-brand shadow-xl shadow-brand/20" : ""
                }`}
              >
                {item.highlight ? (
                  <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                    Paling Populer
                  </span>
                ) : null}
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="mt-1 text-sm text-muted">{item.tagline}</p>
                <p className="mt-5 text-3xl font-extrabold text-brand">
                  {formatRupiah(item.price)}
                </p>
                <ul className="mt-5 flex-1 space-y-2 text-sm text-muted">
                  {item.items.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="text-brand">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(
                    `Halo ${site.name}, saya ingin ambil paket ${item.name} (${formatRupiah(item.price)}).`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                    item.highlight
                      ? "bg-brand text-white hover:bg-brand-dark"
                      : "border border-border-soft hover:border-brand hover:text-brand"
                  }`}
                >
                  Ambil Paket {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading
          eyebrow="Harga Satuan"
          title="Daftar harga per layanan"
          description="Harga berlaku per 1.000 unit. Gunakan kalkulator di atas untuk menghitung jumlah spesifik."
        />

        <div className="mt-12 space-y-10">
          {platforms.map((platform) => (
            <div key={platform.slug}>
              <h3 className="flex items-center gap-3 text-lg font-bold">
                <span
                  className="grid h-8 w-8 place-items-center rounded-lg text-xs font-bold text-background"
                  style={{ backgroundColor: platform.color }}
                >
                  {platform.icon}
                </span>
                {platform.name}
              </h3>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[46rem] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border-soft text-left text-xs uppercase tracking-wider text-muted">
                      <th className="py-3 pr-4 font-semibold">Layanan</th>
                      <th className="py-3 pr-4 font-semibold">Harga / 1.000</th>
                      <th className="py-3 pr-4 font-semibold">Min – Maks</th>
                      <th className="py-3 pr-4 font-semibold">Mulai</th>
                      <th className="py-3 font-semibold">Garansi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {platform.services.map((service) => (
                      <tr
                        key={service.id}
                        className="border-b border-border-soft/60 text-foreground/85"
                      >
                        <td className="py-3 pr-4">{service.name}</td>
                        <td className="py-3 pr-4 font-semibold text-brand">
                          {formatRupiah(service.pricePer1000)}
                        </td>
                        <td className="py-3 pr-4 text-muted">
                          {service.min.toLocaleString("id-ID")} –{" "}
                          {service.max.toLocaleString("id-ID")}
                        </td>
                        <td className="py-3 pr-4 text-muted">{service.start}</td>
                        <td className="py-3 text-muted">{service.guarantee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
