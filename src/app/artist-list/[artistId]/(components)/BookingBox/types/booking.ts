export interface Booking {
  time: string;
  customerName: string;
  customerPhone: string;
  bookingTimeStatus: 'upcoming' | 'canceled' | 'done';
}
