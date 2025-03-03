import { validationSchema } from './../../../artist-list/[artistId]/(components)/BookingBox/components/AddBookingModal/validationSchema/validationSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import dayjs from 'dayjs';
import { addBooking } from '@/app/(api)/booking/addBooking';
import { useQueryClient, useMutation } from '@tanstack/react-query';

interface BookingFormValues {
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  tattooType: string;
  startTime: null | string;
  endTime: null | string;
}

export const useBookingForm = (
  artistId: string,
  formattedDate: string,
  bookedTimes: string[],
  onClose: () => void,
) => {
  const queryClient = useQueryClient();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<BookingFormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      customerName: '',
      customerPhone: '',
      customerEmail: '',
      tattooType: '',
      startTime: null,
      endTime: null,
    },
    shouldUnregister: false,
  });

  const isTimeDisabled = (value: Date | null) => {
    if (!value || !Array.isArray(bookedTimes)) return false;
    const formattedTime = dayjs(value).format('HH:mm');

    return bookedTimes.some((slot) => {
      const [start, end] = slot.split('-');
      return formattedTime >= start && formattedTime <= end;
    });
  };

  const mutation = useMutation({
    mutationKey: ['addBooking'],
    mutationFn: addBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['bookings', artistId, formattedDate],
      });
      onClose();
      reset();
    },
    onError: (error) => {
      console.error('Error creating booking:', error);
    },
  });

  const onSubmit = async ({
    startTime,
    endTime,
    ...rest
  }: BookingFormValues) => {
    if (!startTime || !endTime) {
      ['startTime', 'endTime'].forEach((field) =>
        setError(field as keyof BookingFormValues, {
          type: 'manual',
          message: 'Choose a valid time',
        }),
      );
      return;
    }

    const formattedStart = dayjs(startTime).format('HH:mm');
    const formattedEnd = dayjs(endTime).format('HH:mm');

    if (Array.isArray(bookedTimes)) {
      const isOverlapping = bookedTimes.some((slot) => {
        const [start, end] = slot.split('-');
        return formattedStart < end && formattedEnd > start;
      });

      if (isOverlapping) {
        ['startTime', 'endTime'].forEach((field) =>
          setError(field as keyof BookingFormValues, {
            type: 'manual',
            message: 'Choose another time',
          }),
        );
        return;
      }
    }

    const bookingData = {
      ...rest,
      startTime: formattedStart,
      endTime: formattedEnd,
      date: formattedDate,
      artistId,
      calendarCellStatus: 'booked',
    };

    console.log('bookingData', bookingData);

    mutation.mutate(bookingData);
  };

  return { control, register, handleSubmit, errors, isTimeDisabled, onSubmit };
};
