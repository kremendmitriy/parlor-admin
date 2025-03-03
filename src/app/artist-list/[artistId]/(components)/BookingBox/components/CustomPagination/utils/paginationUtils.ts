export const getStartEndPage = (
  page: number,
  rowsPerPage: number,
  count: number,
) => {
  const start = page * rowsPerPage + 1;
  const end = Math.min((page + 1) * rowsPerPage, count);
  return { start, end };
};

export const getTotalPages = (count: number, rowsPerPage: number) => {
  return Math.ceil(count / rowsPerPage);
};
