import { useDayOffState } from './useDateOffState';
import { useDayOffActions } from './useDayOffActions';
import { useNavigation } from './useNavigation';

export const useDayOffHandler = (artistId: string) => {
   const {
      selectedDate,
      isModalOpen,
      isDayOffChecked,
      handleDateChange,
      handleDayOffCheckboxChange,
      closeModal,
   } = useDayOffState();

   const { handleConfirmDayOff } = useDayOffActions(artistId, closeModal);
   const { handleProceed } = useNavigation(artistId);

   return {
      selectedDate,
      isModalOpen,
      isDayOffChecked,
      handleDateChange,
      handleDayOffCheckboxChange,
      handleConfirmDayOff,
      handleProceed,
      closeModal,
   };
};
