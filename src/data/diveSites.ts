import type { DiveSite } from '@/types/diveSite';

export const diveSites: DiveSite[] = [
  {
    id: 'st-nikola',
    name: 'St. Nikola (Try Dive Site)',
    depthRange: '2 – 6m',
    image: '/images/dive-sites/site-st-nikola.jpg',
    imageAlt: 'Shallow turquoise bay at St. Nikola Island dive site',
    badges: [{ label: 'Beginners', variant: 'green' }],
  },
  {
    id: 'tunnels',
    name: 'Tunnels',
    depthRange: '10 – 12m',
    image: '/images/dive-sites/site-tunnels.jpg',
    imageAlt: 'Underwater rocky swim-throughs at Tunnels dive site',
    badges: [{ label: 'OW License Required', variant: 'blue' }],
  },
  {
    id: 'mogren',
    name: 'Mogren Reef',
    depthRange: '12 – 18m',
    image: '/images/dive-sites/site-mogren.jpg',
    imageAlt: 'Marine life along Mogren Reef in Budva',
    badges: [{ label: 'OW License Required', variant: 'blue' }],
  },
  {
    id: 'pyramide',
    name: 'Pyramide',
    depthRange: '15 – 25m',
    image: '/images/dive-sites/site-pyramide.jpg',
    imageAlt: 'Dramatic underwater rock formations at Pyramide dive site',
    badges: [
      { label: 'OW License Required', variant: 'blue' },
      { label: 'AOW License Required', variant: 'red' },
    ],
  },
  {
    id: 'galiola',
    name: 'Galiola Bell Tower',
    depthRange: '15 – 30m',
    image: '/images/dive-sites/site-galiola.jpg',
    imageAlt: 'Steep wall and reef at Galiola dive site',
    badges: [
      { label: 'OW License Required', variant: 'blue' },
      { label: 'AOW License Required', variant: 'red' },
    ],
  },
  {
    id: 'light-house',
    name: 'Light House',
    depthRange: '20 – 30m',
    image: '/images/dive-sites/site-light-house.jpg',
    imageAlt: 'Deep Adriatic wall diving near Budva Light House',
    badges: [{ label: 'AOW License Required', variant: 'red' }],
  },
  {
    id: 'oreste-wreck',
    name: 'Oreste Historic Wreck',
    depthRange: '30 – 35m',
    image: '/images/dive-sites/site-oreste-wreck.jpg',
    imageAlt: 'Historic Oreste shipwreck off the coast of Budva',
    badges: [{ label: 'AOW License Required', variant: 'red' }],
  },
  {
    id: 'jaz-cape',
    name: 'Jaz Cape',
    depthRange: '15 – 30m',
    image: '/images/dive-sites/site-jaz-cape.jpg',
    imageAlt: 'Vibrant reefs and drop-offs at Jaz Cape dive site',
    badges: [
      { label: 'OW License Required', variant: 'blue' },
      { label: 'AOW License Required', variant: 'red' },
    ],
  },
];
