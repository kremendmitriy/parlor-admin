import { BookingModal } from '../AddBookingModal/BookingModal';
import { BookingData } from './types/bookingData';
import { Box } from '@mui/material';
import { CustomPagination } from '../CustomPagination/CustomPagination';
import {
  StyledBox,
  TableHeader,
  TableRow,
  TableCell,
} from './styles/bookingListStyled';
import { useSortedBookings } from '@/app/(hooks)/ArtistTimeManagementPage/BookingListHooks/useSortedBookings';
import { usePagination } from '@/app/(hooks)/ArtistTimeManagementPage/BookingListHooks/usePagination';

export const BookingList = ({
  bookingData,
}: {
  bookingData: BookingData[];
}) => {
  const sortedBookings = useSortedBookings(bookingData);
  const { page, setPage, paginatedItems } = usePagination(
    sortedBookings.length,
    5,
  );
  const bookings = paginatedItems(sortedBookings);

  return (
    <StyledBox>
      <TableHeader>
        <TableRow>
          {['Time', 'Name', 'Phone'].map((header) => (
            <TableCell key={header}>{header}</TableCell>
          ))}
        </TableRow>
      </TableHeader>

      {bookings.map((booking, index) => (
        <TableRow key={index} status={booking.bookingTimeStatus}>
          <TableCell>{`${booking.startTime}-${booking.endTime}`}</TableCell>
          <TableCell>{booking.customerName}</TableCell>
          <TableCell>{booking.customerPhone}</TableCell>
        </TableRow>
      ))}
      <BookingModal />
      {sortedBookings.length !== 0 && (
        <Box sx={{ marginTop: 'auto' }}>
          <CustomPagination
            page={page}
            rowsPerPage={5}
            count={sortedBookings.length}
            onPageChange={setPage}
          />
        </Box>
      )}
    </StyledBox>
  );
};
