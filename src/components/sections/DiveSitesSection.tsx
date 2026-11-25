import { diveSites } from '@/data/diveSites';

export function DiveSitesSection() {
  return (
    <section className="dive-sites-section" id="dive-sites">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Explore Budva&apos;s Best Dive Sites</h2>
          <p className="section-subtitle">
            Located around St. Nikola Island and Budva Bay. From shallow beginner reefs to deep
            historic shipwrecks.
          </p>
        </div>

        <div className="sites-grid">
          {diveSites.map((site) => (
            <article key={site.id} className="site-card">
              <img
                src={site.image}
                alt={site.imageAlt}
                className="site-img"
                loading="lazy"
              />
              <div className="site-overlay" />
              <div className="site-badges">
                <span className="depth-badge">⇂ {site.depthRange}</span>
                {site.badges.map((badge) => (
                  <span key={badge.label} className={`licence-badge badge-${badge.variant}`}>
                    {badge.label}
                  </span>
                ))}
              </div>
              <h3 className="site-name">{site.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
