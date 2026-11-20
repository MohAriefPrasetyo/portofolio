// ============================================================
//  SEMUA KONTEN SITUS ADA DI FILE INI — edit di sini saja.
//  Angka "level" skill & bahasa adalah penilaian diri (0–100),
//  silakan sesuaikan dengan kemampuanmu yang sebenarnya.
// ============================================================

export const profile = {
  firstName: 'Moh. Arief',
  lastName: 'Prasetyo',
  heroLineOne: 'MOH. ARIEF',
  heroLineTwo: 'PRASETYO',
  role: 'Fullstack Developer',
  tagline: 'Creative Developer | AR Enthusiast',
  email: 'f55124012@untad.ac.id',
  photo: '/images/foto-arief.png',
  location: 'Palu, Central Sulawesi',
  locationSub: 'Universitas Tadulako, Indonesia',
  about: [
    'Fullstack developer working across web, mobile and IoT. My main stack is React JS on the front end, with Golang and Laravel on the back end — I enjoy taking a product from a rough idea all the way to something people can actually use.',
    'Currently I am building Nosara, a village tourism and local-product platform for Donggala, Central Sulawesi, as a P2MW Bisnis Digital project: self-guided tourism with QR points and an AI trip arranger, connected to a local-product marketplace shipped through a quality-control hub in Palu. I am also exploring augmented reality and DevOps.',
  ],
};

export const softwareSkills = [
  { name: 'React JS', badge: 'Re', color: '#61dafb', level: 90 },
  { name: 'Next.js', badge: 'Nx', color: '#e8ecf1', level: 85 },
  { name: 'Laravel', badge: 'La', color: '#ff2d20', level: 85 },
  { name: 'Golang', badge: 'Go', color: '#00add8', level: 80 },
];

export const languages = [
  { name: 'Indonesian', level: 100 },
  { name: 'English', level: 70 },
];

export const personalSkills = ['Problem Solving', 'Team Work', 'Fast Learner', 'Organisation'];

export const timeline = [
  {
    period: '2026 — Now',
    title: 'Nosara — P2MW Bisnis Digital',
    role: 'Fullstack Developer',
  },
  {
    period: '2026',
    title: 'AR Portfolio Card',
    role: 'UI Designer & Developer',
  },
  {
    period: '2026',
    title: 'Data Warehouse Project',
    role: 'Academic Project — Star Schema & ETL Design',
  },
];

export const education = {
  degree: "Bachelor's Degree (in progress)",
  school: 'Universitas Tadulako, Palu',
};

export const whatCanIDo = [
  'Web Applications - Mobile Applications',
  'IoT Solutions - REST API Development',
  'Database Design - UI Design in Figma',
];

export const devFocus = [
  'React & Next.js - Interface Engineering',
  'Golang Services - Laravel Platforms',
  'Data Warehousing - AR Experiences',
];

export const hobbies = [
  { icon: 'code', label: 'Coding' },
  { icon: 'ar', label: 'Augmented Reality' },
  { icon: 'server', label: 'DevOps' },
  { icon: 'chip', label: 'IoT Tinkering' },
];

export const projects = [
  {
    title: 'Nosara',
    category: 'P2MW · Platform',
    description:
      'A self-guided village tourism and local-product platform for Donggala, Central Sulawesi. QR points at each destination open its story, an AI arranger composes trips from real field data, and village products are ordered in one catalogue and shipped through a quality-control hub in Palu.',
    tags: ['React', 'Laravel', 'MySQL'],
  },
  {
    title: 'AR Portfolio Card',
    category: 'AR · Figma',
    description:
      'A personal portfolio card designed in Figma as augmented-reality content: scan the card and the portfolio opens on top of it — skills, project areas and contact buttons in one glance.',
    tags: ['Figma', 'AR Design'],
  },
  {
    title: 'This Website',
    category: 'Portfolio · Next.js',
    description:
      'The site you are reading. A fully static Next.js build with a dark cinematic resume layout — hero, about, a three-column resume and selected work, all content driven from a single data file.',
    tags: ['Next.js', 'Static Export'],
  },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/MohAriefPrasetyo', icon: 'github' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'Email', href: 'mailto:f55124012@untad.ac.id', icon: 'mail' },
];
