import { BASE_URL } from './constants/backLink';

export const updateUserRequestStatus = async (id: number, status: string) => {
   try {
      const response = await fetch(`${BASE_URL}/contact-form/${id}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ status }),
      });

      if (!response.ok) {
         throw new Error(`Failed to update status for form ${id}`);
      }
   } catch (error) {
      console.error('Error updating status:', error);
   }
};
