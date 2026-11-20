'use client';

import { projectTags } from '../data/profile';
import { useLang } from './LanguageProvider';

export default function Portfolio() {
  const { t } = useLang();
  return (
    <section className="section" id="portfolio">
      <div className="wrap">
        <div className="sec-head">
          <h2>{t.portfolioTitle}</h2>
          <p className="sec-sub">{t.portfolioSub}</p>
        </div>
        <div className="proj-grid">
          {t.projects.map((p, i) => (
            <article className="proj" key={p.title}>
              <p className="proj-cat">{p.category}</p>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <ul className="proj-tags">
                {projectTags[i].map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
