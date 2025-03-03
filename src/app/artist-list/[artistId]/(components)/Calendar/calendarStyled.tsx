import styled from '@emotion/styled';
import Calendar from 'react-calendar';

export const DayOffMarker = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background-color: #add8e6;
  border-radius: 0;
`;

export const CalendarStyled = styled(Calendar)`
  justify-content: center;
  align-items: center;
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

  margin: 0 auto;

  .react-calendar {
    width: 100%;
    background: #333;
    color: #fff;
    font-family: Arial, sans-serif;
    overflow: hidden;
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    gap: 3px;
    align-items: center;
    padding-bottom: 10px;

    border-radius: 4px;
  }

  .react-calendar__navigation button {
    background-color: #555;
    color: #fff;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .react-calendar__navigation button:hover {
    background-color: #666;
  }

  .react-calendar__month-view__days__day {
    flex-basis: auto;
    border-radius: 5px;
    height: 40px;
    width: 40px;
    transition: background-color 0.3s, color 0.3s;
  }

  .react-calendar__month-view__weekdays__weekday {
    display: flex;
    justify-content: center;
    align-items: center;

    abbr {
      text-decoration: none;
    }
  }

  .react-calendar__month-view__weekdays__weekday--weekend {
    color: rgba(255, 0, 0, 0.6);
  }

  .react-calendar__month-view__days__day--weekend {
    color: rgba(255, 0, 0, 0.6);
  }

  .react-calendar__tile {
    position: relative;
    font-size: 16px;
    cursor: pointer;
  }

  .react-calendar__tile:disabled {
    background: #666;
    pointer-events: none;
    cursor: none;
  }

  .react-calendar__tile--active {
    background-color: green;
    color: #fff;
  }

  .react-calendar__tile--now {
    background-color: #444;
    color: #fff;
    border: 1px solid #666;
  }
`;
