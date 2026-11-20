# Portofolio Arief — Next.js

Web portofolio pribadi Moh. Arief Prasetyo (Fullstack Developer: React JS,
Golang, Laravel), dibangun dengan Next.js dan di-export sebagai situs statis.

Desain versi ini mengikuti referensi "dark cinematic resume":
navy nyaris hitam dengan aksen cyan, tipografi Montserrat, hero layar penuh
dengan foto meja kerja (public/images/hero-desk.jpg), halaman About dengan
foto diri (public/images/foto-arief.png), dan halaman Resume tiga kolom (skill bars, timeline
pengalaman, education, what-can-i-do, hobi).

Desain mengikuti file Figma "Portofolio Arief - Dark Resume Design".

## Menjalankan

Butuh Node.js 18.18+ (disarankan 20 LTS).

```bash
npm install     # install dependency (sekali saja)
npm run dev     # mode pengembangan → http://localhost:3000
npm run build   # export statis ke folder out/
```

Hasil build di folder `out/` bisa di-hosting di mana saja
(Netlify, Vercel, GitHub Pages, hosting statis biasa), atau dibuka langsung:
`python3 -m http.server 8000 --directory out`

## Mengedit isi

Semua teks ada di satu file: **data/profile.js**

- `profile` — nama, role, email, lokasi, paragraf About
- `softwareSkills` / `languages` — daftar skill & bahasa beserta `level` 0–100
  (penilaian diri — sesuaikan dengan kemampuanmu)
- `timeline`, `education` — pengalaman & pendidikan
- `whatCanIDo`, `devFocus`, `hobbies` — kolom ketiga halaman Resume
- `projects` — kartu di bagian Portfolio
- `socials` — ikon sosial; GitHub sudah terisi URL aslinya, ganti `href: '#'`
  LinkedIn/Instagram dengan URL aslimu

Struktur tampilan: `app/globals.css` (semua gaya) dan `components/`
(Navbar, Hero, About, Resume, Portfolio, Footer, Icons).
