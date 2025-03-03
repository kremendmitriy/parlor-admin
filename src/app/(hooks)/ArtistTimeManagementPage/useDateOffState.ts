import { useDate } from '@/app/(context)/DateContext';
import { useState, useCallback } from 'react';
import { Value } from 'react-calendar/src/shared/types.js';

export const useDayOffState = () => {
   const { selectedDate, setSelectedDate } = useDate();
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isDayOffChecked, setIsDayOffChecked] = useState(false);

   const handleDateChange = useCallback(
      (date: Value) => {
         if (Array.isArray(date)) {
            setSelectedDate(date[0]);
         } else {
            setSelectedDate(date);
         }
      },
      [setSelectedDate]
   );

   const handleDayOffCheckboxChange = useCallback((checked: boolean) => {
      setIsDayOffChecked(checked);
      if (checked) setIsModalOpen(true);
   }, []);

   const closeModal = useCallback(() => {
      setIsModalOpen(false);
      setIsDayOffChecked(false);
   }, []);

   return {
      selectedDate,
      isModalOpen,
      isDayOffChecked,
      handleDateChange,
      handleDayOffCheckboxChange,
      closeModal,
   };
};
