import { useCallback, useEffect, useState } from 'react';

import { fetchWorkDayStatus } from '@/app/(api)/fetchWorkDayStatus';
import { fetchDayOffStatus } from '@/app/(api)/fetchDayOffStatus';

interface DayObject {
  artistId: string;
  createdAt: string;
  date: string;
  id: string;
  status: string;
  updatedAt: string;
}

export const useGetDatesByStatus = (artistId: string) => {
  const [dayStatuses, setDayStatuses] = useState<DayObject[]>([]);
  const [dayOffs, setDayOffs] = useState<DayObject[]>([]);

  const loadDayStatuses = useCallback(async () => {
    try {
      const [dataOffDates, dataBookedDates] = await Promise.all([
        fetchDayOffStatus(artistId),
        fetchWorkDayStatus(artistId),
      ]);
      setDayOffs(dataOffDates);
      setDayStatuses([...dataOffDates, ...dataBookedDates]);
    } catch (error) {
      console.error('Error loading day off dates:', error);
    }
  }, [artistId]);

  useEffect(() => {
    if (artistId) loadDayStatuses();
  }, [artistId, loadDayStatuses]);

  return { dayStatuses, dayOffs, loadDayStatuses };
};
