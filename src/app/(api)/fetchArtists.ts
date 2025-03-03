import { BASE_URL } from './constants/backLink';

export const fetchArtists = async () => {
   const response = await fetch(`${BASE_URL}/artist`);
   if (!response.ok) throw new Error('Failed to fetch artists');
   return response.json();
};
