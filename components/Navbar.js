'use client';

import { profile } from '../data/profile';
import { SocialIcon } from './Icons';
import { useLang } from './LanguageProvider';

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <nav className="nav-links" aria-label={t.navAria}>
          {t.nav.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="lang-toggle" role="group" aria-label="Language">
          <button
            type="button"
            className={lang === 'en' ? 'on' : ''}
            aria-pressed={lang === 'en'}
            onClick={() => setLang('en')}
          >
            EN
          </button>
          <button
            type="button"
            className={lang === 'id' ? 'on' : ''}
            aria-pressed={lang === 'id'}
            onClick={() => setLang('id')}
          >
            ID
          </button>
        </div>
        <a className="nav-mail" href={`mailto:${profile.email}`}>
          <SocialIcon name="mail" />
          <span className="nav-mail-text">{profile.email}</span>
        </a>
      </div>
    </header>
  );
}
