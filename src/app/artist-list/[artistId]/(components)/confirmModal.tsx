import { Box, Typography, Button, Modal } from '@mui/material';

interface ConfirmModalProps {
   open: boolean;
   onClose: () => void;
   onConfirm: () => void;
   title: string;
   description: string;
   confirmText?: string;
   cancelText?: string;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
   open,
   onClose,
   onConfirm,
   title,
   description,
   confirmText = 'Yes',
   cancelText = 'No',
}) => {
   return (
      <Modal open={open} onClose={onClose}>
         <Box
            sx={{
               p: 4,
               bgcolor: 'grey.800',
               color: 'white',
               borderRadius: '8px',
               maxWidth: 400,
               margin: 'auto',
               mt: '20vh',
            }}
         >
            <Typography variant="h6">{title}</Typography>
            <Typography sx={{ mt: 2 }}>{description}</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
               <Button
                  sx={{ bgcolor: 'blue', color: 'white', mr: 2 }}
                  onClick={onConfirm}
               >
                  {confirmText}
               </Button>
               <Button
                  sx={{ bgcolor: 'grey.600', color: 'white' }}
                  onClick={onClose}
               >
                  {cancelText}
               </Button>
            </Box>
         </Box>
      </Modal>
   );
};
