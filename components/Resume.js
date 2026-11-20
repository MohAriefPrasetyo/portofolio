'use client';

import { softwareSkills, languages, hobbies } from '../data/profile';
import { HobbyIcon } from './Icons';
import { useLang } from './LanguageProvider';

function Bar({ level }) {
  return (
    <div className="bar">
      <i style={{ width: `${level}%` }} />
    </div>
  );
}

function BadgeParts({ period }) {
  const parts = period.split('—').map((s) => s.trim());
  return (
    <>
      <span className="y">{parts[0]}</span>
      {parts[1] ? <span className="t">{parts[1]}</span> : null}
    </>
  );
}

export default function Resume() {
  const { t } = useLang();
  return (
    <section className="section section-alt" id="resume">
      <div className="wrap resume-grid">
        <div>
          <div className="r-block">
            <h3 className="r-head">{t.heads.softwareSkills}</h3>
            {softwareSkills.map((s) => (
              <div className="skill-row" key={s.name}>
                <span className="skill-badge" style={{ color: s.color }}>{s.badge}</span>
                <div>
                  <p className="skill-name">{s.name}</p>
                  <Bar level={s.level} />
                </div>
              </div>
            ))}
          </div>
          <div className="r-block">
            <h3 className="r-head">{t.heads.languages}</h3>
            {languages.map((l, i) => (
              <div className="lang-row" key={i}>
                <p className="skill-name">{t.languageNames[i]}</p>
                <Bar level={l.level} />
              </div>
            ))}
          </div>
          <div className="r-block">
            <h3 className="r-head">{t.heads.personalSkills}</h3>
            <p className="plain-list">{t.personalSkills.join('  ·  ')}</p>
          </div>
        </div>

        <div>
          <div className="r-block">
            <h3 className="r-head">{t.heads.experience}</h3>
            <div className="tl">
              {t.timeline.map((item) => (
                <div className="tl-item" key={item.title}>
                  <span className="tl-badge">
                    <BadgeParts period={item.period} />
                  </span>
                  <div className="tl-body">
                    <p className="tl-title">{item.title}</p>
                    <p className="tl-role">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="r-block">
            <h3 className="r-head">{t.heads.education}</h3>
            <p className="edu-degree">{t.education.degree}</p>
            <p className="edu-school">{t.education.school}</p>
          </div>
        </div>

        <div>
          <div className="r-block">
            <h3 className="r-head">{t.heads.whatCanIDo}</h3>
            <div className="lines-list">
              {t.whatCanIDo.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <div className="r-block">
            <h3 className="r-head">{t.heads.devFocus}</h3>
            <div className="lines-list">
              {t.devFocus.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <div className="r-block">
            <h3 className="r-head">{t.heads.hobbies}</h3>
            <div className="hobby-grid">
              {hobbies.map((h, i) => (
                <div className="hobby" key={h.icon}>
                  <span className="h-ico">
                    <HobbyIcon name={h.icon} />
                  </span>
                  <span>{t.hobbyLabels[i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
