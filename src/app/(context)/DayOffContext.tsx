'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface DayOffContextType {
   dayOffDates: string[];
   setDayOffDates: (dates: string[]) => void;
}

const DayOffContext = createContext<DayOffContextType | undefined>(undefined);

export const DayOffProvider = ({ children }: { children: ReactNode }) => {
   const [dayOffDates, setDayOffDates] = useState<string[]>([]);

   return (
      <DayOffContext.Provider value={{ dayOffDates, setDayOffDates }}>
         {children}
      </DayOffContext.Provider>
   );
};

export const useDayOffContext = () => {
   const context = useContext(DayOffContext);
   if (!context) {
      throw new Error('useDayOffContext must be used within a DayOffProvider');
   }
   return context;
};
