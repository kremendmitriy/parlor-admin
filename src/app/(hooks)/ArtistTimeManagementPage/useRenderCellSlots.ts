import { generateTimeSlots } from '../../artist-list/(utils)/generateTimeSlots';
import { TimeSlotProps } from '../../(types)/TimeSlot';

import { useState, useEffect } from 'react';

export const useRenderCellSlots = (
   artistId: string,
   date: string,
   start: string = '09:00',
   end: string = '20:00'
) => {
   const [timeCells, setTimeCells] = useState<TimeSlotProps[]>(
      generateTimeSlots(start, end)
   );
   const [selectedTime, setSelectedTime] = useState<string | null>(null);

   useEffect(() => {
      if (!artistId || !date) return;

      const fetchStatuses = async () => {
         try {
            const response = await fetch(
               `http://localhost:5000/statuses/artist/${artistId}?date=${date}`
            );
            if (!response.ok) throw new Error('Failed to fetch statuses');
            const { bookings, unavailabilities } = await response.json();

            const updatedSlots = generateTimeSlots(start, end).map((cell) => {
               const booking = bookings.find(
                  (b) => b.time === cell.time && b.status === 'booked'
               );
               const unavailability = unavailabilities.find(
                  (u) => u.time === cell.time && u.status === 'unavailable'
               );

               return {
                  ...cell,
                  isBooked: !!booking,
                  isUnavailable: !!unavailability,
                  bookingInfo: booking
                     ? {
                          name: booking.customerName,
                          phone: booking.customerPhone,
                       }
                     : null,
                  unavailableReason: unavailability
                     ? unavailability.reason
                     : null,
               };
            });

            setTimeCells(updatedSlots);
         } catch (error) {
            console.error('Failed to fetch statuses:', error);
         }
      };

      fetchStatuses();
   }, [artistId, date, start, end]);

   const handleTimeCellClick = (time: string) => {
      setSelectedTime(time);
   };

   return { timeCells, setTimeCells, selectedTime, handleTimeCellClick };
};
