import { TimeSlotProps } from '@/app/(types)/TimeSlot';

export const generateTimeSlots = (
   start: string,
   end: string
): TimeSlotProps[] => {
   const slots: TimeSlotProps[] = [];
   const currentTime = new Date(`2024-01-01T${start}:00`);
   const endTime = new Date(`2024-01-01T${end}:00`);

   while (currentTime <= endTime) {
      const formattedTime = currentTime.toTimeString().slice(0, 5);
      slots.push({
         time: formattedTime,
         isBooked: false,
         isUnavailable: false,
         onClick: function (): void {
            throw new Error('Function not implemented.');
         },
      });
      currentTime.setMinutes(currentTime.getMinutes() + 60);
   }

   return slots;
};
