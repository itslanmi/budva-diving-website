import { useState } from 'react';
import { faqItems } from '@/data/faq';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about booking, requirements, safety, and equipment.
          </p>
        </div>

        <div className="faq-wrapper">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className={`faq-item ${isOpen ? 'active' : ''}`}>
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => toggleItem(item.id)}
                >
                  <span>{item.question}</span>
                  <svg className="faq-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    {item.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}

                    {item.ctaType === 'book' && (
                      <a href="#experiences" className="btn-inline-book">
                        Book Online
                      </a>
                    )}

                    {item.ctaType === 'medical-pdf' && (
                      <a
                        href="https://www.padi.com/sites/default/files/documents/2020-08/10346E_Diver_Medical_Form.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-inline-pdf"
                      >
                        📄 Diver Medical Questionnaire (PDF)
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
