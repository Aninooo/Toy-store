import React from 'react';
import { useLocation } from 'react-router-dom';

const Search = ({ query }) => {
  const location = useLocation();

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
    </div>
  );
};

export default Search;
