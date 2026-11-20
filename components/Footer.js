'use client';

import { profile, socials } from '../data/profile';
import { SocialIcon } from './Icons';
import { useLang } from './LanguageProvider';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <h2>{t.footerTitle}</h2>
        <p className="f-sub">{t.footerSub}</p>
        <a className="btn-pill solid" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="footer-socials">
          {socials.map((s) => (
            <a key={s.label} className="social-btn" href={s.href} aria-label={s.label}>
              <SocialIcon name={s.icon} />
            </a>
          ))}
        </div>
        <p className="copy">
          © 2026 {profile.firstName} {profile.lastName} — {t.location}
        </p>
      </div>
    </footer>
  );
}
