const paginateCars = ({ arr, limit, currentPage }) => {
  const newArr = [...arr];
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  return newArr.slice(0, endIndex);
};

export default paginateCars;
