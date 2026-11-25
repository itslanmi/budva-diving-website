import { useGoogleReviews } from '@/hooks/useGoogleReviews';

export function ReviewsSection() {
  const { data, isLoading } = useGoogleReviews();
  const { summary, reviews } = data;

  return (
    <div className="reviews-container">
      <div className="reviews-heading-wrap">
        <h3 className="reviews-heading">Loved by Divers Worldwide</h3>

        <div className="trust-banner">
          <span className="trust-stars" aria-label={`${summary.rating} out of 5 stars`}>
            ★★★★★
          </span>
          <span className="trust-text">
            <span>{summary.rating.toFixed(1)} / 5.0</span> {summary.sourceLabel} (
            {summary.totalReviews}+ Reviews)
          </span>
          <span className="reviews-mode-badge">
            {isLoading ? 'Syncing...' : summary.isLiveApi ? 'Live Google API' : 'Verified Guests'}
          </span>
        </div>
      </div>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <article key={review.id} className="review-card">
            <div>
              <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
                {'★'.repeat(Math.max(1, Math.min(5, Math.round(review.rating))))}
              </div>
              <p className="review-quote">&ldquo;{review.text}&rdquo;</p>
            </div>

            <div className="reviewer-meta">
              <div className="reviewer-avatar">
                {review.authorPhotoUrl ? (
                  <img src={review.authorPhotoUrl} alt={review.authorName} loading="lazy" />
                ) : (
                  review.authorInitials
                )}
              </div>
              <div className="reviewer-info">
                <h4>{review.authorName}</h4>
                <p>{review.originAndActivity}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
