import { IconButton } from '@mui/material';
import {
   TaskAltOutlined,
   ManageHistoryOutlined,
   QueryBuilderOutlined,
   SmsOutlined,
} from '@mui/icons-material';
import { updateUserRequestStatus } from '@/app/(api)/updateUserRequestStatus';

export const ActionButtons = (
   formId: number,
   status: string,
   userRequestMessage: string,
   openDialog: (message: string) => void
) => {
   switch (status) {
      case 'new':
         return (
            <>
               <IconButton
                  color="primary"
                  onClick={() => updateUserRequestStatus(formId, 'processed')}
               >
                  <TaskAltOutlined />
               </IconButton>
               <IconButton
                  color="secondary"
                  onClick={() => updateUserRequestStatus(formId, 'in_progress')}
               >
                  <QueryBuilderOutlined />
               </IconButton>
               <IconButton
                  color="secondary"
                  onClick={() => openDialog(userRequestMessage)}
               >
                  <SmsOutlined />
               </IconButton>
            </>
         );
      case 'in_progress':
         return (
            <>
               <IconButton
                  color="primary"
                  onClick={() => updateUserRequestStatus(formId, 'processed')}
               >
                  <TaskAltOutlined />
               </IconButton>
               <IconButton
                  color="secondary"
                  onClick={() => openDialog(userRequestMessage)}
               >
                  <SmsOutlined />
               </IconButton>
            </>
         );
      case 'processed':
         return (
            <>
               <IconButton
                  color="primary"
                  onClick={() => updateUserRequestStatus(formId, 'in_progress')}
               >
                  <ManageHistoryOutlined />
               </IconButton>
               <IconButton
                  color="secondary"
                  onClick={() => openDialog(userRequestMessage)}
               >
                  <SmsOutlined />
               </IconButton>
            </>
         );
      default:
         return null;
   }
};
