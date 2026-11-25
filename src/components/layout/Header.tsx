import { useEffect, useState } from 'react';
import { siteConfig } from '@/data/siteConfig';

const navLinks = [
  { href: '#experiences', label: 'Experiences' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#dive-sites', label: 'Dive Sites' },
  { href: '#faq', label: 'FAQ' },
  { href: '#location', label: 'Location' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`} id="header">
      <div className="header-container">
        <a href="#top" className="brand-logo" onClick={closeMobileMenu}>
          <img
            src="/images/brand/budva-diving-logo.png"
            alt="Budva Diving Center Logo"
            className="brand-logo-img"
          />
          <span>{siteConfig.brandName}</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="#experiences" className="btn-book">
            BOOK NOW
          </a>
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMobileMenu}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
