import { faqs, packages, paymentMethods } from "./content";
import {
  allServices,
  findPlatformByService,
  formatRupiah,
  platforms,
  type ServiceItem,
} from "./services";
import { site, waLink } from "./site";

export type ChatRole = "user" | "bot";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  text: string;
  /** saran balasan cepat yang ditampilkan sebagai tombol */
  suggestions?: string[];
  createdAt: number;
};

export type BotReply = {
  text: string;
  suggestions: string[];
  intent: string;
};

export const defaultSuggestions = [
  "Cek harga likes Instagram",
  "Cara order",
  "Metode pembayaran",
  "Apakah aman?",
  "Chat admin",
];

export const greetingMessage = `Halo! Saya *NATHBot*, asisten otomatis ${site.name} 👋

Saya bisa bantu cek harga, hitung estimasi biaya, dan menjelaskan cara order layanan likes, views, followers, dan lainnya.

Contoh yang bisa Anda tulis:
• "harga 1000 likes instagram"
• "5000 views tiktok berapa?"
• "cara order"`;

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s.,+@/-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function includesAny(text: string, words: string[]) {
  return words.some((word) => text.includes(word));
}

/** Mengambil jumlah unit dari teks, mendukung "1k", "1.5rb", "10 ribu", "1jt" */
export function parseQuantity(text: string): number | null {
  const cleaned = text.replace(/\./g, "").replace(/,/g, ".");
  const match = cleaned.match(
    /(\d+(?:\.\d+)?)\s*(k|rb|ribu|jt|juta|m)?(?![a-z])/i,
  );
  if (!match) return null;

  const value = Number.parseFloat(match[1]);
  if (Number.isNaN(value)) return null;

  const unit = match[2]?.toLowerCase();
  if (unit === "k" || unit === "rb" || unit === "ribu") return Math.round(value * 1000);
  if (unit === "jt" || unit === "juta" || unit === "m") {
    return Math.round(value * 1000000);
  }
  return Math.round(value);
}

/** Mencari layanan paling relevan dari kalimat user */
export function matchService(text: string): ServiceItem | null {
  const normalized = normalize(text);
  let best: { service: ServiceItem; score: number } | null = null;

  for (const platform of platforms) {
    const platformScore = includesAny(normalized, [
      platform.slug.replace("-", " "),
      platform.name.toLowerCase(),
      ...platform.keywords,
    ])
      ? 3
      : 0;

    for (const service of platform.services) {
      let score = platformScore;
      for (const keyword of service.keywords) {
        if (normalized.includes(keyword)) score += 2;
      }
      if (normalized.includes(service.name.toLowerCase())) score += 5;
      if (score > (best?.score ?? 0)) best = { service, score };
    }
  }

  if (!best || best.score < 4) return null;
  return best.service;
}

export function estimatePrice(service: ServiceItem, quantity: number) {
  const clamped = Math.min(Math.max(quantity, service.min), service.max);
  const total = Math.ceil((service.pricePer1000 * clamped) / 1000);
  return { clamped, total, adjusted: clamped !== quantity };
}

function serviceDetail(service: ServiceItem) {
  const platform = findPlatformByService(service.id);
  return [
    `*${service.name}*${platform ? ` — ${platform.name}` : ""}`,
    `• Harga: ${formatRupiah(service.pricePer1000)} / 1.000`,
    `• Order: ${service.min.toLocaleString("id-ID")} – ${service.max.toLocaleString("id-ID")}`,
    `• Mulai proses: ${service.start}`,
    `• Kecepatan: ${service.speed}`,
    `• Garansi: ${service.guarantee}`,
  ].join("\n");
}

function priceAnswer(service: ServiceItem, quantity: number | null): BotReply {
  if (quantity === null) {
    return {
      intent: "price-detail",
      text: `${serviceDetail(service)}\n\nMau saya hitung totalnya? Tulis contoh: "1000 ${service.keywords[0]}".`,
      suggestions: [
        `1000 ${service.name}`,
        `5000 ${service.name}`,
        "Cara order",
        "Chat admin",
      ],
    };
  }

  const { clamped, total, adjusted } = estimatePrice(service, quantity);
  const note = adjusted
    ? `\n\n⚠️ Jumlah disesuaikan ke ${clamped.toLocaleString("id-ID")} karena batas order layanan ini ${service.min.toLocaleString("id-ID")} – ${service.max.toLocaleString("id-ID")}.`
    : "";

  return {
    intent: "price-estimate",
    text: `Estimasi biaya pesanan Anda:\n\n*${service.name}*\n• Jumlah: ${clamped.toLocaleString("id-ID")}\n• Harga satuan: ${formatRupiah(service.pricePer1000)} / 1.000\n• *Total: ${formatRupiah(total)}*\n• Mulai proses: ${service.start}\n• Garansi: ${service.guarantee}${note}\n\nHarga final tanpa biaya tambahan. Lanjut order sekarang?`,
    suggestions: ["Cara order", "Metode pembayaran", "Chat admin", "Daftar layanan"],
  };
}

const platformListText = platforms
  .map((platform) => `• ${platform.name} — ${platform.services.length} layanan`)
  .join("\n");

/** Lanjutan pencocokan intent: garansi, kecepatan, reseller, paket, layanan, harga, FAQ */
function continueBotReply(message: string): BotReply {
  if (
    includesAny(message, [
      "garansi",
      "refill",
      "drop",
      "turun",
      "berkurang",
      "refund",
      "uang kembali",
      "komplain",
      "gagal",
    ])
  ) {
    return {
      intent: "guarantee",
      text: `Kebijakan garansi ${site.name}:\n\n• Layanan bergaransi mendapat *refill gratis* 15 – 90 hari\n• Kirim ID order ke admin, refill diproses < 24 jam\n• Pesanan gagal atau tidak sesuai deskripsi → *refund 100%*\n\nMasa garansi tiap layanan tercantum di halaman Harga.`,
      suggestions: ["Cek harga", "Chat admin", "Apakah aman?"],
    };
  }

  if (
    includesAny(message, [
      "berapa lama",
      "kecepatan",
      "cepat",
      "instan",
      "proses",
      "durasi",
      "estimasi waktu",
    ])
  ) {
    return {
      intent: "speed",
      text: `Kecepatan proses kami:\n\n• Likes & views: instan sampai 15 menit\n• Followers: 0 – 30 menit, drip-feed harian agar natural\n• YouTube views & jam tayang: 1 – 3 jam untuk mulai berjalan\n\nPanel aktif 24/7, order tengah malam pun tetap diproses otomatis.`,
      suggestions: ["Cek harga", "Cara order", "Garansi"],
    };
  }

  if (includesAny(message, ["reseller", "api", "agen", "distributor", "kerja sama", "partner"])) {
    return {
      intent: "reseller",
      text: `Program Reseller ${site.name}:\n\n• Deposit mulai Rp 300.000 → harga hingga 25% lebih murah\n• Akses API (JSON) untuk website Anda sendiri\n• Dashboard laporan order & saldo real-time\n• Support prioritas via Telegram\n\nHubungi admin untuk aktivasi akun reseller.`,
      suggestions: ["Chat admin", "Metode pembayaran", "Cek harga"],
    };
  }

  if (includesAny(message, ["paket", "bundle", "promo", "diskon", "hemat"])) {
    return {
      intent: "packages",
      text: `Paket hemat kami:\n\n${packages
        .map((item) => `• *${item.name}* — ${formatRupiah(item.price)}\n  ${item.tagline}`)
        .join("\n")}\n\nDetail lengkap ada di halaman Harga. Ambil 2 paket sekaligus dapat diskon tambahan 10%.`,
      suggestions: ["Cek harga", "Cara order", "Chat admin"],
    };
  }

  const service = matchService(message);

  if (
    !service &&
    includesAny(message, ["layanan", "platform", "jasa", "produk", "list", "daftar"])
  ) {
    return {
      intent: "service-list",
      text: `${site.name} melayani ${allServices.length}+ jenis layanan di platform berikut:\n\n${platformListText}\n\nSebutkan platform dan layanannya, contoh: "harga views tiktok".`,
      suggestions: [
        "Harga views TikTok",
        "Harga followers Instagram",
        "Harga subscriber YouTube",
        "Cara order",
      ],
    };
  }

  if (service) {
    const askingPrice = includesAny(message, [
      "harga",
      "berapa",
      "biaya",
      "price",
      "tarif",
      "cek",
    ]);
    const quantity = parseQuantity(message);
    if (askingPrice || quantity !== null) {
      return priceAnswer(service, quantity);
    }
    return {
      intent: "service-detail",
      text: serviceDetail(service),
      suggestions: [`1000 ${service.name}`, "Cara order", "Garansi", "Chat admin"],
    };
  }

  if (includesAny(message, ["harga", "price", "biaya", "tarif", "murah", "berapa"])) {
    return {
      intent: "price-general",
      text: `Beberapa harga terlaris kami (per 1.000):\n\n• TikTok Views — ${formatRupiah(2500)}\n• Instagram Reels Views — ${formatRupiah(6000)}\n• Instagram Likes — ${formatRupiah(12000)}\n• TikTok Followers — ${formatRupiah(48000)}\n• Instagram Followers Indonesia — ${formatRupiah(55000)}\n• YouTube Subscribers — ${formatRupiah(165000)}\n\nSebutkan layanan + jumlahnya agar saya hitung totalnya, contoh: "2000 likes instagram".`,
      suggestions: [
        "2000 likes Instagram",
        "10000 views TikTok",
        "1000 followers TikTok",
        "Cara order",
      ],
    };
  }

  const faqHit = faqs.find((faq) => {
    const words = normalize(faq.question)
      .split(" ")
      .filter((word) => word.length > 4);
    return words.filter((word) => message.includes(word)).length >= 2;
  });
  if (faqHit) {
    return {
      intent: "faq",
      text: `*${faqHit.question}*\n${faqHit.answer}`,
      suggestions: defaultSuggestions,
    };
  }

  return {
    intent: "fallback",
    text: `Maaf, saya belum menemukan jawaban yang tepat 🤔\n\nSaya paling paham soal: harga layanan, estimasi biaya, cara order, pembayaran, keamanan akun, dan garansi refill.\n\nButuh bantuan manusia? Admin kami siap di WhatsApp ${site.phone}.`,
    suggestions: defaultSuggestions,
  };
}

export function getBotReply(rawMessage: string): BotReply {

  const message = normalize(rawMessage);

  if (!message) {
    return {
      intent: "empty",
      text: 'Silakan tulis pertanyaan Anda, misalnya "harga 1000 followers instagram".',
      suggestions: defaultSuggestions,
    };
  }

  if (
    includesAny(message, ["halo", "hai", "hallo", "assalam", "pagi", "siang", "malam", "sore"]) &&
    message.length <= 25
  ) {
    return {
      intent: "greeting",
      text: `Halo! Selamat datang di ${site.name} 🎉 Ada yang bisa saya bantu soal layanan likes, views, followers, atau subscribers?`,
      suggestions: defaultSuggestions,
    };
  }

  if (includesAny(message, ["terima kasih", "makasih", "thanks", "thx", "sip"])) {
    return {
      intent: "thanks",
      text: `Sama-sama! 🙏 Saya online 24 jam kalau butuh bantuan lagi. Selamat berkembang bersama ${site.name}!`,
      suggestions: defaultSuggestions,
    };
  }

  if (
    includesAny(message, [
      "admin",
      "customer service",
      "manusia",
      "whatsapp",
      "telepon",
      "hubungi",
      "kontak",
      "email",
    ])
  ) {
    return {
      intent: "contact",
      text: `Silakan hubungi tim kami:\n\n• WhatsApp: ${site.phone}\n• Email: ${site.email}\n• Telegram: @nathsmm_admin\n• Jam operasional: ${site.operational}\n\nKlik tombol *Chat Admin WhatsApp* di bawah untuk langsung tersambung.`,
      suggestions: ["Metode pembayaran", "Cek harga", "Alamat kantor", "Cara order"],
    };
  }

  if (includesAny(message, ["alamat", "lokasi", "kantor", "dimana", "di mana"])) {
    return {
      intent: "address",
      text: `Kantor ${site.name} (${site.legal}):\n${site.address}\n\nJam operasional: ${site.operational}`,
      suggestions: ["Chat admin", "Cek harga", "Cara order"],
    };
  }

  if (
    includesAny(message, [
      "bayar",
      "pembayaran",
      "transfer",
      "qris",
      "dana",
      "gopay",
      "ovo",
      "shopeepay",
      "rekening",
    ])
  ) {
    return {
      intent: "payment",
      text: `Metode pembayaran yang tersedia:\n\n${paymentMethods
        .map((method) => `• ${method}`)
        .join("\n")}\n\nSetelah bayar, kirim bukti transfer ke admin. Pesanan masuk antrean otomatis dalam 1 – 5 menit.`,
      suggestions: ["Cara order", "Cek harga", "Chat admin"],
    };
  }

  if (
    includesAny(message, [
      "cara order",
      "cara beli",
      "cara pesan",
      "order",
      "pesan",
      "beli",
      "checkout",
    ])
  ) {
    return {
      intent: "how-to-order",
      text: `Order di ${site.name} cuma 4 langkah:\n\n1️⃣ Pilih layanan (contoh: TikTok Views)\n2️⃣ Kirim link postingan / username — *tanpa password*\n3️⃣ Bayar via QRIS, e-wallet, atau transfer bank\n4️⃣ Pesanan diproses otomatis, rata-rata mulai 0 – 15 menit\n\nMau saya bantu hitung estimasi biayanya dulu?`,
      suggestions: ["Cek harga likes Instagram", "Metode pembayaran", "Chat admin"],
    };
  }

  if (
    includesAny(message, [
      "aman",
      "password",
      "kata sandi",
      "banned",
      "resiko",
      "risiko",
      "shadowban",
      "otp",
      "privasi",
    ])
  ) {
    return {
      intent: "safety",
      text: `Aman 100% ✅\n\n• Kami *tidak pernah* meminta password, PIN, atau OTP\n• Hanya butuh link postingan atau username publik\n• Traffic dikirim bertahap agar terlihat natural\n• Data pelanggan tidak dibagikan ke pihak ketiga\n\nSelama 6 tahun beroperasi, belum ada laporan akun banned karena layanan kami.`,
      suggestions: ["Garansi", "Cara order", "Cek harga"],
    };
  }

  return continueBotReply(message);
}

export const adminWaLink = waLink(

  `Halo ${site.name}, saya ingin order layanan sosial media. Mohon informasinya.`,
);
