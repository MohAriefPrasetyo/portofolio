# Next.js Starter

Kerangka dasar Next.js polos (clean slate), siap digunakan untuk membangun proyek baru dari awal.

## Cara Menjalankan

```bash
# Mode development
npm run dev

# Build production
npm run build

# Menjalankan hasil build
npm start
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Struktur File

```text
├── app/
│   ├── globals.css    # Style dasar
│   ├── layout.js      # Root layout
│   └── page.js        # Halaman utama
├── public/            # File statis
├── jsconfig.json      # Path alias (@/*)
├── next.config.mjs    # Konfigurasi Next.js
└── package.json       # Script & dependensi
```
