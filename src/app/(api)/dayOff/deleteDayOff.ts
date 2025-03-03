import { BASE_URL } from '../constants/backLink';

export const deleteDayOff = async (artistId: string, date: string) => {
  try {
    await fetch(`${BASE_URL}/day-off/${artistId}/${date}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Failed to delete day off status:', error);
  }
};
