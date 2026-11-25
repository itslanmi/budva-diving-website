import { PillarIcon } from '@/components/common/Icons';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { trustPillars } from '@/data/trustPillars';

export function WhyUsSection() {
  return (
    <section className="why-us-section" id="why-us">
      <div className="section-container">
        <div className="why-header">
          <span className="why-tag">30+ Years of Safety &amp; Heritage</span>
          <h2 className="why-title">Why Dive With Budva Diving Center?</h2>
          <p className="why-subtitle">
            Setting the gold standard for diver safety, professional education, and Adriatic marine
            conservation in Montenegro since 1994.
          </p>
        </div>

        <div className="pillars-grid">
          {trustPillars.map((pillar) => (
            <div key={pillar.id} className="pillar-card">
              <div className="pillar-icon-box">
                <PillarIcon name={pillar.icon} />
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.description}</p>
            </div>
          ))}
        </div>

        <ReviewsSection />
      </div>
    </section>
  );
}
