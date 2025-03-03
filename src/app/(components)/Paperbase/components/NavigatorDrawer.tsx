import { Box } from '@mui/material';
import { Navigator } from '../../Navigator/Navigator';

export const NavigatorDrawer = () => (
   <Box component="nav" sx={{ width: { sm: 256 }, flexShrink: { sm: 0 } }}>
      <Navigator />
   </Box>
);
