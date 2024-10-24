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
        <GrPrevious /> Prev
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
        Next <GrNext />
      </button>

      <div><p style={{ color: 'white', marginLeft: '20px' }}>Showing 10 of 50 Results</p></div>
    </div>
  );
};

export default Pagination;
