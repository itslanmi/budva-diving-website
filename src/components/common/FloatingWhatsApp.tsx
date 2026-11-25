import { WhatsAppIcon } from '@/components/common/Icons';
import { siteConfig } from '@/data/siteConfig';

export function FloatingWhatsApp() {
  const href = `https://wa.me/${siteConfig.contact.whatsappNumber}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-wa-btn"
      title="Chat with Budva Diving Instructor on WhatsApp"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}
