import type { FaqItem } from '@/types/faq';

export const faqItems: FaqItem[] = [
  {
    id: 'reservation',
    question: '1) Do I need a reservation to dive with you, and how can I book?',
    paragraphs: [
      'Yes — a reservation is required. Even though we have a large capacity and one of the largest dive boats in Montenegro, during peak season we are often unable to accept walk-ins.',
      'To guarantee your spot, please book in advance using our online booking system so we can match your group by experience level and reserve the right equipment.',
    ],
    ctaType: 'book',
  },
  {
    id: 'languages',
    question: '2) Which languages do you speak?',
    paragraphs: [
      'Our international dive team fluently speaks English, German, French, Swedish, Russian, and Montenegrin/Serbian. Dive briefings and digital study materials are available in all major languages.',
    ],
  },
  {
    id: 'never-dived',
    question: '3) I’ve never dived / I’m not confident in the water — what can I do?',
    paragraphs: [
      'We offer beginner Introductory Boat Dives and entry-level PADI courses if you’d like to get certified. For introductory try dives, strong swimming experience is not required — our dedicated instructor stays right beside you 1-on-1 in calm, controlled waters.',
    ],
  },
  {
    id: 'min-age',
    question: '4) What is the minimum age to dive?',
    paragraphs: [
      'For beginner scuba experiences (Intro Dive) and PADI certifications, the minimum age is 10 years old. For snorkeling trips, kids of all ages accompanied by parents are welcome!',
    ],
  },
  {
    id: 'medical',
    question: '5) Do I need a medical certificate to dive?',
    paragraphs: [
      'In most cases, no. You will be asked to complete a standard PADI Diver Medical Questionnaire at the dive center before your activity. If you answer "Yes" to any medical condition, physician clearance is required prior to diving.',
    ],
    ctaType: 'medical-pdf',
  },
  {
    id: 'refresher',
    question: '6) I haven’t been diving for a few years — can I still dive?',
    paragraphs: [
      'Yes! For your safety and comfort, we recommend a PADI Refresher / ReActivate session if you haven’t dived in more than 12+ months. We review essential safety skills and take you on a relaxed open water dive to rebuild confidence.',
    ],
  },
  {
    id: 'marine-life',
    question: '7) What can I see while diving in Budva and St. Nikola Island?',
    paragraphs: [
      'Budva offers a classic Mediterranean underwater landscape: colorful reef fish, moray eels, octopus, lobsters, seahorses, and occasionally rays — alongside dramatic rocky drop-offs, underwater tunnels, caverns, and historic shipwrecks.',
    ],
  },
  {
    id: 'oreste-wreck',
    question: '8) Can I request a specific dive site or dive the Oreste wreck?',
    paragraphs: [
      'We choose dive sites daily based on sea conditions and diver experience levels, and always do our best to accommodate requests when safe.',
      'Oreste Wreck Policy: Diving the Oreste wreck requires at least an Advanced Open Water Diver (AOW) certification, plus at least one day of check dives with us first so we can verify buoyancy and ensure the safest experience.',
    ],
  },
  {
    id: 'conditions',
    question: '9) What are the water conditions, temperature, and visibility?',
    paragraphs: [
      'From May to November, underwater visibility is typically around 20–25 meters in clear Adriatic waters. Water temperature ranges from 18°C in May/early June up to 26°C–28°C in July–September, and 20°C–22°C in October.',
    ],
  },
  {
    id: 'what-to-bring',
    question: '10) What should I bring, and can non-divers join on the boat?',
    paragraphs: [
      'Bring swimwear, a beach towel, and dry clothes to change into. We provide all diving equipment, though you are welcome to bring your own mask or dive computer.',
      'Non-divers are welcome! Partners and family members can join the boat as passengers, take an Introductory Dive, or join our Snorkeling Safari.',
    ],
  },
  {
    id: 'weather-parking',
    question: '11) What happens in case of bad weather, and where can I park?',
    paragraphs: [
      'Bad weather policy: If sea conditions are unsafe, we cancel the departure and offer a full reschedule or immediate refund.',
      'Parking: Because we are located directly on the pedestrian beach promenade, vehicle traffic is prohibited. The nearest paid parking is at Hotel Slovenska Plaža (3–4 minutes walk, from €1.50–€2.00/hr). Note: not suitable for large campers/RVs.',
    ],
  },
];
