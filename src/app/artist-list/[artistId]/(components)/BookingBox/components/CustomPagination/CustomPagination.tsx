import { CustomPaginationProps } from '../../types/paginationProps';
import { getStartEndPage, getTotalPages } from './utils/paginationUtils';
import {
  PaginationButton,
  PaginationContainer,
  PaginationText,
} from './styles/paginationStyled';

export const CustomPagination: React.FC<CustomPaginationProps> = ({
  page,
  rowsPerPage,
  count,
  onPageChange,
}) => {
  const { start, end } = getStartEndPage(page, rowsPerPage, count);
  const totalPages = getTotalPages(count, rowsPerPage);

  return (
    <PaginationContainer>
      <PaginationButton
        onClick={() => onPageChange?.(page - 1)}
        disabled={page === 0}
      >
        {'<'}
      </PaginationButton>
      <PaginationText>{`${start}-${end} of ${count}`}</PaginationText>
      <PaginationButton
        onClick={() => onPageChange?.(page + 1)}
        disabled={page >= totalPages - 1}
      >
        {'>'}
      </PaginationButton>
    </PaginationContainer>
  );
};
