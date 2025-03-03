'use client';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { NavigatorHeader } from './Components/NavigatorHeader';
import { CategorySection } from './Components/CategorySection';
import { categories } from './Constants/Categories';

export const Navigator = () => {
   return (
      <Drawer variant="permanent">
         <List disablePadding>
            <NavigatorHeader />
            {categories.map((category) => (
               <CategorySection key={category.id} category={category} />
            ))}
         </List>
      </Drawer>
   );
};
