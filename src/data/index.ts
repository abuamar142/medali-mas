import type {
  GalleryItem,
  Category,
  ProcessStep,
  Achievement,
  BusinessInfo,
  HeroContent,
  AboutContent,
} from "@/types";

// Gallery Categories
export const categories: Category[] = [
  {
    id: "all",
    name: "Semua Produk",
    description: "Seluruh koleksi produk tenun ikat",
  },
  {
    id: "fabric",
    name: "Kain Tenun",
    description: "Kain tenun ikat berkualitas tinggi",
  },
  {
    id: "fashion",
    name: "Fashion",
    description: "Produk fashion dari tenun ikat",
  },
  {
    id: "home",
    name: "Dekorasi Rumah",
    description: "Aksesoris rumah berbahan tenun",
  },
  {
    id: "partnership",
    name: "Produk Kemitraan",
    description: "Hasil kolaborasi dengan UKM lain",
  },
];

// Gallery Items
export const galleryItems: GalleryItem[] = [
  {
    id: "kain-misris",
    title: "Kain Tenun Misris",
    description: "Kain tenun berkualitas tinggi dengan motif tradisional Kediri",
    category: "fabric",
    image: "https://i.imgur.com/2gMWgmc.jpeg",
    featured: true,
  },
  {
    id: "semi-sutra-premium",
    title: "Semi Sutra Premium",
    description: "Kain sutra dengan motif elegan untuk acara formal",
    category: "fabric",
    image: "",
  },
  {
    id: "shal-tenun-elegant",
    title: "Shal Tenun Elegant",
    description: "Shal dengan sentuhan modern namun tetap mempertahankan nilai tradisional",
    category: "fashion",
    image: "",
  },
  {
    id: "sarung-tenun-tradisional",
    title: "Sarung Tenun Tradisional",
    description: "Sarung dengan motif klasik yang telah diwariskan turun temurun",
    category: "fashion",
    image: "",
  },
  {
    id: "tas-souvenir-unik",
    title: "Tas Souvenir Unik",
    description: "Tas dengan desain khas Kediri sebagai oleh-oleh istimewa",
    category: "fashion",
    image: "",
  },
  {
    id: "penutup-tisu-cantik",
    title: "Penutup Tisu Cantik",
    description: "Dekorasi rumah yang fungsional dengan sentuhan tenun tradisional",
    category: "home",
    image: "",
  },
  {
    id: "penutup-galon-stylish",
    title: "Penutup Galon Stylish",
    description: "Pelindung galon yang estetik dan ramah lingkungan",
    category: "home",
    image: "",
  },
  {
    id: "sepatu-tenun-ikat",
    title: "Sepatu Tenun Ikat",
    description: "Hasil kolaborasi dengan UKM Den Yu untuk produk footwear unik",
    category: "partnership",
    image: "",
  },
  {
    id: "tas-premium-gakris",
    title: "Tas Premium Gakris",
    description: "Kolaborasi dengan UKM Gakris menghasilkan tas berkualitas premium",
    category: "partnership",
    image: "",
  },
  {
    id: "motif-tradisional",
    title: "Motif Tradisional",
    description: "Ragam motif khas Kediri yang telah dipertahankan sejak 1989",
    category: "fabric",
    image: "",
  },
  {
    id: "proses-pewarnaan",
    title: "Proses Pewarnaan",
    description: "Teknik pewarnaan tradisional menggunakan bahan-bahan alami",
    category: "fabric",
    image: "",
  },
  {
    id: "kain-sutra-import",
    title: "Kain Sutra Import",
    description: "Kain sutra berkualitas tinggi untuk kebutuhan premium",
    category: "fabric",
    image: "",
  },
];

// Process Steps
export const processSteps: ProcessStep[] = [
  {
    id: "persiapan-benang",
    title: "Persiapan Benang",
    description: "Pemilihan dan persiapan benang berkualitas tinggi dengan standar terbaik",
    order: 1,
  },
  {
    id: "ikat-celup",
    title: "Ikat & Celup",
    description: "Proses pengikatan dan pencelupan dengan teknik tradisional yang telah diwariskan",
    order: 2,
  },
  {
    id: "penenunan",
    title: "Penenunan",
    description:
      "Proses menenun menggunakan alat tenun bukan mesin (ATBM) oleh pengrajin berpengalaman",
    order: 3,
  },
  {
    id: "finishing",
    title: "Finishing",
    description: "Penyelesaian akhir dan quality control untuk memastikan kualitas produk terbaik",
    order: 4,
  },
];

// Achievements
export const achievements: Achievement[] = [
  {
    id: "experience",
    title: "Tahun Pengalaman",
    value: "35+",
    description: "Berpengalaman sejak 1989 dalam industri tenun ikat tradisional",
  },
  {
    id: "workers",
    title: "Tenaga Kerja",
    value: "60+",
    description: "Memberdayakan puluhan pengrajin lokal dengan keterampilan tinggi",
  },
  {
    id: "revenue",
    title: "Omset per Bulan",
    value: "100M+",
    description: "Pencapaian omset bulanan yang konsisten dan terus berkembang",
  },
  {
    id: "products",
    title: "Varian Produk",
    value: "50+",
    description: "Beragam produk tenun untuk berbagai kebutuhan dan segmen pasar",
  },
];

// Business Information
export const businessInfo: BusinessInfo = {
  name: "UD. Medali Mas (Medali Emas)",
  owner: "Bapak Munawar",
  foundedDate: "27 Februari 1989",
  description:
    "UMKM unggulan tenun ikat tradisional dari Kediri yang telah berpengalaman lebih dari 35 tahun. Kami berkomitmen melestarikan warisan budaya sambil berinovasi untuk pasar modern.",
  phone: "+62 857-3671-2477",
  whatsapp: "6285736712477",
  instagram: "tenunmedalimasofficial",
  addresses: {
    main: {
      address:
        "Jl. KH. Agus Salim Gg. VIII No.55B, Bandar Kidul, Kec. Mojoroto, Kota Kediri, Jawa Timur 64118",
      mapUrl: "https://maps.app.goo.gl/PFBhRY6yppepX7wV8",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.6081548695656!2d111.99778907622941!3d-7.831229992189825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7857002c9076af%3A0x44d7c36146020b31!2sKerajinan%20Tenun%20Ikat%20Medali%20Mas!5e0!3m2!1sen!2sid!4v1754128473528!5m2!1sen!2sid",
    },
    branch: {
      address: "Gg. IX No.51, Banjarmlati, Kec. Mojoroto, Kabupaten Kediri, Jawa Timur 64118",
      mapUrl: "https://maps.app.goo.gl/krhPPoRnkYh9xNEC9",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941.3708950686339!2d111.99936658219512!3d-7.8315862766091975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e785767d7a10ca7%3A0x3c4a9ccf906bc239!2sTENUN%20IKAT%20ATBM%20MEDALI%20MAS%202!5e0!3m2!1sen!2sid!4v1754128528381!5m2!1sen!2sid",
    },
  },
};

// Hero Section Content
export const heroContent: HeroContent = {
  title: {
    main: "Tenun Ikat",
    highlight: "Medali Mas",
  },
  subtitle: "UMKM Unggulan Kediri Sejak 1989",
  description:
    "Melestarikan warisan budaya tenun ikat tradisional dengan kualitas terbaik. Lebih dari 35 tahun pengalaman, omset 100M+/bulan, melayani seluruh Indonesia.",
  cta: {
    primary: "Lihat Produk",
    secondary: "Hubungi Kami",
  },
  stats: [
    { label: "Tahun Pengalaman", value: "35+" },
    { label: "Tenaga Kerja", value: "60+" },
    { label: "Omset/Bulan", value: "100M+" },
  ],
};

// About Section Content
export const aboutContent: AboutContent = {
  title: "Tentang Medali Mas",
  subtitle: "Warisan Budaya yang Terus Dilestarikan",
  description:
    "UD. Medali Mas adalah UMKM unggulan yang bergerak di bidang tenun ikat tradisional. Didirikan pada 27 Februari 1989 oleh Bapak Munawar, kami telah menjadi bagian penting dalam melestarikan warisan budaya tenun ikat di Kediri.",
  highlights: [
    "Pengalaman lebih dari 35 tahun dalam industri tenun ikat",
    "Memberdayakan 60+ tenaga kerja lokal dengan keterampilan tinggi",
    "Omset konsisten 100M+ rupiah per bulan",
    "Melayani pasar lokal dan nasional",
    "Berkomitmen pada kualitas dan inovasi produk",
  ],
};
