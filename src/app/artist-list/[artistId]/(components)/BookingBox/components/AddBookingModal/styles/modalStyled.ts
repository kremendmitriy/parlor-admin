import styled from '@emotion/styled';
import { Dialog, TextField, Button } from '@mui/material';

export const DialogStyled = styled(Dialog)`
  .MuiDialog-paper {
    width: 400px;
    padding: 20px;
  }
`;

export const TextFieldStyled = styled(TextField)`
  margin-bottom: 16px;
`;

export const ButtonStyledCustom = styled(Button)`
  margin: 0 auto;
  color: black;
  background-color: lightgray;
`;

export const ButtonCancelStyled = styled(Button)`
  margin: 0 auto;
  background-color: darkred;
  color: white;
`;
