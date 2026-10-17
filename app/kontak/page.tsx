import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontak",
  description: `Hubungi ${site.name} melalui WhatsApp, email, Telegram, atau kunjungi kantor kami di Semarang.`,
};

const contactItems = [
  { label: "WhatsApp", value: site.phone, icon: "📱" },
  { label: "Email", value: site.email, icon: "✉️" },
  { label: "Alamat", value: site.address, icon: "📍" },
  { label: "Jam operasional", value: site.operational, icon: "🕒" },
];

export default function KontakPage() {
  return (
    <>
      <section className="container-page py-16 lg:py-20">
        <SectionHeading
          align="left"
          eyebrow="Kontak"
          title={
            <>
              Mari <span className="text-gradient">bicara</span> tentang kebutuhan Anda
            </>
          }
          description="Tim kami siap membantu memilih layanan, menghitung budget, sampai menyusun strategi engagement untuk brand Anda. Chatbot NATHBot juga aktif 24 jam di kanan bawah halaman ini."
        />
      </section>

      <section className="container-page pb-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            {contactItems.map((item) => (
              <div key={item.label} className="card-surface flex gap-4 p-5">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium leading-relaxed">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="card-surface p-5">
              <p className="text-xs uppercase tracking-wider text-muted">Sosial media</p>
              <ul className="mt-3 space-y-2 text-sm">
                {site.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 rounded-xl bg-surface-2 px-4 py-2.5 transition-colors hover:text-brand"
                    >
                      <span>{social.label}</span>
                      <span className="text-muted">{social.handle}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="border-t border-border-soft bg-surface/40">
        <div className="container-page py-20">
          <SectionHeading
            eyebrow="Sebelum Bertanya"
            title="Mungkin jawabannya sudah ada di sini"
          />
          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.slice(0, 4).map((faq) => (
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
        </div>
      </section>
    </>
  );
}
