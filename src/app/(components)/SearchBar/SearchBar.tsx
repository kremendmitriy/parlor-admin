import { Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
   onSearch: (query: string) => void;
   placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
   onSearch,
   placeholder,
}) => {
   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onSearch(event.target.value);
   };

   return (
      <Box
         sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            mb: 3,
         }}
      >
         <TextField
            fullWidth
            placeholder={placeholder}
            variant="outlined"
            InputProps={{
               startAdornment: <SearchIcon sx={{ mr: 1, color: 'grey.500' }} />,
               sx: { bgcolor: 'grey.800', color: 'white', borderRadius: 1 },
            }}
            onChange={handleSearchChange}
         />
      </Box>
   );
};
