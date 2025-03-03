import { BASE_URL } from '../constants/backLink';

export const addDayOffStatus = async (artistId: string, date: string) => {
  try {
    const response = await fetch(`${BASE_URL}/day-off/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ artistId, date }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to toggle day off status:', error);
  }
};
