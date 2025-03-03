'use client';

import { AppBar, Box, Toolbar } from '@mui/material';
import { HeaderToolbar } from './Components/HeaderToolbar';
import { HeaderTitle } from './Components/HeaderTitle';
import { usePageTitle } from '@/app/(context)/PageTitleContext';

export const Header = () => {
   const { title } = usePageTitle();

   return (
      <Box padding="0">
         <AppBar color="primary" position="sticky" elevation={0}>
            <Toolbar>
               <HeaderToolbar />
            </Toolbar>
         </AppBar>
         <AppBar
            component="div"
            color="primary"
            position="static"
            elevation={0}
            sx={{ zIndex: 0 }}
         >
            <Toolbar>
               <HeaderTitle title={title} />
            </Toolbar>
         </AppBar>
      </Box>
   );
};
