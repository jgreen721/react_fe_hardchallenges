import React from "react";
import { FaSearch } from "react-icons";

const SearchBtn = ({ getSearchParams }) => {
  return (
    <button onClick={getSearchParams} className="search-btn">
      Search
    </button>
  );
};

export default SearchBtn;
