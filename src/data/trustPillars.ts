export type TrustPillarIcon =
  | 'heritage'
  | 'padi'
  | 'dan'
  | 'eco'
  | 'groups'
  | 'boat';

export interface TrustPillar {
  id: string;
  icon: TrustPillarIcon;
  title: string;
  description: string;
}

export const trustPillars: TrustPillar[] = [
  {
    id: 'est-1994',
    icon: 'heritage',
    title: 'Est. 1994 (30+ Yrs Experience)',
    description:
      "As Budva's longest-running dive center, our seasoned local crew knows every hidden reef, cave, and wreck in the area.",
  },
  {
    id: 'padi-5-star',
    icon: 'padi',
    title: 'PADI 5-Star Dive Center',
    description:
      'Globally recognized for the highest standards in diver education, safety equipment, and certified professional instruction.',
  },
  {
    id: 'dan-insured',
    icon: 'dan',
    title: 'DAN Insured & Covered',
    description:
      'Your peace of mind is guaranteed. We operate with full commercial Divers Alert Network (DAN) coverage and medical oxygen onboard.',
  },
  {
    id: 'eco-friendly',
    icon: 'eco',
    title: 'Eco-Friendly Practices',
    description:
      'Committed to protecting the Adriatic. We practice zero-impact diving, support Project AWARE clean-ups, and strictly respect marine life.',
  },
  {
    id: 'small-groups',
    icon: 'groups',
    title: 'Small Groups & 1-on-1 Focus',
    description:
      'No overcrowded boats. We provide dedicated 1-on-1 guidance for beginners and small, buddy-matched groups for certified divers.',
  },
  {
    id: 'custom-boat',
    icon: 'boat',
    title: 'Premium Gear & Dive Boats',
    description:
      'Enjoy smooth cruising on our purpose-built dive boat, equipped with regularly serviced gear from industry-leading brands.',
  },
];
