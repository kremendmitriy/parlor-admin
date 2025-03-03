export interface CustomPaginationProps {
  page: number;
  rowsPerPage: number;
  count: number;
  onPageChange: (newPage: number) => void;
}
