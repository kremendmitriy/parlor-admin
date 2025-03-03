import { BASE_URL } from './../constants/backLink';

export const fetchBookingListForDay = async (
  artistId: string,
  formattedDate: string,
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/booking?artistId=${artistId}&date=${formattedDate}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};
