import { getRequestsByStatus } from '@/app/(api)/getRequestsByStatus';
import { useEffect, useState } from 'react';
import { Box, Tooltip, IconButton, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

export const Notification = () => {
   // TODO: make hook
   const [notificationCount, setNotificationCount] = useState(0);

   useEffect(() => {
      const fetchNewRequests = async () => {
         try {
            const requests = await getRequestsByStatus({
               status: 'new',
               useStateHandlers: false,
            });
            setNotificationCount(requests.length);
         } catch (error) {
            console.error('Request error', error);
         }
      };

      fetchNewRequests();
   }, []);

   return (
      <Box>
         <Tooltip
            title={`Alerts • ${
               notificationCount === 0
                  ? 'No alerts'
                  : `${notificationCount} new orders`
            }`}
         >
            <IconButton color="inherit">
               <Badge
                  badgeContent={
                     notificationCount > 0 ? notificationCount : null
                  }
                  color="error"
               >
                  <NotificationsIcon />
               </Badge>
            </IconButton>
         </Tooltip>
      </Box>
   );
};
