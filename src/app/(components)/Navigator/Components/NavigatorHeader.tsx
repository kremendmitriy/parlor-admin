'use client';

import ListItem from '@mui/material/ListItem';
import { item, itemCategory } from '../Styles/ItemStyle';

export const NavigatorHeader: React.FC = () => (
   <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
      Admin FlintInc
   </ListItem>
);
