'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import { Box } from '@mui/material';
import { CalendarWrapper } from './(components)/Calendar/calendar';

import { addDayOffStatus } from '@/app/(api)/dayOff/addDayOffStatus';
import { deleteDayOff } from '@/app/(api)/dayOff/deleteDayOff';

import { useGetDatesByStatus } from '@/app/(hooks)/ArtistTimeManagementPage/useGetDatesByStatus';

import { useDate } from '@/app/(context)/DateContext';
import { DayOffActionButton } from './(components)/Buttons/dayOffActionButton';
import { BookingList } from './(components)/BookingBox/components/BookingList/BookingList';
import { fetchBookingListForDay } from '@/app/(api)/booking/fetchBookingListForDay';
import { BoxContainer, InnerBox } from './styles/pageStyled';
import { useQuery } from '@tanstack/react-query';

const MasterCalendarPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { artistId } = useParams<{ artistId: string }>();
  if (!artistId) {
    throw new Error('artistId is missing in the route parameters.');
  }

  const { setSelectedDate, formattedDate } = useDate();
  const { dayStatuses, dayOffs, loadDayStatuses } =
    useGetDatesByStatus(artistId);

  const handleDayOffAction = async (action: 'add' | 'delete') => {
    if (!formattedDate || !artistId) return;
    setIsSubmitting(true);
    try {
      if (action === 'add') await addDayOffStatus(artistId, formattedDate);
      if (action === 'delete') await deleteDayOff(artistId, formattedDate);
      await loadDayStatuses();
    } catch (error) {
      console.error(`Error during ${action} day off:`, error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const {
    data: bookingData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['bookings', artistId, formattedDate],
    queryFn: () => fetchBookingListForDay(artistId, formattedDate),
    enabled: !!artistId && !!formattedDate,
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading bookings</p>;

  const isDayOff = dayOffs.some((dayOff) => dayOff.date === formattedDate);

  return (
    <BoxContainer>
      <InnerBox>
        <CalendarWrapper
          selectedDate={formattedDate}
          dayStatuses={dayStatuses}
          setSelectedDate={setSelectedDate}
        />
        <BookingList bookingData={bookingData} />
        <Box>
          <DayOffActionButton
            actionType={isDayOff ? 'delete' : 'add'}
            isSubmitting={isSubmitting}
            isDayOff={isDayOff}
            formattedDate={formattedDate}
            onAction={handleDayOffAction}
          />
        </Box>
      </InnerBox>
    </BoxContainer>
  );
};

export default MasterCalendarPage;
