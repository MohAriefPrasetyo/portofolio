'use client';

import { profile } from '../data/profile';
import { useLang } from './LanguageProvider';

export default function About() {
  const { t } = useLang();
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div>
            <div className="sec-head">
              <h2>{t.aboutTitle}</h2>
              <p className="sec-sub">{profile.email}</p>
            </div>
            <div className="about-text" style={{ marginTop: '2.2rem' }}>
              {t.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="portrait-panel">
            <img
              className="portrait-photo"
              src={profile.photo}
              alt={`${profile.firstName} ${profile.lastName}`}
            />
          </div>
        </div>
        <div className="about-loc">
          <span className="rule left" />
          <div className="loc">
            <b>{t.location}</b>
            <span>{t.locationSub}</span>
          </div>
          <span className="rule right" />
        </div>
      </div>
    </section>
  );
}
