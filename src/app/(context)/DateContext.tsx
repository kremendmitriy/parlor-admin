'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { formattedDateToEnCa } from '../(utils)/foramattedDate/formattedDate';

interface DateContextType {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  formattedDate: string;
}

const DateContext = createContext<DateContextType | undefined>(undefined);

export const DateProvider = ({ children }: { children: ReactNode }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const formattedDate = formattedDateToEnCa(selectedDate);

  return (
    <DateContext.Provider
      value={{ selectedDate, setSelectedDate, formattedDate }}
    >
      {children}
    </DateContext.Provider>
  );
};

export const useDate = () => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error('useDate must be used within a DateProvider');
  }
  return context;
};
