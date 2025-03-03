import React from 'react';
import { Button } from '@mui/material';

interface DayOffButtonProps {
  actionType: 'add' | 'delete';
  isSubmitting: boolean;
  isDayOff: boolean;
  formattedDate: string | null;
  onAction: (actionType: 'add' | 'delete') => void;
}

export const DayOffActionButton: React.FC<DayOffButtonProps> = ({
  actionType,
  isSubmitting,
  isDayOff,
  formattedDate,
  onAction,
}) => {
  const isActionDisabled =
    !formattedDate || isSubmitting || (actionType === 'delete' && !isDayOff);

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => onAction(actionType)}
      disabled={isActionDisabled}
    >
      {isSubmitting
        ? 'Submitting...'
        : isDayOff
        ? 'Delete Day Off'
        : 'Create Day Off'}
    </Button>
  );
};
