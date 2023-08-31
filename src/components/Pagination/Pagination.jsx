import {
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
        Prev
      </button>
      <PaginationList>
        {pageNumbers.map(number => (
          <PaginListItem key={number}>
            <button
              onClick={() => paginate(number)}
              disabled={currentPage === (totalDrinks / drinksPerPage).length}
            >
              {number}
            </button>
          </PaginListItem>
        ))}
      </PaginationList>
      <button onClick={nextPage}>Next</button>
    </PaginWrapper>
  );
};
