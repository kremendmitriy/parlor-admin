import { Box, Typography } from '@mui/material';

interface HeaderTitleProps {
   title: string;
}

export const HeaderTitle: React.FC<HeaderTitleProps> = ({ title }) => {
   return (
      <Box
         display="flex"
         alignItems="center"
         width="100%"
         gap={1}
         flexWrap="wrap"
      >
         <Box flexGrow={1}>
            <Typography color="inherit" variant="h5" component="h1">
               {title}
            </Typography>
         </Box>
      </Box>
   );
};
