export const formattedDateToEnCa = (date: Date) => {
   return new Date(date.setHours(0, 0, 0, 0)).toLocaleDateString('en-CA');
};
