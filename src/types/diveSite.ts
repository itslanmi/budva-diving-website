export type LicenseBadgeVariant = 'green' | 'blue' | 'red';

export interface LicenseBadge {
  label: string;
  variant: LicenseBadgeVariant;
}

export interface DiveSite {
  id: string;
  name: string;
  depthRange: string;
  image: string;
  imageAlt: string;
  badges: LicenseBadge[];
}
