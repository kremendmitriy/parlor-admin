import { fetchBookingListForDay } from '@/app/(api)/booking/fetchBookingListForDay';
import { useQuery } from '@tanstack/react-query';

export const useBookedTimes = (artistId: string, formattedDate: string) => {
  return useQuery({
    queryKey: ['bookings', artistId, formattedDate],
    queryFn: () => fetchBookingListForDay(artistId, formattedDate),
    staleTime: 1000 * 60 * 5,
  });
};
