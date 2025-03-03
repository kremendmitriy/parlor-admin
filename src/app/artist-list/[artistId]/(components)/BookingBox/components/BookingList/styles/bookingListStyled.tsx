import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { getRowBackgroundColor } from '../utils/getRowBackgroundColor';

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 400px;
`;

export const TableHeader = styled(Box)`
  margin-bottom: 10px;
  color: white;
  letter-spacing: 1px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TableRow = styled(Box)<{
  status?: 'Completed' | 'Cancelled' | 'Not Started';
}>`
  display: flex;
  min-width: 100%;
  flex-grow: 1;
  font-size: 13px;
  max-height: 40px;
  border: 1px solid #444;
  border-radius: 5px;
  margin-bottom: 3px;
  overflow: hidden;

  background-color: ${({ status }) =>
    status ? getRowBackgroundColor(status) : '#555'};
`;

export const TableCell = styled(Box)`
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: #555;
  align-items: center;
  text-align: left;
  color: white;
  padding: 5px;
  height: 40px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
