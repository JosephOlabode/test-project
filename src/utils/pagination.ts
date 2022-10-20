export const getPagination = (page: number, size: number) => {
  const limit = size ? size : 3;
  const from = page == 1 ? 1 : page * limit;
  const to = page ? from + size : size;
  return { from: from - 1, to };
};
