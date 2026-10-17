export type ServiceItem = {
  /** id unik, dipakai chatbot untuk pencarian */
  id: string;
  name: string;
  /** harga per 1.000 unit dalam Rupiah */
  pricePer1000: number;
  min: number;
  max: number;
  start: string;
  speed: string;
  guarantee: string;
  keywords: string[];
};

export type Platform = {
  slug: string;
  name: string;
  icon: string;
  color: string;
  summary: string;
  keywords: string[];
  services: ServiceItem[];
};

export const platforms: Platform[] = [
  {
    slug: "instagram",
    name: "Instagram",
    icon: "IG",
    color: "#ff4fa3",
    summary:
      "Naikkan kredibilitas akun bisnis Instagram dengan followers real, likes cepat, views reels, dan komentar custom.",
    keywords: ["instagram", "ig", "insta", "reels", "story"],
    services: [
      {
        id: "ig-followers",
        name: "Instagram Followers Indonesia",
        pricePer1000: 55000,
        min: 100,
        max: 500000,
        start: "0 – 15 menit",
        speed: "5.000 / hari",
        guarantee: "Refill 60 hari",
        keywords: ["followers", "follower", "pengikut"],
      },
      {
        id: "ig-likes",
        name: "Instagram Likes Real",
        pricePer1000: 12000,
        min: 50,
        max: 200000,
        start: "Instan",
        speed: "20.000 / hari",
        guarantee: "Refill 30 hari",
        keywords: ["likes", "like", "suka"],
      },
      {
        id: "ig-views-reels",
        name: "Instagram Reels Views",
        pricePer1000: 6000,
        min: 100,
        max: 5000000,
        start: "Instan",
        speed: "100.000 / hari",
        guarantee: "Non-drop",
        keywords: ["views", "view", "reels", "tayangan", "viewers"],
      },
      {
        id: "ig-story-views",
        name: "Instagram Story Views",
        pricePer1000: 9000,
        min: 100,
        max: 100000,
        start: "0 – 10 menit",
        speed: "50.000 / hari",
        guarantee: "Tanpa garansi",
        keywords: ["story", "stories", "views"],
      },
      {
        id: "ig-comments",
        name: "Instagram Komentar Custom",
        pricePer1000: 180000,
        min: 10,
        max: 5000,
        start: "0 – 30 menit",
        speed: "500 / hari",
        guarantee: "Refill 15 hari",
        keywords: ["komentar", "comment", "custom"],
      },
      {
        id: "ig-saves",
        name: "Instagram Saves + Share",
        pricePer1000: 8000,
        min: 100,
        max: 100000,
        start: "Instan",
        speed: "30.000 / hari",
        guarantee: "Non-drop",
        keywords: ["save", "saves", "share", "simpan"],
      },
    ],
  },
  {
    slug: "tiktok",
    name: "TikTok",
    icon: "TT",
    color: "#22d3ee",
    summary:
      "Dorong video masuk FYP dengan views cepat, likes, followers, serta live stream views untuk syarat monetisasi.",
    keywords: ["tiktok", "tt", "fyp"],
    services: [
      {
        id: "tt-views",
        name: "TikTok Video Views",
        pricePer1000: 2500,
        min: 100,
        max: 10000000,
        start: "Instan",
        speed: "500.000 / hari",
        guarantee: "Non-drop",
        keywords: ["views", "view", "viewers", "tayangan"],
      },
      {
        id: "tt-likes",
        name: "TikTok Likes",
        pricePer1000: 9000,
        min: 50,
        max: 300000,
        start: "0 – 5 menit",
        speed: "50.000 / hari",
        guarantee: "Refill 30 hari",
        keywords: ["likes", "like", "suka"],
      },
      {
        id: "tt-followers",
        name: "TikTok Followers",
        pricePer1000: 48000,
        min: 100,
        max: 500000,
        start: "0 – 20 menit",
        speed: "10.000 / hari",
        guarantee: "Refill 45 hari",
        keywords: ["followers", "follower", "pengikut"],
      },
      {
        id: "tt-live-views",
        name: "TikTok Live Stream Views (60 menit)",
        pricePer1000: 35000,
        min: 100,
        max: 20000,
        start: "0 – 10 menit",
        speed: "Sesuai durasi live",
        guarantee: "Tanpa garansi",
        keywords: ["live", "livestream", "siaran"],
      },
      {
        id: "tt-shares",
        name: "TikTok Shares",
        pricePer1000: 4000,
        min: 100,
        max: 500000,
        start: "Instan",
        speed: "100.000 / hari",
        guarantee: "Non-drop",
        keywords: ["share", "shares", "bagikan"],
      },
    ],
  },
  {
    slug: "youtube",
    name: "YouTube",
    icon: "YT",
    color: "#ff5252",
    summary:
      "Bangun channel dari nol: views retensi tinggi, subscribers stabil, jam tayang, dan likes untuk syarat monetisasi.",
    keywords: ["youtube", "yt", "channel", "shorts"],
    services: [
      {
        id: "yt-views",
        name: "YouTube Views Retensi Tinggi",
        pricePer1000: 22000,
        min: 500,
        max: 1000000,
        start: "30 – 90 menit",
        speed: "20.000 / hari",
        guarantee: "Refill 30 hari",
        keywords: ["views", "view", "viewers", "tayangan"],
      },
      {
        id: "yt-subscribers",
        name: "YouTube Subscribers",
        pricePer1000: 165000,
        min: 50,
        max: 50000,
        start: "1 – 3 jam",
        speed: "1.000 / hari",
        guarantee: "Refill 90 hari",
        keywords: ["subscriber", "subscribers", "subs"],
      },
      {
        id: "yt-watchtime",
        name: "YouTube Jam Tayang 4.000 Jam (paket)",
        pricePer1000: 1850000,
        min: 1000,
        max: 1000,
        start: "1 – 3 hari",
        speed: "Selesai < 20 hari",
        guarantee: "Garansi sampai selesai",
        keywords: ["jam tayang", "watchtime", "watch time", "monetisasi"],
      },
      {
        id: "yt-likes",
        name: "YouTube Likes",
        pricePer1000: 28000,
        min: 50,
        max: 100000,
        start: "0 – 30 menit",
        speed: "5.000 / hari",
        guarantee: "Refill 30 hari",
        keywords: ["likes", "like", "suka"],
      },
      {
        id: "yt-shorts-views",
        name: "YouTube Shorts Views",
        pricePer1000: 14000,
        min: 500,
        max: 2000000,
        start: "0 – 60 menit",
        speed: "50.000 / hari",
        guarantee: "Non-drop",
        keywords: ["shorts", "views", "viewers"],
      },
    ],
  },
  {
    slug: "facebook",
    name: "Facebook",
    icon: "FB",
    color: "#4c8bf5",
    summary:
      "Perkuat halaman bisnis dengan followers page, likes postingan, views reels, dan anggota grup aktif.",
    keywords: ["facebook", "fb", "fanpage", "page"],
    services: [
      {
        id: "fb-page-likes",
        name: "Facebook Page Followers / Likes",
        pricePer1000: 62000,
        min: 100,
        max: 200000,
        start: "0 – 60 menit",
        speed: "5.000 / hari",
        guarantee: "Refill 30 hari",
        keywords: ["page", "followers", "likes", "halaman"],
      },
      {
        id: "fb-post-likes",
        name: "Facebook Likes Postingan",
        pricePer1000: 16000,
        min: 50,
        max: 100000,
        start: "Instan",
        speed: "20.000 / hari",
        guarantee: "Refill 15 hari",
        keywords: ["likes", "like", "postingan", "post"],
      },
      {
        id: "fb-reels-views",
        name: "Facebook Reels / Video Views",
        pricePer1000: 5000,
        min: 500,
        max: 2000000,
        start: "Instan",
        speed: "200.000 / hari",
        guarantee: "Non-drop",
        keywords: ["views", "viewers", "reels", "video"],
      },
      {
        id: "fb-group-members",
        name: "Facebook Group Members",
        pricePer1000: 95000,
        min: 100,
        max: 50000,
        start: "1 – 6 jam",
        speed: "3.000 / hari",
        guarantee: "Tanpa garansi",
        keywords: ["grup", "group", "member", "anggota"],
      },
    ],
  },
  {
    slug: "x-twitter",
    name: "X (Twitter)",
    icon: "X",
    color: "#cbd5f5",
    summary:
      "Tingkatkan otoritas akun X dengan followers aktif, likes, retweet, dan impresi tweet.",
    keywords: ["twitter", "x", "tweet", "retweet"],
    services: [
      {
        id: "x-followers",
        name: "X Followers",
        pricePer1000: 78000,
        min: 100,
        max: 100000,
        start: "0 – 60 menit",
        speed: "3.000 / hari",
        guarantee: "Refill 30 hari",
        keywords: ["followers", "follower", "pengikut"],
      },
      {
        id: "x-likes",
        name: "X Likes",
        pricePer1000: 21000,
        min: 50,
        max: 50000,
        start: "0 – 15 menit",
        speed: "10.000 / hari",
        guarantee: "Refill 15 hari",
        keywords: ["likes", "like", "suka"],
      },
      {
        id: "x-views",
        name: "X Tweet Views / Impresi",
        pricePer1000: 3500,
        min: 500,
        max: 5000000,
        start: "Instan",
        speed: "300.000 / hari",
        guarantee: "Non-drop",
        keywords: ["views", "viewers", "impresi", "impression"],
      },
      {
        id: "x-retweet",
        name: "X Retweet",
        pricePer1000: 26000,
        min: 50,
        max: 50000,
        start: "0 – 20 menit",
        speed: "5.000 / hari",
        guarantee: "Refill 15 hari",
        keywords: ["retweet", "repost", "share"],
      },
    ],
  },
  {
    slug: "marketplace",
    name: "Marketplace & Lainnya",
    icon: "MP",
    color: "#ffb457",
    summary:
      "Layanan pendukung toko online dan platform lain: followers Shopee, favorit produk, hingga Spotify & Telegram.",
    keywords: ["shopee", "tokopedia", "marketplace", "spotify", "telegram", "toko"],
    services: [
      {
        id: "shopee-followers",
        name: "Shopee Followers Toko",
        pricePer1000: 85000,
        min: 100,
        max: 50000,
        start: "1 – 6 jam",
        speed: "2.000 / hari",
        guarantee: "Refill 30 hari",
        keywords: ["shopee", "followers", "toko"],
      },
      {
        id: "shopee-favorit",
        name: "Shopee Favorit Produk",
        pricePer1000: 90000,
        min: 100,
        max: 20000,
        start: "1 – 6 jam",
        speed: "2.000 / hari",
        guarantee: "Tanpa garansi",
        keywords: ["shopee", "favorit", "produk", "wishlist"],
      },
      {
        id: "spotify-plays",
        name: "Spotify Plays",
        pricePer1000: 18000,
        min: 1000,
        max: 1000000,
        start: "0 – 3 jam",
        speed: "50.000 / hari",
        guarantee: "Non-drop",
        keywords: ["spotify", "plays", "streams", "lagu"],
      },
      {
        id: "telegram-members",
        name: "Telegram Channel Members",
        pricePer1000: 42000,
        min: 100,
        max: 200000,
        start: "0 – 30 menit",
        speed: "10.000 / hari",
        guarantee: "Refill 30 hari",
        keywords: ["telegram", "member", "channel", "grup"],
      },
    ],
  },
];

export const allServices: ServiceItem[] = platforms.flatMap(
  (platform) => platform.services,
);

export function findPlatformByService(serviceId: string) {
  return platforms.find((platform) =>
    platform.services.some((service) => service.id === serviceId),
  );
}

export function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}
