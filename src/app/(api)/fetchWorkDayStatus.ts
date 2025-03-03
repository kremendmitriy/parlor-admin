import { BASE_URL } from './constants/backLink';

export const fetchWorkDayStatus = async (artistId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/booking/artist/${artistId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch booking status:', error);
    return null;
  }
};
