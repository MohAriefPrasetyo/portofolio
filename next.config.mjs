/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export sebagai situs statis ke folder "out" saat `npm run build`,
  // supaya hasilnya bisa di-hosting di mana saja (Netlify, Vercel, GitHub Pages, dll).
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
