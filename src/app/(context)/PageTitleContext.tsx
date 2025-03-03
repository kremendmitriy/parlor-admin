'use client';

import React, { createContext, useContext, useState } from 'react';

type PageTitleContextType = {
   title: string;
   setTitle: (newTitle: string) => void;
};

const PageTitleContext = createContext<PageTitleContextType | undefined>(
   undefined
);

export const PageTitleProvider: React.FC<{ children: React.ReactNode }> = ({
   children,
}) => {
   const [title, setTitle] = useState('New Requests');
   return (
      <PageTitleContext.Provider value={{ title, setTitle }}>
         {children}
      </PageTitleContext.Provider>
   );
};

export const usePageTitle = () => {
   const context = useContext(PageTitleContext);
   if (!context) {
      throw new Error('usePageTitle must be used within a PageTitleProvider');
   }
   return context;
};
