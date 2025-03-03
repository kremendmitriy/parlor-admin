export interface BookingData {
  bookingTimeStatus: 'upcoming' | 'done' | 'canceled';
  customerName: string;
  customerPhone: string;
  time: string;
}
