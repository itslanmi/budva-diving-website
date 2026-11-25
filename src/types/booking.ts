export interface BookingSelection {
  id: string;
  title: string;
  priceEur: number;
  trekksoftItemId: string;
}

export interface BookingFormState {
  date: string;
  departureTime: string;
  participants: string;
}
