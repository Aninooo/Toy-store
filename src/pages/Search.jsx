import React from 'react';
import { useLocation } from 'react-router-dom';

const Search = ({ query }) => {
  const location = useLocation();

  // You can perform your search logic here, maybe fetching from an API or filtering
  // your products based on the query.

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      {/* Display your search results here */}
    </div>
  );
};

export default Search;
