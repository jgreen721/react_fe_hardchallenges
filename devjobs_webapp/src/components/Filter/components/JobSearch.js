import React, { useState } from "react";

const JobSearch = ({ title, setTitle }) => {
  // const [query, setQuery] = useState("");
  return (
    <div className="job-search-input-div">
      <img
        className="search-icon"
        src="./assets/desktop/icon-search.svg"
        alt=""
      />
      <input
        type="text"
        name="title"
        value={title}
        className="search-input"
        placeholder="Filter by title, companies, expertise"
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
};

export default JobSearch;
