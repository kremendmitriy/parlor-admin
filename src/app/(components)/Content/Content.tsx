'use client';

import { Box } from '@mui/material';
import { RequestsList } from './Components/RequestList';

interface ContentProps {
   status: string;
}

export const Content: React.FC<ContentProps> = ({ status }) => {
   return (
      <Box
         sx={{
            bgcolor: 'grey.900',
            minHeight: '100vh',
            p: 3,
         }}
      >
         <RequestsList usersRequestsStatus={status} />
      </Box>
   );
};
