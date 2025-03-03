import { useMemo, useState } from 'react';

export const usePagination = (totalItems: number, rowsPerPage: number) => {
  const [page, setPage] = useState(0);

  const paginatedItems = useMemo(
    () => (items: any[]) =>
      items.slice(page * rowsPerPage, (page + 1) * rowsPerPage),
    [page, rowsPerPage],
  );

  return {
    page,
    setPage,
    paginatedItems,
    totalPages: Math.ceil(totalItems / rowsPerPage),
  };
};
