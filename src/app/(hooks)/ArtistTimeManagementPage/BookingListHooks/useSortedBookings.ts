import { BookingData } from '@/app/artist-list/[artistId]/(components)/BookingBox/components/BookingList/types/bookingData';
import { sortBookings } from '@/app/artist-list/[artistId]/(components)/BookingBox/components/BookingList/utils/sortBookings';
import { useMemo } from 'react';

export const useSortedBookings = (bookingData: BookingData[]) => {
  return useMemo(() => sortBookings(bookingData), [bookingData]);
};
