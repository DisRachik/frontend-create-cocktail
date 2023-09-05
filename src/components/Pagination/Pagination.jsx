import PropTypes from 'prop-types';
import {
  ArrowBtn,
  ArrowNext,
  ArrowPrev,
  BtnItem,
  PaginListItem,
  PaginWrapper,
  PaginationList,
} from './Pagination.styled';

export const Pagination = ({
  paginate,
  prevPage,
  nextPage,
  currentPage,
  totalPages,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginWrapper>
      {pageNumbers.length > 1 && (
        <>
          <ArrowBtn onClick={prevPage} disabled={currentPage === 1}>
            <ArrowPrev />
          </ArrowBtn>
          <PaginationList>
            {pageNumbers.map(number => (
              <PaginListItem key={number}>
                <BtnItem
                  className={number === currentPage ? 'active' : ''}
                  onClick={() => paginate(number)}
                >
                  {number}
                </BtnItem>
              </PaginListItem>
            ))}
          </PaginationList>
          <ArrowBtn onClick={nextPage} disabled={currentPage === totalPages}>
            <ArrowNext />
          </ArrowBtn>
        </>
      )}
    </PaginWrapper>
  );
};

Pagination.propTypes = {
  paginate: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};
