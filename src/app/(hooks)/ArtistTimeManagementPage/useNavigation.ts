import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { formattedDateToEnCa } from '../../(utils)/foramattedDate/formattedDate';

export const useNavigation = (artistId: string | undefined) => {
  const router = useRouter();

  const handleProceed = useCallback(
    (selectedDate: Date | null) => {
      if (!selectedDate || !artistId) return;
      const formattedDate = formattedDateToEnCa(selectedDate);

      router.push(`/artist-list/${artistId}/${formattedDate}`);
    },
    [artistId, router],
  );

  return { handleProceed };
};
