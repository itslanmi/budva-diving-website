export interface FaqItem {
  id: string;
  question: string;
  paragraphs: string[];
  ctaType?: 'book' | 'medical-pdf';
}
