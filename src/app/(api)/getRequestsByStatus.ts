import { UserForm } from '../(types)/UserForm';
import { BASE_URL } from './constants/backLink';

interface RequestProps {
   status: string;
   useStateHandlers?: boolean;
   setData?: (data: UserForm[]) => void;
   setError?: (error: string) => void;
   setLoading?: (loading: boolean) => void;
}

export const getRequestsByStatus = async ({
   status,
   setData,
   setError,
   setLoading,
   useStateHandlers,
}: RequestProps) => {
   if (useStateHandlers && setLoading) setLoading(true);

   try {
      const response = await fetch(`${BASE_URL}/contact-form?status=${status}`);

      if (!response.ok) throw new Error('Failed to fetch data');

      const result = await response.json();

      if (useStateHandlers && setData) {
         setData(result);
      } else {
         return result;
      }
   } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';

      if (useStateHandlers && setError) {
         setError(`Failed to load requests: ${errorMessage}`);
      }
      console.error(errorMessage);
   } finally {
      if (useStateHandlers && setLoading) {
         setLoading(false);
      }
   }
};
