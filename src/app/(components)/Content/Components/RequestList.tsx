import {
   Box,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Typography,
   Paper,
} from '@mui/material';
import { ClientMessageDialog } from '../../RequestMessage/RequestMessage';
import { useFindRequestsByStatus } from '@/app/(hooks)/useUserRequestsByStatus';
import { useUserModal } from '@/app/(hooks)/useUserModal';
import { filterRequests } from '../Utils/filterRequests';
import { formattedDate } from '../Utils/formatDate';
import { ActionButtons } from './ActionButtons';
import { useState } from 'react';
import { SearchBar } from '../../SearchBar/SearchBar';
import Loader from '../../Loader/Loader';

interface RequestsListProps {
   usersRequestsStatus: string;
}

export const RequestsList: React.FC<RequestsListProps> = ({
   usersRequestsStatus,
}) => {
   const [searchQuery, setSearchQuery] = useState('');

   const handleSearch = (query: string) => {
      setSearchQuery(query);
   };

   const { data, loading, error } =
      useFindRequestsByStatus(usersRequestsStatus);
   const { isOpen, message, openDialog, closeDialog } = useUserModal();

   const filteredData = filterRequests(data, searchQuery);

   if (error) return <Typography>{error}</Typography>;
   if (loading) return <Loader />;

   return (
      <Box>
         <ClientMessageDialog
            clientMessage={message}
            isOpen={isOpen}
            onClose={closeDialog}
         />
         {filteredData.length === 0 ? (
            <Typography align="center" sx={{ color: '#fff', mt: 5 }}>
               No requests available
            </Typography>
         ) : (
            <Box>
               <SearchBar
                  onSearch={handleSearch}
                  placeholder={
                     'Search request by name, email, or phone number...'
                  }
               />

               <TableContainer
                  component={Paper}
                  sx={{
                     mt: 2,
                     bgcolor: 'grey.800',
                     borderRadius: 1,
                     overflow: 'hidden',
                  }}
                  elevation={0}
               >
                  <Table>
                     <TableHead>
                        <TableRow
                           sx={{
                              bgcolor: 'grey.700',
                           }}
                        >
                           <TableCell align="center" sx={{ color: 'grey.400' }}>
                              #
                           </TableCell>
                           <TableCell sx={{ color: 'grey.400' }}>
                              Name
                           </TableCell>
                           <TableCell sx={{ color: 'grey.400' }}>
                              Phone
                           </TableCell>
                           <TableCell sx={{ color: 'grey.400' }}>
                              Email
                           </TableCell>
                           <TableCell sx={{ color: 'grey.400' }}>
                              Date
                           </TableCell>
                           <TableCell align="right" sx={{ color: 'grey.400' }}>
                              Actions
                           </TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {filteredData.map((form, index) => (
                           <TableRow
                              key={form.id}
                              sx={{
                                 bgcolor: 'grey.800',
                              }}
                           >
                              <TableCell
                                 align="center"
                                 sx={{
                                    color: 'white',
                                    borderColor: 'grey.700',
                                 }}
                              >
                                 {index + 1}
                              </TableCell>
                              <TableCell
                                 sx={{
                                    color: 'white',
                                    borderColor: 'grey.700',
                                 }}
                              >
                                 {form.name}
                              </TableCell>
                              <TableCell
                                 sx={{
                                    color: 'white',
                                    borderColor: 'grey.700',
                                 }}
                              >
                                 {form.phone}
                              </TableCell>
                              <TableCell
                                 sx={{
                                    color: 'white',
                                    borderColor: 'grey.700',
                                 }}
                              >
                                 {form.email}
                              </TableCell>
                              <TableCell
                                 sx={{
                                    color: 'white',
                                    borderColor: 'grey.700',
                                 }}
                              >
                                 {formattedDate(new Date(form.createdAt))}
                              </TableCell>
                              <TableCell
                                 align="right"
                                 sx={{ borderColor: 'grey.700' }}
                              >
                                 {ActionButtons(
                                    form.id,
                                    form.status,
                                    form.message,
                                    openDialog
                                 )}
                              </TableCell>
                           </TableRow>
                        ))}
                     </TableBody>
                  </Table>
               </TableContainer>
            </Box>
         )}
      </Box>
   );
};
