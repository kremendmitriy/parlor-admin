import { useState } from 'react';

export const useUserModal = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [message, setMessage] = useState('');

   const openDialog = (message: string) => {
      setMessage(message);
      setIsOpen(true);
   };

   const closeDialog = () => {
      setMessage('');
      setIsOpen(false);
   };

   return { isOpen, message, openDialog, closeDialog };
};
