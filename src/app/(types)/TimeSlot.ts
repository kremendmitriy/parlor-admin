export interface TimeSlotProps {
   time: string;
   isBooked: boolean;
   isUnavailable: boolean;
   bookingInfo?: {
      name: string;

      phone: string;
   } | null;
   unavailableReason?: string;
   isSelected?: boolean;
   onClick: () => void;
}
