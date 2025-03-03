import { Controller } from 'react-hook-form';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';

export const TimePickerField = ({
  name,
  control,
  isTimeDisabled,
  errors,
}: any) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <TimePicker
        label={name === 'startTime' ? 'Start Time' : 'End Time'}
        ampm={false}
        value={field.value ? dayjs(field.value) : null}
        onChange={(newValue) => field.onChange(newValue)}
        shouldDisableTime={isTimeDisabled}
        slotProps={{
          textField: {
            fullWidth: true,
            margin: 'normal',
            error: !!errors[name],
            helperText: errors[name]?.message,
          },
        }}
      />
    )}
  />
);
