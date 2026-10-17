export const packages = [
  {
    name: "Starter",
    price: 49000,
    tagline: "Untuk akun baru yang butuh kesan pertama",
    highlight: false,
    items: [
      "1.000 followers Instagram / TikTok",
      "2.000 likes dibagi 4 postingan",
      "5.000 views reels",
      "Garansi refill 30 hari",
      "Support chat jam kerja",
    ],
  },
  {
    name: "Bisnis",
    price: 189000,
    tagline: "Paling populer untuk UMKM & online shop",
    highlight: true,
    items: [
      "5.000 followers Indonesia (real & aktif)",
      "10.000 likes dibagi 10 postingan",
      "50.000 views reels / TikTok",
      "100 komentar custom sesuai brief",
      "Garansi refill 60 hari",
      "Prioritas antrean + admin dedicated",
    ],
  },
  {
    name: "Agency",
    price: 749000,
    tagline: "Untuk agensi, artis, dan kampanye brand",
    highlight: false,
    items: [
      "20.000 followers multi-platform",
      "50.000 likes fleksibel",
      "500.000 views (IG / TikTok / YouTube)",
      "Jam tayang YouTube 1.000 jam",
      "Laporan performa mingguan (PDF)",
      "Garansi refill 90 hari + API reseller",
    ],
  },
] as const;

export const paymentMethods = [
  "QRIS (semua e-wallet)",
  "DANA",
  "GoPay",
  "OVO",
  "ShopeePay",
  "Transfer BCA / BRI / Mandiri / BNI",
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Pilih layanan",
    description:
      "Tentukan platform dan jenis layanan — likes, views, followers, subscribers, atau komentar.",
  },
  {
    step: "02",
    title: "Kirim link target",
    description:
      "Cukup kirim link postingan atau username. Tidak perlu password, akun tetap aman.",
  },
  {
    step: "03",
    title: "Bayar & konfirmasi",
    description:
      "Bayar via QRIS, e-wallet, atau transfer bank. Konfirmasi otomatis lewat chatbot atau admin.",
  },
  {
    step: "04",
    title: "Pesanan diproses",
    description:
      "Sistem panel memproses order rata-rata dalam 0 – 15 menit dan mengirim laporan saat selesai.",
  },
] as const;

export const advantages = [
  {
    title: "Proses Instan 24/7",
    description:
      "Panel otomatis kami berjalan nonstop, mayoritas pesanan mulai diproses kurang dari 15 menit.",
    icon: "⚡",
  },
  {
    title: "Harga Termurah & Transparan",
    description:
      "Harga per 1.000 unit tanpa biaya tersembunyi. Tersedia harga khusus reseller dan pembelian volume.",
    icon: "💸",
  },
  {
    title: "Aman Tanpa Password",
    description:
      "Kami hanya butuh link atau username publik. Data pelanggan tidak pernah dibagikan ke pihak ketiga.",
    icon: "🔒",
  },
  {
    title: "Garansi Refill",
    description:
      "Jika terjadi penurunan (drop) dalam masa garansi, kami isi ulang gratis tanpa syarat berbelit.",
    icon: "🔁",
  },
  {
    title: "Support Manusia + Chatbot",
    description:
      "Chatbot NATHBot menjawab instan 24 jam, admin manusia siap membantu di jam operasional.",
    icon: "💬",
  },
  {
    title: "API untuk Reseller",
    description:
      "Integrasikan panel NATHSMM ke website Anda sendiri dengan dokumentasi API dan harga khusus.",
    icon: "🧩",
  },
] as const;

export const testimonials = [
  {
    name: "Rani Puspita",
    role: "Owner @rani.thriftstore",
    quote:
      "Baru 3 hari pakai paket Bisnis, followers naik 5.000 dan penjualan Shopee saya ikut naik hampir dua kali lipat. Adminnya fast respon banget.",
  },
  {
    name: "Dimas Prayoga",
    role: "Content Creator TikTok",
    quote:
      "Views TikTok masuk kurang dari 5 menit dan videonya benar-benar tembus FYP. Harganya paling masuk dibanding panel lain yang pernah saya coba.",
  },
  {
    name: "Aldo Setiawan",
    role: "Digital Agency, Surabaya",
    quote:
      "Kami pakai API NATHSMM untuk 12 klien. Laporan mingguannya rapi dan garansi refill-nya betul-betul dijalankan.",
  },
  {
    name: "Nabila Zahra",
    role: "Founder Kursus Online",
    quote:
      "Jam tayang YouTube 4.000 jam selesai 16 hari dan channel saya lolos monetisasi. Puas banget, pasti order lagi.",
  },
] as const;

export const faqs = [
  {
    question: "Apakah akun saya aman dan butuh password?",
    answer:
      "Aman. NATHSMM tidak pernah meminta password, PIN, atau kode OTP. Kami hanya membutuhkan link postingan atau username publik agar sistem bisa mengirim order.",
  },
  {
    question: "Berapa lama pesanan diproses?",
    answer:
      "Rata-rata 0 – 15 menit setelah pembayaran terkonfirmasi. Layanan tertentu seperti YouTube views dan jam tayang membutuhkan 1 – 3 jam untuk mulai berjalan.",
  },
  {
    question: "Bagaimana jika followers atau likes turun?",
    answer:
      "Layanan bergaransi mendapat refill gratis selama masa garansi (15 – 90 hari tergantung layanan). Cukup kirim ulang ID order Anda ke admin atau chatbot.",
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer:
      "QRIS (semua e-wallet), DANA, GoPay, OVO, ShopeePay, serta transfer bank BCA, BRI, Mandiri, dan BNI.",
  },
  {
    question: "Apakah bisa jadi reseller?",
    answer:
      "Bisa. Kami menyediakan harga khusus reseller mulai dari deposit Rp 300.000 beserta akses API agar Anda dapat menjual ulang lewat website sendiri.",
  },
  {
    question: "Apakah menerima pembelian dalam jumlah besar?",
    answer:
      "Tentu. Untuk order di atas 500.000 unit atau kampanye brand, hubungi admin untuk mendapatkan penawaran dan skema pembayaran khusus.",
  },
] as const;

export const milestones = [
  {
    year: "2019",
    title: "NATHSMM lahir di Semarang",
    description:
      "Berawal dari jasa followers Instagram lewat WhatsApp dengan 40 pelanggan pertama.",
  },
  {
    year: "2021",
    title: "Panel otomatis pertama",
    description:
      "Meluncurkan panel order otomatis 24 jam dan menambah layanan TikTok serta YouTube.",
  },
  {
    year: "2023",
    title: "1 juta pesanan",
    description:
      "Menembus 1 juta pesanan selesai dan membuka program reseller berbasis API.",
  },
  {
    year: "2026",
    title: "Chatbot NATHBot & 180+ layanan",
    description:
      "Menghadirkan asisten chat 24 jam untuk estimasi harga instan dan bantuan order tanpa menunggu admin.",
  },
] as const;

export const values = [
  {
    title: "Transparan",
    description:
      "Semua harga, kecepatan, dan garansi ditampilkan terbuka sebelum Anda membayar.",
  },
  {
    title: "Responsif",
    description:
      "Chatbot menjawab dalam hitungan detik, admin manusia rata-rata membalas dalam 5 menit.",
  },
  {
    title: "Bertanggung Jawab",
    description:
      "Order gagal atau tidak sesuai deskripsi kami refund 100% ke saldo atau rekening Anda.",
  },
] as const;
