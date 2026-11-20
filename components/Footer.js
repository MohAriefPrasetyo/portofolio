import { profile, socials } from '../data/profile';
import { SocialIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <h2>Let&apos;s Work Together</h2>
        <p className="f-sub">
          Open to collaborations, freelance projects and new opportunities.
        </p>
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
          © 2026 {profile.firstName} {profile.lastName} — {profile.location}
        </p>
      </div>
    </footer>
  );
}
