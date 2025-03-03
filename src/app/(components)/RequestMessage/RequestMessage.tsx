import {
   Button,
   Dialog,
   DialogTitle,
   DialogContent,
   DialogActions,
   Typography,
} from '@mui/material';

interface DialogProps {
   clientMessage: string;
   isOpen: boolean;
   onClose: () => void;
}

export const ClientMessageDialog = ({
   clientMessage,
   isOpen,
   onClose,
}: DialogProps) => {
   return (
      <Dialog
         open={isOpen}
         onClose={onClose}
         maxWidth="sm"
         fullWidth={true}
         PaperProps={{
            sx: {
               width: '500px',
               height: '300px',
               display: 'flex',
               flexDirection: 'column',
            },
         }}
      >
         <DialogTitle>Customer message</DialogTitle>
         <DialogContent
            sx={{
               overflowY: 'auto',
            }}
         >
            <Typography>{clientMessage || ''}</Typography>
         </DialogContent>
         <DialogActions>
            <Button onClick={onClose} color="primary">
               Close
            </Button>
         </DialogActions>
      </Dialog>
   );
};
