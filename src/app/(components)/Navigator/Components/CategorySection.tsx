'use client';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { CategoryItem } from './CategoryItem';
import Link from 'next/link';

export type Category = {
   id: string;
   children: {
      id: string;
      icon: React.ReactNode;
      status?: string;
      title?: string;
   }[];
};

export type CategorySectionProps = {
   category: Category;
};

export const CategorySection: React.FC<CategorySectionProps> = ({
   category,
}) => (
   <Box>
      <ListItem sx={{ py: 2, px: 3 }}>
         <ListItemText sx={{ color: '#fff' }}>{category.id}</ListItemText>
      </ListItem>
      {category.children.map((child) => (
         <Link href={`/${child.id}`} key={child.id}>
            <CategoryItem item={child} />
         </Link>
      ))}
      <Divider sx={{ mt: 2 }} />
   </Box>
);
