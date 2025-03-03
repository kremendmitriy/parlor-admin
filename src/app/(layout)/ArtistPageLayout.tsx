import { DayOffProvider } from '../(context)/DayOffContext';
import { DateProvider } from '@/app/(context)/DateContext';

import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => (
  <DateProvider>
    <DayOffProvider>{children}</DayOffProvider>
  </DateProvider>
);

export default Layout;
