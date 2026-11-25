import type { ReviewsResponse } from '@/types/review';

export const fallbackReviewsData: ReviewsResponse = {
  summary: {
    rating: 4.9,
    totalReviews: 350,
    sourceLabel: 'Rating on Google & TripAdvisor',
    isLiveApi: false,
    placeUrl: 'https://www.google.com/maps/search/?api=1&query=Budva+Diving+Center',
  },
  reviews: [
    {
      id: 'fallback-1',
      authorName: 'Mark S.',
      authorInitials: 'MS',
      originAndActivity: 'United Kingdom • Introductory Dive',
      rating: 5,
      relativeTimeDescription: 'Verified Guest',
      text: 'First time diving, felt 100% safe with our instructor. St. Nikola island was stunning! Highly recommend to any beginners visiting Budva.',
      source: 'fallback',
    },
    {
      id: 'fallback-2',
      authorName: 'Lukas M.',
      authorInitials: 'LM',
      originAndActivity: 'Germany • 2-Tank Boat Dive',
      rating: 5,
      relativeTimeDescription: 'Verified Guest',
      text: 'Did the double dive on the wrecks. Great custom boat, professional crew, top DAN standards, and premium equipment. Best dive center in Montenegro!',
      source: 'fallback',
    },
    {
      id: 'fallback-3',
      authorName: 'Elena R.',
      authorInitials: 'ER',
      originAndActivity: 'France • PADI Open Water Course',
      rating: 5,
      relativeTimeDescription: 'Verified Guest',
      text: 'Took the Open Water course here with my daughter. Best decision of our holiday. Calm instructors, clear explanations, truly a 5-star experience.',
      source: 'fallback',
    },
  ],
};
