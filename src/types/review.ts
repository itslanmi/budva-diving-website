export type ReviewSource = 'google' | 'tripadvisor' | 'fallback';

export interface GoogleReview {
  id: string;
  authorName: string;
  authorInitials: string;
  authorPhotoUrl?: string;
  originAndActivity: string;
  rating: number;
  relativeTimeDescription?: string;
  text: string;
  source: ReviewSource;
}

export interface ReviewsSummary {
  rating: number;
  totalReviews: number;
  sourceLabel: string;
  isLiveApi: boolean;
  placeUrl?: string;
}

export interface ReviewsResponse {
  summary: ReviewsSummary;
  reviews: GoogleReview[];
}
