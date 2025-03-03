import dayjs from 'dayjs';

export const formattedDate = (date: Date) => {
  return dayjs(date).format('YYYY-MM-DD');
};
