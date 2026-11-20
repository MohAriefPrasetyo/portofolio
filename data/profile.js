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
  ['Figma', 'AR Design'],
  ['Next.js', 'Static Export'],
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/MohAriefPrasetyo', icon: 'github' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'Email', href: 'mailto:arifprasetyo073@gmail.com', icon: 'mail' },
];
