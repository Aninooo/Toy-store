import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pagination.css';

const Pagination = ({ currentPage, onPageChange }) => {
  const navigate = useNavigate();
  const pageNumbers = [1, 2, 3, 4, 5]; // Hardcoded page numbers

  const handlePageChange = (page) => {
    onPageChange(page);
    navigate(`/newarrivals/page/${page}`);
  };

  return (
    <div className="pagination">
      {/* Previous Button */}
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
        disabled={currentPage === pageNumbers.length}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
