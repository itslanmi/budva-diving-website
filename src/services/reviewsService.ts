import { fallbackReviewsData } from '@/data/fallbackReviews';
import type { GoogleReview, ReviewsResponse } from '@/types/review';

function isValidReviewsResponse(payload: unknown): payload is ReviewsResponse {
  if (!payload || typeof payload !== 'object') return false;
  const candidate = payload as Partial<ReviewsResponse>;
  return (
    Boolean(candidate.summary) &&
    typeof candidate.summary?.rating === 'number' &&
    Array.isArray(candidate.reviews) &&
    candidate.reviews.length > 0
  );
}

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

/**
 * Fetches Google Reviews from a configured backend/serverless proxy (`VITE_REVIEWS_API_URL`).
 * When no endpoint is configured (default local/static mode) or if the endpoint fails,
 * returns the curated fallback reviews so the UI always renders cleanly without API keys.
 */
export async function fetchGoogleReviews(signal?: AbortSignal): Promise<ReviewsResponse> {
  const apiUrl = import.meta.env.VITE_REVIEWS_API_URL?.trim();
  if (!apiUrl) {
    return fallbackReviewsData;
  }

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      signal,
    });

    if (!response.ok) {
      return fallbackReviewsData;
    }

    const data: unknown = await response.json();
    if (!isValidReviewsResponse(data)) {
      return fallbackReviewsData;
    }

    const normalizedReviews: GoogleReview[] = data.reviews.map((review, index) => ({
      ...review,
      id: review.id || `google-review-${index}`,
      authorInitials: review.authorInitials || getInitials(review.authorName || 'Guest'),
      source: review.source || 'google',
    }));

    return {
      summary: {
        ...data.summary,
        isLiveApi: true,
      },
      reviews: normalizedReviews,
    };
  } catch {
    return fallbackReviewsData;
  }
}
