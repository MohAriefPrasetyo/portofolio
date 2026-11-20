import { profile } from '../data/profile';
import { SocialIcon } from './Icons';

const links = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Resume', href: '#resume' },
  { label: 'Portfolio', href: '#portfolio' },
];

export default function Navbar() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <nav className="nav-links" aria-label="Utama">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <a className="nav-mail" href={`mailto:${profile.email}`}>
          <SocialIcon name="mail" />
          <span className="nav-mail-text">{profile.email}</span>
        </a>
      </div>
    </header>
  );
}
