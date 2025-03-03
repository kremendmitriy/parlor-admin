import React, { useState } from 'react';

import { ButtonStyledCustom, DialogStyled } from './styles/modalStyled';
import { BookingForm } from './BookingForm';

export const BookingModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ButtonStyledCustom variant="outlined" onClick={handleOpen}>
        Add Booking
      </ButtonStyledCustom>

      <DialogStyled open={open}>
        <BookingForm onClose={handleClose} />
      </DialogStyled>
    </>
  );
};
