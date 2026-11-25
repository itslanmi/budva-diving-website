import { useEffect, useState } from 'react';
import { buildTrekksoftCheckout } from '@/services/bookingService';
import type { BookingFormState, BookingSelection } from '@/types/booking';

interface BookingModalProps {
  selection: BookingSelection | null;
  onClose: () => void;
}

export function BookingModal({ selection, onClose }: BookingModalProps) {
  const [form, setForm] = useState<BookingFormState>({
    date: '2026-06-15',
    departureTime: 'Morning Trip (09:30 – 12:30)',
    participants: '1 Person',
  });
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  useEffect(() => {
    setFeedbackMessage(null);
  }, [selection]);

  useEffect(() => {
    if (!selection) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selection, onClose]);

  if (!selection) {
    return null;
  }

  const handleCheckout = () => {
    const result = buildTrekksoftCheckout(selection, form);
    if (result.mode === 'live' && result.redirectUrl) {
      window.open(result.redirectUrl, '_blank', 'noopener,noreferrer');
      onClose();
      return;
    }
    setFeedbackMessage(result.message);
  };

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal-window">
        <div className="modal-header">
          <h3 id="booking-modal-title">🔒 TrekkSoft Secure Booking</h3>
          <button
            type="button"
            className="btn-modal-close"
            onClick={onClose}
            aria-label="Close booking dialog"
          >
            &times;
          </button>
        </div>

        <div className="modal-body">
          <h4 className="modal-activity-title">{selection.title}</h4>
          <div className="modal-activity-price">Price: From €{selection.priceEur} per person</div>

          <div className="modal-form-group">
            <label htmlFor="booking-date">Select Date:</label>
            <input
              id="booking-date"
              type="date"
              className="modal-input"
              value={form.date}
              onChange={(e) => setForm((prev) => ({ ...prev, date: e.target.value }))}
            />
          </div>

          <div className="modal-form-group">
            <label htmlFor="booking-slot">Preferred Departure Time:</label>
            <select
              id="booking-slot"
              className="modal-select"
              value={form.departureTime}
              onChange={(e) => setForm((prev) => ({ ...prev, departureTime: e.target.value }))}
            >
              <option>Morning Trip (09:30 – 12:30)</option>
              <option>Afternoon Trip (14:00 – 17:00)</option>
            </select>
          </div>

          <div className="modal-form-group">
            <label htmlFor="booking-guests">Number of Participants:</label>
            <select
              id="booking-guests"
              className="modal-select"
              value={form.participants}
              onChange={(e) => setForm((prev) => ({ ...prev, participants: e.target.value }))}
            >
              <option>1 Person</option>
              <option>2 People</option>
              <option>3 People</option>
              <option>4 People (Small Group)</option>
              <option>5+ People (Private Group)</option>
            </select>
          </div>

          <div className="trekksoft-secure-note">
            <span>🛡️</span>
            <span>
              Free cancellation up to 24 hours before trip. Instant TrekkSoft confirmation voucher
              via email.
            </span>
          </div>

          {feedbackMessage && <div className="modal-feedback-banner">{feedbackMessage}</div>}

          <button type="button" className="btn-modal-checkout" onClick={handleCheckout}>
            Continue to TrekkSoft Payment ›
          </button>
        </div>
      </div>
    </div>
  );
}
