import { BASE_URL } from '../constants/backLink';

interface Booking {
  custumerName: string;
  customerPhone: string;
  сustomerEmail?: string;
  date: string;
  startTime: string;
  endTime: string;
  tattooType: string;
}

export const addBooking = async (booking: Booking) => {
  try {
    const response = await fetch(`${BASE_URL}/booking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(booking),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to add booking');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error adding booking:', error.message);
    } else {
      console.error('Error adding booking:', error);
    }
    throw error;
  }
};
