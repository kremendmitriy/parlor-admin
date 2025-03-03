import { useState, useEffect } from 'react';
import { getRequestsByStatus } from '../(api)/getRequestsByStatus';
import { UserForm } from '../(types)/UserForm';

export const useFindRequestsByStatus = (status: string) => {
   const [data, setData] = useState<UserForm[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchData = async () => {
         await getRequestsByStatus({
            status,
            useStateHandlers: true,
            setData,
            setError,
            setLoading,
         });
      };
      fetchData();
   }, [status]);

   return { data, loading, error };
};
