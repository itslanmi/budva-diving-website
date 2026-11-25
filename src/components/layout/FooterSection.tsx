import { siteConfig } from '@/data/siteConfig';

const paymentMethods = ['VISA', 'Mastercard', 'Apple Pay', 'Google Pay', 'SSL 256-Bit'];

export function FooterSection() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}`;

  return (
    <footer className="footer-location-section" id="location">
      <div className="section-container">
        <div className="security-strip">
          <span className="security-strip-text">
            🔒 100% Secure Checkout • 256-bit SSL Encrypted • Instant Confirmation
          </span>
          <div className="payment-icons-row" aria-label="Supported payment methods">
            {paymentMethods.map((method) => (
              <span key={method} className="payment-badge">
                {method}
              </span>
            ))}
          </div>
        </div>

        <div className="location-grid">
          <div className="loc-info">
            <span className="loc-tag">Visit Our Dive Base</span>
            <h2>{siteConfig.centerName}</h2>
            <p className="loc-lead">
              Located directly on the Slovenska Beach promenade with our custom dive boat moored
              just steps away.
            </p>

            <div className="loc-details-list">
              <div className="loc-item">
                <div className="loc-icon-bubble" aria-hidden="true">
                  📍
                </div>
                <div className="loc-text">
                  <h4>Address &amp; Base</h4>
                  <p>
                    {siteConfig.address.street}
                    <br />
                    <em>{siteConfig.address.landmark}</em>
                  </p>
                </div>
              </div>

              <div className="loc-item">
                <div className="loc-icon-bubble" aria-hidden="true">
                  🕒
                </div>
                <div className="loc-text">
                  <h4>Season &amp; Working Hours</h4>
                  <p>
                    Open Daily: <strong>{siteConfig.hours.daily}</strong>
                    <br />
                    {siteConfig.hours.departures}
                  </p>
                </div>
              </div>

              <div className="loc-item">
                <div className="loc-icon-bubble" aria-hidden="true">
                  📞
                </div>
                <div className="loc-text">
                  <h4>Phone &amp; WhatsApp</h4>
                  <p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      {siteConfig.contact.phoneDisplay}
                    </a>{' '}
                    ({siteConfig.contact.languages})
                    <br />
                    <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="parking-notice">
              <strong>🚗 Parking Advice:</strong> {siteConfig.parkingNotice}
            </div>
          </div>

          <div className="map-card-wrapper">
            <div className="map-frame-box">
              <iframe
                title="Budva Diving Center Location Map"
                src={siteConfig.googleMapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="contact-fast-bar">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-contact-action btn-wa-action"
              >
                <span>💬</span> Chat on WhatsApp
              </a>
              <a href={siteConfig.contact.phoneHref} className="btn-contact-action btn-call-action">
                <span>📞</span> Call Our Base
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom-grid">
          <div className="footer-trust-seals">
            <span className="seal-pill">
              <span className="seal-dot" /> PADI 5-Star Dive Resort {siteConfig.padiCenterNumber}
            </span>
            <span className="seal-pill">
              <span className="seal-dot" /> DAN Commercial Insurance
            </span>
            <span className="seal-pill">
              <span className="seal-dot" /> TrekkSoft 256-Bit SSL Checkout
            </span>
            <span className="seal-pill">
              <span className="seal-dot" /> Est. {siteConfig.establishedYear} (30+ Years)
            </span>
          </div>

          <div className="footer-copy">
            <p>
              © {siteConfig.establishedYear} – {new Date().getFullYear()} {siteConfig.centerName}.
              All rights reserved.{' '}
              <a href={siteConfig.officialWebsiteUrl} target="_blank" rel="noopener noreferrer">
                budvadiving.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
