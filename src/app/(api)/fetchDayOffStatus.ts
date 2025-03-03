import { BASE_URL } from './constants/backLink';

export const fetchDayOffStatus = async (artistId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/day-off/artist/${artistId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch day off status:', error);
    return null;
  }
};
