export type ExperienceFilter =
  | 'all'
  | 'beginners'
  | 'certified'
  | 'snorkeling'
  | 'courses';

export type ExperienceCategory = Exclude<ExperienceFilter, 'all'>;

export type BadgeVariant = 'orange' | 'blue' | 'green' | 'teal' | 'grey' | 'red';

export interface ExperienceItem {
  id: string;
  title: string;
  categories: ExperienceCategory[];
  badge: {
    label: string;
    variant: BadgeVariant;
  };
  image: string;
  imageAlt: string;
  meta: string[];
  perks: string[];
  note?: string;
  priceEur: number;
  trekksoftItemId: string;
}
