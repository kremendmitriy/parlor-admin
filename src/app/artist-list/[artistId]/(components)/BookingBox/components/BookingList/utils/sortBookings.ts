import { Booking } from '../../../types/booking';

export const sortBookings = (bookings?: Booking[]) => {
  if (!Array.isArray(bookings)) return [];

  return [...bookings].sort((a, b) => {
    const parseTime = (time?: string) => {
      if (!time) return new Date(0);

      const startTime = time.split('-')[0];
      return new Date(`1970-01-01T${startTime}`);
    };

    return parseTime(a.time).getTime() - parseTime(b.time).getTime();
  });
};
