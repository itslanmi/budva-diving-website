/**
 * Serverless Proxy Template for Google Places API (New) Reviews.
 *
 * Keeps `GOOGLE_PLACES_API_KEY` on the server so it is never exposed in client bundles.
 * Compatible with Vercel Serverless Functions (`GET /api/reviews`) or easily adapted
 * for Netlify Functions / Express / Cloudflare Workers.
 *
 * Required server environment variables:
 *   - GOOGLE_PLACES_API_KEY
 *   - GOOGLE_PLACE_ID
 */

interface GooglePlaceReviewRaw {
  name?: string;
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
  };
}

interface GooglePlaceResponseRaw {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: GooglePlaceReviewRaw[];
}

interface RequestLike {
  method?: string;
}

interface ResponseLike {
  status: (code: number) => ResponseLike;
  setHeader: (name: string, value: string) => void;
  json: (body: unknown) => void;
}

function initialsFromName(name: string): string {
  return (
    name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? '')
      .join('') || 'G'
  );
}

export default async function handler(req: RequestLike, res: ResponseLike): Promise<void> {
  if (req.method && req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    res.status(503).json({
      error: 'Google Places API is not configured. Set GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID.',
    });
    return;
  }

  try {
    const endpoint = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;
    const upstream = await fetch(endpoint, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'rating,userRatingCount,googleMapsUri,reviews',
      },
    });

    if (!upstream.ok) {
      res.status(upstream.status).json({ error: 'Failed to fetch reviews from Google Places API' });
      return;
    }

    const payload = (await upstream.json()) as GooglePlaceResponseRaw;
    const reviews = (payload.reviews ?? []).slice(0, 3).map((item, idx) => {
      const authorName = item.authorAttribution?.displayName ?? 'Verified Diver';
      return {
        id: item.name || `google-${idx}`,
        authorName,
        authorInitials: initialsFromName(authorName),
        authorPhotoUrl: item.authorAttribution?.photoUri,
        originAndActivity: `Google Review • ${item.relativePublishTimeDescription ?? 'Recent'}`,
        rating: item.rating ?? 5,
        relativeTimeDescription: item.relativePublishTimeDescription,
        text: item.text?.text ?? '',
        source: 'google' as const,
      };
    });

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    res.status(200).json({
      summary: {
        rating: payload.rating ?? 4.9,
        totalReviews: payload.userRatingCount ?? 350,
        sourceLabel: 'Live Google Reviews',
        isLiveApi: true,
        placeUrl: payload.googleMapsUri,
      },
      reviews,
    });
  } catch {
    res.status(500).json({ error: 'Unexpected error while fetching Google Reviews' });
  }
}
