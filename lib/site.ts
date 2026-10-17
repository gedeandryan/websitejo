export const site = {
  name: "NATHSMM",
  tagline: "Social Media Marketing Panel Terpercaya",
  description:
    "NATHSMM adalah penyedia jasa social media marketing (SMM) untuk menaikkan likes, views, followers, subscribers, dan engagement di Instagram, TikTok, YouTube, Facebook, X, hingga Shopee. Proses instan, harga termurah, dan garansi refill.",
  founded: 2019,
  legal: "CV. Nathan Digital Kreasi",
  email: "support@nathsmm.id",
  phone: "+62 812-3456-7890",
  whatsapp: "6281234567890",
  address: "Jl. Pemuda No. 45, Ruko Sentra Digital Blok B-12, Semarang, Jawa Tengah 50133",
  operational: "Senin – Sabtu, 08.00 – 22.00 WIB (Support chat 24 jam)",
  socials: [
    { label: "Instagram", handle: "@nathsmm.id", href: "https://instagram.com/nathsmm.id" },
    { label: "TikTok", handle: "@nathsmm", href: "https://tiktok.com/@nathsmm" },
    { label: "YouTube", handle: "NATHSMM Official", href: "https://youtube.com/@nathsmm" },
    { label: "Telegram", handle: "@nathsmm_admin", href: "https://t.me/nathsmm_admin" },
  ],
} as const;

export const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Layanan", href: "/layanan" },
  { label: "Harga", href: "/harga" },
  { label: "Kontak", href: "/kontak" },
] as const;

export const stats = [
  { value: "1.8 Juta+", label: "Pesanan diselesaikan" },
  { value: "42.000+", label: "Pelanggan aktif" },
  { value: "180+", label: "Jenis layanan" },
  { value: "99,4%", label: "Tingkat keberhasilan" },
] as const;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
