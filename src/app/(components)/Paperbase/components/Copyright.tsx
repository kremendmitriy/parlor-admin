import { Link, Typography } from '@mui/material';

export function Copyright() {
   return (
      <Typography variant="body2" align="center" sx={{ color: '#fff' }}>
         {'Copyright © '}
         <Link color="inherit" href="http://localhost:3000/">
            FlintInc
         </Link>{' '}
         {new Date().getFullYear()}.
      </Typography>
   );
}
