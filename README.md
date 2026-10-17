# NATHSMM — Website Company Profile + Chatbot

Website company profile untuk **NATHSMM**, penyedia jasa Social Media Marketing (SMM):
likes, views, followers, subscribers, dan engagement untuk Instagram, TikTok, YouTube,
Facebook, X (Twitter), Shopee, Spotify, dan Telegram.

## Teknologi

- **Next.js 16** (App Router, Turbopack, typed routes)
- **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4** (konfigurasi via `@theme` di `app/globals.css`)
- **ESLint** (`eslint-config-next`)

## Struktur Project

```
app/
  api/chat/route.ts    # API endpoint chatbot (POST)
  harga/page.tsx       # Daftar harga, paket, kalkulator
  kontak/page.tsx      # Info kontak + form
  layanan/page.tsx     # Semua layanan per platform
  tentang/page.tsx     # Company profile, visi-misi, milestone
  layout.tsx           # Root layout: Navbar, Footer, Chatbot
  page.tsx             # Beranda
components/
  chat-text.tsx        # Renderer teks bot (*bold* + newline)
  chatbot.tsx          # Widget chat floating (client)
  contact-form.tsx     # Form kontak -> WhatsApp (client)
  footer.tsx
  navbar.tsx           # Navigasi responsif (client)
  price-calculator.tsx # Kalkulator harga (client)
  section-heading.tsx
lib/
  chatbot.ts           # Engine chatbot rule-based + estimasi harga
  content.ts           # Paket, FAQ, testimoni, keunggulan, milestone
  services.ts          # Data platform & layanan + harga
  site.ts              # Identitas perusahaan, kontak, navigasi
```

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produksi
npm start        # jalankan hasil build
npm run lint     # ESLint
```

## Chatbot NATHBot

Widget chat mengambang di kanan bawah setiap halaman. Balasan diproses di server
melalui `POST /api/chat` menggunakan engine **rule-based** di `lib/chatbot.ts` —
tidak memerlukan API key atau layanan eksternal.

### Kemampuan

| Intent           | Contoh input                        |
| ---------------- | ----------------------------------- |
| `greeting`       | "halo"                              |
| `price-estimate` | "harga 1000 likes instagram"        |
| `price-estimate` | "5000 views tiktok berapa?"         |
| `price-detail`   | "harga followers ig"                |
| `price-general`  | "berapa harganya?"                  |
| `how-to-order`   | "cara order"                        |
| `payment`        | "metode pembayaran"                 |
| `safety`         | "apakah aman? butuh password?"      |
| `guarantee`      | "garansi kalau followers turun"     |
| `speed`          | "berapa lama prosesnya"             |
| `reseller`       | "mau jadi reseller"                 |
| `packages`       | "ada paket promo?"                  |
| `service-list`   | "daftar layanan"                    |
| `contact`        | "chat admin"                        |
| `address`        | "alamat kantor"                     |
| `faq`            | pencocokan kata kunci ke daftar FAQ |
| `fallback`       | pertanyaan di luar cakupan          |

### Estimasi harga otomatis

Bot mendeteksi jumlah unit dari kalimat, termasuk format singkat:

- `1000` -> 1.000
- `1.5k` / `1,5k` -> 1.500
- `2rb` / `2 ribu` -> 2.000
- `1jt` / `1 juta` -> 1.000.000

Jumlah lalu dicocokkan dengan batas min/maks layanan, dan total dihitung dari
`pricePer1000`. Jika di luar batas, bot memberi peringatan dan menyesuaikan jumlah.

### Menambah / mengubah layanan

Edit `lib/services.ts`. Setiap layanan memiliki `keywords` yang dipakai bot untuk
pencocokan, jadi cukup tambahkan entri baru — chatbot, halaman Layanan, halaman Harga,
dan kalkulator akan otomatis ikut terupdate.

## Kustomisasi

- **Identitas & kontak** (nama, WhatsApp, email, alamat, sosial media): `lib/site.ts`
- **Harga & layanan**: `lib/services.ts`
- **Paket, FAQ, testimoni, milestone**: `lib/content.ts`
- **Warna & tema**: blok `@theme inline` di `app/globals.css`

> Catatan: nomor WhatsApp, email, alamat, statistik, dan testimoni saat ini masih berupa
> data contoh. Ganti nilainya di `lib/site.ts` dan `lib/content.ts` sebelum go-live.
