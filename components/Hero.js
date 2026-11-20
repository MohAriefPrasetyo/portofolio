import { profile, socials } from '../data/profile';
import { SocialIcon } from './Icons';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-in">
        <h1>
          <span className="l1">{profile.heroLineOne}</span>
          <span className="l2">{profile.heroLineTwo}</span>
        </h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-tag">{profile.tagline}</p>
        <div className="hero-btns">
          <a className="btn-pill" href="#resume">Resume</a>
          <a className="btn-pill" href="#portfolio">Portfolio</a>
        </div>
      </div>
      <div className="hero-socials">
        <div className="wrap">
          {socials.map((s) => (
            <a key={s.label} className="social-btn" href={s.href} aria-label={s.label}>
              <SocialIcon name={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
