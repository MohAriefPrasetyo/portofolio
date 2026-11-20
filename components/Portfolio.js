import { projects } from '../data/profile';

export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="wrap">
        <div className="sec-head">
          <h2>Portfolio</h2>
          <p className="sec-sub">Selected work</p>
        </div>
        <div className="proj-grid">
          {projects.map((p) => (
            <article className="proj" key={p.title}>
              <p className="proj-cat">{p.category}</p>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <ul className="proj-tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
