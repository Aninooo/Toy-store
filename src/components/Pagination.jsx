import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {pageNumbers.map(page => (
        <button
          key={page}
          className={`pagination-button ${page === currentPage ? 'active' : ''}`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="pagination-button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
