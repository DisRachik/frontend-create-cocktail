import {
  ArrowNext,
  ArrowPrev,
  BtnItem,
  PagItem,
  PaginListItem,
  PaginWrapper,
  PaginationList,
} from './Pagination.styled';

export const Pagination = ({
  drinksPerPage,
  totalDrinks,
  paginate,
  prevPage,
  nextPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDrinks / drinksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginWrapper>
      <button onClick={prevPage} disabled={currentPage === 1}>
        <ArrowPrev />
      </button>
      <PaginationList>
        {pageNumbers.map(number => (
          <PaginListItem key={number}>
            <BtnItem onClick={() => paginate(number)}>{number}</BtnItem>
          </PaginListItem>
        ))}
      </PaginationList>
      <button
        onClick={prevPage}
        disabled={currentPage === (totalDrinks / drinksPerPage).length}
      >
        <ArrowNext />
      </button>
    </PaginWrapper>
  );
};
