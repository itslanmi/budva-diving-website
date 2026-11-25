import { useEffect, useState } from 'react';
import { fallbackReviewsData } from '@/data/fallbackReviews';
import { fetchGoogleReviews } from '@/services/reviewsService';
import type { ReviewsResponse } from '@/types/review';

interface UseGoogleReviewsState {
  data: ReviewsResponse;
  isLoading: boolean;
}

export function useGoogleReviews(): UseGoogleReviewsState {
  const [data, setData] = useState<ReviewsResponse>(fallbackReviewsData);
  const [isLoading, setIsLoading] = useState<boolean>(
    Boolean(import.meta.env.VITE_REVIEWS_API_URL?.trim()),
  );

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_REVIEWS_API_URL?.trim();
    if (!apiUrl) {
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();
    setIsLoading(true);

    fetchGoogleReviews(controller.signal)
      .then((result) => {
        setData(result);
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      });

    return () => controller.abort();
  }, []);

  return { data, isLoading };
}
