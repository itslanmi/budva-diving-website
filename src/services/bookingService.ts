import type { BookingFormState, BookingSelection } from '@/types/booking';

export interface CheckoutResult {
  mode: 'live' | 'preview';
  redirectUrl?: string;
  message: string;
}

/**
 * Resolves a TrekkSoft checkout action.
 * If `VITE_TREKKSOFT_MERCHANT_URL` is configured, builds a deep-link URL with the selected
 * item and schedule parameters; otherwise returns a clean preview confirmation.
 */
export function buildTrekksoftCheckout(
  selection: BookingSelection,
  form: BookingFormState,
): CheckoutResult {
  const merchantUrl = import.meta.env.VITE_TREKKSOFT_MERCHANT_URL?.trim();

  if (merchantUrl) {
    const url = new URL(merchantUrl);
    url.searchParams.set('item', selection.trekksoftItemId);
    url.searchParams.set('date', form.date);
    url.searchParams.set('slot', form.departureTime);
    url.searchParams.set('guests', form.participants);

    return {
      mode: 'live',
      redirectUrl: url.toString(),
      message: 'Redirecting to TrekkSoft secure checkout...',
    };
  }

  return {
    mode: 'preview',
    message: `Preview Mode: "${selection.title}" on ${form.date} (${form.departureTime}, ${form.participants}) is ready for TrekkSoft integration. Configure VITE_TREKKSOFT_MERCHANT_URL in .env to enable live checkout.`,
  };
}
