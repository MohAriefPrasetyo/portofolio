import './globals.css';

export const metadata = {
  title: 'Moh. Arief Prasetyo — Fullstack Developer',
  description:
    'Portfolio of Moh. Arief Prasetyo, a fullstack developer (React JS, Golang, Laravel) working across web, mobile and IoT, based in Palu, Indonesia.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
