import { LanguageProvider } from '../components/LanguageProvider';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Portfolio />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
