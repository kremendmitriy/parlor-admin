import { formattedDate } from '@/app/(components)/Content/Utils/formatDate';

export const isDateInArray = (
   date: Date,
   datesArray: { date: string }[]
): boolean => {
   return datesArray.some(
      (storedObject) =>
         formattedDate(date) === formattedDate(new Date(storedObject.date))
   );
};
