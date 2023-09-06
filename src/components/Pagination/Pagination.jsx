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

  const visiblePages = [];
  const maxVisiblePages = 8;
  const pageRange = 4;

  let startIndex = Math.max(currentPage - pageRange, 1);
  let endIndex = Math.min(startIndex + maxVisiblePages - 1, totalPages);

  const needEllipsisStart = startIndex > 1;
  const needEllipsisEnd = endIndex < totalPages;

  if (startIndex > 1) {
    visiblePages.push(1);
  }

  if (needEllipsisStart) {
    visiblePages.push('...');
  }

  for (let i = startIndex; i <= endIndex; i++) {
    visiblePages.push(i);
  }

  if (needEllipsisEnd) {
    visiblePages.push('...');
  }

  if (endIndex < totalPages) {
    visiblePages.push(totalPages);
  }

  return (
    <PaginWrapper>
      {pageNumbers.length > 1 && (
        <>
          <ArrowBtn onClick={prevPage} disabled={currentPage === 1}>
            <ArrowPrev disabled={currentPage === 1} />
          </ArrowBtn>
          <PaginationList>
            {visiblePages.map((page, index) => (
              <PaginListItem key={index}>
                {page === '...' ? (
                  <span>{page}</span>
                ) : (
                  <BtnItem
                    className={page === currentPage ? 'active' : ''}
                    onClick={() => (page !== '...' ? paginate(page) : null)}
                  >
                    {page}
                  </BtnItem>
                )}
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
