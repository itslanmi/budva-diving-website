import { useMemo, useState } from 'react';
import { experienceFilters, experiences } from '@/data/experiences';
import type { BookingSelection } from '@/types/booking';
import type { ExperienceFilter } from '@/types/experience';

interface ExperiencesSectionProps {
  onSelectExperience: (selection: BookingSelection) => void;
}

export function ExperiencesSection({ onSelectExperience }: ExperiencesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<ExperienceFilter>('all');

  const filteredExperiences = useMemo(() => {
    if (activeFilter === 'all') {
      return experiences;
    }
    return experiences.filter((item) => item.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section className="experiences-section" id="experiences">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Choose Your Underwater Adventure</h2>
          <p className="section-subtitle">
            Guided boat trips, snorkeling tours, and certified PADI courses in Budva.
          </p>
        </div>

        <div className="filter-tabs" role="tablist" aria-label="Filter diving experiences">
          {experienceFilters.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === tab.id}
              className={`filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="cards-grid">
          {filteredExperiences.map((item) => {
            const handleBookClick = () => {
              onSelectExperience({
                id: item.id,
                title: item.title,
                priceEur: item.priceEur,
                trekksoftItemId: item.trekksoftItemId,
              });
            };

            return (
              <article key={item.id} className="activity-card">
                <div className="card-img-wrapper">
                  <span className={`card-badge badge-${item.badge.variant}`}>
                    {item.badge.label}
                  </span>
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="card-img"
                    loading="lazy"
                  />
                </div>

                <div className="card-body">
                  <div className="card-meta">
                    {item.meta.map((metaItem) => (
                      <span key={metaItem}>{metaItem}</span>
                    ))}
                  </div>

                  <h3 className="card-title">{item.title}</h3>

                  <ul className="card-perks">
                    {item.perks.map((perk) => (
                      <li key={perk}>{perk}</li>
                    ))}
                  </ul>

                  {item.note && <p className="card-note">{item.note}</p>}

                  <div className="card-footer">
                    <div className="card-price">
                      <span className="price-label">From</span>
                      <span className="price-amount">€{item.priceEur}</span>
                    </div>

                    <div className="booking-action">
                      <button
                        type="button"
                        className="btn-book-card"
                        onClick={handleBookClick}
                      >
                        Book Now
                      </button>
                      <button
                        type="button"
                        className="details-link"
                        onClick={handleBookClick}
                      >
                        More details &amp; schedule ›
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
