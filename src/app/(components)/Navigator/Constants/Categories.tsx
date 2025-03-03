import {
   NewReleases,
   DoneAll,
   HourglassEmpty,
   Palette,
} from '@mui/icons-material';

export const categories = [
   {
      id: 'Requests',
      children: [
         {
            id: 'new-requests',
            icon: <NewReleases />,
            title: 'New requests',

            status: 'new-requests',
         },
         {
            id: 'processed-requests',
            icon: <DoneAll />,
            title: 'Processed requests',

            status: 'processed',
         },
         {
            id: 'requests-in-progress',
            icon: <HourglassEmpty />,
            title: 'Requests in progress',

            status: 'in_progress',
         },
      ],
   },
   {
      id: 'Time management',
      children: [
         {
            id: 'artist-list',
            icon: <Palette />,

            title: 'Artist Slots',
         },
      ],
   },
];
