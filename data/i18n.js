// ============================================================
//  TEKS SITUS DALAM DUA BAHASA — Inggris (utama) & Indonesia.
//  Semua tulisan yang tampil di halaman ada di file ini.
//  Angka, level skill, ikon, dan tautan ada di data/profile.js.
// ============================================================

export const content = {
  en: {
    nav: [
      { label: 'Home', href: '#top' },
      { label: 'About', href: '#about' },
      { label: 'Resume', href: '#resume' },
      { label: 'Portfolio', href: '#portfolio' },
    ],
    navAria: 'Primary',
    role: 'Fullstack Developer',
    tagline: 'Creative Developer | AR Enthusiast',
    heroResume: 'Resume',
    heroPortfolio: 'Portfolio',
    aboutTitle: 'About',
    about: [
      'Fullstack developer working across web, mobile and IoT. My main stack is React JS on the front end, with Golang and Laravel on the back end — I enjoy taking a product from a rough idea all the way to something people can actually use.',
      'Currently I am building Nosara, a village tourism and local-product platform for Donggala, Central Sulawesi, as a P2MW Bisnis Digital project: self-guided tourism with QR points and an AI trip arranger, connected to a local-product marketplace shipped through a quality-control hub in Palu. I am also exploring augmented reality and DevOps.',
    ],
    location: 'Palu, Central Sulawesi',
    locationSub: 'Universitas Tadulako, Indonesia',
    heads: {
      softwareSkills: 'Software Skills',
      languages: 'Languages',
      personalSkills: 'Personal Skills',
      experience: 'Experience',
      education: 'Education',
      whatCanIDo: 'What Can I Do?',
      devFocus: 'Dev Focus',
      hobbies: 'Hobbies & Interests',
    },
    languageNames: ['Indonesian', 'English'],
    personalSkills: ['Problem Solving', 'Team Work', 'Fast Learner', 'Organisation'],
    timeline: [
      { period: '2026 — Now', title: 'Nosara — P2MW Bisnis Digital', role: 'Fullstack Developer' },
      { period: '2026', title: 'AR Portfolio Card', role: 'UI Designer & Developer' },
      { period: '2026', title: 'Data Warehouse Project', role: 'Academic Project — Star Schema & ETL Design' },
    ],
    education: {
      degree: "Bachelor's Degree (in progress)",
      school: 'Universitas Tadulako, Palu',
    },
    whatCanIDo: [
      'Web Applications - Mobile Applications',
      'IoT Solutions - REST API Development',
      'Database Design - UI Design in Figma',
    ],
    devFocus: [
      'React & Next.js - Interface Engineering',
      'Golang Services - Laravel Platforms',
      'Data Warehousing - AR Experiences',
    ],
    hobbyLabels: ['Coding', 'Augmented Reality', 'DevOps', 'IoT Tinkering'],
    portfolioTitle: 'Portfolio',
    portfolioSub: 'Selected work',
    viewDetails: 'View details',
    closeDetails: 'Close',
    exitLabel: 'Open',
    projects: [
      {
        title: 'Nosara',
        category: 'P2MW · Platform',
        description:
          'A self-guided village tourism and local-product platform for Donggala, Central Sulawesi. QR points at each destination open its story, an AI arranger composes trips from real field data, and village products are ordered in one catalogue and shipped through a quality-control hub in Palu.',
        story: [
          'Nosara is my P2MW Bisnis Digital project: one app with two doors. Wisata Mandiri lets visitors explore villages on their own — QR codes at each point open that place’s story, and an AI arranger composes a route only from data our team enters (locations, distances, travel times, prices), matched to the visitor’s time, interests and budget.',
          'Produk Lokal is a Donggala-wide catalogue where anyone can browse products from every included village and check out directly. Orders are gathered through a quality-control hub in Palu before delivery, so village products arrive checked and consistent.',
          'The pilot corridor is Banawa Tengah, Donggala — Lampo, Towale and Limboro — starting with local products such as teh bawang dayak from Desa Lampo. Revenue comes from sales commission only; tourism is the discovery entry that leads visitors to buy the village’s products and have them delivered home.',
        ],
        captions: ['Home — local products & tourism entries', 'Home — emerald theme', 'Product detail — village product page', 'Wisata Mandiri — QR points & trip builder'],
        exit: 'Open Figma Prototype',
      },
      {
        title: 'Suara Lembah',
        category: 'Competition · Culture Platform',
        description:
          'An interactive digital museum for Kaili oral culture in Central Sulawesi: recorded oral literature, a spoken Kaili dictionary, and a WebGIS archive of disaster memory. Built for a national digital-culture technology competition.',
        story: [
          'Suara Lembah — “Voice of the Valley” — is a digital museum for the oral culture of the Kaili people of the Palu Valley, Central Sulawesi. I built it with my team for a national digital-culture technology competition in 2026, and it is now live online.',
          'It stands on three pillars: oral literature (Dadendate and Vaino) with original Kaili lyrics, Indonesian translations and the moral philosophy behind each piece; a spoken Kaili Ledo dictionary with native pronunciation audio; and a disaster-memory archive that maps ancient place names and terms such as Nalodo — liquefaction — on a WebGIS map of the valley.',
          'The live version is a team build in Next.js and TypeScript with a Prisma database, Leaflet maps and Cloudinary media, plus an admin CMS and crowdsourced contributions. I also keep my own earlier full-stack version (React, Express and Docker) in my repositories.',
        ],
        captions: ['Rumah Adat Souraja — Kaili heritage house, Palu', 'Pokekea megalithic site, Lore Lindu'],
        exit: 'Visit Live Site',
      },
      {
        title: 'EventRun',
        category: 'Laravel · Event Platform',
        description:
          'A Laravel platform for running events. Admins manage events and ticket categories and verify payments, participants register online, and volunteers handle race-pack collection on race day.',
        story: [
          'EventRun is a web platform for organising running events, built in Laravel with three user roles: admin, participant and volunteer.',
          'Admins create events and ticket categories and verify participant payments — approving or rejecting them with a recorded reason. Participants register online and follow their payment status, and on race day volunteers look up registrations and hand over the race packs.',
          'The database covers the whole flow — users with roles, events, ticket categories, registrations and race packs — built with Laravel migrations, Blade views and session authentication.',
        ],
        captions: ['EventRun — project cover'],
        exit: 'View on GitHub',
      },
      {
        title: 'RentEase',
        category: 'Laravel · Rental System',
        description:
          'An equipment rental management app in Laravel: catalogue, rental transactions, late-return penalties, and AI-assisted search in one dashboard.',
        story: [
          'RentEase is a Laravel app for managing an outdoor-equipment rental business — tents, carriers, sleeping bags and other camping gear — from catalogue to return.',
          'It handles the full rental flow: equipment and categories, rental transactions with itemised gear, returns with late and damage penalties, and renter records, all in one dashboard.',
          'Its distinctive feature is AI-assisted search: an in-app agent conversation helps staff find equipment and answer rental questions in natural language, backed by its own conversations table in the database.',
        ],
        captions: ['Rental catalogue — tents, carriers, sleeping bags', 'Tent — catalogue item', 'Carrier backpack — catalogue item'],
        exit: 'View on GitHub',
      },
      {
        title: 'ACraft',
        category: 'Flutter · Mobile App',
        description:
          'A Flutter app for discovering craft products: browse the catalogue, open product details and reviews, and manage your account and profile.',
        story: [
          'ACraft is a mobile app for discovering Indonesian craft products — woven bags and hats, tenun fabrics and other handmade goods — built with Flutter.',
          'Users can register and log in, browse the craft catalogue, open product details with reviews, and manage their account and profile. The codebase follows an MVVM structure with separate models, services, view models and views.',
          'A native Android version written in Java also exists in my repositories; the Flutter build is the main one, covering both platforms from a single codebase.',
        ],
        captions: ['Craft products — woven clutch, hat and tenun', 'Woven clutch — product photo', 'Woven hat (toru) — product photo'],
        exit: 'View on GitHub',
      },
    ],
    footerTitle: "Let's Work Together",
    footerSub: 'Open to collaborations, freelance projects and new opportunities.',
  },

  id: {
    nav: [
      { label: 'Beranda', href: '#top' },
      { label: 'Tentang', href: '#about' },
      { label: 'Resume', href: '#resume' },
      { label: 'Portofolio', href: '#portfolio' },
    ],
    navAria: 'Utama',
    role: 'Fullstack Developer',
    tagline: 'Pengembang Kreatif | Penggemar AR',
    heroResume: 'Resume',
    heroPortfolio: 'Portofolio',
    aboutTitle: 'Tentang',
    about: [
      'Pengembang fullstack yang bekerja di bidang web, mobile, dan IoT. Stack utama saya React JS di sisi front end, dengan Golang dan Laravel di back end — saya senang membawa produk dari ide kasar sampai menjadi sesuatu yang benar-benar bisa dipakai orang.',
      'Saat ini saya sedang membangun Nosara, platform wisata desa dan produk lokal untuk Donggala, Sulawesi Tengah, sebagai proyek P2MW Bisnis Digital: wisata mandiri dengan titik QR dan penyusun perjalanan AI, terhubung ke marketplace produk lokal yang dikirim melalui hub quality-control di Palu. Saya juga sedang mendalami augmented reality dan DevOps.',
    ],
    location: 'Palu, Sulawesi Tengah',
    locationSub: 'Universitas Tadulako, Indonesia',
    heads: {
      softwareSkills: 'Keahlian Software',
      languages: 'Bahasa',
      personalSkills: 'Keahlian Personal',
      experience: 'Pengalaman',
      education: 'Pendidikan',
      whatCanIDo: 'Apa yang Bisa Saya Lakukan?',
      devFocus: 'Fokus Pengembangan',
      hobbies: 'Hobi & Minat',
    },
    languageNames: ['Indonesia', 'Inggris'],
    personalSkills: ['Pemecahan Masalah', 'Kerja Tim', 'Cepat Belajar', 'Organisasi'],
    timeline: [
      { period: '2026 — Sekarang', title: 'Nosara — P2MW Bisnis Digital', role: 'Fullstack Developer' },
      { period: '2026', title: 'AR Portfolio Card', role: 'Desainer UI & Pengembang' },
      { period: '2026', title: 'Data Warehouse Project', role: 'Proyek Akademik — Desain Star Schema & ETL' },
    ],
    education: {
      degree: 'Program Sarjana (sedang ditempuh)',
      school: 'Universitas Tadulako, Palu',
    },
    whatCanIDo: [
      'Aplikasi Web - Aplikasi Mobile',
      'Solusi IoT - Pengembangan REST API',
      'Desain Database - Desain UI di Figma',
    ],
    devFocus: [
      'React & Next.js - Rekayasa Antarmuka',
      'Layanan Golang - Platform Laravel',
      'Data Warehousing - Pengalaman AR',
    ],
    hobbyLabels: ['Coding', 'Augmented Reality', 'DevOps', 'Eksperimen IoT'],
    portfolioTitle: 'Portofolio',
    portfolioSub: 'Karya pilihan',
    viewDetails: 'Lihat detail',
    closeDetails: 'Tutup',
    exitLabel: 'Buka',
    projects: [
      {
        title: 'Nosara',
        category: 'P2MW · Platform',
        description:
          'Platform wisata desa mandiri dan produk lokal untuk Donggala, Sulawesi Tengah. Titik QR di setiap destinasi membuka ceritanya, penyusun AI merangkai perjalanan dari data lapangan yang nyata, dan produk desa dipesan dalam satu katalog lalu dikirim melalui hub quality-control di Palu.',
        story: [
          'Nosara adalah proyek P2MW Bisnis Digital saya: satu aplikasi dengan dua pintu. Wisata Mandiri membiarkan pengunjung menjelajah desa sendiri — kode QR di setiap titik membuka cerita tempat itu, dan penyusun AI merangkai rute hanya dari data yang dimasukkan tim kami (lokasi, jarak, waktu tempuh, harga), disesuaikan dengan waktu, minat, dan anggaran pengunjung.',
          'Produk Lokal adalah katalog se-Donggala tempat siapa pun bisa menelusuri produk dari semua desa yang masuk lalu langsung checkout. Pesanan dikumpulkan melalui hub quality-control di Palu sebelum dikirim, supaya produk desa sampai dalam keadaan terperiksa dan konsisten.',
          'Koridor percontohannya adalah Banawa Tengah, Donggala — Lampo, Towale, dan Limboro — dimulai dari produk lokal seperti teh bawang dayak dari Desa Lampo. Pendapatan hanya dari komisi penjualan; wisata adalah pintu penemuan yang mengantar pengunjung membeli produk desa itu dan mengirimkannya ke rumah.',
        ],
        captions: ['Beranda — produk lokal & pintu wisata', 'Beranda — tema emerald', 'Detail produk — halaman produk desa', 'Wisata Mandiri — titik QR & penyusun perjalanan'],
        exit: 'Buka Prototipe Figma',
      },
      {
        title: 'Suara Lembah',
        category: 'Kompetisi · Platform Budaya',
        description:
          'Museum digital interaktif untuk budaya lisan Kaili di Sulawesi Tengah: rekaman sastra lisan, kamus suara bahasa Kaili, dan arsip memori bencana berbasis WebGIS. Dibangun untuk kompetisi teknologi budaya digital tingkat nasional.',
        story: [
          'Suara Lembah adalah museum digital untuk budaya lisan masyarakat Kaili di Lembah Palu, Sulawesi Tengah. Aplikasi ini kubangun bersama tim untuk kompetisi teknologi budaya digital tingkat nasional tahun 2026, dan sekarang sudah tayang online.',
          'Isinya berdiri di atas tiga pilar: sastra lisan (Dadendate dan Vaino) dengan lirik asli bahasa Kaili, terjemahan Indonesia, dan filosofi moral di balik setiap karya; kamus suara Kaili Ledo dengan audio pelafalan asli; dan arsip memori bencana yang memetakan nama-nama tempat kuno serta istilah seperti Nalodo — likuifaksi — di atas peta WebGIS Lembah Palu.',
          'Versi live-nya adalah garapan tim dengan Next.js dan TypeScript, database Prisma, peta Leaflet, dan media Cloudinary, lengkap dengan CMS admin dan kontribusi crowdsourcing. Aku juga menyimpan versi full-stack garapanku sendiri yang lebih awal (React, Express, dan Docker) di repositoriku.',
        ],
        captions: ['Rumah Adat Souraja — rumah adat Kaili, Palu', 'Situs megalitikum Pokekea, Lore Lindu'],
        exit: 'Kunjungi Situs Live',
      },
      {
        title: 'EventRun',
        category: 'Laravel · Platform Event',
        description:
          'Platform Laravel untuk event lari. Admin mengelola event dan kategori tiket serta memverifikasi pembayaran, peserta mendaftar online, dan volunteer mengurus pengambilan race pack di hari lomba.',
        story: [
          'EventRun adalah platform web untuk menyelenggarakan event lari, dibangun dengan Laravel dan tiga peran pengguna: admin, peserta, dan volunteer.',
          'Admin membuat event dan kategori tiket serta memverifikasi pembayaran peserta — menyetujui atau menolaknya dengan alasan yang tercatat. Peserta mendaftar online dan memantau status pembayarannya, dan di hari lomba volunteer mencari data pendaftaran lalu menyerahkan race pack.',
          'Databasenya mencakup seluruh alur — pengguna dengan peran, event, kategori tiket, pendaftaran, dan race pack — dibangun dengan migration Laravel, tampilan Blade, dan autentikasi sesi.',
        ],
        captions: ['EventRun — sampul proyek'],
        exit: 'Lihat di GitHub',
      },
      {
        title: 'RentEase',
        category: 'Laravel · Sistem Penyewaan',
        description:
          'Aplikasi manajemen penyewaan alat berbasis Laravel: katalog, transaksi sewa, denda keterlambatan, dan pencarian berbantuan AI dalam satu dashboard.',
        story: [
          'RentEase adalah aplikasi Laravel untuk mengelola usaha penyewaan alat outdoor — tenda, carrier, sleeping bag, dan perlengkapan kemah lainnya — dari katalog sampai pengembalian.',
          'Aplikasi ini menangani seluruh alur sewa: data alat dan kategori, transaksi sewa dengan rincian alat, pengembalian dengan denda keterlambatan dan kerusakan, serta data penyewa, semua dalam satu dashboard.',
          'Fitur khasnya adalah pencarian berbantuan AI: percakapan agen di dalam aplikasi membantu staf menemukan alat dan menjawab pertanyaan seputar penyewaan dengan bahasa sehari-hari, didukung tabel percakapan tersendiri di database.',
        ],
        captions: ['Katalog sewa — tenda, carrier, sleeping bag', 'Tenda — item katalog', 'Carrier — item katalog'],
        exit: 'Lihat di GitHub',
      },
      {
        title: 'ACraft',
        category: 'Flutter · Aplikasi Mobile',
        description:
          'Aplikasi Flutter untuk menemukan produk kerajinan: jelajahi katalog, buka detail produk dan ulasannya, dan kelola akun serta profilmu.',
        story: [
          'ACraft adalah aplikasi mobile untuk menemukan produk kerajinan Indonesia — tas dan topi anyaman, kain tenun, dan barang kerajinan tangan lainnya — dibangun dengan Flutter.',
          'Pengguna bisa mendaftar dan masuk, menjelajahi katalog kerajinan, membuka detail produk beserta ulasannya, dan mengelola akun serta profil. Struktur kodenya mengikuti pola MVVM dengan models, services, viewmodels, dan views yang terpisah.',
          'Versi Android native dengan Java juga ada di repositoriku; versi Flutter adalah yang utama, mencakup dua platform dari satu basis kode.',
        ],
        captions: ['Produk kerajinan — dompet anyaman, topi, dan tenun', 'Dompet anyaman — foto produk', 'Topi anyaman (toru) — foto produk'],
        exit: 'Lihat di GitHub',
      },
    ],
    footerTitle: 'Mari Bekerja Sama',
    footerSub: 'Terbuka untuk kolaborasi, proyek lepas, dan peluang baru.',
  },
};
