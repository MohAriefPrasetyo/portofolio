'use client';

import { useEffect, useState } from 'react';
import { projectMedia, projectTags } from '../data/profile';
import { useLang } from './LanguageProvider';

export default function Portfolio() {
  const { t } = useLang();
  const [open, setOpen] = useState(null); // index proyek yang sedang dibuka
  const [shot, setShot] = useState(0); // gambar galeri yang sedang tampil

  const openProject = (i) => {
    setShot(0);
    setOpen(i);
  };
  const closeProject = () => setOpen(null);

  // Tutup dengan Esc, dan kunci scroll halaman saat panel terbuka.
  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeProject();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open ]);

  const detail = open === null ? null : t.projects[open];
  const media = open === null ? null : projectMedia[open];

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
              <button
                type="button"
                className="proj-open"
                onClick={() => openProject(i)}
                aria-label={`${t.viewDetails}: ${p.title}`}
              >
                <span className="proj-thumb">
                  <img src={projectMedia[i].preview} alt={p.title} loading="lazy" />
                </span>
                <span className="proj-body">
                  <span className="proj-cat">{p.category}</span>
                  <span className="proj-title">{p.title}</span>
                  <span className="proj-desc">{p.description}</span>
                  <span className="proj-more">{t.viewDetails} →</span>
                </span>
              </button>
              <ul className="proj-tags">
                {projectTags[i].map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {detail && media && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={detail.title}
          onClick={closeProject}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close" onClick={closeProject} aria-label={t.closeDetails}>
              ×
            </button>
            <div className="modal-gal">
              <img
                className="gal-main"
                src={media.gallery[shot]}
                alt={detail.captions[shot] || detail.title}
              />
              <p className="gal-cap">{detail.captions[shot] || detail.title}</p>
              {media.gallery.length > 1 && (
                <div className="gal-thumbs">
                  {media.gallery.map((src, j) => (
                    <button
                      type="button"
                      key={src}
                      className={j === shot ? 'on' : ''}
                      onClick={() => setShot(j)}
                      aria-label={detail.captions[j] || `${detail.title} ${j + 1}`}
                    >
                      <img src={src} alt="" loading="lazy" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="modal-body">
              <p className="proj-cat">{detail.category}</p>
              <h3>{detail.title}</h3>
              {detail.story.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
              <ul className="proj-tags">
                {projectTags[open].map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a className="btn-pill solid modal-exit" href={media.link} target="_blank" rel="noreferrer">
                {detail.exit} ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
