interface artists {
   id: string;
   firstName: string;
   lastName: string;
   nickName: string;
   description: string;
   artistImageUrl: string;
}

export const artistsFilter = (artistsList: artists[], searchQuery: string) => {
   return artistsList.filter(
      (artist) =>
         artist.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
         artist.nickName.toLowerCase().includes(searchQuery.toLowerCase())
   );
};
