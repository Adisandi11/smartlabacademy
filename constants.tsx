import { Monitor, BookOpen, Award, Users, MapPin, BadgeDollarSign } from "lucide-react";
import { Course, Benefit, FaqItem } from "./types";

export const CONTACT_INFO = {
  whatsapp: "6285862639161", // Formatted for API
  displayPhone: "085862639161",
  contactName: "A Sandi",
  // Update alamat lengkap
  address: "Dusun Kliwon, RT 14 RW 03, Desa Karanganyar, Kec. Darma, Kab. Kuningan, Jawa Barat",
  gmapsUrl: "https://www.google.com/maps/search/?api=1&query=Dusun+Kliwon+RT+14+RW+03+Desa+Karanganyar+Kecamatan+Darma+Kabupaten+Kuningan+Jawa+Barat"
};

export const COURSES: Course[] = [
  {
    id: "sd",
    title: "KELAS SD",
    level: "(Pemula)",
    color: "bg-blue-600",
    features: [
      "Pengenalan Komputer",
      "Belajar Mengetik",
      "Menggambar di Paint",
      "Microsoft Word Dasar"
    ],
    price: "Rp 70.000",
    duration: "8x Pertemuan",
    isPopular: false
  },
  {
    id: "smp",
    title: "KELAS SMP",
    level: "(Terampil)",
    color: "bg-indigo-700",
    features: [
      "Microsoft Word Lanjut",
      "Microsoft Excel Dasar",
      "Microsoft PowerPoint",
      "Design Grafis Dasar"
    ],
    price: "Rp 80.000",
    duration: "8x Pertemuan",
    isPopular: true
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: "Materi Terstruktur",
    description: "Kurikulum disusun bertahap dari dasar hingga mahir sesuai jenjang sekolah.",
    icon: BookOpen
  },
  {
    title: "Praktik Langsung",
    description: "Satu siswa satu komputer. Fokus pada praktik agar cepat bisa.",
    icon: Monitor
  },
  {
    title: "Biaya Terjangkau",
    description: "Investasi pendidikan terbaik dengan biaya yang ramah di kantong orang tua.",
    icon: BadgeDollarSign
  },
  {
    title: "Dibimbing Langsung oleh Praktisi",
    description: "Dibimbing oleh instruktur yang sabar dan ahli di bidangnya.",
    icon: Users
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Apakah pemula yang belum pernah pegang komputer bisa ikut?",
    answer: "Tentu saja! Kelas SD dirancang khusus untuk pemula mulai dari pengenalan cara memegang mouse hingga mengetik."
  },
  {
    question: "Berapa lama durasi satu kali pertemuan?",
    answer: "Satu kali pertemuan berlangsung selama 60-90 menit, dengan porsi 90% praktik langsung."
  },
  {
    question: "Apakah mendapat sertifikat?",
    answer: "Ya, siswa akan mendapatkan sertifikat penyelesaian setelah menuntaskan seluruh materi dan lulus ujian akhir."
  },
  {
    question: "Bagaimana cara daftarnya?",
    answer: "Cukup klik tombol WA atau hubungi A Sandi di nomor yang tertera. Kuota terbatas!"
  }
];