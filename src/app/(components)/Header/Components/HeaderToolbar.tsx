import { Box, IconButton, Avatar } from '@mui/material';
import { Notification } from './Notification';

export const HeaderToolbar = () => {
   return (
      <Box
         display="flex"
         alignItems="center"
         width="100%"
         gap={1}
         flexWrap="wrap"
      >
         <Box flexGrow={1} />
         <Notification />
         <Box>
            <IconButton color="inherit" sx={{ p: 0.5 }}>
               <Avatar src="/FlintIncImg.svg" alt="FlintInc Avatar" />
            </IconButton>
         </Box>
      </Box>
   );
};
