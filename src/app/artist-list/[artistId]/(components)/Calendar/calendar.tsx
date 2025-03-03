import { Box } from '@mui/material';
import { isDateInArray } from '../../(utils)/isDateInArray';

import { CalendarStyled, DayOffMarker } from './calendarStyled';
import { Value } from 'react-calendar/src/shared/types.js';

interface DayStatuses {
  date: string;
}

interface CalendarWithDayOffProps {
  selectedDate: string;
  setSelectedDate: (date: Date) => void;
  dayStatuses: DayStatuses[];
}

export const CalendarWrapper: React.FC<CalendarWithDayOffProps> = ({
  selectedDate,
  setSelectedDate,
  dayStatuses,
}) => {
  return (
    <Box>
      <CalendarStyled
        onChange={(value: Value) => {
          if (value instanceof Date) {
            setSelectedDate(value);
          }
        }}
        value={selectedDate}
        minDate={new Date()}
        showNeighboringMonth={false}
        locale="en-US"
        tileContent={({ date }) =>
          isDateInArray(date, dayStatuses) ? <DayOffMarker /> : null
        }
      />
    </Box>
  );
};
