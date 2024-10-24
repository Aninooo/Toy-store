import React from 'react';
import './Pagination.css';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <GrPrevious />
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
        <GrNext />
      </button>
    </div>
  );
};

export default Pagination;
