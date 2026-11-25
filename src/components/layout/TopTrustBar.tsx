import { siteConfig } from '@/data/siteConfig';

export function TopTrustBar() {
  return (
    <div className="top-trust-bar">
      <span>
        Official Booking Platform of{' '}
        <a
          href={siteConfig.officialWebsiteUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteConfig.centerName}
        </a>{' '}
        • Est. {siteConfig.establishedYear}
      </span>
    </div>
  );
}
