export const getRowBackgroundColor = (status: string) => {
  switch (status) {
    case 'Completed':
      return 'green';
    case 'Cancelled':
      return 'darkred';
    default:
      return;
  }
};
