export const siteConfig = {
  brandName: 'DIVE IN MONTENEGRO',
  centerName: 'Budva Diving Center',
  officialWebsiteUrl: 'https://budvadiving.com',
  establishedYear: 1994,
  padiCenterNumber: '#3521',
  address: {
    street: 'Slovenska Obala (Beach Promenade), 85310 Budva, Montenegro',
    landmark: 'Right next to the beach, 300m from Hotel Slovenska Plaža',
  },
  hours: {
    daily: '08:30 – 20:00 (May 1st – November 15th)',
    departures: 'Boat departures: 09:30 Morning & 14:00 Afternoon',
  },
  contact: {
    phoneDisplay: '+382 69 000 000',
    phoneHref: 'tel:+38269000000',
    whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '38269000000',
    email: 'info@budvadiving.com',
    languages: 'English, German, French, Swedish, Russian',
  },
  parkingNotice:
    'As we are located on the pedestrian beach strip, parking is available at the Hotel Slovenska Plaža open parking lot (from €1.50–€2.00/hr), just 3–4 minutes walk from our door. Campers and motorhomes should use Budva main bus terminal parking.',
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.3308722240985!2d18.841315576598555!3d42.28212137120025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dd496e626e2a1%3A0x60dfc572a106b02!2sSlovenska%20Beach!5e0!3m2!1sen!2sme!4v1700000000000!5m2!1sen!2sme',
} as const;
