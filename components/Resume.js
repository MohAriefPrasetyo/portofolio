import {
  softwareSkills,
  languages,
  personalSkills,
  timeline,
  education,
  whatCanIDo,
  devFocus,
  hobbies,
} from '../data/profile';
import { HobbyIcon } from './Icons';

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
  return (
    <section className="section section-alt" id="resume">
      <div className="wrap resume-grid">
        <div>
          <div className="r-block">
            <h3 className="r-head">Software Skills</h3>
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
            <h3 className="r-head">Languages</h3>
            {languages.map((l) => (
              <div className="lang-row" key={l.name}>
                <p className="skill-name">{l.name}</p>
                <Bar level={l.level} />
              </div>
            ))}
          </div>
          <div className="r-block">
            <h3 className="r-head">Personal Skills</h3>
            <p className="plain-list">{personalSkills.join('  ·  ')}</p>
          </div>
        </div>

        <div>
          <div className="r-block">
            <h3 className="r-head">Experience</h3>
            <div className="tl">
              {timeline.map((t) => (
                <div className="tl-item" key={t.title}>
                  <span className="tl-badge">
                    <BadgeParts period={t.period} />
                  </span>
                  <div className="tl-body">
                    <p className="tl-title">{t.title}</p>
                    <p className="tl-role">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="r-block">
            <h3 className="r-head">Education</h3>
            <p className="edu-degree">{education.degree}</p>
            <p className="edu-school">{education.school}</p>
          </div>
        </div>

        <div>
          <div className="r-block">
            <h3 className="r-head">What Can I Do?</h3>
            <div className="lines-list">
              {whatCanIDo.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <div className="r-block">
            <h3 className="r-head">Dev Focus</h3>
            <div className="lines-list">
              {devFocus.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <div className="r-block">
            <h3 className="r-head">Hobbies &amp; Interests</h3>
            <div className="hobby-grid">
              {hobbies.map((h) => (
                <div className="hobby" key={h.label}>
                  <span className="h-ico">
                    <HobbyIcon name={h.icon} />
                  </span>
                  <span>{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
