// ============================================================
//  DATA STRUKTUR SITUS — angka, ikon, tautan, dan level.
//  Semua TEKS yang tampil ada di data/i18n.js (Inggris &
//  Indonesia). Angka "level" adalah penilaian diri (0–100),
//  silakan sesuaikan dengan kemampuanmu yang sebenarnya.
// ============================================================

export const profile = {
  firstName: 'Moh. Arief',
  lastName: 'Prasetyo',
  heroLineOne: 'MOH. ARIEF',
  heroLineTwo: 'PRASETYO',
  email: 'arifprasetyo073@gmail.com',
  photo: '/images/foto-arief.png',
};

export const softwareSkills = [
  { name: 'React JS', badge: 'Re', color: '#61dafb', level: 90 },
  { name: 'Next.js', badge: 'Nx', color: '#e8ecf1', level: 85 },
  { name: 'Laravel', badge: 'La', color: '#ff2d20', level: 85 },
  { name: 'Golang', badge: 'Go', color: '#00add8', level: 80 },
];

// Urutan mengikuti languageNames di data/i18n.js
export const languages = [{ level: 100 }, { level: 70 }];

// Urutan mengikuti hobbyLabels di data/i18n.js
export const hobbies = [
  { icon: 'code' },
  { icon: 'ar' },
  { icon: 'server' },
  { icon: 'chip' },
];

// Urutan mengikuti projects di data/i18n.js
export const projectTags = [
  ['React', 'Laravel', 'MySQL'],
  ['Next.js', 'Prisma', 'Tailwind'],
  ['Laravel', 'MySQL', 'Blade'],
  ['Laravel', 'MySQL', 'Blade'],
  ['Flutter', 'Dart', 'Android'],
];

// Galeri detail tiap proyek — urutan mengikuti projects di data/i18n.js.
// preview: gambar yang tampil di kartu. gallery: gambar di panel detail.
// link: satu tombol keluar per proyek (situs live / repositori / prototipe).
export const projectMedia = [
  {
    preview: '/images/projects/nosara-beranda.png',
    gallery: [
      '/images/projects/nosara-beranda.png',
      '/images/projects/nosara-beranda-alt.png',
      '/images/projects/nosara-produk.png',
      '/images/projects/nosara-wisata.png',
    ],
    link: 'https://www.figma.com/design/dSLwIXzmW0PWY5yZlVSuEg',
  },
  {
    preview: '/images/projects/suara-lembah.jpg',
    gallery: [
      '/images/projects/suara-lembah.jpg',
      '/images/projects/suara-pokekea.jpg',
    ],
    link: 'https://digital-budaya.vercel.app/',
  },
  {
    preview: '/images/projects/eventrun-cover.png',
    gallery: ['/images/projects/eventrun-cover.png'],
    link: 'https://github.com/MohAriefPrasetyo/EventRun',
  },
  {
    preview: '/images/projects/rentease-band.jpg',
    gallery: [
      '/images/projects/rentease-band.jpg',
      '/images/projects/rentease-tenda.jpg',
      '/images/projects/rentease-carrier.jpg',
    ],
    link: 'https://github.com/MohAriefPrasetyo/RentEase',
  },
  {
    preview: '/images/projects/acraft-band.jpg',
    gallery: [
      '/images/projects/acraft-band.jpg',
      '/images/projects/acraft-dompet.jpg',
      '/images/projects/acraft-toru.jpg',
    ],
    link: 'https://github.com/MohAriefPrasetyo/Aplikasi_Acraft',
  },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/MohAriefPrasetyo', icon: 'github' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'Email', href: 'mailto:arifprasetyo073@gmail.com', icon: 'mail' },
];
