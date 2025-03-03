'use client';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { item as itemStyle } from '../Styles/ItemStyle';
import { usePageTitle } from '@/app/(context)/PageTitleContext';

export type CategoryChild = {
  id: string;
  icon: React.ReactNode;
  status?: string;
  title?: string;
};

export type CategoryItemProps = {
  item: CategoryChild;
};

export const CategoryItem: React.FC<CategoryItemProps> = ({ item: child }) => {
  const { setTitle } = usePageTitle();

  const handleClick = () => {
    setTitle(child.title || child.id);
  };

  return (
    <ListItem disablePadding>
      <ListItemButton sx={itemStyle} onClick={handleClick}>
        <ListItemIcon>{child.icon}</ListItemIcon>
        <ListItemText>{child.title}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};
