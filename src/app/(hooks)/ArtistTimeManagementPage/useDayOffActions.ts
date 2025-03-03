import { useCallback } from 'react';
import { formattedDateToEnCa } from '../../(utils)/foramattedDate/formattedDate';

export const useDayOffActions = (
   artistId: string | undefined,
   onSuccess: () => void
) => {
   const handleConfirmDayOff = useCallback(
      async (selectedDate: Date | null) => {
         if (!selectedDate || !artistId) return;

         const formattedDate = formattedDateToEnCa(selectedDate);

         try {
            const response = await fetch(`http://localhost:5000/day-off`, {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({ artistId, date: formattedDate }),
            });

            if (response.ok) {
               onSuccess();
            } else {
               console.error('Failed to mark day off:', await response.text());
            }
         } catch (error) {
            console.error('Error occurred while marking day off:', error);
         }
      },
      [artistId, onSuccess]
   );

   return { handleConfirmDayOff };
};
