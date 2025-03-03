import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const BoxContainer = styled(Box)`
  background-color: #212121;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px; /* p: 3 */
`;

export const InnerBox = styled(Box)`
  display: grid;
  grid-template-columns: minmax(250px, 400px) minmax(250px, 400px);
  gap: 16px; /* gap: 3 */
  margin-top: 16px; /* mt: 3 */
  margin-bottom: 16px; /* mb: 3 */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #424242;
  padding: 16px; /* p: 2 */
`;
