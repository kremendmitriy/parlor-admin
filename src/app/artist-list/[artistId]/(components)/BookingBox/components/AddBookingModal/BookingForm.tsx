'use client';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, DialogActions } from '@mui/material';
import { ButtonCancelStyled, ButtonStyledCustom } from './styles/modalStyled';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextFieldComponent } from './TextFieldComponent';
import { TimePickerField } from './TimePickerField';
import { useBookedTimes } from '@/app/(hooks)/ArtistTimeManagementPage/BookingFormHooks/useBookedTimes';
import { useBookingForm } from '@/app/(hooks)/ArtistTimeManagementPage/BookingFormHooks/useBookingForm';
import { useDate } from '@/app/(context)/DateContext';
import { useParams } from 'next/navigation';

interface BookingFormProps {
  onClose: () => void;
}

export const BookingForm = ({ onClose }: BookingFormProps) => {
  const params = useParams();
  const artistId = params.artistId as string;

  const { formattedDate } = useDate();
  const bookedTimes = useBookedTimes(artistId, formattedDate);
  const { control, register, handleSubmit, errors, isTimeDisabled, onSubmit } =
    useBookingForm(artistId, formattedDate, bookedTimes, onClose);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFieldComponent
          label="Customer Name"
          register={register}
          name="customerName"
          errors={errors}
        />
        <TextFieldComponent
          label="Customer Phone"
          register={register}
          name="customerPhone"
          errors={errors}
        />
        <TextFieldComponent
          label="Tattoo Type"
          register={register}
          name="tattooType"
          errors={errors}
        />

        <Box sx={{ display: 'flex', gap: 2 }}>
          <TimePickerField
            name="startTime"
            control={control}
            isTimeDisabled={isTimeDisabled}
            errors={errors}
          />
          <TimePickerField
            name="endTime"
            control={control}
            isTimeDisabled={isTimeDisabled}
            errors={errors}
          />
        </Box>

        <DialogActions>
          <ButtonCancelStyled onClick={onClose}>Cancel</ButtonCancelStyled>
          <ButtonStyledCustom type="submit">Save</ButtonStyledCustom>
        </DialogActions>
      </form>
    </LocalizationProvider>
  );
};
